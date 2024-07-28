import { Outlet } from "react-router-dom";
import profilePhoto from "../assets/profile-photo.jpg";

function AboutMe() {
  return (
    <>
      <section className="container flex items-center">
        <img
          src={profilePhoto}
          alt="profile-photo"
          className="w-[300px] h-[300px] rounded-full m-[50px]"
        />
        <div>
          <h2 className="text-4xl font-bold m-4 text-center">About Me</h2>
          <p className="font-serif text-xl mx-[90px] tracking-wide">
            Hello! I’m Veysel Arslan, a 26-year-old full-stack web developer
            currently living in Chicago, USA. I born and raised in Turkey 🇹🇷 ❤️.
            <br />
            <br />
            I embarked on a journey from a Civil Engineering background to the
            dynamic world of web development. My love for coding has driven me
            to explore and create within this exciting field.
            <br />
            I specialize in building innovative solutions and have a particular
            passion for artificial intelligence. Over the years, I've developed
            several projects that reflect my commitment to learning and growth.
            This portfolio is a glimpse into my work and the projects I'm proud
            to share. Feel free to explore my creations and delve into the
            source code on my GitHub.
            <br />
            <br />
            Thank you for visiting!
          </p>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default AboutMe;
