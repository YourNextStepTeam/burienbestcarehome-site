'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  email: string
  phone: string
  guests: string
}

interface FormErrors {
  name?: string
  email?: string
  guests?: string
}

interface OpenHouseFormProps {
  /**
   * When true, the form is rendered on a dark slate panel — labels become
   * light, inputs become a light cream fill, required asterisks + error text
   * become sunshine, submit button becomes sunshine.
   */
  onDark?: boolean
}

export default function OpenHouseForm({ onDark = false }: OpenHouseFormProps) {
  // Color tokens flip based on panel treatment
  const labelCls = onDark ? 'text-[color:var(--color-bone)]' : 'text-forest'
  const inputBase = onDark
    ? 'bg-white/95 border-white/40 text-ink placeholder:text-ink-soft/70'
    : 'bg-white border-sage/20'
  const inputError = onDark
    ? 'border-[color:var(--color-sunshine)] bg-[color:var(--color-sunshine)]/10'
    : 'border-terracotta bg-terracotta/5'
  const focusRing = onDark ? 'focus:ring-[color:var(--color-sunshine)]/60' : 'focus:ring-sage/50'
  const requiredCls = onDark ? 'text-[color:var(--color-sunshine)]' : 'text-terracotta'
  const errorTextCls = onDark
    ? 'text-[color:var(--color-sunshine)]'
    : 'text-terracotta-deep'
  const successBoxCls = onDark
    ? 'rounded-lg bg-[color:var(--color-sunshine)]/15 border border-[color:var(--color-sunshine)] p-4'
    : 'rounded-lg bg-sage/10 border border-sage p-4'
  const successTextCls = onDark ? 'text-[color:var(--color-bone)] font-medium' : 'text-forest font-medium'
  const submitCls = onDark
    ? 'w-full inline-flex items-center justify-center min-h-14 bg-[color:var(--color-sunshine)] hover:bg-[color:var(--color-sunshine-deep)] text-ink text-lg font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-sunshine)]/40'
    : 'w-full inline-flex items-center justify-center min-h-14 bg-[color:var(--color-sunshine)] hover:bg-[color:var(--color-sunshine-deep)] text-ink text-lg font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-sunshine)]/40'

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    guests: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.guests) {
      newErrors.guests = 'Please select number of guests'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Static site: open user's email client pre-filled with the RSVP data
    try {
      const subject = `Open House RSVP from ${formData.name}`
      const bodyLines = [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        formData.phone ? `Phone: ${formData.phone}` : null,
        `Number of guests: ${formData.guests}`,
      ].filter(Boolean)
      const body = bodyLines.join('\n')
      const mailto = `mailto:info@burienbestcarehome.site?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`

      window.location.href = mailto

      setSubmitSuccess(true)
      setFormData({ name: '', email: '', phone: '', guests: '' })
      setTimeout(() => setSubmitSuccess(false), 8000)
    } catch {
      setErrors({
        name: 'We could not open your email client. Please email info@burienbestcarehome.site directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-md mx-auto"
      noValidate
    >
      {submitSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={successBoxCls}
        >
          <p className={successTextCls}>
            Thank you! We have received your RSVP and will be in touch soon.
          </p>
        </motion.div>
      )}

      {/* Name Field */}
      <div className="form-group">
        <label htmlFor="oh-name" className={`block text-sm font-medium ${labelCls} mb-2`}>
          Your Name
          <span className={`${requiredCls} ml-1`} aria-label="required">
            *
          </span>
        </label>
        <input
          type="text"
          id="oh-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.name
              ? inputError
              : inputBase
          } ${focusRing} focus:outline-none focus:ring-2 transition-all`}
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className={`${errorTextCls} text-sm mt-1 font-medium`}>
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="form-group">
        <label htmlFor="oh-email" className={`block text-sm font-medium ${labelCls} mb-2`}>
          Email Address
          <span className={`${requiredCls} ml-1`} aria-label="required">
            *
          </span>
        </label>
        <input
          type="email"
          id="oh-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.email
              ? inputError
              : inputBase
          } ${focusRing} focus:outline-none focus:ring-2 transition-all`}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className={`${errorTextCls} text-sm mt-1 font-medium`}>
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div className="form-group">
        <label htmlFor="oh-phone" className={`block text-sm font-medium ${labelCls} mb-2`}>
          Phone Number
        </label>
        <input
          type="tel"
          id="oh-phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(206) 555-0000"
          className={`w-full px-4 py-3 rounded-lg border ${inputBase} ${focusRing} focus:outline-none focus:ring-2 transition-all`}
        />
      </div>

      {/* Number of Guests */}
      <div className="form-group">
        <label htmlFor="oh-guests" className={`block text-sm font-medium ${labelCls} mb-2`}>
          Number of Guests
          <span className={`${requiredCls} ml-1`} aria-label="required">
            *
          </span>
        </label>
        <select
          id="oh-guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.guests
              ? inputError
              : inputBase
          } ${focusRing} focus:outline-none focus:ring-2 transition-all`}
          aria-required="true"
          aria-invalid={!!errors.guests}
          aria-describedby={errors.guests ? 'guests-error' : undefined}
        >
          <option value="">Select number of guests</option>
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
        </select>
        {errors.guests && (
          <p id="guests-error" className={`${errorTextCls} text-sm mt-1 font-medium`}>
            {errors.guests}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={submitCls}
      >
        {isSubmitting ? 'Submitting\u2026' : 'Reserve Your Spot \u2192'}
      </button>
    </form>
  )
}
