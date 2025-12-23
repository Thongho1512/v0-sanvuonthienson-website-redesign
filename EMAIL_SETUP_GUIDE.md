# Hướng Dẫn Cấu Hình Email Gửi Form Tư Vấn

## Tổng Quan

Khi khách hàng bấm "TƯ VẤN NGAY" trong modal, yêu cầu sẽ được gửi đến email `thongho1512@gmail.com`.

**Lưu ý:**

- `thongho1512@gmail.com` là email **NHẬN** thông báo (không cần cấu hình)
- Bạn sẽ dùng một email **KHÁC** để gửi (email này cần đăng nhập vào SMTP server)

## Các Bước Cấu Hình

### 1. Cài Đặt Dependencies

```bash
pnpm install
```

### 2. Cấu Hình Email SMTP

#### Option A: Sử Dụng Gmail Để Gửi (Khuyến Nghị)

1. **Chuẩn Bị Gmail Account:**

   - Bạn cần một Gmail account để gửi email (có thể khác `thongho1512@gmail.com`)
   - Ví dụ: `your-email@gmail.com`

2. **Tạo App Password:**

   - Truy cập: https://myaccount.google.com/apppasswords (đăng nhập bằng Gmail của bạn)
   - Chọn "Mail" và "Windows Computer" (hoặc thiết bị của bạn)
   - Google sẽ tạo một mật khẩu 16 ký tự

3. **Cập nhật file `.env.local`:**

   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=your-email@gmail.com              # Email Gmail của BẠN (dùng để gửi)
   EMAIL_PASSWORD=xxxx xxxx xxxx xxxx           # App Password 16 ký tự
   EMAIL_FROM=your-email@gmail.com              # Email gửi đi
   ```

   **Email nhận:** `thongho1512@gmail.com` (đã cấu hình sẵn - không cần sửa)

#### Option B: Sử Dụng Email Service Khác (Outlook, SendGrid, etc.)

Thay đổi các giá trị sau trong `.env.local`:

- **Outlook (gửi từ account Outlook của bạn):**
  ```env
  EMAIL_HOST=smtp.outlook.com
  EMAIL_PORT=587
  EMAIL_USER=your-outlook@outlook.com
  EMAIL_PASSWORD=your-password
  EMAIL_FROM=your-outlook@outlook.com
  ```
- **SendGrid (dịch vụ gửi email chuyên dụng):**
  ```env
  EMAIL_HOST=smtp.sendgrid.net
  EMAIL_PORT=587
  EMAIL_USER=apikey
  EMAIL_PASSWORD=your-sendgrid-api-key
  EMAIL_FROM=your-email@example.com
  ```

**Email nhận luôn là:** `thongho1512@gmail.com` (không cần thay đổi)

### 3. Khởi Chạy Developer Server

```bash
pnpm dev
```

### 4. Kiểm Tra Chức Năng

1. Truy cập website local của bạn
2. Bấm "TƯ VẤN NGAY" hoặc chờ popup tự động hiện lên
3. Điền form và bấm "TƯ VẤN NGAY"
4. Kiểm tra email `thongho1512@gmail.com` xem có nhận được yêu cầu

## Luồng Hoạt Động Hiện Tại

```
Khách Hàng Điền Form
         ↓
Submit Form
         ↓
API Route: /api/send-quote
         ↓
Gửi Email đến: thongho1512@gmail.com (✅)
Mở Zalo: 0394710774 (✅)
         ↓
Hiển Thị Thông Báo Thành Công
```

## Tệp Được Tạo/Sửa

- **Tạo mới:** `/app/api/send-quote/route.ts` - API endpoint để gửi email
- **Tạo mới:** `/.env.local` - Cấu hình email (thêm vào .gitignore)
- **Cập nhật:** `/components/contact/quote-form-modal.tsx` - Gọi API khi submit
- **Cập nhật:** `/package.json` - Thêm nodemailer

## Biến Môi Trường Cần Thiết

| Biến              | Giá Trị               | Ghi Chú                               |
| ----------------- | --------------------- | ------------------------------------- |
| `EMAIL_HOST`      | smtp.gmail.com        | SMTP server (hoặc của service khác)   |
| `EMAIL_PORT`      | 587                   | SMTP port                             |
| `EMAIL_SECURE`    | false                 | SSL/TLS                               |
| `EMAIL_USER`      | your-email@gmail.com  | Email dùng để **GỬI** (email của bạn) |
| `EMAIL_PASSWORD`  | app-password          | App Password từ Gmail của bạn         |
| `EMAIL_FROM`      | your-email@gmail.com  | Địa chỉ gửi đi                        |
| `RECIPIENT_EMAIL` | thongho1512@gmail.com | Email **NHẬN** (đã cấu hình sẵn)      |

## Xử Lý Lỗi

Nếu gặp lỗi:

1. **"Failed to send email":** Kiểm tra cấu hình SMTP
2. **"Invalid credentials":** Kiểm tra lại:
   - Email đăng nhập (`EMAIL_USER`) là email thực của bạn
   - App Password (`EMAIL_PASSWORD`) chính xác từ Google
3. **"Missing required fields":** Đảm bảo form có tất cả các field bắt buộc

## Bảo Mật

⚠️ **Quan trọng:**

- **Không commit `.env.local` lên git** - File này chứa thông tin nhạy cảm
- Thêm `.env.local` vào `.gitignore`
- **Sử dụng App Password từ Google thay vì mật khẩu chính** - An toàn hơn
- Nếu deploy lên Vercel/Netlify, cấu hình biến trong Project Settings, không commit vào repo

## Tóm Tắt Các Bước Nhanh

1. **Chuẩn Bị Gmail của bạn:**

   - Truy cập https://myaccount.google.com/apppasswords
   - Tạo App Password (copy mật khẩu 16 ký tự)

2. **Cập nhật `.env.local`:**

   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
   EMAIL_FROM=your-gmail@gmail.com
   ```

3. **Cài dependencies:**

   ```bash
   pnpm install
   ```

4. **Chạy dev:**

   ```bash
   pnpm dev
   ```

5. **Test form:** Bấm "TƯ VẤN NGAY" → Email về `thongho1512@gmail.com`

## Tiếp Theo

Có thể thêm:

- Lưu dữ liệu vào database
- Gửi email confirm cho khách hàng
- Tạo trang dashboard để xem các yêu cầu
