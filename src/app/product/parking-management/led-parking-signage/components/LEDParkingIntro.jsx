import dynamic from 'next/dynamic';
import styles from '@/styles/parking/led/LEDParkingIntro.module.css';

// Dynamically import the client component with no SSR
const LEDParkingIntroClient = dynamic(
  () => import('./LEDParkingIntro.client'),
 
);

const LEDParkingIntro = () => {
  const content = {
    title: 'Smart Parking Signs - Key to Guide Motorists',
    paragraphs: [
      'Robato Systems provides all sorts of parking digital guidance for both on-street and off-street car park locations.',
      'Our Variable Message Sign display real-time space availability and direction to available lots benefits the motorist to find the free available space on particular floor and zone. Moreover, digital parking signs approach to reduce traffic flow within a car park in optimized way.',
      'Robato Systems is a leading manufacturer of all types of Parking Signage Boards. We offer a wide range of Parking Display Boards / Signages such as Static Text, Direction Signs, Moving Text, Variable Message Sign and Static text Sign from Single color to RGB and Full color to address the need of smart parking guidance solutions.',
      'The signaling of free parking allows vehicles in transit to use targeted routes, avoiding that motorists insist on the most known parking areas, thus optimizing the occupation of all available parking areas.',
      'A more conscious itinerary guides the driver to his destination and helps to reduce the typical behavior of those who do not know where to go (sudden braking, fast direction changes or slowdowns), also leading to an increase in safety for vehicles and pedestrians.'
    ]
  };

  return <LEDParkingIntroClient content={content} />;
};

export default LEDParkingIntro;
