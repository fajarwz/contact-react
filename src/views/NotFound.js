import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <div className="display-5 mb-3">Page not found :(</div>
        <Link className="btn btn-primary" to="/">
          Back to Home
        </Link>
      </div>
    </>
  );
}
