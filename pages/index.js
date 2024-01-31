import Cites from "@/components/templates/Cites";
import ExplainSite from "@/components/templates/ExplainSite";
import WeeklyState from "@/components/templates/WeeklyState";
import DailyState from "@/components/templates/DailyState";

const index = () => {
  return (
    <>
      <WeeklyState />
      <ExplainSite />
      <Cites/>
      <DailyState />
    </>
  );
};

export default index;
