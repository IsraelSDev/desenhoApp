import React, { useEffect } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem"
};




const Canvas = class extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }


  render() {
    return (
      <div>

        <ReactSketchCanvas
          ref={this.canvas}
          strokeWidth={5}
          strokeColor="black"
          height="500px"
          backgroundImage="https://upload.wikimedia.org/wikipedia/commons/7/70/Graph_paper_scan_1600x1000_%286509259561%29.jpg"
          preserveBackgroundImageAspectRatio="none"
          exportWithBackgroundImage={false}
          withTimestamp={true}
        />

        <button
          onClick={() => {
            this.canvas.current.exportSvg()
              .then(data => {
                var svgData = data;
                var svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
                var svgUrl = URL.createObjectURL(svgBlob);
                var downloadLink = document.createElement("a");
                downloadLink.href = svgUrl;
                downloadLink.download = "paint.svg";
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
              }).catch(e => {
                console.log(e)
              })
          }}
        >
          Get Image
        </button>
        <button
          onClick={() => {
            this.canvas.current.clearCanvas()

          }}
        >
          Clear Image
        </button>
      </div>
    );
  }

};

export default Canvas;