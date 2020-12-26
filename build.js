const fs = require('fs');
const {execSync} = require('child_process');
const stripJsonComments = require('strip-json-comments');

if (!process.argv[2]) {
  throw new Error('missing package name to build');
}

const packageName = process.argv[2];
const configDir = "./projects/" + packageName + "/tsconfig.lib.json";
const exportConfigDir = "./projects/" + packageName + "/paths.json";

const config = JSON.parse(stripJsonComments(fs.readFileSync(configDir, "utf8")));
config.compilerOptions.paths = {};

function takeAndTracePath(pathKey, pathValue) {
  config.compilerOptions.paths[pathKey] = pathValue;
  const tracedExportConfigDir = "./projects/" + pathKey + "/paths.json";
  if (fs.existsSync(tracedExportConfigDir)) {
    const tracedExportConfig = JSON.parse(fs.readFileSync(tracedExportConfigDir, "utf8"))
    if (Object.keys(tracedExportConfig).length > 0) {
      for (const path in tracedExportConfig) {
        takeAndTracePath(path, tracedExportConfig[path]);
      }
    }
  }
}

if (fs.existsSync(exportConfigDir)) {
  const exportConfig = JSON.parse(fs.readFileSync(exportConfigDir, "utf8"));
  for (const path in exportConfig) {
    takeAndTracePath(path, exportConfig[path]);
  }
  fs.writeFileSync(configDir, JSON.stringify(config, null, 2));
}

const buildCommand = "ng build " + packageName + " --prod=true";

execSync(buildCommand, {stdio: 'inherit'});
