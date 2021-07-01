import "./ImageList.css";
import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({ id, description, urls }) => {
    //nama objectnya image. Tapi, clean code dengan memanggil child-nya saja
    return <img alt={description} key={id} src={urls.regular} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
