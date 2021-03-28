import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';
import FRM02Link, {LinkProps} from "./FRM02Link";

export default {
    title: 'Example/FRM02Link',
    component: FRM02Link,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

const Template: Story<LinkProps> = (args) => <FRM02Link {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
