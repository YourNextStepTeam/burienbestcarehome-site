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
}

interface FormErrors {
  [key: string]: string
}

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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
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
        })
        setTimeout(() => {
          setIsSuccess(false)
        }, 5000)
      } else {
        setErrors({ submit: 'Failed to submit form. Please try again.' })
      }
    } catch (error) {
      setErrors({ submit: 'An error occurred. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-sage-light border-2 border-sage rounded-2xl p-8 text-center max-w-2xl mx-auto">
        <h3 className="font-serif text-3xl text-forest mb-4">
          Thank You!
        </h3>
        <p className="text-lg text-forest leading-relaxed mb-4">
          We've received your visit request. We will contact you within 24 hours to confirm your preferred time and answer any questions you may have.
        </p>
        <p className="text-forest">
          We look forward to welcoming you and your loved one to Burien Best Care Home.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
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
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              errors.firstName
                ? 'border-terracotta bg-white'
                : 'border-sage-light focus:border-sage'
            }`}
            placeholder="John"
          />
          {errors.firstName && (
            <p className="text-terracotta text-sm mt-1">{errors.firstName}</p>
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
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              errors.lastName
                ? 'border-terracotta bg-white'
                : 'border-sage-light focus:border-sage'
            }`}
            placeholder="Smith"
          />
          {errors.lastName && (
            <p className="text-terracotta text-sm mt-1">{errors.lastName}</p>
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
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              errors.email
                ? 'border-terracotta bg-white'
                : 'border-sage-light focus:border-sage'
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-terracotta text-sm mt-1">{errors.email}</p>
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
            className="w-full px-4 py-3 rounded-lg border-2 border-sage-light focus:border-sage transition-colors"
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
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
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
            <p className="text-terracotta text-sm mt-1">{errors.relationship}</p>
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
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
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
            <p className="text-terracotta text-sm mt-1">{errors.careType}</p>
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
            className="w-full px-4 py-3 rounded-lg border-2 border-sage-light focus:border-sage transition-colors"
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
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
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
            <p className="text-terracotta text-sm mt-1">{errors.visitTime}</p>
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
        <div className="bg-terracotta/10 border-2 border-terracotta rounded-lg p-4 text-terracotta">
          {errors.submit}
        </div>
      )}

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary px-8 py-4 rounded-full font-semibold text-lg inline-block disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {isSubmitting ? 'Scheduling...' : 'Schedule My Visit'}
        </button>
      </div>
    </form>
  )
}
