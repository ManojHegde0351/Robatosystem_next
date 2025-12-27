import React from "react";
import ContactHero from "./ContactHero";
import OfficeMapSection from "./OfficeMapSection";
import ContactForm from "./ContactForm";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from "@/styles/Contact/contact.module.css";

export const metadata = {
  title: "Contact | Robato System",
  description: "Get in touch with Robato System for Industry 4.0 Automation & Secure Access Solutions. Find our offices and contact information",
};

export default function ContactPage() {
  return (
    <div className={styles.pageWrap}>
      <ContactHero />
      <AnimateOnScroll delay={0.2} duration={0.6}>
        <section className={styles.whiteSection}>
          <div className={styles.container}>
            <h2 className={styles.contactDetailsTitle}>Contact Details</h2>
            <h3 className={styles.branchesSubtitle}>Our Branches</h3>
            <AnimateOnScroll delay={0.4} duration={0.6}>
              <OfficeMapSection />
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.6} duration={0.6}>
              <ContactForm />
            </AnimateOnScroll>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}
