/**
 * Modular Event Abstraction Broker
 * 
 * Standardizes user behavior, dynamic search, and RAG audits tracking
 * ready to pipe directly into GA4, PostHog, or Microsoft Clarity on deploy.
 */

class AnalyticsEventBroker {
  constructor() {
    this.activeTrackers = {
      ga4: false,
      posthog: false,
      clarity: false
    };
    this.eventBuffer = [];
    this.telemetryQueue = [];
    this.ga4Initialized = false;
    this.ga4MeasurementId = '';
  }

  /**
   * Initializes GA4 in a lazyloaded, production-safe manner.
   * Prevents multiple script mounting during route transitions or re-renders.
   */
  initGA4(measurementId) {
    if (this.ga4Initialized) return;
    this.ga4Initialized = true;
    this.ga4MeasurementId = measurementId;

    if (window.gtag) {
      this.activeTrackers.ga4 = true;
      console.log(`[Event Broker] GA4 already exists. Activated immediately.`);
      return;
    }

    // Set up standard dataLayer and global gtag function
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      send_page_view: false // Prevent duplicate initial pageview from script load
    });

    // Create and inject the external tracking script asynchronously
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    
    script.onload = () => {
      console.log(`[Event Broker] GA4 script loaded successfully: ${measurementId}`);
      this.activeTrackers.ga4 = true;
      this.flushTelemetryQueue();
    };
    
    script.onerror = (err) => {
      console.error(`[Event Broker] GA4 script failed to load:`, err);
    };

    document.head.appendChild(script);
  }

  /**
   * Flushes any events that were buffered in the queue while GA4 was loading.
   */
  flushTelemetryQueue() {
    if (!this.activeTrackers.ga4 || !window.gtag) return;
    console.log(`[Event Broker] Flushing ${this.telemetryQueue.length} queued events to GA4...`);
    while (this.telemetryQueue.length > 0) {
      const event = this.telemetryQueue.shift();
      this.dispatchToGA4(event.eventName, event.payload);
    }
  }

  /**
   * Formats and dispatches events directly to the gtag interface.
   */
  dispatchToGA4(eventName, payload) {
    if (eventName === 'page_view') {
      window.gtag('config', this.ga4MeasurementId, {
        page_path: payload.path,
        page_location: window.location.href,
        page_title: payload.title || document.title
      });
    } else {
      window.gtag('event', eventName, payload);
    }
  }

  /**
   * Safe event dispatcher that absorbs events and pipes them to active connectors
   */
  trackEvent(eventName, payload = {}) {
    const timestamp = new Date().toISOString();
    const event = { eventName, payload, timestamp };
    
    // Log to standard developer buffer for visual dashboard auditing
    this.eventBuffer.push(event);
    if (this.eventBuffer.length > 50) this.eventBuffer.shift(); // keep last 50

    console.log(`[Event Broker] Telemetry tracked: "${eventName}"`, payload);

    // Dynamic bridges ready to execute once production scripts are injected:
    if (this.activeTrackers.ga4 && window.gtag) {
      this.dispatchToGA4(eventName, payload);
    } else if (this.ga4Initialized) {
      console.log(`[Event Broker] GA4 is loading. Queueing event: "${eventName}"`);
      this.telemetryQueue.push(event);
    }
    
    if (this.activeTrackers.posthog && window.posthog) {
      window.posthog.capture(eventName, payload);
    }
  }

  /**
   * Registers a page view telemetry event
   */
  trackPageView(pagePath, additionalProps = {}) {
    this.trackEvent('page_view', {
      path: pagePath,
      referrer: document.referrer,
      title: document.title,
      ...additionalProps
    });
  }

  /**
   * Capture CTA interactions
   */
  trackCtaInteraction(ctaId, actionType, details = {}) {
    this.trackEvent('cta_interaction', {
      ctaId,
      actionType, // 'view', 'click', 'submit'
      ...details
    });
  }

  /**
   * Instrument scroll-depth tracking milestones (e.g. 25%, 50%, 75%, 100%)
   */
  trackScrollDepth(pagePath, depthPercent) {
    this.trackEvent('scroll_depth_milestone', {
      path: pagePath,
      depthPercent
    });
  }

  /**
   * Track Funnel progression steps
   */
  trackFunnelProgression(stepName, targetStage, details = {}) {
    this.trackEvent('funnel_progression', {
      stepName, // e.g. 'Viewed_Blog' -> 'Clicked_CTA' -> 'Form_Filled'
      targetStage, // 'Awareness', 'Consideration', 'Decision'
      ...details
    });
  }

  /**
   * Log service inquiry events
   */
  trackServiceInquiry(inquiryId, serviceName, leadStage) {
    this.trackEvent('service_inquiry_submitted', {
      inquiryId,
      serviceName,
      leadStage
    });
  }

  /**
   * Activates production trackers on live deployment
   */
  activateTracker(trackerId) {
    if (this.activeTrackers[trackerId] !== undefined) {
      this.activeTrackers[trackerId] = true;
      console.log(`[Event Broker] Activated production tracker bridge: ${trackerId}`);
    }
  }
}

export const eventBroker = new AnalyticsEventBroker();

