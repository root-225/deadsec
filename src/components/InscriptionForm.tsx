'use client';

import React, { useState } from 'react';

interface InscriptionFormProps {
  formationName: string; // To specify which formation this form is for
  onSuccess?: () => void; // Optional callback on successful submission
}

export default function InscriptionForm({ formationName, onSuccess }: InscriptionFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const re = /^[\S]+@[\S]+\.[\S]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    // Basic phone validation (adjust regex as needed for specific formats)
    const re = /^\+?[\d\s-]{7,}$/;
    return phone === '' || re.test(phone); // Allow empty phone number
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      errors.email = 'L\'email est requis';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Veuillez entrer une adresse email valide';
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      errors.phone = 'Veuillez entrer un numéro de téléphone valide (minimum 7 chiffres)';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null); // Clear previous server errors

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/inscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formation: formationName, // Add the formation name to the submission
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle specific validation errors from the server
        if (response.status === 400 && result.errors) {
          setFormErrors(prev => ({ ...prev, ...result.errors }));
          setServerError(result.message || 'Erreur de validation du serveur.');
        } else {
          throw new Error(result.message || 'Échec de l\'inscription');
        }
        setSubmitStatus('error');
      } else {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '' }); // Clear form
        setFormErrors({});
        if (onSuccess) onSuccess(); // Call success callback if provided
      }
    } catch (error: any) {
      console.error('Erreur lors de l\'inscription:', error);
      setSubmitStatus('error');
      setServerError(error.message || 'Une erreur inattendue est survenue.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear validation error for the field being changed
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
    // Reset submit status if user starts typing again after an error/success
    if (submitStatus !== 'idle') setSubmitStatus('idle');
    setServerError(null); // Clear server error on change
  };

  return (
    <div className="tech-card p-6 md:p-8 glow-effect group hover:glow relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg">
       <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient"></div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center relative z-10">Inscription à la Formation {formationName}</h3>
      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Nom Complet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`block w-full rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white shadow-sm focus:border-red-500 focus:ring-red-500 transition-all duration-300 ${formErrors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
            required
            disabled={isSubmitting}
            aria-invalid={!!formErrors.name}
            aria-describedby={formErrors.name ? 'name-error' : undefined}
          />
          {formErrors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-500 dark:text-red-400">{formErrors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Adresse Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`block w-full rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white shadow-sm focus:border-red-500 focus:ring-red-500 transition-all duration-300 ${formErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
            required
            disabled={isSubmitting}
            aria-invalid={!!formErrors.email}
            aria-describedby={formErrors.email ? 'email-error' : undefined}
          />
          {formErrors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-500 dark:text-red-400">{formErrors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Numéro de Téléphone <span className="text-gray-500 dark:text-gray-400">(Optionnel)</span>
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`block w-full rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white shadow-sm focus:border-red-500 focus:ring-red-500 transition-all duration-300 ${formErrors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
            disabled={isSubmitting}
            aria-invalid={!!formErrors.phone}
            aria-describedby={formErrors.phone ? 'phone-error' : undefined}
          />
          {formErrors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-500 dark:text-red-400">{formErrors.phone}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            {isSubmitting ? 'Envoi en cours...' : 'S\'inscrire Maintenant'}
          </button>
        </div>

        {submitStatus === 'success' && (
          <p className="text-center text-green-600 dark:text-green-400 font-medium">Inscription réussie ! Nous vous contacterons bientôt.</p>
        )}
        {(submitStatus === 'error' || serverError) && (
          <p className="text-center text-red-600 dark:text-red-400 font-medium">
            {serverError || 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.'}
          </p>
        )}
      </form>
    </div>
  );
}