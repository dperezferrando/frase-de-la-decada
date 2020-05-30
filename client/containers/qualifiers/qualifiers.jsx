import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from "moment";
import config from "../../config";
import Qualifiers from '../../components/qualifiers';
import { actions } from '../../actions/qualifiers';
import Component from "../../utils/component"
import WithLoading from "../../components/utils/withLoading";


const started = moment().isAfter(config.qualifiers.startDate);

const QualifiersWithLoading = WithLoading(Qualifiers)

class QualifiersContainer extends Component {

  componentDidMount() {
    if(started) {
      this.props.actions.fetchFrases(this.props.location.query);
      this.props.actions.fetchFrasesAnio();
      this.props.actions.fetchAuthors();
      this.props.actions.fetchVotes("qualifiers");
    }
  }


  render() {
    return (
      <div>
        <QualifiersWithLoading
          {...this.props}
          showCloak={this.props.isLoading && this.props.frases.alreadyLoadedOnce}
        />
      </div>
    );
  }
}
function mapStateToProps({ qualifiers: { frases, frasesAnio, authors, selected, votes, preselection  }, profile: { user, isLoading } }, props) {
  console.log("USER LOADING", isLoading)
  return { frases, user, preselection, frasesAnio: !isLoading && user.voted.qualifiers ? votes : frasesAnio, authors, selected, isLoading: started && (isLoading || frases.isLoading || preselection.isLoading || (user.voted.qualifiers ? votes.isLoading : frasesAnio.isLoading)) };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QualifiersContainer);