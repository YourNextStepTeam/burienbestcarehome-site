'use client'

import { useState } from 'react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  relationship: string
  careType: string
  visitDate: string
  visitTime: string
  message: string
  // Honeypot — Web3Forms rejects submissions where this is non-empty
  botcheck: string
}

interface FormErrors {
  [key: string]: string
}

// Placeholder is replaced at build time when NEXT_PUBLIC_WEB3FORMS_KEY is set
// in the Vercel project env. Until that key is configured, submissions will
// return a Web3Forms error and the user will see the inline error state.
const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? 'WEB3FORMS_ACCESS_KEY_TODO_REPLACE'
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const CONTACT_RECIPIENT = 'becca@burienbestcarehome.com'

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    relationship: '',
    careType: '',
    visitDate: '',
    visitTime: '',
    message: '',
    botcheck: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.relationship) {
      newErrors.relationship = 'Please select a relationship'
    }

    if (!formData.careType) {
      newErrors.careType = 'Please select a type of care'
    }

    if (!formData.visitTime) {
      newErrors.visitTime = 'Please select a preferred time'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors((prev) => ({ ...prev, submit: '' }))

    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        // Web3Forms supports forwarding to a specific address if enabled in
        // the dashboard. The default recipient is configured server-side.
        to_email: CONTACT_RECIPIENT,
        subject: `Visit Request from ${formData.firstName} ${formData.lastName}`,
        from_name: `${formData.firstName} ${formData.lastName}`,
        replyto: formData.email,
        botcheck: formData.botcheck,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        relationship: formData.relationship,
        careType: formData.careType,
        visitDate: formData.visitDate,
        visitTime: formData.visitTime,
        message: formData.message,
      }

      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = (await res.json()) as { success?: boolean; message?: string }

      if (!res.ok || !result.success) {
        throw new Error(result.message || 'Submission failed')
      }

      setIsSuccess(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        relationship: '',
        careType: '',
        visitDate: '',
        visitTime: '',
        message: '',
        botcheck: '',
      })
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Submission failed'
      setErrors({
        submit: `We could not send your request (${message}). Please email becca@burienbestcarehome.com or call (253) 678-7089 and we will follow up directly.`,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-sage-light border-2 border-sage rounded-2xl p-8 text-center max-w-2xl mx-auto"
      >
        <h3 className="font-serif text-3xl text-forest mb-4">
          Thank You!
        </h3>
        <p className="text-lg text-forest leading-relaxed mb-4">
          We received your visit request and will respond within 24 hours to confirm your preferred time.
        </p>
        <p className="text-forest">
          If you need to reach us sooner, email{' '}
          <a href="mailto:becca@burienbestcarehome.com" className="text-forest font-semibold underline">
            becca@burienbestcarehome.com
          </a>{' '}
          or call{' '}
          <a href="tel:+12536787089" className="text-forest font-semibold underline">
            (253) 678-7089
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8" noValidate>
      {/* Honeypot: real users leave this blank; bots fill every input */}
      <input
        type="checkbox"
        name="botcheck"
        checked={!!formData.botcheck}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, botcheck: e.target.checked ? 'true' : '' }))
        }
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {/* Row 1: First Name, Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-forest font-semibold mb-2">
            First Name <span className="text-terracotta">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            aria-required="true"
            autoComplete="given-name"
            className={`w-full min-h-12 px-4 py-3 rounded-lg border-2 transition-colors ${
              errors.firstName
                ? 'border-terracotta bg-white'
                : 'border-sage-light focus:border-sage'
            }`}
            placeholder="John"
          />
          {errors.firstName && (
            <p className="text-terracotta-deep text-sm mt-1 font-medium">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-forest font-semibold mb-2">
            Last Name <span className="text-terracotta">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            aria-required="true"
            autoComplete="family-name"
            className={`w-full min-h-12 px-4 py-3 rounded-lg border-2 transition-colors ${
              errors.lastName
                ? 'border-terracotta bg-white'
                : 'border-sage-light focus:border-sage'
            }`}
            placeholder="Smith"
          />
          {errors.lastName && (
            <p className="text-terracotta-deep text-sm mt-1 font-medium">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* Row 2: Email, Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-forest font-semibold mb-2">
            Email <span className="text-terracotta">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-required="true"
            autoComplete="email"
            className={`w-full min-h-12 px-4 py-3 rounded-lg border-2 transition-colors ${
              errors.email
                ? 'border-terracotta bg-white'
                : 'border-sage-light focus:border-sage'
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-terracotta-deep text-sm mt-1 font-medium">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-forest font-semibold mb-2">
            Phone (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            className="w-full min-h-12 px-4 py-3 rounded-lg border-2 border-sage-light focus:border-sage transition-colors"
            placeholder="(206) 555-0123"
          />
        </div>
      </div>

      {/* Row 3: Relationship, Care Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="relationship" className="block text-forest font-semibold mb-2">
            Relationship to Resident <span className="text-terracotta">*</span>
          </label>
          <select
            id="relationship"
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            aria-required="true"
            autoComplete="off"
            className={`w-full min-h-12 px-4 py-3 rounded-lg border-2 transition-colors ${
              errors.relationship
                ? 'border-terracotta bg-white'
                : 'border-sage-light focus:border-sage'
            }`}
          >
            <option value="">Select a relationship</option>
            <option value="spouse">Spouse</option>
            <option value="child">Child</option>
            <option value="grandchild">Grandchild</option>
            <option value="sibling">Sibling</option>
            <option value="friend">Friend</option>
            <option value="other">Other</option>
          </select>
          {errors.relationship && (
            <p className="text-terracotta-deep text-sm mt-1 font-medium">{errors.relationship}</p>
          )}
        </div>

        <div>
          <label htmlFor="careType" className="block text-forest font-semibold mb-2">
            Type of Care <span className="text-terracotta">*</span>
          </label>
          <select
            id="careType"
            name="careType"
            value={formData.careType}
            onChange={handleChange}
            aria-required="true"
            autoComplete="off"
            className={`w-full min-h-12 px-4 py-3 rounded-lg border-2 transition-colors ${
              errors.careType
                ? 'border-terracotta bg-white'
                : 'border-sage-light focus:border-sage'
            }`}
          >
            <option value="">Select care type</option>
            <option value="memory-care">Memory Care</option>
            <option value="assisted-living">Assisted Living</option>
            <option value="general-care">General Care</option>
            <option value="respite-care">Respite Care</option>
            <option value="not-sure">Not Sure Yet</option>
          </select>
          {errors.careType && (
            <p className="text-terracotta-deep text-sm mt-1 font-medium">{errors.careType}</p>
          )}
        </div>
      </div>

      {/* Row 4: Visit Date, Visit Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="visitDate" className="block text-forest font-semibold mb-2">
            Preferred Visit Date (Optional)
          </label>
          <input
            type="date"
            id="visitDate"
            name="visitDate"
            value={formData.visitDate}
            onChange={handleChange}
            autoComplete="off"
            className="w-full min-h-12 px-4 py-3 rounded-lg border-2 border-sage-light focus:border-sage transition-colors"
          />
        </div>

        <div>
          <label htmlFor="visitTime" className="block text-forest font-semibold mb-2">
            Preferred Time <span className="text-terracotta">*</span>
          </label>
          <select
            id="visitTime"
            name="visitTime"
            value={formData.visitTime}
            onChange={handleChange}
            aria-required="true"
            autoComplete="off"
            className={`w-full min-h-12 px-4 py-3 rounded-lg border-2 transition-colors ${
              errors.visitTime
                ? 'border-terracotta bg-white'
                : 'border-sage-light focus:border-sage'
            }`}
          >
            <option value="">Select a time</option>
            <option value="morning">Morning (9am - 12pm)</option>
            <option value="afternoon">Afternoon (12pm - 3pm)</option>
            <option value="late-afternoon">Late Afternoon (3pm - 5pm)</option>
            <option value="flexible">Flexible</option>
          </select>
          {errors.visitTime && (
            <p className="text-terracotta-deep text-sm mt-1 font-medium">{errors.visitTime}</p>
          )}
        </div>
      </div>

      {/* Row 5: Message */}
      <div>
        <label htmlFor="message" className="block text-forest font-semibold mb-2">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          autoComplete="off"
          className="w-full px-4 py-3 rounded-lg border-2 border-sage-light focus:border-sage transition-colors min-h-32"
          placeholder="Tell us a bit about what you're looking for, any specific concerns, or questions you have..."
        />
      </div>

      {/* Privacy Note */}
      <div className="bg-sage-light rounded-lg p-4 text-sm text-forest">
        <p>
          We respect your privacy. Your information will only be used to contact you about your visit request and to provide information about our care home.
        </p>
      </div>

      {/* Error Message */}
      {errors.submit && (
        <div className="bg-terracotta/10 border-2 border-terracotta-deep rounded-lg p-4 text-terracotta-deep font-medium" role="alert">
          {errors.submit}
        </div>
      )}

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary px-8 py-4 rounded-lg font-semibold text-lg inline-block disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {isSubmitting ? 'Sending...' : 'Schedule My Visit'}
        </button>
      </div>
    </form>
  )
}
