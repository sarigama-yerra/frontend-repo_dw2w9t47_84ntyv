export default function Projects() {
  const projects = [
    {
      title: 'Tekla Plugin – Automated Connection Builder',
      desc: 'Custom tool using Tekla Open API to place and parameterize connections based on rules and member metadata.',
      tags: ['C#', 'Tekla API', 'Automation'],
      link: '#',
    },
    {
      title: 'Fabrication Package Generator',
      desc: 'One-click export of shop drawings, assembly drawings, and NC files with naming convention enforcement.',
      tags: ['Tekla', 'Workflow', 'C#'],
      link: '#',
    },
    {
      title: 'BIM Coordination Pipeline',
      desc: 'IFC export and clash detection workflow integrating Navisworks with Tekla models.',
      tags: ['BIM', 'IFC', 'Automation'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold text-white tracking-tight">Featured Work</h2>
          <a href="#contact" className="text-cyan-400 hover:text-cyan-300 text-sm">Need something similar?</a>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5 hover:border-cyan-400/40 transition-colors">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-white/10" />
              <h3 className="mt-4 text-white font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-1 text-slate-300 text-sm">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-slate-800/80 text-slate-200 text-xs px-2 py-1 border border-white/10">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
