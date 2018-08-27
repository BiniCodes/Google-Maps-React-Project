//https://stackoverflow.com/questions/38806320/how-to-configure-service-workers-with-create-react-app
//https://github.com/jeffposnick/create-react-pwa#what-additional-changes-might-be-needed

module.exports = {
    stripPrefix: 'build/',
    staticFileGlobs: [
      'build/*.html',
      'build/manifest.json',
      'build/static/**/!(*map*)'
    ],
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    swFilePath: 'build/service-worker.js'
};