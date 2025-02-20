export const dynamic = "force-static"

import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Contact,
  StarsCanvas,
} from "@/components";
import { contacts } from "@/utils/constants";

export default function Home() {
  return (
    <div className="relatibe z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>

      <div className="md:fixed left-2 right-auto bottom-0 z-10 md:w-10 pb-16 md:pb-0">
        <ul className="flex justify-center md:flex-col link-wrapper gap-10 md:gap-5">
          {contacts.map((contact) => (
            <li key={contact.title} title={contact.title}>
              <a href={contact.link} target="_blank">
                <img
                  src={contact.icon}
                  alt={contact.title}
                  className="w-8 h-8 text-white mx-auto"
                />
              </a>
            </li>
          ))}
          <li className="md:hidden" title={"email"}>
              <a href={"mailto:kaushalchauhan1474@gmail.com"} target="_blank">
                <img
                  src={"/assets/icons/email.svg"}
                  alt={"email"}
                  className="w-8 h-8 text-white mx-auto"
                />
              </a>
            </li>
        </ul>
      </div>

      <div className="text-[#804dee] hidden md:block fixed left-auto right-2 bottom-0 z-10 w-10">
        <a
          href="mailto:kaushalchauhan1474@gmail.com"
          className="w-100 contact-link hover:text-white flex gap-5 justify-center"
        >
          <span>kaushalchauhan1474@gmail.com</span>
        </a>
      </div>
    </div>
  );
}
