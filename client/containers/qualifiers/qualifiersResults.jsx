import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QualifiersResults from '../../components/qualifiers/qualifiersResults';
import { actions } from '../../actions/qualifiersResults';
import Component from "../../utils/component"
import WithLoading from "../../components/utils/withLoading";

const QualifiersResultsWithLoading = WithLoading(QualifiersResults)

class QualifiersResultsContainer extends Component {

  componentDidMount() {
    this.props.actions.fetchResults()
  }


  render() {
    return (
      <div>
        <QualifiersResultsWithLoading
          {...this.props}
        />
      </div>
    );
  }
}
function mapStateToProps({ qualifiersResults: { results  } }, props) {
  return { frases: results,  isLoading: results.isLoading };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QualifiersResultsContainer);