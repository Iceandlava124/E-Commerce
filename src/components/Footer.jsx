import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/95 px-4 py-12 text-slate-400 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="max-w-xl space-y-4">
          <h2 className="text-2xl font-semibold text-white">Nova Market</h2>
          <p className="leading-7 text-slate-400">
            Clean, modern shopping experience for trend-forward products and everyday essentials.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Shop</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/products" className="transition hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=Electronics" className="transition hover:text-white">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products?category=Fashion" className="transition hover:text-white">
                  Fashion
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Support</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Returns
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Company</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
