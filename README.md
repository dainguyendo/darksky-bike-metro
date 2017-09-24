# darksky-bike-metro
---
### Get Started
1. `yarn`
2. `npm run start`
3. `localhost:3000`

### Environment Variables
This application requires a `.env` file to be able to:
1. Call the Google Geocoding API
2. Invoke the lambda function to query the Dark Sky API

The file should resemble:
```python
# GOOGLE GEOCODE API KEY
GOOGLE_GEOCODE_API_KEY=<KEY>

# AWS KEYS TO INVOKE LAMBDAS
AWS_ACCESS_KEY=<ACCESS_KEY>
AWS_SECRET_ACCESS_KEY=<SECRET_KEY>
```

### Additional information
The application also invokes an [AWS Lambda Function](https://aws.amazon.com/lambda/) where the code is located in the `lambda/` folder. You can host it on your AWS account to run it locally.

## NPM Scripts
---
+ `npm run start`

 Bundles and serves application in development environment. Watches for changes in `src` and `webpack.config.js`

+ `npm run build`

 Bundles application in production environment. Consist of additional [Webpack](https://webpack.js.org/ "Webpack") processes such as minifying, extracting CSS and gzip.

+ `npm run debug`

  Runs node debugger to inspect issues with [Webpack](https://webpack.js.org/ "Webpack").

+ `npm run lint:js`

  Lints `*.js` files in `app` folder using according to specifications in `.eslintrc` file.

+ `npm run fix:lint:js`

  Fixes lint errors.

+ `npm run test:jest:watch`

  Runs [Jest](https://facebook.github.io/jest/ "Jest") in watch mode.

+ `npm run test:jest`

  Runs [Jest](https://facebook.github.io/jest/ "Jest")

+ `npm run clean:build`

  Deletes contents of `build` folder

## Development
---
Application utilizes [React](https://facebook.github.io/react/ "React") for building user interfaces, [Redux](http://redux.js.org/ "Redux") for state management, and [Webpack](https://webpack.js.org/) for bundling.
