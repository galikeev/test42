import { LeftSide, RightSide } from "./components";

import "./app.scss";

const App = () => {
    return (
        <div className="container">
            <div className="app">
                <LeftSide />
                <RightSide />
            </div>
        </div>
    );
};

export default App;
