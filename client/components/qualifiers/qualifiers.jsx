import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Component from "../../utils/component"
import PhrasesDragAndDrop from "./phrasesDragAndDrop";
import WithLoading from "../../components/utils/withLoading";
import Filters from "./filters";

const PhrasesDragAndDropWithLoading = WithLoading(PhrasesDragAndDrop);
const FiltersWithLoading = WithLoading(Filters);

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



class Qualifiers extends Component {

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

  render() {
    return (
      <Container fluid>
        <FiltersWithLoading
          isLoading={this.props.authors.isLoading} 
          authors={this.props.authors.results}
          setFilters={this.props.actions.setFilters}
          history={this.props.history}
          location={this.props.location}
        />
        <Row className="justify-content-md-center">
          <Col md={11}>
            <PhrasesDragAndDropWithLoading {...this.props} 
              items={this.state.items}
              selected={this.state.selected}
              onDragEnd={::this.onDragEnd}
            />
          </Col>
        </Row>
      </Container>
    );
 
  }

}

export default Qualifiers;