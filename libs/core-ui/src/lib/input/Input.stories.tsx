import type { Meta, ComponentStory } from '@storybook/react';
import { Input } from './input';
import { Icon } from '../icon/icon';
export default {
  component: Input,
  title: 'Widgets/Input',
} as Meta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-lg font-bold mb-2">OUTLINETED</p>
        <div className="flex flex-col gap-4 outline-dashed outline-1 outline-[#D8DDE1] rounded-2xl p-5">
          <div className="flex gap-4 items-center w-[800px]">
            <p className="text-base font-semibold mb-0 w-12 max-w-[100px]">States </p>
            <Input label="label" />
            <Input label="label 2" defaultValue={'123'} />
          </div>
          <div className="flex gap-4 items-center w-[400px]">
            <p className="text-base font-semibold mb-0 w-12 max-w-[100px]">Disable </p>
            <Input label="label 3" disable />
          </div>
          <div className="flex gap-4 items-center w-[800px]">
            <p className="text-base font-semibold mb-0 w-12 max-w-[100px]">Size </p>
            <Input label="small" size="small" />
            <Input label="medium" size="medium" />
          </div>
          <div className="flex flex-row gap-4 items-center w-[1200px]">
            <p className="text-base font-semibold mb-0 w-12 max-w-[100px]" >
              Prefix and Subfix{' '}
            </p>
            <Input label="Email" iconPrefix={<Icon name="ic-email" />} />
            <Input label="Name" iconSuffix={<Icon name="ic-clear" />} />
            <Input
              label="Search"
              iconPrefix={<Icon name="ic-search" />}
              iconSuffix={<Icon name="ic-clear" />}
            />
          </div>
          <div className="flex flex-row gap-4 items-center w-[400px]">
            <p className="text-base font-semibold mb-0 w-12 max-w-[100px]" >
             Error 
            </p>
            <Input label="Error" error={true} />
          
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-bold mb-2">FILLED</p>
        <div className="flex flex-col gap-4 outline-dashed outline-1 outline-[#D8DDE1] rounded-2xl p-5">
          <div className="flex gap-4 items-center">
            <p className="text-base font-semibold mb-0 w-12">Color </p>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-base font-semibold mb-0 w-12">Disable </p>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-base font-semibold mb-0 w-12">Size </p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg font-bold mb-2">STANDARD</p>
        <div className="flex flex-col gap-4 outline-dashed outline-1 outline-[#D8DDE1] rounded-2xl p-5">
          <div className="flex gap-4 items-center">
            <p className="text-base font-semibold mb-0 w-12">Color </p>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-base font-semibold mb-0 w-12">Disable </p>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-base font-semibold mb-0 w-12">Size </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {};
