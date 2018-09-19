import React from "react";
import { string, oneOf, number, func, bool, oneOfType, element } from "prop-types";
import Flex from "../flex";
import Text from "../text";
import Avatar from "../avatar";

const AvatarCard = ({
  avatarSrc,
  avatarStatus,
  avatarSize,
  avatarStatusBgColor,
  title,
  subtitle,
  ...rest
}) => (
  <Flex vc className="rbu-base-avatar-card" {...rest}>
    <Avatar
      src={avatarSrc}
      status={avatarStatus}
      size={avatarSize}
      statusBgColor={avatarStatusBgColor}
      mr={parseInt(avatarSize || 32) / 4 + "px"}
    />
    <Flex full column vc={subtitle ? "space-around" : true}>
      <Text clamp className="rbu-basic-ac-name">{title}</Text>
      {typeof subtitle === "string" ? (
        <Text clamp className="rbu-basic-ac-subname">{subtitle}</Text>
      ) : typeof subtitle === "function" ? (
        subtitle()
      ) : (
        subtitle
      )}
    </Flex>
  </Flex>
);

AvatarCard.propTypes = {
  /** name of avatar */
  title: string,
  /** subtitle of avatar */
  subtitle: oneOfType([string, func, element]),
  /** size of avatar */
  avatarSize: oneOfType([bool, number]),
  /** avatar source uri */
  avatarSrc: string,
  /** avatar status */
  avatarStatus: oneOf(["idle", "dnd", "on", "off"]),
  /** status background color, should be same with avatar background */
  avatarStatusBgColor: oneOfType([bool, number])
};

export default AvatarCard;
