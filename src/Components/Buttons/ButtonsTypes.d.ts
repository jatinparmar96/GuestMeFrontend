export type SubmitButtonProps = JSX.IntrinsicElements['button'] & {
  text: string;
};

export type LinkButtonProps = JSX.IntrinsicElements['a'] & {
  text: string;
  to: string;
};
