# Google Analytics Setup Guide

## Option 1: Google Analytics (Recommended)

### 1. Create GA4 Property
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property
3. Get your Measurement ID (format: G-XXXXXXXXXX)

### 2. Add to index.html
Add this code in the `<head>` section of `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. Update analytics.ts
Replace `G-XXXXXXXXXX` in `src/utils/analytics.ts` with your actual Measurement ID.

### 4. What's Tracked
- Page views
- CV downloads
- Contact form submissions
- Project views
- User engagement

---

## Option 2: Vercel Analytics (Easiest)

### 1. Install
```bash
npm install @vercel/analytics
```

### 2. Add to App.tsx
```typescript
import { Analytics } from '@vercel/analytics/react';

// In your return statement:
<Analytics />
```

### 3. Enable in Vercel Dashboard
1. Go to your project settings on Vercel
2. Navigate to "Analytics" tab
3. Enable analytics (free tier available)

---

## Option 3: Plausible Analytics (Privacy-Focused)

### 1. Sign up at [Plausible.io](https://plausible.io/)

### 2. Add to index.html
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## Recommended: Start with Vercel Analytics
It's the easiest to set up and integrates seamlessly with your Vercel deployment!
