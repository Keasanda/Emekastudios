import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      info: 'hello@sarahjohnson.com',
      link: 'mailto:hello@sarahjohnson.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      info: 'New York, NY',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, link: '#', name: 'Instagram' },
    { icon: <Facebook className="w-5 h-5" />, link: '#', name: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, link: '#', name: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Ready to capture your special moments? Let's discuss your photography needs and create something beautiful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-black mb-8">Let's Start a Conversation</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-orange-500">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-black">{item.title}</div>
                    <a href={item.link} className="text-black hover:text-orange-500 transition-colors">
                      {item.info}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-black mb-4">Follow My Work</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-700 p-6 rounded-2xl">
              <h4 className="font-semibold text-black mb-4">Quick Response Promise</h4>
              <p className="text-black">
                I typically respond to all inquiries within 24 hours. For urgent bookings, please call directly.
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-600 text-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-600 text-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-black mb-2">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-600 text-black rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="portrait">Portrait Sessions</option>
                  <option value="event">Event Photography</option>
                  <option value="lifestyle">Lifestyle Shoots</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Tell me about your vision *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Share details about your event, preferred style, timeline, and any special requests..."
                  className="w-full px-4 py-3 bg-white border border-gray-600 text-black rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-vertical placeholder-gray-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white hover:bg-orange-600 text-black py-4 px-6 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;