"use client";

import React, { useState, useRef } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from "@emailjs/browser";

export default function ContactForm() {
const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);
const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [error, setError] = useState("");

  // EmailJS Configuration - Replace with your actual credentials
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      setError("");
      setSubmitStatus(null);
      
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      console.log('Email sent successfully!', result.text);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      if (formRef.current) {
        formRef.current.reset();
      }
      
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Failed to send message. Please try again.");
      }
      
      setTimeout(() => {
        setError("");
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mt-10 max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semi-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            You can reach us anytime by sending us an email
          </p>
          <p>
            info@journeyhealth.uk
            </p>
          
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          {/* Hidden field for EmailJS template */}
          <input 
            type="hidden" 
            name="to_name" 
            value="Journey Health Team"
          />

          <div>
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-900 transition-all duration-300 hover:border-gray-300"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-900 transition-all duration-300 hover:border-gray-300"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-900 transition-all duration-300 hover:border-gray-300"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-900 transition-all duration-300 hover:border-gray-300"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-900 resize-none transition-all duration-300 hover:border-gray-300"
              required
              disabled={isSubmitting}
            ></textarea>
          </div>

          {/* Error Message */}
          {error && submitStatus === 'error' && (
            <div className="flex items-center space-x-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-200 animate-pulse">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="flex items-center space-x-2 text-green-600 text-sm bg-green-50 p-3 rounded-lg border border-green-200 animate-pulse">
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
              <span>Message sent successfully! We&apos;ll get back to you soon.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full bg-gray-700 hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300"/>
            <span className="relative flex items-center justify-center">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  SENDING...
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  MESSAGE SENT!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  SEND
                </>
              )}
            </span>
          </button>
        </form>

       
      </div>
    </div>
  );
}