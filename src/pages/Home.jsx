import { Link } from 'react-router-dom'
import products from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

const categories = [
  { label: 'Electronics', icon: '📱', color: 'from-slate-900 to-indigo-500' },
  { label: 'Fashion', icon: '👗', color: 'from-slate-900 to-violet-500' },
  { label: 'Home & Kitchen', icon: '🏡', color: 'from-slate-900 to-cyan-500' },
  { label: 'Sports', icon: '🏃‍♂️', color: 'from-slate-900 to-emerald-500' },
]

function Home() {
  const trending = products
    .slice()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4)

  return (
    <div className="space-y-16 py-10 px-4 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-[0_30px_100px_-60px_rgba(99,102,241,0.8)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full bg-slate-800 px-4 py-2 text-sm text-indigo-200 shadow-inner shadow-slate-800/30">
              <span className="mr-2">New drops</span>
              <span className="rounded-full bg-indigo-500 px-2 py-1 text-white">Popular</span>
            </div>
            <div className="space-y-5">
              <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Modern essentials, curated for every day.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                Discover trending electronics, fashion, home, and active gear in a polished dark storefront built for fast browsing.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-indigo-400"
              >
                Shop curated styles
              </Link>
              <Link
                to="/products?category=Electronics"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950 px-6 py-4 text-base font-semibold text-slate-200 transition hover:border-indigo-500 hover:text-white"
              >
                Browse categories
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-6 shadow-xl shadow-slate-950/40 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {categories.map((category) => (
                <div key={category.label} className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 text-left">
                  <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${category.color} text-2xl shadow-xl shadow-slate-950/40`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.label}</h3>
                  <p className="mt-2 text-sm text-slate-400">Handpicked products for everyday style.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-indigo-400">Trending now</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">You may like these picks</h2>
          </div>
          <Link to="/products" className="text-sm font-semibold text-indigo-300 transition hover:text-white">
            Explore full collection →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trending.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-[0_24px_80px_-48px_rgba(99,102,241,0.8)]">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-white">Shop with confidence</h2>
            <p className="text-slate-400 leading-7">
              Add favorites to your cart, update quantities, and complete checkout with a clean and responsive shopping flow.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/95 p-5 text-center">
              <p className="text-3xl font-semibold text-white">12+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-500">Products</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/95 p-5 text-center">
              <p className="text-3xl font-semibold text-white">4</p>
              <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-500">Categories</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/95 p-5 text-center">
              <p className="text-3xl font-semibold text-white">100%</p>
              <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-500">Responsive</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
