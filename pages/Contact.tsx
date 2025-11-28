import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Instagram,
  Loader2,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('message', formData.message);
      data.append('_subject', 'New Portfolio Message');
      data.append('_template', 'table');
      data.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/rcshukla1810@gmail.com', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Interested in collaborations or have a project in mind? Feel free to reach out.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-4 bg-card rounded-lg border border-white/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-white">Email</h3>
                  <p className="text-slate-400 mt-1">abhinav.shukla@outlook.in</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 p-4 bg-card rounded-lg border border-white/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-white">Location</h3>
                  <p className="text-slate-400 mt-1">Delhi, India</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 p-4 bg-card rounded-lg border border-white/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-white">Phone</h3>
                  <p className="text-slate-400 mt-1">+91 7289 874 139</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <h3 className="text-lg font-bold text-white mb-6">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/shuklaAI"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-card rounded-full border border-white/10 text-slate-400 hover:text-white hover:bg-primary hover:border-transparent transition-all"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhinav-shukla-837141300"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-card rounded-full border border-white/10 text-slate-400 hover:text-white hover:bg-blue-600 hover:border-transparent transition-all"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/___.abhinav_"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-card rounded-full border border-white/10 text-slate-400 hover:text-white hover:bg-pink-600 hover:border-transparent transition-all"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 px-6 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-400 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-400 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg">
                    <AlertCircle className="h-5 w-5" />
                    <p className="text-sm">
                      Something went wrong. Please try again later or email directly.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full px-6 py-4 rounded-lg font-bold text-white bg-gradient-to-r from-primary to-accent hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center shadow-lg shadow-primary/25 hover:-translate-y-1"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
