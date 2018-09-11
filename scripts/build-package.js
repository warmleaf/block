var chalk = require("chalk");
var emoji = require("node-emoji");
var getDiretories = require("../helpers/get_diretories");
var path = require("path");
var cp = require("child_process");

var __root = path.resolve(__dirname, "../");
var _out_ = [];

async function build() {
  var pkg = await getDiretories(__root + "/packages");
  return Promise.all(
    pkg.map(async item => {
      var components = await getDiretories(
        __root + "/packages/" + item + "/src"
      );
      return Promise.all(
        components.map(async component => {
          var babel = __root + "/node_modules/.bin/babel";
          var pkg_root = __root + "/packages/" + item;
          var error = false;
          try {
            await cp.execSync(
              `${babel} --config-file ${pkg_root}/.babelrc  ${pkg_root}/src/${component}/*[!story].js -d ${pkg_root}/lib/${component}`
            );
          } catch (err) {
            error = true;
          }
          _out_.push({
            error,
            package: item,
            name: component
          });
        })
      );
    })
  );
}

build().then(() => {
  console.log(
    `
${chalk.green(emoji.emojify(":tada:  build success!"))}
${_out_
      .filter(i => !i.error)
      .map(
        i =>
          "    " +
          chalk.cyan("@rbu/" + i.package) +
          " - " +
          chalk.green(i.name)
      )
      .join("\n")}`
  );
  if (_out_.filter(i => i.error).length) {
    console.log(
      `
${chalk.red(emoji.emojify(":rotating_light:  failed packages!"))}
${_out_
        .filter(i => i.error)
        .map(
          i =>
            "    " +
            chalk.cyan("@rbu/" + i.package) +
            " - " +
            chalk.red(i.name)
        )
        .join("\n")}
        `
    );
  }
});
