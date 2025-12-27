
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "@/styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* TOP CTA SECTION */}
      <div className="footer-top">
        <div className="subscribe-section">
          <h3>Get in Touch</h3>
          <p className="news-text">Receive the latest news about our service & products</p>
          <div className="footer-cta-buttons">
            <input
              type="text"
              placeholder="Enter your name"
              className="subscribe-input"
              suppressHydrationWarning
            />
            <button 
              className="footer-cta-button"
              suppressHydrationWarning
            >
              Subscribe →
            </button>
          </div>
        </div>

        <div className="divider"></div>

        <div className="footer-cta-section">
          <div className="footer-cta-buttons">
            <a href="/becomeAPartner" className="footer-cta-button">
              Become a Partner
            </a>
            <a href="/contact" className="footer-cta-button">
              Book Free Demo
            </a>
          </div>
        </div>
      </div>

      {/* GRID SECTION */}
      <div className="footer-content">
        <div className="footer-grid">

        
          <div className="footer-column">
          
            <div className="footer-logo">
              <Link href="/" className="logo-link">
                <Image
                  src="/images/logo.png"
                  alt="Robato System Logo"
                  width={150}
                  height={60}
                  className="footer-logo-img"
                  priority
                />
              </Link>
            </div>
            <h3>Useful Links</h3>
            <div className="divider"></div>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* COLUMN 2 - Parking Solutions */}
          <div className="footer-column">
            <h3>Products & Solutions</h3>
            <div className="divider"></div>
            <ul className="footer-links">
              <li><Link href="/product/parking-management">Parking Guidance System</Link></li>
              <li><Link href="/product/parking-management/sensor-based-parking">Sensor Based Parking</Link></li>
              <li><Link href="/product/parking-management/rfid-parking">RFID Automatic Parking</Link></li>
              <li><Link href="/product/parking-management/led-parking-signage">Parking Signage</Link></li>
              <li><Link href="/product/parking-management/rfid-parking">Mixed Parking</Link></li>
              <li><Link href="/product/parking-management/handheld-parking-machine">Handheld Parking POS</Link></li>
              <li><Link href="/product/secure-access-management/esd-access-control-system">ESD Access ControL</Link></li>
              <li><Link href="/product/secure-access-management/barcode-card-access">Qrcode Access Control</Link></li>
              <li><Link href="/product/secure-access-management/barcode-rfid-access">Barcode Access Control</Link></li>
              <li><Link href="/product/secure-access-management/rfid-card-access">RFID Access Control</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 - Industrial Solutions */}
          <div className="footer-column">
            <h3>Products & Solutions</h3>
            <div className="divider"></div>
            <ul className="footer-links">
              <li><Link href="/product/industry-automation/smart-andon-system">Smart Andon System</Link></li>
              <li><Link href="/product/industry-automation/smart-city-waste-management">Smart City Waste Management</Link></li>
              <li><Link href="/product/industry-automation/weighbridge-management">WeighBridge Management</Link></li>
              <li><Link href="/product/industry-automation/smart-traffic-management">Traffic Management</Link></li>
              <li><Link href="/product/industry-automation/smart-factory-management">Process Management</Link></li>
              <li><Link href="/product/queue-management">Queue Management</Link></li>
              <li><Link href="/product/visitor-management/">Visitor ManagemenL</Link></li>
              <li><Link href="/product/agile-software-development/mobile-development">Mobile Application</Link></li>
              <li><Link href="/product/agile-software-development/web-development">Web Application</Link></li>
              <li><Link href="/product/agile-software-development/embedded-firmware">Embedded Application</Link></li>
            </ul>
          </div>

          {/* COLUMN 4 - Contact */}
          <div className="footer-column contact-info">
            <h3>Contact Us</h3>
            <div className="divider"></div>

            <div className="contact-details">
              <div>
                <p className="font-semibold mb-2">INDIA</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2"><span>📞</span> +91 7888711383</div>
                  <div className="flex items-center gap-2"><span>📞</span> +91 8130832704</div>
                  <div className="flex items-center gap-2"><span>✉️</span> sales@robatosystems.com</div>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2">AUSTRALIA</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2"><span>📞</span> +61 478251187</div>
                  <div className="flex items-center gap-2"><span>📞</span> +61 478251187</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>Copyright © ROBATO SYSTEMS PVT. LTD. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
