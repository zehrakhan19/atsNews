export const DEFAULT_ACCOUNT_GROUPS = {
  primary: {
    groupName: 'primary',
    underGroup: null
  },
  IndirectExpenses: {
    groupName: 'Indirect Expenses',
    underGroup: 'primary'
  },
  IndirectIncomes: {
    groupName: 'Indirect Incomes',
    underGroup: 'primary'
  },
  DirectExpenses: {
    groupName: 'Direct Expenses',
    underGroup: 'primary'
  },
  DirectIncomes: {
    groupName: 'Direct Incomes',
    underGroup: 'primary'
  },
  PurchaseAccounts: {
    groupName: 'Purchase Accounts',
    underGroup: 'primary'
  },
  SalesAccounts: {
    groupName: 'Sales Accounts',
    underGroup: 'primary'
  },
  SuspenseAccounts: {
    groupName: 'Suspense A/c',
    underGroup: 'primary'
  },
  MiscExpensesASSET: {
    groupName: 'Misc.Expenses(ASSET)',
    underGroup: 'primary'
  },
  BranchDivisions: {
    groupName: 'Branch/Divisions',
    underGroup: 'primary'
  },
  CurrentAssets: {
    groupName: 'Current Assets',
    underGroup: 'primary'
  },
  Investment: {
    groupName: 'Investment',
    underGroup: 'primary'
  },
  FixedAssets: {
    groupName: 'Fixed Assets',
    underGroup: 'primary'
  },
  CurrentLiabilities: {
    groupName: 'Current Liabilities',
    underGroup: 'primary'
  },
  LoansLiability: {
    groupName: 'Loans(Liability)',
    underGroup: 'primary'
  },
  CapitalAccount: {
    groupName: 'Capital Account',
    underGroup: 'primary'
  },
  UnsecuredLoans: {
    groupName: 'Unsecured Loans',
    underGroup: 'Loans(Liability)'
  },
  SecuredLoans: {
    groupName: 'Secured Loans',
    underGroup: 'Loans(Liability)'
  },
  BankODLoans: {
    groupName: 'Bank OD A/c',
    underGroup: 'Loans(Liability)'
  },
  SundryCreditors: {
    groupName: 'Sundry Creditors',
    underGroup: 'Current Liabilities'
  },
  Provisions: {
    groupName: 'Provisions',
    underGroup: 'Current Liabilities'
  },
  DutiesTaxes: {
    groupName: 'Duties & Taxes',
    underGroup: 'Current Liabilities'
  },
  BankAccounts: {
    groupName: 'Bank Accounts',
    underGroup: 'Current Assets'
  },
  CashInHand: {
    groupName: 'Cash-in-hand',
    underGroup: 'Current Assets'
  },
  SundryDebtors: {
    groupName: 'Sundry Debtors',
    underGroup: 'Current Assets'
  },
  LoansAdvancesAsset: {
    groupName: 'Loans & Advances(Asset)',
    underGroup: 'Current Assets'
  },
  DepositsAsset: {
    groupName: 'Deposits(Asset)',
    underGroup: 'Current Assets'
  },
  StockInHand: {
    groupName: 'Stock-in-hand',
    underGroup: 'Current Assets'
  },
  ReservesSurplus: {
    groupName: 'Reserves & Surplus',
    underGroup: 'Capital Account'
  },
  DigitalAccounts: {
    groupName: 'Digital Payment',
    underGroup: 'Bank Accounts'
  }
} as const;
