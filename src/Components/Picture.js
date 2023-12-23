import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p style={{ color: "rgb(200, 200, 200)" }}>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} />
      </div>
      <p>
        <a
          style={{ color: "rgb(248, 217, 132)" }}
          target="_blank"
          href={data.src.large}
        >
          Click to Download
        </a>
      </p>
    </div>
  );
};

export default Picture;
