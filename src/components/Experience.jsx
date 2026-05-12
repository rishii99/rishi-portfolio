export default function Experience() {
  const experiences = [
    {
      title: 'Data Science Intern (Remote)',
      company: 'Altair',
      period: 'Apr 2025 - Jun 2025',
      description:
        'Tools Used: Python, SQL, Excel, Power BI, TensorFlow. Worked on cleaning and analyzing structured datasets to build reporting pipelines and ML-ready features.',
      highlights: [
        'Cleaned and analyzed structured datasets using Python, SQL, and Excel to identify trends and improve reporting accuracy.',
        'Built interactive Power BI dashboards to visualize performance metrics and support data-driven insights.',
        'Applied preprocessing and feature engineering techniques for machine learning workflows.',
      ],
    },
    {
      title: 'Data Science Training',
      company: 'GUVI + HCL (100 Days of Python)',
      period: '2023 - 2024',
      description:
        'Completed comprehensive Python and Data Science training covering fundamentals to advanced concepts.',
      highlights: [
        'Mastered Python programming',
        'Learned Data Science concepts',
        'Completed 100+ coding problems',
        'Earned industry certification',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Experience & <span className="gradient-text">Training</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="border-l-4 border-accent pl-8 py-4 hover:pl-10 transition-all duration-300"
            >
              <div className="absolute w-4 h-4 bg-accent rounded-full -left-2 top-8" />

              <div className="mb-2">
                <h3 className="text-2xl font-bold gradient-text">
                  {exp.title}
                </h3>
                <p className="text-accent text-lg font-semibold">
                  {exp.company}
                </p>
              </div>

              <p className="text-text-muted text-sm mb-3">{exp.period}</p>

              <p className="text-text-muted mb-4 leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, hidx) => (
                  <li key={hidx} className="text-text-muted flex items-start">
                    <span className="text-accent mr-3 font-bold">→</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional training info */}
        <div className="mt-12 bg-gradient-to-r from-primary to-secondary border border-accent/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 gradient-text">
            Continuous Learning
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-accent mb-3">
                Current Focus
              </h4>
              <ul className="space-y-2">
                <li className="text-text-muted">• Advanced ML Techniques</li>
                <li className="text-text-muted">• Full-stack Development</li>
                <li className="text-text-muted">• AI/Deep Learning</li>
                <li className="text-text-muted">• Cloud Deployment</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-accent mb-3">Goals</h4>
              <ul className="space-y-2">
                <li className="text-text-muted">
                  • Secure internship in tech company
                </li>
                <li className="text-text-muted">
                  • Build production-ready projects
                </li>
                <li className="text-text-muted">• Contribute to open source</li>
                <li className="text-text-muted">• Master system design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
