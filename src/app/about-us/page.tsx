import LoadingComponent from "@/app/_service/clientside/components/loading";
import dynamic from "next/dynamic";

export default function page() {
    const DynamicBodyAbout = dynamic(() => import('./_components/bodyabout'), {
        loading: () => <LoadingComponent />
    })
    
    return <DynamicBodyAbout />
}