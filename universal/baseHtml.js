// (function baseHtmlWrapper(window, module) {
//   var cogz;
//   if (window) {
//     cogz = window.cogz;
//   } else {
//     cogz = require('./cogzMain');
//   }
//   cogz.addCog('baseHtml', function baseHtml(args) {
//     args = args || {};
//     args.tabTitle = args.tabTitle || 'Parts';
//     args.scripts = args.scripts ||
//       '    <script type="text/javascript" src="/cogzMain.js"></script>\n' +
//       '    <script src="/horizon/horizon.js"></script>',
//     args.directoryPath = args.directoryPath || 'index.html';
//
//     return [
//       '<!doctype HTML>',
//       '<!-- Generated by cogz.baseHtml ' + new Date() + '-->',
//       '<html>',
//       '  <head>',
//       '    <title>' + args.tabTitle + '</title>',
//       '    <meta charset="UTF-8">',
//       args.scripts,
//       '  </head>',
//       '  <body>',
//       '  </body>',
//       '</html>'
//     ].join('\n');
//
//   });
// })(typeof window === 'undefined' ? null : window,
//    typeof module === 'undefined' ? null : module);
