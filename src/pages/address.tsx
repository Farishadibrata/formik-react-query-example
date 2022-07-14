import { NativeSelect, Text, TextInput } from "@mantine/core";
import { useFormikContext } from "formik";

function AddressComponent() {
  const { getFieldProps, errors, touched }: any = useFormikContext();

  return (
    <>
      <NativeSelect
        label="Provinsi"
        placeholder="Pick one"
        data={[
          { value: "Jawa Barat", label: "Jawa Barat" },
          { value: "Bogor", label: "Bogor" },
          { value: "Jakarta", label: "Jakarta" },
          { value: "Ngamprah", label: "Ngamprah" },
          { value: "Narcon", label: "Narcon" },
          { value: "Cimahi", label: "Cimahi" },
        ]}
        {...getFieldProps("address.province")}
      />

      {errors.address &&
        touched.address &&
        touched.address.province &&
        errors.address.province && (
          <Text color="red">{errors.address.province}</Text>
        )}
      <TextInput
        label="Alamat"
        placeholder="RT/RW Apa naon kek"
        mt={"md"}
        {...getFieldProps("address.address")}
      />
      {errors.address &&
        touched.address &&
        touched.address.address &&
        errors.address.address && (
          <Text color="red">{errors.address.address}</Text>
        )}
    </>
  );
}

export default AddressComponent;
