import dynamic from 'next/dynamic';

const DynamicBodyContact = dynamic(() => import('./_components/bodycontact'), {
    loading: () => <></>
})

export default function page() {
    return (
        <div>
            <DynamicBodyContact />
        </div>
    );
}