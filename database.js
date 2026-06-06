// Database initialization and state management helper functions
const DB_PRODUCTS_KEY = 'fresh_fruits_products';
const DB_ORDERS_KEY = 'fresh_fruits_orders';

const DEFAULT_PRODUCTS = [
  {
    id: 'fruit-1',
    nameEN: 'Himsagar Mango',
    nameBN: 'হিমসাগর আম',
    descriptionEN: 'Naturally grown, sweet, and highly aromatic premium Himsagar mangoes from Rajshahi.',
    descriptionBN: 'রাজশাহীর বিষমুক্ত, অত্যন্ত মিষ্টি ও সুগন্ধি প্রিমিয়াম হিমসাগর আম।',
    price: 150,
    unitEN: 'kg',
    unitBN: 'কেজি',
    category: 'tropical',
    categoryEN: 'Tropical',
    categoryBN: 'গ্রীষ্মমন্ডলীয়',
    rating: 4.9,
    stock: 45,
    nutrition: {
      calories: '60 kcal',
      carbs: '15g',
      protein: '0.8g',
      fat: '0.38g'
    },
    reviews: [
      { user: 'Sabbir', rating: 5, commentEN: 'Best mangoes I have ever tasted! Extremely sweet.', commentBN: 'আমার খাওয়া সেরা আম! অত্যন্ত মিষ্টি।' },
      { user: 'Sarah', rating: 5, commentEN: 'Fresh and juicy, arrived in perfect condition.', commentBN: 'তাজা এবং রসালো, একদম সঠিক অবস্থায় পেয়েছি।' }
    ],
    svgType: 'mango'
  },
  {
    id: 'fruit-2',
    nameEN: 'Premium Lychee',
    nameBN: 'প্রিমিয়াম লিচু',
    descriptionEN: 'Juicy, sweet, and plump red lychees from the famous orchards of Dinajpur.',
    descriptionBN: 'দিনাজপুরের বিখ্যাত বাগান থেকে সংগৃহীত রসালো, মিষ্টি ও টসটসে লাল লিচু।',
    price: 280,
    unitEN: '100 pcs',
    unitBN: '১০০ টি',
    category: 'berries',
    categoryEN: 'Berries & Exotics',
    categoryBN: 'বেরি ও বিদেশী',
    rating: 4.8,
    stock: 30,
    nutrition: {
      calories: '66 kcal',
      carbs: '16.5g',
      protein: '0.8g',
      fat: '0.4g'
    },
    reviews: [
      { user: 'Niaz', rating: 5, commentEN: 'Excellent quality, highly recommended!', commentBN: 'অসাধারণ মান, সবাইকে কেনার পরামর্শ দিচ্ছি!' }
    ],
    svgType: 'lychee'
  },
  {
    id: 'fruit-3',
    nameEN: 'Sagor Banana',
    nameBN: 'সাগর কলা',
    descriptionEN: 'Naturally ripened, rich in potassium, sweet, and healthy local Sagor bananas.',
    descriptionBN: 'প্রাকৃতিক উপায়ে পাকানো, পটাশিয়ামে ভরপুর, মিষ্টি ও স্বাস্থ্যকর দেশী সাগর কলা।',
    price: 90,
    unitEN: 'dozen',
    unitBN: 'ডজন',
    category: 'tropical',
    categoryEN: 'Tropical',
    categoryBN: 'গ্রীষ্মমন্ডলীয়',
    rating: 4.6,
    stock: 60,
    nutrition: {
      calories: '89 kcal',
      carbs: '22.8g',
      protein: '1.1g',
      fat: '0.3g'
    },
    reviews: [
      { user: 'Mizan', rating: 4, commentEN: 'Very fresh and good size.', commentBN: 'অনেক তাজা এবং আকারে বেশ বড়।' }
    ],
    svgType: 'banana'
  },
  {
    id: 'fruit-4',
    nameEN: 'Giant Watermelon',
    nameBN: 'বিশাল তরমুজ',
    descriptionEN: 'Hydrating, sweet, and refreshing watermelons, perfect for hot summer days.',
    descriptionBN: 'প্রচুর জলীয় অংশযুক্ত, মিষ্টি এবং সতেজকারী তরমুজ, গরমের দিনের জন্য আদর্শ।',
    price: 240,
    unitEN: 'piece',
    unitBN: 'টি',
    category: 'melons',
    categoryEN: 'Melons',
    categoryBN: 'তরমুজ জাতীয়',
    rating: 4.7,
    stock: 15,
    nutrition: {
      calories: '30 kcal',
      carbs: '8g',
      protein: '0.6g',
      fat: '0.2g'
    },
    reviews: [
      { user: 'Anis', rating: 5, commentEN: 'Red and sweet inside! Loved it.', commentBN: 'ভেতরটা লাল ও মিষ্টি ছিল! খুব ভালো লেগেছে।' }
    ],
    svgType: 'watermelon'
  },
  {
    id: 'fruit-5',
    nameEN: 'Organic Strawberry',
    nameBN: 'অর্গানিক স্ট্রবেরি',
    descriptionEN: 'Fresh, tangy-sweet organic strawberries locally cultivated in glasshouses.',
    descriptionBN: 'গ্রীনহাউসে চাষ করা তাজা, মিষ্টি-টক অর্গানিক স্ট্রবেরি।',
    price: 450,
    unitEN: 'kg',
    unitBN: 'কেজি',
    category: 'berries',
    categoryEN: 'Berries & Exotics',
    categoryBN: 'বেরি ও বিদেশী',
    rating: 4.5,
    stock: 20,
    nutrition: {
      calories: '33 kcal',
      carbs: '8g',
      protein: '0.7g',
      fat: '0.3g'
    },
    reviews: [],
    svgType: 'strawberry'
  },
  {
    id: 'fruit-6',
    nameEN: 'Crisp Fuji Apple',
    nameBN: 'ক্রিস্পি ফুজি আপেল',
    descriptionEN: 'Imported high-quality sweet and crunchy Fuji apples with beautiful red coloring.',
    descriptionBN: 'আমদানিকৃত উচ্চ মানের মিষ্টি এবং মচমচে লাল ফুজি আপেল।',
    price: 320,
    unitEN: 'kg',
    unitBN: 'কেজি',
    category: 'pome',
    categoryEN: 'Apples & Pears',
    categoryBN: 'আপেল ও নাশপাতি',
    rating: 4.8,
    stock: 40,
    nutrition: {
      calories: '52 kcal',
      carbs: '14g',
      protein: '0.3g',
      fat: '0.2g'
    },
    reviews: [
      { user: 'Rakib', rating: 5, commentEN: 'Crunchy and delicious.', commentBN: 'মচমচে এবং সুস্বাদু।' }
    ],
    svgType: 'apple'
  },
  {
    id: 'fruit-7',
    nameEN: 'Sweet Sylhet Orange',
    nameBN: 'মিষ্টি সিলেট কমলা',
    descriptionEN: 'Juicy, rich in Vitamin C, tangy-sweet oranges directly from orchards of Sylhet.',
    descriptionBN: 'ভিটামিন সি সমৃদ্ধ, মিষ্টি ও হালকা টক রসালো কমলা, সরাসরি সিলেটের বাগান থেকে আনা।',
    price: 220,
    unitEN: 'kg',
    unitBN: 'কেজি',
    category: 'citrus',
    categoryEN: 'Citrus',
    categoryBN: 'লেবু জাতীয়',
    rating: 4.4,
    stock: 35,
    nutrition: {
      calories: '47 kcal',
      carbs: '12g',
      protein: '0.9g',
      fat: '0.1g'
    },
    reviews: [],
    svgType: 'orange'
  },
  {
    id: 'fruit-8',
    nameEN: 'Sweet Jackfruit',
    nameBN: 'মিষ্টি কাঁঠাল',
    descriptionEN: 'Rich in nutrients, sweet golden lobes of Jackfruit, the national fruit of Bangladesh.',
    descriptionBN: 'পুষ্টিগুণে ভরপুর, মিষ্টি ও সোনালী কোয়াযুক্ত কাঁঠাল, বাংলাদেশের জাতীয় ফল।',
    price: 190,
    unitEN: 'piece',
    unitBN: 'টি',
    category: 'tropical',
    categoryEN: 'Tropical',
    categoryBN: 'গ্রীষ্মমন্ডলীয়',
    rating: 4.7,
    stock: 12,
    nutrition: {
      calories: '95 kcal',
      carbs: '23g',
      protein: '1.7g',
      fat: '0.6g'
    },
    reviews: [],
    svgType: 'jackfruit'
  }
];

// Seed databases if they do not exist
function initDB() {
  if (!localStorage.getItem(DB_PRODUCTS_KEY)) {
    localStorage.setItem(DB_PRODUCTS_KEY, JSON.stringify(DEFAULT_PRODUCTS));
  }
  if (!localStorage.getItem(DB_ORDERS_KEY)) {
    localStorage.setItem(DB_ORDERS_KEY, JSON.stringify([]));
  }
}

// Fetch all products
function getProducts() {
  initDB();
  return JSON.parse(localStorage.getItem(DB_PRODUCTS_KEY));
}

// Fetch product by ID
function getProductById(id) {
  const products = getProducts();
  return products.find(p => p.id === id);
}

// Save all products
function saveProducts(products) {
  localStorage.setItem(DB_PRODUCTS_KEY, JSON.stringify(products));
}

// Add review to product
function addReview(productId, review) {
  const products = getProducts();
  const index = products.findIndex(p => p.id === productId);
  if (index !== -1) {
    products[index].reviews.push(review);
    // Recalculate rating
    const total = products[index].reviews.reduce((sum, r) => sum + r.rating, 0);
    products[index].rating = parseFloat((total / products[index].reviews.length).toFixed(1));
    saveProducts(products);
    return products[index];
  }
  return null;
}

// Fetch all orders
function getOrders() {
  initDB();
  return JSON.parse(localStorage.getItem(DB_ORDERS_KEY));
}

// Save a new order
function saveOrder(order) {
  const orders = getOrders();
  orders.push(order);
  localStorage.setItem(DB_ORDERS_KEY, JSON.stringify(orders));
  
  // Update inventory stock for purchased products
  const products = getProducts();
  order.items.forEach(item => {
    const pIndex = products.findIndex(p => p.id === item.id);
    if (pIndex !== -1) {
      products[pIndex].stock = Math.max(0, products[pIndex].stock - item.quantity);
    }
  });
  saveProducts(products);
}

// Update order status (for tracking simulation)
function updateOrderStatus(orderId, status) {
  const orders = getOrders();
  const oIndex = orders.findIndex(o => o.id === orderId);
  if (oIndex !== -1) {
    orders[oIndex].status = status;
    localStorage.setItem(DB_ORDERS_KEY, JSON.stringify(orders));
    return orders[oIndex];
  }
  return null;
}

// Generate beautiful fruit SVGs dynamically based on type
function getFruitSVG(type, width = 120, height = 120) {
  let paths = '';
  switch (type) {
    case 'mango':
      paths = `
        <!-- Mango Body -->
        <path d="M 60,30 C 90,30 105,65 95,90 C 85,110 50,110 35,95 C 20,80 30,30 60,30 Z" fill="url(#mangoGrad)" filter="url(#dropShadow)" />
        <!-- Leaf -->
        <path d="M 60,30 C 50,15 30,20 25,15 C 35,28 55,28 60,30 Z" fill="#2E7D32" />
        <path d="M 60,30 Q 45,20 25,15" stroke="#1B5E20" stroke-width="1" fill="none" />
      `;
      break;
    case 'lychee':
      paths = `
        <!-- Main Lychee -->
        <circle cx="50" cy="75" r="28" fill="url(#lycheeGrad)" filter="url(#dropShadow)" />
        <circle cx="50" cy="75" r="28" fill="none" stroke="#b71c1c" stroke-width="2" stroke-dasharray="2 3" opacity="0.4" />
        <!-- Second Lychee -->
        <circle cx="80" cy="80" r="22" fill="url(#lycheeGrad)" filter="url(#dropShadow)" />
        <circle cx="80" cy="80" r="22" fill="none" stroke="#b71c1c" stroke-width="2" stroke-dasharray="2 3" opacity="0.4" />
        <!-- Leaf & Stem -->
        <path d="M 50,47 C 50,35 65,30 65,30" stroke="#5D4037" stroke-width="3" fill="none" />
        <path d="M 65,30 C 75,22 85,32 80,42 C 72,40 68,34 65,30 Z" fill="#388E3C" />
      `;
      break;
    case 'banana':
      paths = `
        <!-- Bananas -->
        <g filter="url(#dropShadow)">
          <path d="M 35,40 C 55,40 85,55 90,95 C 75,95 50,70 30,45 Z" fill="url(#bananaGrad)" />
          <path d="M 40,35 C 62,35 92,52 95,90 C 80,90 55,65 35,40 Z" fill="url(#bananaGrad)" />
        </g>
        <path d="M 32,45 C 30,35 38,32 42,32" stroke="#5D4037" stroke-width="4" fill="none" />
      `;
      break;
    case 'watermelon':
      paths = `
        <!-- Watermelon Slice -->
        <path d="M 25,50 C 25,95 95,95 95,50 Z" fill="url(#melonRind)" filter="url(#dropShadow)" />
        <path d="M 30,50 C 30,90 90,90 90,50 Z" fill="url(#melonFlesh)" />
        <!-- Seeds -->
        <circle cx="45" cy="65" r="2" fill="#212121" />
        <circle cx="60" cy="75" r="2" fill="#212121" />
        <circle cx="75" cy="65" r="2" fill="#212121" />
        <circle cx="60" cy="55" r="2" fill="#212121" />
      `;
      break;
    case 'strawberry':
      paths = `
        <!-- Strawberry Body -->
        <path d="M 60,35 C 85,35 90,75 60,105 C 30,75 35,35 60,35 Z" fill="url(#strawberryGrad)" filter="url(#dropShadow)" />
        <!-- Seeds -->
        <circle cx="50" cy="55" r="1.5" fill="#FFE082" /><circle cx="70" cy="55" r="1.5" fill="#FFE082" />
        <circle cx="45" cy="70" r="1.5" fill="#FFE082" /><circle cx="75" cy="70" r="1.5" fill="#FFE082" />
        <circle cx="60" cy="65" r="1.5" fill="#FFE082" /><circle cx="55" cy="85" r="1.5" fill="#FFE082" />
        <circle cx="65" cy="85" r="1.5" fill="#FFE082" />
        <!-- Cap Leaves -->
        <path d="M 60,35 Q 50,22 40,38 Q 60,40 60,35 Q 70,22 80,38 Q 60,40 60,35 Z" fill="#2E7D32" />
        <path d="M 60,35 Q 60,20 60,20" stroke="#2E7D32" stroke-width="3" />
      `;
      break;
    case 'apple':
      paths = `
        <!-- Apple Body -->
        <path d="M 60,40 C 75,37 92,45 92,70 C 92,95 75,108 60,105 C 45,108 28,95 28,70 C 28,45 45,37 60,40 Z" fill="url(#appleGrad)" filter="url(#dropShadow)" />
        <!-- Stem -->
        <path d="M 60,40 Q 65,22 72,20" stroke="#5E35B1" stroke-width="3" fill="none" />
        <!-- Leaf -->
        <path d="M 65,30 C 75,20 85,25 80,32 C 72,32 68,31 65,30 Z" fill="#4CAF50" />
      `;
      break;
    case 'orange':
      paths = `
        <!-- Orange Body -->
        <circle cx="60" cy="70" r="32" fill="url(#orangeGrad)" filter="url(#dropShadow)" />
        <!-- Dimples -->
        <circle cx="45" cy="55" r="1" fill="#E65100" opacity="0.6" />
        <circle cx="75" cy="55" r="1" fill="#E65100" opacity="0.6" />
        <circle cx="50" cy="85" r="1" fill="#E65100" opacity="0.6" />
        <circle cx="70" cy="85" r="1" fill="#E65100" opacity="0.6" />
        <!-- Stem & Leaf -->
        <path d="M 60,38 Q 58,28 55,25" stroke="#5D4037" stroke-width="2" fill="none" />
        <path d="M 60,36 C 68,28 75,32 72,38 C 65,38 62,37 60,36 Z" fill="#2E7D32" />
      `;
      break;
    case 'jackfruit':
      paths = `
        <!-- Jackfruit Body -->
        <path d="M 60,35 C 88,35 88,95 60,110 C 32,95 32,35 60,35 Z" fill="url(#jackGrad)" filter="url(#dropShadow)" />
        <!-- Spiky details (simulated with dashed texture) -->
        <path d="M 60,35 C 88,35 88,95 60,110 C 32,95 32,35 60,35 Z" fill="none" stroke="#5D4037" stroke-width="2.5" stroke-dasharray="1 4" opacity="0.7" />
        <!-- Stem -->
        <path d="M 60,35 C 60,25 55,20 55,20" stroke="#4E342E" stroke-width="4.5" fill="none" />
      `;
      break;
    default:
      // Generic fallback
      paths = `<circle cx="60" cy="60" r="35" fill="#81C784" filter="url(#dropShadow)" />`;
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="${width}" height="${height}" class="fruit-svg-icon">
      <defs>
        <!-- Gradients -->
        <linearGradient id="mangoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFEB3B" />
          <stop offset="60%" stop-color="#FFB300" />
          <stop offset="100%" stop-color="#FF5722" />
        </linearGradient>
        <linearGradient id="lycheeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ff8a80" />
          <stop offset="60%" stop-color="#e53935" />
          <stop offset="100%" stop-color="#b71c1c" />
        </linearGradient>
        <linearGradient id="bananaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFF59D" />
          <stop offset="80%" stop-color="#FDD835" />
          <stop offset="100%" stop-color="#F57F17" />
        </linearGradient>
        <linearGradient id="melonRind" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#4CAF50" />
          <stop offset="100%" stop-color="#1B5E20" />
        </linearGradient>
        <linearGradient id="melonFlesh" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FF8A80" />
          <stop offset="100%" stop-color="#E53935" />
        </linearGradient>
        <linearGradient id="strawberryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FF5252" />
          <stop offset="70%" stop-color="#E53935" />
          <stop offset="100%" stop-color="#8E24AA" />
        </linearGradient>
        <linearGradient id="appleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FF8A80" />
          <stop offset="50%" stop-color="#D32F2F" />
          <stop offset="100%" stop-color="#5D4037" />
        </linearGradient>
        <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFCC80" />
          <stop offset="70%" stop-color="#FF9800" />
          <stop offset="100%" stop-color="#F57C00" />
        </linearGradient>
        <linearGradient id="jackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#CDDC39" />
          <stop offset="60%" stop-color="#8BC34A" />
          <stop offset="100%" stop-color="#4CAF50" />
        </linearGradient>

        <!-- Shadow Filter -->
        <filter id="dropShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.15" />
        </filter>
      </defs>
      ${paths}
    </svg>
  `;
}
