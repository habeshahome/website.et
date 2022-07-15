import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

const createData = (id, role, permission, company, username, email, firstName, lastName, active, regTime, loginTime, IP, expiresOn) => {
  return { id, role, permission, company, username, email, firstName, lastName, active, regTime, loginTime, IP, expiresOn };
}

const rows = [
  createData(
    1,
    "Superuser",
    "Super Admin",
    "DevWays Digital",
    "Anis.Mohamed",
    "anis@devways",
    "Anis",
    "Mohamed",
    "Active",
    "2022-06-14:25:32",
    "2022-06-14:25:32",
    "95.142.56.191",
    "1900-01-01 00:00:00"),
  createData(
    1,
    "Superuser",
    "Super Admin",
    "DevWays Digital",
    "Anis.Mohamed",
    "anis@devways",
    "Anis",
    "Mohamed",
    "Active",
    "2022-06-14:25:32",
    "2022-06-14:25:32",
    "95.142.56.191",
    "1900-01-01 00:00:00"),
  createData(
    1,
    "Superuser",
    "Super Admin",
    "DevWays Digital",
    "Anis.Mohamed",
    "anis@devways",
    "Anis",
    "Mohamed",
    "Active",
    "2022-06-14:25:32",
    "2022-06-14:25:32",
    "95.142.56.191",
    "1900-01-01 00:00:00")
];

const UserTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple ta{row.id}ble">
        <TableHead>
          <TableRow className="bg-gray-100 font-xs overflow-x-scroll">
            <TableCell align="left"> <Checkbox /> </TableCell>
            <TableCell align="left"> ID </TableCell>
            <TableCell align="left"> Role </TableCell>
            <TableCell align="left"> Permission Profile </TableCell>
            <TableCell align="left"> Company </TableCell>
            <TableCell align="left"> Username </TableCell>
            <TableCell align="left"> Email </TableCell>
            <TableCell align="left"> First Name </TableCell>
            <TableCell align="left"> Last Name </TableCell>
            <TableCell align="left"> Active </TableCell>
            <TableCell align="left"> Reg. TIme </TableCell>
            <TableCell align="left"> Login Time </TableCell>
            <TableCell align="left"> IP </TableCell>
            <TableCell align="left"> Expires on </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className="hover:bg-gray-100"
            >
              <TableCell component="th" scope="row"><Checkbox /> </TableCell>
              <TableCell component="th" scope="row">{row.id} </TableCell>
              <TableCell align="left">{row.role}</TableCell>
              <TableCell align="left">{row.permission}</TableCell>
              <TableCell align="left">{row.company}</TableCell>
              <TableCell align="left">{row.username}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.firstName}</TableCell>
              <TableCell align="left">{row.lastName}</TableCell>
              <TableCell align="left">{row.active}</TableCell>
              <TableCell align="left">{row.regTime}</TableCell>
              <TableCell align="left">{row.loginTime}</TableCell>
              <TableCell align="left">{row.IP}</TableCell>
              <TableCell align="left">{row.expiresOn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UserTable;