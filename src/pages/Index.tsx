import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { AttackType } from "@/components/AttackType";
import { Impact } from "@/components/Impact";
import { Timeline } from "@/components/Timeline";
import { Cause } from "@/components/Cause";
import { Mitigation } from "@/components/Mitigation";
import { Reference } from "@/components/Reference";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground relative">
        <ParticleBackground />
        <Navbar />
        
        <main className="relative z-10">
          <Hero />
          <Introduction />
          <div id="attack-type">
            <AttackType />
          </div>
          <div id="impact">
            <Impact />
          </div>
          <div id="timeline">
            <Timeline />
          </div>
          <div id="cause">
            <Cause />
          </div>
          <div id="mitigation">
            <Mitigation />
          </div>
          <div id="reference">
            <Reference />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
