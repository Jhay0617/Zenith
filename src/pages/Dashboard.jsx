import { useDispatch, useSelector } from "react-redux";
import Hero from "../ui/Hero";
import { fetchAllTransactions, getFinanceData } from "../store/financeSlice";
import { useEffect } from "react";
import { DashboardContainer } from "../ui/DashboardUi";
import Table from "../ui/Table";
import { SummaryCard, SummaryGrid } from "../ui/Summary";
import {
  formatChartData,
  formatCurrency,
  getCategoryTotals,
  getFinancialSummary,
} from "../utils/helpers";
import AnalyticsChart from "../ui/AnalyticsChart";
import { motion as Motion } from "motion/react";
import { ToggleButton } from "../ui/ToggleButton";

function Dashboard({ currentTheme, toggleTheme }) {
  const dispatch = useDispatch();
  const { transactions, status, error } = useSelector(getFinanceData);
  const summary = getFinancialSummary(transactions);
  const total = getCategoryTotals(transactions);

  const chartData = formatChartData(total);
  useEffect(() => {
    if (status === "idle") {
      console.log("2. Dispatching fetch...");
      dispatch(fetchAllTransactions());
    }
  }, [status, dispatch]);

  if (status === "loading")
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        Loading Zenith Dashboard...
      </div>
    );
  if (status === "failed")
    return <div style={{ color: "red" }}>Error: {error}</div>;
  return (
    <DashboardContainer>
      <Hero />

      <SummaryGrid>
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SummaryCard type={"income"}>
            {" "}
            <h3>Total Income</h3>
            <p>{formatCurrency(summary.income)}</p>
          </SummaryCard>
          <SummaryCard type={"expense"}>
            {" "}
            <h3>Total Expense</h3>
            <p>{formatCurrency(summary.expense)}</p>
          </SummaryCard>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ padding: "0 20px" }}
        >
          {chartData.length > 0 ? (
            <AnalyticsChart data={chartData} />
          ) : (
            <p>No transactions to visualize yet.</p>
          )}
        </Motion.div>
      </SummaryGrid>
      <ToggleButton onClick={toggleTheme}>
        {currentTheme === "light" ? "🌙" : "☀️"}
      </ToggleButton>
      <Table />
    </DashboardContainer>
  );
}

export default Dashboard;
