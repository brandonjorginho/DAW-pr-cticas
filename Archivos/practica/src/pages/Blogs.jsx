import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Blogs = () => {
  const blogItems = [
    {
      imageUrl:
        "https://www.imf.org/-/media/Images/IMF/home-page/Main-Slider/2023/12/rotator-quota-pr-final-imf-james-mertz-dec2023.ashx",
      text: "Junta de Gobernadores del FMI aprueba un incremento del 50% de las cuotas de los países miembros del FMI",
    },
    {
      imageUrl:
        "https://www.imf.org/-/media/Images/IMF/home-page/Main-Slider/2023/11/blog-2656x1077-md-climate-cop28-adobe-stock.ashx",
      text: "Para alcanzar los objetivos climáticos es necesario aumentar la ambición política, los fondos privados y la innovación",
    },
    {
      imageUrl:
        "https://www.imf.org/-/media/Images/IMF/Publications/REO/WHD/2023/october/HERO-V1/reo-whd-hero-banner.ashx",
      text: "Asegurar una inflación baja y fomentar el crecimiento potencial",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none text-gray-500 hover:text-gray-700 z-10`}
        onClick={onClick}
      >
        <span className="fas fa-chevron-right"></span>
      </button>
    );
  }

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} absolute top-1/2 left-4 transform -translate-y-1/2 focus:outline-none text-gray-500 hover:text-gray-700 z-10`}
        onClick={onClick}
      >
        <span className="fas fa-chevron-left"></span>
      </button>
    );
  }


  return (
    <div className="max-w-4xl mx-auto mt-8 relative">
      <h1>Blogs aquí</h1>
      <Slider {...settings}>
        {blogItems.map((blog, index) => (
          <div key={index} className="relative">
            <img
              src={blog.imageUrl}
              alt={`Blog ${index + 1}`}
              className="w-full h-96 object-cover rounded-md shadow-md"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent bg-opacity-10">
              <p className="text-white" style={{ fontSize: '21px', fontWeight: '300' }}>{blog.text}</p>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Blogs;
