'use client';

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [characterCount, setCharacterCount] = useState(0);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^\+?[\d\s-]{10,}$/;
    return phone === '' || re.test(phone);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject) {
      errors.subject = 'Please select a subject';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '', subject: '', phone: '' });
      setCharacterCount(0);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'message') {
      setCharacterCount(value.length);
    }

    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }

    if (submitStatus !== 'idle') setSubmitStatus('idle');
  };

  useEffect(() => {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contactFormData', JSON.stringify(formData));
  }, [formData]);

  return (
    <section id="contact" className="relative py-20 bg-[#020617]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] animated-bg"></div>
      <div className="absolute inset-0 matrix-bg opacity-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-text sm:text-4xl mb-2">Contact Us</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <p className="mt-4 text-lg text-slate-400">
            Get in touch with our team to discuss your technology needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="tech-card p-8 glow-effect group hover:glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`block w-full rounded-md bg-slate-800/50 border-slate-700 text-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300 ${
                        formErrors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                      }`}
                      required
                      disabled={isSubmitting}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-400">{formErrors.name}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full rounded-md bg-slate-800/50 border-slate-700 text-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300 ${
                        formErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                      }`}
                      required
                      disabled={isSubmitting}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-400">{formErrors.email}</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">
                  Phone (Optional)
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className={`block w-full rounded-md bg-slate-800/50 border-slate-700 text-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300 ${
                      formErrors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                    }`}
                    disabled={isSubmitting}
                  />
                  {formErrors.phone && (
                    <p className="mt-1 text-sm text-red-400">{formErrors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1">
                  Subject <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <select
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`block w-full rounded-md bg-slate-800/50 border-slate-700 text-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300 ${
                      formErrors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                    }`}
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                  {formErrors.subject && (
                    <p className="mt-1 text-sm text-red-400">{formErrors.subject}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                  Message <span className="text-red-400">*</span>
                  <span className="float-right text-xs text-slate-400">
                    {characterCount} characters
                  </span>
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`block w-full rounded-md bg-slate-800/50 border-slate-700 text-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300 ${
                      formErrors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                    }`}
                    required
                    disabled={isSubmitting}
                    placeholder="Tell us about your project or inquiry..."
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-red-400">{formErrors.message}</p>
                  )}
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-md bg-green-500/10 border border-green-500/30 text-green-400">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message sent successfully! We'll get back to you soon.
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 rounded-md bg-red-500/10 border border-red-500/30 text-red-400">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Failed to send message. Please try again.
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ name: '', email: '', message: '', subject: '', phone: '' });
                    setCharacterCount(0);
                    setFormErrors({});
                  }}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  disabled={isSubmitting}
                >
                  Clear Form
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cyber-button px-6 py-3 rounded-md text-cyan-400 border border-cyan-500/30 hover:text-white transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg className="ml-2 -mr-1 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </form>

            {/* Animated Border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
          </div>

          {/* Contact Information */}
          <div className="tech-card p-8 glow-effect group hover:glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-slate-200 mb-6">Additional Contact Information</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    ),
                    title: 'Phone',
                    content: siteConfig.contact.phone.display,
                    action: `tel:${siteConfig.contact.phone.link}`,
                  },
                  {
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    ),
                    title: 'Email',
                    content: siteConfig.contact.email.display,
                    action: `mailto:${siteConfig.contact.email.link}`,
                  },
                  {
                    icon: (
                      <>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </>
                    ),
                    title: 'Office Location',
                    content: siteConfig.contact.location.display,
                    action: `https://maps.google.com/?q=${siteConfig.contact.location.link}`,
                  },
                ].map((item, index) => (
                  <a 
                    key={index} 
                    href={item.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start group/item hover:bg-slate-800/30 p-3 rounded-lg transition-all duration-300"
                  >
                    <div className="relative">
                      <svg className="w-6 h-6 text-cyan-400 transition-transform duration-300 group-hover/item:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {item.icon}
                      </svg>
                      <div className="absolute -inset-2 bg-cyan-500/20 rounded-full blur opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="ml-4">
                      <p className="text-slate-200 font-medium group-hover/item:text-cyan-400 transition-colors">{item.title}</p>
                      {Array.isArray(item.content) ? (
                        item.content.map((line, i) => (
                          <p key={i} className="text-slate-400 group-hover/item:text-slate-300 transition-colors">{line}</p>
                        ))
                      ) : (
                        <p className="text-slate-400 group-hover/item:text-slate-300 transition-colors">{item.content}</p>
                      )}
                    </div>
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <h4 className="text-lg font-medium text-slate-200 mb-4">Business Hours</h4>
                <div className="space-y-2">
                  {[
                    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
                    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
                    { day: 'Sunday', hours: 'Closed' }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">{schedule.day}</span>
                      <span className="text-slate-300">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <h4 className="text-lg font-medium text-slate-200 mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  {[
                    { name: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                    { name: 'LinkedIn', href: '#', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                    { name: 'GitHub', href: '#', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' }
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={item.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Animated Border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 