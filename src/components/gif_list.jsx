import React from "react";
import Gif from "./gif";

const GifList = (props) => {
  const { gifs } = props;
  return gifs.map((gif) => {
    return <Gif gifUrl={gif.url} gifWidth={gif.width} gifHeight={gif.height} key={gif.url} selectGif={props.selectGif} />;
  });
};

export default GifList;
