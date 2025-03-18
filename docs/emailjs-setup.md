# EmailJS Setup for Contact Form

This document provides instructions on how to set up EmailJS for the contact form in your portfolio website, both for local development and Vercel deployment.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for an account if you don't have one already.
2. Once you're logged in, you'll be taken to the dashboard.

## Step 2: Create an Email Service

1. In the EmailJS dashboard, go to the "Email Services" tab.
2. Click on "Add New Service."
3. Choose an email service provider (like Gmail, Outlook, or others).
4. Follow the instructions to connect your email account to EmailJS.
5. Once connected, note down the Service ID.

## Step 3: Create an Email Template

1. Go to the "Email Templates" tab in the EmailJS dashboard.
2. Click on "Create New Template."
3. Design your email template. Make sure to include the following variables:
   - `{{name}}` - The sender's name
   - `{{email}}` - The sender's email address
   - `{{message}}` - The message content
4. Save the template and note down the Template ID.

## Step 4: Get Your Public Key

1. Go to the "Account" tab in your EmailJS dashboard.
2. Find your API keys section.
3. Note down your Public Key.

## Step 5: Set Up Environment Variables

### For Local Development

Create a `.env.local` file in the root of your project (if it doesn't exist already) and add the following variables:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Replace `your_service_id`, `your_template_id`, and `your_public_key` with the values you noted down from the previous steps.

### For Vercel Deployment

1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to "Settings" tab
4. Navigate to "Environment Variables" section
5. Add each of these environment variables:
   - Key: `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Value: your EmailJS service ID
   - Key: `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Value: your EmailJS template ID
   - Key: `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Value: your EmailJS public key
6. Click "Save" to apply the changes
7. Redeploy your project for the changes to take effect (you can trigger a redeploy by going to the "Deployments" tab and clicking "Redeploy")

![Vercel Environment Variables](https://vercel.com/docs/storage/images/env-vars-ui.png)

## Step 6: Restart Your Next.js Server (Local Development)

After setting up the environment variables for local development, restart your Next.js development server:

```bash
yarn dev
```

## Testing Your Contact Form

After completing all the above steps, your contact form should now be able to send emails using EmailJS. Fill out the form and submit it to test the functionality.

## Troubleshooting

If you encounter any issues:

1. Check the browser console for error messages.
2. Verify that your environment variables are correctly set up:
   - For local development, check your `.env.local` file
   - For Vercel deployment, check the Environment Variables section in your project settings
3. Make sure your EmailJS service is properly connected and active.
4. Check that your template is published and active.
5. Verify that your form field names match the variables in your email template.
6. For Vercel deployments, check the Function Logs in the Vercel dashboard to see if there are any server-side errors.

## Vercel Deployment Tips

1. **Environment Scope**: By default, Vercel will apply the environment variables to all deployment environments (Production, Preview, and Development). If you need different EmailJS configurations for different environments, you can use the Environment dropdown when adding variables.

2. **Secrets Protection**: Vercel automatically treats environment variables as secrets and doesn't expose them in the client-side code, except for those prefixed with `NEXT_PUBLIC_`. Since EmailJS runs on the client side, we use the `NEXT_PUBLIC_` prefix for these variables.

3. **Previewing Environment Variables**: After setting up environment variables in Vercel, you can verify they're correctly applied by checking the Function Logs or deploying a preview with a simple debug message.

4. **Updating Variables**: If you update environment variables in Vercel, you'll need to redeploy your application for the changes to take effect.
