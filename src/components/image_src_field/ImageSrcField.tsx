import React from "react";
import { useRecordContext } from "react-admin";
import { ImageSrcFieldProps } from "../../interfaces/Interfaces";

const ImageSrcField: React.FC<ImageSrcFieldProps> = ({ source = "image" }) => {
  const record = useRecordContext();
  return record && record[source] ? <span>{record[source]?.src}</span> : null;
};

ImageSrcField.defaultProps = { label: "Image Path" };

export default ImageSrcField;
