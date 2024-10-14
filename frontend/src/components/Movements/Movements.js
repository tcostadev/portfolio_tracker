import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import axios from "axios";
import { getMovements } from "../../features/movements/movementSlice";
import { useSelector, useDispatch } from "react-redux";

const Movements = (props) => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ id: "", name: "", age: "" });
  const [isEditMode, setIsEditMode] = useState(false);

  const apiUrl = "https://example.com/api/data"; // Replace with your actual API URL
  const dispatch = useDispatch();

  dispatch(getMovements());
  // Fetch data from API
  // const fetchData = async () => {
  //   try {
  //     const response = movementService.getMovements(token);
  //     //const response = await axios.get(apiUrl);
  //     setData(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // Handle opening/closing the dialog
  const handleOpen = (row = { id: "", name: "", age: "" }) => {
    setFormData(row);
    setIsEditMode(!!row.id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData({ id: "", name: "", age: "" });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Create or update a row
  const handleSave = async () => {
    if (isEditMode) {
      try {
        await axios.put(`${apiUrl}/${formData.id}`, formData);
      } catch (error) {
        console.error("Error updating data:", error);
      }
    } else {
      try {
        await axios.post(apiUrl, formData);
      } catch (error) {
        console.error("Error creating data:", error);
      }
    }
    //fetchData();
    handleClose();
  };

  // Delete a row
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      //fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>
        Create
      </Button>

      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleOpen(row)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(row.id)}
                    style={{ marginLeft: 10 }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for creating/editing a row */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditMode ? "Edit Row" : "Create New Row"}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="name"
            label="Name"
            fullWidth
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="age"
            label="Age"
            fullWidth
            value={formData.age}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            {isEditMode ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Movements;
