// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    login(email: string, password: string): void;
  }
}
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
  console.log('Custom command example: Login', email, password);
});
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// adapted from https://github.com/cypress-io/cypress/issues/249#issuecomment-670028947
for (const commandName of [
  'visit',
  'click',
  'trigger',
  'type',
  'clear',
  'reload',
] as const) {
  // we add 2s delays for a few commands so that stakeholders can see what's going on
  const commandWithDelay = ((
    command: (...args: unknown[]) => unknown,
    ...args: unknown[]
  ) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(command(...args)), 1000);
    })) as any as Cypress.CommandFnWithOriginalFn<typeof commandName>;

  Cypress.Commands.overwrite(commandName, commandWithDelay);
}
