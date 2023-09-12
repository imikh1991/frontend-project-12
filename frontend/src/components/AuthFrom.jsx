/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

import '../index.css';
import * as Yup from 'yup';

import AuthContext from '../context/AuthContext';
import AuthProvider from '../context/AuthProvider';

const AuthFrom = () => {
  // eslint-disable-next-line no-unused-vars
  const { setNotValid, setValid } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .required('Required'),
      password: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .required('Required'),
    }),

    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await axios.post('/api/v1/login', {
          username: values.username,
          password: values.password,
        });
        console.log(response.data);
        const result = response.data;
        localStorage.setItem(result.username, result.token);
      } catch (error) {
        console.error(error);
        console.log(setNotValid);
        alert(error.message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  // Define isSubmitting within your component
  const { isSubmitting } = formik;

  return (
    <AuthProvider>
      <form className="col-12 col-md-6 mt-3 mt-mb-0" onSubmit={formik.handleSubmit}>
        <div className="form-floating">
          <input
            id="username"
            className="form-control"
            name="username"
            autoComplete="username"
            required=""
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          <label className={formik.values.username && 'filled'} htmlFor="username">
            Ваш ник
          </label>
          {formik.touched.username && formik.errors.username ? (
            <div>{formik.errors.username}</div>
          ) : null}
        </div>
        <div className="form-floating">
          <input
            id="password"
            className="form-control"
            name="password"
            autoComplete="current-password"
            required=""
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <label className={formik.values.password && 'filled'} htmlFor="password">
            Пароль
          </label>
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="w-100 mb-3 btn btn-outline-primary"
          disabled={isSubmitting} // Use isSubmitting to disable the button
        >
          {isSubmitting ? 'Пожалуйста, подождите...' : 'Войти'}
        </button>
      </form>
    </AuthProvider>
  );
};

export default AuthFrom;
