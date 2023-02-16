import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { rows, columns } from './const/tableValues';

export default function DataTable({tableFilter}) {
  let rowView = rows;
  let categoryToView = {
    0: 'All',
    1: 'Recent',
    2: 'Win',
    3: 'Loss'
  }

  const updateDataView = () => {
    rowView = rows.filter(row =>
      categoryToView[tableFilter] === 'All' || row.status === categoryToView[tableFilter]
    )

  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      {updateDataView()}
      <DataGrid
        rows={rowView}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // TODO: Future functionality - allow user to view/edit specific bets
        // checkboxSelection
        // onSelectionModelChange={(ids) => handleBetClick(ids)}
      />
    </div>
  );
}