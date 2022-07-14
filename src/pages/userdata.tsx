import { PasswordInput, Text, TextInput } from "@mantine/core";
import { useFormikContext } from "formik";

interface IFormContext {
    getFieldProps: any;
    errors: any;
    touched: any;
}

function UserData() {
  const { getFieldProps, errors, touched } : IFormContext = useFormikContext();
  return (
    <>
      <TextInput
        label="Email"
        placeholder="Insert Email Here.."
        mt={"md"}
        {...getFieldProps("email")}
      />
      {errors.email && touched.email && <Text color="red">{errors.email}</Text>}

      <PasswordInput
        label="Password Input"
        placeholder="Password.."
        mt={"md"}
        {...getFieldProps("password")}
      />

      {errors.password && touched.password && (
        <Text color="red">{errors.password}</Text>
      )}
    </>
  );
}

export default UserData;
