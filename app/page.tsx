"use client"

import Script from "next/script"
import Link from "next/link"

export default function Home() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TaskFlow - Project Management System</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              <i className="fas fa-tasks me-2"></i>TaskFlow
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#features">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonials">
                    Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item premium-feature">
                  <a className="nav-link" href="#dashboard">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item premium-feature">
                  <a className="nav-link" href="#reports">
                    Reports
                  </a>
                </li>
              </ul>
              <div className="d-flex">
                <Link href="/login" className="btn btn-outline-light me-2">
                  Login
                </Link>
                <Link href="/signup" className="btn btn-primary">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="display-4 fw-bold">Manage Projects with Ease</h1>
                <p className="lead">
                  TaskFlow helps teams organize, track, and deliver their best work with a simple, intuitive interface.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <Link href="/signup" className="btn btn-primary btn-lg px-4 me-md-2">
                    Get Started
                  </Link>
                  <a href="#features" className="btn btn-outline-light btn-lg px-4">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="TaskFlow Dashboard"
                  className="img-fluid rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features-section">
          <div className="container">
            <div className="section-header text-center">
              <h2>Powerful Features</h2>
              <p className="lead">Everything you need to manage your projects efficiently</p>
            </div>
            <div className="row g-4 py-5" id="features-container">
              {/* Features will be loaded dynamically via AJAX */}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="pricing-section">
          <div className="container">
            <div className="section-header text-center">
              <h2>Pricing Plans</h2>
              <p className="lead">Choose the plan that fits your needs</p>
            </div>
            <div className="row g-4 py-5" id="pricing-container">
              {/* Pricing plans will be loaded dynamically via AJAX */}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials-section">
          <div className="container">
            <div className="section-header text-center">
              <h2>What Our Customers Say</h2>
              <p className="lead">Trusted by thousands of teams worldwide</p>
            </div>
            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner" id="testimonials-container">
                {/* Testimonials will be loaded dynamically via AJAX */}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
              <div className="carousel-indicators">{/* Indicators will be added dynamically */}</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-header">
                  <h2>Get in Touch</h2>
                  <p className="lead">Have questions? We're here to help!</p>
                </div>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <h5>Address</h5>
                      <p>123 Innovation Street, Tech City, TC 12345</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <div>
                      <h5>Phone</h5>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <h5>Email</h5>
                      <p>info@taskflow.com</p>
                    </div>
                  </div>
                </div>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-form-wrapper">
                  <form id="contactForm" className="contact-form">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                      <div className="invalid-feedback">Please enter your name</div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                      <div className="invalid-feedback">Please enter a valid email address</div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">
                        Subject
                      </label>
                      <input type="text" className="form-control" id="subject" placeholder="Subject" required />
                      <div className="invalid-feedback">Please enter a subject</div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows={5}
                        placeholder="Your Message"
                        required
                      ></textarea>
                      <div className="invalid-feedback">Please enter your message</div>
                    </div>
                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="newsletter" defaultChecked />
                      <label className="form-check-label" htmlFor="newsletter">
                        Subscribe to our newsletter
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg w-100">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-brand">
                  <i className="fas fa-tasks me-2"></i>TaskFlow
                </div>
                <p>Simplify project management and boost team productivity with our intuitive platform.</p>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-2">
                <h5>Company</h5>
                <ul className="footer-links">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Press</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2">
                <h5>Product</h5>
                <ul className="footer-links">
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Integrations</a>
                  </li>
                  <li>
                    <a href="#">Roadmap</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2">
                <h5>Resources</h5>
                <ul className="footer-links">
                  <li>
                    <a href="#">Documentation</a>
                  </li>
                  <li>
                    <a href="#">Guides</a>
                  </li>
                  <li>
                    <a href="#">Webinars</a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2">
                <h5>Legal</h5>
                <ul className="footer-links">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                  <li>
                    <a href="#">Compliance</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <p className="copyright">© 2023 TaskFlow. All rights reserved.</p>
              </div>
              <div className="col-md-6">
                <div className="footer-bottom-links">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms of Service</a>
                  <a href="#">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Chat Box */}
        <div className="chat-box">
          <div className="chat-box-header">
            <h5>
              <i className="fas fa-comments me-2"></i>Live Support
            </h5>
            <button className="chat-box-toggle">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="chat-box-body">
            <div className="chat-box-overlay"></div>
            <div className="chat-logs">
              <div className="chat-msg bot">
                <div className="chat-msg-content">
                  <div className="chat-msg-text">Hi there! How can I help you today?</div>
                  <div className="chat-msg-time">10:20 AM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="chat-input-box">
            <form id="chatForm">
              <input type="text" id="chatMessage" placeholder="Send a message..." className="chat-input" disabled />
              <button type="submit" className="chat-submit" disabled>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
            <div className="login-prompt">
              <p>
                Please <Link href="/login">login</Link> to chat with support
              </p>
            </div>
          </div>
        </div>

        {/* Notification */}
        <div className="notification" id="notification">
          <div className="notification-content">
            <i className="notification-icon fas fa-info-circle"></i>
            <div className="notification-message">
              Welcome to TaskFlow! Sign up today and get 30% off your first month.
            </div>
          </div>
          <button className="notification-close" id="notification-close-btn">
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Inline script for notification close */}
        <Script id="notification-close-script" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              const closeBtn = document.getElementById('notification-close-btn');
              const notification = document.getElementById('notification');
              
              if (closeBtn && notification) {
                closeBtn.addEventListener('click', function() {
                  notification.classList.remove('show');
                });
              }
            });
          `}
        </Script>

        {/* Back to Top Button */}
        <a href="#" className="back-to-top">
          <i className="fas fa-arrow-up"></i>
        </a>

        {/* User Activity Tracker */}
        <div id="activity-tracker" className="position-fixed bottom-0 start-0 m-3 p-2 bg-light rounded shadow d-none">
          <small>Tracking your activity...</small>
        </div>

        {/* Scripts */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/js/enhanced-script.js" strategy="afterInteractive" />
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
        
        // Initialize all carousels
        var carouselList = [].slice.call(document.querySelectorAll('.carousel'));
        carouselList.map(function (carouselEl) {
          return new bootstrap.Carousel(carouselEl);
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
          
          /* Custom Scrollbar */
          ::-webkit-scrollbar {
            width: 10px;
          }
          
          ::-webkit-scrollbar-track {
            background: var(--light-gray);
          }
          
          ::-webkit-scrollbar-thumb {
            background: var(--gray-color);
            border-radius: 5px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: var(--primary-color);
          }
          
          /* Navbar */
          .navbar {
            background-color: transparent;
            padding: 1rem 0;
            transition: var(--transition);
          }
          
          .navbar.scrolled {
            background-color: var(--dark-color);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            padding: 0.5rem 0;
          }
          
          .navbar-brand {
            font-weight: 700;
            font-size: 1.5rem;
            color: blue;
          }
          
          .navbar-brand i {
            color: blue;
          }
          
          .navbar-nav .nav-link {
            color: blue;
            font-weight: 500;
            padding: 0.5rem 1rem;
            transition: var(--transition);
          }
          
          .navbar-nav .nav-link:hover {
            color: var(--primary-color);
          }
          
          .navbar-nav .nav-link.active {
            color: lightblue;
          }
          
          .premium-feature {
            display: none;
          }
          
          .logged-in .premium-feature {
            display: block;
          }
          
          /* Hero Section */
          .hero-section {
            background: linear-gradient(135deg, var(--dark-color) 0%, #374151 100%);
            color: var(--light-color);
            padding: 8rem 0 5rem;
            position: relative;
            overflow: hidden;
          }
          
          .hero-section::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"%3E%3Cpath fill="%234f46e5" fillOpacity="0.1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"%3E%3C/path%3E%3C/svg%3E');
            background-size: cover;
            background-position: center;
            opacity: 0.5;
          }
          
          .hero-section h1 {
            font-weight: 800;
            margin-bottom: 1.5rem;
          }
          
          .hero-section .lead {
            font-size: 1.25rem;
            margin-bottom: 2rem;
          }
          
          .hero-section img {
            box-shadow: var(--box-shadow);
            transition: var(--transition);
          }
          
          .hero-section img:hover {
            transform: translateY(-10px);
          }
          
          /* Section Styles */
          section {
            padding: 5rem 0;
          }
          
          .section-header {
            margin-bottom: 3rem;
          }
          
          .section-header h2 {
            font-weight: 700;
            margin-bottom: 1rem;
            position: relative;
            display: inline-block;
          }
          
          .section-header h2::after {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 50px;
            height: 3px;
            background-color: var(--primary-color);
          }
          
          .section-header .lead {
            color: var(--gray-color);
          }
          
          /* Features Section */
          .features-section {
            background-color: var(--light-color);
          }
          
          .feature-card {
            background-color: var(--card-bg);
            border-radius: var(--border-radius);
            padding: 2rem;
            box-shadow: var(--box-shadow);
            transition: var(--transition);
            height: 100%;
          }
          
          .feature-card:hover {
            transform: translateY(-10px);
          }
          
          .feature-card .icon-wrapper {
            width: 60px;
            height: 60px;
            background-color: rgba(79, 70, 229, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
          }
          
          .feature-card .icon-wrapper i {
            font-size: 1.5rem;
            color: var(--primary-color);
          }
          
          .feature-card h3 {
            font-weight: 600;
            margin-bottom: 1rem;
          }
          
          .feature-card p {
            color: var(--gray-color);
            margin-bottom: 0;
          }
          
          /* Pricing Section */
          .pricing-section {
            background-color: var(--body-bg);
          }
          
          .pricing-card {
            background-color: var(--card-bg);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            transition: var(--transition);
            overflow: hidden;
            position: relative;
            height: 100%;
          }
          
          .pricing-card:hover {
            transform: translateY(-10px);
          }
          
          .pricing-card.featured {
            border: 2px solid var(--primary-color);
            transform: scale(1.05);
          }
          
          .pricing-card.featured:hover {
            transform: scale(1.05) translateY(-10px);
          }
          
          .popular-badge {
            position: absolute;
            top: 0;
            right: 0;
            background-color: var(--primary-color);
            color: white;
            padding: 0.5rem 1rem;
            font-size: 0.75rem;
            font-weight: 600;
            border-bottom-left-radius: var(--border-radius);
          }
          
          .pricing-header {
            padding: 2rem;
            text-align: center;
            border-bottom: 1px solid var(--light-gray);
          }
          
          .pricing-header h3 {
            font-weight: 600;
            margin-bottom: 1rem;
          }
          
          .price {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--dark-color);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .currency {
            font-size: 1.5rem;
            margin-right: 0.25rem;
            align-self: flex-start;
          }
          
          .period {
            font-size: 1rem;
            color: var(--gray-color);
            font-weight: 400;
            align-self: flex-end;
          }
          
          .pricing-features {
            padding: 2rem;
          }
          
          .pricing-features ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          
          .pricing-features li {
            padding: 0.5rem 0;
            display: flex;
            align-items: center;
          }
          
          .pricing-features li i {
            margin-right: 0.5rem;
            color: var(--success-color);
          }
          
          .pricing-features li.disabled {
            color: var(--gray-color);
          }
          
          .pricing-features li.disabled i {
            color: var(--danger-color);
          }
          
          .pricing-footer {
            padding: 0 2rem 2rem;
          }
          
          /* Testimonials Section */
          .testimonials-section {
            background-color: var(--light-color);
            position: relative;
            overflow: hidden;
          }
          
          .testimonial-card {
            background-color: var(--card-bg);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            padding: 2rem;
            margin: 0 auto;
            max-width: 800px;
          }
          
          .testimonial-content {
            font-size: 1.1rem;
            font-style: italic;
            margin-bottom: 1.5rem;
            position: relative;
          }
          
          .testimonial-content::before {
            content: "\\201C";
            font-size: 4rem;
            position: absolute;
            left: -1.5rem;
            top: -2rem;
            color: rgba(79, 70, 229, 0.1);
            font-family: Georgia, serif;
          }
          
          .testimonial-author {
            display: flex;
            align-items: center;
          }
          
          .testimonial-author img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin-right: 1rem;
            object-fit: cover;
          }
          
          .testimonial-author h5 {
            margin-bottom: 0.25rem;
            font-weight: 600;
          }
          
          .testimonial-author p {
            margin-bottom: 0;
            color: var(--gray-color);
          }
          
          .carousel-indicators {
            bottom: -3rem;
          }
          
          .carousel-indicators button {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: var(--gray-color);
            opacity: 0.5;
          }
          
          .carousel-indicators button.active {
            background-color: var(--primary-color);
            opacity: 1;
          }
          
          .carousel-control-prev,
          .carousel-control-next {
            width: 40px;
            height: 40px;
            background-color: var(--primary-color);
            border-radius: 50%;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0.7;
          }
          
          .carousel-control-prev {
            left: 1rem;
          }
          
          .carousel-control-next {
            right: 1rem;
          }
          
          .carousel-control-prev:hover,
          .carousel-control-next:hover {
            opacity: 1;
          }
          
          /* Contact Section */
          .contact-section {
            background-color: var(--body-bg);
          }
          
          .contact-info {
            margin-bottom: 2rem;
          }
          
          .contact-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 1.5rem;
          }
          
          .contact-item i {
            font-size: 1.5rem;
            color: var(--primary-color);
            margin-right: 1rem;
            margin-top: 0.25rem;
          }
          
          .contact-item h5 {
            font-weight: 600;
            margin-bottom: 0.25rem;
          }
          
          .contact-item p {
            margin-bottom: 0;
            color: var(--gray-color);
          }
          
          .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
          }
          
          .social-link {
            width: 40px;
            height: 40px;
            background-color: var(--light-gray);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--dark-color);
            transition: var(--transition);
          }
          
          .social-link:hover {
            background-color: var(--primary-color);
            color: var(--light-color);
            transform: translateY(-5px);
          }
          
          .contact-form-wrapper {
            background-color: var(--card-bg);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            padding: 2rem;
          }
          
          .contact-form .form-control {
            border-radius: var(--border-radius);
            padding: 0.75rem 1rem;
            border: 1px solid var(--light-gray);
          }
          
          .contact-form .form-control:focus {
            border-color: var(--primary-color);
            box-shadow: 0 0 0 0.25rem rgba(79, 70, 229, 0.25);
          }
          
          /* Footer */
          .footer {
            background-color: var(--dark-color);
            color: var(--light-color);
            padding: 5rem 0 2rem;
          }
          
          .footer-brand {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }
          
          .footer-brand i {
            color: var(--primary-color);
          }
          
          .footer h5 {
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: var(--light-color);
          }
          
          .footer p {
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 1.5rem;
          }
          
          .footer-links {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          
          .footer-links li {
            margin-bottom: 0.75rem;
          }
          
          .footer-links a {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            transition: var(--transition);
          }
          
          .footer-links a:hover {
            color: var(--primary-color);
          }
          
          .footer hr {
            border-color: rgba(255, 255, 255, 0.1);
            margin: 2rem 0;
          }
          
          .copyright {
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 0;
          }
          
          .footer-bottom-links {
            display: flex;
            justify-content: flex-end;
            gap: 1.5rem;
          }
          
          .footer-bottom-links a {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            font-size: 0.875rem;
            transition: var(--transition);
          }
          
          .footer-bottom-links a:hover {
            color: var(--primary-color);
          }
          
          /* Chat Box */
          .chat-box {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 350px;
            height: 400px;
            background-color: var(--card-bg);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            display: flex;
            flex-direction: column;
            z-index: 1000;
            transform: translateY(calc(100% - 60px));
            transition: var(--transition);
          }
          
          .chat-box.open {
            transform: translateY(0);
          }
          
          .chat-box-header {
            background-color: var(--primary-color);
            color: var(--light-color);
            padding: 1rem;
            border-top-left-radius: var(--border-radius);
            border-top-right-radius: var(--border-radius);
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
          }
          
          .chat-box-header h5 {
            margin-bottom: 0;
            font-weight: 600;
          }
          
          .chat-box-toggle {
            background: none;
            border: none;
            color: var(--light-color);
            font-size: 1.25rem;
            cursor: pointer;
            display: none;
          }
          
          .chat-box.open .chat-box-toggle {
            display: block;
          }
          
          .chat-box-body {
            flex: 1;
            overflow-y: auto;
            padding: 1rem;
            position: relative;
          }
          
          .chat-box-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10;
          }
          
          .logged-in .chat-box-overlay {
            display: none;
          }
          
          .chat-logs {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          
          .chat-msg {
            display: flex;
            margin-bottom: 1rem;
          }
          
          .chat-msg.user {
            justify-content: flex-end;
          }
          
          .chat-msg-content {
            max-width: 80%;
          }
          
          .chat-msg-text {
            padding: 0.75rem 1rem;
            border-radius: 1rem;
            font-size: 0.875rem;
          }
          
          .chat-msg.bot .chat-msg-text {
            background-color: var(--light-gray);
            border-bottom-left-radius: 0;
          }
          
          .chat-msg.user .chat-msg-text {
            background-color: var(--primary-color);
            color: var(--light-color);
            border-bottom-right-radius: 0;
          }
          
          .chat-msg-time {
            font-size: 0.75rem;
            color: var(--gray-color);
            margin-top: 0.25rem;
            text-align: right;
          }
          
          .chat-input-box {
            padding: 1rem;
            border-top: 1px solid var(--light-gray);
          }
          
          .chat-input-box form {
            display: flex;
            gap: 0.5rem;
          }
          
          .chat-input {
            flex: 1;
            padding: 0.75rem 1rem;
            border: 1px solid var(--light-gray);
            border-radius: 2rem;
            outline: none;
          }
          
          .chat-input:focus {
            border-color: var(--primary-color);
          }
          
          .chat-submit {
            width: 40px;
            height: 40px;
            background-color: var(--primary-color);
            color: var(--light-color);
            border: none;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: var(--transition);
          }
          
          .chat-submit:hover {
            background-color: var(--primary-hover);
          }
          
          .login-prompt {
            text-align: center;
            margin-top: 0.5rem;
            font-size: 0.875rem;
          }
          
          .login-prompt a {
            color: var(--primary-color);
            font-weight: 500;
          }
          
          .logged-in .login-prompt {
            display: none;
          }
          
          /* Notification */
          .notification {
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
          
          .notification.show {
            transform: translateX(0);
          }
          
          .notification-content {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          
          .notification-icon {
            font-size: 1.5rem;
            color: var(--primary-color);
          }
          
          .notification-message {
            font-size: 0.875rem;
          }
          
          .notification-close {
            background: none;
            border: none;
            color: var(--gray-color);
            cursor: pointer;
            transition: var(--transition);
          }
          
          .notification-close:hover {
            color: var(--danger-color);
          }
          
          /* Back to Top Button */
          .back-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            background-color: var(--primary-color);
            color: var(--light-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            opacity: 0;
            visibility: hidden;
            transition: var(--transition);
            z-index: 999;
          }
          
          .back-to-top.show {
            opacity: 1;
            visibility: visible;
          }
          
          .back-to-top:hover {
            background-color: var(--primary-hover);
            color: var(--light-color);
            transform: translateY(-5px);
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
          
          .password-strength {
            font-size: 0.75rem;
          }
          
          /* Responsive Styles */
          @media (max-width: 991.98px) {
            .navbar-collapse {
              background-color: var(--dark-color);
              padding: 1rem;
              border-radius: var(--border-radius);
              margin-top: 0.5rem;
            }
          
            .pricing-card.featured {
              transform: scale(1);
            }
          
            .pricing-card.featured:hover {
              transform: translateY(-10px);
            }
          
            .footer-bottom-links {
              justify-content: flex-start;
              margin-top: 1rem;
            }
          }
          
          @media (max-width: 767.98px) {
            .hero-section {
              padding: 6rem 0 3rem;
              text-align: center;
            }
          
            .hero-section img {
              margin-top: 2rem;
            }
          
            .section-header {
              text-align: center;
            }
          
            .section-header h2::after {
              left: 50%;
              transform: translateX(-50%);
            }
          
            .contact-info {
              text-align: center;
            }
          
            .contact-item {
              flex-direction: column;
              align-items: center;
            }
          
            .contact-item i {
              margin-right: 0;
              margin-bottom: 0.5rem;
            }
          
            .social-links {
              justify-content: center;
            }
          
            .chat-box {
              width: 300px;
            }
          
            .notification {
              width: 300px;
            }
          }
          
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
          
          /* Animations */
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          @keyframes slideInRight {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0);
            }
          }
          
          @keyframes slideInUp {
            from {
              transform: translateY(100%);
            }
            to {
              transform: translateY(0);
            }
          }
          
          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }
          
          .fade-in {
            animation: fadeIn 0.5s ease-in-out;
          }
          
          .slide-in-right {
            animation: slideInRight 0.5s ease-in-out;
          }
          
          .slide-in-up {
            animation: slideInUp 0.5s ease-in-out;
          }
          
          .pulse {
            animation: pulse 2s infinite;
          }

          /* New Animations for Dynamic Content */
          .content-fade-in {
            opacity: 0;
            animation: fadeIn 0.8s ease-in-out forwards;
          }
          
          .content-slide-up {
            opacity: 0;
            transform: translateY(20px);
            animation: contentSlideUp 0.8s ease-in-out forwards;
          }
          
          @keyframes contentSlideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          /* Highlight effect for new elements */
          .highlight-new {
            animation: highlightNew 2s ease-in-out;
          }
          
          @keyframes highlightNew {
            0% {
              background-color: rgba(79, 70, 229, 0.1);
            }
            100% {
              background-color: transparent;
            }
          }
          
          /* Activity Tracker */
          #activity-tracker {
            z-index: 1000;
            font-size: 0.8rem;
            opacity: 0.8;
          }
          
          /* Loading Spinner */
          .loading-spinner {
            display: inline-block;
            width: 50px;
            height: 50px;
            border: 3px solid rgba(79, 70, 229, 0.3);
            border-radius: 50%;
            border-top-color: var(--primary-color);
            animation: spin 1s ease-in-out infinite;
          }
          
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
          
          /* Tooltip Styles */
          .custom-tooltip {
            position: relative;
            display: inline-block;
          }
          
          .custom-tooltip .tooltip-text {
            visibility: hidden;
            width: 120px;
            background-color: var(--dark-color);
            color: var(--light-color);
            text-align: center;
            border-radius: 6px;
            padding: 5px;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            margin-left: -60px;
            opacity: 0;
            transition: opacity 0.3s;
          }
          
          .custom-tooltip .tooltip-text::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: var(--dark-color) transparent transparent transparent;
          }
          
          .custom-tooltip:hover .tooltip-text {
            visibility: visible;
            opacity: 1;
          }
        `}</style>
      </body>
    </html>
  )
}
