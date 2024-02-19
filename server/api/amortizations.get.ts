import { amortizations } from "../sampleData/amortizations";
import { Column } from "@/types";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  return await fakeApiCall(query);
});

const fakeApiCall = (query: any) => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(sortedAmortizations(query.orderBy, query.direction));
    }, Math.random() * 200 + 100);
  });
};

const sortedAmortizations = (column: Column, direction: 'asc' | 'desc') => {
  return amortizations.sort((a, b) => {
    if (a[column] > b[column]) {
      return direction === 'asc' ? 1 : -1;
    }
    if (a[column] < b[column]) {
      return direction === 'asc' ? -1 : 1;
    }
    return 0;
  });
}
