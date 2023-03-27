import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonOutline } from './button-outline';

export default {
  component: ButtonOutline,
  title: 'ButtonOutline',
} as ComponentMeta<typeof ButtonOutline>;

const Template: ComponentStory<typeof ButtonOutline> = (args) => {
  return (
    <>
      <div className="mb-6">
        <p>
          <strong className="text-6b6b6b">Default Button Outline</strong>
        </p>
        <div>
          <ButtonOutline {...args}>{args.children}</ButtonOutline>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-6">
        <strong>Variant</strong>
        <strong>Default/Hover</strong>
        <strong>Disabled</strong>
        <strong>Small size</strong>
        <strong>Large size</strong>
        <strong>Full width</strong>
        <strong>Default</strong>
        <div>
          <ButtonOutline inline>Default</ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline disabled>
            Default
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline btnSize="small">
            Default
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline>Default</ButtonOutline>
        </div>
        <div>
          <ButtonOutline>Default</ButtonOutline>
        </div>
        <strong>Primary</strong>
        <div>
          <ButtonOutline inline variant="primary">
            Primary
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline disabled variant="primary">
            Primary
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline btnSize="small" variant="primary">
            Primary
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline variant="primary">
            Primary
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline variant="primary">Primary</ButtonOutline>
        </div>
        <strong>Secondary</strong>
        <div>
          <ButtonOutline inline variant="secondary">
            Secondary
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline disabled variant="secondary">
            Secondary
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline btnSize="small" variant="secondary">
            Secondary
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline variant="secondary">
            Secondary
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline variant="secondary">Secondary</ButtonOutline>
        </div>
        <strong>Royal Blue</strong>
        <div>
          <ButtonOutline inline variant="royal-blue">
            Royal Blue
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline disabled variant="royal-blue">
            Royal Blue
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline btnSize="small" variant="royal-blue">
            Royal Blue
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline variant="royal-blue">
            Royal Blue
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline variant="royal-blue">Royal Blue</ButtonOutline>
        </div>
        <strong>Sea Green</strong>
        <div>
          <ButtonOutline inline variant="sea-green">
            Sea Green
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline disabled variant="sea-green">
            Sea Green
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline btnSize="small" variant="sea-green">
            Sea Green
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline variant="sea-green">
            Sea Green
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline variant="sea-green">Sea Green</ButtonOutline>
        </div>
        <strong>Turquoise</strong>
        <div>
          <ButtonOutline inline variant="turquoise">
            Turquoise
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline disabled variant="turquoise">
            Turquoise
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline btnSize="small" variant="turquoise">
            Turquoise
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline variant="turquoise">
            Turquoise
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline variant="turquoise">Turquoise</ButtonOutline>
        </div>
        <strong>Purple</strong>
        <div>
          <ButtonOutline inline variant="purple">
            Purple
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline disabled variant="purple">
            Purple
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline btnSize="small" variant="purple">
            Purple
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline variant="purple">
            Purple
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline variant="purple">Purple</ButtonOutline>
        </div>
        <strong>Yellow</strong>
        <div>
          <ButtonOutline inline variant="yellow">
            Yellow
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline disabled variant="yellow">
            Yellow
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline btnSize="small" variant="yellow">
            Yellow
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline variant="yellow">
            Yellow
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline variant="yellow">Yellow</ButtonOutline>
        </div>
        <strong>Red</strong>
        <div>
          <ButtonOutline inline variant="red">
            Red
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline disabled variant="red">
            Red
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline btnSize="small" variant="red">
            Red
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline inline variant="red">
            Red
          </ButtonOutline>
        </div>
        <div>
          <ButtonOutline variant="red">Red</ButtonOutline>
        </div>
      </div>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  children: 'Default Button Outline',
  element: 'button',
  btnSize: 'default',
  inline: true,
};
