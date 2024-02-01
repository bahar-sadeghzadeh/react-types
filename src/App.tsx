// Primitive types

import {
  ComponentProps,
  ReactElement,
  ReactFragment,
  ReactNode,
  ReactPortal,
} from "react";

// ReactElement
// ReactNode
// Jsx.Element
// @depricated ReactChild

type ImportantTypes = [
  ReactElement,
  ReactNode,
  ReactPortal,
  ReactFragment,
  JSX.Element
];

/////////////////////////////////////////

// Type helpers

// PropsWithChildren
// ComponentProps

export const Div = (props: ComponentProps<"div">) => {
  return <div {...props} />;
};

const Parent = () => {
  return <Div></Div>;
};
