# EmailJS Setup Guide

To enable the contact form, follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

## 2. Add Email Service
1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. Copy your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Copy your **Template ID**

## 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## 5. Update Contact.tsx
Open `src/components/Contact.tsx` and replace:
- `YOUR_SERVICE_ID` with your Service ID
- `YOUR_TEMPLATE_ID` with your Template ID
- `YOUR_PUBLIC_KEY` with your Public Key

## Example:
```typescript
const result = await emailjs.send(
  'service_abc123',      // Your Service ID
  'template_xyz789',     // Your Template ID
  { ... },
  'user_def456'          // Your Public Key
);
```

## 6. Test
1. Run your dev server: `npm run dev`
2. Fill out the contact form
3. Check your email inbox

That's it! Your contact form is now live. 🎉
