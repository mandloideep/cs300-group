import { Outlet } from "react-router";

export default function ProductLayout() {
  return (
    <>
      <h1>Product Layout</h1>

      <div
        style={{ display: "flex", gap: "1rem", backgroundColor: "lightblue" }}
      >
        <Outlet />
      </div>
    </>
  );
}
