import { useState } from "react";

export default function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function onChangeInput(valueCategoria) {
    setValue(
      valueCategoria.target.getAttribute("name"),
      valueCategoria.target.value
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([...categorias, values]);

    clearForm();
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    onChangeInput,
    clearForm,
    handleSubmit,
  };
}
