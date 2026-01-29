import React from "react";
import { useForm } from "react-hook-form";

export default function FormReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos del formulario", data);
  };
  return (
    <>
      <h2>Formulario React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Codigo:</label>
        <input type="text" name="codigo" {...register("codigo")} />

        <label htmlFor="">Nombre:</label>
        <input type="text" name="nombre" {...register("nombre")} />

        <label htmlFor="">Precio:</label>
        <input
          type="number"
          name="precio"
          {...register("precio", {
            min: { value: 10, message: "Precio minimo 10" },
            max: { value: 100, message: "Precio maximo 100" },
            required: "Precio is obligatorio",
          })}
          aria-invalid={errors.percio > 100 ? "true" : "false"}
        />

        {errors.precio && <p role="alert">{errors.precio.message}</p>}
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
