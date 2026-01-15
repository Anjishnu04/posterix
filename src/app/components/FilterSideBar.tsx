

interface FilterSidebarProps {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  selectedStyles: string[];
  setSelectedStyles: (styles: string[]) => void;
}

export function FilterSidebar({
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
  selectedStyles,
  setSelectedStyles,
}: FilterSidebarProps) {
  const categories = ['Abstract', 'Nature', 'Typography', 'Photography', 'Vintage', 'Modern'];
  const styles = ['Minimalist', 'Colorful', 'Black & White', 'Geometric', 'Artistic'];

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleStyle = (style: string) => {
    if (selectedStyles.includes(style)) {
      setSelectedStyles(selectedStyles.filter(s => s !== style));
    } else {
      setSelectedStyles([...selectedStyles, style]);
    }
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-6 overflow-y-auto">
      <h2 className="font-semibold text-lg mb-6">Filters</h2>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="font-medium text-sm mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h3 className="font-medium text-sm mb-3">Price Range</h3>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="200"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Styles */}
      <div className="mb-8">
        <h3 className="font-medium text-sm mb-3">Style</h3>
        <div className="space-y-2">
          {styles.map((style) => (
            <label key={style} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedStyles.includes(style)}
                onChange={() => toggleStyle(style)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{style}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => {
          setSelectedCategories([]);
          setSelectedStyles([]);
          setPriceRange([0, 200]);
        }}
        className="w-full py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );
}
