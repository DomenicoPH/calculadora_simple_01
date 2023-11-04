import Big from 'big.js'

export default function operate (num1,num2,operador){
    const uno = Big(num1 || "0")
    const dos = Big(num2 ||  (operador === "/" || operador === "x" ? "1" : "0"))
    if (operador === "+") return uno.plus(dos).toString()
    if (operador === "-") return uno.minus(dos).toString()
    if (operador === "x") return uno.times(dos).toString()
    if (operador === "÷") return uno.div(dos).toString()
}