import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl">About Me</h1>
      <h2>Hi everyone, I&apos;m Sami.</h2>
      <p>
        Since I was young, I have always had a passion for computers and
        technology, which guided me towards a career that I find comfortable and
        fulfilling.
      </p>
      <p>
        I went into a higher degree involving software web development and since
        day one, i knew this was for me.
      </p>
      <p>
        After that, i started working at Flat101 at 19 years old, (where i am
        still).
      </p>
      <p>
        I focus on ecommerce development, involving databases,backend and
        frontend.
      </p>
      <p>
        In my free time, I enjoy exploring different technologies and approaches
        to enhance my professional growth and skills.
      </p>
      <p>
        I consider myself a technology enthusiast, I enjoy discovering new
        things and learning from them. Whenever I have an opportunity to explore new ideas, I&apos;m always up
        for the challenge
      </p>
      <p>Right now im enhancing my Next.js, Vue and React skills. You can see some of my most recent projects in my <Link href="/" className="text-blue-300 hover:text-blue-500 transition-colors">Home page</Link> or <Link href="https://github.com/SamiFraca" className="text-blue-300 hover:text-blue-500 transition-colors">Github</Link>.</p>
      <p>You can also check my <Link href='https://www.linkedin.com/in/sami-fraca-amghar-76b640194/' className="text-blue-300 hover:text-blue-500 transition-colors">Linkedin</Link> to get more information about me.</p>
    </div>
  );
}
