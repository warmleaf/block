import { storiesOf } from "@storybook/react";
import Separator from ".";

storiesOf("Base Component|Separator", module).addAPIDoc("introduce", {
  comment: "this is a description for Text",
  platform: "pc|mobile",
  scope: {
    Separator
  },
  code: `<Separator b="1px solid green" bgc="rgba(0,0,0,.2)" p="20px" round="4px">I'm a Separator box</Separator>`
});
