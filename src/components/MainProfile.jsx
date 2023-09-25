import Analysis from "./Analysis";
import Formazione from "./Formazione";
import MainHeader from "./MainHeader";
import Resources from "./Resources";
import Suggested from "./Suggested";

const MainProfile = () => {
  return (
    <>
      <MainHeader />
      <Suggested />
      <Analysis />
      <Resources />
      <Formazione />
    </>
  );
};

export default MainProfile;
