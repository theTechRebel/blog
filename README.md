# Angular Powered DApp.Africa Blog

This is the front end for the DApp.Africa blog. The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Easiest way to host on Netlify, Github pages or any basic hosting provider is to do: `ng build --prod --output-path docs --base-href /` and upload / publish the `docs` folder.

## Apache Hosting for Permalinks

There is a `.htaccess` file located in `src/.htaccess` it has conditions that force https from http and allows perma-links. How this works is that on every http request the server (Apache) will serve the `index.html` file, allowing you to handle routing from angular-routes to show relevant content on whatever url the user requests. https://serverfault.com/questions/188373/apache-2-2-rewrite-force-all-requests-to-index-html

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
