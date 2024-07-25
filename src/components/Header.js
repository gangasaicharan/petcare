import React from 'react'

function Header() {
  return (
    <div>
        <header className='header'>
            <div className='logo'>
                pet-care</div>
            <nav>
                <a href='#'> Home</a>
                <a href="#">Chats</a>
                 <a href="#">All appointments</a>
                 <a href="#">Subscription</a>
                 <a href="#">Notification</a>
            </nav>
            <div className='profile'>
                <img src='https://www.gravatar.com/avatar/' alt='profile' />
            </div>

        </header>

      
    </div>
  )
}

export default Header
