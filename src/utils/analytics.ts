/**
 * Meta Pixel Tracking Utility
 */

export const trackEvent = (eventName: string, data?: object) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, data);
  } else {
    console.warn(`Meta Pixel (fbq) not found for event: ${eventName}`);
  }
};

export const trackLead = () => {
  trackEvent('Lead', { 
    content_name: 'WhatsApp Contact',
    content_category: 'Conversion'
  });
};
