import * as Styled from "./TableStyles";
import { formatCurrency, sortByDate } from "../utils/helpers";
import { useSelector } from "react-redux";
import { getFinanceData } from "../store/financeSlice";

function Table() {
  const { transactions } = useSelector(getFinanceData);
  const sortedData = sortByDate(transactions);

  return (
    <Styled.TableContainer>
      <Styled.TableHeader>
        <span>Description</span>
        <span>Type</span>
        <span>Date</span>
        <span style={{ textAlign: "right" }}>Amount</span>
      </Styled.TableHeader>

      {sortedData.map((item) => (
        <Styled.TableRow key={item.id}>
          <Styled.Description>{item.description}</Styled.Description>

          <Styled.TypeTag type={item.type}>{item.type}</Styled.TypeTag>

          <span style={{ opacity: 0.6, fontSize: "0.9rem" }}>{item.date}</span>

          <Styled.AmountText type={item.type}>
            {item.type === "expense" ? "-" : "+"} {formatCurrency(item.amount)}
          </Styled.AmountText>
        </Styled.TableRow>
      ))}
    </Styled.TableContainer>
  );
}

export default Table;
