import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './Pages/Home/HomePage.component';
import SignUpPage from './Pages/SignUp/SignUpPage.componet';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path='/SignUp' component={SignUpPage} />
      </Switch>
    </div>
  )
}

export default App;
