import React from "react";
import Component from "../../utils/component"
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import GroupedFilters from "./groupedFilters";

const YEARS = ["2013", "2014", "2015", "2016", "2017", "2018", "2019"]

class Filters extends Component {

  render() {
    return <span>
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
              <GroupedFilters
                name="anios" 
                items={YEARS.map(it => ({ value: it }))}
                onChange={(value) => console.log("EE", value)}
              />
            </Col>
            <Col md={8} >
              <GroupedFilters
                name="authors" 
                items={this.props.authors.map(({ _id, name }) => ({ key: _id, value: name }))}
                onChange={(value) => console.log("EE", value)}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </span>
  }

}


export default Filters;