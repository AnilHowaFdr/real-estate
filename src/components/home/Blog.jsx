import React from "react";
import BlogItems from "./BlogItems";
import { BlogData } from "../..";

const Blog = () => {
  return (
    <section className="py-20" id="About">
      <div className="container px-4 md:px-6 ">
        <div className="flex flex-col gap-3">
          <h3 className="uppercase font-primary text-lg text-center font-medium text-primary">
            Latest New
          </h3>
          <h2 className="heading2 text-center">From Our Blog</h2>
        </div>
        <div className="py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {BlogData.map((item, key) => (
            <BlogItems key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
