import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Logo from './assets/footer-logo.png'


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '##D9EEF7',
    color: theme.palette.common.black,
    padding: .5,
    fontSize: 16,
    
  },
  body: {
    fontSize: 15,
   
   
    padding: 1,
    borderLeft: '1px solid black',
    borderRight: '1px solid black'
  },
  
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
      borderBottom: '1px solid black',
    '&:nth-of-type(odd)': {
      backgroundColor: 'lightgray',
      
    },
  },
}))(TableRow);

function createData(name, monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
  return { name, monday, tuesday, wednesday, thursday, friday, saturday, sunday};
}

const rows = [
  createData('Mark', '', '', '', '', '', '', ''),
  createData('Harry', '', '', '', '', '', '', ''),
  createData('John M', '', '', '', '', '', '', ''),
  createData('Richard', '', '', '', '', '', '', ''),
  createData('Darren', '', '', '', '', '', '', ''),
  createData('Rock', '', '', '', '', '', '', ''),
  createData('Brandon', '', '', '', '', '', '', ''),
  createData('Mike B.', '', '', '', '', '', '', ''),
  createData('Eric', '', '', '', '', '', '', ''),
  createData('Nick', '', '', '', '', '', '', ''),
  createData('Todd', '', '', '', '', '', '', ''),
  createData('John B.', '', '', '', '', '', '', ''),
  createData('Matt H.', '', '', '', '', '', '', ''),
  createData('Kristian', '', '', '', '', '', '', ''),
  createData('Tery', '', '', '', '', '', '', ''),
  createData('Dustin', '', '', '', '', '', '', ''),
  createData('Sam', '', '', '', '', '', '', ''),
  createData('Ken', '', '', '', '', '', '', ''),
  createData('Colten', '', '', '', '', '', '', ''),
  createData('Lawerence', '', '', '', '', '', '', ''),
  createData('Mike Str.', '', '', '', '', '', '', ''),
  createData('Ethan', '', '', '', '', '', '', ''),
  createData('Gary', '', '', '', '', '', '', ''),
  createData('Ryan K.', '', '', '', '', '', '', ''),
  createData('Jeff', '', '', '', '', '', '', ''),
  createData('Chase', '', '', '', '', '', '', ''),
  createData('Charles', '', '', '', '', '', '', ''),
  createData('Mike W.', '', '', '', '', '', '', ''),
  createData('Tony', '', '', '', '', '', '', ''),
 


];

const useStyles = makeStyles({
  table: {
    minWidth: '100vw',
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
   
    <TableContainer component={Paper} >
      <div style={{background: '#B31538', padding: '5px', display:'flex', justifyContent: 'center', alrignItems: 'center' }}>
        <img src={Logo} style={{height: '80px',  marginRight: '20px'}} atl='Logo'/>
        <h2 style={{color: 'white'}}>Employee Production <br></br> Schedule</h2>
      </div>
      <Table className={classes.table} aria-label="customized table">
      <TableHead style={{background: '#D9EEF7'}}>
          <TableRow style={{background: '#D9EEF7'}} >
            <StyledTableCell align="center" style={{width: '7%', padding: '5px'}} ></StyledTableCell>
            <StyledTableCell align="center" contentEditable="true" style={{width: '10%', padding: '5px'}}>10/05</StyledTableCell>
            <StyledTableCell align="center" contentEditable="true" style={{width: '10%', padding: '5px'}}>10/06</StyledTableCell>
            <StyledTableCell align="center" contentEditable="true" style={{width: '10%', padding: '5px'}}>10/07</StyledTableCell>
            <StyledTableCell align="center" contentEditable="true" style={{width: '10%', padding: '5px'}}>10/08</StyledTableCell>
            <StyledTableCell align="center" contentEditable="true" style={{width: '10%', padding: '5px'}}>10/09</StyledTableCell>
            <StyledTableCell align="center" contentEditable="true" style={{width: '10%', padding: '5px'}}>10/10</StyledTableCell>
            <StyledTableCell align="center" contentEditable="true" style={{width: '10%', padding: '5px'}}>10/11</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center" >Monday</StyledTableCell>
            <StyledTableCell align="center" >Tuesday</StyledTableCell>
            <StyledTableCell align="center" >Wednesday</StyledTableCell>
            <StyledTableCell align="center" >Thursday</StyledTableCell>
            <StyledTableCell align="center" >Friday</StyledTableCell>
            <StyledTableCell align="center" >Saturday</StyledTableCell>
            <StyledTableCell align="center" >Sunday</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name} align="center" style={{border: '1px solid black'}}>
              <StyledTableCell component="th" scope="row" contentEditable="true">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center" contentEditable="true" >{row.monday}</StyledTableCell>
              <StyledTableCell align="center" contentEditable="true">{row.tuesday}</StyledTableCell>
              <StyledTableCell align="center" contentEditable="true" >{row.wednesday}</StyledTableCell>
              <StyledTableCell align="center" contentEditable="true" >{row.thursday}</StyledTableCell>
              <StyledTableCell align="center" contentEditable="true" >{row.friday}</StyledTableCell>
              <StyledTableCell align="center" contentEditable="true"  >{row.saturday}</StyledTableCell>
              <StyledTableCell align="center" contentEditable="true" >{row.sunday}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}