/**
 * TaskFlow Enhanced JavaScript
 * This script adds dynamic functionality using jQuery, AJAX, and DOM manipulation
 */

$(document).ready(() => {
  // Track user activity
  const activityTracker = $("#activity-tracker")
  let userActive = false
  let lastActivity = new Date()

  // Show activity tracker for logged in users
  if (localStorage.getItem("isLoggedIn") === "true") {
    setTimeout(() => {
      activityTracker.removeClass("d-none").addClass("slide-in-up")
      setTimeout(() => {
        activityTracker.addClass("d-none")
      }, 3000)
    }, 2000)
  }

  // Track mouse movement and clicks
  $(document).on("mousemove click keypress", () => {
    userActive = true
    lastActivity = new Date()

    // Only show for logged in users
    if (localStorage.getItem("isLoggedIn") === "true") {
      if (activityTracker.hasClass("d-none")) {
        activityTracker.removeClass("d-none").addClass("slide-in-up")
        setTimeout(() => {
          activityTracker.addClass("d-none")
        }, 1500)
      }
    }
  })

  // Check for inactivity every 60 seconds
  setInterval(() => {
    const now = new Date()
    const timeSinceLastActivity = now - lastActivity

    // If inactive for more than 5 minutes and logged in
    if (timeSinceLastActivity > 300000 && localStorage.getItem("isLoggedIn") === "true") {
      showNotification("You seem to be inactive. Need any help?", "info")
      lastActivity = new Date() // Reset the timer
    }
  }, 60000)

  // Navbar scroll effect with jQuery
  $(window).scroll(() => {
    if ($(window).scrollTop() > 50) {
      $(".navbar").addClass("scrolled")
    } else {
      $(".navbar").removeClass("scrolled")
    }
  })

  // Smooth scrolling for navbar links with jQuery
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault()

    const targetId = $(this).attr("href")
    const $targetElement = $(targetId)

    if ($targetElement.length) {
      $("html, body").animate(
        {
          scrollTop: $targetElement.offset().top - 70,
        },
        800,
        "swing",
      )
    }
  })

  // Back to top button with jQuery
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").addClass("show")
    } else {
      $(".back-to-top").removeClass("show")
    }
  })

  $(".back-to-top").on("click", (e) => {
    e.preventDefault()
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800,
      "swing",
    )
  })

  // Chat box toggle with jQuery
  $(".chat-box-header").on("click", () => {
    $(".chat-box").toggleClass("open")
  })

  $(".chat-box-toggle").on("click", (e) => {
    e.stopPropagation()
    $(".chat-box").removeClass("open")
  })

  // Notification with jQuery
  setTimeout(() => {
    $("#notification").addClass("show")

    // Direct binding for notification close button
    $("#notification-close-btn").on("click", () => {
      $("#notification").removeClass("show")
    })
  }, 2000)

  // Load features data using AJAX
  $.ajax({
    url: "/data/features.json",
    type: "GET",
    dataType: "json",
    success: (data) => {
      const featuresContainer = $("#features-container")
      featuresContainer.empty()

      // Add loading indicator
      featuresContainer.html('<div class="col-12 text-center"><div class="loading-spinner"></div></div>')

      // Simulate network delay
      setTimeout(() => {
        featuresContainer.empty()

        // Loop through features and create HTML
        $.each(data, (index, feature) => {
          const featureCard = `
            <div class="col-md-4 content-slide-up" style="animation-delay: ${index * 0.1}s">
              <div class="feature-card">
                <div class="icon-wrapper">
                  <i class="${feature.icon}"></i>
                </div>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
              </div>
            </div>
          `
          featuresContainer.append(featureCard)
        })
      }, 1000)
    },
    error: (xhr, status, error) => {
      console.error("Error loading features:", error)
      showNotification("Failed to load features. Please try again later.", "error")
    },
  })

  // Load pricing data using AJAX
  $.ajax({
    url: "/data/pricing.json",
    type: "GET",
    dataType: "json",
    success: (data) => {
      const pricingContainer = $("#pricing-container")
      pricingContainer.empty()

      // Add loading indicator
      pricingContainer.html('<div class="col-12 text-center"><div class="loading-spinner"></div></div>')

      // Simulate network delay
      setTimeout(() => {
        pricingContainer.empty()

        // Loop through pricing plans and create HTML
        $.each(data, (index, plan) => {
          let featuresHTML = ""

          // Create features list
          $.each(plan.features, (i, feature) => {
            if (feature.included) {
              featuresHTML += `<li><i class="fas fa-check"></i> ${feature.text}</li>`
            } else {
              featuresHTML += `<li class="disabled"><i class="fas fa-times"></i> ${feature.text}</li>`
            }
          })

          // Create pricing card
          const pricingCard = `
            <div class="col-md-4 content-slide-up" style="animation-delay: ${index * 0.1}s">
              <div class="pricing-card ${plan.popular ? "featured" : ""}">
                ${plan.popular ? '<div class="popular-badge">Most Popular</div>' : ""}
                <div class="pricing-header">
                  <h3>${plan.name}</h3>
                  <div class="price">
                    <span class="currency">$</span>
                    <span class="amount">${plan.price}</span>
                    <span class="period">/month</span>
                  </div>
                </div>
                <div class="pricing-features">
                  <ul>
                    ${featuresHTML}
                  </ul>
                </div>
                <div class="pricing-footer">
                  <a href="/signup" class="btn ${plan.popular ? "btn-primary" : "btn-outline-primary"} btn-lg w-100">Get Started</a>
                </div>
              </div>
            </div>
          `
          pricingContainer.append(pricingCard)
        })

        // Add hover effects with jQuery
        $(".pricing-card").hover(
          function () {
            $(this).find(".btn").addClass("pulse")
          },
          function () {
            $(this).find(".btn").removeClass("pulse")
          },
        )
      }, 1500)
    },
    error: (xhr, status, error) => {
      console.error("Error loading pricing:", error)
      showNotification("Failed to load pricing information. Please try again later.", "error")
    },
  })

  // Load testimonials data using AJAX
  $.ajax({
    url: "/data/testimonials.json",
    type: "GET",
    dataType: "json",
    success: (data) => {
      const testimonialsContainer = $("#testimonials-container")
      const carouselIndicators = $(".carousel-indicators")

      testimonialsContainer.empty()
      carouselIndicators.empty()

      // Add loading indicator
      testimonialsContainer.html(
        '<div class="carousel-item active"><div class="testimonial-card text-center"><div class="loading-spinner mx-auto"></div></div></div>',
      )

      // Simulate network delay
      setTimeout(() => {
        testimonialsContainer.empty()

        // Loop through testimonials and create HTML
        $.each(data, (index, testimonial) => {
          const isActive = index === 0 ? "active" : ""

          // Create testimonial slide
          const testimonialSlide = `
            <div class="carousel-item ${isActive}">
              <div class="testimonial-card content-fade-in">
                <div class="testimonial-content">
                  <p>${testimonial.content}</p>
                </div>
                <div class="testimonial-author">
                  <img src="${testimonial.image}" alt="${testimonial.author}" class="rounded-circle">
                  <div>
                    <h5>${testimonial.author}</h5>
                    <p>${testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          `

          // Create indicator button
          const indicatorButton = `
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="${index}" ${isActive ? 'class="active" aria-current="true"' : ""} aria-label="Slide ${index + 1}"></button>
          `

          testimonialsContainer.append(testimonialSlide)
          carouselIndicators.append(indicatorButton)
        })

        // Initialize carousel with Bootstrap's native JavaScript
        setTimeout(() => {
          const testimonialCarousel = document.getElementById("testimonialCarousel")
          if (testimonialCarousel) {
            new bootstrap.Carousel(testimonialCarousel, {
              interval: 5000,
            })
          }
        }, 1500)
      }, 1200)
    },
    error: (xhr, status, error) => {
      console.error("Error loading testimonials:", error)
      showNotification("Failed to load testimonials. Please try again later.", "error")
    },
  })

  // Load user stats and display in a floating stats bar
  $.ajax({
    url: "/data/user-stats.json",
    type: "GET",
    dataType: "json",
    success: (data) => {
      // Create stats bar HTML
      const statsBar = `
        <div id="stats-bar" class="position-fixed bottom-0 start-0 end-0 bg-dark text-white py-2 text-center d-none">
          <div class="container">
            <div class="row">
              <div class="col-md-2">
                <div class="d-flex align-items-center justify-content-center">
                  <i class="fas fa-users me-2"></i>
                  <div>
                    <div class="h5 mb-0 counter" data-target="${data.activeUsers}">0</div>
                    <small>Active Users</small>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="d-flex align-items-center justify-content-center">
                  <i class="fas fa-check-circle me-2"></i>
                  <div>
                    <div class="h5 mb-0 counter" data-target="${data.projectsCompleted}">0</div>
                    <small>Projects Completed</small>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="d-flex align-items-center justify-content-center">
                  <i class="fas fa-tasks me-2"></i>
                  <div>
                    <div class="h5 mb-0 counter" data-target="${data.tasksCompleted}">0</div>
                    <small>Tasks Completed</small>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="d-flex align-items-center justify-content-center">
                  <i class="fas fa-chart-line me-2"></i>
                  <div>
                    <div class="h5 mb-0 counter" data-target="${data.teamEfficiencyIncrease}">0</div>
                    <small>% Efficiency Increase</small>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="d-flex align-items-center justify-content-center">
                  <i class="fas fa-smile me-2"></i>
                  <div>
                    <div class="h5 mb-0 counter" data-target="${data.customerSatisfaction}">0</div>
                    <small>% Customer Satisfaction</small>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="d-flex align-items-center justify-content-center">
                  <i class="fas fa-clock me-2"></i>
                  <div>
                    <div class="h5 mb-0">${data.averageResponseTime}</div>
                    <small>Avg. Response Time</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="btn-close btn-close-white position-absolute top-0 end-0 m-2" id="close-stats"></button>
        </div>
      `

      // Append stats bar to body
      $("body").append(statsBar)

      // Show stats bar after delay
      setTimeout(() => {
        $("#stats-bar").removeClass("d-none").addClass("slide-in-up")

        // Animate counters
        $(".counter").each(function () {
          const $this = $(this)
          const target = Number.parseInt($this.attr("data-target"))

          // Determine increment based on target value
          const increment = target > 1000 ? Math.ceil(target / 100) : 1
          let current = 0

          const timer = setInterval(() => {
            current += increment
            $this.text(current.toLocaleString())

            if (current >= target) {
              $this.text(target.toLocaleString())
              clearInterval(timer)
            }
          }, 10)
        })
      }, 3000)

      // Close stats bar
      $("#close-stats").on("click", () => {
        $("#stats-bar").addClass("slide-out-down")
        setTimeout(() => {
          $("#stats-bar").remove()
        }, 500)
      })
    },
  })

  // Enhanced form validation with jQuery
  $("#contactForm").on("submit", function (e) {
    e.preventDefault()

    // Check if form is valid
    if (validateForm($(this))) {
      // Show loading state
      const submitButton = $(this).find('button[type="submit"]')
      const originalText = submitButton.html()

      submitButton.prop("disabled", true).html('<i class="fas fa-spinner fa-spin"></i> Sending...')

      // Simulate AJAX form submission
      setTimeout(() => {
        // Create form data object
        const formData = {
          name: $("#name").val(),
          email: $("#email").val(),
          subject: $("#subject").val(),
          message: $("#message").val(),
          newsletter: $("#newsletter").is(":checked"),
        }

        // Log form data (in a real app, this would be sent to the server)
        console.log("Form data:", formData)

        // Show success message
        submitButton.html('<i class="fas fa-check"></i> Message Sent!')

        // Show success notification
        showNotification("Your message has been sent successfully!", "success")

        // Reset form
        $(this)[0].reset()

        // Reset button after delay
        setTimeout(() => {
          submitButton.prop("disabled", false).html(originalText)
        }, 2000)
      }, 2000)
    }
  })

  // Chat functionality with jQuery
  $("#chatForm").on("submit", (e) => {
    e.preventDefault()

    const chatInput = $("#chatMessage")
    const chatLogs = $(".chat-logs")

    // Check if user is logged in and input is not empty
    if (localStorage.getItem("isLoggedIn") === "true" && chatInput.val().trim()) {
      const message = chatInput.val().trim()
      const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

      // Add user message with jQuery
      const userMessageHTML = `
        <div class="chat-msg user">
          <div class="chat-msg-content">
            <div class="chat-msg-text">${message}</div>
            <div class="chat-msg-time">${currentTime}</div>
          </div>
        </div>
      `

      chatLogs.append(userMessageHTML)
      chatInput.val("")

      // Scroll to bottom
      chatLogs.scrollTop(chatLogs[0].scrollHeight)

      // Simulate typing indicator
      const typingIndicator = `
        <div class="chat-msg bot typing-indicator">
          <div class="chat-msg-content">
            <div class="chat-msg-text">
              <span class="typing-dot"></span>
              <span class="typing-dot"></span>
              <span class="typing-dot"></span>
            </div>
          </div>
        </div>
      `

      chatLogs.append(typingIndicator)
      chatLogs.scrollTop(chatLogs[0].scrollHeight)

      // Simulate bot response after a delay
      setTimeout(() => {
        // Remove typing indicator
        $(".typing-indicator").remove()

        // Get response based on message content
        const botResponse = getBotResponse(message)

        // Add bot message with jQuery
        const botMessageHTML = `
          <div class="chat-msg bot">
            <div class="chat-msg-content">
              <div class="chat-msg-text">${botResponse}</div>
              <div class="chat-msg-time">${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
            </div>
          </div>
        `

        chatLogs.append(botMessageHTML)

        // Scroll to bottom
        chatLogs.scrollTop(chatLogs[0].scrollHeight)
      }, 1500)
    }
  })

  // Check login status on page load
  if (localStorage.getItem("isLoggedIn") === "true") {
    $("body").addClass("logged-in")

    // Enable chat
    $("#chatMessage, .chat-submit").prop("disabled", false)

    // Update login/signup buttons
    $(".navbar .d-flex").html(`
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fas fa-user-circle me-1"></i> My Account
        </button>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
          <li><a class="dropdown-item" href="#"><i class="fas fa-tachometer-alt me-2"></i>Dashboard</a></li>
          <li><a class="dropdown-item" href="#"><i class="fas fa-cog me-2"></i>Settings</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#" id="logout"><i class="fas fa-sign-out-alt me-2"></i>Logout</a></li>
        </ul>
      </div>
    `)

    // Add logout functionality
    $("#logout").on("click", (e) => {
      e.preventDefault()

      // Show confirmation dialog
      if (confirm("Are you sure you want to log out?")) {
        // Remove login state
        localStorage.removeItem("isLoggedIn")

        // Show notification
        showNotification("You have been logged out successfully.", "info")

        // Reload page after delay
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      }
    })
  }

  // Add tooltips to social links
  $(".social-link").each(function () {
    const platform = $(this).find("i").attr("class").split(" ")[1].split("-")[1]
    $(this).addClass("custom-tooltip")
    $(this).append(
      `<span class="tooltip-text">Follow us on ${platform.charAt(0).toUpperCase() + platform.slice(1)}</span>`,
    )
  })

  // Add animation to elements when they come into view
  $(window)
    .on("scroll", () => {
      $(".feature-card, .pricing-card, .testimonial-card, .contact-form-wrapper").each(function () {
        const elementTop = $(this).offset().top
        const elementHeight = $(this).outerHeight()
        const windowHeight = $(window).height()
        const scrollY = $(window).scrollTop()

        if (scrollY > elementTop - windowHeight + elementHeight / 2) {
          $(this).addClass("fade-in")
        }
      })
    })
    .scroll() // Trigger once on page load

  // Add dynamic theme switcher
  const themeToggle = `
    <div class="position-fixed top-0 end-0 m-3 z-index-1000">
      <button id="theme-toggle" class="btn btn-sm btn-outline-primary rounded-circle">
        <i class="fas fa-moon"></i>
      </button>
    </div>
  `

  $("body").append(themeToggle)

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    $("body").addClass("dark-theme")
    $("#theme-toggle i").removeClass("fa-moon").addClass("fa-sun")
  }

  // Toggle theme
  $("#theme-toggle").on("click", function () {
    $("body").toggleClass("dark-theme")

    if ($("body").hasClass("dark-theme")) {
      localStorage.setItem("theme", "dark")
      $(this).find("i").removeClass("fa-moon").addClass("fa-sun")
    } else {
      localStorage.setItem("theme", "light")
      $(this).find("i").removeClass("fa-sun").addClass("fa-moon")
    }
  })

  // Helper function to validate form
  function validateForm($form) {
    let isValid = true

    $form.find("input, textarea").each(function () {
      const $input = $(this)

      if ($input.prop("required") && !$input.val().trim()) {
        $input.addClass("is-invalid")
        isValid = false
      } else if ($input.attr("type") === "email" && $input.val().trim() && !isValidEmail($input.val())) {
        $input.addClass("is-invalid")
        isValid = false
      } else {
        $input.removeClass("is-invalid")
      }
    })

    return isValid
  }

  // Helper function to validate email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Helper function to show notifications
  function showNotification(message, type = "info") {
    // Remove any existing notifications
    $(".custom-notification").remove()

    // Set icon based on type
    let icon = "info-circle"
    let bgColor = "var(--info-color)"

    switch (type) {
      case "success":
        icon = "check-circle"
        bgColor = "var(--success-color)"
        break
      case "error":
        icon = "exclamation-circle"
        bgColor = "var(--danger-color)"
        break
      case "warning":
        icon = "exclamation-triangle"
        bgColor = "var(--warning-color)"
        break
    }

    // Create notification HTML
    const notification = `
      <div class="custom-notification position-fixed top-0 end-0 m-3 p-3 rounded shadow-lg text-white d-flex align-items-center" style="background-color: ${bgColor}; z-index: 9999; min-width: 300px; max-width: 400px; transform: translateX(100%);">
        <i class="fas fa-${icon} me-3 fa-lg"></i>
        <div>${message}</div>
        <button type="button" class="btn-close btn-close-white ms-auto"></button>
      </div>
    `

    // Append to body
    $("body").append(notification)

    // Animate in
    setTimeout(() => {
      $(".custom-notification").css("transform", "translateX(0)").css("transition", "transform 0.3s ease-in-out")
    }, 10)

    // Add close button functionality
    $(".custom-notification .btn-close").on("click", function () {
      const $notification = $(this).closest(".custom-notification")
      $notification.css("transform", "translateX(100%)")

      setTimeout(() => {
        $notification.remove()
      }, 300)
    })

    // Auto close after 5 seconds
    setTimeout(() => {
      const $notification = $(".custom-notification")
      if ($notification.length) {
        $notification.css("transform", "translateX(100%)")

        setTimeout(() => {
          $notification.remove()
        }, 300)
      }
    }, 5000)
  }

  // Helper function to get bot response based on message content
  function getBotResponse(message) {
    message = message.toLowerCase()

    if (message.includes("pricing") || message.includes("cost") || message.includes("price")) {
      return "Our pricing plans start at $9/month for the Basic plan. The Professional plan is $19/month, and the Enterprise plan is $49/month. Would you like me to tell you more about what's included in each plan?"
    } else if (message.includes("feature") || message.includes("what can")) {
      return "TaskFlow offers task management, progress tracking, team collaboration, calendar views, reporting, and mobile access. Which feature would you like to know more about?"
    } else if (message.includes("trial") || message.includes("free")) {
      return "Yes, we offer a 14-day free trial on all our plans with no credit card required. Would you like me to help you set up a trial account?"
    } else if (message.includes("support") || message.includes("help")) {
      return "Our support team is available via chat and email 24/7 for all customers. Enterprise customers also get dedicated phone support. How can we help you today?"
    } else if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello there! How can I help you with TaskFlow today?"
    } else if (message.includes("thank")) {
      return "You're welcome! Is there anything else I can help you with?"
    } else {
      return "Thanks for your message. Our team will get back to you shortly. In the meantime, can I help you with information about our features or pricing?"
    }
  }
})
