import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Label',
    variant: 'contained',
    color: 'primary',
    fullWidth: false
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})

export const Secondary = Template.bind({})

Secondary.args = {
  color: 'secondary'
}

export const Warning = Template.bind({})

Warning.args = {
  color: 'warning'
}

export const Danger = Template.bind({})

Danger.args = {
  color: 'danger'
}

export const FullWidth = Template.bind({})

FullWidth.args = {
  fullWidth: true
}

export const Outlined = Template.bind({})

Outlined.args = {
  variant: 'outlined'
}

export const Contained = Template.bind({})
