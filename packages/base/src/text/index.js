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

function clamp(src) {
  if (src === true || src == 1) return { one: true };
  if (src > 1) return { more: parseInt(src) };
  return {};
}

const Text = styled.span`
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
    clamp(props.clamp).more
      ? "-webkit-box"
      : props.clamp
        ? "block"
        : "inline-block"};
  margin: ${props => props.m};
  margin-bottom: ${props => props.mb};
  margin-left: ${props => props.ml};
  margin-right: ${props => props.mr};
  margin-top: ${props => props.mt};
  font-size: ${props => props.size};
  opacity: ${props => props.o};
  overflow: ${props => props.clamp && "hidden"};
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
  white-space: ${props => clamp(props.clamp).one && "nowrap"};
  width: ${props => props.w};
  word-break: ${props => pickBreakType(props.break)};
  -webkit-box-orient: ${props => clamp(props.clamp).more && "vertical"};
  -webkit-line-clamp: ${props => clamp(props.clamp).more};
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
