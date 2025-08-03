// 'use server';

// import * as z from 'zod';

// const formSchema = z.object({
//   name: z.string().min(2),
//   email: z.string().email(),
//   message: z.string().min(10),
// });

// export async function handleContactForm(values: z.infer<typeof formSchema>) {
//   const validatedFields = formSchema.safeParse(values);

//   if (!validatedFields.success) {
//     return {
//       success: false,
//       message: 'Invalid form data.',
//     };
//   }

//   // Simulate sending an email
//   console.log('New contact form submission:');
//   console.log('Name:', validatedFields.data.name);
//   console.log('Email:', validatedFields.data.email);
//   console.log('Message:', validatedFields.data.message);
  
//   // Simulate network delay
//   await new Promise(resolve => setTimeout(resolve, 1000));
  
//   // In a real application, you would integrate with an email service like Resend, SendGrid, etc.
//   // For example:
//   // await resend.emails.send({
//   //   from: 'onboarding@resend.dev',
//   //   to: 'your-email@example.com',
//   //   subject: `New message from ${validatedFields.data.name}`,
//   //   react: EmailTemplate({ ...validatedFields.data }),
//   // });

//   return {
//     success: true,
//     message: 'Message sent successfully!',
//   };
// }

// lib/actions.ts
// 'use server'

// import { Resend } from 'resend'

// const resend = new Resend(process.env.RESEND_API_KEY)

// export async function handleContactForm(values: {
//   name: string
//   email: string
//   message: string
// }) {
//   try {
//     await resend.emails.send({
//       from: 'Your Name <onboarding@resend.dev>',
//       to: 'your-email@example.com',
//       subject: `New Contact Message from ${values.name}`,
//       replyTo: values.email,
//       html: `
//         <p><strong>Name:</strong> ${values.name}</p>
//         <p><strong>Email:</strong> ${values.email}</p>
//         <p><strong>Message:</strong></p>
//         <p>${values.message}</p>
//       `,
//     })

//     return { success: true }
//   } catch (error) {
//     console.error('Email sending error:', error)
//     return { success: false, message: 'Failed to send email' }
//   }
// }

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // ✅ Correct

export async function handleContactForm(values: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    await resend.emails.send({
      from: 'Your Name <your@yourdomain.com>', // Replace with a verified sender
      to: 'youremail@example.com',
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
