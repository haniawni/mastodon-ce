import PropTypes from 'prop-types';

class TextIconButton extends React.PureComponent {

  constructor (props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    e.preventDefault();
    this.props.onClick();
  }

  render () {
    const { label, title, active } = this.props;

    return (
      <button title={title} aria-label={title} className={`text-icon-button ${active ? 'active' : ''}`} onClick={this.handleClick}>
        {label}
      </button>
    );
  }

}

TextIconButton.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default TextIconButton;
