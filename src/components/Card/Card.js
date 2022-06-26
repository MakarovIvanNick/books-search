import React from 'react';
import './card-style.css';
import {Link} from "react-router-dom";

export const Card = props => {
    // console.log('card', props.bookData);
    return (
        <div className="col mx-3 my-2 p-0 background" onClick={() => {
            props.bookDesc();
        }}>
            <div className='py-3 px-4 justify-items-center'>
                <img className='img-fluid shadow-custom d-block mx-auto' src={props.bookData.img}/>
                <div className='mt-2 mb-2 text-muted text-decoration-underline'>{props.bookData.categories}</div>
                <h6 className='fw-bold text-custom mb-1'>{props.bookData.title}</h6>
                <div className='text-muted'>
                    {
                        props.bookData.authors?.map(
                            (item, index) => index === props.bookData.authors.length - 1 ? item : item + ', '
                        )
                    }
                </div>
            </div>
        </div>
    )
}
