import React from 'react';
import {useSelector} from "react-redux";
import './bookPage-style.css';

export const BookPage = props => {
    const bookTitle = useSelector(state => state.getBook.title);
    const bookImg = useSelector(state => state.getBook.img);
    const bookDesc = useSelector(state => state.getBook.description);
    const bookCategories = useSelector(state => state.getBook.categories);
    const bookAuthors = useSelector(state => state.getBook.authors);
    console.log(bookCategories);
    return (
        <div className='row row-cols-1 row-cols-sm-2 page'>
            <div className='col-sm-5 background-large-custom align-items-center'>
                <div className='align-items-center py-4 align-self-center'>
                    <img className='img-fluid shadow-custom my-auto mx-auto d-block' src={bookImg}/>
                </div>
            </div>
            <div className='col-sm-7 py-2 px-4 align-self-center'>
                <h6 className='text-muted'>
                {
                    bookCategories ?
                    bookCategories.map(
                        (item, index) => index === bookCategories.length - 1 ? item : item + ' / '
                    ) :null
                }
                </h6>
                <h2 className='mt-5'>{bookTitle}</h2>
                <h6 className='mt-1 text-muted text-decoration-underline'>{
                    bookAuthors ?
                        bookAuthors.map(
                            (item, index) => index === bookAuthors.length - 1 ? item : item + ', '
                        ) :null
                }</h6>
                <div className='mt-5 px-2 py-2 border-custom'>
                    <p className=''>{bookDesc}</p>
                </div>
            </div>
        </div>
    )
}
