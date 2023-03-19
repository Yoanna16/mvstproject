import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import SearchForm from './SearchForm';

export default {
    title: 'Example/SearchForm',
    component: SearchForm,
} as ComponentMeta<typeof SearchForm>

const Template: ComponentStory<typeof SearchForm> = () => <SearchForm searchInput={''} setSearchInput={function (value: React.SetStateAction<string>): void {
    throw new Error('Function not implemented.');
} } setFiltered={function (value: React.SetStateAction<never[]>): void {
    throw new Error('Function not implemented.');
} } repos={undefined} />;

export const Primary = Template.bind({});