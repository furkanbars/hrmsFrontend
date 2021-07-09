import { useField, Formik, useFormik, Field } from "formik";
import React from "react";
import {
   Label,
   FormInput, 
   Input,
   FormField
  } from "semantic-ui-react";

export default function FormTextInput({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <FormField error={meta.touched && !!meta.error}>
        <Input {...field} {...props} />
        {meta.touched && !!meta.error ? (
            <Label style={{ marginLeft: "2em" }}>
            <Label.Detail style={{ color: "red" }}>
              {meta.error}
            </Label.Detail>
          </Label>
        ):null}
      </FormField>
    </div>
  );
}
