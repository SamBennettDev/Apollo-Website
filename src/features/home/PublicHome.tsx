import { PageContainer } from "@/components/PageContainer";
import ParticleWeb from "@/components/ParticleWeb";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const PublicHome = () => {
  return (
    <PageContainer className="flex flex-col">
      <ParticleWeb />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:max-w-[1200px] pointer-events-none">
        {/* Hero Section */}
        <h1 className="text-3xl text-center md:text-left md:text-7xl mx-[20px] md:mx-[40px] md:max-w-[750px] tracking-wide">
          Control Your Internet Experience
        </h1>
      </div>
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-full flex flex-col justify-start items-center md:items-end md:max-w-[1200px] pointer-events-none">
        <h2 className="text-xl md:text-3xl mx-[20px] md:mx-[40px] mb-6 text-center">
          Block Adult Content on All Your Devices
        </h2>
        <h2 className="text-xl md:text-3xl mx-[20px] md:mx-[40px] mb-12 text-center">
          Fast, Safe, Secure
        </h2>
        {/* Call to Action */}
        <Link to={"/Plans"}>
          <Button className="w-min md:text-3xl mx-[20px] md:mx-[40px] mb-12 text-xl p-8 pointer-events-auto">
            Try Now
          </Button>
        </Link>
      </div>
    </PageContainer>
  );
};
