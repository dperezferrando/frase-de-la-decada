import React from 'react';
import { Row, Col, Card, Button, OverlayTrigger, Popover } from "react-bootstrap";
import Component from "../../utils/component"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import FraseDetailModal from "./fraseDetailModal";
import ConfirmVoteModal from "./confirmVoteModal";
import "./groupStage.css"

const Frase = ({ provided, snapshot, item, index, onClick, showResults }) => {
  const popover = (
    <Popover id="aclaracion" className="frasePopover">
      <Popover.Title>
        { showResults && <span> <b>Votos:</b> <span className="yearAuthor">{ item.votesQuantity.groupStage }</span> </span>}
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
    onClick={onClick}
    className={index < 2 ? "groupFraseSelected" : "groupFrase"}>
      <div className={`${ index < 2 ? "winningPosition" : "loosingPosition"} float-left`}>{ `${index + 1}°` }</div>
      <div className="yearAuthor">{`${item.autor} - (${item.anio})`}</div>
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
    frases: this.frases(),
    fraseToShow: null,
    fraseDetailModalOpened: false,
    confirmVoteModalOpened: false
  }

  componentWillReceiveProps(newProps) {
    this.setState({ ...this.state, frases: this.frases(newProps)})
  }

  render() {
    return <Col md={3} className="group">
      {this.state.fraseDetailModalOpened && <FraseDetailModal
        onHide={::this.closeFraseDetailModal}
        frase={this.state.fraseToShow}
        show={this.state.fraseDetailModalOpened}
      />}
      {this.state.confirmVoteModalOpened && <ConfirmVoteModal
        onHide={::this.closeConfirmVoteModal}
        frases={_.take(this.state.frases, 2)}
        show={this.state.confirmVoteModalOpened}
        vote={::this.vote}
        group={this.props.name}
      />}
      <Card>
      <Card.Header><b>GRUPO {this.props.name == "F" ? this.props.name + " to pay respects" : this.props.name}</b></Card.Header>
        <Card.Body>
          <DragDropContext onDragEnd={::this.onDragEnd}>
            <Droppable droppableId={this.props.name}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  className="groupList"
                  >
                    {this.state.frases.map((item, index) => (
                      <Draggable
                        key={item._id}
                        draggableId={item._id}
                        index={index}
                        isDragDisabled={!this.props.shouldVote}
                        //isDragDisabled={item.fraseDelAnio || this.props.dragDisabled}
                        >
                          {(provided, snapshot) => (
                            <Frase
                              provided={provided} 
                              snapshot={snapshot}
                              item={item}
                              index={index}
                              showResults={this.props.showResults}
                              onClick={() => this.openFraseDetailModal(item)}
                            />
                          )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          {
            <div className="voteButton">
              <Button variant="success" onClick={::this.openConfirmVoteModal} disabled={!this.props.shouldVote}>VOTAR</Button>
            </div>
          }
        </Card.Body>
    </Card>
      
    </Col>
  }

  frases(props) {
    const { votes, frases, showResults } = (props || this.props);
    if(showResults)
      return _(frases)
        .map(({ votesQuantity: { groupStage, ...otherVotes }, ...other }) => ({ ...other, votesQuantity: { ...otherVotes, groupStage: groupStage || 0 }}))
        .orderBy(["votesQuantity.groupStage", "coeficienteAutista"], ["desc", "desc"])
        .value()
    if(_.isEmpty(votes))
      return _.orderBy(frases, ["fraseDelAnio", "coeficienteAutista"], ["desc", "desc"]);
    return votes.concat(_.reject(frases, ({_id: id }) => _.some(votes, ({ _id }) => _id == id )));
  }

  vote(frases) {
    this.props.vote(this.props.name, frases);
  }

  onDragEnd(result) {
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

  closeFraseDetailModal() {
    this.setState({...this.state, fraseDetailModalOpened: false })
  }

  closeConfirmVoteModal() {
    this.setState({...this.state, confirmVoteModalOpened: false })
  }

  openFraseDetailModal(frase) {
    this.setState({...this.state, fraseToShow: frase, fraseDetailModalOpened: true })
  }

  openConfirmVoteModal(frase) {
    this.setState({...this.state, confirmVoteModalOpened: true })
  }
}

export default Group;