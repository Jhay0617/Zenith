import styled from "styled-components";
import { device } from "./Theme";

export const SummaryGrid = styled.section`
  display: grid;
  gap: 20px;
  padding: 0 20px;

  margin-top: -40px;
  grid-template-columns: 1fr;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    max-width: 1000px;
    margin: -60px auto 0;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1.5fr;
    max-width: 1200px;
    align-items: center;
    margin: -60px auto 0;
  }
`;

export const SummaryCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  padding: 30px;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.glassBorder};
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: "";
    position: absolute;
    top: -20px;
    right: -20px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${({ type }) => (type === "income" ? "#10b981" : "#f43f5e")};
    filter: blur(40px);
    opacity: 0.15;
  }

  h3 {
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.text};
    opacity: 0.6;
  }

  p {
    font-size: 1.8rem;
    font-weight: 800;
    color: ${({ type }) => (type === "income" ? "#10b981" : "#f43f5e")};
  }
`;
