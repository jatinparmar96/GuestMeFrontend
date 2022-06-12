import { SubmitButtonContainer } from "./SubmitButton.styles";

/**
 * @type {React.FC<import('./SubmitButtonTypes').SubmitButtonProps>}
 */
export const SubmitButton = (props) => (
  <SubmitButtonContainer>{props.text}</SubmitButtonContainer>
);
