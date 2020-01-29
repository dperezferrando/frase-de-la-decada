import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import Component from "../../utils/component"
import PhrasesDragAndDrop from "./phrasesDragAndDrop";

class Qualifiers extends Component {
  render() {
    return <PhrasesDragAndDrop {...this.props}/>
 
  }


}

export default Qualifiers;