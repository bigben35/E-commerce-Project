import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/headers/header";
import Breadcrumb from "@/components/common/breadcrumb";
import Footer from "@/layout/footers/footer";
import ProfileArea from "@/components/account/profile-area";
import ProfileMenuArea from "@/components/account/profile-menu-area";

export const metadata: Metadata = {
  title: "Account Page",
};

export default function AccountPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* breadcrumb start */}
        <Breadcrumb title="Account" subtitle="Account" />
        {/* breadcrumb end */}

        {/* profile area start */}
        <ProfileArea />
        {/* profile area end */}

        {/* profile menu area start */}
        <ProfileMenuArea />
        {/* profile menu area end */}
      </main>

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
