import React from "react";
import Input from "./common/Input";

function MemForm() {
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit} style={{ padding: "0 20% 0 20%" }}>
      <Input label={"name"} placeholder={"enter name"} />
      <Input label={"email"} placeholder={"enter email"} />
      <Input label={"role"} placeholder={"enter role"} />
      <button className="btn btn-primary btn-sm">edit</button>
    </form>
  );
}

export default MemForm;
