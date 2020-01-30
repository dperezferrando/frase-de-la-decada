import React from "react";
import Component from "../../utils/component"
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import GroupedFilters from "./groupedFilters";

const YEARS = ["2013", "2014", "2015", "2016", "2017", "2018", "2019"]
const DEFAULT_STATE = {
  fraseText: "",
  autor: undefined,
  anio: undefined,
  fraseDelAnio: false,
  clean: false
};

class Filters extends Component {

  constructor(props) {
    super(props)
    this.state = DEFAULT_STATE;

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
          <Row className="justify-content-md-between">
            <Col md={3} >
              <GroupedFilters
                name="anios" 
                items={YEARS.map(it => ({ value: it }))}
                onChange={anio => this.addFilter({ anio })}
                clean={this.state.clean}
              />
            </Col>
            <Col md={7} >
              <GroupedFilters
                name="authors" 
                items={this.props.authors.map(({ _id, name }) => ({ key: _id, value: name }))}
                onChange={autor => this.addFilter({ autor })}
                clean={this.state.clean}
              />
            </Col>
            <Col md={1}>
              <Button variant="light" className="yearAuthor" onClick={::this.clean}>Limpiar</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </span>
  }

  addFilter(filter) {
    const { fraseText, clean, ...state } = this.state;
    const newState = { ...state, ...filter };
    this.props.actions.fetchFrases(_.omit(newState, _.isUndefined))
    this.setState(newState);

  }

  onFraseFilterChange(fraseText) {
    this.setState({ ...this.state, fraseText })
     this.debouncedFraseFilter()
  }

  clean() {
    const newState = {  ...this.state, autor: undefined, anio: undefined, clean: !this.state.clean };
    this.setState(newState);
    const { fraseText, clean, ...state } = newState;
    this.props.actions.fetchFrases(state)

  }

}


export default Filters;