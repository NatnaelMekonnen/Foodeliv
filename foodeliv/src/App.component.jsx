import { Route, Switch } from "react-router";
import "./App.css";
import FoodsPage from "./Pages/FoodsPage/ListOfFoods.component";
import HomePage from "./Pages/Home/HomePage.component";
import PostPage from "./Pages/Post/PostPage.component";
import SignUpPage from "./Pages/SignUp/SignUpPage.componet";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/SignUp" component={SignUpPage} />
                <Route exact path="/Foods" component={FoodsPage} />
                <Route exact path="/Post" component={PostPage} />
            </Switch>
        </div>
    );
};

export default App;
