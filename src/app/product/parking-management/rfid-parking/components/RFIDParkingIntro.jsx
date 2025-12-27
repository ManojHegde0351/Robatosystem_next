import AnimatedRFIDParkingIntro from './AnimatedRFIDParkingIntro';

const description = [
  'Enhance your parking experience with our RFID based Automatic parking solution that completely transforms the way vehicles move in and out of buildings.',
  'Robato systems provides automatic parking system embedded with RFID technology to help quick and secure movement of vehicles in parking areas. We are offering Automatic Parking System for gated communities, corporate office buildings, shopping complexes, residential apartments, hospitals and academic institutions. Our RFID based Automatic parking solution works in the integration of RFID tags, RFID readers and automatic boom barriers to offer multiple benefits.',
  'RFID is known as Radio-frequency identification, an automatic identification method to read data from RFID tags. RFID technology is a ground-breaking development that changed the pace of many industries including the parking industry. RFID networks include different types of automation technologies such as RFID readers, RFID writers, RFID barcode scanners, RFID smart sensors and RFID controllers.',
  'The main components of RFID based Automatic parking system are RFID readers, RFID tags, computers, Boom barriers, software and VMS parking signage boards. The RFID readers, RFID tags and boom barriers control the check-ins and checkouts of the parking premises. The VMS parking signage boards provide the information to parkers about the vacant and non-vacant lots in the parking areas.',
  'RFID technology also collects the parking fees automatically without stopping the vehicles. The RFID technology has successfully created an entirely automatic parking system that requires very low work force for operation. The RFID technology based Automatic parking system minimizes the need of work force and controls the parking areas automatically with vehicle control and identification systems.',
  'In addition, it automatically identifies the vehicle entries and exits and collects the parking lot charges via this system. It provides fast, secure and convenient check-in/check-out of vehicles.'
];

const title = 'RFID Automatic Parking Management';

const RFIDParkingIntro = () => {
  return <AnimatedRFIDParkingIntro title={title} description={description} />;
};

export default RFIDParkingIntro;
