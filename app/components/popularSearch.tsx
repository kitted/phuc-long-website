import { Search } from "lucide-react";

export default function PopularSearches() {
  return (
    <div className="bg-teal-800 py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 mt-12 mx-[5px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-10">
          Popular searches
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {/* Search Category Item - Today's best travel deals */}
          <SearchCategoryItem
            title="Today's best travel deals"
            description="Save now. Don't miss out."
          />

          {/* Search Category Item - Tours under US$2,500 */}
          <SearchCategoryItem
            title="Tours under US$2,500"
            description="Browse our latest offers"
          />

          {/* Search Category Item - Trips under 10 days */}
          <SearchCategoryItem
            title="Trips under 10 days"
            description="Limited availability. Selling fast."
          />

          {/* Search Category Item - Past guest benefits */}
          <SearchCategoryItem
            title="Past guest benefits"
            description="Savings with Global Tour Rewards"
          />

          {/* Search Category Item - Offers for travel groups of 9+ */}
          <SearchCategoryItem
            title="Offers for travel groups of 9+"
            description="Save when you book 9+ guests"
          />

          {/* Search Category Item - Solo travel */}
          <SearchCategoryItem
            title="Solo travel"
            description="Travel solo with absolute ease"
          />
        </div>
      </div>
    </div>
  );
}

// Extracted SearchCategoryItem component for better reusability
function SearchCategoryItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start group cursor-pointer">
      <div className="bg-white p-2 sm:p-2.5 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0 flex items-center justify-center transition-transform group-hover:scale-105">
        <Search className="h-4 w-4 sm:h-5 sm:w-5 text-teal-800" />
      </div>
      <div className="flex-grow min-w-0">
        <h3 className="text-white text-base sm:text-lg font-semibold mb-0.5 sm:mb-1 line-clamp-2 group-hover:underline">
          {title}
        </h3>
        <p className="text-white text-xs sm:text-sm opacity-90 line-clamp-2">
          {description}
        </p>
        <div className="h-px bg-white/30 w-full mt-2 sm:mt-3"></div>
      </div>
    </div>
  );
}
