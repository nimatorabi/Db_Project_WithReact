import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import "./SearchBar.css";
const SearchBar = (props) => {
    return (
        <div className="mr-5 form-inline">
            <span>
                <i className="fa fa-search"></i>
            </span>
            <input className="" placeholder="جتسجو..."></input>
        </div>
    );
}

export default SearchBar;
