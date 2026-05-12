export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'C++', 'Java', 'JavaScript'],
    },
    {
      title: 'Data Science',
      skills: [
        'NumPy',
        'Pandas',
        'Matplotlib',
        'Scikit-learn',
        'Data Visualization',
        'Machine Learning',
      ],
    },
    {
      title: 'Software Development',
      skills: [
        'React',
        'Node.js',
        'Express.js',
        'WebSockets',
        'REST APIs',
        'Git & GitHub',
      ],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB'],
    },
    {
      title: 'Tools',
      skills: ['VS Code', 'Jupyter Notebook', 'Postman', 'Git', 'Figma'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-primary to-secondary border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-accent/10 text-accent border border-accent/30 rounded-full text-sm font-medium hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Animated skill bars section */}
        <div className="mt-16 bg-primary rounded-lg p-8 border border-accent/20">
          <h3 className="text-2xl font-bold mb-8 gradient-text">
            Proficiency Levels
          </h3>

          <div className="space-y-6">
            {[
              { skill: 'Python & ML', level: 90 },
              { skill: 'Web Development', level: 85 },
              { skill: 'Data Analytics', level: 88 },
              { skill: 'Problem Solving', level: 92 },
              { skill: 'Git & Version Control', level: 85 },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-text">{item.skill}</span>
                  <span className="text-accent">{item.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 border border-accent/20">
                  <div
                    className="bg-gradient-to-r from-accent to-accent-purple h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
