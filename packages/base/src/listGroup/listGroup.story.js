import { storiesOf } from "@storybook/react";
import ListGroup from "./listGroup";
import Text from "../text";

storiesOf("Base Component|ListGroup", module).addAPIDoc("introduce", {
  comment: "this is a description for Text",
  platform: "pc|mobile",
  scope: {
    ListGroup,
    Text
  },
  code: `
<ListGroup 
  title="Project"
  actionRender={() => <Text 
      onClick={(e, b = '123') => {
        console.log('add project', b)
      }}
    >
      BTN
    </Text>}
  itemRender={d => <Text>{d.name}</Text>}
  list={[{name:"orlo wang"},{name:"mark white"}]}
/>
      `
});
