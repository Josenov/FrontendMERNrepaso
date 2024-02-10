import { useState } from "react"
import { Link as LinkRouter } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  let [show, setShow] = useState(false);

  const photo = useSelector(store => store.userReducer.photo)
  console.log(photo)

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
            <LinkRouter to='signin'>Sign In</LinkRouter>
            <LinkRouter href="">Contact</LinkRouter>
            
          </div>
          : null
      }
      
      <button onClick={handleShowMenu}>Show Menu</button>
      <img className="w-[45px] h-[45px] object-cover rounded-full" src={photo} alt="" />

    </header>
  )
}

export default Header