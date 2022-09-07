# Webpack `strictExports` false-negative with empty files

Unused, non-existing exports do not trigger errors with `strictExports` if the file they're imported from is empty.

To reproduce:

```bash
$ git clone
$ yarn
$ yarn start
webpack 5.74.0 compiled successfully
# Uncomment the line in `getBiometricsSecret.ts` to only contain `export type {};`
$ yarn start
ERROR in ./klapp-sca-utils.ts 2:0-63
export 'getBiometricsSecret' (reexported as 'getBiometricsSecret') was not found in './getBiometricsSecret.ts' (module has no exports)
 @ ./index.ts 1:0-59 2:0-19
```

Notice that a runtime that implements JS modules (e.g. Node 18) would throw with a SyntaxError in both cases (as specified).

Similar to

- https://github.com/webpack/webpack/issues/4897
