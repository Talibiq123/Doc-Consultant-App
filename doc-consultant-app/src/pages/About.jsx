import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div className=" text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className=" text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className=" my-10 flex flex-col md:flex-row gap-12">
        <img
          className=" w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className=" flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Our app simplifies booking doctor appointments with just a few taps.
            Easily search for doctors based on specialty, location, and
            availability, then schedule your consultation in minutes. Forget the
            hassle of long waiting times and complicated booking processes.
          </p>
          <p>
            With a wide range of specialists available, you can choose the best
            fit for your health needs, backed by doctor profiles and patient
            reviews. We connect you with a wide network of specialists,
            including general practitioners, dermatologists, cardiologists, and
            more. Each doctor’s profile includes their qualifications,
            experience, and patient reviews, helping you make an informed choice
            for your healthcare needs.
          </p>
          <b className=" text-gray-800">Our Vision</b>
          <p>
            Receive timely reminders and stay updated on appointment changes.
            You can also opt for secure video consultations from the comfort of
            your home. Stay organized with appointment reminders and
            notifications. If you prefer, you can also book secure video
            consultations, allowing you to connect with doctors from the comfort
            of your home.
          </p>
        </div>
      </div>

      <div className=" text-xl my-4">
        <p>
          Why <span className=" text-gray-700 font-semibold">Choose Us</span>
        </p>
      </div>

      <div className=" flex flex-col md:flex-row mb-20">
        <div className=" border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className=" border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b> 
          <p>Access to the network of trusted healthcare professonal in your area.</p>
        </div>

        <div className=" border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>toilored recommnedation and reminders to help you stay on the top of your health.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
