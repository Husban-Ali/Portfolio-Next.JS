import React from "react";

function Services() {
  return (
    <>
      <section className="py-6 dark:bg-black" id="Service">
        <br></br>
        <br></br>
        <br></br>
        <center>
          <h1 className="text-5xl font-bold">Services</h1>
        </center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative group">
              <img
                className="object-cover w-full h-80 dark:bg-gray-500"
                src="/Web.jpg"
                alt="Service 1"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1
                  className="text-white"
                  style={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    fontSize: "2em",
                  }}
                >
                  Web Development
                </h1>
              </div>
            </div>
            <div className="relative group">
              <img
                className="object-cover w-full h-80 dark:bg-gray-500"
                src="/SEO.jpg"
                alt="Service 2"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1
                  className="text-white"
                  style={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    fontSize: "2em",
                  }}
                >
                  SEO
                </h1>
              </div>
            </div>
            <div className="relative group">
              <img
                className="object-cover w-full h-80 dark:bg-gray-500"
                src="/Animation.jpg"
                alt="Service 3"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1
                  className="text-white"
                  style={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    fontSize: "2em",
                  }}
                >
                  Animation
                </h1>
              </div>
            </div>
            <div className="relative group">
              <img
                className="object-cover w-auto h-80 dark:bg-gray-500"
                src="/software House.jpg"
                alt="Service 4"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1
                  className="text-white"
                  style={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    fontSize: "2em",
                  }}
                >
                  E-commerce
                </h1>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </section>
    </>
  );
}

export default Services;
