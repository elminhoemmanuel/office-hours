import React from "react";
import PropTypes from 'prop-types';

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      checked: false
    };
  }

  handleClick() {
    const checked = !this.state.checked;
    this.setState({
      checked: checked
    });

    this.props.toggled(checked);
  }

  render() {
    const display = (this.state.checked ? 'on' : 'off');
    return (
      <div className="toggle" onClick={this.handleClick}>
        <p className="toggle__label">{`${this.props.label}`}</p>
        <img
          className={`toggle__icon toggle__icon--${display}`}
          src={`/static/images/ui/toggle-${display}.svg`}
          alt={`${display}`}
        />
      </div>
    )
  }
}

Toggle.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    toggled: PropTypes.func,
};

export default Toggle;
