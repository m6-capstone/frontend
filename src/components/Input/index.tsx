import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";
import { InputCurl } from "./style";

import { InputHTMLAttributes, useState } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  placeholder?: string;
  width?: string;
  defaultValue?: string;
  register: object;
  error:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined
    | string;
  className?: string;
}

export const Input: React.FC<Props> = ({
  label,
  type = "text",
  placeholder,
  width = "default",
  defaultValue,
  register,
  error,
  className,
}) => {
  const [value, setValue] = useState<string>(defaultValue ? defaultValue : "");

  return (
    <InputCurl type={type} width={width} className={className}>
      <label className="inputCurl__label">{label}</label>
      <input
        className={error ? "inputCurl__input error" : "inputCurl__input"}
        placeholder={placeholder}
        value={value}
        type={type}
        {...register}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputCurl>
  );
};
