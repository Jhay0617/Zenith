import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import styled from "styled-components";

const ChartWrapper = styled.div`
  width: 100%;
  height: 350px;
  background: ${({ theme }) => theme.cardBackground};
  padding: 24px;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.glassBorder};
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h3`
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
  opacity: 0.6;
`;

// Lively 2025 Palette: Indigo, Emerald, Rose, Amber, Cyan
const COLORS = ["#6366f1", "#10b981", "#f43f5e", "#f59e0b", "#06b6d4"];

function AnalyticsChart({ data }) {
  return (
    <ChartWrapper>
      <Title>Spending Breakdown</Title>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="45%"
            innerRadius={70} // Creates the Donut hole
            outerRadius={90}
            paddingAngle={8} // Space between slices for "Lively" feel
            dataKey="value"
            stroke="none" // Removes the ugly white border
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              borderRadius: "16px",
              border: "none",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              padding: "10px 15px",
            }}
          />
          <Legend iconType="circle" verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

export default AnalyticsChart;
