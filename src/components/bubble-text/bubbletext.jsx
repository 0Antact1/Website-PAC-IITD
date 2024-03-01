import React from "react";
import styles from "./bubble.module.css";

function BubbleTextContainer ({text}) {
  return (
    <div className="grid h-screen place-content-center bg-black">
      <BubbleText text={text}/>
    </div>
  );
};

const BubbleText = ({text}) => {
  var str = text.toString();

  return (
    <h2 className="text-center text-5xl font-thin text-indigo-300" >
        {/* style={{color: color}} */}

      {str.split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}

    </h2>
  );
};

export default BubbleText;