import React from "react";
import Post from "./Post";


function Feed(props) {

    let listPosts = props.list.map((data, index)=> {
        return (
           <Post title = {data.title} content = {data.content}/>
        )
    })
    
    return(
        <div>{listPosts}</div>
    )
}

export default Feed


