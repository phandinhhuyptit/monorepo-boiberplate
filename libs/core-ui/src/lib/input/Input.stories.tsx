import type { Meta,ComponentStory } from '@storybook/react';
import { Input } from './input';

export default {
  component: Input,
  title: 'Widgets/Input',
} as  Meta<typeof Input>;


const Template: ComponentStory<typeof Input> = (args) => {
  return (
    <div className="flex  gap-5">
        <Input 
        label='name'
        color='primary'
        iconPrefix={<div>$</div>}
        iconSuffix={<div>$</div>}
        variant='outlined'
        />
         <Input 
        label='telephone'
        color='primary'
        iconPrefix={<div>$</div>}
        iconSuffix={<div>$</div>}
        variant='outlined'
        />
         <Input 
        label='number'
        color='primary'
        iconPrefix={<div>$</div>}
        iconSuffix={<div>$</div>}
        variant='outlined'
        />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {};