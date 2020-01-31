import React from 'react';
import Component from "../../utils/component"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Col, Row } from "react-bootstrap";
import _ from "lodash";
import PhrasesList from "./phrasesList";
import "./qualifiers.css"

class PhrasesDragAndDrop extends Component {
    
   // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    
    return (
        <DragDropContext onDragEnd={this.props.onDragEnd}>
          <Row className="justify-content-md-between">
            <Col md={6}>
              <PhrasesList
                id={"phrasesList"}
                items={this.props.items}
                isLoading={this.props.isLoading}
              />
              </Col>
            <Col md={6}>

              <PhrasesList
                id={"selectedPhrasesList"}
                items={this.props.selected}
              />
            </Col>
          </Row>
        </DragDropContext>
    );
  }
}

export default PhrasesDragAndDrop;