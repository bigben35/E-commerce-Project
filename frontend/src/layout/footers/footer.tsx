import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/img/logo/logo-2.png';
import SocialLinks from './social-links';

const footerWidget = [
  {
    id: 1,
    title: 'information',
    footer__links: [
      { list: 'About Us' },
      { list: 'Careers' },
      { list: 'Delivery Inforamtion' },
      { list: 'Privacy Policy' },
      { list: 'Terms & Condition' },
    ]
  },
  {
    id: 2,
    title: 'Customer Service',
    footer__links: [
      { list: 'Shipping Policy' },
      { list: 'Help & Contact Us' },
      { list: 'Returns & Refunds' },
      { list: 'Online Stores' },
      { list: 'Terms & Conditions' },
    ]
  },
]

const Footer = ({ style_2 }:{style_2?:boolean}) => {
  return (
    <>
      <section className={`footer__area footer-bg ${style_2 ? 'box-m-15' : ''}`}>
        <div className="footer__top pt-100 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="footer__widget mb-30">
                  <div className="footer__widget-title mb-25">
                    <Link href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                  <div className="footer__widget-content">
                    <p>Outstock is a premium Templates theme with advanced admin module. It’s
                      extremely customizable, easy to use and fully responsive and retina ready.</p>
                    <div className="footer__contact">
                      <ul>
                        <li>
                          <div className="icon">
                            <i className="fal fa-map-marker-alt"></i>
                          </div>
                          <div className="text">
                            <span>Add: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.</span>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fal fa-envelope-open-text"></i>
                          </div>
                          <div className="text">
                            <span>Email: Contact@basictheme.com</span>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fal fa-phone-alt"></i>
                          </div>
                          <div className="text">
                            <span>Phone Number: (800) 123 456 789</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {footerWidget.map(item => (
                <div key={item.id} className="col-xl-3 col-lg-3 col-md-3 col-12">
                  <div className="footer__widget mb-30">
                    <div className={`footer__widget-title ${item.id === 2 ? 'mb-25' : ''}`}>
                      <h5>{item.title}</h5>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__links">
                        <ul>
                          {item.footer__links.map((link, index) => (
                            <li key={index}><a href="#">{link.list}</a></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-7">
                <div className="footer__copyright">
                  <p>Copyright © <Link href="/">
                     Outstock
                  </Link>
                    all rights reserved. Powered by
                    <Link href="/">
                      Theme_pure
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
                <div className="footer__social f-right">
                  <ul>
                    <SocialLinks/>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;