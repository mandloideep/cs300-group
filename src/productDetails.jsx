import { useParams, useNavigate, useLocation } from "react-router";

export default function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();

  const navigate = useNavigate();

  return (
    <main>
      <h1>Product details</h1>
      <p>This is the product details page.</p>
      <p>Product ID: {id}</p>
      <a
        href="#"
        onClick={() => navigate("/")}
      >
        Go back
      </a>
      {console.log(location)}
    </main>
  );
}
