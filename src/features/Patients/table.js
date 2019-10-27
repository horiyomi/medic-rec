import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../shared/Layout/Title';
import RecordDialog from '../../features/RecordModal'
import { withStyles } from "@material-ui/core/styles"
import { Paper } from '@material-ui/core';
// Generate Order Data
function createData(id, dob, firstName, lastName, bloodGroup, genotype) {
  return { id, dob, firstName, lastName, bloodGroup, genotype };
}

const rows = [
  createData(0, '16 Mar, 1850', 'Elvis', 'Presley', 'O', 'A'),
  createData(0, '01 Mar, 1930', 'John', 'Doe', 'O+', 'AB'),
  createData(0, '16 Mar, 2019', 'Shawn', 'Micheal', 'O+', 'AA'),
  createData(0, '16 Mar, 2019', 'Alisa', 'Banny', 'O+', 'A'),
  createData(0, '16 Mar, 2019', 'Funmi', 'Fenyi', 'O+', 'A'),
  createData(0, '16 Mar, 2019', 'Bola', 'Shonumbi', 'O+', 'A'),
  createData(0, '16 Mar, 2019', 'Funto', 'Komolafe', 'O+', 'A'),
  createData(0, '16 Mar, 2019', 'Bassey', 'Ofeguie', 'O+', 'A'),
  createData(0, '16 Mar, 2019', 'Lola', 'PP', 'O+', 'A'),
];

const styles = theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  '& hover': {
    cursor: 'pointer'
  }
});

const data = [
  // {'id': 0, fname: 'Rhoda',lname: 'Bryne', bloodGroup: 'O+', genotype: 'AB', defect: '' }
]

const filterRec = (d) => {

}

const PatientRecords = (props) => {
  console.log("PatientRecords ->", props)
  const { classes, open, handleClickOpen } = props
  return (
    <React.Fragment>
      <Title>Recently Admnistered</Title>
      <Paper>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date Of Birth</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Blood Group</TableCell>
              <TableCell>Genotype</TableCell>
              <TableCell>Defect</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              // <RecordDialog open={open} handleClickOpen={handleClickOpen}>
              <TableRow key={row.id + 1} handleClickOpen={handleClickOpen}>
                <TableCell>{row.dob}</TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.bloodGroup}</TableCell>
                <TableCell>{row.genotype}</TableCell>
              </TableRow>
              // </RecordDialog>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </React.Fragment>
  );
}

export default withStyles(styles)(PatientRecords)