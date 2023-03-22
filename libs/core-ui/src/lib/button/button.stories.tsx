import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

export default {
  component: Button,
  title: 'Widgets/Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-lg font-bold mb-2">CONTAIN</p>
        <div className="flex flex-col gap-4 outline-dashed outline-1 outline-[#D8DDE1] rounded-2xl p-5">
          <div className="flex gap-4 items-center">
            <p className="text-base font-semibold mb-0 w-12">Color </p>
            <Button variant="contain" size="medium" color={'default'}>
              Default
            </Button>
            <Button variant="contain" size="medium" color={'primary'}>
              Primary
            </Button>
            <Button variant="contain" size="medium" color={'secondary'}>
              Secondary
            </Button>
            <Button variant="contain" size="medium" color={'success'}>
              Success
            </Button>
            <Button variant="contain" size="medium" color={'info'}>
              Info
            </Button>
            <Button variant="contain" size="medium" color={'error'}>
              Error
            </Button>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-base font-semibold mb-0 w-12">Disable </p>
            <Button variant="contain" size="medium" color={'primary'} disable>
              Default
            </Button>
            <Button variant="contain" size="medium" color={'primary'} disable>
              Primary
            </Button>
            <Button variant="contain" size="medium" color={'primary'} disable>
              Secondary
            </Button>
            <Button variant="contain" size="medium" color={'success'} disable>
              Success
            </Button>
            <Button variant="contain" size="medium" color={'info'} disable>
              Info
            </Button>
            <Button variant="contain" size="medium" color={'error'} disable>
              Error
            </Button>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-base font-semibold mb-0 w-12">Size </p>
            <Button variant="contain" size="small" color={'primary'}>
              Default
            </Button>
            <Button variant="contain" size="medium" color={'primary'}>
              Primary
            </Button>
            <Button variant="contain" size="large" color={'primary'}>
              Secondary
            </Button>
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-bold mb-2">OUTLINE</p>
        <div className="flex flex-col gap-4 outline-dashed outline-1 outline-[#D8DDE1] rounded-2xl p-5">
          <div className="flex gap-4 items-center">
            <p className="text-base font-semibold mb-0 w-12">Color </p>
            <Button variant="outline" size="medium" color={'default'}>
              Default
            </Button>
            <Button variant="outline" size="medium" color={'primary'}>
              Primary
            </Button>
            <Button variant="outline" size="medium" color={'secondary'}>
              Secondary
            </Button>
            <Button variant="outline" size="medium" color={'success'}>
              Success
            </Button>
            <Button variant="outline" size="medium" color={'info'}>
              Info
            </Button>
            <Button variant="outline" size="medium" color={'error'}>
              Error
            </Button>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-base font-semibold mb-0 w-12">Disable </p>
            <Button variant="outline" size="medium" color={'default'} disable>
              Default
            </Button>
            <Button variant="outline" size="medium" color={'primary'} disable>
              Primary
            </Button>
            <Button variant="outline" size="medium" color={'secondary'} disable>
              Secondary
            </Button>
            <Button variant="outline" size="medium" color={'success'} disable>
              Success
            </Button>
            <Button variant="outline" size="medium" color={'info'} disable>
              Info
            </Button>
            <Button variant="outline" size="medium" color={'error'} disable>
              Error
            </Button>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-base font-semibold mb-0 w-12">Size </p>
            <Button variant="outline" size="small" color={'primary'}>
              Small
            </Button>
            <Button variant="outline" size="medium" color={'primary'}>
              Medium
            </Button>
            <Button variant="outline" size="large" color={'primary'}>
              Large
            </Button>
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-bold mb-2">TEXT</p>
        <div className="flex flex-col gap-4 outline-dashed outline-1 outline-[#D8DDE1] rounded-2xl p-5">
          <div className="flex gap-4 items-center">
            <p className="text-base font-semibold mb-0 w-12">Color </p>
            <Button variant="text" size="medium" color={'default'}>
              Default
            </Button>
            <Button variant="text" size="medium" color={'primary'}>
              Primary
            </Button>
            <Button variant="text" size="medium" color={'secondary'}>
              Secondary
            </Button>
            <Button variant="text" size="medium" color={'success'}>
              Success
            </Button>
            <Button variant="text" size="medium" color={'info'}>
              Info
            </Button>
            <Button variant="text" size="medium" color={'error'}>
              Error
            </Button>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-base font-semibold mb-0 w-12">Disable </p>
            <Button variant="text" size="medium" color={'default'} disable>
              Default
            </Button>
            <Button variant="text" size="medium" color={'primary'} disable>
              Primary
            </Button>
            <Button variant="text" size="medium" color={'secondary'} disable>
              Secondary
            </Button>
            <Button variant="text" size="medium" color={'success'} disable>
              Success
            </Button>
            <Button variant="text" size="medium" color={'info'} disable>
              Info
            </Button>
            <Button variant="text" size="medium" color={'error'} disable>
              Error
            </Button>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-base font-semibold mb-0 w-12">Size </p>
            <Button variant="text" size="small" color={'primary'}>
              Small
            </Button>
            <Button variant="text" size="medium" color={'primary'}>
              Medium
            </Button>
            <Button variant="text" size="large" color={'primary'}>
              Large
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {};
