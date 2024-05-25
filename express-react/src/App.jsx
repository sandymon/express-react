import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './Components/Post'
import CreatePostForm from './Components/CreatePostForm'
import Feed from './Components/Feed'

function App() {
  
  const [showPost, setShowPost] = useState(false)

  const[posts, setPosts] = useState([])

  let handleButtonclick = ()=>{
     setShowPost(true)
  }

  let handleNewPostSubmit = (data) => {
    setPosts([...posts, data])
    
  }

  return (
   <div>
      <h1>Fakebook!</h1>
      <button className='createPost' onClick={handleButtonclick}>Create Post</button>
      
      

      {showPost && (<CreatePostForm onNewSubmit = {handleNewPostSubmit} />)}
      <Feed  list = {posts} />



      {/* <Post content="This is another test post!" /> */ }

   </div>
  )
}

export default App
