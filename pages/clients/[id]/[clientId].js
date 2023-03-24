import { useRouter } from "next/router";

function SelectedClientIdPage() {
    // ex url > http://localhost:3000/clients/7/summer
    const router = useRouter();

    return (
        <div>
            <h1>The Project page for a Specific Project for a Selected Client: {router.query.clientId}</h1>
        </div>
    );
}

export default SelectedClientIdPage;
