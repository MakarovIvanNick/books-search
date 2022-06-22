import React from 'react';
import './header-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropDownMenu} from "../DropDownMenu/DropDownMenu";

export const Header = props => {
    const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
    const sortChoice = ['relevance', 'newest'];
    return (
        <div className="col-12 header">
            <div className="background-opacity">
                <h1 className="text-center fw-bold text-light pt-2 pb-3">Search for books</h1>
                <div className="container pb-3">
                    <div className="col mb-3">
                        <input type="text" className="form-control form" placeholder="Enter book name..."/>
                    </div>
                    <div className="row justify-content-center">
                        <DropDownMenu label={'Categories'} data={categories}/>
                        <DropDownMenu label={'Sorting by'} data={sortChoice}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
