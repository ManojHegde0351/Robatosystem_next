// src/app/contact/OfficeMapSection.jsx


import React, { useMemo } from "react";
import OfficeCard from "./OfficeCard";
import styles from "@/styles/Contact/contact.module.css";


const officeLocations = [
  {
    id: "india",
    name: "India Head Office",
    address: "11 avenue, GH-03, Gaurcity 2, sector-16c, Greater Noida west, Noida, 201318",
    phone: "+91 7888711383",
    email: "sales@robatosystems.com",
    position: { lat: 28.5355, lng: 77.3910 },
    workingHours: "Mon - Fri: 9:00 AM - 6:00 PM",
  },
  {
    id: "australia",
    name: "Australia Office",
    address: "124 Westwood Dr, Burnside VIC 3023, Melbourne, Australia",
    phone: "+61 478251187",
    email: "sales@robatosystems.com",
    position: { lat: -37.8136, lng: 144.9631 },
    workingHours: "Mon - Fri: 9:00 AM - 5:00 PM",
  },
  {
    id: "canada",
    name: "Canada Office",
    address: "23 Overstone Rd, Georgetown, ON L7G 0N5, Canada",
    phone: "+1 647-123-4567",
    email: "sales@robatosystems.com",
    position: { lat: 43.6532, lng: -79.3832 },
    workingHours: "Mon - Fri: 9:00 AM - 5:00 PM",
  },
];

export default function OfficeMapSection() {
  // memoize style for maps container
  const mapContainer = useMemo(() => ({ width: "100%", height: "100%" }), []);

  return (
    <div className={styles.officeMapsGrid}>
      {officeLocations.map((office) => (
        <OfficeCard key={office.id} office={office} mapContainerStyle={mapContainer} />
      ))}
    </div>
  );
}
