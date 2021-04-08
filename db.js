const { ModuleFilenameHelpers } = require("webpack");

function random(min, max) {
    return Math.random() * (max - min) + min;
}


module.export = random