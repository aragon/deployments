# Deployments [![Build Status](https://travis-ci.org/aragon/deployments.svg?branch=master)](https://travis-ci.org/aragon/deployments)

:package: Real-world deployments of code powering Aragon organizations to Ethereum networks.

> For information related to Aragon Network deployments, see [`aragon-network-deploy`](https://github.com/aragon/aragon-network-deploy).

## Environments

| Environment | Network | Info | URL |
|-------------------|------------------|---------------------------------------------|-------------------------------------|
| Mainnet | Mainnet | [Mainnet](./environments/mainnet) | https://client.aragon.org |
| Rinkeby (testnet) | Rinkeby | [Rinkeby (testnet)](./environments/rinkeby) | https://client.aragon.org |
| Polygon Mainnet | Matic | [Polygon mainnet](./environments/matic) | https://client.aragon.org |
| Polygon Testnet | Mumbai | [Polygon testnet](./environments/matic) | https://client.aragon.org |

## Scripts

To use the scripts or commit changes to the repo, please initialize via `yarn` first.

### `scripts/decompress`

It will traverse all the compressed files for versions of the different environments and save them to the `decompressed` directory.

The `decompressed` directory will contain an archive for all saved versions published in all environments. This directory can then be added and pinned to IPFS and ensures availability of all the files of the system.

### `scripts/save`

The `save` scripts can be used to log a version of a repo published to APM.

Usage:

```
scripts/save [repo name] [publish tx hash] [commit hash] --environment [name]
```

It will check the version published in that transaction, fetch and archive the content of the version and create an entry in the environment `deploys.yml` file.

Example:

```
$ scripts/save token-manager 0x6252302b892d2819eecc3a5400346469bc922fcdaab840c4859c8895a0f39e6c  ede0a45a55e8bb33ba84ac11c6989385416d8049 --environment staging

Fetching info for 'token-manager.aragonpm.eth' on staging...
Creating deployment record for token-manager.aragonpm.eth@1.0.0 on staging
Saving archive to environments/staging/token-manager.aragonpm.eth/token-manager.aragonpm.eth@1.0.0.tar.gz
```
