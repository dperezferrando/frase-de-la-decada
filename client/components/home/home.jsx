import React from 'react';
import { Container, Row, Col, Form } from "react-bootstrap";
import Component from "../../utils/component"
import ReactMarkdown from "react-markdown";
import YouTube from 'react-youtube';  
import moment from "moment-with-locales-es6";
import "./home.css";
moment.locale("es")

class Home extends Component {
  render() {
  const input = '# Hola \n\n *aaaa*'
    return <Row className="justify-content-md-center groupStage">
      <Col md={11}>
        <div className="newsContainer">
          {
            this.props.news.map(({title, body, img, video, date}) => {
            return <div className="new">
              <div> 
                <div className="newsTitle"><h1>{title}</h1></div>
                <div className="newsDate"><i>{moment(date).calendar()}</i></div>
              </div>
              <div className="newsMedia">
                { img && <img src={img} width="30%" /> }

                { video && <YouTube  videoId={video}/> }
              </div>
              <ReactMarkdown source={body} className="newsText"/>

            </div>
          })
        }
        </div>
      </Col>
    </Row>
  }


}

export default Home;