import Boton from "./Boton.jsx";
import logo from "../assets/icon.png"
import './special.css'

const container = 'flex flex-col p-[2px]'
const set = 'flex'

export default function panelDeBotones ({clickHandler}) {
    const handleClick = nombreDeBoton => {clickHandler(nombreDeBoton)}

    return (
        <div className={container}>
            <div className={set}>
                <Boton name="AC" clickHandler={handleClick} />
                <Boton name="+/-" clickHandler={handleClick} />
                <Boton name="%" clickHandler={handleClick} />
                <Boton name="÷" clickHandler={handleClick} />
            </div>
            <div className={set}>
                <Boton name="7" clickHandler={handleClick} />
                <Boton name="8" clickHandler={handleClick} />
                <Boton name="9" clickHandler={handleClick} />
                <Boton name="x" clickHandler={handleClick} />
            </div>
            <div className={set}>
                <Boton name="4" clickHandler={handleClick} />
                <Boton name="5" clickHandler={handleClick} />
                <Boton name="6" clickHandler={handleClick} />
                <Boton name="-" clickHandler={handleClick} />
            </div>
            <div className={set}>
                <Boton name="1" clickHandler={handleClick} />
                <Boton name="2" clickHandler={handleClick} />
                <Boton name="3" clickHandler={handleClick} />
                <Boton name="+" clickHandler={handleClick} />
            </div>
            <div className={set}>
                <Boton name="0" clickHandler={handleClick} />
                <Boton name="." clickHandler={handleClick} />
                <Boton name="=" clickHandler={handleClick} />
                <div className="special border max-h-[75px] bg-gray-400"><img className="p-[10px]" src={logo} alt="logo" /></div>
            </div>
        </div>
    )
}