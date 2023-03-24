import { useRouter } from "next/router";
import { useState } from "react";

function ClientProjectsPage() {
    // ex url > http://localhost:3000/clients/7
    const router = useRouter();

    function loadProjectHandler() {
        // router.push(`/clients/${router.query.id}/20`);
        router.push({
            pathname: "/clients/[id]/[clientId]",
            query: { id: router.query.id, clientId: 100 },
        });
    }

    return (
        <div>
            <h1>The Proejcts of a Given Client: {router.query.id}</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}

export default ClientProjectsPage;
