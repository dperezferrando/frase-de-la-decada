import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Component from "../../utils/component"

const grid = 8;

const getListStyle = isDraggingOver => ({
    background: 'white',//isDraggingOver ? 'lightblue' : 'lightgrey',
    borderRadius: "5px",
    padding: grid,
    width: "30%",
    overflowY: "scroll",
    height: "1000px"
});


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
          style={getListStyle(snapshot.isDraggingOver)}>
            {this.props.items.map((item, index) => (
              <Draggable
                key={item._id}
                draggableId={item._id}
                index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}>
                        <p className="yearAuthor"> { item.autor } </p>
                        <p className="phraseBody"> {`${item.frase}` + (item.aclaracion ? ` (${item.aclaracion})`: "")} </p>
                        <p className="yearAuthor"> { item.anio } </p>

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