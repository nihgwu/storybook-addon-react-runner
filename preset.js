function config(entry = []) {
  return [...entry, require.resolve("./dist/esm/preset/preview")];
}

function managerEntries(entry = []) {
  return [...entry, require.resolve("./dist/esm/preset/manager")];
}

async function configWebpack(config, { presets }) {
  const version = await presets.apply("webpackVersion");
  if (version === '5') {
    config.module.rules.push({
      test: /\.mjs$/,
      resolve: {
        fullySpecified: false,
      }
    });
  } else {
    config.module.rules.push({
      test: /\.mjs$/,
      type: "javascript/auto",
    });
  }

  return config;
}

module.exports = {
  managerWebpack: configWebpack,
  webpackFinal: configWebpack,
  managerEntries,
  config,
};
