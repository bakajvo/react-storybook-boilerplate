import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';

import FRM01Button, {ButtonProps} from './FRM01Button';

export default {
    title: 'Example/FRM01Button',
    component: FRM01Button,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => <FRM01Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};
