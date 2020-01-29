import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Component from "../../utils/component"
import { Popover, OverlayTrigger } from "react-bootstrap";



const Frase = (provided, snapshot, item) => {
  const popover = (
    <Popover id="aclaracion">
      <Popover.Content>
        { item.aclaracion }
      </Popover.Content>
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
  return ( item.aclaracion ?
    <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
      { body }
    </OverlayTrigger> : body
  );
}

class PhrasesList extends Component {
  render() {
    return (
    <Droppable droppableId={this.props.id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          className="frasesList">
            {this.props.items.map((item, index) => (
              <Draggable
                key={item._id}
                draggableId={item._id}
                index={index}
                isDragDisabled={item.fraseDelAnio}>
                  {(provided, snapshot) => (
                    Frase(provided, snapshot, item)
                  )}
              </Draggable>
            ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
    );

  }
}





export default PhrasesList;