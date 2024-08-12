import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="bi bi-facebook"></i>
            </a>


            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="bi bi-rocket-takeoff"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="bi bi-instagram"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="bi bi-linkedin"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="bi bi-github"></i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
         
        >
          © 2024 Copyright:  
          <a className="text-white" href="https://mdbootstrap.com/">
             {" "}<i class="bi bi-qr-code-scan"></i>  Pets Qr
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
