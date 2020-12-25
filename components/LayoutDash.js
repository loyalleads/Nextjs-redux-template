import Head from "next/head";
import Navbar from "./Navbar";
import NavbarTop from './NavbarTop'
import NavbarSide from './NavbarSide'

const LayoutDash = (props) => {
  return (
    <div>
      <Head>
        {/* BoootStrap */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        ></link>
        {/* Google Fonts  */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Subrayada&family=Montserrat:wght@300;600&family=Raleway:wght@300;600&family=Quicksand:wght@300;600;900&display=swap"
          rel="stylesheet"
        ></link>

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossOrigin="anonymous"
        />

        <html dir="ltr" lang="en"></html>
        <meta
          name="viewport"
          content="width=device-width, initial-scale"
        ></meta>
        <title>Bitz Price</title>
      </Head>

      <NavbarTop />
      <div className="container-fluid">
        <div className="row">
          <NavbarSide />
          <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 appBody">
            {props.children}
          </div>
        </div>
      </div>
 
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default LayoutDash;
