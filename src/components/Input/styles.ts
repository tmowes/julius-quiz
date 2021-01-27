import styled, { css } from 'styled-components';
import { InputContainerProps } from './types';
import Tooltip from './Tooltip';

export const Container = styled.div<InputContainerProps>`
  ${({ isErrored, isFocused, isFilled, theme: { colors, radii } }) => css`
    display: flex;
    align-items: center;
    background: ${colors.inputs};
    border-radius: ${radii.default};
    padding: 1.6rem;
    width: 100%;
    border: 2px solid ${colors.inputs};
    color: ${colors.grayHard};
    & + div {
      margin-top: 0.8rem;
    }
    ${isErrored &&
    css`
      border-color: ${colors.error};
    `}
    ${isFocused &&
    css`
      color: ${colors.orange};
      border-color: ${colors.orange};
    `}
    ${isFilled &&
    css`
      color: ${colors.orange};
    `}
  `}
`;

export const CustomInput = styled.input`
  ${({ theme: { colors } }) => css`
    flex: 1;
    font-size: 1.6rem;
    border: 1px solid ${colors.orange};
    background: ${colors.inputs};
    background: ${colors.transparent};
    border-radius: 0.8rem;
    padding: 1.6rem;
    outline: 0;
    margin-bottom: 2.4rem;
    color: ${colors.white};
    border: 0;
    transition: background-color 0.2s;
    transition-delay: 9999s;
    &::placeholder {
      color: ${colors.grayHard};
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-transition: color 9999s ease-out, background-color 9999s ease-out;
      -webkit-transition-delay: 9999s;
    }
    svg {
      margin-right: 1.6rem;
    }
  `}
`;

export const Error = styled(Tooltip)`
  ${({ theme: { colors } }) => css`
    height: 2rem;
    margin-left:1.6rem;
    svg {
      margin: 0;
    }
    span {
      background: ${colors.error};
      color: ${colors.white};
      &::before {
        border-color: ${colors.error}; transparent;
      }
    }
  `}
`;
