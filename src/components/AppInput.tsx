import React, { InputHTMLAttributes, forwardRef, memo } from "react";

type AppInputProps = InputHTMLAttributes<HTMLInputElement>;

const AppInput = forwardRef<HTMLInputElement, AppInputProps>((props, ref) => {
  return <input ref={ref} {...props} />;
});

export default memo(AppInput);
