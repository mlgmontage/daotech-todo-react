import Todo from "../pages/Todo";
import { withProviders } from "./providers/with-providers";

function App() {
  return <Todo />;
}

export default withProviders(App);
