import React, { useState } from "react";
import './comment.css'




function Comment(props){

    const [like, setLikes] = useState(0)

    return(
    <div id="commentBox">
    <p >{props.content} </p>
    <button id="commentlike" onClick={()=> setLikes(like + 1)}>like: {like}</button>
    
    
    </div>
    )
}

export default Comment
    