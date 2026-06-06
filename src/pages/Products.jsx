import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import products from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rating' },
]

function Products() {
  const location = useLocation()
  const navigate = useNavigate()
  const params = useMemo(() => new URLSearchParams(location.search), [location.search])
  const initialCategory = params.get('category') || 'All'
  const initialQuery = params.get('q') || ''
  const [category, setCategory] = useState(initialCategory)
  const [search, setSearch] = useState(initialQuery)
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    setCategory(initialCategory)
    setSearch(initialQuery)
  }, [initialCategory, initialQuery])

  const categoryOptions = useMemo(
    () => ['All', ...Array.from(new Set(products.map((product) => product.category)))],
    [],
  )

  const filteredProducts = useMemo(() => {
    const term = search.toLowerCase()
    return products
      .filter((product) => category === 'All' || product.category === category)
      .filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term),
      )
  }, [category, search])

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return b.rating - a.rating
    })
  }, [filteredProducts, sort])

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    const queryParams = new URLSearchParams()
    if (category && category !== 'All') queryParams.set('category', category)
    if (search.trim()) queryParams.set('q', search.trim())
    navigate(`/products?${queryParams.toString()}`)
  }

  return (
    <div className="space-y-10 py-10 px-4 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-[0_24px_80px_-48px_rgba(99,102,241,0.8)] animate-in fade-in slide-in-from-bottom-8 duration-500">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-400">Shop</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Browse products</h1>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-4 text-sm text-slate-300 shadow-inner shadow-slate-900/30 sm:p-5">
            <p className="font-semibold text-slate-100">Showing {sortedProducts.length} items</p>
            <p className="mt-1 text-slate-400">Update filters and sort to refine the selection.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
          <form onSubmit={handleSearchSubmit} className="space-y-4 rounded-[1.75rem] border border-slate-800 bg-slate-950/95 p-6 shadow-lg shadow-slate-950/40">
            <div className="grid gap-4 sm:grid-cols-3">
              <label className="block text-sm text-slate-300">
                Search
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search products"
                  className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500"
                />
              </label>
              <label className="block text-sm text-slate-300">
                Category
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500"
                >
                  {categoryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm text-slate-300">
                Sort by
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-3xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400 sm:w-auto"
            >
              Update results
            </button>
          </form>

          <div className="space-y-4 rounded-[1.75rem] border border-slate-800 bg-slate-950/95 p-6 shadow-lg shadow-slate-950/40">
            <div className="rounded-3xl bg-slate-900/90 p-5">
              <h2 className="text-lg font-semibold text-white">Quick tips</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Use search and category filters to find the perfect product faster. Sort by rating to see top customer favorites.
              </p>
            </div>
            <div className="grid gap-3">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-4">
                <p className="text-sm text-slate-300">Try searching for “headphones” or “scarf” for popular picks.</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-4">
                <p className="text-sm text-slate-300">Filter by category to narrow results by style and purpose.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3 animate-in fade-in duration-700 delay-150 fill-mode-both">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  )
}

export default Products
