import { Outlet } from 'react-router-dom'
import profilePhoto from "../../assets/profile-photo.jpg";

function AboutMe() {
  return (
    <>
        <section className="container flex flex-col items-center">
        <img src={profilePhoto} alt="profile-photo" className="w-[30px] h-[30px]"/>
        <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p>Hi I am a full stack web developer!!!</p>
        </div>
        </section>
        <Outlet />
    </>
  );
};

export default AboutMe