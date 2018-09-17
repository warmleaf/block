import { storiesOf } from '@storybook/react'
import Popper from '.'

storiesOf('Base Component|Popper', module)
  .addAPIDoc(
    'introduce',
    {
      comment: 'this is a description for Text',
      platform: 'pc|mobile',
      scope: {
        Popper
      },
      code: `
<Popper content="i'm some tips">
  <span>I'm popper body</span>
</Popper>
      `
    }
  )
