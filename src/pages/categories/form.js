import React from "react";
import { Form } from "react-bootstrap";
import SButton from "../../components/Button";

import TextInputWithLabel from "../../components/TextInputWIthLabel";
export default function CategoryForm({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
}) {
  return (
    <Form>
      <TextInputWithLabel
        placeholder={"Masukan nama kategori"}
        label={"Nama Kategori"}
        name="name"
        value={form.name}
        type="text"
        onChange={handleChange}
      />
      <SButton variant="primary" action={handleSubmit} loading={isLoading}>
        {edit ? "Ubah" : "Simpan"}
      </SButton>
    </Form>
  );
}
