import { transformApiData } from "../utils/helpers";

export const safeFetch = async (URL) => {
  try {
    const res = await fetch(URL);
    if (!res.ok) throw new Error("failed to fetch the data");
    const data = await res.json();

    return transformApiData(data);
  } catch (err) {
    throw new Error(err.message || "theres some error with the data");
  }
};
