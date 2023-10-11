import {combineReducers} from 'redux';
// import userSlice from '../features/user/userSlice';
// import {authApi} from '../services/auth/authApi';
// import {brandApi} from '../services/brands/brandApi';
// import {categoriesApi} from '../services/categories/categoriesApi';
// import {itemApi} from '../services/items/itemApi';
// import {customersApi} from '../services/customers/customersApi';
// import {suppliersApi} from '../services/suppliers/suppliersApi';
// import {companyApi} from '../services/company/companyApi';
// import {stockApi} from '../services/stocks/stockApi';
// import commonSlice from '../features/common/commonSlice';
// import {banksApi} from '../services/banks/banksApi';
// import {purchasesApi} from '../services/purchases/purchasesApi';
// import messageSlice from '../features/message/messageSlice';
// import purchaseSlice from '../features/purchase/purchaseSlice';
// import {expensesApi} from '../services/expenses/expensesApi';
// import {paymentApi} from '../services/payments/paymentApi';
// import {branchApi} from '../services/branch/branchApi';
// import {reportsApi} from '../services/reports/reportsApi';
// import accountsSlice from '../features/accounts/accountsSlice';
// import posSlice from '../features/pos/posSlice';
// import {salesApi} from '../services/sales/salesApi';
// import {dashboardApi} from '../services/dashboard/dashboardApi';
// import {departmentApi} from '../services/htm/department/departmentApi';
// import {employeeApi} from '../services/htm/employee/employeeApi';
// import {transactionApi} from '../services/transactions/transactionsApi';

const rootReducer = combineReducers({
  // user: userSlice,
  // common: commonSlice,
  // message: messageSlice,
  // purchase: purchaseSlice,
  // pos: posSlice,
  // accounts: accountsSlice,
  // [authApi.reducerPath]: authApi.reducer,
  // [brandApi.reducerPath]: brandApi.reducer,
  // [categoriesApi.reducerPath]: categoriesApi.reducer,
  // [itemApi.reducerPath]: itemApi.reducer,
  // [customersApi.reducerPath]: customersApi.reducer,
  // [suppliersApi.reducerPath]: suppliersApi.reducer,
  // [companyApi.reducerPath]: companyApi.reducer,
  // [stockApi.reducerPath]: stockApi.reducer,
  // [banksApi.reducerPath]: banksApi.reducer,
  // [purchasesApi.reducerPath]: purchasesApi.reducer,
  // [salesApi.reducerPath]: salesApi.reducer,
  // [expensesApi.reducerPath]: expensesApi.reducer,
  // [paymentApi.reducerPath]: paymentApi.reducer,
  // [branchApi.reducerPath]: branchApi.reducer,
  // [dashboardApi.reducerPath]: dashboardApi.reducer,
  // [departmentApi.reducerPath]: departmentApi.reducer,
  // [employeeApi.reducerPath]: employeeApi.reducer,
  // [reportsApi.reducerPath]: reportsApi.reducer,
  // [transactionApi.reducerPath]: transactionApi.reducer,
});

export const rootMiddlewares = [
  // authApi.middleware,
  // brandApi.middleware,
  // categoriesApi.middleware,
  // itemApi.middleware,
  // customersApi.middleware,
  // suppliersApi.middleware,
  // companyApi.middleware,
  // stockApi.middleware,
  // banksApi.middleware,
  // purchasesApi.middleware,
  // salesApi.middleware,
  // expensesApi.middleware,
  // paymentApi.middleware,
  // branchApi.middleware,
  // dashboardApi.middleware,
  // departmentApi.middleware,
  // employeeApi.middleware,
  // reportsApi.middleware,
  // transactionApi.middleware,
];

export default rootReducer;
