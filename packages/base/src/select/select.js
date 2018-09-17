import React, { Component, cloneElement } from "react";
import { bool, func, oneOf, string, number, element } from "prop-types";
import Popper from "../popper";
import Flex from "../flex";

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      popPosition: {}
    };
    this.timer = null;
  }

  render() {
    return (
      <Popper overkeep content={this._selectionRender()} place="bottom">{this._inputRender()}</Popper>
    );
  }

  _inputRender = () => {
    return <Flex>input</Flex>;
  };

  _selectionRender = () => {
    return <Flex>selection</Flex>;
  };
}

Select.propTypes = {
  /** pop content */
  content: string | func | element,
  /** if is a modal or not */
  modal: bool,
  /** pop place */
  place: oneOf(["left", "top", "right", "bottom"]),
  /** rerender function which back to a pop element */
  popRender: func,
  /** pop arrow size if have a arrow */
  arrowSize: number,
  /** if need keep active only if mouse leave from pop, this is usefull to menu */
  overkeep: bool
};

Select.defaultProps = {
  modal: false,
  place: "right",
  arrowSize: 10,
  overkeep: false
};
