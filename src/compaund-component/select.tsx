import { PropsWithChildren, useState } from "react";
import { SelectContext } from "./useSelectContext";
import Option from "./option";

interface iSelectProps extends PropsWithChildren {}

const Select = ({ children }: iSelectProps) => {
  const [activeOption, setActiveOption] = useState<string>("");

  return (
    <SelectContext.Provider value={{ activeOption, setActiveOption }}>
      <select>{children}</select>
    </SelectContext.Provider>
  );
};

Select.Option = Option;

export default Select;
