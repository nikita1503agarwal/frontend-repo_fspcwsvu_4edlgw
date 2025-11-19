import Header from './components/Header'
import Product from './components/Product'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
      <Header />
      <main>
        <section className="pt-16 pb-10">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">Minimal. Calm. Useful.</h1>
            <p className="text-neutral-600 max-w-2xl mx-auto">A clean page with a clear product overview and a simple way to get in touch. Set in Inter for a modern, readable feel.</p>
          </div>
        </section>
        <Product />
        <Contact />
      </main>
      <footer className="py-10 border-t">
        <div className="max-w-5xl mx-auto px-6 text-sm text-neutral-500">© {new Date().getFullYear()} acme</div>
      </footer>
    </div>
  )
}

export default App
