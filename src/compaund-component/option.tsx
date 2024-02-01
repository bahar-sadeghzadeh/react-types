import { PropsWithChildren } from "react";
import { useSelectContext } from "./useSelectContext";

interface iOptionProps extends PropsWithChildren {
  value: string;
}

const Option = ({ value, children }: iOptionProps) => {
  const { activeOption, setActiveOption } = useSelectContext();

  return (
    <option value={value} onClick={() => setActiveOption(value)}>
      {children}
    </option>
  );
};

export default Option;
