import { useState } from "react"

const Home = () => {

    let [contador, setContador] = useState(0);
    const sumaManual = () => {
        setContador(contador + 1);
    }

    const resetear = () => {
        setContador(contador = 0);
    }
    return (
        <>
            <div className="flex flex-col min-h-screen justify-center items-center gap-2 text-red-600 font-bold text-2xl" >
                <h1>Home</h1>
                <p>Contador: {contador}</p>
                <div className=" flex text-green-800 border-black items-center">
                    <button className="m-2 bg-slate-400 " onClick={sumaManual}>Sumar</button>
                    <button className="m-2 bg-slate-400" onClick={resetear}>Resetear</button>
                </div>
            </div>
            <div className="flex justify-center items-center gap-2 ">
                
            </div>

        </>

    )
}

export default Home