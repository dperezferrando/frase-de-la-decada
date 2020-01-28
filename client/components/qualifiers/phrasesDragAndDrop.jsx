import React from 'react';
import Component from "../../utils/component"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import "./qualifiers.css"
import mockedFrases from "./mockedFrases";

// fake data generator
const getItems = (count, offset = 0) => mockedFrases.frases

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

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

const getListStyle = isDraggingOver => ({
    background: 'white',//isDraggingOver ? 'lightblue' : 'lightgrey',
    borderRadius: "5px",
    padding: grid,
    width: "30%"
});

class PhrasesDragAndDrop extends Component {
    state = {
        items: getItems(10),
        selected: []
    };

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    id2List = {
        droppable: 'items',
        droppable2: 'selected'
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { items };

            if (source.droppableId === 'droppable2') {
                state = { selected: items };
            }

            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            this.setState({
                items: result.droppable,
                selected: result.droppable2
            });
        }
    };

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
          <div id="frases">
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.items.map((item, index) => (
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
                                            <p className="phraseBody"> {`${item.frase}` + (item.aclaracion ? `(${item.aclaracion})`: "")} </p>
                                            <p className="yearAuthor"> { item.anio } </p>

                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId="droppable2">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.selected.map((item, index) => (
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
                                            <p className="phraseBody"> {`${item.frase}` + (item.aclaracion ? `(${item.aclaracion})`: "")} </p>
                                            <p className="yearAuthor"> { item.anio } </p>

                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
      </div>
        );
    }
}

export default PhrasesDragAndDrop;