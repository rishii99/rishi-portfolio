export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              I'm a passionate Data Science student at Galgotias University with
              a strong interest in AI, machine learning, and software
              development. I enjoy building practical solutions that combine
              intelligent systems with scalable applications.
            </p>

            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              My journey in tech has been about understanding how data drives
              decisions and how code creates impact. I'm constantly learning and
              pushing the boundaries of what I can build.
            </p>

            <p className="text-lg text-text-muted leading-relaxed">
              Currently focused on Python development, data analytics, machine
              learning, and full-stack project development. I believe in writing
              clean, efficient code and creating solutions that matter.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Quick Facts
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-blue-500 font-semibold">Education</p>
                <p className="text-slate-400">B.Tech CSE (Data Science)</p>
                <p className="text-slate-400">Galgotias University</p>
              </div>

              <div>
                <p className="text-blue-500 font-semibold">Focus Areas</p>
                <p className="text-slate-400">AI & Machine Learning</p>
                <p className="text-slate-400">Full-Stack Development</p>
                <p className="text-slate-400">Data Analytics</p>
              </div>

              <div>
                <p className="text-blue-500 font-semibold">Mindset</p>
                <p className="text-slate-400">Problem-solving oriented</p>
                <p className="text-slate-400">Continuous learner</p>
                <p className="text-slate-400">Passionate about innovation</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
