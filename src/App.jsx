function App() {
  return (
    <>
      <section>
        <div class="container mx-auto py-4 md:py-6 flex justify-between">
          <a href="#" class="md:hidden">
            <span class="material-icons material-icons-outlined">dehaze</span>
          </a>
          <a href="#">
            <img src="/src/assets/logo-aloha.svg" alt="" />
          </a>
          <div class="flex items-center">
            <a href="#" class="hidden md:flex md:items-center me-12">
              <span class="material-icons">language</span>
              <span class="material-icons">arrow_drop_down</span>
            </a>
            <a href="#" class="text-base font-roboto hidden md:block me-12">
              Sign up
            </a>
            <a href="#" class="text-base font-roboto">
              Login
            </a>
          </div>
        </div>
      </section>
      <section class="bg-[url(/src/assets/index-banner.jpg)] bg-cover bg-center h-[50vh] flex justify-center items-center relative">
        <div class="text-white text-[32px] z-40 md:text-5xl font-raleway font-bold flex flex-col lg:flex-row items-center">
          <span>Discover your&nbsp;</span>
          <span>ideal hotel</span>
        </div>
        <div className="destination-drop"></div>
        <div class="container md:w-80/100 lg:w-auto rounded-lg p-6 flex flex-col lg:flex-row bg-secondary absolute bottom-0 translate-y-80/100 lg:translate-y-1/2">
          <div className="p-4 flex items-center rounded-sm bg-white font-open-sans mb-4 lg:mb-0 lg:me-4">
            <span className="material-icons me-4">place</span>
            <input
              type="text"
              placeholder="Destination"
              className="text-base text-tertiary focus-visible:outline-none"
            />
          </div>
          <div className="p-4 flex items-center rounded-sm bg-white font-open-sans mb-4 lg:mb-0 lg:me-4">
            <span class="material-icons me-4">date_range</span>
            <input
              type="text"
              placeholder="Check-in / Check-out"
              className="text-base text-tertiary focus-visible:outline-none"
            />
          </div>
          <div className="p-4 flex items-center rounded-sm bg-white font-open-sans mb-4 lg:mb-0 lg:me-4">
            <span class="material-icons me-4">person</span>
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
      </section>
      <section className="mt-100">
        <div className="container mx-auto">
          <a href="#" className="btn-dark rounded-sm">
            SUBSCRIBE
          </a>
          <a href="#" className="btn-light">
            SEE MORE
          </a>
          <h2 className="title">Top Choices</h2>
          <a href="#" className="tab">
            <p className="tab-text">Bali</p>
            <p>128</p>
          </a>

          <a
            href="#"
            className="bg-[url(/src/assets/Osaka.jpg)] btn-destination"
          >
            <div className="destination-drop"></div>
            <div className="z-40">
              <p className="destination-country">JAPAN</p>
              <p className="destination-city">Osaka</p>
            </div>
            <span className="material-icons text-white z-40">expand_more</span>
          </a>

          <div>
            <img src="/src/assets/italy.jpg" className="big-card-img" alt="" />
            <p className="big-card-title">The Fifth Most Visited Country</p>
            <p className="big-card-content">
              Italy is the fifth most visited country in the world, with a total
              of 52.3 million…
            </p>
          </div>

          <div className="p-4 flex items-center rounded-sm">
            <span className="material-icons me-4">place</span>
            <input
              type="text"
              placeholder="Destination"
              className="text-base text-tertiary"
            />
          </div>

          <div>
            <img
              src="/src/assets/top1.jpg"
              className="rounded-lg h-[164px]"
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
              <span className="text-xs text-muted line-through">TWD 3,980</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
