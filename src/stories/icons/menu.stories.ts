import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';

import { MenuIconComponent } from './menu.component';

const meta: Meta<MenuIconComponent> = {
  title: 'Icons/Menu',
  component: MenuIconComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
        providers: [provideAnimations()],
      }),
  ],
  argTypes: {
    isDarkMode: { control: 'boolean' },
      label: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<MenuIconComponent>;

export const Primary: Story = {
  name: "I'm the primary text modfied",
  render: () => ({
    props: {
      // primary: true,
      label: 'menu',
      variant: {
        options: ['primary', 'secondary'],
        control: { type: 'radio' },
      },
    },
  }),
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};
