import { storiesOf } from "@storybook/react";
import ListGroup from "./listGroup";
import MultipleGroup from "./multipleGroup";
import Text from "../text";

storiesOf("Base Component|ListGroup", module).addAPIDoc("Multiple Group", {
  comment: "this is a description for Text",
  platform: "pc|mobile",
  scope: {
    ListGroup,
    MultipleGroup,
    Text
  },
  code: `
<MultipleGroup multiple={true}>
  <ListGroup
    title="Project"
    onExpandStatusChange={s => console.log('status is', s)}
    itemRender={d => <Text>{d.name}</Text>}
    list={[{ name: "orlo wang" }, { name: "mark white" }]}
  />
  <ListGroup
    title="Channel"
    itemRender={d => <Text>{d.name}</Text>}
    list={[{ name: "orlo wang" }, { name: "mark white" }]}
  />
</MultipleGroup>
      `
});
