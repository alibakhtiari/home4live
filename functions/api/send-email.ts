import { Resend } from 'resend';

export const onRequestPost = async ({ request, env }) => {
  const resend = new Resend(env.RESEND_API_KEY);
  const formData = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <info@home4live.ca>',
      to: ['info@home4live.ca'],
      subject: `New Contact Form Submission - ${formData.service}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Service:</strong> ${formData.service}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    });

    if (error) {
      return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ message: e.message }), { status: 500 });
  }
};
