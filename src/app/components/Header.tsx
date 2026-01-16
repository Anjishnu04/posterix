import { Search, ShoppingCart, User, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/components/UI/dropdown-menu';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  cartItemCount: number;
  onCartClick: () => void;
  onLoginClick: () => void;
}

const logoStyles = `
  @keyframes logoGlow {
    0%, 100% { box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); }
    50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.4); }
  }
  
  @keyframes logoBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }
  
  .logo-animated {
    animation: logoGlow 3s ease-in-out infinite, logoBounce 2s ease-in-out infinite;
  }
`;

export function Header({ searchQuery, setSearchQuery, cartItemCount, onCartClick, onLoginClick }: HeaderProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      label: 'Shop Posters',
      submenu: ['Abstract', 'Typography', 'Photography', 'Illustrations'],
    },
    {
      label: 'Multi Posters Collections',
      submenu: ['Trending', 'Best Sellers', 'New Arrivals', 'Sale'],
    },
    {
      label: 'Retro Photo Prints',
      submenu: ['Vintage', 'Classic', 'Modern Retro'],
    },
    {
      label: 'Custom Posters',
      submenu: ['Design Your Own', 'Upload Image', 'Templates'],
    },
  ];

  const sideItems = ['Stickers', 'Bulk Posters', 'Reviews'];

  return (
    <>
      <style>{logoStyles}</style>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Navigation Bar */}
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="shrink-0">
              <div className="logo-animated hover:scale-105 transition-transform duration-300 cursor-pointer">
                <h1 
                  className="text-3xl sm:text-5xl font-black text-black text-center tracking-tight" 
                  style={{
                    fontFamily: 'Impact, Arial Black, sans-serif', 
                    letterSpacing: '-0.02em', 
                    fontWeight: 900,
                    textShadow: '3px 3px 0px rgba(0,0,0,0.15), 6px 6px 0px rgba(59, 130, 246, 0.3), 9px 9px 0px rgba(0,0,0,0.1)'
                  }}
                >
                  POSTERIX
                </h1>
              </div>
            </div>

            {/* Center Navigation - Hidden on Mobile */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center gap-1 hover:bg-gray-50 rounded-lg transition-colors">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {item.submenu.map((subitem) => (
                      <DropdownMenuItem key={subitem}>{subitem}</DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button 
                onClick={onLoginClick}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
              <button 
                onClick={onLoginClick}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors hidden sm:block"
              >
                <User className="h-6 w-6" />
              </button>
              <button 
                onClick={onCartClick}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors relative"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors">
                    {item.label}
                  </button>
                  {item.submenu.map((subitem) => (
                    <button
                      key={subitem}
                      className="w-full text-left px-8 py-2 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
                    >
                      {subitem}
                    </button>
                  ))}
                </div>
              ))}
              <div className="border-t border-gray-100 mt-4 pt-4">
                {sideItems.map((item) => (
                  <button
                    key={item}
                    className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Secondary Navigation - Hidden on Mobile */}
          <div className="hidden lg:flex items-center justify-between h-10 border-t border-gray-100">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 hover:bg-gray-50 px-2 py-1 rounded transition-colors">
                  Help Center
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Contact Us</DropdownMenuItem>
                <DropdownMenuItem>FAQ</DropdownMenuItem>
                <DropdownMenuItem>Shipping Info</DropdownMenuItem>
                <DropdownMenuItem>Returns</DropdownMenuItem>
                <DropdownMenuItem>Terms & Conditions</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center gap-4">
              {sideItems.map((item) => (
                <button
                  key={item}
                  className="text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-2 py-1 rounded transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
