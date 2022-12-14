import './App.css';
import { Route} from "react-router-dom";
import PostListContainer from "./Containers/PostListContainer";
import PostPage from "./pages/PostPage";

function App() {
  return (
		<>
			<Route path="/" component={PostListContainer} exact={true} />
			<Route path="/:id" component={PostPage} />
		</>
  );
}

export default App;
