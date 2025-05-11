import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {
  const swiperRef = useRef(null);
  const nextBtn = () => {
    swiperRef.current.isEnd
      ? swiperRef.current.slideTo(0)
      : swiperRef.current.slideNext();
  };
  const prevBtn = () => {
    const l = swiperRef.current.slides.length;
    swiperRef.current.isBeginning
      ? swiperRef.current.slideTo(l - 1)
      : swiperRef.current.slidePrev();
  };
  return (
    <>
      {/* header */}
      <header>
        <div className="container mx-auto py-4 md:py-6 flex justify-between">
          <a href="#" className="md:hidden">
            <span className="material-icons material-icons-outlined">
              dehaze
            </span>
          </a>
          <a href="#">
            <h1>
              <img src="/src/assets/logo-aloha.svg" alt="logo" />
            </h1>
          </a>
          <div className="flex items-center">
            <a href="#" className="hidden md:flex md:items-center me-12">
              <span className="material-icons">language</span>
              <span className="material-icons">arrow_drop_down</span>
            </a>
            <a href="#" className="text-base font-roboto hidden md:block me-12">
              Sign up
            </a>
            <a href="#" className="text-base font-roboto">
              Login
            </a>
          </div>
        </div>
      </header>
      {/* banner */}
      <section>
        <div className="w-full h-[50vh] relative">
          <div className="bg-[url(/src/assets/index-banner.jpg)] bg-cover bg-center h-full">
            <div className="destination-drop"></div>
          </div>
          <div className="text-white text-[32px] absolute top-50 left-50 translate-x-100 z-40 md:text-5xl font-raleway font-bold md:font-extrabold flex flex-col lg:flex-row items-center">
            <span>Discover your&nbsp;</span>
            <span>ideal hotel</span>
          </div>
          <div className="container md:w-10/12 lg:w-auto rounded-lg p-6 flex flex-col lg:flex-row bg-secondary absolute bottom-0 left-50 translate-x-50 translate-y-80/100 lg:translate-y-1/2">
            <div className="p-4 flex items-center rounded-sm bg-white font-open-sans mb-4 lg:mb-0 lg:me-4">
              <span className="material-icons me-4">place</span>
              <input
                type="text"
                placeholder="Destination"
                className="text-base text-tertiary focus-visible:outline-none"
              />
            </div>
            <div className="p-4 flex items-center rounded-sm bg-white font-open-sans mb-4 lg:mb-0 lg:me-4">
              <span className="material-icons me-4">date_range</span>
              <input
                type="text"
                placeholder="Check-in / Check-out"
                className="text-base text-tertiary focus-visible:outline-none"
              />
            </div>
            <div className="p-4 flex items-center rounded-sm bg-white font-open-sans mb-4 lg:mb-0 lg:me-4">
              <span className="material-icons me-4">person</span>
              <input
                type="text"
                placeholder="Guests"
                className="text-base text-tertiary focus-visible:outline-none"
              />
            </div>
            <a href="#" className="btn-dark rounded-sm">
              SEARCH
            </a>
          </div>
        </div>
      </section>
      {/* Top Choices */}
      <section className="mt-76 lg:mt-[118px]">
        <div className="container mx-auto">
          <h2 className="title mb-6">Top Choices</h2>
          <div className="mb-7">
            <a href="#" className="tab">
              <p className="tab-text">Bali</p>
              <p>128</p>
            </a>
            <a href="#" className="tab">
              <p className="tab-text">Okinawa</p>
              <p>67</p>
            </a>
            <a href="#" className="tab">
              <p className="tab-text">Taipei</p>
              <p>53</p>
            </a>
          </div>
          <div className="relative w-full">
            <Swiper
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                // when window width is >= 480px
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              // navigation={true}
              // modules={[Pagination, Navigation]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              <SwiperSlide>
                <img
                  src="/src/assets/top1.jpg"
                  className="rounded-lg w-full h-60 object-cover"
                  alt=""
                />
                <p className="font-open-sans font-bold text-accent text-base mt-2">
                  Hotel Aqua
                </p>
                <div className="mt-2 flex items-center">
                  <span className="me-1">
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                  </span>
                  <span className="text-sm text-tertiary">5.0</span>
                  <span className="text-xs text-muted">・2k reviews</span>
                </div>
                <div className="mt-2">
                  <span className="text-sm text-tertiary me-2">TWD 2,480</span>
                  <span className="text-xs text-muted line-through">
                    TWD 3,980
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/src/assets/top1.jpg"
                  className="rounded-lg w-full h-60 object-cover"
                  alt=""
                />
                <p className="font-open-sans font-bold text-accent text-base mt-2">
                  Hotel Aqua
                </p>
                <div className="mt-2 flex items-center">
                  <span className="me-1">
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                  </span>
                  <span className="text-sm text-tertiary">5.0</span>
                  <span className="text-xs text-muted">・2k reviews</span>
                </div>
                <div className="mt-2">
                  <span className="text-sm text-tertiary me-2">TWD 2,480</span>
                  <span className="text-xs text-muted line-through">
                    TWD 3,980
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/src/assets/top1.jpg"
                  className="rounded-lg w-full h-60 object-cover"
                  alt=""
                />
                <p className="font-open-sans font-bold text-accent text-base mt-2">
                  Hotel Aqua
                </p>
                <div className="mt-2 flex items-center">
                  <span className="me-1">
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                  </span>
                  <span className="text-sm text-tertiary">5.0</span>
                  <span className="text-xs text-muted">・2k reviews</span>
                </div>
                <div className="mt-2">
                  <span className="text-sm text-tertiary me-2">TWD 2,480</span>
                  <span className="text-xs text-muted line-through">
                    TWD 3,980
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/src/assets/top1.jpg"
                  className="rounded-lg w-full h-60 object-cover"
                  alt=""
                />
                <p className="font-open-sans font-bold text-accent text-base mt-2">
                  Hotel Aqua
                </p>
                <div className="mt-2 flex items-center">
                  <span className="me-1">
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                  </span>
                  <span className="text-sm text-tertiary">5.0</span>
                  <span className="text-xs text-muted">・2k reviews</span>
                </div>
                <div className="mt-2">
                  <span className="text-sm text-tertiary me-2">TWD 2,480</span>
                  <span className="text-xs text-muted line-through">
                    TWD 3,980
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/src/assets/top1.jpg"
                  className="rounded-lg w-full h-60 object-cover"
                  alt=""
                />
                <p className="font-open-sans font-bold text-accent text-base mt-2">
                  Hotel Aqua
                </p>
                <div className="mt-2 flex items-center">
                  <span className="me-1">
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                  </span>
                  <span className="text-sm text-tertiary">5.0</span>
                  <span className="text-xs text-muted">・2k reviews</span>
                </div>
                <div className="mt-2">
                  <span className="text-sm text-tertiary me-2">TWD 2,480</span>
                  <span className="text-xs text-muted line-through">
                    TWD 3,980
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/src/assets/top1.jpg"
                  className="rounded-lg w-full h-60 object-cover"
                  alt=""
                />
                <p className="font-open-sans font-bold text-accent text-base mt-2">
                  Hotel Aqua
                </p>
                <div className="mt-2 flex items-center">
                  <span className="me-1">
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                  </span>
                  <span className="text-sm text-tertiary">5.0</span>
                  <span className="text-xs text-muted">・2k reviews</span>
                </div>
                <div className="mt-2">
                  <span className="text-sm text-tertiary me-2">TWD 2,480</span>
                  <span className="text-xs text-muted line-through">
                    TWD 3,980
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/src/assets/top1.jpg"
                  className="rounded-lg w-full h-60 object-cover"
                  alt=""
                />
                <p className="font-open-sans font-bold text-accent text-base mt-2">
                  Hotel Aqua
                </p>
                <div className="mt-2 flex items-center">
                  <span className="me-1">
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                  </span>
                  <span className="text-sm text-tertiary">5.0</span>
                  <span className="text-xs text-muted">・2k reviews</span>
                </div>
                <div className="mt-2">
                  <span className="text-sm text-tertiary me-2">TWD 2,480</span>
                  <span className="text-xs text-muted line-through">
                    TWD 3,980
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/src/assets/top1.jpg"
                  className="rounded-lg w-full h-60 object-cover"
                  alt=""
                />
                <p className="font-open-sans font-bold text-accent text-base mt-2">
                  Hotel Aqua
                </p>
                <div className="mt-2 flex items-center">
                  <span className="me-1">
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                  </span>
                  <span className="text-sm text-tertiary">5.0</span>
                  <span className="text-xs text-muted">・2k reviews</span>
                </div>
                <div className="mt-2">
                  <span className="text-sm text-tertiary me-2">TWD 2,480</span>
                  <span className="text-xs text-muted line-through">
                    TWD 3,980
                  </span>
                </div>
              </SwiperSlide>
            </Swiper>
            <button
              type="button"
              className="bg-secondary p-2 flex item-center rounded-full absolute top-30 -translate-x-1/2 z-40"
              onClick={prevBtn}
            >
              <span class="material-icons">navigate_before</span>
            </button>
            <button
              type="button"
              className="bg-secondary p-2 flex item-center rounded-full absolute top-30 left-100 translate-x-1/2 z-40"
              onClick={nextBtn}
            >
              <span class="material-icons">chevron_right</span>
            </button>
          </div>
        </div>
      </section>
      {/* Popular Destinations */}
      <section className="mt-12 lg:mt-18">
        <div className="container mx-auto">
          <h2 className="title mb-6">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-x-[30px] md:gap-y-6">
            <a
              href="#"
              className="bg-[url(/src/assets/Osaka.jpg)] btn-destination"
            >
              <div className="destination-drop"></div>
              <div className="z-40">
                <p className="destination-country">JAPAN</p>
                <p className="destination-city">Osaka</p>
              </div>
              <span className="material-icons text-white z-40">
                expand_more
              </span>
            </a>
            <a
              href="#"
              className="bg-[url(/src/assets/Kyoto.jpg)] btn-destination"
            >
              <div className="destination-drop"></div>
              <div className="z-40">
                <p className="destination-country">JAPAN</p>
                <p className="destination-city">Kyoto</p>
              </div>
              <span className="material-icons text-white z-40">
                expand_more
              </span>
            </a>
            <a
              href="#"
              className="bg-[url(/src/assets/Reykjavic.jpg)] btn-destination"
            >
              <div className="destination-drop"></div>
              <div className="z-40">
                <p className="destination-country">ICELAND</p>
                <p className="destination-city">Reykjavík</p>
              </div>
              <span className="material-icons text-white z-40">
                expand_more
              </span>
            </a>
            <a
              href="#"
              className="bg-[url(/src/assets/Paris.jpg)] btn-destination"
            >
              <div className="destination-drop"></div>
              <div className="z-40">
                <p className="destination-country">FRANCE</p>
                <p className="destination-city">Paris</p>
              </div>
              <span className="material-icons text-white z-40">
                expand_more
              </span>
            </a>
            <a
              href="#"
              className="bg-[url(/src/assets/Roman.jpg)] btn-destination"
            >
              <div className="destination-drop"></div>
              <div className="z-40">
                <p className="destination-country">ITALY</p>
                <p className="destination-city">Roma</p>
              </div>
              <span className="material-icons text-white z-40">
                expand_more
              </span>
            </a>
            <a
              href="#"
              className="bg-[url(/src/assets/Bangkok.jpg)] btn-destination"
            >
              <div className="destination-drop"></div>
              <div className="z-40">
                <p className="destination-country">THAILAND</p>
                <p className="destination-city">Bangkok</p>
              </div>
              <span className="material-icons text-white z-40">
                expand_more
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* Get Inspiration */}
      <section className="mt-12 lg:mt-18">
        <div className="container mx-auto">
          <div className="flex justify-between mb-6">
            <h2 className="title">Get Inspiration</h2>
            <a href="#" className="btn-light">
              SEE MORE
            </a>
          </div>
          <Swiper
            allowTouchMove={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <img
                src="/src/assets/italy.jpg"
                className="big-card-img w-full h-70 object-cover"
                alt=""
              />
              <p className="big-card-title">The Fifth Most Visited Country</p>
              <p className="big-card-content">
                Italy is the fifth most visited country in the world, with a
                total of 52.3 million…
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/src/assets/italy.jpg"
                className="big-card-img w-full h-70 object-cover"
                alt=""
              />
              <p className="big-card-title">The Fifth Most Visited Country</p>
              <p className="big-card-content">
                Italy is the fifth most visited country in the world, with a
                total of 52.3 million…
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/src/assets/italy.jpg"
                className="big-card-img w-full h-70 object-cover"
                alt=""
              />
              <p className="big-card-title">The Fifth Most Visited Country</p>
              <p className="big-card-content">
                Italy is the fifth most visited country in the world, with a
                total of 52.3 million…
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* subscribe */}
      <section className="mt-12 py-6 md:py-23 bg-secondary">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="font-raleway font-bold md:font-extrabold text-2xl md:text-5xl">
            Subscribe for Exclusive Offer
          </h2>
          <div className="w-full md:w-10/12 lg:w-1/2 mt-4 md:mt-6 flex rounded-sm overflow-hidden">
            <input
              type="text"
              className="bg-white py-4 ps-5 w-2/3 placeholder:text-tertiary"
              placeholder="Your email address"
            />
            <a href="#" className="btn-dark w-1/3">
              SUBSCRIBE
            </a>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="py-6">
        <div className="container mx-auto lg:flex lg:justify-between">
          <div className="font-open-sans text-tertiary text-sm flex flex-col md:flex-row-reverse items-center md:justify-between">
            <div className="mb-4 md:mb-0 md:flex md:items-center">
              <a href="#" className="me-6">
                FAQs
              </a>
              <a href="#" className="me-6">
                Terms of use
              </a>
              <a href="#">Privacy policy</a>
            </div>
            <span className="lg:me-16">
              © 2020 ALOHA, Inc. All rights reserved.
            </span>
          </div>
          <div className="hidden lg:flex ">
            <a href="#" className="flex item-center me-6">
              <span class="material-icons me-2">language</span>
              <span className="font-open-sans text-tertiary text-sm">
                English
              </span>
              <span class="material-icons">arrow_drop_down</span>
            </a>
            <a href="#" className="flex item-center">
              <span class="material-icons me-2">attach_money</span>
              <span className="font-open-sans text-tertiary text-sm">TWD</span>
              <span class="material-icons">arrow_drop_down</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
