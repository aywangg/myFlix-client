import { createRoot} from 'react-dom/client';
import { MainView } from "./components/main-view/main-view";
import "./index.scss";
import Container from 'react-bootstrap/Container';

//main component
const MyFlixApplication = () => {
  return (
    <Container>
      <MainView />
    </Container>
  );
  };

//finds root of app
const container = document.querySelector("#root");
const root = createRoot(container);

//tells React to render app in root DOM element
root.render(<MyFlixApplication/>);

const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0',() => {
 console.log('Listening on Port ' + port);
});