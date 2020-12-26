import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from "moment";
import config from "../../config";
import Resultados from '../../components/resultados';
import { actions } from '../../actions/resultados';
import Component from "../../utils/component"
import WithLoading from "../../components/utils/withLoading";


//const started = moment().isAfter(config.qualifiers.startDate);

const ResultadosWithLoading = WithLoading(Resultados)

class ResultadosContainer extends Component {

  componentDidMount() {

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
function mapStateToProps({ profile: { user, isLoading }, ...state }, props) {
  return { isLoading: isLoading, user };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultadosContainer);