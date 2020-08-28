import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import PostsList from './components/PostList'
import EachPost from './components/EachPost'
import Admin from './components/Admin'
import ContactUs from './components/ContactUs'
import About from './components/About'
import NotFound from './components/NotFound'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <PostsList />
        </Route>

        <Route path='/blog/:id' component = {EachPost} />

        <Route path='/Admin'>
          <Admin />
        </Route>

        <Route path='/ContactUs'>
          <ContactUs />
        </Route>

        <Route path='/About'>
          <About />
        </Route>

        <Route >
          <NotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
