import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button-v2';

export default {
  component: Button,
  title: 'WIDGETS V2/Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      <div className="mb-6">
        <p>
          <strong className="text-6b6b6b">Default button</strong>
        </p>
        <div>
          <Button {...args}>{args.children}</Button>
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
          <Button inline>Default</Button>
        </div>
        <div>
          <Button inline disabled>
            Default
          </Button>
        </div>
        <div>
          <Button inline btnSize="small">
            Default
          </Button>
        </div>
        <div>
          <Button inline>Default</Button>
        </div>
        <div>
          <Button>Default</Button>
        </div>
        <strong>Primary</strong>
        <div>
          <Button inline variant="primary">
            Primary
          </Button>
        </div>
        <div>
          <Button inline disabled variant="primary">
            Primary
          </Button>
        </div>
        <div>
          <Button inline btnSize="small" variant="primary">
            Primary
          </Button>
        </div>
        <div>
          <Button inline variant="primary">
            Primary
          </Button>
        </div>
        <div>
          <Button variant="primary">Primary</Button>
        </div>
        <strong>Secondary</strong>
        <div>
          <Button inline variant="secondary">
            Secondary
          </Button>
        </div>
        <div>
          <Button inline disabled variant="secondary">
            Secondary
          </Button>
        </div>
        <div>
          <Button inline btnSize="small" variant="secondary">
            Secondary
          </Button>
        </div>
        <div>
          <Button inline variant="secondary">
            Secondary
          </Button>
        </div>
        <div>
          <Button variant="secondary">Secondary</Button>
        </div>
        <strong>Royal Blue</strong>
        <div>
          <Button inline variant="royal-blue">
            Royal Blue
          </Button>
        </div>
        <div>
          <Button inline disabled variant="royal-blue">
            Royal Blue
          </Button>
        </div>
        <div>
          <Button inline btnSize="small" variant="royal-blue">
            Royal Blue
          </Button>
        </div>
        <div>
          <Button inline variant="royal-blue">
            Royal Blue
          </Button>
        </div>
        <div>
          <Button variant="royal-blue">Royal Blue</Button>
        </div>
        <strong>Sea Green</strong>
        <div>
          <Button inline variant="sea-green">
            Sea Green
          </Button>
        </div>
        <div>
          <Button inline disabled variant="sea-green">
            Sea Green
          </Button>
        </div>
        <div>
          <Button inline btnSize="small" variant="sea-green">
            Sea Green
          </Button>
        </div>
        <div>
          <Button inline variant="sea-green">
            Sea Green
          </Button>
        </div>
        <div>
          <Button variant="sea-green">Sea Green</Button>
        </div>
        <strong>Turquoise</strong>
        <div>
          <Button inline variant="turquoise">
            Turquoise
          </Button>
        </div>
        <div>
          <Button inline disabled variant="turquoise">
            Turquoise
          </Button>
        </div>
        <div>
          <Button inline btnSize="small" variant="turquoise">
            Turquoise
          </Button>
        </div>
        <div>
          <Button inline variant="turquoise">
            Turquoise
          </Button>
        </div>
        <div>
          <Button variant="turquoise">Turquoise</Button>
        </div>
        <strong>Purple</strong>
        <div>
          <Button inline variant="purple">
            Purple
          </Button>
        </div>
        <div>
          <Button inline disabled variant="purple">
            Purple
          </Button>
        </div>
        <div>
          <Button inline btnSize="small" variant="purple">
            Purple
          </Button>
        </div>
        <div>
          <Button inline variant="purple">
            Purple
          </Button>
        </div>
        <div>
          <Button variant="purple">Purple</Button>
        </div>
        <strong>Red</strong>
        <div>
          <Button inline variant="red">
            Red
          </Button>
        </div>
        <div>
          <Button inline disabled variant="red">
            Red
          </Button>
        </div>
        <div>
          <Button inline btnSize="small" variant="red">
            Red
          </Button>
        </div>
        <div>
          <Button inline variant="red">
            Red
          </Button>
        </div>
        <div>
          <Button variant="red">Red</Button>
        </div>
        <strong>Yellow</strong>
        <div>
          <Button inline variant="yellow">
            Yellow
          </Button>
        </div>
        <div>
          <Button inline disabled variant="yellow">
            Yellow
          </Button>
        </div>
        <div>
          <Button inline btnSize="small" variant="yellow">
            Yellow
          </Button>
        </div>
        <div>
          <Button inline variant="yellow">
            Yellow
          </Button>
        </div>
        <div>
          <Button variant="yellow">Yellow</Button>
        </div>
      </div>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  children: 'Default button',
  element: 'button',
  btnSize: 'default',
  inline: true,
};
