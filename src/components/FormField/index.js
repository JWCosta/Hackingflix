import React from "react";

export default function FormField({
  label,
  type,
  name,
  placeholder,
  onChange,
}) {
  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
