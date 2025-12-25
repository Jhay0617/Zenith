import styled from "styled-components";

export const LivelyButton = styled.button`
  position: relative;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.accent};
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.4s ease;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.accent};
    transition: all 0.4s ease;
    z-index: -1;
  }

  &:hover {
    color: white;

    &::before {
      left: 0;
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;
