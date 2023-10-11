import * as React from 'react';
import { DataTable as ATSDataTable } from 'react-native-paper';
import { iOSUIKit } from 'react-native-typography';
interface Item {
  key: number;
  transactions: string;
  total: number;
  moneyIn: number;
  moneyOut: number;
}

export interface DataTableProps {
  tableHeaders: Array<string>;
  data: Array<Item>;
  pagination?: boolean;
}

export function DataTable({
  tableHeaders,
  pagination = false,
  data
}: DataTableProps) {
  const [page, setPage] = React.useState<number>(0);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(20);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, data.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <ATSDataTable>
      <ATSDataTable.Header>
        {tableHeaders?.map((header, idx) => (
          <ATSDataTable.Title
            key={idx}
            numeric={idx !== 0}
            textStyle={iOSUIKit.subheadEmphasized}
          >
            {header}
          </ATSDataTable.Title>
        ))}
      </ATSDataTable.Header>
      {data?.slice(from, to).map((item) => (
        <ATSDataTable.Row key={item?.key}>
          <ATSDataTable.Cell>{item?.transactions}</ATSDataTable.Cell>
          <ATSDataTable.Cell numeric>
            {item?.total && `₹ ${item?.total.toFixed(2)}`}
          </ATSDataTable.Cell>
          <ATSDataTable.Cell numeric>
            {item.moneyIn && `₹ ${item.moneyIn.toFixed(2)}`}
          </ATSDataTable.Cell>
          <ATSDataTable.Cell numeric textStyle={{ color: '#f86262' }}>
            {item?.moneyOut && `₹ ${item?.moneyOut.toFixed(2)}`}
          </ATSDataTable.Cell>
        </ATSDataTable.Row>
      ))}

      {pagination && (
        <ATSDataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(data.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${data.length}`}
          numberOfItemsPerPageList={[20]}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={'Rows per page'}
        />
      )}
    </ATSDataTable>
  );
}
export default DataTable;
