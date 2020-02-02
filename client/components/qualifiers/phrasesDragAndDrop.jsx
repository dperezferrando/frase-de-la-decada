import React from 'react';
import Component from "../../utils/component"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Col, Row, Button } from "react-bootstrap";
import _ from "lodash";
import PhrasesList from "./phrasesList";
import "./qualifiers.css"

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
              <span className="voteButton"> 
                <Button variant="success" onClick={this.props.vote} disabled={this.props.selected.length < 7 || !this.validate()}>VOTAR</Button>
              </span>
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
              />
              </Col>
            <Col md={6}>

              <PhrasesList
                id={"selectedPhrasesList"}
                items={this.props.selected}
                isDropDisabled={this.props.disableDrop || this.props.selected.length >= 32 }
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
      .every(it => it > 3);
  }
  aniosFaltantes() {
    return this._countByAnio()
      .map((count, anio) => ({ anio, count }))
      .filter(({ count }) => count < 4)
      .map("anio")
      .join(", ")
  }

  _countByAnio() {
    return _(this.props.selected)
      .countBy("anio")
  }
}

export default PhrasesDragAndDrop;