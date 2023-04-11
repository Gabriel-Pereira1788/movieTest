import React from "react";

export function useAddFavorite() {
  const [state, setState] = React.useState("");

  return { state };
}

