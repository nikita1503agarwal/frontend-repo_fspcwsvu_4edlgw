export default function Product() {
  return (
    <section id="product" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">A minimal product that does one thing well</h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Clean, fast, and focused. No clutter, no distractions. Just the core features you need to get work done.
            </p>
            <ul className="space-y-2 text-neutral-700">
              <li>— Simple setup, no learning curve</li>
              <li>— Works on any device</li>
              <li>— Privacy-friendly, no tracking</li>
            </ul>
          </div>
          <div className="border rounded-xl p-6 bg-white shadow-sm">
            <div className="aspect-video rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-400">
              Preview
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
