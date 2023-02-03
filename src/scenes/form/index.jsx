import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React from "react";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

// check based on the string
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// Validate our user input
const userSchema = yup.object().shape({
  // if they don't put an input in first name this will pop up
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

const Form = () => {
  // if we hit a min width of 60px we trigger
  const isNonMobile = useMediaQuery("(Min-width:60px)");

  //   on submit we log in console
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {/* all of these come from the form component */}
        {/* the arrow functions lets us use these inside our form  */}
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              //four sections (columns), can squish to 0 but stretch to 1/4
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              {/* first name field */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                // if the field is touched we put error in
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              {/* last name field */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                // if the field is touched we put error in
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              {/* email field */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                // if the field is touched we put error in
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              {/* contact num field */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                // if the field is touched we put error in
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              {/* address 1 field */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                // if the field is touched we put error in
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              {/* Address 2 field */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                // if the field is touched we put error in
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyCOntent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
