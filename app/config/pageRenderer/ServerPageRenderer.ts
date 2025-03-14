// I'm doing something nasty here: turning IMA into server-side renderer only.
// This class will render files written in a template language. ClientPageRenderer will do nothing.
import { PageRenderer } from '@ima/core';

// router._handle()
// pageManager.manage()
// pageRenderer.mount()

export class ServerPageRenderer extends PageRenderer {
    mount(controller, view, pageResources, routeOptions) {
        // console.log({controller, view, pageResources, routeOptions})

        const { templateName } = routeOptions;
        // pageResources: what Controller.load() returns
        // routeOptions: overrides for things (documentView, managedRootView, viewAdapter)
        // console.log(routeOptions);

        // the simplest way to render a template: pass templateName through routeOptions
        // the view() is an universal Handlebars renderer: gets a template name and object with data, returns a string


        return {
            documentView: view(templateName),
            status: 200
        }
    }

    setState() {
        return Promise.resolve();
      }

        /**
   * @inheritDoc
   */
  update() {
    return Promise.reject(
      new Error('The update() is denied on server side.')
    );
  }

  /**
   * @inheritDoc
   */
  unmount() {
    // nothing to do
  }
}
