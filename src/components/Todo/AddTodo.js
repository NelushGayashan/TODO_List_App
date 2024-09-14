// src/components/Todo/AddTodo.js
import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useTodos } from '../../context/TodoContext';

const AddTodo = ({ open, onClose }) => {
  const { addTodo } = useTodos();

  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Title is required')
      .min(3, 'Title must be at least 3 characters long'),
    description: Yup.string()
      .required('Description is required')
      .min(10, 'Description must be at least 10 characters long'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await addTodo(values.title, values.description);
        toast.success('Todo added successfully!');
        onClose();
        resetForm();
      } catch (error) {
        toast.error('Failed to add todo.');
      }
    },
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Todo</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <TextField
            margin="dense"
            name="title"
            label="Title"
            type="text"
            fullWidth
            variant="outlined"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" color="primary">
            Add Todo
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddTodo;
