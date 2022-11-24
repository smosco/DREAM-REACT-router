import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  /*const params = useParams();
  console.log(params);
  return <div>VideoDetail id:{params.videoId}</div>;*/
  const { videoId } = useParams();
  return <div>VideoDetail id:{videoId}</div>;
}
