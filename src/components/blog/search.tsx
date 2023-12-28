import SearchIcon from "./searchIcon";
import SearchBar from "./searchBar";
export default function Search() {
  return (
    <>
      <div className="flex TABLET:hidden">
        <SearchBar></SearchBar>
      </div>

      <div className="hidden TABLET:flex">
        <SearchIcon></SearchIcon>
      </div>
    </>
  );
}
