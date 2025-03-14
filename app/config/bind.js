import { ComponentUtils, PageRenderer, Window } from '@ima/core';

import { ClientPageRenderer } from './pageRenderer/ClientPageRenderer';
import { ServerPageRenderer } from './pageRenderer/ServerPageRenderer';
/**
 * @type import('@ima/core').InitBindFunction
 */
// eslint-disable-next-line no-unused-vars
export const initBindApp = (ns, oc, config) => {
  // You can set own Component utils here
  oc.get(ComponentUtils).register({
    $CssClasses: '$CssClasses',
  });

  if (oc.get(Window).isClient()) {
    oc.provide(PageRenderer, ClientPageRenderer, [
      '$Helper',
      '$Dispatcher',
      '$Settings',
      Window,
    ]);
  } else {
    oc.provide(PageRenderer, ServerPageRenderer, [
      '$Helper',
      '$Dispatcher',
      '$Settings',
    ]);
  }

  oc.bind('$PageRenderer', PageRenderer);
};
