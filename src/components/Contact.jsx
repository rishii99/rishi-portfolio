import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactLinks = [
    {
      title: 'Email',
      value: 'rishimadhesiya9984@gmail.com',
      icon: '✉️',
      link: 'mailto:rishimadhesiya9984@gmail.com',
    },
    {
      title: 'LinkedIn',
      value: 'Rishi Maddheshiya',
      icon: '💼',
      link: 'https://www.linkedin.com/in/rishi-maddheshiya-3764bb1b5/',
    },
    {
      title: 'GitHub',
      value: 'rishii99',
      icon: '🐙',
      link: 'https://github.com/rishii99',
    },
    {
      title: 'LeetCode',
      value: 'rishii_45',
      icon: '💻',
      link: 'https://leetcode.com/u/rishii_45/',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-primary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get in <span className="gradient-text">Touch</span>
        </h2>

        <p className="text-center text-text-muted mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always interested in hearing about new opportunities and exciting
          projects.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-secondary border border-accent/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-text font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-primary border border-accent/30 rounded text-text placeholder-text-muted focus:border-accent outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-text font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-primary border border-accent/30 rounded text-text placeholder-text-muted focus:border-accent outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-text font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 bg-primary border border-accent/30 rounded text-text placeholder-text-muted focus:border-accent outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button type="submit" className="w-full btn-primary">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              Contact Info
            </h3>

            {contactLinks.map((contact, idx) => (
              <a
                key={idx}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-secondary border border-accent/20 rounded-lg hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group"
              >
                <div className="text-3xl group-hover:scale-110 transition-transform">
                  {contact.icon}
                </div>
                <div>
                  <p className="font-semibold text-text group-hover:gradient-text transition-all">
                    {contact.title}
                  </p>
                  <p className="text-text-muted">{contact.value}</p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <p className="font-semibold text-text mb-4">Let's Connect</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary border border-accent/30 rounded-lg flex items-center justify-center hover:bg-accent/20 hover:border-accent transition-all"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/rishi-maddheshiya-3764bb1b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary border border-accent/30 rounded-lg flex items-center justify-center hover:bg-accent/20 hover:border-accent transition-all"
                >
                  LinkedIn
                </a>
                <a
                  href="https://leetcode.com/u/rishii_45/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary border border-accent/30 rounded-lg flex items-center justify-center hover:bg-accent/20 hover:border-accent transition-all"
                >
                  LeetCode
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary border border-accent/20 rounded-lg p-8">
          <p className="text-text-muted mb-4">
            Ready to collaborate or have a question?
          </p>
          <a
            href="mailto:rishimadhesiya9984@gmail.com"
            className="btn-primary inline-block"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
