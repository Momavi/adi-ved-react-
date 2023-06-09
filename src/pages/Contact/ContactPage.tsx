import { PhoneSVG, EmailSVG, PlaceSVG, room1, room2, room3, room4 } from "images/index";
import { EffectCoverflow, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Ymap from "components/Ymap";
import "./contact.scss";

function ContactPage() {
  return (
    <div className="page sm:container">
      <div className="mx-1 mb-8 mt-32 md:mt-36 lg:mb-16 lg:flex xl:mt-48">
        <div className="Montserrat w-full lg:w-5/6 lg:pr-16 lg:pl-16">
          <div className="mb-8 text-4xl font-medium preoldmb:mb-16 preoldmb:text-5xl lg:mb-32">
            <p>Запись в три</p>
            <p className="contact-gradient-text font-bold italic">
              прикосновения
            </p>
          </div>

          <div className="item-center flex flex-col md:mb-16 lg:items-start  xl:w-4/6">
            <input
              type="text"
              placeholder="Ваше имя"
              className="contact-input mb-8 w-full bg-transparent px-2 py-2"
            />
            <input
              type="text"
              placeholder="Ваш телефон"
              className="contact-input mb-8 w-full bg-transparent px-2 py-2"
            />
            <div className="mb-12 flex w-full flex-col items-center lg:mb-0">
              <button className="contact-btn visible text-white">
                мы вам позвоним
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="contact-map h-64 w-full lg:h-full">
            <Ymap />
          </div>
        </div>
      </div>
      <Swiper
        effect={"coverflow"}
        loop
        centeredSlides
        slidesPerView={2}
        spaceBetween={50}
        coverflowEffect={{
          rotate: 70,
          stretch: 100,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[Navigation, EffectCoverflow]}
        navigation
      >
        <SwiperSlide>
          <figure>
            <img src={room1} alt="room-1" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img src={room2} alt="room-1" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img src={room3} alt="room-1" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img src={room4} alt="room-1" />
          </figure>
        </SwiperSlide>
      </Swiper>
      <div className="mb-16 flex flex-col justify-around px-1 md:flex-row md:px-3">
        <div className="mb-4 flex items-center md:mb-0">
          <span className="mr-1 h-6">
            <PhoneSVG />
          </span>
          <div>
            <p className="font-semibold">Телефон</p>
            <p>+7 (925) 802-95-54</p>
          </div>
        </div>
        <div className="mb-4 flex items-center md:mb-0">
          <span className="mr-1 h-6">
            <EmailSVG />
          </span>
          <div>
            <p className="font-semibold">Почта</p>
            <p>gmail@gmail.com</p>
          </div>
        </div>

        <div className="mb-4 flex items-center md:mb-0">
          <span className="mr-1 h-6">
            <PlaceSVG />
          </span>
          <div>
            <p className="font-semibold">Адрес</p>
            <p>улица Дмитриевского, дом 1, этаж 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
