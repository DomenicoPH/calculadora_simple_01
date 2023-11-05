import { Component } from "react";
import Display from "./Display";
import PanelDeBotones from "./PanelDeBotones"
import operaciones from "../logic/operaciones";
import 'tailwindcss/tailwind.css';

class App extends Component {

  state = {
    total: null,
    siguiente: null,
    operador: null,
  }

  handleClick = nombreDeBoton => this.setState(operaciones(this.state, nombreDeBoton))

  render() {
    return (
      <div>
        <div className="flex flex-col items-center border border-black max-w-[306px]">
          <Display value={this.state.siguiente || this.state.total || "0"} />
          <PanelDeBotones clickHandler={this.handleClick} />
        </div>
      </div>
    )
  }
}

export default App
