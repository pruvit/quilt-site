import { paths } from 'constants';

export default () => ({
  path: paths.<%= camelEntityName %>,
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      const <%= pascalEntityName %> = require('./containers/<%= pascalEntityName %>Container').default;

      /*  Return getComponent   */
      cb(null, <%= pascalEntityName %>);

    /* Webpack named bundle   */
    }, '<%= pascalEntityName %>');
  },
});
