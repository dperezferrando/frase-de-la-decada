import React from 'react';
import Component from "../../utils/component"
import { Button } from "react-bootstrap";
import VoteModal from "./voteModal";
import "./bracketStage.css"

const MatchAutor = ({ frase: { autor, anio, coeficienteAutista, votesQuantity }, phase, finished, showResults, alreadyVoted, votedFrase }) =>  {
  const votes = votesQuantity[phase];
  return  <div className={votedFrase ? "votedAutor": "matchAutorContainer"}>
      <div className="matchAutor">
        {autor}
      </div>
      <div className="matchAnio">
        {anio}
      </div>
      { 
        showResults && <div className="info">
        <div>
          <span className="coefAut">Votos:</span> <span>{votes}</span>
        </div>
        <div>
          <span className="coefAut">CA:</span> <span>{coeficienteAutista}</span>
        </div>
      </div>
      }
    </div>

}

class Match extends Component {

  state = {
    voteModalOpened: false
  }

  render() {
    const { fraseA, fraseB, phase } = this.props.match; 
    return <div className="match">
      { this.state.voteModalOpened && <VoteModal
        onHide={::this.hideVoteModal}
        show={this.state.voteModalOpened}
        vote={::this.vote}
        frases={[fraseA, fraseB]}
        shouldVote={this.shouldVote()}
        />}
      <MatchAutor 
        frase={fraseA}
        phase={this.props.phase}
        finished={this.props.finished}
        showResults={this.props.showResults}
        votedFrase={this.alreadyVoted() && this.props.votedFrase._id == fraseA._id}
        />
      <div className="matchVS">
        vs

        <Button variant="success" onClick={::this.showVoteModal}>{ this.shouldVote() ? "Votar" : "Ver"}</Button>
      </div>
      <MatchAutor 
        frase={fraseB}
        phase={this.props.phase}
        finished={this.props.finished}
        showResults={this.props.showResults}
        votedFrase={this.alreadyVoted() && this.props.votedFrase._id == fraseB._id}
      />
    </div>;
  }

  showVoteModal() {
    this.setState({ ...this.state, voteModalOpened: true })

  }

  hideVoteModal() {
    this.setState({ ...this.state, voteModalOpened: false })
  }

  vote(frases) {
    this.props.vote(this.props.match._id, frases)
  }

  alreadyVoted() {
    return _.includes(this.props.matchesVoted, this.props.match._id);
  }

  shouldVote() {
    return !this.props.finished && !this.alreadyVoted()
  }

}

export default Match;