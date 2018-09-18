import { string } from "prop-types";
import styled from "styled-components";

function pickBreakType(type) {
  if (!type) return null;
  switch (type) {
    case "breakAll":
      return "break-all";
    case "breakWord":
      return "break-word";
    case "noBreak":
    default:
      return "keep-all";
  }
}

const Text = styled.span.attrs({
  clampOne: props => props.clamp === true || props.clamp == 1,
  clampMore: props => props.clamp > 1 && parseInt(props.clamp)
})`
  background-color: ${props => props.bgc};
  border: ${props => props.b};
  border-bottom: ${props => props.bb};
  border-left: ${props => props.bl};
  border-radius: ${props => props.round};
  border-right: ${props => props.br};
  border-top: ${props => props.bt};
  text-shadow: ${props => props.shadow};
  box-sizing: border-box;
  color: ${props => props.c};
  cursor: ${props => props.cur};
  display: ${props =>
    props.clampMore ? "-webkit-box" : props.clamp ? "block" : "inline-block"};
  margin: ${props => props.m};
  margin-bottom: ${props => props.mb};
  margin-left: ${props => props.ml};
  margin-right: ${props => props.mr};
  margin-top: ${props => props.mt};
  font-size: ${props => props.size};
  opacity: ${props => props.o};
  overflow: ${props => (props.clamp ? "hidden" : "inline-block")};
  padding: ${props => props.p};
  padding-bottom: ${props => props.pb};
  padding-left: ${props => props.pl};
  padding-right: ${props => props.pr};
  padding-top: ${props => props.pt};
  text-align: ${props => props.align};
  text-indent: ${props => props.indent};
  text-overflow: ${props => props.clamp && "ellipsis"};
  transform: ${props => props.t};
  transition: ${props => props.ani};
  white-space: ${props => props.clampOne && "nowrap"};
  width: ${props => props.w};
  word-break: ${props => pickBreakType(props.break)};
  -webkit-box-orient: ${props => props.clampMore && "vertical"};
  -webkit-line-clamp: ${props => props.clampMore};
`;

Text.propTypes = {
  /* align-self */
  as: string,
  b: string,
  /* border-bottom */
  bb: string,
  /* border-left */
  bl: string,
  /* border-radius */
  br: string,
  /* background */
  bg: string,
  /* background-color */
  bgc: string,
  /* border-top */
  bt: string,
  /* inline Text */
  inline: string,
  /* vertical center(default) */
  vc: string,
  /* horizontal center(default) */
  hc: string,
  round: string
};

export default Text;
