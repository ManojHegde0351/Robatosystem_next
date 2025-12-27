'use client';

import Link from 'next/link';
import styles from '@/styles/navbar.module.css';


import { createPortal } from 'react-dom';

import { useNavbar } from '@/hooks/useNavbar';

const Navbar = () => {
  const {
    activeIndex,
    hoveredSubItem,
    showLogin,
    showEnquiry,
    mounted,
    clickPosition,
    activeSection,
    activeSubItem,
    scrolled,
    visible,
    navRef,
    handleNavEnter,
    handleNavLeave,
    handleSubItemClick,
    handleEnquiryClick,
    handleCloseLogin,
    setHoveredSubItem,
    setActiveIndex,
    setActiveSection,
    setActiveSubItem,
    navigationItems
  } = useNavbar();

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${visible ? styles.visible : ''}`} ref={navRef}>
        <div className={styles.navContainer}>
       
          
          <div className={styles.navMenu}>
            {navigationItems.map((item, index) => (
              <div 
                key={item.title} 
                className={styles.navItem}
                onMouseEnter={() => handleNavEnter(index)}
                onMouseLeave={handleNavLeave}
              >
                <button 
                  className={`${styles.navButton} ${activeIndex === index || activeSection === index ? styles.active : ''}`}
                  aria-haspopup="true"
                  aria-expanded={activeIndex === index}
                  aria-controls={`submenu-${index}`}
                >
                  {item.title}
                  <span className={`${styles.arrow} ${activeIndex === index ? styles.rotated : ''}`}>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                
                <div 
                  id={`submenu-${index}`}
                  className={`${styles.submenu} ${activeIndex === index ? styles.show : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={handleNavLeave}
                >
                  <div className={styles.submenuContent}>
                    <div className={styles.submenuLinks}>
                      {item.items.map((subItem, subIndex) => (
                        <Link 
                          key={subItem.name} 
                          href={subItem.path}
                          className={`${styles.submenuItem} ${activeSubItem === `${index}-${subIndex}` ? styles.active : ''}`}
                          onClick={(e) => {
                            handleSubItemClick(subItem, e);
                            setActiveSection(index);
                            setActiveSubItem(`${index}-${subIndex}`);
                          }}
                          onMouseEnter={() => setHoveredSubItem(subItem)}
                          style={{ '--i': subIndex + 1 }}
                        >
                          <span className={styles.submenuItemText}>{subItem.name}</span>
                          <span className={styles.submenuItemIcon}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

         
        </div>
      </nav>
      
      {showLogin && mounted && createPortal(
      
       
      
        document.body
      )}
    </>
  );
};

export default Navbar;
