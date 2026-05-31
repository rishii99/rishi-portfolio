export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Fashion Styling Advisor',
      category: 'AI Fashion Tech',
      description:
        'A full-stack AI fashion recommendation app that delivers personalized outfit and styling suggestions using uploaded images, occasions, colors, and preferences.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Flask'],
      features: [
        'AI-powered outfit recommendations',
        'Occasion-based styling suggestions',
        'Flask backend with OpenCV support',
        'Live Vercel deployment',
      ],
      github: 'https://github.com/rishii99/AI-Powered-Fashion-Styling-Advisor',
      demo: 'https://ai-powered-fashion-styling-advisor.vercel.app',
      image: '👗',
    },
    {
      id: 2,
      title: 'AI Skin Cancer Detection',
      category: 'AI + Healthcare',
      description:
        'An AI-based system that helps identify possible skin cancer patterns using image analysis and machine learning techniques.',
      tech: ['Python', 'Machine Learning', 'Image Processing', 'TensorFlow'],
      features: [
        'Image Analysis',
        'Deep Learning Models',
        'High Accuracy Detection',
        'Healthcare Application',
      ],
      github: 'https://github.com/rishii99/skin-cancer-detection',
      demo: '#',
      image: '🏥',
    },
    {
      id: 3,
      title: 'Realtime Whiteboard',
      category: 'Full Stack',
      description:
        'A collaborative real-time whiteboard application that allows multiple users to draw and interact simultaneously with WebSocket integration.',
      tech: ['React', 'Node.js', 'WebSockets', 'Express.js'],
      features: [
        'Real-time Collaboration',
        'WebSocket Communication',
        'Multi-user Support',
        'Responsive Design',
      ],
      github: 'https://github.com/rishii99/realtime-whiteboard',
      demo: '#',
      image: '🎨',
    },
    {
      id: 4,
      title: 'Music Player',
      category: 'Desktop Application',
      description:
        'A Java-based music player application with audio controls and playlist handling, demonstrating OOP principles.',
      tech: ['Java', 'OOP', 'Swing', 'Audio Processing'],
      features: [
        'Audio Playback',
        'Playlist Management',
        'UI Controls',
        'OOP Design',
      ],
      github: 'https://github.com/rishii99/music-player',
      demo: '#',
      image: '🎵',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <p className="text-center text-text-muted mb-12 max-w-2xl mx-auto">
          Showcasing both Data Science and Software Development projects
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-secondary border border-accent/20 rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group"
            >
              {/* Project Header */}
              <div className="h-32 bg-gradient-to-br from-accent/20 to-accent-purple/20 flex items-center justify-center text-6xl">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-accent text-sm font-semibold">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>

                <p className="text-text-muted mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gradient-to-r from-accent/20 to-accent-purple/20 text-accent text-xs font-semibold rounded-full border border-accent/40 hover:border-accent/60 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-text mb-2">
                    Highlights:
                  </p>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-text-muted text-sm flex items-start"
                      >
                        <span className="text-accent mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 px-4 py-2 bg-accent/10 text-accent border border-accent/30 rounded hover:bg-accent/20 transition-colors text-sm font-medium text-center"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 px-4 py-2 bg-accent text-white rounded hover:bg-accent-purple transition-colors text-sm font-medium text-center"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
