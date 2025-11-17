export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">About Me</h2>
            <p className="mt-4 text-slate-300">
              I specialize in structural steel detailing and custom development for Tekla Structures. My work blends deep domain knowledge of steel fabrication with software craftsmanship—creating tools, macros, and plugins that remove repetitive tasks and reduce errors.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { title: 'Tekla Automation', desc: 'Plugins, macros, Open API workflows' },
                { title: 'Connections & GA', desc: 'Shop drawings, assembly drawings, CNC/NC exports' },
                { title: 'BIM Coordination', desc: 'IFC, Revit, clash checks, collaboration' },
                { title: 'Custom Tooling', desc: 'C#/.NET add-ons, Python integrations' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-cyan-400 font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-300/90">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
            <h3 className="text-white font-semibold">Certifications & Highlights</h3>
            <ul className="mt-4 space-y-3 text-slate-300 text-sm">
              <li>• 7+ years in steel detailing and BIM</li>
              <li>• Delivered 1000+ shop drawings across multiple projects</li>
              <li>• Built Tekla plugins that cut modeling time by 30-50%</li>
              <li>• Experience with AISC, Eurocode, and IS standards</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
