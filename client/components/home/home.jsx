import React from 'react';
import { Container, Row, Col, Form } from "react-bootstrap";
import Component from "../../utils/component"
import ReactMarkdown from "react-markdown/with-html";
import YouTube from 'react-youtube';  
import moment from "moment";
import "./home.css";
moment.locale("es")

class Home extends Component {
  render() {
    return <Row className="justify-content-md-center groupStage">
      <Col md={11}>
        <div className="newsContainer">
          {
            this.props.news.map(({title, body, img, video, date}) => {
            return <div className="new">
              <div> 
                <div className="newsTitle"><h2>{title}</h2></div>
                <div className="newsDate"><i>{moment(date).calendar()}</i></div>
              </div>
              <div className="newsMedia">
                { img && <img src={img} width="30%" /> }

                { video && <YouTube  videoId={video}/> }
              </div>
              <ReactMarkdown source={body} escapeHtml={false} className="newsText"/>

            </div>
          })
        }
        </div>
      </Col>
    </Row>
  }


}

export default Home;