import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET(req: Request) {
  return NextResponse.json(
    { message: "Ini respone method GET" },
    { status: 200 }
  );
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const resend = new Resend(`${process.env.NEXT_RESEND_API}`);

    const emailHtml = `
    <html>
      <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333;">Contact Form Submission</h2>
          <p style="color: #555;">Message sent from <strong>${name}</strong> (<a href="mailto:${email}" style="color: #0066cc;">${email}</a>)</p>
          <div style="margin: 20px 0; padding: 10px; background-color: #f9f9f9; border-left: 3px solid #0066cc;">
            <p style="color: #333;">${message}</p>
          </div>
          <footer style="margin-top: 20px; color: #777;">
            <p>If you wish to respond, please do not hesitate to reach out.</p>
          </footer>
        </div>
      </body>
    </html>
  `;

    await resend.emails.send({
      from: email,
      to: [`${process.env.NEXT_APP_EMAIL}`],
      subject: "Perawita Yasa Portofolio",
      html: emailHtml,
    });

    return NextResponse.json(
      { message: "Email berhasil dikirim", data: { name, email, message } },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Terjadi kesalahan saat mengirim email" },
      { status: 500 }
    );
  }
}
