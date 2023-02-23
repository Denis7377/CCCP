import React from "react";
import AuthorReview from "../AuthorReview/AuthorReview";

function Comments ({author, text, created_at})  {
   
    return <>
            <AuthorReview 
        author={author} text={text}>
        </AuthorReview>
        <div>{new Date(created_at).toLocaleString()}</div>
    </>
}
export default Comments;