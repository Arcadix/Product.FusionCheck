const BaseConfig = require("./BaseConfig");

const ProductManagement_PCClient = (env, argv) => {
  let objBuild = BaseConfig.ClientSideConfiguration({
    ApplicationFolderName: "Application/c.ProductManagement/PC",
    MinimizeChunk: argv.minimize == "N" ? false : true,
  });
  return objBuild;
};

module.exports = [ProductManagement_PCClient];
