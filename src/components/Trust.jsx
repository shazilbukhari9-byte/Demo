import React from 'react'
import { Logos3 } from "./logos3"


const demoData = {
  heading: "Trusted by these companies",
  logos: [
    {
      id: "logo-1",
      description: "Swiggy",
      image: "https://play-lh.googleusercontent.com/FJ5W5ygiN-DYfpd2-3LqyN5F-OxDtQ7z_9v5nAeD4vOrN8kQitoOwULactKgKvktXowVEM491wE-unmGmnt8OWM",
      className: "h-13 w-auto",
    },
    {
      id: "logo-2",
      description: "Bajaj",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Bajaj_Auto_Ltd_logo.svg/1280px-Bajaj_Auto_Ltd_logo.svg.png",
      className: "h-13 w-auto",
    },
    {
      id: "logo-3",
      description: "hdfc",
      image: "https://assets.upstox.com/content/assets/images/cms/2024419/HDFC-Bank-emblem.png",
      className: "h-15 w-auto",
    },
    {
      id: "logo-4",
      description: "infosys",
      image: "https://markettimes.in/wp-content/uploads/2025/08/infosys-logo.png.original.png ",
      className: "h-15 w-auto",
    },
    {
      id: "logo-5",
      description: "makemytrip",
      image: "https://play-lh.googleusercontent.com/19I7zjhAAAud9AztLiIxD1MYVdHusoeaW2-7Fx2FUJvcVZBbUBcGKjBBVPsHkFBLWMs",
      className: "h-15 w-auto",
    },
    {
      id: "logo-6",
      description: "nykaa",
      image: "https://thecapitalmall.com/wp-content/uploads/2023/10/nykaa-Capital-Mall.png",
      className: "h-10 w-auto",
    },
    {
      id: "logo-7",
      description: "Phonepe",
      image: "https://play-lh.googleusercontent.com/ARGoCZk-5QCKPpyTsGhn1WahhPbVMa95T1U7clwnI8gjtW-YNY96rAANqFkuENbU35IbYF2Gjg2UjZXA495x0A",
      className: "h-12 w-auto",
    },
    {
      id: "logo-8",
      description: "Policy",
      image: "https://yt3.googleusercontent.com/ytc/AIdro_nSJPRNZHyvKFJXAk_IlQ3HaNzs5n-cE28lgZR6nMkE8Q=s900-c-k-c0x00ffffff-no-rj",
      className: "h-12 w-auto",
    },
    {
      id: "logo-9",
      description: "TCS",
      image: "https://give.do/static/img/logos/19WJ/9aad65c4-4ada-437d-a056-cd099c1e88ef.png",
      className: "h-10 w-auto",
    },
  ],
};

const Trust = () => {
  return (
    <div>
      <section className="py-12 bg-gray-50 border-t border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] font-black tracking-[0.25em] text-gray-400 uppercase mb-8">
            TRUSTED BY 500+ INDIAN ENTERPRISES & BPOS
          </p>
          <div className="w-full py-4 ">
            <Logos3 {...demoData} />;
          </div>
        </div>
      </section>
    </div>
  )
}

export default Trust