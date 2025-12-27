import Link from 'next/link';
import AnimatedStatsSection from '@/app/homepage/components/AnimatedStatsSection';
import '@/styles/home/buildYourDream.css';

const stats = [
  { value: 1250, label: 'Successfully Project Finished', suffix: '+' },
  { value: 450, label: 'Happy clients', suffix: '+' },
  { value: 13, label: 'Award wons',suffix: '+'},
  { value: 2000000, label: 'Social Followers', format: 'M+',suffix:'+' }
];

export default function BuildYourDream() {
  return (
    <section className="build-dream-section relative z-10 bg-white">
      <div className="px-4 md:px-10 lg:px-40">
        <div className="build-dream-container">

          {/* LEFT CONTENT — FULL SSR */}
          <div className="build-dream-left">
            <p className="build-dream-subtitle">PARKING KNOWLEDGE CENTRE</p>
            <h2 className="build-dream-title">CONSULT OUR PARKING EXPERT</h2>

            <div className="contact-buttons">
              <div className="talk-to-us-container">
                <div className="talk-to-us-text">
                  TALK TO US →
                </div>
                <div className="dropdown-social-icons">
                  <a href="https://wa.me/1234567890" className="dropdown-social-icon whatsapp" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                  <a href="skype:username?chat" className="dropdown-social-icon skype" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.5 13.5c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5h-1.2c-.1-.5-.2-.9-.4-1.3l.9-.9c.2-.2.2-.5 0-.7l-.7-.7c-.2-.2-.5-.2-.7 0l-.9.9c-.4-.2-.8-.3-1.3-.4V7.5c0-.3-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5v1.2c-.5.1-.9.2-1.3.4l-.9-.9c-.2-.2-.5-.2-.7 0l-.7.7c-.2.2-.2.5 0 .7l.9.9c-.2.4-.3.8-.4 1.3H7.5c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5h1.2c.1.5.2.9.4 1.3l-.9.9c-.2.2-.2.5 0 .7l.7.7c.2.2.5.2.7 0l.9-.9c.4.2.8.3 1.3.4v1.2c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-1.2c.5-.1.9-.2 1.3-.4l.9.9c.2.2.5.2.7 0l.7-.7c.2-.2.2-.5 0-.7l-.9-.9c.2-.4.3-.8.4-1.3h1.2zM12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
                    </svg>
                  </a>
                  <a href="mailto:contact@example.com" className="dropdown-social-icon mail" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                  <a href="tel:+1234567890" className="dropdown-social-icon phone" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <Link href="/contact" className="request-demo-btn">
                REQUEST DEMO
              </Link>
            </div>
          </div>

          <AnimatedStatsSection stats={stats} />

        </div>
      </div>
    </section>
  );
}
