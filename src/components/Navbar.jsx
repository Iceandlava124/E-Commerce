import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

const categories = ['All', 'Electronics', 'Fashion', 'Home & Kitchen', 'Sports']

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { itemCount } = useCart()
  const [search, setSearch] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    setSearch(params.get('q') || '')
  }, [location.search])

  const handleSubmit = (e) => {
    e.preventDefault()
    const query = search.trim()
    if (query.length) {
      navigate(`/products?q=${encodeURIComponent(query)}`)
    } else {
      navigate('/products')
    }
  }

  const featuredCategory = useMemo(
    () => categories.find((cat) => location.pathname.includes(cat.toLowerCase())) || 'All',
    [location.pathname],
  )

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 text-xl shadow-lg shadow-indigo-500/20">
            E
          </span>
          Nova Market
        </Link>

        <form onSubmit={handleSubmit} className="flex w-full max-w-xl items-center rounded-3xl border border-slate-800 bg-slate-900/90 p-2 shadow-sm sm:w-auto">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products, brands, categories"
            className="flex-1 rounded-2xl bg-transparent px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500"
          />
          <button type="submit" className="rounded-2xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">
            Search
          </button>
        </form>

        <nav className="flex items-center gap-3 text-sm text-slate-300 sm:gap-4">
          <Link to="/products" className="rounded-full px-3 py-2 transition hover:bg-slate-800 hover:text-white">
            Products
          </Link>
          <Link to="/cart" className="relative inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800">
            <span>Cart</span>
            <span className="inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-full bg-indigo-500 text-xs font-semibold">
              {itemCount}
            </span>
          </Link>
        </nav>
      </div>
      <div className="border-t border-slate-800 bg-slate-950/95 px-4 py-3 text-xs text-slate-400 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3">
          <span className="font-medium text-slate-100">Categories:</span>
          {categories.map((category) => (
            <Link
              key={category}
              to={`/products?category=${encodeURIComponent(category)}`}
              className="rounded-full px-3 py-1 transition hover:bg-slate-800 hover:text-white"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar
