import React from 'react';
import './buttons.css';
import negrito from './Icons/negrito.png';
import sublinhado from './Icons/sublinhado.png';
import italico from './Icons/italico.png';
import tachado from './Icons/tachado.png';
import aLink  from './Icons/hyperLink.png';
import h1 from './Icons/h1.png';
import h2 from './Icons/h2.png';
import h3 from './Icons/h3.png';
import blocoCitacao from './Icons/blockquote.png';
import blocoCodigo from './Icons/blocoCodigo.png';
import listaNaoOrdenada from './Icons/listaNaoOrdenada.png';
import listaOrdenada from './Icons/listaOrdenada.png';


class Buttons extends React.Component {
    render(){
        return(
            <div className="space-buttons">
                <button className="botoes" onClick={this.props.headerOne}>
                    <img className="icons" src={h1} alt="Cabeçalho Primario"></img>
                </button>

                <button className="botoes" onClick={this.props.headerTwo}>
                    <img className="icons" src={h2} alt="Cabeçalho Secundario"></img>
                </button>

                <button className="botoes" onClick={this.props.headerThree}>
                <img className="icons" src={h3} alt="Cabeçalho Terciario"></img>
                </button>

                <button className="botoes" onClick={this.props.blockquote}>
                    <img className="icons" src={blocoCitacao} alt="Bloco de citação"></img>
                </button>

                <button className="botoes" onClick={this.props.codeBlock}>
                    <img className="icons" src={blocoCodigo} alt="Bloco de codigo"></img>
                </button>
                
                <button className="botoes" onClick={this.props.negrito}>
                    <img className="icons" src={negrito} alt="B representando Bold"></img>
                </button>
                
                <button className="botoes" onClick={this.props.italic}>
                    <img className="icons" src={italico} alt="I representando Italico"></img> 
                </button>
                  
                <button className="botoes" onClick={this.props.underline}>
                    <img className="icons" src={sublinhado} alt="U representando Sublinhado"></img>
                </button>
                
                <button className="botoes" onClick={this.props.strikeThrough}>
                    <img className="icons" src={tachado} alt="S riscado representando Tachado"></img>
                </button>
                  
                <button className="botoes" onClick={this.props.hyperLink}>
                    <img className="icons" src={aLink} alt="A sublinhado representando hyperLink"></img>
                </button>

                <button className="botoes" onClick={this.props.unorderedList}>
                    <img className="icons" src={listaNaoOrdenada} alt="Lista não ordenada"></img>
                </button>

                <button className="botoes" onClick={this.props.orderedList}>
                    <img className="icons" src={listaOrdenada} alt="Lista Ordenada"></img>
                </button>
            </div>
        );
    }
}

export default Buttons;