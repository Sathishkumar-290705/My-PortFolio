import React from "react";



const Skeleton = () => (
  <section className="max-w-[90%] mx-auto py-24 px-10 animate-pulse">
    <div className="h-10 w-64 bg-white/10 rounded mb-10" />

    <div className="grid md:grid-cols-3 gap-8">
      <div className="h-32 bg-white/10 rounded-xl" />
      <div className="h-32 bg-white/10 rounded-xl" />
      <div className="h-32 bg-white/10 rounded-xl" />
    </div>
  </section>
);

export default Skeleton;