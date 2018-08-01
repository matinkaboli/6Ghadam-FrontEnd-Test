cp -r ./ "$1"
cd "$1"
yarn add -D autoprefixer babel-core babel-eslint babel-loader \
babel-plugin-add-module-exports babel-plugin-transform-class-properties \
babel-plugin-transform-decorators-legacy \
babel-plugin-transform-object-rest-spread babel-preset-env babel-preset-react \
css-loader del eslint eslint-plugin-react gulp gulp-eslint gulp-replace \
less less-loader postcss-loader prop-types react react-dom react-redux \
react-router-dom redux redux-thunk string-replace-loader style-loader \
uglifyjs-webpack-plugin url-loader webpack express
