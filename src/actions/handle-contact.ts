'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!); // Add ! if you're confident

export async function handleContactForm(values: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    await resend.emails.send({
      from: 'musa <musamuhammad7474@gmail.com>', // Use a verified domain in production
      to: 'musamuhammad7474@gmail.com',
      subject: `New Contact From ${values.name}`,
      text: values.message,
      replyTo: values.email,
    });

    return { success: true };
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return { success: false, message: 'Something went wrong while sending the email.' };
  }
}
