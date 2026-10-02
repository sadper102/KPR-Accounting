import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "กรุณาระบุชื่อผู้ติดต่อ" },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || !phone.trim()) {
      return NextResponse.json(
        { error: "กรุณาระบุเบอร์โทรศัพท์สำหรับติดต่อกลับ" },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;
    const smtpUser = process.env.SMTP_USER || "info@kpraccount.com";
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "info@kpraccount.com";

    if (!smtpPass) {
      console.error("SMTP_PASS is not configured in environment variables.");
      return NextResponse.json(
        { error: "ยังไม่ได้ตั้งค่ารหัสผ่านอีเมลของระบบ (SMTP_PASS) ใน Vercel Environment Variables" },
        { status: 500 }
      );
    }

    // Configure Nodemailer transporter with Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    const serviceLabels: Record<string, string> = {
      accounting: "บริการด้านบัญชี",
      taxation: "บริการด้านภาษี",
      registration: "จดทะเบียนบริษัท",
      audit: "ตรวจสอบบัญชี",
      payroll: "ประกันสังคม & เงินเดือน",
      other: "ปรึกษาเรื่องอื่นๆ",
    };

    const selectedService = serviceLabels[service] || service || "ไม่ได้ระบุ";
    const formattedDate = new Date().toLocaleString("th-TH", {
      timeZone: "Asia/Bangkok",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const mailOptions = {
      from: `"แบบฟอร์ม KPR Website" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: email && email.trim() ? `${name} <${email.trim()}>` : undefined,
      subject: `[ติดต่อจากเว็บไซต์] คุณ${name} - สนใจ${selectedService}`,
      text: `มีข้อความติดต่อใหม่จากเว็บไซต์ KPR Accounting:\n\nชื่อผู้ติดต่อ: ${name}\nเบอร์โทร: ${phone}\nอีเมล: ${email || "ไม่ได้ระบุ"}\nบริการที่สนใจ: ${selectedService}\nข้อความ: ${message || "-"}\n\nส่งเมื่อ: ${formattedDate}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f1f5f9; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
            .header { background: #0D2240; padding: 24px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; }
            .header p { color: #C5A059; margin: 6px 0 0 0; font-size: 13px; font-weight: 600; letter-spacing: 1px; }
            .body { padding: 28px 24px; }
            .badge { display: inline-block; background-color: #FEF3C7; color: #92400E; padding: 4px 10px; border-radius: 6px; font-weight: 600; font-size: 13px; }
            table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 14px; }
            td { padding: 12px 10px; border-bottom: 1px solid #f1f5f9; }
            .label { font-weight: 600; color: #64748b; width: 130px; vertical-align: top; }
            .val { color: #0f172a; font-weight: 500; }
            .msg-box { background-color: #f8fafc; border-left: 4px solid #C5A059; padding: 12px 14px; margin-top: 6px; border-radius: 4px; white-space: pre-wrap; font-size: 14px; color: #1e293b; }
            .tip { margin-top: 24px; padding: 12px 16px; background-color: #eff6ff; border-radius: 8px; font-size: 13px; color: #1e40af; }
            .footer { background: #f8fafc; padding: 14px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>มีลูกค้าติดต่อผ่านเว็บไซต์ KPR</h1>
              <p>KPR ACCOUNTING & TAX</p>
            </div>
            <div class="body">
              <table>
                <tr>
                  <td class="label">ชื่อผู้ติดต่อ:</td>
                  <td class="val"><strong style="color: #0D2240; font-size: 15px;">${name}</strong></td>
                </tr>
                <tr>
                  <td class="label">เบอร์โทรศัพท์:</td>
                  <td class="val"><a href="tel:${phone}" style="color: #0D2240; font-weight: 700; text-decoration: none;">${phone}</a></td>
                </tr>
                <tr>
                  <td class="label">อีเมลลูกค้า:</td>
                  <td class="val">${email ? `<a href="mailto:${email}" style="color: #2563eb; text-decoration: underline;">${email}</a>` : '<span style="color: #94a3b8;">ไม่ได้ระบุ</span>'}</td>
                </tr>
                <tr>
                  <td class="label">บริการที่สนใจ:</td>
                  <td class="val"><span class="badge">${selectedService}</span></td>
                </tr>
                <tr>
                  <td class="label">ข้อความติดต่อ:</td>
                  <td class="val">
                    <div class="msg-box">${message ? message : "ไม่มีข้อความเพิ่มเติม"}</div>
                  </td>
                </tr>
                <tr>
                  <td class="label">วันที่และเวลา:</td>
                  <td class="val" style="color: #64748b;">${formattedDate}</td>
                </tr>
              </table>

              ${
                email && email.trim()
                  ? `<div class="tip">
                      💡 <strong>สะดวกยิ่งขึ้น:</strong> คุณสามารถกดปุ่ม <strong>Reply (ตอบกลับ)</strong> ในโปรแกรมอีเมลของคุณได้เลย ข้อความจะส่งตรงไปยังลูกค้าที่ <strong>${email}</strong>
                    </div>`
                  : ""
              }
            </div>
            <div class="footer">
              อีเมลฉบับนี้ส่งอัตโนมัติจากเว็บไซต์ kpraccount.com | ปลายทาง: ${receiverEmail}
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "ข้อความถูกส่งไปยังทีมงานเรียบร้อยแล้ว",
    });
  } catch (error: any) {
    console.error("Error sending email via Hostinger SMTP:", error);
    return NextResponse.json(
      {
        error:
          error?.message ||
          "เกิดข้อผิดพลาดในการเชื่อมต่อส่งอีเมล กรุณาลองใหม่อีกครั้งหรือติดต่อทาง LINE",
      },
      { status: 500 }
    );
  }
}
