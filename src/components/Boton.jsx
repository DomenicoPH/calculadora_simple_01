export default function boton ({clickHandler, name}) {
    
    const handleClick = () => clickHandler(name)
    
    return(

        <div>
            <button className="bg-gray-400 hover:bg-gray-300 min-w-[75px] min-h-[75px] text-[2rem] border-[1px] border-collapse border-gray-300" onClick={handleClick}>{name}</button>
        </div>
    )
}