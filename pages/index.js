import Cites from "@/components/templates/Cites";
import ExplainSite from "@/components/templates/ExplainSite";
import WeeklyState from "@/components/templates/WeeklyState";
import DailyState from "@/components/templates/DailyState";
import Header from "@/components/templates/Header";
import connectionToDB from "@/utils/db";
import StateModels from "@/models/states";
import Head from "next/head";

const index = ({dailyStates}) => {
  return (
    <>
    <Head>
    <title> صفحه اصلی </title>
    </Head>
      <Header />
      <WeeklyState />
      <ExplainSite />
      <Cites/>
      <DailyState dailyStates={dailyStates} />
    </>
  );
};

export async function getStaticProps(params) {

  connectionToDB()
  const dailyState = await StateModels.find({})
  return {
    props:{
      dailyStates:JSON.parse(JSON.stringify(dailyState.slice(0,4)))
    }
  }
}



export default index;
