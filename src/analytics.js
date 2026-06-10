// Vercel Web Analytics initialization
// This file initializes Vercel Web Analytics for the TaxEase application

import { inject } from '@vercel/analytics';

// Initialize analytics with auto-detection of environment
inject({
  mode: 'auto',
  debug: false
});

// Export for potential custom event tracking
export { track } from '@vercel/analytics';
