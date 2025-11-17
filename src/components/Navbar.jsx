import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg" />
            <span className="text-white font-semibold tracking-tight">Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                {item.name}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:shadow-blue-500/25 transition-shadow">
              Let’s Talk
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="block rounded-md px-3 py-2 text-slate-200 hover:bg-white/5" onClick={() => setOpen(false)}>
                  {item.name}
                </a>
              ))}
              <a href="#contact" className="block rounded-md px-3 py-2 text-white bg-gradient-to-r from-blue-500 to-cyan-400 text-center" onClick={() => setOpen(false)}>
                Let’s Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
