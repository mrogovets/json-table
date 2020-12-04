import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

const data = [
  { id: 1, CompleteName: "John Doe", "2020-12-03": 8.73 },
  { id: 2, CompleteName: "William Langford", "2020-12-03": null },
  { id: 3, CompleteName: "Charles Sims", "2020-12-03": 2.03 },
  { id: 4, CompleteName: "Joshua James", "2020-12-10": 2.03 },
  { id: 5, CompleteName: "Mike Ford", "2020-12-11": 2.07 },
  { id: 6, CompleteName: "Mike Ford", "2020-12-11": 2.07 },
];

export const JsonTable = () => {
  const classes = useStyles();

  let name = [];
  let date = [];
  let dataOfDate = [];

  const convertDataToArr = () => {
    const arrData = [...data];
    arrData.forEach((el, i) => {
      const elArr = Object.entries(el);
      // console.log(elArr[0][0]); // id
      // console.log(elArr[0][1]); // #id
      // console.log(elArr[1][0]); // CompleteName
      // console.log(elArr[1][1]); // data of CompleteName
      // console.log(elArr[2][0]); // date
      // console.log(elArr[2][1]); // data of date
      name[i] = elArr[1][1];
      date[i] = elArr[2][0];
      dataOfDate[i] = elArr[2][1];
    });
    console.log(name);
  };
  convertDataToArr();

  let nameTable = [];

  const addToNameTable = () => {
    if (nameTable.length <= 0) {
      nameTable[0] = name[0];
    }
    nameTable.forEach((elTbl) => {
      name.forEach((el) => {
        if (el !== elTbl) {
          nameTable.push(el);
        }
      });
    });
  };

  addToNameTable();
  console.log("nameTable", nameTable);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Members</TableCell>
            {/* <TableCell align="right">CompleteName</TableCell> */}
            {date.map((el, i) => (
              <TableCell key={i} align="right">
                {el}
              </TableCell>
            ))}
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
