import styled from "styled-components";
import { device } from "./Theme";

export const HeroWrapper = styled.section`
  width: 100%;
  padding: 40px 20px;
  background: ${({ theme }) => theme.heroGradient}; /* Indigo to Purple */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 30px 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media ${device.tablet} {
    padding: 80px 20px;
    border-radius: 0 0 50px 50px;
  }
`;

export const BalanceCard = styled.div`
  background: ${({ theme }) => theme.glassBg}; /* Semi-transparent */
  backdrop-filter: blur(15px); /* Professional 2025 Glass Effect */
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid ${({ theme }) => theme.glassBorder};
  padding: 30px 20px;
  border-radius: 24px;
  text-align: center;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);

  @media ${device.tablet} {
    padding: 50px;
    max-width: 600px;
  }
`;

export const Label = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.text};
  opacity: 0.6;
`;

export const MainBalance = styled.h1`
  font-size: 2.5rem; /* Mobile Size */
  font-weight: 800;
  margin: 10px 0;
  color: ${({ theme }) => theme.text};
  letter-spacing: -1px;

  @media ${device.tablet} {
    font-size: 4rem; /* Desktop Size */
  }
`;

export const DateBadge = styled.div`
  display: inline-block;
  padding: 6px 16px;
  background: ${({ theme }) => theme.accent};
  color: white;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-top: 15px;
`;
