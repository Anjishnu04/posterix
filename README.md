# Posterix - Poster E-Commerce Store

A modern, responsive e-commerce application for buying and selling premium quality posters and custom prints built with React, TypeScript, and Tailwind CSS.

## 🎯 Features

- **Product Browsing** - Search and filter posters by category, price range, and style
- **Shopping Cart** - Add/remove items, adjust quantities, view cart summary
- **Newsletter** - Subscribe to get exclusive offers and updates
- **Responsive Design** - Mobile-friendly interface with Tailwind CSS
- **Modern UI** - Built with Radix UI components
- **Footer** - Comprehensive footer with links and contact information

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd posterix
```

2. **Install dependencies**
```bash
npm install --legacy-peer-deps
```

3. **Start development server**
```bash
npm run dev
```

The app will be available at `http://localhost:5174/`

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
posterix/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx          # Top navigation bar
│   │   │   ├── Footer.tsx          # Footer section
│   │   │   ├── ProductCard.tsx     # Individual poster card
│   │   │   ├── Cart.tsx            # Shopping cart sidebar
│   │   │   ├── FilterSideBar.tsx   # Product filters
│   │   │   ├── AuthPage.tsx        # Login/Signup modal
│   │   │   └── UI/                 # Reusable UI components (50+)
│   │   ├── Data/
│   │   │   └── products.tsx        # Product data
│   │   └── config/
│   │       └── firebase.ts         # Firebase configuration
│   ├── style/
│   │   ├── index.css               # Main stylesheet
│   │   ├── theme.css               # Theme variables
│   │   └── talwind.css             # Tailwind imports
│   ├── app.tsx                     # Main App component
│   └── main.tsx                    # Entry point
├── package.json
├── tsconfig.json
├── vite.config.js
└── README.md
```

## 🔧 Technologies

- **Frontend Framework**: React 18/19
- **Language**: TypeScript
- **Build Tool**: Vite 6.3.5
- **CSS**: Tailwind CSS v4.1.12
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Carousel**: Embla Carousel
- **Charts**: Recharts
- **Forms**: React Hook Form

## 🎨 Key Components

### Header
- Search functionality
- Shopping cart button with item count
- User login button

### ProductCard
- Poster image with fallback
- Product name and price
- Add to cart button
- Responsive grid layout

### Cart
- Slide-out sidebar showing cart items
- Quantity adjustment controls
- Remove item functionality
- Cart summary (subtotal, shipping, total)

### FilterSidebar
- Filter by category
- Price range slider
- Filter by style

### AuthPage
- Login form with email/password
- Signup form with full name
- Social login buttons
- Form validation
- Password visibility toggle

### Footer
- Newsletter signup
- About Posterix section
- Shop links
- Customer service links
- Contact information
- Social media links

##  Product Data

Products are stored in `src/app/Data/products.tsx` with the following structure:

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  style: string;
  image: string;
}
```

## 🛒 Shopping Cart Features

- Add/remove items
- Adjust quantities
- View cart total with shipping
- Persistent cart state
- Cart item count display in header

## 🎨 Customization

### Change Currency
Edit the `$` symbol in:
- `src/app/components/ProductCard.tsx` (line 37)
- `src/app/components/Cart.tsx` (lines 66, 103-108)

### Modify Theme
Update CSS variables in `src/style/theme.css`:
```css
--primary: #your-color;
--secondary: #your-color;
--background: #your-color;
--foreground: #your-color;
```

### Add More Products
Update `src/app/Data/products.tsx` with new product objects

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🐛 Common Issues

### Port Already in Use
If port 5174 is occupied, Vite will automatically try 5175, 5176, etc.

### Module Not Found
Run `npm install --legacy-peer-deps` to ensure all dependencies are installed

### Firebase Config Error
Make sure to replace placeholder values in `firebase.ts` with your actual Firebase credentials

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm install --legacy-peer-deps` - Install dependencies with peer dependency resolution

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For issues or questions, please contact: anjishnusarkar30@icloud.com

---

**Made with ❤️ by Posterix Team**
