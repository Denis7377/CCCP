import React from "react";
import AuthorReview from "../AuthorReview/AuthorReview";
import Rating from "../Rating/Rating";

function Reviews ({author, text, created_at, rating})  {
   
    return <>
            <AuthorReview 
        author={author} text={text}>
        </AuthorReview>
        <Rating rating={rating}></Rating>
        <div>{new Date(created_at).toLocaleString()}</div>
    </>
}
export default Reviews;