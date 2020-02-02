import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Component from "../../utils/component"
import { Row, Col, Popover, OverlayTrigger, Button } from "react-bootstrap";


const Frase = (provided, snapshot, item) => {
  const popover = (
    <Popover id="aclaracion" className="frasePopover">
      <Popover.Title>
        <b>Coeficiente autista:</b> <span className="yearAuthor">{ item.coeficienteAutista }</span>
      </Popover.Title>
      {
        item.aclaracion && <Popover.Content>
          { item.aclaracion }
        </Popover.Content>
      }
    </Popover>
  )
  const body = ( <div
    ref={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    className={snapshot.isDragging ? "fraseDragged" : (item.fraseDelAnio ? "fraseAnio":"frase")}>
      <span className="phraseBody"> {`"${item.frase}" - `} </span> 
      <span className="yearAuthor"> { item.autor } </span>
      <span className="yearAuthor"> {` (${item.anio})` } </span>

    </div> );
  return (
    <OverlayTrigger trigger="hover" placement="auto-end" overlay={popover}>
      { body }
    </OverlayTrigger>
  );
}

class PhrasesList extends Component {
  render() {
    return (
    <span>
      <Row style={{ visibility: this.props.withCounter? "visible" : "hidden" }}>
       <Col md={12} className="contador">
          {
            !this.props.voted && <span>
            <span>
              Frases seleccionadas: <b>{ this.props.items.length }</b> de 32
            </span>
            <span className="voteButton"> 
              <Button variant="success" onClick={this.props.vote}>VOTAR</Button>
            </span>
            </span>
          }
          {
            this.props.voted && <span>
              <b>Ya votaste en esta fase!</b> Esta fue tu eleccion:
            </span>
          }
        </Col>
      </Row>
      <Droppable droppableId={this.props.id} isDropDisabled={this.props.isDropDisabled}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className="frasesList">
              {this.props.items.map((item, index) => (
                <Draggable
                  key={item._id}
                  draggableId={item._id}
                  index={index}
                  isDragDisabled={item.fraseDelAnio || this.props.voted}>
                    {(provided, snapshot) => (
                      Frase(provided, snapshot, item)
                    )}
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </span>
    );

  }
}





export default PhrasesList;