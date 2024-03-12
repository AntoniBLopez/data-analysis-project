import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';

import { SidenavComponent } from './sidenav.component';

const meta: Meta<SidenavComponent> = {
  title: 'Components/Sidenav',
  component: SidenavComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
        providers: [provideAnimations()],
      }),
  ],
  argTypes: {
    isDarkTheme: { control: 'boolean' }
  },
};

export default meta;

type Story = StoryObj<SidenavComponent>;

// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };
export const Primary: Story = {
  render: () => ({
    props: {
      label: 'SidenavComponent',
      primary: true,
    },
  }),
};
