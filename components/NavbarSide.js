import Link from "next/link";

const NavbarSide = (props) => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link active" aria-current="page">
                <i className="fas fa-home"></i> Home
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/dashboard">
              <a className="nav-link active" aria-current="page">
                <i className="fas fa-home"></i> Dashboard
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#">
              <a className="nav-link">
                <i className="far fa-file me-1 ms-1"></i>Orders
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#">
              <a className="nav-link">
                <i className="fas fa-shopping-cart me-1"></i>Products
              </a>
            </Link>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <Link href="#">
            <a className="link-secondary" aria-label="Add a new report"></a>
          </Link>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <Link href="#">
              <a className="nav-link">Current month</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavbarSide;
