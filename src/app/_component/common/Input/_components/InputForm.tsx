import { forwardRef, memo, useContext } from "react";

import { cn } from "@/utils/function/cn";

import { InputContext } from "..";

interface InputFormProps extends React.HTMLProps<HTMLInputElement> {
  className?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputForm = memo(
  forwardRef<HTMLInputElement, InputFormProps>(
    ({ className, ...props }, ref) => {
      const { inputText, setInputText } = useContext(InputContext);

      return (
        <input
          {...props}
          ref={ref}
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          className={cn(className, "bg-transparent")}
        />
      );
    }
  )
);

InputForm.displayName = "InputForm";

export default InputForm;
