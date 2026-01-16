import { Search, ShoppingCart, User, ChevronDown } from 'lucide-react';
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

export function Header({ searchQuery, setSearchQuery, cartItemCount, onCartClick, onLoginClick }: HeaderProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">Posterix</h1>
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-1">
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
          <div className="flex items-center gap-4">
            <button 
              onClick={onLoginClick}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <button 
              onClick={onLoginClick}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
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
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="flex items-center justify-between h-10 border-t border-gray-100">
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
  );
}
