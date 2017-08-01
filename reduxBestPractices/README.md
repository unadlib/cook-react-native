## Redux Best Practices.

### Instructions
        
1. If you encounter `transformError` at run time, you can try to npm install the following three Babel plugins:
     
        babel-plugin-transform-runtime
        babel-preset-es2015
        babel-preset-stage-2

2. The Redux of selector can use Reselect `createSelector`, and it can based on Normalizr `denormalize` or Redux-ORM `orm actions`.

3. The data dispatching of the middleware `NORMALIZR` can be one or more times.
