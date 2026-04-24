import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, interest, message } = body;

    // Basic validation
    if (!name || !email || !interest || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Bigentik Group Website <no-reply@bigentik.com>',
      to: 'bigentikgroup1@gmail.com',
      subject: 'Nueva propuesta de interes - Bigentik Website',
      html: `
        <h2>Nueva propuesta de interes.</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interes:</strong> ${interest}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Error sending email via Resend:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error('Internal server error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
