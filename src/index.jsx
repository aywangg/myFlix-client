import { createRoot} from 'react-dom/client';
import { MainView } from "./components/main-view/main-view";
import { MovieCard } from "./components/movie-card/movie-card";
import { MovieView } from "./components/movie-view/movie-view";

//import statement to bundle './index.scss'
import "./index.scss";

//main component
const MyFlixApplication = () => {
    return (
        <div className = "my-flix">
            <div> Good morning </div>
        </div>
    );
};

//finds root of app
const container = document.querySelector("#root");
const root = createRoot(container);

//tells React to render app in root DOM element
root.render(<MyFlixApplication/>);