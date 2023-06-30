"use client"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const TablaAula = ({ headers, data }) => {
  return (
    <TableContainer component={Paper} sx={{ width: 1200, fontFamily: 'Poppins', height: 450, overflowX: 'hidden'}}>
      <Table sx={{ width: 1200, height: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell align="center" key={index} sx={{fontSize: 10, height: 50, fontWeight: 'bold'}}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: 50}} className='bg-gray-100 '>
              {Object.values(row).map((value, columnIndex) => (
                <TableCell align="center" key={columnIndex}>
                  {value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablaAula;