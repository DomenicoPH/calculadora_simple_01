import Boton from "./Boton.jsx";

export default function panelDeBotones ({clickHandler}) {
    const handleClick = nombreDeBoton => {clickHandler(nombreDeBoton)}

    return (
        <div>
            <div>
                <Boton name="AC" clickHandler={handleClick} />
                <Boton name="+/-" clickHandler={handleClick} />
                <Boton name="%" clickHandler={handleClick} />
                <Boton name="÷" clickHandler={handleClick} />
            </div>
            <div>
                <Boton name="7" clickHandler={handleClick} />
                <Boton name="8" clickHandler={handleClick} />
                <Boton name="9" clickHandler={handleClick} />
                <Boton name="x" clickHandler={handleClick} />
            </div>
            <div>
                <Boton name="4" clickHandler={handleClick} />
                <Boton name="5" clickHandler={handleClick} />
                <Boton name="6" clickHandler={handleClick} />
                <Boton name="-" clickHandler={handleClick} />
            </div>
            <div>
                <Boton name="1" clickHandler={handleClick} />
                <Boton name="2" clickHandler={handleClick} />
                <Boton name="3" clickHandler={handleClick} />
                <Boton name="+" clickHandler={handleClick} />
            </div>
            <div>
                <Boton name="0" clickHandler={handleClick} />
                <Boton name="." clickHandler={handleClick} />
                <Boton name="=" clickHandler={handleClick} />
            </div>
        </div>
    )
}