import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sent! We will get back to you soon.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-20 border-t">
      <div className="max-w-2xl mx-auto px-6">
        <h3 className="text-2xl font-semibold tracking-tight mb-6">Contact</h3>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input required name="name" placeholder="Name" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10" />
            <input required name="email" type="email" placeholder="Email" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10" />
          </div>
          <textarea required name="message" placeholder="Message" rows="4" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10"></textarea>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center justify-center rounded-lg bg-black text-white px-5 py-3 text-sm font-medium hover:bg-black/90 transition-colors">Send</button>
            {status && <span className="text-sm text-neutral-500">{status}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
