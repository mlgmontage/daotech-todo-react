import { withProviders } from "./providers/with-providers";
import Routing from "../pages";

const App = () => {
  return <Routing />;
};

export default withProviders(App);
