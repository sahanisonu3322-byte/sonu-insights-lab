import { GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    degree: "M.Tech in Biotechnology",
    institution: "National Institute of Technology, Warangal",
    duration: "2024 – Present",
    cgpa: "7.6",
  },
  {
    degree: "B.Tech in Biotechnology",
    institution: "R.R Institute of Modern Technology, Lucknow",
    duration: "2020 – 2024",
    cgpa: "7.1",
  },
];

const certificationsData = [
  {
    title: "Python Programming Certificate",
    issuer: "Udemy",
    year: "2025",
  },
  {
    title: "Data Analyst Certificate",
    issuer: "Skillsiya",
    year: "2025",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-slide-up">Education</h2>
        <div className="space-y-6 mb-16">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-lg border border-border animate-slide-up hover:shadow-xl transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 mt-1">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-muted-foreground mb-1">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>{edu.duration}</span>
                    <span className="font-medium text-foreground">CGPA: {edu.cgpa}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-slide-up">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-lg border border-border animate-slide-up hover:shadow-xl transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 mt-1">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mt-1">{cert.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
