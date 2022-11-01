import React from 'react';
import { Card } from './Card';

export default {
    title: 'Component/Card',
    component: Card
};

const Template = args => <Card {...args} />;

export const Card1 = Template.bind({});
Card1.args = {
    backgroundColor: "blue",
    color: "white",
    height: "150px",
    fontFamily: "arial"
}
