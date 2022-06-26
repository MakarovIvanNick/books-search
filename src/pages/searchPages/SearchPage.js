import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Card} from "../../components/Card/Card";
import {asyncLoadMore, asyncMoreAboutBook} from "../../store/actions/libraryAction";
import {BookPage} from "../bookPage/bookPage";

export const SearchPage = props => {
    const booksData = useSelector(state => state.getLibrary.books);
    const total = useSelector(state => state.getLibrary.totalItems);
    const loading = useSelector(state => state.getLibrary.loading);
    const error = useSelector(state => state.getLibrary.error);
    const dataReq = useSelector(state => state.getLibrary.dataRequest);
    const loadingMore = useSelector(state => state.getLibrary.loadingMore);
    const bookTitle = useSelector(state => state.getBook.title);
    const dispatch = useDispatch();
    console.log(booksData)
    if(loading){
        return (
            <div className="mt-5 text-center">
                <div className="spinner-border"/>
            </div>
        )
    }
    if(error){
        return (
            <div className="mt-5 text-center">
                <h2>{error}</h2>
            </div>
        )
    }
    if(booksData.length === 0) {
        return (
            <div className="mt-5 text-center">
                <h2>Enter the name of the book</h2>
            </div>
        )
    }
    if(bookTitle){
        return <BookPage />
    }
    const disabledLoadMore = booksData.length >= total;
    return (
        <div className="container-fluid">
            <p className="text-center mt-1 mb-3">
                {`Found ${total} results`}
            </p>
            <div className="row row-cols-auto justify-content-center">
                {
                    booksData.map((item, index) => <Card bookData={item} key={index} bookDesc={() => dispatch(asyncMoreAboutBook(item.link))}/>)
                }
            </div>
            {
                loadingMore ?
                    <div className="mb-1 text-center">
                        <div className="spinner-border"/>
                    </div>
                    :
                    <button className="btn btn-secondary d-block mx-auto mb-1"
                            disabled={disabledLoadMore}
                            onClick={() => dispatch(asyncLoadMore(dataReq))}>Load More</button>
            }
        </div>
    )
}
