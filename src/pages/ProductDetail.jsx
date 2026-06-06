import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import products from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const product = products.find((item) => item.id === id)
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4 py-10 text-center sm:px-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/95 px-8 py-12 text-slate-300 shadow-lg shadow-slate-950/40">
          <h1 className="text-3xl font-semibold text-white">Product not found</h1>
          <p className="mt-4 text-slate-400">The product you are looking for does not exist.</p>
        </div>
      </div>
    )
  }

  const handleAdd = () => {
    addToCart(product, quantity)
    navigate('/cart')
  }

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_0.75fr]">
        <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/95 shadow-[0_24px_80px_-48px_rgba(99,102,241,0.8)]">
          <img src={product.image} alt={product.name} className="h-[520px] w-full object-cover" />
        </div>
        <div className="space-y-8 rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-lg shadow-slate-950/40">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-400">{product.category}</p>
            <h1 className="text-4xl font-semibold text-white">{product.name}</h1>
            <div className="flex items-center gap-4 text-slate-300">
              <span className="rounded-full bg-slate-900 px-4 py-2 text-sm">{product.rating.toFixed(1)}★ rating</span>
              <span className="text-3xl font-semibold text-white">${product.price.toFixed(2)}</span>
            </div>
          </div>
          <div className="space-y-5 rounded-3xl bg-slate-900/90 p-6 text-slate-300">
            <h2 className="text-xl font-semibold text-white">Product details</h2>
            <p className="leading-7">{product.description}</p>
            <p className="text-sm text-slate-500">This is a placeholder product built with Lorem Picsum imagery, designed for a polished shopping experience.</p>
          </div>
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-[1fr_0.7fr]">
              <label className="space-y-2 text-sm text-slate-300">
                Quantity
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(event) => setQuantity(Math.max(1, Number(event.target.value)))}
                  className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
                />
              </label>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5 text-slate-300">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Subtotal</p>
                <p className="mt-3 text-3xl font-semibold text-white">${(product.price * quantity).toFixed(2)}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="w-full rounded-3xl bg-indigo-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-indigo-400"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
