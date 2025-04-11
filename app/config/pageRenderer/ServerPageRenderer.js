import { PageRenderer } from '@ima/core';
import Handlebars from 'handlebars';

export class ServerPageRenderer extends PageRenderer {
  constructor(helpers, dispatcher, settings) {
    super();
    this._helpers = helpers;
    this._dispatcher = dispatcher;
    this._settings = settings;
  }

  async mount(controller, view, pageResources, routeOptions) {
    const [pageTemplateString, data] = view(pageResources);
    const [documentTemplateString] = (
      routeOptions.documentView || this._settings.$Page.$Render.documentView
    )();
    const pageTemplate = Handlebars.compile(pageTemplateString);
    const documentTemplate = Handlebars.compile(documentTemplateString);

    const pageFragment = pageTemplate({ ...data, ...pageResources });

    let html = documentTemplate({
      CONTENT: pageFragment,
      ...data,
      ...pageResources,
    });

    return {
      documentView: html,
      status: 200,
    };
  }

  setState() {
    return Promise.resolve();
  }

  /**
   * @inheritDoc
   */
  update() {
    return Promise.reject(new Error('The update() is denied on server side.'));
  }

  /**
   * @inheritDoc
   */
  unmount() {
    // nothing to do
  }
}
