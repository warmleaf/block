import { storiesOf } from '@storybook/react'
import Text from '.'

storiesOf('Base Component|Text', module)
  .addAPIDoc(
    'introduce',
    {
      comment: 'this is a description for Text',
      platform: 'pc|mobile',
      scope: {
        Text
      },
      code: `
<Text indent="2em">This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties. The paragraph is indented, aligned, and the space between characters is specified. The underline is removed from this colored "Try it Yourself" link.</Text>
      `
    }
  )
