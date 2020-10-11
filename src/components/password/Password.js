import "./Password.css";

import React, { useRef } from "react";

import AutoHeightTextArea from "../autoHeightTextArea";
import Clipboard from "../clipboard";

const Password = ({ pass }) => {
  const isClipboardSupported = "clipboard" in navigator;
  const className =
    "Password" + (isClipboardSupported ? " Password__hasClipboard" : "");

  const domRef = useRef(null);

  const onFocus = () => {
    // Timeout to avoid Safari bug
    setTimeout(() => {
      domRef && domRef.current && domRef.current.select();
    }, 100);
  };

  if (!pass) return null;

  return (
    <div className={className}>
      <AutoHeightTextArea
        className="Password-input"
        value={pass}
        readOnly={true}
        ref={domRef}
        onFocus={onFocus}
        style={{ width: pass.length + ".1ch" }}
      />
      <Clipboard value={pass} />
    </div>
  );
};

export default Password;
