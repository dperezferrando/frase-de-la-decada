import React from 'react';
import { Container, Row, Col, Form, InputGroup, ButtonToolbar, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import Component from "../../utils/component"
import PhrasesDragAndDrop from "./phrasesDragAndDrop";
import WithLoading from "../../components/utils/withLoading";
const YEARS = ["2013", "2014", "2015", "2016", "2017", "2018", "2019"]


const PhrasesDragAndDropWithLoading = WithLoading(PhrasesDragAndDrop);

class Qualifiers extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={11}>
            <Form.Group controlId="validationFormikUsername">
              <Form.Label></Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend"><i className="fa fa-search"></i></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Buscar..."
                  aria-describedby="inputGroupPrepend"
                  name="username"
     //               value={values.username}
     //               onChange={handleChange}
                />
                </InputGroup>
            </Form.Group>

          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={11}>
            <Row className="justify-content-md-around">
              <Col md={3} >
                <ButtonToolbar>
                  <ToggleButtonGroup type="radio" name="anios" onChange={(value) => console.log("GG", value)}>
                  {
                    YEARS.map(anio => 
                      <ToggleButton value={anio} key={anio} variant="light" className="yearAuthor">{ anio }</ToggleButton>
                    )
                  }
                  </ToggleButtonGroup>
                </ButtonToolbar>
              </Col>
              <Col md={8} >
                { !this.props.authors.isLoading && <ButtonToolbar>
                  <ToggleButtonGroup type="radio" name="anios" onChange={(value) => console.log("GG", value)}>
                  {
                    this.props.authors.results.map(({ name, _id }) => 
                      <ToggleButton value={name} key={_id} variant="light" className="yearAuthor">{ name }</ToggleButton>
                    )
                  }
                  </ToggleButtonGroup>
                </ButtonToolbar>}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={11}>
            <PhrasesDragAndDropWithLoading {...this.props}/>
          </Col>
        </Row>
      </Container>
    );
 
  }


}

export default Qualifiers;