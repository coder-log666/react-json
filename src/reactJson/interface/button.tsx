export interface Button {
    type: 'submit' | 'button' | 'reset';
    label?: string;
    icon?: string;
    size?: string;
    disabled?: boolean;
    className?: string;
  }