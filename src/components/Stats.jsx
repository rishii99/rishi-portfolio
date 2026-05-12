export default function Stats() {
  const stats = [
    {
      platform: 'LeetCode',
      icon: '💻',
      stats: [
        { label: 'Problems Solved', value: '300+', color: 'text-yellow-400' },
        { label: 'Contest Rating', value: '1464', color: 'text-blue-400' },
        { label: 'Rank', value: 'Top 50K', color: 'text-purple-400' },
      ],
      link: 'https://leetcode.com/u/rishii_45/',
      linkText: 'View LeetCode Profile',
    },
    {
      platform: 'GitHub',
      icon: '🐙',
      stats: [
        { label: 'Repositories', value: '10+', color: 'text-green-400' },
        { label: 'Projects', value: '5', color: 'text-blue-400' },
        { label: 'Contributions', value: 'Regular', color: 'text-purple-400' },
      ],
      link: 'https://github.com/rishii99',
      linkText: 'View GitHub Profile',
    },
  ];

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Coding <span className="gradient-text">Profiles</span>
        </h2>

        <p className="text-center text-text-muted mb-12 max-w-2xl mx-auto">
          Verified coding profiles showcasing problem-solving skills and project portfolio
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((profile, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-primary to-secondary border border-accent/20 rounded-lg p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{profile.icon}</span>
                <h3 className="text-3xl font-bold gradient-text">
                  {profile.platform}
                </h3>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {profile.stats.map((stat, statIdx) => (
                  <div
                    key={statIdx}
                    className="bg-secondary/50 border border-accent/20 rounded-lg p-4 text-center"
                  >
                    <p className={`text-2xl font-bold mb-1 ${stat.color}`}>
                      {stat.value}
                    </p>
                    <p className="text-text-muted text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Link Button */}
              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-gradient-to-r from-accent to-accent-purple text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-center"
              >
                {profile.linkText} →
              </a>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary border border-accent/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">
            Overall Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold gradient-text mb-2">300+</p>
              <p className="text-text-muted">DSA Problems</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text mb-2">1464</p>
              <p className="text-text-muted">LeetCode Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text mb-2">5</p>
              <p className="text-text-muted">Production Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text mb-2">100%</p>
              <p className="text-text-muted">Dedication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
