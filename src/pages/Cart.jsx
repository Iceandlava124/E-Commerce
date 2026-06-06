import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

function Cart() {
  const { cartItems, updateQuantity, removeFromCart, totalPrice } = useCart()

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-[0_24px_80px_-48px_rgba(99,102,241,0.8)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-400">Your bag</p>
              <h1 className="mt-3 text-4xl font-semibold text-white">Shopping cart</h1>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-indigo-500 hover:text-white"
            >
              Continue shopping
            </Link>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-12 text-center text-slate-300 shadow-lg shadow-slate-950/40">
            <h2 className="text-3xl font-semibold text-white">Your cart is empty</h2>
            <p className="mt-4 text-slate-400">Add products from the store to see them here.</p>
            <Link
              to="/products"
              className="mt-8 inline-flex rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              Browse products
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_0.4fr]">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-6 shadow-lg shadow-slate-950/30">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <img src={item.image} alt={item.name} className="h-28 w-28 rounded-3xl object-cover" />
                    <div className="flex-1 space-y-2 text-left">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-400 transition hover:text-rose-300"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-sm text-slate-400">{item.category}</p>
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                        <div className="flex items-center gap-2 rounded-3xl border border-slate-800 bg-slate-900/90 px-3 py-2">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-slate-300 transition hover:text-white"
                          >
                            −
                          </button>
                          <span className="min-w-[2rem] text-center text-sm text-white">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-slate-300 transition hover:text-white"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-sm text-slate-300">Unit price ${item.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between rounded-3xl bg-slate-900/90 px-5 py-4 text-slate-200">
                    <span className="text-sm uppercase tracking-[0.2em] text-slate-500">Subtotal</span>
                    <span className="text-lg font-semibold text-white">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>

            <aside className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-6 shadow-lg shadow-slate-950/40">
              <div className="space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Order summary</p>
                  <p className="mt-3 text-3xl font-semibold text-white">${totalPrice.toFixed(2)}</p>
                </div>
                <p className="text-sm leading-6 text-slate-400">
                  Review your cart items and proceed to checkout to complete the order.
                </p>
                <Link
                  to="/checkout"
                  className="inline-flex w-full items-center justify-center rounded-3xl bg-indigo-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-indigo-400"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
