import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Qualifiers from '../../components/qualifiers';
import { actions } from '../../actions/qualifiers';
import Component from "../../utils/component"
import WithLoading from "../../components/utils/withLoading";

const QualifiersWithLoading = WithLoading(Qualifiers)

class QualifiersContainer extends Component {

  componentDidMount() {
    this.props.actions.fetchFrases(this.props.location.query);
    this.props.actions.fetchFrasesAnio();
    this.props.actions.fetchAuthors();
    this.props.actions.fetchVotes("qualifiers");
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
function mapStateToProps({ qualifiers: { frases, frasesAnio, authors, selected, votes  }, profile: { user, isLoading } }, props) {
  return { frases, user, frasesAnio: !isLoading && user.voted.qualifiers ? votes : frasesAnio, authors, selected, isLoading: isLoading || frases.isLoading || (user.voted.qualifiers ? votes.isLoading : frasesAnio.isLoading) };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QualifiersContainer);