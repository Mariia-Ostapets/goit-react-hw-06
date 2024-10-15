import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setSearchFilter } from "../../redux/actions";

export default function SearchBox() {
  const dispatch = useDispatch();

  const serchFilter = useSelector((state) => state.filters.name);

  const handleFilterChange = (serchFilter) => dispatch(setStatusFilter(filter));

  return (
    <div className={css.searchContainer}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={serchFilter}
        onChange={handleFilterChange}
      />
    </div>
  );
}
