/**
 * Enhanced Signup Page JavaScript
 */

$(document).ready(() => {
  // Form validation with jQuery
  $("#signupForm").on("submit", function (e) {
    e.preventDefault()

    // Check if form is valid
    if (validateForm($(this))) {
      // Show loading state
      const submitButton = $(this).find('button[type="submit"]')
      const originalText = submitButton.html()

      submitButton.prop("disabled", true).html('<i class="fas fa-spinner fa-spin"></i> Creating account...')

      // Get form data
      const formData = {
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        email: $("#signupEmail").val(),
        password: $("#signupPassword").val(),
      }

      // Simulate AJAX signup request
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts", // Dummy API endpoint
        type: "POST",
        data: JSON.stringify(formData),
        contentType: "application/json",
        success: (response) => {
          // Show success message
          submitButton.html('<i class="fas fa-check"></i> Account created!')

          // Store login state
          localStorage.setItem("isLoggedIn", "true")
          localStorage.setItem("userEmail", formData.email)
          localStorage.setItem("userName", `${formData.firstName} ${formData.lastName}`)

          // Show welcome modal
          const modalHTML = `
            <div class="modal fade" id="welcomeModal" tabindex="-1" aria-labelledby="welcomeModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="welcomeModalLabel">Welcome to TaskFlow!</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body text-center">
                    <i class="fas fa-check-circle text-success fa-4x mb-3"></i>
                    <h4>Account Created Successfully</h4>
                    <p>Thank you for joining TaskFlow, ${formData.firstName}! Your account has been created successfully.</p>
                    <p>You now have access to all the features of our platform.</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <a href="/" class="btn btn-primary">Go to Dashboard</a>
                  </div>
                </div>
              </div>
            </div>
          `

          // Append modal to body
          $("body").append(modalHTML)

          // Show modal
          const welcomeModal = new bootstrap.Modal(document.getElementById("welcomeModal"))
          welcomeModal.show()

          // Redirect to home page when modal is closed
          $("#welcomeModal").on("hidden.bs.modal", () => {
            window.location.href = "/"
          })
        },
        error: (xhr, status, error) => {
          // Show error message
          submitButton.html(originalText).prop("disabled", false)

          // Show error notification
          showNotification("Signup failed. Please try again later.", "error")
        },
      })
    }
  })

  // Password strength checker
  const passwordInput = $("#signupPassword")
  const confirmPasswordInput = $("#confirmPassword")
  const progressBar = $(".password-strength .progress-bar")
  const passwordFeedback = $(".password-feedback")

  passwordInput.on("input", function () {
    const strength = checkPasswordStrength($(this).val())
    updatePasswordStrengthUI(strength, progressBar, passwordFeedback)

    // Check if passwords match
    if (confirmPasswordInput.val()) {
      if ($(this).val() !== confirmPasswordInput.val()) {
        confirmPasswordInput[0].setCustomValidity("Passwords do not match")
        confirmPasswordInput.addClass("is-invalid")
      } else {
        confirmPasswordInput[0].setCustomValidity("")
        confirmPasswordInput.removeClass("is-invalid")
      }
    }
  })

  confirmPasswordInput.on("input", function () {
    if ($(this).val() !== passwordInput.val()) {
      this.setCustomValidity("Passwords do not match")
      $(this).addClass("is-invalid")
    } else {
      this.setCustomValidity("")
      $(this).removeClass("is-invalid")
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
      passwordInput.attr("type") === "password"
      icon.removeClass("fa-eye-slash").addClass("fa-eye")
    }
  })

  // Social signup buttons
  $(".social-btn").on("click", function () {
    const platform = $(this).text().includes("Google") ? "Google" : "Facebook"

    // Show loading state
    $(this).prop("disabled", true).html(`<i class="fas fa-spinner fa-spin"></i> Connecting to ${platform}...`)

    // Simulate social signup
    setTimeout(() => {
      // Show modal for additional information
      const modalHTML = `
        <div class="modal fade" id="socialSignupModal" tabindex="-1" aria-labelledby="socialSignupModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="socialSignupModalLabel">Complete Your Profile</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>We need a little more information to complete your account setup.</p>
                <form id="socialSignupForm">
                  <div class="mb-3">
                    <label for="socialFirstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="socialFirstName" placeholder="First Name" required>
                  </div>
                  <div class="mb-3">
                    <label for="socialLastName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="socialLastName" placeholder="Last Name" required>
                  </div>
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="socialTermsCheck" required>
                    <label class="form-check-label" for="socialTermsCheck">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
                  </div>
                  <button type="submit" class="btn btn-primary w-100">Complete Signup</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      `

      // Reset button state
      $(this).prop("disabled", false).html(`<i class="fab fa-${platform.toLowerCase()}"></i> Sign up with ${platform}`)

      // Append modal to body
      $("body").append(modalHTML)

      // Show modal
      const socialSignupModal = new bootstrap.Modal(document.getElementById("socialSignupModal"))
      socialSignupModal.show()

      // Handle form submission
      $("#socialSignupForm").on("submit", function (e) {
        e.preventDefault()

        // Check if form is valid
        if (validateForm($(this))) {
          // Show loading state
          const submitButton = $(this).find('button[type="submit"]')
          const originalText = submitButton.html()

          submitButton.prop("disabled", true).html('<i class="fas fa-spinner fa-spin"></i> Completing signup...')

          // Simulate AJAX request
          setTimeout(() => {
            // Store login state
            localStorage.setItem("isLoggedIn", "true")
            localStorage.setItem("socialLogin", platform)
            localStorage.setItem("userName", `${$("#socialFirstName").val()} ${$("#socialLastName").val()}`)

            // Redirect to home page - FIXED URL
            window.location.href = "/"
          }, 2000)
        }
      })
    }, 2000)
  })

  // Add real-time validation for first name and last name
  $("#firstName, #lastName").on("input", function () {
    if ($(this).val().trim()) {
      $(this).removeClass("is-invalid")
    } else {
      $(this).addClass("is-invalid")
    }
  })

  // Add real-time validation for email
  $("#signupEmail").on("input", function () {
    const email = $(this).val().trim()

    if (email && isValidEmail(email)) {
      $(this).removeClass("is-invalid")

      // Check if email is already in use (simulated)
      if (email === "test@example.com") {
        $(this).addClass("is-invalid")
        $(this).next(".invalid-feedback").text("This email is already in use")
      }
    } else if (email) {
      $(this).addClass("is-invalid")
      $(this).next(".invalid-feedback").text("Please enter a valid email address")
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
      } else if ($input.attr("id") === "confirmPassword" && $input.val() !== $("#signupPassword").val()) {
        $input.addClass("is-invalid")
        isValid = false
      } else if ($input.attr("id") === "termsCheck" && !$input.is(":checked")) {
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

  // Helper function to check password strength
  function checkPasswordStrength(password) {
    let strength = 0

    if (password.length >= 8) {
      strength += 1
    }

    if (password.match(/[a-z]+/)) {
      strength += 1
    }

    if (password.match(/[A-Z]+/)) {
      strength += 1
    }

    if (password.match(/[0-9]+/)) {
      strength += 1
    }

    if (password.match(/[^a-zA-Z0-9]+/)) {
      strength += 1
    }

    return strength
  }

  // Helper function to update password strength UI
  function updatePasswordStrengthUI(strength, progressBar, feedback) {
    const width = strength * 20
    let text = ""
    let color = ""

    switch (strength) {
      case 0:
        text = "Too weak"
        color = "var(--danger-color)"
        break
      case 1:
        text = "Weak"
        color = "var(--danger-color)"
        break
      case 2:
        text = "Fair"
        color = "var(--warning-color)"
        break
      case 3:
        text = "Good"
        color = "var(--info-color)"
        break
      case 4:
        text = "Strong"
        color = "var(--success-color)"
        break
      case 5:
        text = "Very strong"
        color = "var(--success-color)"
        break
    }

    progressBar.css("width", width + "%").css("background-color", color)
    feedback.text("Password strength: " + text).css("color", color)
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
