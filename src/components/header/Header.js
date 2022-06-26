import React, {useEffect, useState} from 'react';
import './header-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropDownMenu} from "../DropDownMenu/DropDownMenu";
import {useDispatch} from "react-redux";
import {asyncGetLibrary} from "../../store/actions/libraryAction";
import {Input} from "../CustomInput/Input";

export const Header = props => {
    const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
    const sortChoice = ['relevance', 'newest'];
    const [category, setCategory] = useState('all');
    const [sort, setSort] = useState('relevance');
    const [searchItem, setSearchItem] = useState('');
    const dispatch = useDispatch();
    const sendReq = (term, category, sort, start = 0) => {
        dispatch(asyncGetLibrary({term: term.trim().replace(/ /g,'+'), category, sort, start}));
    }
    return (
        <div className="col-12 header">
            <div className="background-opacity">
                <h1 className="text-center fw-bold text-light pt-2 pb-3">Search for books</h1>
                <div className="container pb-3">
                   <Input funcSending={() => sendReq(searchItem, category, sort)} wordQuery={setSearchItem}/>
                    <div className="row justify-content-center">
                        <DropDownMenu label={'Categories'} data={categories} selected={setCategory}/>
                        <DropDownMenu label={'Sorting by'} data={sortChoice} selected={setSort}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
