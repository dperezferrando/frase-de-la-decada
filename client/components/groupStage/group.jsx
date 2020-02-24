import React from 'react';
import { Row, Col } from "react-bootstrap";
import Component from "../../utils/component"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import "./groupStage.css"

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class Group extends Component {

  state ={
    frases: this.props.frases
  }

  render() {
    return <Col md={3}>
      <div>group {this.props.name}</div>
      <DragDropContext onDragEnd={::this.onDragEnd}>
        <Droppable droppableId={this.props.name}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
             // className="frasesList"
              >
                {this.state.frases.map((item, index) => (
                  <Draggable
                    key={item._id}
                    draggableId={item._id}
                    index={index}
                    //isDragDisabled={item.fraseDelAnio || this.props.dragDisabled}
                    >
                      {(provided, snapshot) => (
                        //Frase(provided, snapshot, item, this.props.className)
                        <div ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}>
                          {item.frase}
                        </div>
                      )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Col>
  }


  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const frases = reorder(
      this.state.frases,
      result.source.index,
      result.destination.index
    );

    this.setState({
      frases
    });
  }
}

export default Group;