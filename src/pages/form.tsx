import { Box, LoadingOverlay } from "@mantine/core";
import axios from "axios";
import { Formik } from "formik";
import { useMutation } from "react-query";
import * as Yup from "yup";
import AddressComponent from "./address";
import UserData from "./userdata";

interface IForm {
  email: string;
  password: string;
  address: {
    province: string;
    address: string;
  };
}
function FormComponent() {
  const formPostMutation = useMutation((newTodo: IForm) => {
    return axios.post("/api/users", newTodo);
  });

  if (formPostMutation.isLoading) return <LoadingOverlay visible />;
  const formikSchema = Yup.object({
    email: Yup.string()
      .required("Email Belum di isi")
      .email("Format email Invalid"),
    password: Yup.string().required("Password Belum di isi"),
    address: Yup.object({
      province: Yup.string()
        .required("Provinsi Belum di isi")
        .test(
          "is-42",
          "Provinsi Bogor Tidak ada",
          (value) => value !== "Bogor"
        ),
      address: Yup.string().required("Alamat Belum di isi"),
    }),
  });

  const initalValues = {
    email: "",
    password: "",
    address: { province: "", address: "" },
  };

  return (
    <Box mx="auto">
      <Formik
        initialValues={initalValues}
        validationSchema={formikSchema}
        onSubmit={(values: IForm, { setSubmitting }) => {
          formPostMutation.mutate(values);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <UserData />
            <AddressComponent />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default FormComponent;
