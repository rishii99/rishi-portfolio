export default function Certifications() {
  const certifications = [
    {
      title: 'AWS Cloud',
      issuer: 'AWS Academy',
      date: '2024',
      icon: '☁️',
    },
    {
      title: 'Oracle Database',
      issuer: 'Oracle Academy',
      date: '2024',
      icon: '🗄️',
    },
    {
      title: 'Data Science Master',
      issuer: 'Altair',
      date: '2024',
      icon: '📊',
    },
    {
      title: '100 Days of Python',
      issuer: 'GUVI + HCL',
      date: '2024',
      icon: '🐍',
    },
    {
      title: 'Python Programming',
      issuer: 'HCL Academy',
      date: '2024',
      icon: '📚',
    },
    {
      title: 'Machine Learning 101',
      issuer: 'GUVI',
      date: '2024',
      icon: '🤖',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Certifications & <span className="gradient-text">Achievements</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-secondary to-primary border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {cert.icon}
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                {cert.title}
              </h3>

              <p className="text-accent font-semibold mb-1">{cert.issuer}</p>

              <p className="text-text-muted text-sm">{cert.date}</p>
            </div>
          ))}
        </div>

        {/* Highlights section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">
            Key Achievements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary border border-accent/20 rounded-lg p-6">
              <div className="flex items-start">
                <span className="text-3xl mr-4">⭐</span>
                <div>
                  <h4 className="text-lg font-bold mb-2">Active Learner</h4>
                  <p className="text-text-muted">
                    Completed multiple online courses and certifications in Data
                    Science, ML, and Web Development
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary border border-accent/20 rounded-lg p-6">
              <div className="flex items-start">
                <span className="text-3xl mr-4">📈</span>
                <div>
                  <h4 className="text-lg font-bold mb-2">Strong GitHub</h4>
                  <p className="text-text-muted">
                    Active GitHub contributor with 10+ projects and consistent
                    commit history
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary border border-accent/20 rounded-lg p-6">
              <div className="flex items-start">
                <span className="text-3xl mr-4">💡</span>
                <div>
                  <h4 className="text-lg font-bold mb-2">Problem Solver</h4>
                  <p className="text-text-muted">
                    Solved 100+ DSA problems across multiple platforms
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary border border-accent/20 rounded-lg p-6">
              <div className="flex items-start">
                <span className="text-3xl mr-4">🚀</span>
                <div>
                  <h4 className="text-lg font-bold mb-2">Project Builder</h4>
                  <p className="text-text-muted">
                    Built and deployed full-stack applications and ML models
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
