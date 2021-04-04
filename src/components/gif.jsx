/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

class Gif extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { selectGif } = this.props;
    const { gifUrl } = this.props;
    const { gifWidth } = this.props;
    const { gifHeight } = this.props;
    selectGif(gifUrl, gifWidth, gifHeight);
  }

  render() {
    const { gifUrl } = this.props;
    return <img src={gifUrl} alt="gif" onClick={this.handleClick} />;
  }
}

export default Gif;
