import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import UsersData from './UsersData';
import Switch from "@mui/material/Switch";
import { useState, useEffect } from 'react'
import axios from 'axios';
import AlertUser from '../AlertUser'

// import for actions 
import UserDrawer from '../UserDrawer';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const baseURL = 'https://62bb78d37bdbe01d529e13c5.mockapi.io/api/users';

// Builk Action Configuration
const bulkActionsConfig = [
  {
    value: 'activate',
    label: 'Activate User/s',
  },
  {
    value: 'deactivate',
    label: 'Deactivate User/s',
  },
  {
    value: 'reset',
    label: 'Reset Password/s',
  },
  {
    value: 'delete',
    label: 'Delete User/s',
  },
  {
    value: 'export',
    label: 'Export to (CSV, XLS, PDF)',
  },
];
function escapeRegExp(value: string): string {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
 
export default function UserDataTable() {
  const [updateFlag, setUpdateFlag] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedBulkAction, setSelectedBulkAction] = React.useState('');
  const [search, setSearch] = useState('');

const handleBulkActions = (e) => {
    setSelectedBulkAction(e.target.value);
    console.log(selectedBulkAction)
  };

let rows = tableData

//handlers
  const handleDoubleClick = (rows) => {
    console.log("Show Profile")
    console.log(rows)
}
// handle search / filter 
const handleSearch = () => {
  if(search === '' || search === undefined ) {
    initTable();
    return
  }
  const regex = new RegExp(`/(${search})/gi`);
  const searchResult = tableData.filter( row => row.firstName === search || row.lastName === search)
  setTableData(searchResult)
  //setUpdateFlag(!updateFlag)
}
// handle switch / single update 
const handleUpdate = async (id, activeState) => {
  await axios.put(baseURL + '/' + id, {active: activeState})
  .then(() => {
    setUpdateFlag(!updateFlag);   
  });
  //console.log("Update Response");
  //console.log(res.data)
}

// table headers
const columns = [
  { field: 'id', headerName: 'ID', description: "", sortable: false,  width: 20 },
  { field: 'role', headerName: 'Role', description: "", sortable: true,  width: 200 },
  { field: 'permission', headerName: 'Permission', description: "", sortable: true,  width: 130 },
  { field: 'username', headerName: 'Username', description: "", sortable: true,  width: 130 },
  { field: 'email', headerName: 'Email', description: "", sortable: true,  width: 200 },
  { field: 'firstName', headerName: 'First name', description: "", sortable: true,  width: 130 },
  { field: 'lastName', headerName: 'Last name', description: "", sortable: true,  width: 130 },
  { field: 'active', headerName: 'Active', description: "", sortable: true,  width: 60, 
  renderCell: (params) => {
    return (
        <div key={params.row.id}>
              <Switch 
                checked={params.row.active}
                onChange={() => handleUpdate(params.row.id, !params.row.active)}
                inputProps={{ 'aria-label': 'controlled' }} 
                color={ params.row.active ? "success" : "error" }
                /> 
         </div>
    );
 },},
  { field: 'regTime', headerName: 'Reg Time', description: "", sortable: true,  width: 130 },
  { field: 'loginTime', headerName: 'Login Time', description: "", sortable: true,  width: 130 },
  { field: 'expiresOn', headerName: 'Expires on', description: "", sortable: true,  width: 130 },
  ];

//handle single delete
  const handleDelete = async (id) => {
    await axios.delete(baseURL + '/' + id)
    .then(() => {
      setUpdateFlag(!updateFlag);
      console.log(res.data);
    });
    console.log("Deleted User with ID: " + id);
  }

// bulk action handlers
  const handleBulkActivate = async (rows, status) => {
    // loop through rows"
    const buildUrls = rows.map(row => {
      return [
        baseURL + "/" + row
      ]
    })

    const urls = buildUrls;

    await axios.all(urls.map(url => axios.put(url, {active: status})))
    .then(axios.spread(function (...res) {
      // all requests are now complete
      console.log(res);
      setUpdateFlag(!updateFlag);
    }));

    console.log("Activate Function");
  }

  const handleBulkDeactivate = async (rows, status) => {
    // loop trhough rows and update 
    const buildUrls = rows.map(row => {
      return [
        baseURL + "/" + row
      ]
    })

    const urls = buildUrls;

    await axios.all(urls.map(url => axios.put(url, {active: status})))
    .then(axios.spread(function (...res) {
      // all requests are now complete
      console.log(res);
      setUpdateFlag(!updateFlag);
    }));
    console.log("Deactivate Function")
  }

  const handleBulkReset = (rows) => {
    // loop through rows and delete
    console.log("Reset Function")
  }

  const handleBulkDelete = async (rows) => {
    // loop through rows and delete
    console.log("Delete Function")

    const buildUrls = rows.map(row => {
      return [
        baseURL + "/" + row
      ]
    })

    const urls = buildUrls;

    await axios.all(urls.map(url => axios.delete(url)))
    .then(axios.spread(function (...res) {
      // all requests are now complete
      console.log(res);
      setUpdateFlag(!updateFlag);
    }));
   
    console.log("Bulk Delete Completed")
  }

  const handleBulkExport = (rows) => {
    // use filefy to export 
    console.log("Export Function")
  }

  const handleActions = async (action, rows) => {
    // match bulk action to handler
    console.info("Switching Selected Action")
    console.log(action)
    switch(action) {
      case 'activate':
        handleBulkActivate(rows, true);
        //console.log("Activate");
        //console.log(rows);
        break;
      case 'deactivate':
        handleBulkDeactivate(rows, false);
        //console.log("Deactivate");
        //console.log(rows);
        break;
      case 'reset':
        handleBulkReset(rows);
        console.log("Reset");
        console.log(rows);
        break;
      case 'delete': 
        handleBulkDelete(rows);
        console.log("Delete");
        console.log(rows);
        break;
      case 'export':
        handleBulkExport(rows);
        console.log("Export");
        console.log(rows);
        break;
      default: 
        console.log(rows);
        break;
    }
  }
  // keeping a track of selected rows
  useEffect(() => {
    console.log(selectedRows)
  }, [selectedRows])

  //keeping a track of selected bulk actions 
  useEffect(() => {
    console.log("setState update completed")
    console.log(selectedBulkAction)
  }, [selectedBulkAction])

  const initTable = async() => {
    const fetchData = async () => {
      const result = await axios(
        baseURL,
      );
      setTableData(result.data);
    };
    fetchData();
    rows = tableData;
  }

  // main mock data fetching
  useEffect(() => {
    initTable();
  }, [updateFlag, selectedBulkAction]);  // refresh when the tableData is changed
  // search Listeners 
  useEffect(() => {
    setTimeout(() => {
       handleSearch();
    }, 1000);
   
  }, [search]) 
  return (
    <div className="flex flex-col py-12"> 
      <div className="w-full sm:p-24 flex flex-col space-y-12 sm:flex-row justify-between items-center pb-12 sm:pb:0"> 
          <div className="w-full flex flex-col space-y-6 sm:flex-row space-x-6 items-start">
              <Button 
                color="primary" 
                variant="outline"
                className=""
                >Filter
              </Button>
        
              <TextField
              label="search"
              id="outlined-size-small"
              size="small"
              value={search}
              className="w-4/5 sm:w-1/5"
              onChange={ (e) => setSearch(e.target.value) }
            />
            
            <div className="block h-24 sm:hidden" />
            
            <TextField
              id="outlined-select-currency"
              select
              label="Bulk Actions"
              value={selectedBulkAction}
              onChange={(e) => handleBulkActions(e)}
              helperText=""
              size="small"
              className="w-4/5 sm:w-1/5"
            >
              {bulkActionsConfig.map((bulkAction) => (
                <MenuItem 
                  key={bulkAction.value} 
                  value={bulkAction.value}
                  >
                    {bulkAction.label}
                </MenuItem>
              ))}
            </TextField>

              <Button 
                variant="solid"
                component="span"
                className="sm:px-24"
                onClick = {() => handleActions(selectedBulkAction, selectedRows) }
                >Apply
                </Button>

          </div>
            
          <div className="w-1/2 sm:w-1/6"> 
            <div className="block h-24 sm:h-0 sm:hidden" />
            <UserDrawer />
            <div className="block h-24 sm:h-0 sm:hidden" />
          </div>
        </div>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick // removing row click selection
          onRowDoubleClick	={(rows) => handleDoubleClick(rows)}
          onSelectionModelChange = { (rows) => setSelectedRows(rows)} //{ (rows) => handleDelete(rows[0])}//
        />
      </div>
    </div>
  );
  console.log(selectedBulkAction)
}



/**
   {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    disableClickEventBubbling: true,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
 */