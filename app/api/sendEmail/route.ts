import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.EMAIL_TO;

export async function POST(req: any, res: any): Promise<any> {
  const { name, email, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "Contact Form <ElieWebsite@resend.dev>",
      to: toEmail as string,
      reply_to: email,
      subject: `From ${name} sent from personal website`,
      html: `
      <p>${message}</p>
      <br />
      <p>From ${name}</p>
      `,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
