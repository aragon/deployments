# Deployments

:package: Real-world deployments of Aragon code to Ethereum networks.

## Environments

- [Staging (rinkeby)](./environments/staging)

## Scripts

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

## v0.5 deployments

Deployment history for v0.5 releases can be found [here](https://github.com/aragon/deployments/tree/v0.5). v0.5 has now been [deprecated](https://blog.aragon.org/deprecation-notice-on-v0-5-rinkeby-daos/).

They will be maintained in the master branch of this repo in the [deprecated directory](./deprecated) until after March 29th, 2019 when Aragon v0.5 support will be discontinued.

