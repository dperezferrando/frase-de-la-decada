import React from 'react';
import Component from "../../utils/component"
import { Col, Row , Table, Collapse } from "react-bootstrap";
import "./qualifiers.css"

class QualifiersResults extends Component {

  state = {
    collapse: false
  }

  render() {
    const chevron = this.state.collapse ? "right" : "down";
    return <Row className="justify-content-md-center" style={{ marginTop: "10px"}}>
      <Col md={11}>
        <div className="clasificadas">
          <div className="chevron" onClick={::this.collapse} aria-controls="tableQualifiers" aria-expanded={!this.state.collapse}>
            <i className={`fa fa-chevron-${chevron}`} aria-hidden='true'/>
          </div>
          <div className="resultsTitle">Frases clasificadas</div>
            <div className="tableQualifiers">
            <Collapse in={!this.state.collapse}>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Frase</th>
                    <th>Votos</th>
                    <th>Coeficiente Autista</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.frases.results.map((frase, i) => {

                    return <tr key={`fraseclasif-${i}`} className={frase.qualified? "qualified" : ""}>
                      <td className="yearAuthor">{i + 1}</td>
                      <td><span>{`${frase.frase} - `}</span><span className="yearAuthor">{`${frase.autor} (${frase.anio})` }</span></td>
                      <td className="yearAuthor">{frase.votesQuantity.qualifiers}</td>
                      <td className="yearAuthor">{frase.coeficienteAutista}</td>
                    </tr>


                  })}
                </tbody>
              </Table>
            </Collapse>
          </div>
        </div>
      </Col>
    </Row>
  }

  collapse() {
    this.setState({ ...this.state,  collapse: !this.state.collapse })
  }

}

export default QualifiersResults;