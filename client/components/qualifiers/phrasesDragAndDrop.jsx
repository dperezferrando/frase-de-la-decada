import React from 'react';
import Component from "../../utils/component"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import _ from "lodash";
import PhrasesList from "./phrasesList";
import "./qualifiers.css"

// fake data generator
const getItems = (count, offset = 0) => _.take(mockedFrases.frases, 25)

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const descendingSort = (list, criteria) => _(list)
  .sortBy(criteria)
  .reverse()
  .value()

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



class PhrasesDragAndDrop extends Component {
    
  state = {
    items: this.props.frases.results,
    selected: this.props.frasesAnio.results
  }

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  id2List = {
      phrasesList: 'items',
      selectedPhrasesList: 'selected'
  };

  getList(id) {
    return this.state[this.id2List[id]]
  };

  onDragEnd(result) {
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

      if (source.droppableId === 'selectedPhrasesList') {
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
      items: descendingSort(result.phrasesList, "coeficienteAutista"),
      selected: descendingSort(result.selectedPhrasesList, ["fraseDelAnio", "coeficienteAutista"])
    });
    }
  };

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    
    return (
      <div id="frases">
        <DragDropContext onDragEnd={::this.onDragEnd}>
          <PhrasesList
            id={"phrasesList"}
            items={this.state.items}
            isLoading={this.props.isLoading}
          />
          <PhrasesList
            id={"selectedPhrasesList"}
            items={this.state.selected}
          />
        </DragDropContext>
      </div>
    );
  }
}

export default PhrasesDragAndDrop;