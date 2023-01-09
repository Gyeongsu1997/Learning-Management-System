/* eslint-disable */
import { useEffect, useState } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const [customers, setCustomers] = useState("");

  useEffect(() => {
    callApi()
      .then(res => setCustomers(res))
      .catch(err => console.log(err));
  }, [customers]);

  const callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  };

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers ? customers.map(c => { 
            return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />); 
          }) :
          <TableRow>
            <TableCell colSpan="6" align="center"> 
              <CircularProgress />    
            </TableCell>
          </TableRow>
          }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
