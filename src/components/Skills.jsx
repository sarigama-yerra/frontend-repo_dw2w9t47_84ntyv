export default function Skills() {
  const skills = [
    { group: 'Tekla & Detailing', items: ['Tekla Structures', 'Connections', 'GA Drawings', 'NC/CNC Exports'] },
    { group: 'Programming', items: ['C#/.NET', 'Tekla Open API', 'Python', 'REST APIs'] },
    { group: 'BIM & Tools', items: ['IFC', 'Revit Interop', 'Navisworks', 'Clash Detection'] },
    { group: 'Workflow', items: ['Git', 'Automation', 'Custom Plugins', 'Scripting'] },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-white tracking-tight">Skills</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((s) => (
            <div key={s.group} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-cyan-400 font-semibold">{s.group}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="rounded-md bg-slate-800/80 text-slate-200 text-xs px-2 py-1 border border-white/10">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
