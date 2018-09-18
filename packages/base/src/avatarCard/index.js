import React from "react";
import { string, oneOf, number, bool, oneOfType } from "prop-types";
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
  <Flex className="rbu-base-avatar-card" {...rest}>
    <Avatar
      src={avatarSrc}
      status={avatarStatus}
      size={avatarSize}
      statusBgColor={avatarStatusBgColor}
    />
    <Flex column vc={subtitle ? "space-around" : true}>
      <Text className="rbu-basic-ac-name">{title}</Text>
      {typeof subtitle === "string" ? (
        <Text className="rbu-basic-ac-subname">{subtitle}</Text>
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
  subtitle: string,
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
