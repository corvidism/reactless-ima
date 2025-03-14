// this should be a dummy. Does nothing.

import { PageRenderer } from '@ima/core';

export class ClientPageRenderer extends PageRenderer {
    mount(controller, view, pageResources, routeOptions) {
        return {
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
    return Promise.resolve({
        status: 200
    })
  }

  /**
   * @inheritDoc
   */
  unmount() {
    // nothing to do
  }
}
