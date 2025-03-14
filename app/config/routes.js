import { RouteNames } from '@ima/core';
import { ErrorController } from 'app/page/error/ErrorController';
import { ErrorView } from 'app/page/error/ErrorView';
import { HomeController } from 'app/page/home/HomeController';
import { NotFoundController } from 'app/page/notFound/NotFoundController';
import { NotFoundView } from 'app/page/notFound/NotFoundView';

function fetchTemplate(templateName) {
  return `<div>
      <h1>{title}</h1>
      <p>Welcome to the IMA.js page! (this will return the template file for template: ${templateName})</p>
    </div>`;
}

/**
 * @type import('@ima/core').InitRoutesFunction
 */
export const initRoutes = (ns, oc, routesConfig, router) =>
  router
    .add('home', '/', HomeController, fetchTemplate, {
      templateName: 'home',
    })
    .add(RouteNames.ERROR, '/error', ErrorController, ErrorView)
    .add(RouteNames.NOT_FOUND, '/not-found', NotFoundController, NotFoundView);
