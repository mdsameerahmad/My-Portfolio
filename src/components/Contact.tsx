import { ArrowRight, Mail, MessageCircle, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `New portfolio inquiry\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    window.open(`https://wa.me/919155649575?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
    toast.success("Opening WhatsApp...");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact-section section-pad">
      <div className="contact-panel">
        <motion.div className="contact-left" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="section-kicker"><span> 06</span> contact</div>
          <h2>Ready to build something <em>worth launching?</em></h2>
          <p>Tell me about your app, website, automation, or UI idea. I will respond with a practical next step.</p>
          <div className="contact-methods">
            <a href="https://wa.me/919155649575" target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> WhatsApp: +91 9155649575</a>
            <a href="mailto:mohammadsameerahmad2005@gmail.com"><Mail size={18} /> mohammadsameerahmad2005@gmail.com</a>
          </div>
        </motion.div>

        <motion.form className="contact-form" onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="form-header">reach me directly</div>
          <div className="form-grid">
            <input name="name" required value={formData.name} onChange={handleChange} placeholder="Name" />
            <input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="Email" />
          </div>
          <input name="subject" required value={formData.subject} onChange={handleChange} placeholder="Project type" />
          <textarea name="message" required value={formData.message} onChange={handleChange} placeholder="Tell me about your project" rows={5} />
          <button type="submit" className="btn btn-primary form-button">
            Send via WhatsApp <Send size={17} />
          </button>
          <a className="book-link" href="mailto:mohammadsameerahmad2005@gmail.com">or compose email <ArrowRight size={15} /></a>
        </motion.form>
      </div>
    </section>
  );
}
