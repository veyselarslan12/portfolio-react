import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaArrowUp } from 'react-icons/fa'; 
const ContactMe = () => {
  const [state, handleSubmit] = useForm("mvgpyjev"); 

  if (state.succeeded) {
    return <p className="text-center text-lg text-green-500 mt-8">Thanks for reaching out! I'll get back to you soon.</p>;
  }

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        {/* Email Field */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your email address"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your message here..."
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full py-3 px-6 bg-green-500 hover:bg-green-400 rounded-lg font-bold transition duration-300"
        >
          {state.submitting ? 'Submitting...' : 'Send Message'}
        </button>
      </form>

      <div className="mt-12">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center justify-center mx-auto py-2 px-4 bg-blue-500 hover:bg-blue-400 rounded-lg text-lg font-bold transition duration-300"
        >
          <FaArrowUp className="mr-2" size={20} /> 
          Go Up
        </button>
      </div>
    </section>
  );
};

export default ContactMe;
