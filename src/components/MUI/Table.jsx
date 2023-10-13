import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { Table } from 'react-bootstrap'

const Tableee = () => {
  return (
    <>
       <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell >First Name</TableCell>
            <TableCell >Last Name</TableCell>
            <TableCell align='center'>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell >{row.id}</TableCell>
              <TableCell >{row.first_name}</TableCell>
              <TableCell >{row.last_name}</TableCell>
              <TableCell align='center'>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
    </>
  )
}
const data = [{
    "id": 1,
    "first_name": "Verina",
    "last_name": "Bourget",
    "email": "vbourget0@reference.com",
    "gender": "Female",
    "ip_address": "237.209.110.87"
  }, {
    "id": 2,
    "first_name": "Correy",
    "last_name": "Johannes",
    "email": "cjohannes1@archive.org",
    "gender": "Genderfluid",
    "ip_address": "82.51.27.37"
  }, {
    "id": 3,
    "first_name": "Shawn",
    "last_name": "Dresse",
    "email": "sdresse2@theguardian.com",
    "gender": "Male",
    "ip_address": "122.50.147.253"
  }, {
    "id": 4,
    "first_name": "Madelaine",
    "last_name": "Smitherham",
    "email": "msmitherham3@tuttocitta.it",
    "gender": "Female",
    "ip_address": "1.144.62.36"
  }, {
    "id": 5,
    "first_name": "Derril",
    "last_name": "Skilton",
    "email": "dskilton4@dyndns.org",
    "gender": "Male",
    "ip_address": "109.196.12.100"
  }, {
    "id": 6,
    "first_name": "Durand",
    "last_name": "Cuberley",
    "email": "dcuberley5@amazon.com",
    "gender": "Agender",
    "ip_address": "150.230.157.23"
  }, {
    "id": 7,
    "first_name": "Deborah",
    "last_name": "Domenici",
    "email": "ddomenici6@t-online.de",
    "gender": "Female",
    "ip_address": "169.153.117.110"
  }, {
    "id": 8,
    "first_name": "Berke",
    "last_name": "Carnell",
    "email": "bcarnell7@creativecommons.org",
    "gender": "Male",
    "ip_address": "230.154.109.221"
  }, {
    "id": 9,
    "first_name": "Kimberlee",
    "last_name": "Bladge",
    "email": "kbladge8@myspace.com",
    "gender": "Female",
    "ip_address": "63.245.13.252"
  }, {
    "id": 10,
    "first_name": "Charo",
    "last_name": "Goering",
    "email": "cgoering9@miitbeian.gov.cn",
    "gender": "Female",
    "ip_address": "225.140.40.64"
  }]
export default Tableee
