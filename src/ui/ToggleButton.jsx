import styled from "styled-components";

export const ToggleButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.accent};
  border: none;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;

  &:active {
    transform: scale(0.9);
  }
`;
