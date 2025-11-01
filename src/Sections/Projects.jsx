export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-950 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
          <p className="text-gray-400">A modern React + Tailwind portfolio website.</p>
        </div>
      </div>
    </section>
  );
}
