/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

const GifInfo = (props) => {
  const { gifUrl } = props;
  const { gifWidth } = props;
  const { gifHeight } = props;
  return (
    <div className="gif-info">
      <i className="fas fa-link"> {gifUrl}</i>
      <br />
      <i className="fas fa-text-width"> {gifWidth} px</i>
      <br />
      <i className="fas fa-text-height"> {gifHeight} px</i>
    </div>
  );
};

export default GifInfo;
