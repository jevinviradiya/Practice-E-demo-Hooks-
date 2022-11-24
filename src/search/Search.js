import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { SearchData } from "../state/action/ProductAction";

const Search = () => {

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.ProductData)
  const inputRef = useRef();
  const handleOnSelect = (e) => {
    dispatch(SearchData(e.name));
  };

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };

  useEffect(() => {
    if(inputRef.current.value){
      dispatch(SearchData(""));
    }
  }, []);

  const filtr = [];
  data?.data?.products.filter((el) => filtr.push({ id: el.id, name: el.title }));

  return (
    <>
      <div
        className="input-group"
        style={{ justifyContent: "end", padding: "15px" }}
      >
        <div className="form-outline">
          <input
            type="search"
            id="form1"
            ref= {inputRef}
            className="form-control"
            // onChange={handleChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch(SearchData(inputRef.current.value))}
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
      
      <div style={{margin: "20px"}}>
      <ReactSearchAutocomplete
        items={filtr}
        // onSearch={handleChange}
        // onHover={handleOnHover}
        onSelect={handleOnSelect}
        // onFocus={handleOnFocus}
        // autoFocus
        // formatResult={formatResult}
      />
      </div>
    </>
  );
};

export default Search;
