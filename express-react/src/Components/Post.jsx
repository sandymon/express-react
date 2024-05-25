import React, { useState } from "react";
import Comment from "./Comment";
import './Post.css'

function Post(props) {
    
    const [like, setLikes] = useState(0);
    const [commentCount, setcommentCount] = useState(0);

    const[comment, setcomment] = useState("")

    const [comments, setcomments] = useState([]);
    const [showcommentTextBox,setshowcommentTextBox] = useState(false)
    const [showcommentBox,setshowcommentBox] = useState(false)

    let handleAddComment = ()=>{
        setshowcommentTextBox(true)
    }

    let handleCommentChange = (data)=>{
        setcomment(data.target.value)
    }
    let handleCommentSubmision = (event)=>{
        event.preventDefault()
        if(comment === ""){
            alert="comment box is empty"
        }else{
            setcomments([...comments, comment])
            setcommentCount(commentCount + 1)
            setcomment("")
            setshowcommentTextBox(false)
        }
    }

    let addComments = comments.map((data, index)=>{
        return(
            <div >
             <Comment content = {data}/>
            </div>
        )

    })
    return(
        <div className="postdiv">
            <h2 className="post">{props.title}</h2>
            <p className="post">{props.content}</p>
            <p className="postlike"> Likes: {like}</p>
            <button className="postlike button"  onClick={()=> setLikes(like + 1)}>like</button>
            <p>Comments: {commentCount}<button onClick={handleAddComment} >add comment</button></p>

            <button className="postlike button"  onClick={()=> setshowcommentBox(!showcommentBox)}>
                {showcommentBox ? "Hide Comments" : "Show Comments"}
            </button>

            <br />
            <br />
            
            {showcommentTextBox &&(<form onSubmit={handleCommentSubmision}> 
            <textarea type="text" name = "comment" placeholder="write your comment" onChange={handleCommentChange}/> 
            <br /><input type="submit" /> <br /> <br />
            </form>)}



            {showcommentBox &&(<div className="commentBox">
                {addComments}
            </div>)}
            
        </div>

    )
    
}

export default Post