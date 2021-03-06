import React from "react";
import Component from "../../utils/component"
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from "react-bootstrap";

class GroupedFilters extends Component {

  render() {
    return (
      <ButtonToolbar className="filters" >
        <ToggleButtonGroup type="radio" name={this.props.name} onChange={this.props.onChange} defaultValue={this.props.selected}>
        {
          this.props.items.map(({ key, value }) =>
            <ToggleButton value={value} key={key || value} variant="light" className={this.props.className}>{ value }</ToggleButton>
            )
        }
        </ToggleButtonGroup>
      </ButtonToolbar>
    );
  }

}

export default GroupedFilters;