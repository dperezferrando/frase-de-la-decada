import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Component from "../../utils/component"
import PhrasesDragAndDrop from "./phrasesDragAndDrop";
import WithLoading from "../../components/utils/withLoading";
import Filters from "./filters";

const PhrasesDragAndDropWithLoading = WithLoading(PhrasesDragAndDrop);
const FiltersWithLoading = WithLoading(Filters);

class Qualifiers extends Component {
  render() {
    return (
      <Container fluid>
        <FiltersWithLoading
          isLoading={this.props.authors.isLoading} 
          authors={this.props.authors.results}
          actions={this.props.actions}
        />
        <Row className="justify-content-md-center">
          <Col md={11}>
            <PhrasesDragAndDropWithLoading {...this.props} 
              showCloak={this.props.isLoading && this.props.frases.alreadyLoadedOnce}/>
          </Col>
        </Row>
      </Container>
    );
 
  }

}

export default Qualifiers;