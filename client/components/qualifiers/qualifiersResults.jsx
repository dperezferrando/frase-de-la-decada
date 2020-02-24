import React from 'react';
import Component from "../../utils/component"
import { Col, Row , Table} from "react-bootstrap";
import "./qualifiers.css"

class QualifiersResults extends Component {
  render() {
    return <Row className="justify-content-md-center" style={{ marginTop: "10px"}}>
      <Col md={11}>
        <h4><b>Frases clasificadas:</b></h4>
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
      </Col>
    </Row>
  }

}

export default QualifiersResults;