import React from 'react';
import { Story, Meta } from '@storybook/react';
import  {Input,InputProps}  from '../components/Input';

export default {
  title: 'Marbella/Input',
  component: Input,
  argTypes: {
  },
} as Meta<typeof Input>;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  error: false,
  disabled: false,
  label: 'Primary',
};

export const Success = Template.bind({});
Success.args = {
  error: false,
  disabled: false,
  success:true,
  label: "Success",
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  disabled: false,
  message: "Error",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled',
};