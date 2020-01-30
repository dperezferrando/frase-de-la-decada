import React from "react";
import Component from "../../utils/component"
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from "react-bootstrap";

class GroupedFilters extends Component {

  render() {
    return (
      <ButtonToolbar>
        <ToggleButtonGroup type="radio" name={this.props.name} onChange={this.props.onChange}>
        {
          this.props.items.map(({ key, value }) => 
            <ToggleButton value={value} key={key || value} variant="light" className="yearAuthor">{ value }</ToggleButton>
            )
        }
        </ToggleButtonGroup>
      </ButtonToolbar>
    );
  }

}

export default GroupedFilters;