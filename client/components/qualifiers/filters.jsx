import React from "react";
import Component from "../../utils/component"
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import GroupedFilters from "./groupedFilters";

const YEARS = ["2013", "2014", "2015", "2016", "2017", "2018", "2019"]

class Filters extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fraseText: "",
      fraseDelAnio: false
    }

    this.debouncedFraseFilter = _.debounce(() => this.addFilter({ frase: this.state.fraseText }), 1000)
  }

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
                onChange={({ target: { value } }) => this.onFraseFilterChange(value)}
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
                onChange={anio => this.addFilter({ anio })}
              />
            </Col>
            <Col md={8} >
              <GroupedFilters
                name="authors" 
                items={this.props.authors.map(({ _id, name }) => ({ key: _id, value: name }))}
                onChange={autor => this.addFilter({ autor })}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </span>
  }

  addFilter(filter) {
    const { fraseText, ...state } = this.state;
    const newState = { ...state, ...filter };
    this.props.actions.fetchFrases(newState)
    this.setState(newState);

  }

  onFraseFilterChange(fraseText) {
    this.setState({ ...this.state, fraseText })
     this.debouncedFraseFilter()
  }

}


export default Filters;