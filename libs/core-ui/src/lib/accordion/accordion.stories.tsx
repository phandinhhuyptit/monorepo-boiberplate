import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from '../accordion/accordion';
import Icon from '../icon/icon';
export default {
  component: Accordion.Root,
  title: 'Widgets/Accordion',
} as ComponentMeta<typeof Accordion.Root>;

const Template: ComponentStory<typeof Accordion.Root> = ({
  name,
  multiple,
}) => {
  return (
    <div>
      <Accordion.Root multiple={multiple} name={name}>
        <Accordion.Item
          id="item1"
          header={<Accordion.Header id="item1" title={'Accordion Item'} />}
        >
          Donec id justo. Curabitur blandit mollis lacus. Vivamus quis mi. In ut
          quam vitae odio lacinia tincidunt. In consectetuer turpis ut velit.
        </Accordion.Item>
        <Accordion.Item
          id="item2"
          header={<Accordion.Header id="item2" title={'Accordion Item'} />}
        >
          Donec id justo. Curabitur blandit mollis lacus. Vivamus quis mi. In ut
          quam vitae odio lacinia tincidunt. In consectetuer turpis ut velit.
        </Accordion.Item>
        <Accordion.Item
          id="item3"
          header={<Accordion.Header id="item3" title={'Accordion Item'} />}
        >
          Donec id justo. Curabitur blandit mollis lacus. Vivamus quis mi. In ut
          quam vitae odio lacinia tincidunt. In consectetuer turpis ut velit.
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  multiple: false,
  name: 'accordion',
};
