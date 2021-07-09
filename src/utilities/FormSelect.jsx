import React from "react";
import { useField, Formik, useFormik, Field } from "formik";
import { Select, Label, FormField } from "semantic-ui-react";

export default function FormSelect({ ...props }) {

  const [field, meta] = useField(props);

  return (
    <div>
      <FormField error={meta.touched && !!meta.error}>
        <Select {...field} {...props} />
        {meta.touched && !!meta.error ? (
          <Label style={{ marginLeft: "2em" }}>
            <Label.Detail style={{ color: "red" }}>{meta.error}</Label.Detail>
          </Label>
        ) : null}
      </FormField>
    </div>
  );
}
