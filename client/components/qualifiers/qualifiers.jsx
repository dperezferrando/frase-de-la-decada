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
            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
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
          <Col md={5} >
            <ButtonToolbar>
              <ToggleButtonGroup type="radio" name="anios" size="lg" onChange={(value) => console.log("GG", value)}>
              {
                YEARS.map(anio => 
                  <ToggleButton value={anio} key={anio} variant="light">{ anio }</ToggleButton>
                )
              }
              </ToggleButtonGroup>
            </ButtonToolbar>
          </Col>
          <Col md={5} >
            <ButtonToolbar>
              <ToggleButtonGroup type="radio" name="anios" size="lg" onChange={(value) => console.log("GG", value)}>
              {
                YEARS.map(anio => 
                  <ToggleButton value={anio} key={anio} variant="light">{ anio }</ToggleButton>
                )
              }
              </ToggleButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <PhrasesDragAndDropWithLoading {...this.props}/>
          </Col>
        </Row>
      </Container>
    );
 
  }


}

export default Qualifiers;