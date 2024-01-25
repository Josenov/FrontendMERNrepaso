

const Header = () => {
  return (
    <header className="flex items-center align-text-bottom justify-between p-2 bg-green-300">
        <div>
        <h2 className="text-2xl text-cyan-600 font-semibold">Amazing Cities</h2>
        </div>
        <div className="flex gap-8 font-bold text-gray-400">
            <a href="">Home</a>
            <a href="">Contact</a>
            <a href="">Cities</a>
            <a href="">Contact</a>
        </div>
        
    </header>
  )
}

export default Header