type SearchbarProps = {
  searchQuery: string;
  updateSearchQuery: (val: string) => void;
};

const SearchBar = ({ searchQuery, updateSearchQuery }: SearchbarProps) => {
  return (
    <div>
      <label
        htmlFor="articleSearch"
        className="block text-sm font-medium text-gray-700"
      >
        Search
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="query"
          id="articleSearch"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Search for a specific article by title"
          value={searchQuery}
          onChange={(e) => updateSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
