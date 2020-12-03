import React from 'react';
<<<<<<< HEAD
import { Switch, Route } from 'react-router-dom';
=======
import { Switch, Route, Redirect } from 'react-router-dom';
>>>>>>> ded95278c04ccaec74854e318d3fa8350c16eb95
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';


<<<<<<< HEAD
class App extends React.Component {
 unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;


=======

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    
    const { setCurrentUser } = this.props;

>>>>>>> ded95278c04ccaec74854e318d3fa8350c16eb95
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
<<<<<<< HEAD
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
=======
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
>>>>>>> ded95278c04ccaec74854e318d3fa8350c16eb95
          });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} /> 
          <Route exact path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                  <SignInAndSignUpPage />
                )
            }
            />
        </Switch>
        
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
<<<<<<< HEAD

// dev-branch...

export default connect(null, mapDispatchToProps)(App);
=======

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
>>>>>>> ded95278c04ccaec74854e318d3fa8350c16eb95
