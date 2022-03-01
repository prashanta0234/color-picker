import "./App.css";
import reactCSS from "reactcss";
import { useState } from "react";
import { CirclePicker } from "react-color";

function App() {
  const [displayColorPicker, setdisplayColorPicker] = useState(false);
  const [colors, setColor] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });

  const handleClick = () => {
    setdisplayColorPicker(true);
  };

  const handleClose = () => {
    setdisplayColorPicker(false);
  };

  const handleChange = (color) => {
    setColor(color.rgb);
    console.log(color);
  };
  const styles = reactCSS({
    default: {
      color: {
        width: "40px",
        height: "40px",
        lineHeight: "40px",
        borderRadius: "50%",
        background: ` rgba( ${colors.r}, ${colors.g}, ${colors.b}, ${colors.a} )`,
      },
      swatch: {
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });
  return (
    <div>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color}></div>
      </div>
      {displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <CirclePicker onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
