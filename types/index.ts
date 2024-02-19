enum Column {
  schedule_date = 'schedule_date',
  state = 'state',
  amount = 'amount',
  project_id = 'project_id'
}

type Amortization = {
  schedule_date: string;
  state: 'paid' | 'pending';
  amount: number;
  project_id: number;
}


export { Column }

export type { Amortization }