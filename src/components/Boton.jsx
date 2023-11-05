export default function boton ({clickHandler, name}) {
    
    const handleClick = () => clickHandler(name)

    let button = "bg-gray-400 hover:bg-gray-300 min-w-[75px] min-h-[75px] text-[2rem] text-gray-700 border-[1px] border-collapse border-gray-300";
    if (name === "AC" || name === "+/-" || name === "%" || name === "÷" || name === "x" || name === "+" || name === "-"){
        button += " bg-[rgb(220,58,29)] hover:bg-[rgb(247,82,53)]"
    }
    
    return(

        <div>
            <button className={button} onClick={handleClick}>{name}</button>
        </div>
    )
}