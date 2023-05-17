import { useState } from "react";


export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div>
    <div className=''>
      <input className=''
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
    </div>
  );
}