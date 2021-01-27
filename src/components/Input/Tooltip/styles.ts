import { FiAlertCircle } from 'react-icons/fi';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    position: relative;
    span {
      width: 1.6rem;
      background: ${colors.orange};
      padding: 0.8rem;
      border-radius: 0.4rem;
      font-size: 1.4rem;
      font-weight: 500;
      opacity: 0;
      transition: opacity 0.4s;
      visibility: hidden;
      position: absolute;
      bottom: calc(100% + 1rem);
      left: 50%;
      transform: translateX(-50%);
      color: ${colors.inputs};
      &::before {
        content: '';
        border-style: solid;
        border-color: ${colors.orange} ${colors.transparent};
        border-width: 0.6rem 0.6rem 0;
        top: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &:hover span {
      opacity: 1;
      visibility: visible;
    }
  `}
`;

export const ErrorIcon = styled(FiAlertCircle)`
  color: ${({ theme }) => theme.colors.error};
`;
