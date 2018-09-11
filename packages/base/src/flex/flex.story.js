import { storiesOf } from '@storybook/react'
import Flex from '.'

storiesOf('Base Component|Flex', module)
  .addAPIDoc(
    'introduce',
    {
      comment: 'this is a description for Flex',
      platform: 'pc|mobile',
      scope: {
        Flex
      },
      code: `
        <Flex b="1px solid green" bgc="rgba(0,0,0,.2)" p="20px" round="4px">I'm a flex box</Flex>
      `
    }
  )
