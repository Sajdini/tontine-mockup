import Cta from "@/components/cta/Cta";
import Info from "@/components/info/Info";
import { getLandingPage } from "@/sanity/sanity-utils";

const Home = async () => {
  const landingPage = await getLandingPage();
  console.log(landingPage);
  return (
    <>
      <div>{landingPage[0]?.title}</div>
      <Cta />
      <Info />
    </>
  );
};

export default Home;
