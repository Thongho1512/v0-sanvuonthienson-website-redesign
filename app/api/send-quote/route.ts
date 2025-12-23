import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    // Log environment variables (masked)
    console.log('🔧 RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY)
    console.log('🔧 RESEND_API_KEY length:', process.env.RESEND_API_KEY?.length)
    console.log('🔧 RECIPIENT_EMAIL:', process.env.RECIPIENT_EMAIL)
    console.log('🔧 RESEND_FROM_EMAIL:', process.env.RESEND_FROM_EMAIL)

    const body = await request.json()
    const { name, phone, projectType, investmentOption } = body

    console.log('📝 Form data received:', { name, phone, projectType, investmentOption })

    // Validate required fields
    if (!name || !phone || !projectType || !investmentOption) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #059669 0%, #0d9488 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-row { background: white; padding: 15px; margin: 10px 0; border-radius: 5px; border-left: 4px solid #059669; }
            .label { font-weight: bold; color: #059669; }
            .value { color: #1f2937; margin-left: 10px; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🌿 Yêu Cầu Tư Vấn Mới</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Khách hàng vừa gửi yêu cầu tư vấn</p>
            </div>
            <div class="content">
              <div class="info-row">
                <span class="label">👤 Họ và tên:</span>
                <span class="value">${name}</span>
              </div>
              <div class="info-row">
                <span class="label">📱 Số điện thoại:</span>
                <span class="value">${phone}</span>
              </div>
              <div class="info-row">
                <span class="label">🏗️ Loại công trình:</span>
                <span class="value">${projectType}</span>
              </div>
              <div class="info-row">
                <span class="label">💰 Mục đầu tư:</span>
                <span class="value">${investmentOption}</span>
              </div>
              <div class="info-row">
                <span class="label">⏰ Thời gian gửi:</span>
                <span class="value">${new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}</span>
              </div>
            </div>
            <div class="footer">
              <p>Email này được gửi tự động từ website Thiên Sơn Garden</p>
            </div>
          </div>
        </body>
      </html>
    `

    const textContent = `
YÊU CẦU TƯ VẤN MỚI

Họ và tên: ${name}
Số điện thoại: ${phone}
Loại công trình: ${projectType}
Mục đầu tư: ${investmentOption}
Thời gian gửi: ${new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}

---
Email này được gửi tự động từ website Thiên Sơn Garden
    `

    // Send email using Resend
    console.log('📧 Attempting to send email...')
    
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RECIPIENT_EMAIL || 'Thiensongarden@gmail.com',
      subject: `🌿 Yêu cầu tư vấn từ ${name}`,
      text: textContent,
      html: htmlContent,
    })

    console.log('📧 Resend response:', { data, error })

    // Check for errors
    if (error) {
      console.error('❌ Resend API error:', error)
      return NextResponse.json(
        { 
          error: 'Failed to send email', 
          details: error.message || 'Unknown error from Resend API' 
        },
        { status: 500 }
      )
    }

    console.log('✅ Email sent successfully:', data?.id)

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        emailId: data?.id || 'unknown'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to send email', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    )
  }
}