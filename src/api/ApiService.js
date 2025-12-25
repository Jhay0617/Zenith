export const safeFetch = async (URL) => {
  try {
    const res = await fetch(URL);
    if (!res.ok) throw new Error("failed to fetch the data");

    return await res.json();
  } catch (err) {
    throw new Error(err.message || "theres some error with the data");
  }
};
