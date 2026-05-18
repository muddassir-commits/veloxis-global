import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { eventBroker } from '../../lib/analytics/eventBroker';

/**
 * AnalyticsTracker handles:
 * 1. Safe, lazy-loaded production injection of Google Analytics 4.
 * 2. Automated page-view tracking on SPA route changes without duplicating script loads.
 */
const AnalyticsTracker = () => {
  const location = useLocation();
  const initializedRef = useRef(false);
  const previousPathRef = useRef('');

  useEffect(() => {
    // 1. Safe lazyloaded GA4 script injection in production/deployment
    if (!initializedRef.current) {
      const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID || 'G-LC9XWNSGCF';
      
      console.log(`[Analytics Tracker] Initializing lazy GA4 loader for ID: ${measurementId}`);
      eventBroker.initGA4(measurementId);
      
      initializedRef.current = true;
    }
  }, []);

  useEffect(() => {
    // 2. Prevent firing double pageviews on initial load or duplicate mount transitions
    const currentPath = location.pathname + location.search;
    if (previousPathRef.current === currentPath) return;

    previousPathRef.current = currentPath;

    // Track SPA route change
    console.log(`[Analytics Tracker] Route transition detected: ${currentPath}`);
    
    // We defer slightly to allow the DOM title element to hydrate and update correctly
    const timer = setTimeout(() => {
      eventBroker.trackPageView(location.pathname, {
        title: document.title,
        search: location.search
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  return null; // Purely telemetry-driven behavioral wrapper
};

export default AnalyticsTracker;
