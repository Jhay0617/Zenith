import styled from "styled-components";
import { device } from "./Theme";

export const DashboardContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    padding: 40px;
  }
`;

export const SummarySection = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;
