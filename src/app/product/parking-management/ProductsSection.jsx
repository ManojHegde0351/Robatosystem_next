import styles from '@/styles/parking/ProductsSection.module.css';
import Image from 'next/image';

const products = [
  { id: 1, name: 'Parking Indicators', image: '/images/products/Parking-indicator.webp' },
  { id: 2, name: 'Indoor Display', image: '/images/products/indoor-display.webp' },
  { id: 3, name: 'Outdoor Display', image: '/images/products/outdoor-display.webp' },
  { id: 4, name: 'Parking Control', image: '/images/products/Parking-controller.webp' },
  { id: 5, name: 'Parking Sign', image: '/images/products/Parking-Sign.webp' },
  { id: 6, name: 'Parking Software', image: '/images/products/Parking-Software.webp' },
  { id: 7, name: 'Boom Barrier', image: '/images/products/Boom-Barrier.webp' },
  { id: 8, name: 'ANR Cameras', image: '/images/products/ANPR-Camera.webp' }
];

const ProductsSection = () => {
  return (
    <section className={styles.productsSection} id="solutions">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Our Parking Solutions
        </h2>
        
        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={styles.productCard}
            >
              <div className={styles.productImage}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={150}
                  className={styles.image}
                />
              </div>
              <h3 className={styles.productName}>{product.name}</h3>
            </div>
          ))}
        </div>

        <div className={styles.description}>
          <p>
            Robato Systems has been involved in this core from many years and has delivered parking 
            guidance systems across the globe. All the systems delivered by us are capable enough to 
            manage the challenges of parking and are working to the best satisfaction of our valued 
            customers. We setup ultrasonic Parking guidance systems for stacked parkings, corporate 
            parks, shopping malls and tailor the system according to the requirements of the clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
