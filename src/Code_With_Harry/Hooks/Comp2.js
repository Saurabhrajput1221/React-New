import React from "react";
import Comp3 from "./Comp3";

export default function Comp2({ state }) {
  return (
    <>
      <div>Comp2</div>
      {/* Drilling of props to component 3 */}
      <Comp3 state={state} />
    </>
  );
}
