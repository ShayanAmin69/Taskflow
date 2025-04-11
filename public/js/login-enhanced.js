/**
 * Enhanced Login Page JavaScript
 */

$(document).ready(() => {
  // Form validation with jQuery
  $("#loginForm").on("submit", function (e) {
    e.preventDefault()

    // Check if form is valid
    if (validateForm($(this))) {
      // Show loading state
      const submitButton = $(this).find('button[type="submit"]')
      const originalText = submitButton.html()

      submitButton.prop("disabled", true).html('<i class="fas fa-spinner fa-spin"></i> Logging in...')

      // Get form data
      const email = $("#loginEmail").val()
      const password = $("#loginPassword").val()
      const rememberMe = $("#rememberMe").is(":checked")

      // Simulate AJAX login request
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts", // Dummy API endpoint
        type: "POST",
        data: JSON.stringify({
          email: email,
          password: password,
          rememberMe: rememberMe,
        }),
        contentType: "application/json",
        success: (response) => {
          // Show success message
          submitButton.html('<i class="fas fa-check"></i> Success!')

          // Store login state
          localStorage.setItem("isLoggedIn", "true")
          localStorage.setItem("userEmail", email)

          // Redirect to home page after delay - FIXED URL
          setTimeout(() => {
            window.location.href = "/"
          }, 1000)
        },
        error: (xhr, status, error) => {
          // Show error message
          submitButton.html(originalText).prop("disabled", false)

          // Show error notification
          showNotification("Login failed. Please check your credentials and try again.", "error")
        },
      })
    }
  })

  // Toggle password visibility
  $(".toggle-password").on("click", function () {
    const passwordInput = $(this).prev("input")
    const icon = $(this).find("i")

    if (passwordInput.attr("type") === "password") {
      passwordInput.attr("type", "text")
      icon.removeClass("fa-eye").addClass("fa-eye-slash")
    } else {
      passwordInput.attr("type", "password")
      icon.removeClass("fa-eye-slash").addClass("fa-eye")
    }
  })

  // Social login buttons
  $(".social-btn").on("click", function () {
    const platform = $(this).text().includes("Google") ? "Google" : "Facebook"

    // Show loading state
    $(this).prop("disabled", true).html(`<i class="fas fa-spinner fa-spin"></i> Connecting to ${platform}...`)

    // Simulate social login
    setTimeout(() => {
      // Store login state
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem("socialLogin", platform)

      // Redirect to home page - FIXED URL
      window.location.href = "/"
    }, 2000)
  })

  // Forgot password link
  $(".forgot-password").on("click", (e) => {
    e.preventDefault()

    // Show forgot password modal
    const modalHTML = `
      <div class="modal fade" id="forgotPasswordModal" tabindex="-1" aria-labelledby="forgotPasswordModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="forgotPasswordModalLabel">Reset Password</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Enter your email address and we'll send you a link to reset your password.</p>
              <form id="forgotPasswordForm">
                <div class="mb-3">
                  <label for="resetEmail" class="form-label">Email</label>
                  <input type="email" class="form-control" id="resetEmail" placeholder="Your Email" required>
                  <div class="invalid-feedback">Please enter a valid email address</div>
                </div>
                <button type="submit" class="btn btn-primary w-100">Send Reset Link</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `

    // Append modal to body
    $("body").append(modalHTML)

    // Show modal
    const forgotPasswordModal = new bootstrap.Modal(document.getElementById("forgotPasswordModal"))
    forgotPasswordModal.show()

    // Handle form submission
    $("#forgotPasswordForm").on("submit", function (e) {
      e.preventDefault()

      // Check if form is valid
      if (validateForm($(this))) {
        // Show loading state
        const submitButton = $(this).find('button[type="submit"]')
        const originalText = submitButton.html()

        submitButton.prop("disabled", true).html('<i class="fas fa-spinner fa-spin"></i> Sending...')

        // Simulate AJAX request
        setTimeout(() => {
          // Show success message
          submitButton.html('<i class="fas fa-check"></i> Sent!')

          // Update modal content
          $(this)
            .parent()
            .html(`
            <div class="text-center">
              <i class="fas fa-envelope fa-3x text-success mb-3"></i>
              <h5>Reset Link Sent</h5>
              <p>We've sent a password reset link to <strong>${$("#resetEmail").val()}</strong>. Please check your email and follow the instructions.</p>
              <button type="button" class="btn btn-secondary mt-3" data-bs-dismiss="modal">Close</button>
            </div>
          `)
        }, 2000)
      }
    })

    // Remove modal from DOM when hidden
    $("#forgotPasswordModal").on("hidden.bs.modal", function () {
      $(this).remove()
    })
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

      // Add input event listener to remove invalid class when user types
      $input.on("input", function () {
        if ($(this).val().trim()) {
          $(this).removeClass("is-invalid")
        }
      })
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
})
