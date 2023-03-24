import Link from "next/link";

function ClientPage() {
    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                <li>
                    <Link href={`/clients/summer`}>Summer</Link>
                </li>
                <li>
                    <Link href={`/clients/nana`}>Nana</Link>
                </li>
                <li>
                    <Link
                        href={{
                            pathname: "/clients/[id]",
                            query: { id: "linda" },
                        }}
                    >
                        {/* 객체로 전달하는 방법이 있음 */}
                        Linda
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default ClientPage;
