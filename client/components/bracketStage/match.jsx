import React from 'react';
import Component from "../../utils/component"
import { Button } from "react-bootstrap";
import "./bracketStage.css"

const MatchAutor = ({ frase: { autor, anio, coeficienteAutista, votesQuantity }, phase }) =>  {
  const votes = votesQuantity[phase];
  return  <div className="matchAutorContainer">
      <div className="matchAutor">
        {autor}
      </div>
      <div className="matchAnio">
        {anio}
      </div>
      <div className="info">
        <div>
          <span className="coefAut">CA:</span> <span>{coeficienteAutista}</span>
        </div>
        <div>
          <span className="coefAut">Votos:</span> <span>{votes}</span>
        </div>
      </div>
    </div>

}

class Match extends Component {
  render() {
    const { fraseA, fraseB, phase } = this.props.match; 
    return <div className="match">
      <MatchAutor frase={fraseA} phase={this.props.phase} />
      <div className="matchVS">
        vs
        <Button variant="success" onClick={() => this.props.vote()}>Votar</Button>
      </div>
      <MatchAutor frase={fraseB} phase={this.props.phase} />
    </div>;
  }


}

export default Match;