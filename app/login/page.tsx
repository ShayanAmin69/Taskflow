"use client"

import Script from "next/script"
import Link from "next/link"

export default function LoginPage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login - TaskFlow</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className="auth-page">
        <div className="auth-container">
          <div className="auth-wrapper">
            <div className="auth-header">
              <Link href="/" className="auth-logo">
                <i className="fas fa-tasks me-2"></i>TaskFlow
              </Link>
              <h1>Welcome Back</h1>
              <p>Log in to your TaskFlow account</p>
            </div>
            <div className="auth-body">
              <form id="loginForm" className="auth-form">
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label">
                    Email
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <input type="email" className="form-control" id="loginEmail" placeholder="Your Email" required />
                  </div>
                  <div className="invalid-feedback">Please enter a valid email address</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label">
                    Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      id="loginPassword"
                      placeholder="Your Password"
                      required
                    />
                    <button className="btn btn-outline-secondary toggle-password" type="button">
                      <i className="fas fa-eye"></i>
                    </button>
                  </div>
                  <div className="invalid-feedback">Please enter your password</div>
                </div>
                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="forgot-password">
                    Forgot password?
                  </a>
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100">
                  Log In
                </button>
                <div className="auth-divider">
                  <span>or</span>
                </div>
                <div className="social-auth">
                  <button type="button" className="btn btn-outline-primary social-btn">
                    <i className="fab fa-google"></i> Continue with Google
                  </button>
                  <button type="button" className="btn btn-outline-primary social-btn">
                    <i className="fab fa-facebook-f"></i> Continue with Facebook
                  </button>
                </div>
              </form>
            </div>
            <div className="auth-footer">
              <p>
                Don't have an account? <Link href="/signup">Sign up</Link>
              </p>
              <p className="auth-terms">
                By logging in, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>

        {/* Scripts */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/js/login-enhanced.js" strategy="afterInteractive" />
        <Script
          id="bootstrap-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      document.addEventListener('DOMContentLoaded', function() {
        // Initialize all tooltips
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl);
        });
        
        // Initialize all popovers
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
          return new bootstrap.Popover(popoverTriggerEl);
        });
      });
    `,
          }}
        />

        <style jsx global>{`
          /* Global Styles */
          :root {
            --primary-color: #4f46e5;
            --primary-hover: #4338ca;
            --secondary-color: #10b981;
            --dark-color: #1f2937;
            --light-color: #f9fafb;
            --gray-color: #6b7280;
            --light-gray: #e5e7eb;
            --danger-color: #ef4444;
            --warning-color: #f59e0b;
            --success-color: #10b981;
            --info-color: #3b82f6;
            --body-bg: #f9fafb;
            --card-bg: #ffffff;
            --border-radius: 0.5rem;
            --box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            --transition: all 0.3s ease;
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          body {
            font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
              "Helvetica Neue", sans-serif;
            line-height: 1.6;
            color: var(--dark-color);
            background-color: var(--body-bg);
            overflow-x: hidden;
          }
          
          /* Auth Pages */
          .auth-page {
            background-color: var(--body-bg);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .auth-container {
            width: 100%;
            max-width: 500px;
            padding: 2rem 1rem;
          }
          
          .auth-wrapper {
            background-color: var(--card-bg);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            overflow: hidden;
          }
          
          .auth-header {
            padding: 2rem;
            text-align: center;
          }
          
          .auth-logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--dark-color);
            text-decoration: none;
            display: inline-block;
            margin-bottom: 1.5rem;
          }
          
          .auth-logo i {
            color: var(--primary-color);
          }
          
          .auth-header h1 {
            font-weight: 700;
            margin-bottom: 0.5rem;
          }
          
          .auth-header p {
            color: var(--gray-color);
          }
          
          .auth-body {
            padding: 0 2rem 2rem;
          }
          
          .auth-form .input-group-text {
            background-color: transparent;
          }
          
          .toggle-password {
            cursor: pointer;
          }
          
          .auth-divider {
            position: relative;
            text-align: center;
            margin: 1.5rem 0;
          }
          
          .auth-divider::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: var(--light-gray);
          }
          
          .auth-divider span {
            position: relative;
            background-color: var(--card-bg);
            padding: 0 1rem;
            color: var(--gray-color);
          }
          
          .social-auth {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          
          .social-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
          }
          
          .social-btn i {
            font-size: 1.25rem;
          }
          
          .auth-footer {
            padding: 1.5rem 2rem;
            text-align: center;
            background-color: rgba(79, 70, 229, 0.05);
          }
          
          .auth-footer p {
            margin-bottom: 0.5rem;
          }
          
          .auth-terms {
            font-size: 0.75rem;
            color: var(--gray-color);
          }
          
          /* Custom Notification */
          .custom-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: var(--card-bg);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 350px;
            z-index: 1000;
            transform: translateX(calc(100% + 20px));
            transition: var(--transition);
          }
          
          .custom-notification.show {
            transform: translateX(0);
          }
          
          .custom-notification-content {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          
          .custom-notification-icon {
            font-size: 1.5rem;
            color: var(--primary-color);
          }
          
          .custom-notification-message {
            font-size: 0.875rem;
          }
          
          .custom-notification-close {
            background: none;
            border: none;
            color: var(--gray-color);
            cursor: pointer;
            transition: var(--transition);
          }
          
          .custom-notification-close:hover {
            color: var(--danger-color);
          }
          
          /* Responsive Styles */
          @media (max-width: 575.98px) {
            .auth-container {
              padding: 1rem;
            }
          
            .auth-header,
            .auth-body,
            .auth-footer {
              padding: 1.5rem;
            }
          }
        `}</style>
      </body>
    </html>
  )
}
