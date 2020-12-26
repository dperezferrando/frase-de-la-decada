import React from 'react';
import _ from "lodash";
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
          <div className="detailAutor">RESULTADOS DE LA VOTACIÓN (PRIMEROS 20)</div>
            <div className="tableQualifiers">
            <Collapse in={!this.state.collapse}>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Frase</th>
                    <th>Votos</th>
                  </tr>
                </thead>
                <tbody>
                  {_.take(this.props.frases.results, 20).map((frase, i) => {

                    return <tr key={`fraseclasif-${i}`} className={frase.fraseDelAnio? "fraseDelAnio" :( frase.qualified ? "qualified" :"")}>
                      <td className="yearAuthor">{i + 1}</td>
                      <td><span>{`${frase.frase} - `}</span><span className="yearAuthor">{`${frase.autor} (${frase.anio})` }</span></td>
                      <td className="yearAuthor">{frase.votesQuantity ? frase.votesQuantity.qualifiers: 0}</td>
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