import React from "react";

class AutoHeightTextArea extends React.Component {
  constructor(props) {
    super(props);
    this.domRef = React.createRef();
    this.updateSize = this.updateSize.bind(this);
  }
  updateSize() {
    const ref = this.domRef && this.domRef.current;
    if (ref) {
      ref.style.height = "";
      if (ref.clientHeight < ref.scrollHeight) {
        ref.style.height = "calc( .2em + " + ref.scrollHeight + "px)";
      }
    }
  }
  componentDidMount() {
    this.updateSize();
    window.addEventListener("resize", this.updateSize);
  }
  componentDidUpdate() {
    this.updateSize();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSize);
  }
  focus() {
    const ref = this.domRef && this.domRef.current;
    ref && ref.focus();
  }
  select() {
    const ref = this.domRef && this.domRef.current;
    ref && ref.select();
  }
  render() {
    return <textarea ref={this.domRef} {...this.props} />;
  }
}

export default AutoHeightTextArea;
