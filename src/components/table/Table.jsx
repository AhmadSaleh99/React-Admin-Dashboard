import React from "react";
import "./table.scss";
import {
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const List = () => {
  const rows = [
    {
      id: "11111",
      product: "Acer nitro 5",
      img: "",
      customer: "Ahmad Saleh",
      date: "11 Jan",
      amount: 777,
      method: "cash on delivery",
      status: "aproved",
    },
    {
      id: "11111",
      product: "Acer nitro 5",
      img: "",
      customer: "Ahmad Saleh",
      date: "11 Jan",
      amount: 777,
      method: "cash on delivery",
      status: "Approved",
    },
    {
      id: "11111",
      product: "Acer nitro 5",
      img: "",
      customer: "Ahmad Saleh",
      date: "11 Jan",
      amount: 777,
      method: "cash on delivery",
      status: "Declined",
    },
    {
      id: "11111",
      product: "Acer nitro 5",
      img: "",
      customer: "Ahmad Saleh",
      date: "11 Jan",
      amount: 777,
      method: "cash on delivery",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="Product" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
