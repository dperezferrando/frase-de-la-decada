import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from "moment";
import config from "../../config";
import Resultados from '../../components/resultados';
import { actions } from '../../actions/resultados';
import Component from "../../utils/component"
import WithLoading from "../../components/utils/withLoading";


const started = moment().isAfter(config.qualifiers.resultsDate);

const ResultadosWithLoading = WithLoading(Resultados)

class ResultadosContainer extends Component {

  componentDidMount() {
    if(started) {
      this.props.actions.fetchMostVoted();
      this.props.actions.fetchDestacadas();
      this.props.actions.fetchStats();
    }
  }


  render() {
    return (
      <div>
        <ResultadosWithLoading
          {...this.props}
          //showCloak={this.props.isLoading && this.props.frases.alreadyLoadedOnce}
        />
      </div>
    );
  }
}
function mapStateToProps({ profile: { user, isLoading }, resultados: { mostVoted, stats, destacadas }, ...state }, props) {
  return { isLoading: isLoading || mostVoted.isLoading || stats.isLoading || destacadas.isLoading, mostVoted: mostVoted.frase, stats, destaacadas: destacadas.frases, user };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultadosContainer);