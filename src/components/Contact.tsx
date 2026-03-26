"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle2 } from "lucide-react";
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "pandeymp86012@gmail.com",
    href: "mailto:pandeymp86012@gmail.com",
    color: "orange-400",
    copyable: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Punjab, India",
    subtext: "Available for remote work worldwide",
    href: "#",
    color: "orange-400",
    copyable: false,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/MayankGitHub86",
    color: "primary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/mayankpandey-12316543",
    color: "secondary",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // EmailJS configuration - Replace with your actual IDs
      // Get these from https://www.emailjs.com/
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Mayank Pandey',
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
        }, 3000);
      }
    } catch (err) {
      console.error('Email send failed:', err);
      setError("Failed to send message. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="relative py-20 sm:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-orange-400 mb-4 text-lg font-semibold tracking-[0.3em] uppercase"
          >
            CONTACT
          </motion.span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="text-white">Let's </span><span className="text-orange-400">Connect</span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Have a project in mind or looking for a Full Stack Developer? Let's connect and build something great together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-card rounded-xl p-6 border border-white/10 hover:border-orange-400/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center border border-orange-400/30">
                      <info.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-orange-400 mb-1">{info.value}</p>
                      {info.copyable && (
                        <button className="text-sm text-muted-foreground hover:text-white transition-colors flex items-center gap-1">
                          <span>📋</span> Copy email
                        </button>
                      )}
                      {info.subtext && (
                        <p className="text-sm text-muted-foreground mt-1">{info.subtext}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-lg glass-card border border-white/10 hover:border-orange-400/40 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-white" />
                  <span className="font-medium text-white">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Remove Availability Badge */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 border border-white/10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm text-muted-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass-card border border-white/10 focus:border-orange-400/60 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 bg-background/50"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass-card border border-white/10 focus:border-orange-400/60 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 bg-background/50"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg glass-card border border-white/10 focus:border-orange-400/60 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 resize-none bg-background/50"
                  placeholder="Message"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted || isSubmitting}
                className="w-full px-8 py-4 rounded-lg bg-orange-500 hover:bg-orange-400 text-black font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-red-400"
                >
                  {error}
                </motion.p>
              )}

              {isSubmitted && !error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-green-400"
                >
                  Thank you! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}