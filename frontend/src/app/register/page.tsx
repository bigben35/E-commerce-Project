import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/headers/header";
import Breadcrumb from "@/components/common/breadcrumb";
import RegisterForm from "@/components/forms/register-form";
import Footer from "@/layout/footers/footer";

export const metadata: Metadata = {
  title: "Register Page",
};

export default function RegisterPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* breadcrumb start */}
        <Breadcrumb title="Register" subtitle="Register" />
        {/* breadcrumb end */}

        {/* register area start */}
        <section className="login-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="basic-login">
                  <h3 className="text-center mb-60">Register From Here</h3>
                  {/* register form start */}
                  <RegisterForm />
                  {/* register form end */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* register area end */}
      </main>

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
