import { BrowserRouter } from "react-router-dom";
interface Props {
	children?: React.ReactNode;
}
const RouterDecorator = ({ children }: Props) => (
	<BrowserRouter>{children}</BrowserRouter>
);
export default RouterDecorator;
