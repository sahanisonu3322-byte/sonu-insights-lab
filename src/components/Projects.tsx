import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projectsData = [
  {
    title: "Optimization of HMF Production using Machine Learning",
    description: "Combined wet-lab and computational data for process optimization. Applied RSM, XGBoost, and Random Forest to improve model accuracy.",
    tags: ["Machine Learning", "XGBoost", "Random Forest", "Optimization"],
  },
  {
    title: "E-commerce Sales Analysis",
    description: "Analyzed large retail datasets using Python and visualization libraries. Found customer patterns and seasonal sales trends.",
    tags: ["Python", "Pandas", "Data Analysis", "Visualization"],
  },
  {
    title: "Sugarcane Production Analysis",
    description: "Studied global agricultural data to explore yield determinants. Used Python visualization to reveal productivity trends across continents.",
    tags: ["Python", "Agriculture", "Global Data", "Matplotlib"],
  },
  {
    title: "COVID-19 Data Visualization Dashboard",
    description: "Designed an interactive Power BI dashboard for worldwide data. Showed trends in confirmed cases, recoveries, and deaths.",
    tags: ["Power BI", "Dashboard", "COVID-19", "Interactive"],
  },
  {
    title: "HR Analytics Report",
    description: "Built dashboards analyzing workforce data and attrition rates using Power BI.",
    tags: ["Power BI", "HR Analytics", "Dashboard", "Business Intelligence"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 section-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-slide-up">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all hover:-translate-y-1 animate-slide-up border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
