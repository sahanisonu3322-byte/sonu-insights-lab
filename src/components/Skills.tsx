import { Code2, Database, BarChart3, FileSpreadsheet, Brain, Users } from "lucide-react";

const skillsData = [
  {
    icon: Code2,
    title: "Programming",
    items: ["Python", "SQL", "MySQL"],
  },
  {
    icon: Database,
    title: "Libraries",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    icon: BarChart3,
    title: "Visualization",
    items: ["Power BI", "Excel"],
  },
  {
    icon: Brain,
    title: "Concepts",
    items: ["Data Cleaning", "EDA", "Dashboard Design", "Predictive Analytics"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    items: ["Communication", "Teamwork", "Problem-solving", "Adaptability"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-slide-up">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              className="bg-skill-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-slide-up border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
