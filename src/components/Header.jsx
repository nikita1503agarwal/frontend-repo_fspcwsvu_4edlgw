export default function Header() {
  return (
    <header className="py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">acme</div>
          <nav className="text-sm text-neutral-500">
            <a href="#product" className="hover:text-black transition-colors">Product</a>
            <span className="mx-4">•</span>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
