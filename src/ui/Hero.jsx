import { useSelector } from "react-redux";
import { getFinanceData } from "../store/financeSlice";
import { totalAmount } from "../utils/helpers";
import * as Styles from "./HeroStyles";

function Hero() {
  const { transactions } = useSelector(getFinanceData);

  const formattedBalance = totalAmount(transactions);
  return (
    <Styles.HeroWrapper>
      <Styles.BalanceCard>
        <Styles.Label>Total Balance</Styles.Label>
        <Styles.MainBalance>{formattedBalance}</Styles.MainBalance>
        <Styles.DateBadge>December</Styles.DateBadge>
      </Styles.BalanceCard>
    </Styles.HeroWrapper>
  );
}

export default Hero;
