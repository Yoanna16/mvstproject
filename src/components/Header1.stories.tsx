import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Header from './Header';

export default {
    title: 'Example/Header',
    component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => <Header/>;

export const Primary = Template.bind({});

