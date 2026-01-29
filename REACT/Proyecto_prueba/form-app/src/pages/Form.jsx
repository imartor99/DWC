import React from 'react'
import FormularioArticulo from '../components/FormularioArticulo'
import FormularioReactHookForm from '../components/FormReactHookForm'

export default function Form() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Formulario</h2>
            <FormularioArticulo />
            <br />
            <FormularioReactHookForm />
    </div>
  )
}
