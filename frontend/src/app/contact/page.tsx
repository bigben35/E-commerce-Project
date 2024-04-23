import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/headers/header";
import Breadcrumb from "@/components/common/breadcrumb";
import breadcrumb_bg from "@/assets/img/page-title/page-title-2.jpg";
import ContactArea from "@/components/contact/contact-area";
import Footer from "@/layout/footers/footer";

export const metadata: Metadata = {
  title: "Contact Page",
};

export default function ContactPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* breadcrumb start */}
        <Breadcrumb
          bg_img={breadcrumb_bg}
          title="Contact Us"
          subtitle="Contact"
        />
        {/* breadcrumb end */}

        {/* contact area start */}
        <ContactArea />
        {/* contact area end */}

        {/* contact map start */}
        <section className="contact__map">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-xl-12">
                <div className="contact__map-wrapper p-relative">
                  <iframe src="https://maps.google.com/maps?hl=en&amp;q=Dhaka+()&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact map end */}
      </main>

      {/* footer start */}
      <Footer/>
      {/* footer end */}
    </Wrapper>
  );
}
