import { useState, useEffect, useRef } from 'react';

export const navigationItems = [
  {
    title: 'Parking Management',
    items: [
      { name: 'Parking Guidance System', path: '/product/parking-management', image: '/images/products/Parking-Software.webp' },
      { name: 'Sensor-Based Parking', path: '/product/parking-management/sensor-based-parking', image: '/images/products/Parking-controller.webp' },
      { name: 'Hospital Parking', path: '/product/parking-management/hospital-parking', image: '/images/products/Parking-indicator.webp' },
      { name: 'Airport Parking', path: '/product/parking-management/airport', image: '/images/products/Parking-Sign.webp' },
      { name: 'Office Parking', path: '/product/parking-management/office-parking', image: '/images/products/Parking-Software.webp' },
      { name: 'Malls Parking', path: '/product/parking-management/malls-parking', image: '/images/products/Parking-controller.webp' },
      { name: 'University Parking', path: '/product/parking-management/university-parking', image: '/images/products/Parking-indicator.webp' },
      { name: 'RFID Based Parking', path: '/product/parking-management/rfid-parking', image: '/images/products/Parking-Sign.webp' },
      { name: 'LED Parking Signage', path: '/product/parking-management/led-parking-signage', image: '/images/products/LEDParking/Parking_Signage_main_entrance.png' },
      { name: 'Handheld Parking Machine', path: '/product/parking-management/handheld-parking-machine', image: '/images/products/Parking-Software.webp' }
    ]
  },
  {
    title: 'Industry 4.0 Automation',
    items: [
      { name: 'Smart ANDON System', path: '/product/industry-automation/smart-andon-system', image: '/images/products/Parking-controller.webp' },
      { name: 'Smart City Waste Management', path: '/product/industry-automation/smart-city-waste-management', image: '/images/products/Parking-indicator.webp' },
      { name: 'Weighbridge Management', path: '/product/industry-automation/weighbridge-management', image: '/images/products/Parking-Sign.webp' },
      { name: 'Smart Factory Management', path: '/product/industry-automation/smart-factory-management', image: '/images/products/Parking-Software.webp' },
      { name: 'Smart Trafic Management', path: '/product/industry-automation/smart-traffic-management', image: '/images/products/Parking-controller.webp' }
    ]
  },
  {
    title: 'Visitors Management',
    items: [
      { name: 'Smart Visitor Management', path: '/product/visitor-management', image: '/images/products/Parking-indicator.webp' },
      { name: 'Smart Queue Management', path: '/product/queue-management', image: '/images/products/Parking-Sign.webp' },
    ]
  },
  {
    title: 'Secure Access Management',
    items: [
      { name: 'ESD Access Control System', path: '/product/secure-access-management/esd-access-control-system', image: '/images/products/SecureAccessManagement/About_Esd_System.png' },
      { name: 'Barcode & Card Access System', path: '/product/secure-access-management/barcode-card-access', image: '/images/products/SecureAccessManagement/Barcode access Management/Barcode_Access_Control_System.jpg' },
      { name: 'RFID Card Access System', path: '/product/secure-access-management/rfid-card-access', image: '/images/products/SecureAccessManagement/Barcode access Management/Card_Access_Control_System.jpg' },
      { name: 'Barcode & RFID Access Control', path: '/product/secure-access-management/barcode-rfid-access', image: '/images/products/SecureAccessManagement/Barcode access Management/Employee QRcode Access & Attendance System.jpg' },
      { name: 'Gym Access Control System', path: '/product/secure-access-management/gym-access-control', image: '/images/products/SecureAccessManagement/Barcode access Management/How Visitor QRcode Access Control System Works.png' }
    ]
  },
  {
    title: 'Agile Software Development',
    items: [
      { name: 'Mobile Application', path: '/product/agile-software-development/mobile-development', image: '/images/products/AgileSoftwareDevelopment/Mobile-App-Development.jpg' },
      { name: 'Web Applications', path: '/product/agile-software-development/web-development', image: '/images/products/AgileSoftwareDevelopment/webapplication/Web development.jpg' },
      { name: 'Embaded Firmware', path: '/product/agile-software-development/embedded-firmware', image: '/images/products/AgileSoftwareDevelopment/Embeddedfirmware/Embedded_Application_Development.jpeg' },
      { name: 'Desktop Softwares', path: '#', image: '/images/products/AgileSoftwareDevelopment/webapplication/WebDevelopment-Service.jpg' }
    ]
  }
];

export const useNavbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  // Add scroll detection for navbar styling and visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state for styling
      setScrolled(currentScrollY > 80);
      
      // Set visible state - show navbar after scrolling past hero section
      setVisible(currentScrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Update active section and sub-item based on current path
  useEffect(() => {
    const currentPath = window.location.pathname;
    
    navigationItems.forEach((section, sectionIndex) => {
      section.items.forEach((subItem, subItemIndex) => {
        if (currentPath === subItem.path || currentPath.startsWith(subItem.path + '/')) {
          setActiveSection(sectionIndex);
          setActiveSubItem(`${sectionIndex}-${subItemIndex}`);
        }
      });
    });
  }, []);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  const handleNavEnter = (index) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveIndex(index);
  };

  const handleNavLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(null);
      setHoveredSubItem(null);
    }, 150);
  };

  const handleSubItemClick = (subItem, e) => {
    e.stopPropagation();
    
    // Handle Desktop Software authentication
    if (subItem.name === 'Desktop Softwares') {
      e.preventDefault();
      setShowLogin(true);
    }
  };

  const handleEnquiryClick = (e) => {
    setClickPosition({ x: e.clientX, y: e.clientY });
    setShowEnquiry(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return {
    // State
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
    
    // Actions
    handleNavEnter,
    handleNavLeave,
    handleSubItemClick,
    handleEnquiryClick,
    handleCloseLogin,
    setHoveredSubItem,
    setActiveIndex,
    setActiveSection,
    setActiveSubItem,
    
    // Data
    navigationItems
  };
};
