import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configure your email service here
// Using Gmail SMTP or another email service
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, projectType, investmentOption } = body

    // Validate required fields
    if (!name || !phone || !projectType || !investmentOption) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create email content
    const htmlContent = `
      <h2>Yêu Cầu Tư Vấn Mới</h2>
      <p><strong>Họ và tên:</strong> ${name}</p>
      <p><strong>Số điện thoại:</strong> ${phone}</p>
      <p><strong>Loại công trình:</strong> ${projectType}</p>
      <p><strong>Mục đầu tư:</strong> ${investmentOption}</p>
      <p><strong>Thời gian gửi:</strong> ${new Date().toLocaleString('vi-VN')}</p>
    `

    const textContent = `
Yêu Cầu Tư Vấn Mới

Họ và tên: ${name}
Số điện thoại: ${phone}
Loại công trình: ${projectType}
Mục đầu tư: ${investmentOption}
Thời gian gửi: ${new Date().toLocaleString('vi-VN')}
    `

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: 'Thiensongarden@gmail.com',
      subject: `Yêu cầu tư vấn từ ${name}`,
      text: textContent,
      html: htmlContent,
    })

    // Optionally send confirmation email to customer
    if (process.env.SEND_CONFIRMATION_EMAIL === 'true') {
      await transporter.sendMail({
        from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
        to: phone, // This won't work for email confirmation, you might want to add email field
        subject: 'Chúng tôi đã nhận được yêu cầu tư vấn của bạn',
        html: `
          <h2>Cảm ơn bạn!</h2>
          <p>Chúng tôi đã nhận được yêu cầu tư vấn của bạn. Chúng tôi sẽ liên hệ với bạn trong vòng 30 phút.</p>
          <p><strong>Thông tin đã nhận:</strong></p>
          <p>Họ và tên: ${name}</p>
          <p>Số điện thoại: ${phone}</p>
          <p>Loại công trình: ${projectType}</p>
          <p>Mục đầu tư: ${investmentOption}</p>
        `,
      })
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
