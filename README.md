ng new app1

npm install modernizr --save

npm install @types/modernizr --save-dev

cd node_modules/modernizr && .\bin\modernizr -c lib\config-all.json

npm install mobile-detect --save

### angular.json

```json
            "extractCss": true,
            "styles": [
              "src/styles.scss",
              { "input": "src/styles/sergio.scss", "bundleName": "carmen", "lazy": true }
            ],
            "scripts": [
              "node_modules/modernizr/modernizr.js",
              "node_modules/mobile-detect/mobile-detect.min.js",
              "node_modules/mobile-detect/mobile-detect-modernizr.js"
            ],
```