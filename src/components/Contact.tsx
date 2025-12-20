import { Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `🌟 New Contact Form Submission 🌟
━━━━━━━━━━━━━━━━━━
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📝 Subject: ${formData.subject}
💬 Message:
${formData.message}
━━━━━━━━━━━━━━━━━━
📅 Sent via your website contact form`;
    
    // WhatsApp URL with your number
    const whatsappURL = `https://wa.me/919155649575?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Show success message
    toast.success("Redirecting to WhatsApp...");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div 
      className="min-h-screen bg-[#0A0A0A] pt-32 pb-24"
      style={{ backgroundImage: "url('/src/assets/bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 
            className="text-white mb-4"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: "1.2", fontWeight: "700", letterSpacing: "-0.02em" }}
          >
            Let's Create Something{" "}
            <span 
              style={{ 
                background: "linear-gradient(135deg, #FF6A00 0%, #FF8C3A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Amazing
            </span>
          </h1>
          <p className="text-[#B3B3B3] max-w-2xl mx-auto" style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
            Have a project in mind? Let's discuss how we can work together..
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Your Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-[#FF6A00] focus:ring-[#FF6A00]"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-[#FF6A00] focus:ring-[#FF6A00]"
              />
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-white">
                Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-[#FF6A00] focus:ring-[#FF6A00]"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={6}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-[#FF6A00] focus:ring-[#FF6A00] resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
  type="submit"
  className="
    w-full
    bg-[#FF6A00]
    hover:bg-[#FF8C3A]
    text-white
    border-none

    flex items-center justify-center gap-2
    rounded-xl

    py-4 sm:py-5 md:py-6
    text-base sm:text-lg

    min-h-[52px] sm:min-h-[56px]
  "
>
  <Send className="h-5 w-5 shrink-0" />
  <span className="whitespace-nowrap">
    Send Message via WhatsApp
  </span>
</Button>

          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-[#B3B3B3]" style={{ fontSize: "1rem" }}>
            This Form Message will be redirected to WhatsApp:{" "}
            <a 
              href="https://wa.me/919155649575" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FF6A00] hover:text-[#FF8C3A] transition-colors"
              style={{ fontWeight: "600" }}
            >
              +91 9155649575
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
