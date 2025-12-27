
import styles from '@/styles/home/FAQ.module.css';
import Image from 'next/image';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We provide comprehensive automation and secure access solutions for Industry 4.0.'
  },
  {
    question: 'How can I get a quote?',
    answer: 'Simply fill out the form and we\'ll get back to you with a customized quote.'
  },
  {
    question: 'What is your response time?',
    answer: 'We typically respond within 24-48 hours for quote requests.'
  },
  {
    question: 'Do you provide technical support?',
    answer: 'Yes, we offer comprehensive technical support and maintenance services for all our solutions.'
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve various industries including manufacturing, healthcare, education, parking management, and commercial sectors.'
  }
];

export default function FAQ() {
  return (
    <section className={styles['request-quote'] + ' montserrat'}>
      <div className={styles.container}>
        <div className={styles['quote-container']}>
          {/* Image */}
          <div className={styles['quote-image-container']}>
            <Image 
              src="/images/FAQ-Background.webp" 
              alt="Ready to Work Together" 
              width={400}
              height={300}
              className={styles['quote-main-image']}
            />
          </div>

          {/* FAQ - SEO visible */}
          <div className={styles['faq-section']}>
            <h2>Learn More From</h2>
            <h3>Frequently Asked Questions</h3>

            <div className={styles['faq-list']}>
              {faqs.map((faq, index) => (
                <div key={index} className={styles['faq-item']}>
                  <h4 className={styles['faq-question']}>
                    {faq.question}
                  </h4>
                  <div className={styles['faq-answer']}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
