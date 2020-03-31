import React from 'react';
import Component from "../utils/component"        

class FraseDetail extends Component {


  render() {
    const { frase, aclaracion, autor, anio, coeficienteAutista, fraseDelAnio, context } = this.props.frase;
    return <span>
      <div className="detailAutor">
        {autor}
      </div>
      <div className="detailFrase">
        {`${frase}` + (aclaracion? ` (${aclaracion})` : "")}
      </div>
      <div className="detailAutor">
        {anio}
      </div>
      <div>
        { fraseDelAnio && <div>Fue elegida como <span className="detailAttribute">Frase del Año</span></div>}
        <span className="detailAttribute">Coeficiente Autista:</span> { coeficienteAutista }
        { context && <div>
        <span className="detailAttribute">Contexto Histórico:</span>
          { context }
        </div>}
      </div>
    </span>
  }
}

export default FraseDetail;