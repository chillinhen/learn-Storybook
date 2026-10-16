// src/stories/KursButton.stories.jsx
import { KursButton } from './KursButton';

export default {
  title: 'Komponenten/KursButton',
  component: KursButton,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
  },
};

export const Primaer = { args: { label: 'Kurs buchen', variant: 'primary' } };
export const Sekundaer = { args: { label: 'Mehr erfahren', variant: 'secondary' } };
export const Ausgebucht = { args: { label: 'Ausgebucht', disabled: true } };