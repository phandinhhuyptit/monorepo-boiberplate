function config(entry = []) {
    return [...entry, require.resolve('./src/preset/addDecorator')]
}

function managerEntries(entry = []) {
  return [...entry, require.resolve('./src/preset/register')]
}

module.exports = {
    config,
    managerEntries,
}