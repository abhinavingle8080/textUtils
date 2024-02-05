import {Route, Routes} from "react-router-dom";

export default function UserApp() {
    return (
        <Routes>
            <Route index element={<h1>Users Index</h1>} />
        </Routes>
    );
}