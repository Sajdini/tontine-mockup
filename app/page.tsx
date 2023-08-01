import Cta from "@/components/cta/Cta";
import Info from "@/components/info/Info";
import { getLandingPage } from "@/sanity/sanity-utils";

const Home = async () => {
  const landingPage = await getLandingPage();

  const sections = landingPage[0]?.sections || [];
  return (
    <>
      {sections.map((section) =>
        section?._type === "section-cta" ? (
          <Cta key={section._id} cta={section} />
        ) : (
          <Info key={section._id} info={section} />
        )
      )}
    </>
  );
};

export default Home;
