// src/components/Auth/Login.js
import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Welcome Back
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Please login to continue
          </Typography>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
              email: Yup.string().email('Invalid email address').required('Required'),
              password: Yup.string().required('Required'),
            })}
            onSubmit={async (values) => {
              try {
                await login(values);
                toast.success('Login Successful!');
                navigate('/todos');
              } catch (error) {
                toast.error('Login failed. Please try again.');
              }
            }}
          >
            {({ errors, touched }) => (
              <Form style={{ width: '100%' }}>
                <Box mb={3}>
                  <Field
                    name="email"
                    as={TextField}
                    label="Email"
                    fullWidth
                    variant="outlined"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Box>
                <Box mb={3}>
                  <Field
                    name="password"
                    as={TextField}
                    type="password"
                    label="Password"
                    fullWidth
                    variant="outlined"
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  size="large"
                  sx={{
                    py: 1.5,
                    textTransform: 'none',
                    borderRadius: '8px',
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                  }}
                >
                  Log In
                </Button>
              </Form>
            )}
          </Formik>
          <Box mt={3}>
            <Typography variant="body2">
              Don't have an account?{' '}
              <Button component={Link} to="/register" sx={{ textTransform: 'none' }}>
                Register Here
              </Button>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
