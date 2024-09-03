import React, { useContext } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import {
  TextField,
  useMediaQuery,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { Header } from "../../components/Header";
import { LanguageModeContext, useLanguageStyle } from "../../languageTheme";
import { ColorModeContext } from "../../theme";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

export const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { languageTheme } = useContext(LanguageModeContext);
  const formTheme = languageTheme?.menu.pages.profileForm;
  const fontStyle = useLanguageStyle(languageTheme.languageStatus);
  const theme = useTheme();
  const [, , paletteMode] = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode, paletteMode);
  const handleFormSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };

  const phoneRegExp = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;

  const userSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email("not valid email").required("Required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required"),
  });

  return (
    <Box m="20px">
      <Header
        title={formTheme.profileFormTitle}
        subtitle={formTheme.profileFormSubtitle}
      />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
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
              gridTemplateColumns="repeat(4, minmax(0, 1fr)"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={
                  <Typography sx={fontStyle}>
                    {formTheme.form.firstName}
                  </Typography>
                }
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
                InputProps={{
                  sx: fontStyle,
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={
                  <Typography sx={fontStyle}>
                    {formTheme.form.lastName}
                  </Typography>
                }
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
                InputProps={{
                  sx: fontStyle,
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={
                  <Typography sx={fontStyle}>{formTheme.form.email}</Typography>
                }
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
                InputProps={{
                  sx: fontStyle,
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={
                  <Typography sx={fontStyle}>
                    {formTheme.form.contactNumber}
                  </Typography>
                }
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
                InputProps={{
                  sx: fontStyle,
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={
                  <Typography sx={fontStyle}>
                    {formTheme.form.address1}
                  </Typography>
                }
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
                InputProps={{
                  sx: fontStyle,
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={
                  <Typography sx={fontStyle}>
                    {formTheme.form.address2}
                  </Typography>
                }
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
                InputProps={{
                  sx: fontStyle,
                }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                <Typography sx={fontStyle}>
                  {formTheme.form.buttonLabel}
                </Typography>
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
