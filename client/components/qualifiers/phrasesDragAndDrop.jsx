import React from 'react';
import Component from "../../utils/component"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Col, Row, Alert } from "react-bootstrap";
import _ from "lodash";
import moment from "moment";
import PhrasesList from "./phrasesList";
import ActionButtons from "./actionButtons";
import "./qualifiers.css"
import config from "../../config";
import CountDown from "../countdown"

const MIN_FRASE_YEAR = 2;
const MAX_FRASE_AUTHOR = 10;

class PhrasesDragAndDrop extends Component {

  state = {
    showExplanation: true
  }
    
  render() {
    return (
      <span>
        <Row>
          <Col md={12} className="qualifiersDesc">
           { this.state.showExplanation && 
            <Alert variant="light" onClose={::this.hideTutorial} dismissible>
              <b>ELIMINATORIAS:</b> Tenés que elegir las 25 frases que considerás deben participar
              en la competición para convertirse en la <b>Frase de la Década</b> (Las frases ganadoras de cada año ya están clasificadas). Esto lo hacés arrastrando las frases de 
              izquierda a derecha <i>(No es casualidad, la derecha funciona)</i>
              <b> Hay dos restricciones</b>: mínimo tiene que haber <b>{MIN_FRASE_YEAR}</b> frases de cada año y máximo <b>{MAX_FRASE_AUTHOR}</b> frases de un autor en particular. (Contando siempre a las frases ya clasificadas)
              Si te da <b>PAJA</b> hay un botón para eso.
              <b> Good luck, have fun. </b> 
              <b><span className="yearAuthor">ESTA FASE TERMINA EN <CountDown date={config.qualifiers.endDate}/></span></b>
            </Alert>
            }
          </Col>
        </Row>
        <Row >
          <Col md={11}>
            {
              this._shouldBeAbleToVote() && <span>
              <span>
                <b>Frases seleccionadas:</b> <b>{ this.props.selected.length }</b> de 32
              </span>
              <ActionButtons 
                voted={this.props.voted}
                vote={this.props.vote}
                validate={::this.validate}
                selected={this.props.selected}
                setTroloMode={this.props.setTroloMode}
                trolo={this.props.trolo}
                active={this.props.active}
                user={this.props.user}
              />
              {
                <div>{ !this.validate() && <div><b>Te faltan frases de los años:</b> { this.aniosFaltantes() }</div> }
                  <div> <b>Cantidad de frases de cada año elegidas: </b>{this._countByAnio().map((value, key) => `${key} (${value})`).join(", ")}</div>
                </div>
              }
              </span>
            }
            {
              this.props.voted && !this._qualifiersFinished() && <span>
                <b>Ya votaste en esta fase!</b> Podés seguir viendo tu elección:
              </span>
            }
            {
              this._qualifiersFinished() && <span>
                <b>Esta fase ya terminó!</b>
              </span>
            }
          </Col>
        </Row>
        <DragDropContext onDragEnd={this.props.onDragEnd} onDragStart={this.props.onDragStart}>
          <Row className="justify-content-md-between">
            <Col md={6}>
              <PhrasesList
                id={"phrasesList"}
                items={this.props.items}
                isLoading={this.props.isLoading}
                isDropDisabled={false}
                className={this.props.className}
                dragDisabled={this.props.voted || this._qualifiersFinished()}
              />
              </Col>
            <Col md={6}>

              <PhrasesList
                id={"selectedPhrasesList"}
                items={this.props.selected}
                isDropDisabled={this.props.disableDrop || this.props.selected.length >= 32 }
                className={this.props.className}
                dragDisabled={this.props.voted || this._qualifiersFinished()}
              />
            </Col>
          </Row>
        </DragDropContext>
      </span>
    );
  }
  validate() {
    return this._countByAnio()
      .values()
      .every(it => it >= MIN_FRASE_YEAR);
  }
  aniosFaltantes() {
    return this._countByAnio()
      .map((count, anio) => ({ anio, count }))
      .filter(({ count }) => count < MIN_FRASE_YEAR)
      .map("anio")
      .join(", ")
  }

  _countByAnio() {
    return _(this.props.selected)
      .countBy("anio")
  }

  _shouldBeAbleToVote() {
    return !this.props.voted && !this._qualifiersFinished();
  }

  _qualifiersFinished() {
    return moment().isAfter(config.qualifiers.endDate);
  }

  hideTutorial() {
    this.setState({ ...this.state, showExplanation: false })
  }
}

export default PhrasesDragAndDrop;