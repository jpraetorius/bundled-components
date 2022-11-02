# Bundled Components

This project showcases building a component Library and then bundling it up in a way that makes all the components available to a consuming application. That application is mocked through the included `index.html` that uses the components.


## Bundlers

We show how to build such a library with a bunch of different modern bundlers. Our requirements are:

* all components need to be included and re-exported, so they are available through the bundle
* code should be minified but not tree-shaken
* CSS should also be bundled and provided in a combined CSS file

We set up the following bundlers, each of which creates a separate directory under `dist`

* [Faucet](https://www.faucet-pipeline.org/)
* [Vite](https://vitejs.dev/g)
* [ESBuild](https://esbuild.github.io/)
* [Rollup](rollupjs.org/)

You can run each of them individually by running `npm run build-${bundlername}` or all of them by just executing `npm run build`.

You can check out the results of the build through including the CSS and JS Files in `index.html` and serve that through `npm run serve` that will make the page accessible on [http://localhost:8080](http://localhost:8080).

## Components Architecture

The components follow the idea of progressive enhancement. They assume that an HTML structure with full data has been rendered to the page, so they can take control of it. The HTML structure the component expects is marked down in the respective `.html` Files. In real life these would get translated into whichever templating language your application uses.

Separate to that each component has its own styling and code. These get bundled up in the build step, so an application using these components, can include a single style sheet ans JS File to get everything running.

### Technologies

To implement the components, we use both a [native Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) as well as [Hotwire Stimulus](stimulus.hotwire.dev/). Don't forget that Stimulus controllers need to be explicitly registered for their magic to work.


## Components

### Accordeon

The accordeon is a list of elements that contain additional details. Out of these elements only one can be expanded. Expanding a new element collapses any other that are open.


### Download-Link

The download link is a link accompanied by a dialog that allows the user to choose some details. The dialog is initially hidden. When the link gets clicked, the dialog gets shown and the user can choose their options.
