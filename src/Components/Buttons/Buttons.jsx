//@ts-check
import {
  ContactLinkButtonContainer,
  PrimaryButtonContainer,
  RegisterPageLinkButtonContainer,
  RequestButtonContainer,
  RequestButtonContainerMobile,
  RequestButtonContainerWide,
  RequestButtonContainerWideMobile,
  SaveButtonContainer,
  SaveButtonContainerMobile,
  SubmitButtonContainer
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
export const SaveButtonMobile = (props) => (
  <SaveButtonContainerMobile onClick={props.onClick}>
    {props.text}
  </SaveButtonContainerMobile>
);

export const RequestButton = (props) => (
  <RequestButtonContainer onClick={props.onClick}>
    {props.text}
  </RequestButtonContainer>
);

export const RequestButtonMobile = (props) => (
  <RequestButtonContainerMobile onClick={props.onClick}>
    {props.text}
  </RequestButtonContainerMobile>
);

export const RequestButtonWide = (props) => (
  <RequestButtonContainerWide onClick={props.onClick}>
    {props.text}
  </RequestButtonContainerWide>
);

export const RequestButtonWideMobile = (props) => (
  <RequestButtonContainerWideMobile onClick={props.onClick}>
    {props.text}
  </RequestButtonContainerWideMobile>
);

/**@type {React.FC<import('./ButtonsTypes.d').LinkButtonProps>} */
export const RegisterLinkButton = (props) => (
  <RegisterPageLinkButtonContainer to={props.to}>
    {props.text}
  </RegisterPageLinkButtonContainer>
);

/**@type {React.FC<import('./ButtonsTypes.d').LinkButtonProps>} */
export const ContactLinkButton = (props) => (
  <ContactLinkButtonContainer to={props.to}>
    {props.text}
  </ContactLinkButtonContainer>
);

/**@type {React.FC<JSX.IntrinsicElements['button'] & {text: string;}>} */
export const PrimaryButton = (props) => (
  <PrimaryButtonContainer>{props.text}</PrimaryButtonContainer>
);
