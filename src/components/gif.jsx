/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

class Gif extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { gifId } = this.props;
    const { selectGif } = this.props;
    selectGif(gifId);
  }

  render() {
    const { gifId } = this.props;
    const srcUrl = `https://media.giphy.com/media/${gifId}/giphy.gif`;
    return <img src={srcUrl} alt="gif" onClick={this.handleClick} />;
  }
}

export default Gif;
