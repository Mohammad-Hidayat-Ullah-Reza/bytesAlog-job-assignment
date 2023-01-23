import React from "react";

const OurProductSection = () => {
  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold uppercase text-center">Our Product</h2>
      {/* --------- Products Cards Container --------- */}
      <div className="flex items-center justify-between mt-10">
        {/* --------- 1st Card --------- */}
        <div className="max-w-sm flex flex-col items-center justify-center p-6">
          <div>
            <img
              className="w-40"
              src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold uppercase my-5">Seo</h3>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur dolores blanditiis, quae distinctio maiores hic
              accusamus? Placeat sint eius sunt.
            </p>
          </div>
        </div>

        {/* --------- 2nd Card --------- */}
        <div className="max-w-sm flex flex-col items-center justify-center p-6">
          <div>
            <img
              className="w-40"
              src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold uppercase my-5">Branding</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur dolores blanditiis, quae distinctio maiores hic
              accusamus? Placeat sint eius sunt.
            </p>
          </div>
        </div>

        {/* --------- 3rd Card --------- */}
        <div className="max-w-sm flex flex-col items-center justify-center p-6">
          <div>
            <img
              className="w-40"
              src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold uppercase my-5">Logo</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur dolores blanditiis, quae distinctio maiores hic
              accusamus? Placeat sint eius sunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProductSection;
