import {Route, Routes} from "react-router-dom";

export default function BlogApp() {
    return (
        <Routes>
            <Route index element={<h1>Blog Index</h1>} />
            <Route path="posts" element={<h1>Blog Posts</h1>} />
        </Routes>
    );
}
