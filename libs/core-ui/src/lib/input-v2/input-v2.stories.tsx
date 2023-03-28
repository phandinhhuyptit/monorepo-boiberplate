import Icon from '../icon/icon';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './input-v2';

export default {
  component: Input,
  title: 'WIDGETS V2/Input',
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  return (
    <div className="grid grid-cols-5 gap-6">
      <div></div>
      <div>No icon</div>
      <div>Left icon</div>
      <div>Both icon</div>
      <div>Right icon</div>
      <div>Default</div>
      <div>
        <Input placeholder="Input text" />
      </div>
      <div>
        <Input
          placeholder="Input text"
          iconPrefix={<Icon name="ic-search" />}
        />
      </div>
      <div>
        <Input
          placeholder="Input text"
          iconPrefix={<Icon name="ic-search" />}
          iconSuffix={<Icon name="ic-circle-x" />}
        />
      </div>
      <div>
        <Input placeholder="Input text" iconSuffix={<Icon name="ic-enter" />} />
      </div>
      <div>Small</div>
      <div>
        <Input placeholder="Input text" inputSize="small" />
      </div>
      <div>
        <Input
          placeholder="Input text"
          inputSize="small"
          iconPrefix={<Icon name="ic-search" />}
        />
      </div>
      <div>
        <Input
          placeholder="Input text"
          inputSize="small"
          iconPrefix={<Icon name="ic-search" />}
          iconSuffix={<Icon name="ic-circle-x" />}
        />
      </div>
      <div>
        <Input
          placeholder="Input text"
          inputSize="small"
          iconSuffix={<Icon name="ic-enter" />}
        />
      </div>
      <div>Disabled</div>
      <div>
        <Input placeholder="Input text" disabled />
      </div>
      <div>
        <Input
          placeholder="Input text"
          iconPrefix={<Icon name="ic-search" />}
          disabled
        />
      </div>
      <div>
        <Input
          placeholder="Input text"
          iconPrefix={<Icon name="ic-search" />}
          iconSuffix={<Icon name="ic-circle-x" />}
          disabled
        />
      </div>
      <div>
        <Input
          placeholder="Input text"
          iconSuffix={<Icon name="ic-enter" />}
          disabled
        />
      </div>
      <div>Secondary</div>
      <div>
        <Input placeholder="Input text" variant="secondary" />
      </div>
      <div>
        <Input
          placeholder="Input text"
          iconPrefix={<Icon name="ic-search" />}
          variant="secondary"
        />
      </div>
      <div>
        <Input
          placeholder="Input text"
          iconPrefix={<Icon name="ic-search" />}
          iconSuffix={<Icon name="ic-circle-x" />}
          variant="secondary"
        />
      </div>
      <div>
        <Input
          placeholder="Input text"
          iconSuffix={<Icon name="ic-enter" />}
          variant="secondary"
        />
      </div>
      <div>Error</div>
      <div>
        <Input placeholder="Input text" error />
      </div>
      <div>
        <Input
          placeholder="Input text"
          iconPrefix={<Icon name="ic-search" />}
          error
        />
      </div>
      <div>
        <Input
          placeholder="Input text"
          iconPrefix={<Icon name="ic-search" />}
          iconSuffix={<Icon name="ic-circle-x" />}
          error
        />
      </div>
      <div>
        <Input
          placeholder="Input text"
          iconSuffix={<Icon name="ic-enter" />}
          error
        />
      </div>
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  placeholder: 'Enter a wallet',
};
