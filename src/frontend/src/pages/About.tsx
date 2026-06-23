import { GitHubIcon, LinkedInIcon, XIcon, profileImage } from "../icons"
import ExpandableButton from "../components/ExpandableButton"

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <img
          src={profileImage}
          alt="Profile"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover ring-2 ring-ring-custom"
        />
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold tracking-tight transition-transform duration-300 hover:scale-[1.02]">
            Dimpal Goyal{" "}
            <span className="text-xl text-on-surface-muted font-normal">· he/him</span>
          </h1>
          <p className="mt-2 text-lg text-on-surface-muted">Software Engineer</p>
          <p className="mt-6 max-w-md text-on-surface-body leading-relaxed">
            Building software that makes a difference. Passionate about clean code and elegant solutions.
          </p>
          <div className="mt-8 flex items-center justify-start gap-4">
            <ExpandableButton
              href="https://github.com/DimpalGoyal"
              icon={<GitHubIcon />}
              label="GitHub"
            />
            <ExpandableButton
              href="https://www.linkedin.com/in/dimpal-goyal-5136b3335/"
              icon={<LinkedInIcon />}
              label="LinkedIn"
            />
            <ExpandableButton
              href="https://x.com/dimpalgoyal129"
              icon={<XIcon />}
              label="X"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
