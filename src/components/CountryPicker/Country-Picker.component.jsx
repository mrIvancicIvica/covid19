import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import CounntryPickerDetails from "./Counntry-Picker.details";

const CountryPicker = () => {
  const [country, setCountry] = useState([]);
  const [name, setName] = useState("croatia");

  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    handleBlur,
  } = useFormik({
    initialValues: {
      insertCountry: "",
    },
    validationSchema: yup.object({
      insertCountry: yup
        .string()
        .min(3, "Insert Country name")
        .required("Required"),
    }),
    onSubmit: ({ insertCountry }) => {
      setName(insertCountry);
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        `https://api.covid19api.com/dayone/country/${name}`
      );
      setCountry(response.data);
      console.log(response.data);
    };
    fetchData();
  }, [name]);

  return (
    <div>
      <h1>Country Picker</h1>

      <form onSubmit={handleSubmit} className='ui form'>
        <div className='field'>
          <label>Pick Country</label>
          <input
            value={values.insertCountry}
            onChange={handleChange}
            id='insertCountry'
            name='insertCountry'
            type='text'
            placeholder='Insert Country'
            onBlur={handleBlur}
          />
          {touched.insertCountry && errors.insertCountry ? (
            <div>{errors.insertCountry}</div>
          ) : null}
        </div>
        <button type='submit'>Submit</button>
        <h1>Current sitacion in order country</h1>
      </form>
      {country
        .filter((item, indx) => indx < 3)
        .map(({ ID, ...allProps }) => (
          <CounntryPickerDetails key={ID} {...allProps} />
        ))}
    </div>
  );
};

export default CountryPicker;
