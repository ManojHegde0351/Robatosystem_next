import dynamic from 'next/dynamic';

const ParkingGuidanceClient = dynamic(
  () => import('./ParkingGuidance.client'),
 
);

const ParkingGuidance = () => {
  const benefits = [
    'Direct the motorist about parking lots',
    'Smart Parking Sign Insist motorist to come again',
    'Increases parking revenue by 20%',
    'Decreases parking management cost',
    'Reduce the search time for parking areas',
    'Increase your Brand Image',
    'Enhances overall parking experience'
  ];

  const images = [
    '/images/products/LEDParking/parking_direction_signage1.webp',
    '/images/products/LEDParking/Parking_Signage_slide2.webp',
    '/images/products/LEDParking/led_parking_signage_.webp'
  ];

  return <ParkingGuidanceClient benefits={benefits} images={images} />;
};

export default ParkingGuidance;