import { FaGithub, FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="flex content-end">
        <footer className="footer bg-[#DEAC80] text-neutral items-center p-4 ">
          <aside className="grid-flow-col items-center">
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              Veysel Arslan
            </p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a href="https://github.com/veyselarslan12" target="_blank">
              <FaGithub size={25}/>
            </a>
            <a href="https://www.youtube.com/channel/UCDHukZu7c3riXp0Ahtc_s9Q" target="_blank">
              <FaYoutube size={25} />
            </a>

          </nav>
        </footer>
      </div>
    </>
  );
}

export default Footer;
