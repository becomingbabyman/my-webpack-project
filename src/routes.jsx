import { render } from 'react-dom'
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';
import { Route, IndexRoute } from 'react-router';
import HelloApp from 'HelloApp/client/HelloApp';
const AppRoutes = (
  <Route path="/">
    <IndexRoute component={HelloApp} />
    <Route path="*" component={() => <div>404</div>} />
  </Route>
);
ReactRouterSSR.Run(AppRoutes)


// NOTE: Rendering without ReactRouterSSR does not add a duplicate React.js

// import { render } from 'react-dom'
// import { Route, IndexRoute, Router, browserHistory } from 'react-router';
// import HelloApp from 'HelloApp/client/HelloApp';
// const rootElement = document.createElement('div');
// rootElement.id = 'react-app';
// document.body.appendChild(rootElement);
// render((
//   <Router history={browserHistory}>
//     <Route path="/">
//       <IndexRoute component={HelloApp} />
//     </Route>
//   </Router>
// ), document.getElementById('react-app'))
