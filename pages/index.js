import Cites from "@/components/templates/Cites";
import ExplainSite from "@/components/templates/ExplainSite";
import WeeklyState from "@/components/templates/WeeklyState";
import DailyState from "@/components/templates/DailyState";
import Header from "@/components/templates/Header";

const index = () => {
  return (
    <>
      <Header />
      <WeeklyState />
      <ExplainSite />
      <Cites/>
      <DailyState />
    </>
  );
};

export default index;
