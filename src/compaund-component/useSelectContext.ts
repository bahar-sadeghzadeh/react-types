import { createContext, useContext } from "react";

interface iSelectContext {
  activeOption: string;
  setActiveOption: (key: string) => void;
}

const SelectContext = createContext<iSelectContext | undefined>(undefined);

const useSelectContext = () => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error(
      "useSelectContext should be used within the scope of a Select component."
    );
  }

  return context;
};

export { SelectContext, useSelectContext };
