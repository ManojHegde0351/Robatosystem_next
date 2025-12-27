import styles from '@/styles/Partner/partner.module.css';
import PartnerFormClient from './PartnerFormClient';

export default function PartnerForm() {
  return (
    <div className={styles.formContainer}>
      <h2>Partner Application</h2>
      <div className={styles.loadingMessage}>
       <PartnerFormClient/>
      </div>
    </div>
  );
}
