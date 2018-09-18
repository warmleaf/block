import { storiesOf } from "@storybook/react";
import Menu from "./menu";
import Text from "../text";

storiesOf("Base Component|ListGroup", module).addAPIDoc("menu", {
  comment: "this is a description for Text",
  platform: "pc|mobile",
  scope: {
    Menu,
    Text
  },
  code: `
<Menu 
  title="Project"
  actionRender={() => <Text 
      onClick={(e, b = '123') => {
        console.log('add project', b)
      }}
    >
      BTN
    </Text>}
  itemRender={d => <Text ke={d.name}>{d.name}</Text>}
  data={[{name:"orlo wang"},{name:"mark white"}]}
/>
      `
});
