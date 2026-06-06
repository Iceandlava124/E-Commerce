const categoryAssets = {
  Electronics: { colors: ['#0f172a', '#4338ca'] },
  Fashion: { colors: ['#1f2937', '#8b5cf6'] },
  'Home & Kitchen': { colors: ['#0f172a', '#38bdf8'] },
  Sports: { colors: ['#0f172a', '#22c55e'] },
}

const productIcons = {
  'Pulse+ Wireless Headphones': '🎧',
  'Smart Watch Ultra': '⌚',
  'AeroFit Running Sneakers': '👟',
  'Titan Gym Duffel Bag': '🎒',
  'Silk Blend Lounge Set': '🩳',
  'Sierra Denim Jacket': '🧥',
  'Luna Ceramic Table Lamp': '💡',
  'Nordic Kitchen Knife Set': '🔪',
  'Velvet Accent Chair': '🪑',
  'Trailblaze Cycling Shorts': '🚴',
  'Nova Tech Backpack': '🎒',
  'Aria Silk Scarf': '🧣',
}

function createImage(label, category, emoji) {
  const { colors } = categoryAssets[category] || categoryAssets.Electronics
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${colors[0]}" />
      <stop offset="100%" stop-color="${colors[1]}" />
    </linearGradient>
  </defs>
  <rect width="640" height="480" fill="url(#bg)" rx="40" />
  <circle cx="500" cy="120" r="95" fill="rgba(255,255,255,0.12)" />
  <text x="50%" y="42%" dominant-baseline="middle" text-anchor="middle" font-size="112" fill="rgba(255,255,255,0.88)">${emoji}</text>
  <rect x="40" y="320" width="560" height="100" rx="28" fill="rgba(15,23,42,0.92)" />
  <text x="50%" y="375" dominant-baseline="middle" text-anchor="middle" font-size="34" fill="#f8fafc" font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-weight="600">${label}</text>
</svg>`
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

const products = [
  {
    id: 'p1',
    name: 'Pulse+ Wireless Headphones',
    category: 'Electronics',
    price: 129.99,
    rating: 4.8,
    description: 'Premium on-ear headphones with active noise cancellation, long battery life, and rich bass for immersive listening.',
    image: createImage('Headphones', 'Electronics', productIcons['Pulse+ Wireless Headphones']),
  },
  {
    id: 'p2',
    name: 'Smart Watch Ultra',
    category: 'Electronics',
    price: 199.99,
    rating: 4.6,
    description: 'Track workouts, notifications, and sleep with a sleek smartwatch built for everyday performance.',
    image: createImage('Smartwatch', 'Electronics', productIcons['Smart Watch Ultra']),
  },
  {
    id: 'p3',
    name: 'AeroFit Running Sneakers',
    category: 'Sports',
    price: 89.99,
    rating: 4.7,
    description: 'Lightweight trainers with responsive cushioning and breathable mesh for smooth runs.',
    image: createImage('Sneakers', 'Sports', productIcons['AeroFit Running Sneakers']),
  },
  {
    id: 'p4',
    name: 'Titan Gym Duffel Bag',
    category: 'Sports',
    price: 54.99,
    rating: 4.4,
    description: 'Durable duffel bag with multiple pockets and a comfy shoulder strap for every gym visit.',
    image: createImage('Gym Bag', 'Sports', productIcons['Titan Gym Duffel Bag']),
  },
  {
    id: 'p5',
    name: 'Silk Blend Lounge Set',
    category: 'Fashion',
    price: 69.99,
    rating: 4.5,
    description: 'Comfortable lounge wear crafted from a soft stretch blend for relaxed styling at home or on the go.',
    image: createImage('Lounge Set', 'Fashion', productIcons['Silk Blend Lounge Set']),
  },
  {
    id: 'p6',
    name: 'Sierra Denim Jacket',
    category: 'Fashion',
    price: 99.99,
    rating: 4.3,
    description: 'A timeless denim jacket with a tailored fit and subtle contrast stitching for effortless layering.',
    image: createImage('Denim Jacket', 'Fashion', productIcons['Sierra Denim Jacket']),
  },
  {
    id: 'p7',
    name: 'Luna Ceramic Table Lamp',
    category: 'Home & Kitchen',
    price: 45.0,
    rating: 4.6,
    description: 'Minimal tabletop lamp with warm LED lighting and a sculptural ceramic base.',
    image: createImage('Table Lamp', 'Home & Kitchen', productIcons['Luna Ceramic Table Lamp']),
  },
  {
    id: 'p8',
    name: 'Nordic Kitchen Knife Set',
    category: 'Home & Kitchen',
    price: 79.99,
    rating: 4.7,
    description: 'Professional-grade knives with ergonomic handles and precision steel blades.',
    image: createImage('Knife Set', 'Home & Kitchen', productIcons['Nordic Kitchen Knife Set']),
  },
  {
    id: 'p9',
    name: 'Velvet Accent Chair',
    category: 'Home & Kitchen',
    price: 229.99,
    rating: 4.2,
    description: 'Plush accent chair with velvet upholstery, tapered legs, and contemporary styling.',
    image: createImage('Accent Chair', 'Home & Kitchen', productIcons['Velvet Accent Chair']),
  },
  {
    id: 'p10',
    name: 'Trailblaze Cycling Shorts',
    category: 'Sports',
    price: 39.99,
    rating: 4.5,
    description: 'Breathable cycling shorts designed for comfort, support, and sweat-wicking performance.',
    image: createImage('Cycling Shorts', 'Sports', productIcons['Trailblaze Cycling Shorts']),
  },
  {
    id: 'p11',
    name: 'Nova Tech Backpack',
    category: 'Electronics',
    price: 79.99,
    rating: 4.3,
    description: 'Smart travel backpack with laptop protection, USB charging port, and water-resistant fabric.',
    image: createImage('Tech Backpack', 'Electronics', productIcons['Nova Tech Backpack']),
  },
  {
    id: 'p12',
    name: 'Aria Silk Scarf',
    category: 'Fashion',
    price: 34.99,
    rating: 4.9,
    description: 'Lightweight silk scarf with a rich gradient print that elevates every outfit.',
    image: createImage('Silk Scarf', 'Fashion', productIcons['Aria Silk Scarf']),
  },
]

export default products
