import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { rows, columns } from './const/tableValues';

export default function DataTable({dataView, betChoice}) {
  let rowView = rows;
  let categoryToView = {
    0: 'All',
    1: 'Active',
    2: 'Win',
    3: 'Loss'
  }

  const updateDataView = () => {
    rowView = rows.filter(row =>
      categoryToView[dataView] === 'All' || row.status === categoryToView[dataView]
    )

  }

  const handleBetClick = (ids) => {
    if (ids.length === 1) {
      betChoice(rows[ids - 1])
    } else {
      betChoice(999)
    }
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      {updateDataView()}
      <DataGrid
        rows={rowView}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(ids) => handleBetClick(ids)}
      />
    </div>
  );
}