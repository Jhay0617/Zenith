export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export const calculateNetAmount = (data) => {
  return data.reduce((acc, sum) => acc + sum, 0);
};

export const totalAmount = (data) => {
  const reducedValue = calculateNetAmount(data.map((info) => info.amount));

  return formatCurrency(reducedValue);
};
export const getFinancialSummary = (data) => {
  const incomeOnly = calculateNetAmount(
    data
      .filter((transac) => transac.type === "income")
      .map((data) => data.amount)
  );
  const expenseOnly = calculateNetAmount(
    data
      .filter((transac) => transac.type === "expense")
      .map((data) => data.amount)
  );

  return { income: incomeOnly, expense: expenseOnly };
};

export const transformApiData = (response) => {
  return response.map((data) => {
    const { id, title } = data;

    const newData = {
      amount: id,
      description: title,
      type: id % 2 === 0 ? "income" : "expense",
    };

    return newData;
  });
};
export const sortByDate = (data) => {
  const originalData = [...data];

  return originalData.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
};

export const searchTransactions = (data, query) => {
  const lowQuery = query.toLowerCase();

  return data.filter((info) =>
    info.description.toLowerCase().includes(lowQuery)
  );
};

export const filterByType = (data, type) => {
  if (type === "all") {
    return data;
  } else {
    return data.filter((info) => info.type === type);
  }
};

export const getDisplayData = (data, type, query) => {
  const step1 = filterByType(data, type);
  const step2 = searchTransactions(step1, query);
  return sortByDate(step2);
};
export const getFormattedList = (data) => {
  return data.map((item) => {
    const type = item.type.toUpperCase();

    const currency = formatCurrency(item.amount);

    return `${type}: ${item.description} (${currency})`;
  });
};

export const getCategoryTotals = (data) => {
  return data.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 0;
    }

    acc[cur] += cur.amount;

    return acc;
  }, {});
};

export const getGoalProgress = (data) => {
  const percentage = (data.currentBalance / data.savingsGoal) * 100;

  return `${Math.round(percentage)}% of ${data.goalName} achieved!`;
};
