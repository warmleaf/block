import React from 'react'
import { storiesOf } from '@storybook/react'
import Avatar from '.'

storiesOf('Case Component|Avatar Card', module)
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
  title="orlo wang"
  subtitle="ow.cc@oulook.com"
  src="https://www.qq745.com/uploads/allimg/141009/1-14100ZT451-51.jpg"
  status="dnd"
/>
      `
    }
  )
