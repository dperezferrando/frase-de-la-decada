import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Component from "../../utils/component"
import { Row, Col, Popover, OverlayTrigger } from "react-bootstrap";


const Frase = (provided, snapshot, item, className) => {
  const popover = (
    <Popover id="aclaracion" className="frasePopover">
      <Popover.Title>
        <b>Coeficiente autista:</b> <span className={className}>{ item.coeficienteAutista }</span>
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
      <span className={className}> { item.autor } </span>
      <span className={className}> {` (${item.anio})` } </span>

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
                  isDragDisabled={item.fraseDelAnio || this.props.dragDisabled}>
                    {(provided, snapshot) => (
                      Frase(provided, snapshot, item, this.props.className)
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