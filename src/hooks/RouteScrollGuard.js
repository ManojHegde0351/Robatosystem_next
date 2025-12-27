'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteScrollGuard({ children }) {
  const pathname = usePathname();
  const initializedRef = useRef(false);

  useEffect(() => {
    // Only run on initial load and route changes
    if (!initializedRef.current) {
      // Force instant jump to top
      window.scrollTo(0, 0);
      initializedRef.current = true;
    }
  }, [pathname]);

  // Always render children immediately - don't block rendering
  return children;
}
