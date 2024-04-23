import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/headers/header";
import Breadcrumb from "@/components/common/breadcrumb";
import Footer from "@/layout/footers/footer";
import BlogStandardArea from "@/components/blogs/blog-standard-area";

export const metadata: Metadata = {
  title: "Blog Page",
};

export default function BlogNoSidebarPage() {
  return (
    <Wrapper>
      {/* header start */}
      <Header />
      {/* header end */}

      <main>
        {/* breadcrumb start */}
        <Breadcrumb title="News & Blog" subtitle="Blog Standard" />
        {/* breadcrumb end */}

        {/* blog standard area start */}
        <BlogStandardArea no_sidebar={true} />
        {/* blog standard area end */}
      </main>

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
