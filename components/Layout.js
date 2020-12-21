import Head from "next/head";
import Navbar from "../components/Navbar";


const Layout = (props) => {
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
          href="https://fonts.googleapis.com/css2?family=Montserrat+Subrayada&family=Montserrat:wght@300;600&family=Raleway:wght@300;600;900&family=Quicksand:wght@300;600;900&display=swap"
          rel="stylesheet"
        ></link>

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https: //cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossorigin="anonymous"
        />
        <link
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        ></link>

        <html dir="ltr" lang="en"></html>
        <meta
          name="viewport"
          content="width=device-width, initial-scale"
        ></meta>
        <title>Bitz Price</title>
      </Head>
      <Navbar />

      <div className="container mt-4">{props.children}</div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default Layout;
