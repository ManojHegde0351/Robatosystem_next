

import styles from '@/styles/parking/led/SpecificationsTable.module.css';

const SpecificationsTable = () => {
  const specifications = [
    { parameter: 'Application', value: 'Smart Parking Guidance Projects' },
    { parameter: 'Mounting Type', value: 'Wall, Stand' },
    { parameter: 'Communication', value: 'RS485, RS232, Ethernet, WiFi, Bluetooth, Cellular SIM' },
    { parameter: 'Operating Temperature', value: '0 to 70 degree Celsius' },
    { parameter: 'Lighting Type', value: 'LED' },
    { parameter: 'Language Supported', value: 'English, French, Hindi, many others' },
    { parameter: 'Voltage', value: '220-240 V AC' },
    { parameter: 'Color of Display', value: 'Red, Green, White, Blue and Full Color' },
    { parameter: 'Character Size', value: 'Custom - as per your need' },
    { parameter: 'Message Type', value: 'Variable Message – Run time data input' },
    { parameter: 'Display Size', value: 'Custom - as per your need' },
    { parameter: 'Text Scroll', value: 'Supported' },
    { parameter: 'Brightness Control', value: 'Automatic' },
    { parameter: 'Product Design Grade', value: 'Industrial Grade – IP65' },
    { parameter: 'Indoor / Outdoor', value: 'Both' },
    { parameter: 'Weather Proof', value: 'Yes' },
  ];

  return (
    <section className={styles.specificationsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Digital Parking Display Specifications</h2>
        <div className={styles.tableContainer}>
          <table className={styles.specsTable}>
            <thead>
              <tr>
                <th>Parameters</th>
                <th>Specifications</th>
              </tr>
            </thead>
            <tbody>
              {specifications.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                  <td className={styles.parameterCell}>{item.parameter}</td>
                  <td className={styles.valueCell}>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsTable;