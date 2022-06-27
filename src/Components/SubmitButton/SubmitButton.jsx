import { RequestButtonContainer, SaveButtonContainer, SubmitButtonContainer } from './SubmitButton.styles';

/**
 * @type {React.FC<import('./SubmitButtonTypes').SubmitButtonProps>}
 */
export const SubmitButton = (props) => (
  <SubmitButtonContainer onClick={props.onClick}>
    {props.text}
  </SubmitButtonContainer>
);

export const SaveButton= (props) => (
  <SaveButtonContainer onClick={props.onClick}>
    {props.text}
  </SaveButtonContainer>
);

export const RequestButton= (props) => (
  <RequestButtonContainer onClick={props.onClick}>
    {props.text}
  </RequestButtonContainer>
);
