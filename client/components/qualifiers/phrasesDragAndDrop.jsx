import React from 'react';
import Component from "../../utils/component"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Col, Row } from "react-bootstrap";
import _ from "lodash";
import PhrasesList from "./phrasesList";
import ActionButtons from "./actionButtons";
import "./qualifiers.css"

const MIN_FRASE_YEAR = 3;

class PhrasesDragAndDrop extends Component {
    
  render() {
    
    return (
      <span>
        <Row>
         <Col md={11} className="contador">
            {
              !this.props.voted && <span>
              <span>
                Frases seleccionadas: <b>{ this.props.selected.length }</b> de 32
              </span>
              <ActionButtons 
                voted={this.props.voted}
                vote={this.props.vote}
                validate={::this.validate}
                selected={this.props.selected}
                setTroloMode={this.props.setTroloMode}
                trolo={this.props.trolo}
              />
              {
                !this.validate() && <div>
                Faltan frases de los años: { this.aniosFaltantes() }

              </div>
              }
              </span>
            }
            {
              this.props.voted && <span>
                <b>Ya votaste en esta fase!</b> Podes seguir viendo tu eleccion:
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
              />
              </Col>
            <Col md={6}>

              <PhrasesList
                id={"selectedPhrasesList"}
                items={this.props.selected}
                isDropDisabled={this.props.disableDrop || this.props.selected.length >= 32 }
                className={this.props.className}
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
}

export default PhrasesDragAndDrop;