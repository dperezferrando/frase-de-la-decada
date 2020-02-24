import React from 'react';
import { Row, Col, Card, Button, OverlayTrigger, Popover } from "react-bootstrap";
import Component from "../../utils/component"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import "./groupStage.css"

const Frase = (provided, snapshot, item, index) => {
  const popover = (
    <Popover id="aclaracion" className="frasePopover">
      <Popover.Title>
        <b>Coeficiente autista:</b> <span className="yearAuthor">{ item.coeficienteAutista }</span>
      </Popover.Title>
      {
        <Popover.Content>
          { item.frase + (item.aclaracion ? ` (${item.aclaracion})`: "") }
        </Popover.Content>
      }
    </Popover>
  )
  const body = ( <div
    ref={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    className={index == 0 || index == 1 ? "groupFraseSelected" : "groupFrase"}>
      <span className="yearAuthor">{`${item.autor} - (${item.anio})`}</span>
    </div> );
  return (
    <OverlayTrigger trigger="hover" placement="auto-end" overlay={popover}>
      { body }
    </OverlayTrigger>
  );
}


const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class Group extends Component {

  state ={
    frases: _.orderBy(this.props.frases, ["fraseDelAnio", "coeficienteAutista"], ["desc", "desc"])
  }

  render() {
    return <Col md={3} className="group">
      <Card>
      <Card.Header><b>GRUPO {this.props.name}</b></Card.Header>
        <Card.Body>
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
                            Frase(provided, snapshot, item, index)
                          )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <Button variant="success">VOTAR</Button>
        </Card.Body>
    </Card>
      
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