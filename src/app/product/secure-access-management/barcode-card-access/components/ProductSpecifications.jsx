

import React from 'react';
import styles from '@/styles/BarcodeCardAccess/ProductSpecifications.module.css';

const specifications = [
  { parameter: 'Optical System', details: 'CMOS Capture Light Source: 617nm LED' },
  { parameter: 'Lighting source', details: '6500K LED' },
  { parameter: 'Reading Distance', details: '25 - 250mm' },
  { parameter: 'Reading Speed', details: '< 0.2 seconds' },
  { parameter: 'Auto mode reading interval', details: '< 0.5 seconds' },
  { parameter: 'Resolution', details: '0.1mm (4mil)' },
  { parameter: 'Reading code system 2D', details: 'QR Code, PDF417, Barcode' },
  { parameter: 'Voltage & Current', details: 'DC 5V 120mA' },
  { parameter: 'Working temperature', details: '-20~55 degrees Celsius' },
  { parameter: 'Connectivity', details: 'WiFi, LAN' },
  { parameter: 'Access Gate', details: 'Tripod, Flap Barrier, Turnstile, Magnetic gate, etc.' },
  { parameter: 'Working Mode', details: 'Online & Offline' },
  { parameter: 'User Capacity', details: '500 / 1000' },
  { parameter: 'Logs capacity', details: '5000 / 10000 transaction records' },
];

const ProductSpecifications = () => {
  return (
    <section className={styles.specsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>QRcode / Barcode Product Specifications</h2>
        <div className={styles.tableContainer}>
          <table className={styles.specsTable}>
            <thead>
              <tr>
                <th className={styles.paramHeader}>Parameters</th>
                <th className={styles.detailsHeader}>Details</th>
              </tr>
            </thead>
            <tbody>
              {specifications.map((spec, index) => (
                <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                  <td className={styles.parameter}><strong>{spec.parameter}</strong></td>
                  <td className={styles.details}>{spec.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecifications;
