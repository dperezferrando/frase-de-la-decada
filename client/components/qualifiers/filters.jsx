import React from "react";
import Component from "../../utils/component"
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import GroupedFilters from "./groupedFilters";
const YEARS = ["2013", "2014", "2015", "2016", "2017", "2018", "2019"]


class Filters extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fraseText: props.location.query.frase || "",
    };
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
                value={this.state.fraseText}
                onChange={({ target: { value } }) => this.onFraseFilterChange(value)}
              />
              </InputGroup>
          </Form.Group>

        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={11}>
          <Row>
            <Col md={12} >
              <GroupedFilters
                name="anios" 
                items={YEARS.map(it => ({ value: it }))}
                onChange={anio => this.addFilter({ anio })}
                selected={this.props.location.query.anio}
              />
              <GroupedFilters
                name="authors" 
                items={this.props.authors.map(({ _id, name }) => ({ key: _id, value: name }))}
                onChange={autor => this.addFilter({ autor })}
                selected={this.props.location.query.autor}
              />
              <Button variant="light" className="filters yearAuthor" onClick={::this.clean}>Limpiar</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </span>
  }

  addFilter(filter) {
    this.props.setSelected();
    const newState = { ...this.props.location.query, ...filter, page: 0 };
    this.props.setFilters(this.props.history, _.omit(newState, _.isUndefined))
  }

  onFraseFilterChange(fraseText) {
    this.setState({ ...this.state, fraseText })
     this.debouncedFraseFilter()
  }

  clean() {
    this.props.setSelected();
    const { frase } = this.props.location.query;
    this.props.setFilters(this.props.history, { frase });
    

  }

}


export default Filters;