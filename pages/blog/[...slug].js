import { useRouter } from "next/router";

function BlogPostsPage() {
    // [...slug].js : 배열 형식으로 query parameter가 들어옴
    // ex url > http://localhost:3000/blog/whatever/you/want
    const router = useRouter();

    return (
        <div>
            <h1>The BLog Posts</h1>
        </div>
    );
}

export default BlogPostsPage;
