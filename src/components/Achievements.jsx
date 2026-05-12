export default function Achievements() {
  const achievements = [
    {
      title: 'AI & ML Projects',
      description:
        'Successfully built and deployed multiple AI/ML projects including skin cancer detection and prediction systems',
      icon: '🤖',
      stat: '5+',
    },
    {
      title: 'Full-Stack Applications',
      description:
        'Developed real-time collaborative applications demonstrating strong software engineering practices',
      icon: '💻',
      stat: '4+',
    },
    {
      title: 'Data Analysis',
      description:
        'Performed comprehensive data analysis on real-world datasets with actionable insights',
      icon: '📊',
      stat: '15+',
    },
    {
      title: 'Code Quality',
      description:
        'Maintained clean, well-documented code following industry best practices and SOLID principles',
      icon: '✨',
      stat: '100%',
    },
    {
      title: 'GitHub Presence',
      description:
        'Active contributor with well-organized repositories and comprehensive documentation',
      icon: '📚',
      stat: '10+',
    },
    {
      title: 'Learning Journey',
      description:
        'Completed 100+ hours of training in Python, DS, and Web Development with hands-on projects',
      icon: '🎓',
      stat: '100h+',
    },
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Started Learning Programming',
      description:
        'Began journey with C++ and Java, focusing on core programming concepts',
    },
    {
      year: '2024',
      title: 'Smart India Hackathon (SIH)',
      description:
        'Achieved Top 10 Finalist position at Smart India Hackathon 2024',
    },
    {
      year: '2024',
      title: 'Specialized in Data Science',
      description:
        'Completed Python training, started ML projects and internship at Oasis Infobyte',
    },
    {
      year: '2025',
      title: 'Full-Stack Development',
      description:
        'Built real-time applications with React, Node.js, and WebSockets',
    },
    {
      year: '2026',
      title: 'Portfolio & Placement Ready',
      description:
        'Building professional portfolio and preparing for internship/placement season',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Achievements & <span className="gradient-text">Milestones</span>
        </h2>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="bg-primary border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold gradient-text">
                  {achievement.stat}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                {achievement.title}
              </h3>

              <p className="text-text-muted">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-12 text-center gradient-text">
            Learning Timeline
          </h3>

          <div className="space-y-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-purple rounded-full flex items-center justify-center font-bold text-white mb-4">
                    {idx + 1}
                  </div>
                  {idx !== milestones.length - 1 && (
                    <div className="w-1 h-24 bg-gradient-to-b from-accent to-accent-purple/20" />
                  )}
                </div>

                <div className="pt-2">
                  <p className="text-accent font-bold text-lg mb-1">
                    {milestone.year}
                  </p>
                  <h4 className="text-xl font-bold mb-2">{milestone.title}</h4>
                  <p className="text-text-muted">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary border border-accent/20 rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold gradient-text mb-2">5</p>
              <p className="text-text-muted">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text mb-2">5+</p>
              <p className="text-text-muted">Tech Stacks</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text mb-2">100+</p>
              <p className="text-text-muted">Learning Hours</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text mb-2">∞</p>
              <p className="text-text-muted">Growth Mindset</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
