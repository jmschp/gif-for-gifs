import React from "react";
import Gif from "./gif";

const GifList = (props) => {
  const { gifs } = props;
  return gifs.map((gifId) => {
    return <Gif gifId={gifId} key={gifId} selectGif={props.selectGif} />;
  });
};

export default GifList;
