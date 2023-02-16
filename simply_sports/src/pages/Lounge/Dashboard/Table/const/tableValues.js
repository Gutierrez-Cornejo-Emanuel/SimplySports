const columns = [
  { field: 'id', headerName: 'ID', width: 70},
  { field: 'date', headerName: 'Date', width:100},
  { field: 'match', headerName: 'Match', width:150, sortable: false},
  { field: 'status', headerName: 'Status', width:70, sortable: false},
  { field: 'amount', headerName: 'Amount', width:70, type: 'number'},  
]

const rows = [
  { id:0, date:'01/30/23', match:'Team 1 vs Team 2', status:'Win', amount:1234},
  { id:1, date:'01/30/23', match:'Team 3 vs Team 4', status:'Loss', amount:1234}
]


  export { columns, rows }