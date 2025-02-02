import { Typography } from "@mui/material";
import LogWelcome from "./logwelcome";
import dynamic from 'next/dynamic'

const BodyPortofolio = dynamic(() => import('./_service/clientside/components/body'))

export default function Home() {
  return (
    <>
      <LogWelcome />
      <BodyPortofolio />
      <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, facilis nostrum. Sunt beatae voluptatibus harum, consequatur vitae sapiente, animi fugit quo inventore reiciendis, rem nihil! Commodi minus itaque vel eius.</Typography>
    </>
  );
}
