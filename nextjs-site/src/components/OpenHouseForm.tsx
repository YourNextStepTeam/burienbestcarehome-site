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

export default function OpenHouseForm() {
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
      const mailto = `mailto:info@burienbestcarehome.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`

      window.location.href = mailto

      setSubmitSuccess(true)
      setFormData({ name: '', email: '', phone: '', guests: '' })
      setTimeout(() => setSubmitSuccess(false), 8000)
    } catch {
      setErrors({
        name: 'We could not open your email client. Please email info@burienbestcarehome.com directly.',
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
          className="rounded-lg bg-sage/10 border border-sage p-4"
        >
          <p className="text-sage font-medium">
            Thank you! We have received your RSVP and will be in touch soon.
          </p>
        </motion.div>
      )}

      {/* Name Field */}
      <div className="form-group">
        <label htmlFor="oh-name" className="block text-sm font-medium text-forest mb-2">
          Your Name
          <span className="text-terracotta ml-1" aria-label="required">
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
              ? 'border-terracotta bg-terracotta/5'
              : 'border-sage/20 bg-white'
          } focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all`}
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-terracotta text-sm mt-1">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="form-group">
        <label htmlFor="oh-email" className="block text-sm font-medium text-forest mb-2">
          Email Address
          <span className="text-terracotta ml-1" aria-label="required">
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
              ? 'border-terracotta bg-terracotta/5'
              : 'border-sage/20 bg-white'
          } focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all`}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-terracotta text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div className="form-group">
        <label htmlFor="oh-phone" className="block text-sm font-medium text-forest mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="oh-phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(206) 555-0000"
          className="w-full px-4 py-3 rounded-lg border border-sage/20 bg-white focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all"
        />
      </div>

      {/* Number of Guests */}
      <div className="form-group">
        <label htmlFor="oh-guests" className="block text-sm font-medium text-forest mb-2">
          Number of Guests
          <span className="text-terracotta ml-1" aria-label="required">
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
              ? 'border-terracotta bg-terracotta/5'
              : 'border-sage/20 bg-white'
          } focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all`}
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
          <p id="guests-error" className="text-terracotta text-sm mt-1">
            {errors.guests}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center min-h-14 bg-sage hover:bg-forest text-white text-lg font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-4 focus-visible:ring-sage/40"
      >
        {isSubmitting ? 'Submitting\u2026' : 'Reserve Your Spot \u2192'}
      </button>
    </form>
  )
}
