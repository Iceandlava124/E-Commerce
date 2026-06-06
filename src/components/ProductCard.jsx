import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useToast } from '../context/ToastContext.jsx'

function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { addToast } = useToast()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    addToCart(product, 1)
    addToast(`1 ${product.name} added to cart!`)
  }

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/95 shadow-[0_24px_80px_-48px_rgba(99,102,241,0.8)] transition hover:-translate-y-1 hover:shadow-[0_26px_90px_-48px_rgba(99,102,241,0.85)]">
      <Link to={`/products/${product.id}`} className="block overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-500">
          <span>{product.category}</span>
          <span className="text-amber-400">{product.rating.toFixed(1)}★</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-100">{product.name}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400 line-clamp-3">{product.description}</p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-xl font-bold text-white">${product.price.toFixed(2)}</span>
          <button
            onClick={handleQuickAdd}
            className="rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400 hover:scale-105 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
