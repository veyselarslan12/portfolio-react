import { Outlet } from 'react-router-dom'
import profilePhoto from "../../assets/profile-photo.jpg";

function AboutMe() {
  return (
    <>
        <section className="container flex items-center">
        <img src={profilePhoto} alt="profile-photo" className="w-[300px] h-[300px] rounded-full m-[50px]"/>
        <div>
            <h2 className="text-4xl font-bold m-4">About Me</h2>
            <p>Hi I am a full stack web developer!!!</p>
        </div>
        </section>
        <Outlet />
    </>
  );
};

export default AboutMe