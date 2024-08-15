// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { ScrollRestoration, Outlet, Link } from "react-router-dom";




function App() {


  return (
    <>
      <div className="main-page">
        <nav className='nav-bar'>
            <ul>
              
              <Link className="li-e" to={"movies"} >Movies</Link>
              <Link className="li-e" to={"webnovels"} >Web Novels</Link>
              <Link className="li-e" to={"books"} >Books</Link>
              <Link className="li-e" to={"manga"} >Manga</Link>
              <Link className="li-e" to={"anime"} >Anime</Link>
            </ul>
        </nav>

        <div className="content-section">
            <Outlet />
        </div>

        
      </div>


      
    </>
  )
}

export default App
