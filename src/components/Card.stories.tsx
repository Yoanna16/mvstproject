import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Card  from './Card';

export default {
    title: 'Example/Card',
    component: Card,

} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    avatar_url: 'https://media.istockphoto.com/id/1334433318/de/foto/big-sister-warning-little-brother-1988-im-garten.jpg?b=1&s=170667a&w=0&k=20&c=XTvWPLNlirfdkqVcqzVWgnjY9luYTQmkQ_AkidpI8FQ=',
    login: 'Yoanna',
    name: 'mvst-challenge',
    created_at: "2023-03-17",
    html_url: "https://github.com/Yoanna16/mvstproject",
    stargazers_count: '0',
    watchers_count: '0',
    language: 'TypeScript',
    open_issues: '0',
}
