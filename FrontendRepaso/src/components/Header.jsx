import { useState } from "react"
import { Link as LinkRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {userSignOut} from '../store/actions/userActions'

const Header = () => {

  const dispatch = useDispatch();

  let [show, setShow] = useState(false);

  const user = useSelector(store=>store.userReducer.user)
  console.log(user)
  const photoDefault = 'https://www.nicepng.com/png/full/128-1280406_view-user-icon-png-user-circle-icon-png.png'
  

  const handleShowMenu = () => {
    setShow(!show)
  }

  return (
    <header className="flex items-center align-text-bottom justify-between p-2 bg-green-300">
      <div>
        <h2 className="text-2xl text-cyan-600 font-semibold">Amazing Cities</h2>
      </div>
      {
        show ?
          <div className="flex gap-8 font-bold text-gray-400">
            <LinkRouter to='/'>Home</LinkRouter>
            <LinkRouter to='/cities'>Cities</LinkRouter>
            <LinkRouter to='signin'>{user?null:<h3>Sign in</h3>}</LinkRouter>
            <LinkRouter href="">Contact</LinkRouter>
            
          </div>
          : null
      }
      
      <button onClick={handleShowMenu}>Show Menu</button>
      <div className="flex items-center font-semibold text-sm gap-4">
          <p>{user?user.name:null}</p>
          <img className="w-[45px] h-[45px] object-cover rounded-full" src={user?user.image:photoDefault} alt="" />
          <button onClick={()=> dispatch(userSignOut())}>{!user?null:"Log Out"}</button>
      </div>
      

    </header>
  )
}

export default Header