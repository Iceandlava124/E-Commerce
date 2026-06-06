import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart()
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    payment: 'Card',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setOrderPlaced(true)
    clearCart()
  }

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-800 bg-slate-950/95 p-12 text-center shadow-lg shadow-slate-950/40">
          <h1 className="text-3xl font-semibold text-white">No items to checkout</h1>
          <p className="mt-4 text-slate-400">Add products to your cart before placing an order.</p>
          <Link
            to="/products"
            className="mt-8 inline-flex rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
          >
            Start shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-[0_24px_80px_-48px_rgba(99,102,241,0.8)]">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-400">Checkout</p>
            <h1 className="text-4xl font-semibold text-white">Complete your order</h1>
          </div>
          <p className="mt-4 max-w-2xl text-slate-400">
            Fill in your shipping and payment details to place the order. This demo uses a placeholder checkout flow.
          </p>
        </div>

        {orderPlaced ? (
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-12 text-center shadow-lg shadow-slate-950/40">
            <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-3xl text-white">✓</div>
              <h2 className="text-3xl font-semibold text-white">Order placed successfully</h2>
              <p className="text-slate-400">Thank you for your purchase. We will send an email confirmation shortly.</p>
              <Link
                to="/"
                className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
              >
                Return to homepage
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[0.7fr_0.3fr]">
            <form onSubmit={handleSubmit} className="space-y-6 rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-lg shadow-slate-950/40">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-300">
                  Full name
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
                  />
                </label>
                <label className="space-y-2 text-sm text-slate-300">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
                  />
                </label>
              </div>
              <label className="space-y-2 text-sm text-slate-300">
                Shipping address
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                Payment method
                <select
                  name="payment"
                  value={formData.payment}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
                >
                  <option>Card</option>
                  <option>PayPal</option>
                  <option>Bank transfer</option>
                </select>
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-3xl bg-indigo-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-indigo-400"
              >
                Place order
              </button>
            </form>
            <aside className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-6 shadow-lg shadow-slate-950/40">
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Order summary</p>
                  <p className="mt-3 text-3xl font-semibold text-white">${totalPrice.toFixed(2)}</p>
                </div>
                <div className="rounded-3xl bg-slate-900/90 p-5 text-slate-300">
                  <p className="text-sm">Items in cart</p>
                  <ul className="mt-4 space-y-3">
                    {cartItems.map((item) => (
                      <li key={item.id} className="flex items-center justify-between text-sm text-slate-100">
                        <span>{item.name}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}

export default Checkout
