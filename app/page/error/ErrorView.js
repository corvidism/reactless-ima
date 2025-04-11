import template from './ErrorView.html?inline';

export function ErrorView({ error }) {
  const message = error.message || '';
  const stack = error.stack || '';

  return [template, { message, stack }];
}
