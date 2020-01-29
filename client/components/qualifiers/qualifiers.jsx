import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import Component from "../../utils/component"
import PhrasesDragAndDrop from "./phrasesDragAndDrop";
import WithLoading from "../../components/utils/withLoading";

const PhrasesDragAndDropWithLoading = WithLoading(PhrasesDragAndDrop);

class Qualifiers extends Component {
  render() {
    return <PhrasesDragAndDropWithLoading {...this.props}/>
 
  }


}

export default Qualifiers;