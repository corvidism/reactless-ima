import { RouteNames } from '@ima/core';
import { ErrorController } from 'app/page/error/ErrorController';
import { ErrorView } from 'app/page/error/ErrorView';
import { HomeView } from 'app/page/home/HomeView';
import { HomeController } from 'app/page/home/HomeController';
import { NotFoundController } from 'app/page/notFound/NotFoundController';
import { NotFoundView } from 'app/page/notFound/NotFoundView';

/**
 * @type import('@ima/core').InitRoutesFunction
 */
export const initRoutes = (ns, oc, routesConfig, router) => {
  return router
    .add('home', '/', HomeController, HomeView, {
      templateName: 'home',
    })
    .add(RouteNames.ERROR, '/error', ErrorController, ErrorView)
    .add(RouteNames.NOT_FOUND, '/not-found', NotFoundController, NotFoundView);
};
