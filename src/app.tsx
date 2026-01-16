import { useState, useMemo } from 'react';
import { Header } from '@/app/components/Header';
import { FilterSidebar } from '@/app/components/FilterSideBar';
import { ProductCard, Product } from '@/app/components/ProductCard';
import { Cart, CartItem } from '@/app/components/Cart';
import { Footer } from '@/app/components/Footer';
import { AuthPage } from '@/app/components/AuthPage';
import { products } from '@/app/Data/products';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Filter products based on search and filters
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search filter
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Category filter
      const matchesCategory = selectedCategories.length === 0 || 
                             selectedCategories.includes(product.category);
      
      // Price filter
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      // Style filter
      const matchesStyle = selectedStyles.length === 0 || 
                          selectedStyles.some(style => product.style.includes(style));
      
      return matchesSearch && matchesCategory && matchesPrice && matchesStyle;
    });
  }, [searchQuery, selectedCategories, priceRange, selectedStyles]);

  // Add product to cart
  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    
    // Briefly open the cart to show the item was added
    setIsCartOpen(true);
  };

  // Update cart item quantity
  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(productId);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  // Remove item from cart
  const handleRemoveItem = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
        onLoginClick={() => setIsAuthOpen(true)}
      />
      
      <div className="flex">
        <FilterSidebar
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selectedStyles={selectedStyles}
          setSelectedStyles={setSelectedStyles}
        />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'Poster' : 'Posters'}
              </h2>
            </div>
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-lg text-gray-500">No posters found</p>
                <p className="text-sm text-gray-400 mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
      {isAuthOpen && <AuthPage onClose={() => setIsAuthOpen(false)} />}
      <Footer />
    </div>
  );
}
