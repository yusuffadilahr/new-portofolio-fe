import LogWelcome from "./logwelcome";
import dynamic from 'next/dynamic'

const BodyPortofolio = dynamic(() => import('./_service/clientside/components/bodylanding'))
const MobileOnly = dynamic(() => import('./_service/clientside/components/mobileonly'))

export default function Home() {
  return (
    <>
      <LogWelcome />
      <BodyPortofolio />
      <MobileOnly />
    </>
  );
}
