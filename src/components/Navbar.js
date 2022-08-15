import { Link } from "react-router-dom";
import AddContact from "./AddContact";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light shadow">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        Contact App
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-link active"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/categories/family" className="nav-link">
                                    Family
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/categories/friend" className="nav-link">
                                    Friend
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/categories/work" className="nav-link">
                                    Work
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <AddContact />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
