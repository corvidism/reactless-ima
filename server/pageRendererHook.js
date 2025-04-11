const { Event } = require('@ima/server/lib/emitter');

module.exports = function pageRenderer({ emitter }) {
  emitter.prependListener(Event.BeforeResponse, event => {
    const { documentView } = event.context.response;
    // documentView and viewAdapter are both react components
    // documentViewProps is an object with data (what data?)

    // reactPageRendererHook would render viewAdapter into string
    // then use react.createElement with documentView and documentViewProps and render it into viewAdapter
    // and convert the whole thing into html markup

    const appMarkup = documentView;

    event.context.response.content = '<!doctype html>\n' + appMarkup;
  });
};
