import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import SearchForm from './SearchForm';

export default {
    title: 'Example/SearchForm',
    component: SearchForm,
} as ComponentMeta<typeof SearchForm>

const Template: ComponentStory<typeof SearchForm> = () => <SearchForm />;

export const Primary = Template.bind({});