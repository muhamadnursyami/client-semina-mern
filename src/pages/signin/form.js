import React from "react";
import SButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWIthLabel";
import { Form } from "react-bootstrap";
export default function SForm({ handleChange, form, isLoading, handleSubmit }) {
  return (
    <Form>
      <TextInputWithLabel
        label={"Email Address"}
        name="email" //ini name nya
        value={form.email}
        type="email"
        placeholder="Enter email"
        onChange={handleChange}
      />

      <TextInputWithLabel
        label={"Password"}
        name="password" //ini name nya
        value={form.password}
        type="password"
        placeholder="Enter password"
        onChange={handleChange}
      />
      {/* kita button di klik maka dia akan loading, button nya tidak bisa dklik
        artinya button nya itu disabled == true, tetapi jika, loadingnya false
        dapat dari isLoading NILAI TRUE OR FALSE.
        maka  tombol bisa di klik artinya disabeldnya itu == false,
    */}
      <SButton
        loading={isLoading}
        disabled={isLoading}
        action={handleSubmit}
        variant="primary"
      >
        Submit
      </SButton>
    </Form>
  );
}
