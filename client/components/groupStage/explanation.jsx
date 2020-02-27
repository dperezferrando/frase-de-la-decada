import React from 'react';
import Component from "../../utils/component"
import { Alert } from "react-bootstrap";
import CountDown from "../countdown";
import config from "../../config";

class Explanation extends Component {

  state ={
    showExplanation: true
  }

  render() {
    return <span> { 
      this.state.showExplanation && <Alert variant="light" onClose={::this.hideExplanation} dismissible={this.props.started}>
        {
          this.props.started ? <this.Explanation/> : <this.NotStarted/>
        }
      </Alert>
      }
    </span>
  }

  Explanation = () => {
    return <span>
      <b>FASE DE GRUPOS:</b> De cada grupo clasifican los dos primeros,
      solamente tenes que arrastrar las dos frases que mas te gusten a las primeras dos posiciones y luego apretar "Votar".
      La primer posicion recibe <b>2 votos</b>, la segunda <b>1 voto</b>. Podes hacer click en una frase para obtener mas informacion sobre la misma.
      <b> Good luck, have fun. </b>
      <b><span className="yearAuthor">ESTA FASE TERMINA EN <CountDown date={config.groupStage.endDate}/></span></b>
    </span>
  }

  NotStarted = () => {
    return <span className="yearAuthor">
      ESTA FASE EMPIEZA EN <CountDown date={config.groupStage.startDate}/>
    </span>
  }

  hideExplanation() {
    this.setState({...this.state, showExplanation: false })
  }
}

export default Explanation;