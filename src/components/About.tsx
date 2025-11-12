import { MapPin, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 section-bg">
      <div className="max-w-4xl mx-auto animate-slide-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h2>
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <div className="mb-6 flex flex-wrap gap-4 justify-center text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Warangal, Telangana, India (Open to Remote)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:sahanisonu3322@gmail.com" className="hover:text-primary transition-colors">
                sahanisonu3322@gmail.com
              </a>
            </div>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
            <p>
              I am an <strong>M.Tech Biotechnology student</strong> at the National Institute of Technology, Warangal, 
              passionate about <strong>data analytics, visualization, and business intelligence</strong>.
            </p>
            <p>
              I specialize in <strong>Python, SQL, MySQL, Power BI, and Excel</strong> for data-driven decision-making. 
              I enjoy transforming raw data into meaningful insights, visual stories, and strategic solutions.
            </p>
            <p>
              I'm currently exploring the intersection of <strong>machine learning and biotechnology analytics</strong>, 
              combining my academic background with cutting-edge data science techniques to solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
