import { storiesOf } from "@storybook/react";
import UserFill from "./userFill";
import PinFill from "./pinFill";
import HelpCircle from "./helpCircle";
import EllipsisVFill from "./ellipsisVFill";
import EllipsisHFill from "./ellipsisHFill";
import TaskFill from "./taskFill";
import BarsFill from "./barsFill";
import PlusCircle from "./plusCircle";
import SmileCircle from "./smileCircle";
import VideoCircle from "./videoCircle";
import VideoSlashCircle from "./videoSlashCircle";
// import PlusCircle from "./plusCircle";

storiesOf("Base Component|Icon", module).addAPIDoc("introduce", {
  comment: "this is a description for Flex",
  platform: "pc|mobile",
  scope: {
    UserFill,
    PinFill,
    HelpCircle,
    EllipsisVFill,
    EllipsisHFill,
    TaskFill,
    BarsFill,
    PlusCircle,
    SmileCircle,
    VideoCircle,
    VideoSlashCircle
  },
  code: `
<div>
  <UserFill />
  <HelpCircle />
  <PinFill />
  <EllipsisVFill />
  <EllipsisHFill />
  <TaskFill />
  <BarsFill />
  <PlusCircle />
  <SmileCircle />
  <VideoCircle />
  <VideoSlashCircle />
</div>
      `
});
