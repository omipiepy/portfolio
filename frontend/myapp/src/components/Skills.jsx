import React from "react";

const skills = [
  {
    name: "MongoDB",
    img: "/mongo.png",
    desc: "NoSQL database design, aggregation pipelines, indexing, and scalable data modeling",
  },
  {
    name: "Node.js",
    img: "/node.png",
    desc: "REST APIs, async programming, authentication, and backend architecture",
  },
  {
    name: "React",
    img: "/react.png",
    desc: "Component-driven UI, hooks, state management, and performance optimization",
  },
  {
    name: "JavaScript",
    img: "/js.png",
    desc: "ES6+, async/await, closures, and browser APIs",
  },
  {
    name: "PostgreSQL",
    img: "/postgres.png",
    desc: "Relational schema design, joins, indexing, and query optimization",
  },
  {
    name: "Python",
    img: "/python.png",
    desc: "Scripting, automation, and backend logic",
  },
  {
    name: "C",
    img: "/c.png",
    desc: "Memory management, pointers, and low-level programming",
  },
  {
    name: "C++",
    img: "/cpp.png",
    desc: "OOP, STL, and performance-oriented programming",
  },
  {
    name: "HTML",
    img: "/html.png",
    desc: "Semantic markup and accessibility best practices",
  },
  {
    name: "CSS",
    img: "/css.png",
    desc: "Responsive layouts, Flexbox, Grid, and animations",
  },
  {
  name: "PHP",
  img: "/php.png",
  desc: "Server-side scripting, REST APIs, form handling, and database integration",
  },
  {
    name: "Git",
    img: "/git.png",
    desc: "Version control, branching, and collaboration workflows",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="flex  items-center min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl mt-20 font-bold mb-12 text-slate-900">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative border border-gray-200 rounded-2xl p-6
                        bg-white
                         flex flex-col items-center gap-4
                         hover:shadow-xl hover:scale-105
                         transition duration-300"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />

              <span className="font-semibold text-slate-800">
                {skill.name}
              </span>

              <p
                className="text-sm text-slate-600
                           
                           transition duration-300 text-center"
              >
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;