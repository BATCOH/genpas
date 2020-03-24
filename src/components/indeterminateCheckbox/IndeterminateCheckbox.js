import React from "react";

class IndeterminateCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.domRef = React.createRef();
    this.setIndeterminate = this.setIndeterminate.bind(this);
  }
  setIndeterminate() {
    if (this.domRef && this.domRef.current) {
      this.domRef.current.indeterminate = this.props.indeterminate;
    }
  }
  componentDidUpdate() {
    this.setIndeterminate();
  }
  componentDidMount() {
    this.setIndeterminate();
  }
  render() {
    const { indeterminate, ...props } = this.props;
    return <input type="checkbox" ref={this.domRef} {...props} />;
  }
}

export default IndeterminateCheckbox;
