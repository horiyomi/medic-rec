import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import RecordDialog from '../../features/RecordModal'
import { withStyles } from "@material-ui/core/styles"
// Generate Order Data
function createData(id, dob, firstName, lastName, bloodGroup, genotype) {
  return { id, dob, firstName, lastName, bloodGroup, genotype };
}

const rows = [
  createData(0, '16 Mar, 1850', 'Elvis', 'Presley', 'O', 'A'),
  createData(0, '01 Mar, 1930', 'John', 'Doe', 'O+', 'AB'),
  createData(0, '16 Mar, 2019', 'Elvis', 'Presley', 'O+', 'AA'),
  createData(0, '16 Mar, 2019', 'Elvis', 'Presley', 'O+', 'A'),
  createData(0, '16 Mar, 2019', 'Elvis', 'Presley', 'O+', 'A'),
  createData(0, '16 Mar, 2019', 'Elvis', 'Presley', 'O+', 'A'),
  createData(0, '16 Mar, 2019', 'Elvis', 'Presley', 'O+', 'A'),
  createData(0, '16 Mar, 2019', 'Elvis', 'Presley', 'O+', 'A'),
  createData(0, '16 Mar, 2019', 'Elvis', 'Presley', 'O+', 'A'),
];

const styles = theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  '& hover':{
    cursor: 'pointer'
  }
});

const PatientRecords = (props) => {
  console.log("PatientRecords ->", props)
  const { classes, open, handleClickOpen } = props
  return (
    <React.Fragment>
      <Title>Recently Admnistered</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date Of Birth</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Blood Group</TableCell>
            <TableCell>Genotype</TableCell>
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
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          See more orders
        </Link>
      </div> */}
    </React.Fragment>
  );
}

export default withStyles(styles)(PatientRecords)