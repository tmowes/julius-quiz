import styled, { css } from 'styled-components';
import { db } from '~/data';
import { BackgroundImageProps } from './types';

export const BackgroundImage = styled.div<BackgroundImageProps>`
  ${({ backgroundImage, theme: { colors } }) => css`
    flex: 1;
    width: 100%;
    color: ${colors.orange};
    background-image: url(${db.bg});
    background-image: url(${backgroundImage});
    background-color: ${colors.black};
    background-position: center;
    background-size: cover;
    @media screen and (max-width: 500px) {
      background-image: none;
      &:after {
        content: '';
        background-size: cover;
        background-position: center;
        background-image: linear-gradient(transparent, ${colors.black}), url(${backgroundImage});
        display: block;
        width: 100%;
        height: 210px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
      }
      *:first-child {
        position: relative;
        z-index: 10;
      }
    }
  `}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 35rem;
  padding-top: 4.8rem;
  margin: auto 10%;
`;

export const Widget = styled.header`
  ${({ theme: { colors } }) => css`
    padding: 2.4rem 3.2rem;
    background: ${`${colors.black}80`};
    border: 1px solid ${colors.orange};
    border-radius: 0.8rem;
    margin: 2.4rem 0;
    overflow: hidden;
    & > *:first-child {
      margin-top: 0;
    }
    & > *:last-child {
      margin-bottom: 0;
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme: { colors } }) => css`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    color: ${colors.orange};
  `}
`;

export const Text = styled.p`
  ${({ theme: { colors } }) => css`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1;
    color: ${colors.orange};
  `}
`;
