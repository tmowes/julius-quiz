import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    background: ${`${colors.black}80`};
    border: 1px solid ${colors.orange};
    border-radius: 0.8rem;
    margin: 2.4rem 0;
    overflow: hidden;
  `}
`;

export const Header = styled.header`
  ${({ theme: { colors } }) => css`
    background: ${`${colors.orange}80`};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1.6rem 3.2rem;
  `}
`;

export const Content = styled.div`
  padding: 2.4rem 3.2rem;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;

export const Title = styled.h1`
  ${({ theme: { colors } }) => css`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    color: ${colors.white};
  `}
`;

export const Text = styled.p`
  ${({ theme: { colors } }) => css`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1;
    color: ${colors.white};
  `}
`;
