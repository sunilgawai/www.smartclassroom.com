import { Formik } from "formik";
import * as Yup from "yup";
import {
  Button,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "", submit: "" }}
      validationSchema={Yup.object().shape({
        email: Yup.string().max(25).required("Email is required"),
        password: Yup.string().max(255).required("Password is required"),
        submit: Yup.string(),
      })}
      onSubmit={() => {}}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <form noValidate autoComplete="none" onSubmit={handleSubmit}>
          <Grid item md={12} xl={12} sm={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email-login">Enter Email Address</InputLabel>
              <OutlinedInput
                id="email-login"
                type="text"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter email address"
                fullWidth
                size="small"
                error={Boolean(touched.email && errors.email)}
              />
              {touched.email && errors.email && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-email-login"
                >
                  {errors.email}
                </FormHelperText>
              )}
            </Stack>
            <Stack spacing={1} mt={2}>
              <InputLabel htmlFor="password">Enter Password</InputLabel>
              <OutlinedInput
                id="password"
                type="password"
                value={values.password}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter your password"
                fullWidth
                error={Boolean(touched.password && errors.password)}
                size="small"
              />
              {touched.email && errors.password && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-email-login"
                >
                  {errors.password}
                </FormHelperText>
              )}
            </Stack>
            {errors.submit && (
              <Grid item xs={12}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Grid>
            )}

            <Grid item xs={12}>
              <Link to={"forgot-password"}>Forgot password?</Link>
            </Grid>

            <Grid item xs={12} mt={4}>
              <Button
                disableElevation
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                color="warning"
                variant="outlined"
              >
                Take me to the ClassRoom 🎉
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
