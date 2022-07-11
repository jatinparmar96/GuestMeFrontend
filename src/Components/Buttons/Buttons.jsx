//@ts-check
import {
  RegisterPageLinkButtonContainer,
  RequestButtonContainer,
  RequestButtonContainerWide,
  SaveButtonContainer,
  SubmitButtonContainer,
} from './Buttons.styles';

import React from 'react';
/**
 * @type {React.FC<import('./ButtonsTypes.d').SubmitButtonProps>}
 */
export const SubmitButton = (props) => (
  <SubmitButtonContainer onClick={props.onClick}>
    {props.text}
  </SubmitButtonContainer>
);

export const SaveButton = (props) => (
  <SaveButtonContainer onClick={props.onClick}>
    {props.text}
  </SaveButtonContainer>
);

export const RequestButton = (props) => (
  <RequestButtonContainer onClick={props.onClick}>
    {props.text}
  </RequestButtonContainer>
);

export const RequestButtonWide = (props) => (
  <RequestButtonContainerWide onClick={props.onClick}>
    {props.text}
  </RequestButtonContainerWide>
);

/**@type {React.FC<import('./ButtonsTypes.d').RegisterLinkButtonProps>} */
export const RegisterLinkButton = (props) => (
  <RegisterPageLinkButtonContainer to={props.to}>
    {props.text}
  </RegisterPageLinkButtonContainer>
);
