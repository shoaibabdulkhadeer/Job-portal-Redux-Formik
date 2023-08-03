import './App.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function App() {

  const signupschema = Yup.object({
    name: Yup.string().min(4).max(30).required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmpassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
  })

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmpassword: ""
  }

  const { handleSubmit, errors, values, handleBlur, handleChange, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: signupschema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
      alert("Successfully submitted")
      
    }
  })


  return (
    <div className="App">
      <div className="login-form">
        <h3 className='title'>SIGN UP</h3>
        <form className="form-container" onSubmit={handleSubmit} >
          <div className="form-group">
            <label>Name</label>
            <input value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" name="name" placeholder="Enter Your Name" />
            {errors.name && touched.name ? <p style={{ color: "red",margin:"0px"}} >{errors.name}</p> : null}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" name="email" placeholder="Enter Your Email" />
            {errors.email && touched.email ? <p style={{ color: "red",margin:"0px"}} >{errors.email}</p> : null}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" name="password" placeholder="Enter Your Password" />
            {errors.password && touched.password ? <p style={{ color: "red",margin:"0px"}} >{errors.password}</p> : null}
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input value={values.confirmpassword} onChange={handleChange} onBlur={handleBlur} type="password" name='confirmpassword' confirm="confirmpassword" placeholder="Confirm Your Password" />
            {errors.confirmpassword && touched.confirmpassword ? <p style={{ color: "red",margin:"0px"}} >{errors.confirmpassword}</p> : null}
          </div>
          <button type="submit"  >Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
