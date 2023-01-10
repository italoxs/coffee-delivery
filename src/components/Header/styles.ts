import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors["base-background"]};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.div<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0 0.5rem;
  position: relative;

  min-width: 2.3rem;
  height: 2.3rem;

  border: none;
  border-radius: 6px;
  font-size: ${props => props.theme.textSizes['text-regular-s']};
  cursor: inherit;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${({theme}) => theme.colors["base-white"]};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }

  ${props => css`
    background: ${props.theme.colors[`brand-${props.variant}-light`]};
    color: ${props.theme.colors[`brand-${props.variant}-dark`]};

    span {
      background: ${props.theme.colors[`brand-${props.variant}-dark`]};
    }
  `}

  ${({ variant, theme }) => variant === 'purple' && css`
    svg {
      color: ${theme.colors[`brand-purple`]};
    }
  `}
`;