import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend("re_egxxmpVF_4VhNVCJrh6NGqneg8SnZZzkz");
const fromEmail = "angelcecyt09@gmail.com";

export async function POST(req, res) {
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: [fromEmail, email],
            subject: subject,
            react: (
                <>
                <h1>{subject}</h1>
                <p>Thank you for contacting me!</p>
                <p>New message submitted:</p>
                <p>{message}</p>
                </>
                ),
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
