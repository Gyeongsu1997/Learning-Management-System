/* eslint-disable */
import { useState } from 'react';
import Customer from './components/Customer';
import './App.css';
import { Paper } from '@mui/material';
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';

/*
const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '최경수',
  'birthday': '971111',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '김경수',
  'birthday': '970211',
  'gender': '여자',
  'job': '프로그래머'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '정범수',
  'birthday': '921131',
  'gender': '남자',
  'job': '디자이너'
}
]*/

function App() {
  let [customers, 변경] = useState([
    {
      'id': 1,
      'image': 'https://placeimg.com/64/64/1',
      'name': '최경수',
      'birthday': '971111',
      'gender': '남자',
      'job': '대학생'
    },
    {
      'id': 2,
      'image': 'https://placeimg.com/64/64/2',
      'name': '김경수',
      'birthday': '970211',
      'gender': '여자',
      'job': '프로그래머'
    },
    {
      'id': 3,
      'image': 'https://placeimg.com/64/64/3',
      'name': '정범수',
      'birthday': '921131',
      'gender': '남자',
      'job': '디자이너'
    }
    ]);
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
          {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />); })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
