#!/usr/bin/env node

const Web3 = require('web3')
const columnify = require('columnify')
const APM = require('@aragon/apm')

const NETWORKS = {
  'mainnet': {
    ens: '0x314159265dd8dbb310642f98f50c066173c1259b',
    node: 'https://mainnet.infura.io',
  },
  'rinkeby': {
    ens: '0xfbae32d1cde62858bc45f51efc8cc4fa1415447e',
    node: 'https://rinkeby.infura.io',
  },
}

const argv = require('yargs')
  .usage('Usage: $0 <repo ENS name> [options]')
  .option('network', {
    alias: 'n',
    choices: Object.keys(NETWORKS),
    default: 'mainnet',
    describe: 'network to use',
    type: 'string',
  })
  .demandCommand(1, "You must provide the repo's ENS name.")
  .argv

const repoName = argv._[0]
const network = argv.network

const web3 = new Web3(NETWORKS[network].node)
const apm = APM(web3, { ensRegistryAddress: NETWORKS[network].ens })

console.log(`Fetching info for '${repoName}' on ${network}...\n`)

apm
  .getAllVersions(repoName)
  .then(versions => {
    const data = versions.reduce(
      (data, {
        content: { provider = 'unknown', location = 'unknown' } = {},
        version
      }) => {
        data[`${repoName}@${version}`] = `${location} (${provider})`
        return data
      },
      {}
    )
    console.log(columnify(data, { columns: ['Version', 'Location'] }))
  })
  .catch(err => console.log('Unknown error occurred:', err))
  .finally(() => process.exit())
