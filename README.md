# Context Doesn't Save you from Unnecessary Renders

This is a demonstration of how React context can save you from _prop drilling_, but it can't save you from unnecessary renders. When a context provider's value is updated, it's _entire descendant tree_ has to be re-rendered. In this regard, it is no different or better than prop-drilling.

See the [hosted page](https://ethanrbrown.github.io/react-shared-state-demo/) or build locally.

Note: the hosted version is a production build, which naturally does not include `<React.StrictMode>`. If you run locally, you will see twice as many renders because of strict mode. See the [Strict Mode documentation](https://react.dev/reference/react/StrictMode) for more information.

To improve performance, you have to move to a more modern state management solution like [Jotai](https://jotai.org/) (demonstrated here), [Zustand](https://github.com/pmndrs/zustand), [Valtio](https://github.com/pmndrs/valtio), [MobX](https://mobx.js.org/README.html) or the like.

Compare the differences between:

- Prop drilling: [`src/AppDrilling.jsx`](src/AppDrilling.jsx)
- Context: [`src/AppContext.jsx`](src/AppContext.jsx)
- Jotai: [`src/AppJotai.jsx`](src/AppJotai.jsx)

To run:

```
pnpm install
pnpm dev
```
