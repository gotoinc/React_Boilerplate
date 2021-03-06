import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RouterConfig, RoutesWithSubRoutes } from './routes';

const App = ({
  match: {
    params: { locale = '' },
  },
}) => {
  useEffect(() => {
    console.log('app locale', locale);
  }, [locale]);

  const { routes, noRouteFound } = RouterConfig();
  return (
    <div id="body">
      <Switch>
        {routes.map(route => {
          return <RoutesWithSubRoutes key={route.path} {...route} />;
        })}
        {noRouteFound}
      </Switch>
    </div>
  );
};

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      locale: PropTypes.string,
    }),
  }).isRequired,
};

export default App;
