import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Component from "../../utils/component"

const grid = 8;



const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
  //  padding: grid * 2,
    paddingTop: "10px",
  //  margin: `0 0 ${grid}px 0`,
    padingLeft: "2px",
    padingRight: "2px",
    wordBreak: "break-word",
    // change background colour if dragging
    background: isDragging ? 'lightgrey' : 'white',
    textAlign: "center",
    borderTopColor: "lightgrey",
    borderTopWidth: "thin",
    borderTopStyle: "solid",

    // styles we need to apply on draggables
    ...draggableStyle
});

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
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={snapshot.isDragging ? "fraseDragged" : "frase"}>
                        
                        <span className="phraseBody"> {`"${item.frase}" - `} </span> 
                        <span className="yearAuthor"> { item.autor } </span>
                        <span className="yearAuthor"> {` (${item.anio})` } </span>

                    </div>
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