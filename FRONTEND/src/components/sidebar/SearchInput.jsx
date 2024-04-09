import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
        <button type="submit" className="btn btn-circle bg-blue-500 text-white">
        <FaSearch size='20px'/>
        </button>
    </form>
  );
};

export default SearchInput