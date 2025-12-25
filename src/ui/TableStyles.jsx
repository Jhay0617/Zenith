import styled from "styled-components";

export const TableContainer = styled.section`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.glassBorder};
  overflow: hidden; /* Keeps the border-radius clean */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  margin-top: 30px;
`;

export const TableHeader = styled.div`
  display: grid;
  /* Description, Category/Type, Date, Amount */
  grid-template-columns: 2fr 1fr 1fr 1.2fr;
  padding: 20px;
  background: ${({ theme }) => theme.background};
  border-bottom: 2px solid ${({ theme }) => theme.glassBorder};

  span {
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.6;
  }

  @media (max-width: 600px) {
    display: none; /* Hide headers on mobile for a "card-like" feel */
  }
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.2fr;
  padding: 18px 20px;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.glassBorder};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.glassBg};
    transform: translateX(5px); /* Lively "Slide" effect */
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr; /* Stack into 2 columns on mobile */
    gap: 10px;
  }
`;

export const Description = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

export const TypeTag = styled.span`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  width: fit-content;

  /* Logic: Dynamic colors based on type prop */
  background: ${({ type }) => (type === "income" ? "#dcfce7" : "#fee2e2")};
  color: ${({ type }) => (type === "income" ? "#10b981" : "#f43f5e")};
`;

export const AmountText = styled.span`
  font-family: "JetBrains Mono", monospace; /* Professional for numbers */
  font-weight: 700;
  text-align: right;
  color: ${({ type, theme }) => (type === "income" ? "#10b981" : theme.text)};
`;
