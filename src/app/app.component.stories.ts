import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

const meta: Meta<AppComponent> = {
  title: 'Components/App',
  component: AppComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
        providers: [provideAnimations()],
      }),
  ],
  argTypes: {
    isDarkMode: { control: 'boolean' }
  },
};

export default meta;

type Story = StoryObj<AppComponent>;

// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };
export const Primary: Story = {
  render: () => ({
    props: {
      label: 'AppComponent',
      primary: true,
    },
  }),
};
