import React from 'react'
import { storiesOf } from '@storybook/react'
import Avatar from '.'

storiesOf('Base Component|Avatar', module)
  .addAPIDoc(
    'introduce',
    {
      comment: 'this is a description for Avatar',
      platform: 'pc|mobile',
      scope: {
        Avatar
      },
      code: `
<Avatar 
  src="https://www.qq745.com/uploads/allimg/141009/1-14100ZT451-51.jpg"
  status="dnd"
/>
      `
    }
  )
