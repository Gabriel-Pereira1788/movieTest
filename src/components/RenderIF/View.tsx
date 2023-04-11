import React from "react";

type RenderIFProps = {
  condition: boolean;
  AlternativeComponent?: JSX.Element;
  children: React.ReactNode;
};

export default function RenderIF({
  condition,
  children,
  AlternativeComponent,
}: RenderIFProps) {
  if (!condition && AlternativeComponent) {
    return <>{AlternativeComponent}</>;
  }
  return <>{children}</>;
}

