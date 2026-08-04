import Container from "@/layout/container";

import Head from "@/components/common/head";
import Paragraph from "@/components/common/Paragraph";
import {aboutpageInfo,aboutPageFeatures,aboutPageTechnologies, aboutPageDisclaimer} from "@/constants/appContants"

const About = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
            <Head
              text="About CineFlix"
              className="text-4xl font-bold"
            />

            <Paragraph
              text="CineFlix is a modern movie discovery and Live TV Streaming application built with React.
                CineFlex is an Application built by LocalCode Technology, a subsidiary of RichBen Media Group and a sibling of Local Stream Ghana Ltd
              CineFlex allows users to browse trending movies, search for titles, explore movie details, and watch official trailers using data provided by The Movie Database (TMDB) and also its a Streaming Site for all Satellite, Internet & Terrestrial Television Stations Configured By Local Stream Ghana Ltd.   "
              className="text-lg text-neutral-400"
            />
          </div>

          {/* Features */}
          <div className="space-y-6">
            <Head
              text="Features"
              className="text-2xl"
            />

            <ul className="list-disc space-y-3 pl-6 text-neutral-300">
              <li>Browse trending and popular movies.</li>
              <li>Search movies by title.</li>
              <li>Filter movies by genre, year, and popularity.</li>
              <li>View detailed movie information.</li>
              <li>Watch official movie trailers.</li>
              <li>Responsive design for desktop and mobile devices.</li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-6">
            <Head
              text="Technologies Used"
              className="text-2xl"
            />

            <div className="flex flex-wrap gap-3">
             {aboutPageTechnologies.map((item,index)=>{
              return <Paragraph key={index} className="bg-neutral-900 border border-white/10  py-4 px-5 rounded-xl text-neutral-300 text-sm">{item}</Paragraph>
             })}
            </div>
            
          </div>

          {/* Disclaimer */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
            <Head
              text="Disclaimer"
              className="text-xl"
            />

            <Paragraph
              text={aboutPageDisclaimer}
              className="mt-3 text-neutral-400 "
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;