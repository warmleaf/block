import { storiesOf } from '@storybook/react'
import Select from '.'

storiesOf('Base Component|Select', module)
  .addAPIDoc(
    'introduce',
    {
      comment: 'this is a description for Text',
      platform: 'pc|mobile',
      scope: {
        Select
      },
      code: `
<Select content="i'm some tips"/>
      `
    }
  )
