import React from "react";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Projects />
      <Inquiry />
      <Blog />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-[#0b0f33] text-white">
      <h1 className="text-2xl font-bold">finsweet</h1>
      <ul className="hidden md:flex gap-6 text-sm">
        <li>Home</li>
        <li>About us</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>FAQ</li>
        <li>Blog</li>
      </ul>
      <button className="border px-4 py-2 rounded-lg">Contact us</button>
    </nav>
  );
}

function Hero() {
  return (
    <section className="bg-[#0b0f33] text-white px-6 py-20">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-4">Building stellar websites for early startups</h2>
        <p className="text-gray-300 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex gap-4">
          <button className="bg-yellow-400 text-black px-5 py-3 rounded-md">View our work</button>
          <button>View Pricing</button>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const data = [
    { title: "Strategy" },
    { title: "Wireframing" },
    { title: "Design" },
    { title: "Development" }
  ];

  return (
    <section className="px-6 py-16 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-6">How we work</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {data.map((i, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold">{i.title}</h3>
            <p className="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-semibold mb-6">View our projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}

function ProjectCard() {
  return (
    <div className="bg-white shadow rounded-xl p-4">
      <div className="h-40 bg-gray-200 rounded mb-4"></div>
      <h3 className="text-lg font-semibold">Sample Project</h3>
      <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
}

function Inquiry() {
  return (
    <section className="px-6 py-16 grid md:grid-cols-2 gap-6 bg-gray-50">
      <div>
        <h2 className="text-3xl font-semibold">Building stellar websites for early startups</h2>
        <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
      </div>
      <form className="bg-[#0b0f33] text-white p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Send inquiry</h3>
        <input className="w-full p-2 mb-3 rounded text-black" placeholder="Your Name" />
        <input className="w-full p-2 mb-3 rounded text-black" placeholder="Email" />
        <input className="w-full p-2 mb-3 rounded text-black" placeholder="Paste your Figma link" />
        <button className="bg-yellow-400 text-black px-4 py-2 rounded w-full">Send Inquiry</button>
      </form>
    </section>
  );
}

function Blog() {
  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-semibold mb-6">Our blog</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}

function BlogCard() {
  return (
    <div className="shadow rounded-xl p-4 bg-white">
      <div className="h-40 bg-gray-300 rounded mb-3"></div>
      <p className="text-sm text-gray-500">19 Jan 2022</p>
      <h3 className="text-lg font-semibold">How one Webflow user scaled to $100K</h3>
      <p className="text-gray-600 mt-2 text-sm">Lorem ipsum dolor sit amet.</p>
      <button className="mt-3 text-blue-600">Read More</button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-10 bg-[#0b0f33] text-white mt-10">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold">finsweet</h2>
          <p className="text-gray-300 mt-2">We are always open to discuss your project.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Lets Talk!</h3>
          <p className="text-gray-300 mt-2">Improve your online presence.</p>
        </div>
      </div>
    </footer>
  );
}
