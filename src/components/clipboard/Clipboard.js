import "./Clipboard.css";

import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Clipboard = ({ value }) => {
  const isClipboardSupported = "clipboard" in navigator;
  const [icon, setIcon] = useState("clipboard");
  const [isError, setIsError] = useState(false);

  const onClick = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setIcon("clipboard-check");
        setTimeout(() => setIcon("clipboard"), 3000);
      })
      .catch(() => {
        setIsError(true);
        setTimeout(() => setIsError(false), 3000);
      });
  };

  if (!isClipboardSupported) {
    return null;
  }
  return (
    <button
      className={"Clipboard" + (isError ? " Clipboard__error" : "")}
      onClick={onClick}
      title="Copy to clipboard"
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default Clipboard;
