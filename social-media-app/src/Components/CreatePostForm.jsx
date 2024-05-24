import React, { useState } from "react";

function CreatePostForm(props) {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    let handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    let handleContentChange= (event) => {
        setContent(event.target.value) 
    }

    let haddleSubmit = (event) => {
        event.preventDefault()
        if(title  === "" || content === ""){
            alert("Cannot submit Empty Post")
        }else{
            props.onNewSubmit({title, content})
            setContent("")
            setTitle("")
        }
    }



    return (
    <div>
        <form onSubmit={haddleSubmit}> 
            <label htmlFor="title">Title:</label> <br />
            <input type="text" name="title" onChange={handleTitleChange}/>
            <br />
            <br />
            <label htmlFor="Message">Message:</label>
            <br />
            <textarea type="textarea" name="content" onChange={handleContentChange}/>
            <br />
            <input type="submit"/>

        </form>

    </div>
    )
  }

  export default CreatePostForm;
