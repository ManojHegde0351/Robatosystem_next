import ProductHero from "./ProductHero";
import ProductService from "./ProductService";

export const metadata = {
  title: "Products | Robato System",
  description: "Explore Robato System's comprehensive range of Industry 4.0 Automation & Secure Access Solutions for modern businesses",
};

export default function Products() {
  return (
    <div>
      <ProductHero/>
      <ProductService/>
    </div>
  );
}
