import React, {useEffect, useState} from "react";
import './input-style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Input = props => {
    const [searchItem, setSearchItem] = useState('');
    useEffect(() => {
        props.wordQuery(searchItem);
    }, [searchItem]);
    const onKeyPress = event => {
        if (event.charCode === 13) {
            props.funcSending();
            setSearchItem('');
        }
    }
    return (
        <div className="row mb-3 justify-content-center align-items-center">
                <input type="text"
                       className="form col-5 text-truncate"
                       placeholder="Enter book name..."
                       onKeyPress={event => onKeyPress(event)}
                       onChange={(event) => setSearchItem(event.target.value)}
                       value={searchItem}/>
                <i className='col-1 bi-search bg-white fs-5 icons align-items-center'
                   onClick={() => {
                       props.funcSending()
                       setSearchItem('');
                   }}/>
        </div>
    )
}
