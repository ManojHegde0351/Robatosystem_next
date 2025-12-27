import AnimatedParkingBenefits from './AnimatedParkingBenefits';

const benefits = [
  'The man-power cost will decrease with RFID based automatic parking system.',
  'Only registered vehicles can get entry to parking area with RFID Tags.',
  'The RFID based Automatic Parking system increases security and automized parking facility.',
  'Parking data availability for management to generate several types of reports.',
  'User friendly parking management software – Online and offline.',
  'Automatic Check-in and check-out in fast manner without stopping the vehicles.',
  'Reduce the traffic jams in the parking premises.',
  'It reduces the emission of gases due to burning of fuel by avoiding long queues of the vehicles in the parking lots.',
  'RFID technology is much more secure compared to other networks.',
  'RFID based automatic parking system will increase the efficiency of parking lots.',
  'Automatic parking system attracts the parkers, enhance revenues of the parking owners.'
];

const ParkingBenefits = () => {
  return <AnimatedParkingBenefits benefits={benefits} />;
};

export default ParkingBenefits;
