import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Qualifiers from '../../components/qualifiers';
import { actions } from '../../actions/qualifiers';
import Component from "../../utils/component"


class QualifiersContainer extends Component {

  componentDidMount() {
    this.props.actions.fetchFrases();
  }


  render() {
    return (
      <div>
        <Qualifiers
          {...this.props} 
        />
      </div>
    );
  }
}
function mapStateToProps({ qualifiers: { frases }}, props) {
    return { frases, isLoading: frases.isLoading };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QualifiersContainer);