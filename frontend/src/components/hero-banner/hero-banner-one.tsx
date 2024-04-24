'use client'
import Link from "next/link";
import Slider from "react-slick";
import { HeroSliderData } from "@/data/hero-slider-data";


// slick setting
const settings = {
  autoplay: false,
  autoplaySpeed: 10000,
  dots: true,
  fade: true,
  arrows: false,
};

// prop type
type IProps = {
  style_2?:boolean;
  slider_cls?:string;
}

const HeroSliderOne = ({ style_2=false,slider_cls }:IProps) => {
  const {hero_slider_one} = HeroSliderData;
  return (
    <>
      <section className={`slider__area ${style_2 ? `slider__area-${slider_cls?slider_cls:'2'}` : ''} p-relative`}>
        <Slider className='slider-active' {...settings}>
          {
            hero_slider_one.map((slider, index) => {
              return <div key={index}>
                <div className={`${style_2 ? 'single-slider-2 slider__height-5' : 'single-slider slider__height'} d-flex align-items-center`}
                  style={{ backgroundImage: `url(${slider.bgImg})`}}>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12">
                        <div className="slider__content p-relative z-index-1">
                          <h2 dangerouslySetInnerHTML={{ __html: slider.title }}></h2>
                          <p>{slider.subtitle} </p>
                          <div className="hero-slider-btn">
                            <Link href="/shop" className="os-btn os-btn-2">
                              Discover now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            })
          }
        </Slider>
      </section>
    </>
  );
};

export default HeroSliderOne;