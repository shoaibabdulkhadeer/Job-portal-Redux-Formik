import './App.css';
import { useFormik } from 'formik';
import { FaUserCircle } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';


import * as Yup from 'yup';

function App() {

  const signupschema = Yup.object({
    name: Yup.string().min(4).max(30).required("name is required"),
    email: Yup.string().email().required("email is required"),
    password: Yup.string().required("password is required"),
    confirmpassword: Yup.string()
      .required("password must match")
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
            <FaUserCircle className='icons' />
            <input value={values.name} onChange={handleChange} onBlur={handleBlur} style={{border:touched.name && errors.name? "2px solid red":""}}  type="text" name="name" placeholder="Enter Your Name" />
          </div>
          {errors.name && touched.name ? <p style={{ color: "red", margin: "0px" }} >{errors.name}</p> : null}
          <div className="form-group">
            <label>Email</label>
            <MdEmail className='icons' />
            <input value={values.email} style={{border:touched.email && errors.email?"2px solid red":""}} onChange={handleChange} onBlur={handleBlur} type="email" name="email" placeholder="Enter Your Email" />
          </div>
          {errors.email && touched.email ? <p style={{ color: "red", margin: "0px" }} >{errors.email}</p> : null}
          <div className="form-group">
            <label>Password:</label>
            <FaLock className='icons' />
            <input value={values.password} style={{border:touched.password && errors.password?"2px solid red":""}}  onChange={handleChange} onBlur={handleBlur} type="password" name="password" placeholder="Enter Your Password" />
          </div>
          {errors.password && touched.password ? <p style={{ color: "red", margin: "0px" }} >{errors.password}</p> : null}
          <div className="form-group">
            <label>Confirm Password:</label>
            <FaLock className='icons' />
            <input value={values.confirmpassword} style={{border:touched.confirmpassword && errors.confirmpassword ?"2px solid red":""}}  onChange={handleChange} onBlur={handleBlur} type="password" name='confirmpassword' confirm="confirmpassword" placeholder="Confirm Your Password" />
          </div>
          {errors.confirmpassword && touched.confirmpassword ? <p style={{ color: "red", margin: "0px" }} >{errors.confirmpassword}</p> : null}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
