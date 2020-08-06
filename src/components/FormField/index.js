import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;
Label.Text = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`;

const Input = styled.input`
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type="color"]) + span {
    transform: scale(0.6) translateY(-10px);
  }

  ${({ hasValue }) =>
    hasValue &&
    css`
      &:not([type="color"]) + span {
        transform: scale(0.6) translateY(-10px);
      }
    `}
`;

export default function FormField({
  label,
  type,
  value,
  name,
  onChange,
  suggestions,
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === "textarea";
  const tag = isTextArea ? "textarea" : "input";

  const hasValue = [value.length];
  const hasSuggestions = [value.length];

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          hasValue={hasValue}
          name={name}
          onChange={onChange}
          autoComplete={hasSuggestions ? "off" : "on"}
          list={hasSuggestions ? `sugestionFor_${fieldId}` : "on"}
        />
        <Label.Text>{label} :</Label.Text>

        {hasSuggestions && (
          <datalist id={`sugestionFor_${fieldId}`}>
            {suggestions.map((suggestion) => (
              <option
                value={suggestion}
                key={`sugestionFor_${fieldId}_option${suggestion}`}
              >
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: "text",
  placeholder: "",
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};
