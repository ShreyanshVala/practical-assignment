import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../assets/LoginForm.css";

function LoginForm() {
  // Validation Schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login Form</h2>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            alert(`Email: ${values.email}\nPassword: ${values.password}`);

            console.log(values);

            resetForm();
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form>
              {/* Email */}
              <div className="form-group">
                <label>Email</label>

                <Field
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {touched.email && errors.email && (
                  <p className="error">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="form-group">
                <label>Password</label>

                <Field
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {touched.password && errors.password && (
                  <p className="error">{errors.password}</p>
                )}
              </div>

              <button type="submit" className="login-btn">
                Login
              </button>

              <div className="result">
                <h3>Live Values</h3>

                <p>
                  <strong>Email:</strong> {values.email}
                </p>

                <p>
                  <strong>Password:</strong> {values.password}
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
