export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-accent/20 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Rishi Maddheshiya
            </h3>
            <p className="text-text-muted">
              Data Science Student | Full-Stack Developer | AI Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-text mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/rishii99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rishi-maddheshiya-3764bb1b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/rishii_45/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
              >
                LeetCode
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-accent/20 pt-6 text-center text-text-muted">
          <p>
            © {currentYear} Rishi Maddheshiya. Built with React + Tailwind CSS.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
