# NPM library with Web Components using Lerna, Rollup and Jest

## Build

`npm run build`

## Test

`npm run test`

### Publish

`npm run publish`

**Note:** The package are published in the [`@orwc` organization](https://www.npmjs.com/settings/orwc/packages)

### Use components in an Angular project

[Vaadin tutorial](https://vaadin.com/learn/tutorials/using-web-components-in-angular) helps you build an Angular project and use some of their Web Components.
In order to use the [`@orwc`](https://www.npmjs.com/settings/orwc/packages) Web Components, you only need to import them in your `app.component.ts`:

```ts
import '@orwc/component-a/dist/bundle.esm';
import '@orwc/component-b/dist/bundle.esm';
```

and use them in your `app.component.html`:

```html
<component-a></component-a>
<component-b></component-b>
```

## Lit

The starter project is independent for the moment and located into [./litelementproject](https://github.com/julien-deramond/o-web-components/tree/main/litelementproject).
