// Google Analytics Helper Functions
// To use: Add your GA4 Measurement ID to index.html

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'G-XXXXXXXXXX', {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track specific events
export const trackProjectView = (projectName: string) => {
  event({
    action: 'view_project',
    category: 'Projects',
    label: projectName,
  });
};

export const trackCVDownload = () => {
  event({
    action: 'download_cv',
    category: 'Engagement',
    label: 'CV Download',
  });
};

export const trackContactSubmit = () => {
  event({
    action: 'submit_form',
    category: 'Contact',
    label: 'Contact Form',
  });
};
