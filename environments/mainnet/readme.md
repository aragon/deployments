# Mainnet

- [Permissions](./permissions.yml)
- [APM publish history](./deploys.yml)

## Artifacts

- Official ENS: `0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e`
- aragonID: `0x546aa2eae2514494eeadb7bbb35243348983c59d`
- aragonPM:
  - `aragonpm.eth`: `0x346854c542d437565339E60dE8CB3EfE1cAB30dC`
  - `hatch.aragonpm.eth`: `0x763f4f2dbA519A4c73ed59294f77bA77E30EFD1a`
  - `open.aragonpm.eth`: `0x12755944244f4f3ddffad19f7167c7db4f6f8359`
- DAOFactory:
  - 0.8.1 (**✅ RECOMMENDED**): `0x7378ad1ba8f3c8e64bbb2a04473edd35846360f1`
  - 0.8 (**✅ RECOMMENDED**): `0xb9da44c051c6cc9e04b7e0f95e95d69c6a6d8031`
  - 0.7 (**🙅 DEPRECATED**): `0xc29f0599df12eb4cbe1a34354c4bac6d944071d1`
  - 0.6 (**🙅 DEPRECATED**): `0x595b34c93aa2c2ba0a38daeede629a0dfbdcc559`
- MiniMeTokenFactory: `0x909d05f384d0663ed4be59863815ab43b4f347ec`

### aragonOS

- Kernel:
  - v1.1: `0x2b33cf282f867a7ff693a66e11b0fcc5552e4425`
  - v1.0: `0x4a6ce97a84178a84c1cee46a763db619d0e6e413`
- ACL:
  - v1.1: `0x9f3b9198911054b122fdb865f8a5ac516201c339`
  - v1.0: `0x81f7564e413586f1f99fde55740ac52b43ca99c9`

## Deployments

-----------

- Version: Aragon client 0.8.10-hotfix
- Start date: May 29th 2020, 1:10am CEST
- Finish date: May 29th 2020, 1:10am CEST
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Client

Command:
```
npm run publish:rinkeby:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

- `aragon.aragonpm.eth` was redeployed twice due to missing environment variables in the first publish

Final versions:

- `aragon.aragonpm.eth`: `3.1.0`

-----------

- Version: Aragon client 0.8.10
- Start date: April 2nd 2020, 6:55pm CEST
- Finish date: April 2nd 2020, 7.00am CEST
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Apps

Deployed: `agent`

Command:
```
aragon apm publish minor --environment rinkeby --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

- `agent.aragonpm.eth` was first published with `4.1.0` to update the existing app's UI before publishing `5.0.0`
- `agent.aragonpm.eth` was redeployed with a patch release to `5.0.1` due to metadata being incorrect in `5.0.0`

Final versions:

- `agent.aragonpm.eth`: `5.0.2`

### Aragon Client

Command:
```
npm run publish:rinkeby:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `3.0.14`

-----------

- Version: Aragon client 0.8.9
- Start date: March 12th 2020, 1:20am CET
- Finish date: March 12th 2020, 2.30am CET
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Apps

Deployed: `agent`

Command:
```
aragon apm publish minor --environment rinkeby --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

- `agent.aragonpm.eth` was first published with `4.1.0` to update the existing app's UI before publishing `5.0.0`
- `agent.aragonpm.eth` was redeployed with a patch release to `5.0.1` due to metadata being incorrect in `5.0.0`

Final versions:

- `agent.aragonpm.eth`: `5.0.1`

### Aragon Client

Command:
```
npm run publish:rinkeby:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `3.0.13`

-----------

- Version: Aragon client 0.8.8
- Start date: February 20th 2020, 12:45am CET
- Finish date: February 20th 2020, 12.55am CET
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Apps

Deployed: `finance`

Command:
```
aragon apm publish patch --environment mainnet --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `2.1.8`

### Aragon Client

Command:
```
npm run publish:mainnet:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `3.0.12`

-----------

- Version: DAOFactory 0.8.1
- Start date: February 6 2020, 10:30am CET
- Finish date: February 6 2020, 11:30am CET
- Deployer: Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)
- aragonOS commit hash: [`https://github.com/aragon/aragonOS/tree/f3ae59b00f73984e562df00129c925339cd069ff`](https://github.com/aragon/aragonOS/tree/)

### aragonOS

#### ACL v1.1

To minimize changes from the original ACL deployed at `0x3ae935e863984ecffc980bf67bd73f56a41b94ea`, the ACL changes from [`aragonOS@4.4.0`](https://github.com/aragon/aragonOS/releases/tag/v4.4.0) were backported to [`aragonOS@4.0.2`](https://github.com/aragon/aragonOS/releases/tag/v4.0.2).

Command:
```
npx truffle compile --all
npx truffle console --network rinkeby

> const logDeploy = require('./helpers/deploy-logger')
> logDeploy(await ACL.new())
```

Output:
```
=========
# ACL:
Address: 0x9f3b9198911054b122fdb865f8a5ac516201c339
Transaction hash: 0x5386811bf81996e37265b328749122f52eebbdb443fb163804b9eb57346dde41
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2020-02-06T08:56:52.187Z
=========
```

#### DAOFactory

Command:
```
npx truffle compile --all
KERNEL_BASE=0x2b33cf282f867a7ff693a66e11b0fcc5552e4425 ACL_BASE=0x9f3b9198911054b122fdb865f8a5ac516201c339 EVM_REG_FACTORY=0xcafa04538aa18ec7ce451bd0e55874c75b80657f npx truffle exec --network mainnet scripts/deploy-daofactory.js
```
Output:
```
Skipping deploying new Kernel base, using provided address: 0x2b33cf282f867a7ff693a66e11b0fcc5552e4425
Skipping deploying new ACL base, using provided address: 0x9f3b9198911054b122fdb865f8a5ac516201c339
Skipping deploying new EVMScriptRegistryFactory, using provided address: 0xcafa04538aa18ec7ce451bd0e55874c75b80657f
=========
# DAOFactory:
Address: 0x7378ad1ba8f3c8e64bbb2a04473edd35846360f1
Transaction hash: 0x89da0276e6965ae0e5e3137821f70d291e69e8a3fc20c6e1c6991aa2b239d427
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2020-02-06T10:27:04.722Z
=========
```

-----------

- Version: Aragon client 0.8.7-hotfix
- Start date: January 30th 2020, 11:45pm CET
- Finish date: January 30th 2020, 11:45pm CET
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Client

Command:
```
npm run publish:mainnet:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `3.0.11`

-----------

- Version: Voting connectors
- Start date: January 24th, 10.00pm CET
- Finish date: January 24th, 10.15pm CET
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Voting Connectors

Deployed: `token-wrapper`, `voting-aggregator`

Command (`token-wrapper`, `voting-aggregator`):
```
npm run apm:publish -- major --environment staging
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `token-wrapper.hatch.aragonpm.eth`: `1.0.0`
- `voting-aggregator.hatch.aragonpm.eth`: `1.0.0`

-----------

- Version: Aragon client 0.8.7
- Start date: January 24th 2020, 4.40pm CET
- Finish date: January 24th 2020, 4.50pm CET
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command (`finance`, `voting`, `token-manager`):
```
aragon apm publish patch --environment mainnet --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `2.1.7`
- `token-manager.aragonpm.eth`: `2.1.7`
- `voting.aragonpm.eth`: `2.1.7`

### Aragon Client

Command:
```
npm run publish:mainnet:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `3.0.10`

-----------

- Version: Aragon Fundraising 1.0.0
- Start date: January 9th 2020, 19.15pm CET
- Finish date: January 9th 2020, 19.15pm CET
- Deployer: Aragon Black mainnet cold wallet [`0x17d38262cEb5317aF645a246B0Ce6FC4cC3088f6`](https://etherscan.io/address/0x17d38262cEb5317aF645a246B0Ce6FC4cC3088f6)

### Aragon Fundraising

Repo: https://github.com/AragonBlack/fundraising

Command (`aragon-fundraising`):
```
aragon apm publish major --files dist --environment mainnet
```

Command (`bancor-formula`, `batched-bancor-market-maker`, `presale`, `tap`):
```
aragon apm publish major --environment mainnet
```

Command (`templates/multisig`):
```
npm run publish:mainnet
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon-fundraising.aragonpm.eth`: `1.0.1`
- `bancor-formula.aragonpm.eth`: `1.0.0`
- `batched-bancor-market-maker.aragonpm.eth`: `1.0.0`
- `presale.aragonpm.eth`: `1.0.0`
- `tap.aragonpm.eth`: `1.0.0`
- `fundraising-multisig-template.aragonpm.eth`: `1.0.0`

-----------

- Version: Aragon client 0.8.6
- Start date: December 21st 2019, 9.25pm CET
- Finish date: December 21st 2019, 9.30pm CET
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command (`finance`, `voting`, `token-manager`):
```
aragon apm publish patch --environment mainnet --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `2.1.6`
- `token-manager.aragonpm.eth`: `2.1.6`
- `voting.aragonpm.eth`: `2.1.6`

### Aragon Client

Command:
```
npm run publish:mainnet:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `3.0.9`

-----------

- Version: Aragon client 0.8.5-hotfix
- Start date: December 14th 2019, 7:15pm CET
- Finish date: December 14th 2019, 7:20pm CET
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Client

Command:
```
npm run publish:mainnet:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `3.0.8`

-----------

- Version: Aragon client 0.8.5
- Start date: December 4th 2019, 8.30pm CET
- Finish date: December 4th 2019, 8.50pm CET
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command (`finance`, `voting`, `token-manager`):
```
aragon apm publish patch --environment mainnet --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `2.1.5`
- `token-manager.aragonpm.eth`: `2.1.5`
- `voting.aragonpm.eth`: `2.1.5`

### Aragon Client

Command:
```
npm run publish:mainnet:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `3.0.7`

-----------

- Version: Aragon client 0.8.5 (only MCD DAI)
- Start date: November 23th 2019, 1.00pm CET
- Finish date: November 12th 2019, 1.10pm CET
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Apps

Deployed: `finance`

Command:
```
aragon apm publish patch --environment mainnet --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `2.1.4`

-----------

- Version: Futarchy 1.0.0
- Start date: November 20th 2019, 10:15pm CET
- Finish date: November 20th 2019, 10:15pm CET
- Deployer: ([@mikec](https://github.com/mikec)) [`0x33329f5a360649eb1c473b998cf3b975feb109f6`](https://etherscan.io/address/0x33329f5a360649eb1c473b998cf3b975feb109f6)

### Futarchy

Repo: https://github.com/levelkdev/futarchy-app

Command:
```
aragon apm publish minor --files dist --environment mainnet
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `futarchy.open.aragonpm.eth`: `1.0.0`

-----------

- Version: Oracle Manager 1.0.0
- Start date: November 20th 2019, 11:25pm CET
- Finish date: November 20th 2019, 11:25pm CET
- Deployer: ([@mikec](https://github.com/mikec)) [`0x33329f5a360649eb1c473b998cf3b975feb109f6`](https://etherscan.io/address/0x33329f5a360649eb1c473b998cf3b975feb109f6)

### Oracle Manager

Repo: https://github.com/levelkdev/oracle-manager-app

Command:
```
aragon apm publish minor --files dist --environment mainnet
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `oracle-manager.open.aragonpm.eth`: `1.0.0`

-----------

- Version: Aragon client 0.8.4
- Start date: November 12th 2019, 7.00pm CET
- Finish date: November 12th 2019, 7.20pm CET
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command (`finance`, `voting`, `token-manager`):
```
aragon apm publish patch --environment mainnet --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `2.1.3`
- `token-manager.aragonpm.eth`: `2.1.4`
- `voting.aragonpm.eth`: `2.1.4`

### Aragon Client

Command:
```
npm run publish:mainnet:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `3.0.6`

-----------

- Version: Aragon client 0.8.3-hotfix
- Start date: October 25th 2019, 1:30m CEST
- Finish date: October 25th 2019, 1:30am CEST
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Client

Command:
```
npm run publish:mainnet:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `3.0.5`

-----------

- Version: Aragon client 0.8.3
- Start date: October 24th 2019, 7.19pm JST
- Finish date: October 24th 2019, 7.39pm JST
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command (`finance`, `voting`, `token-manager`):
```
aragon apm publish patch --environment mainnet --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `2.1.2`
- `token-manager.aragonpm.eth`: `2.1.3`
- `voting.aragonpm.eth`: `2.1.3`

### Aragon Client

Command:
```
npm run publish:mainnet:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `3.0.4`

-----------

- Version: Aragon client 0.8.2
- Start date: October 11th 2019, 2.50pm JST
- Finish date: October 11th 2019, 3.00pm JST
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)


### Aragon Apps

Deployed: `voting`, `token-manager`

Command (`voting`, `token-manager`):
```
aragon apm publish patch --environment mainnet --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `token-manager.aragonpm.eth`: `2.1.2`
- `voting.aragonpm.eth`: `2.1.2`

### Aragon Client

Command:
```
npm run publish:mainnet:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `3.0.3`

-----------

- Version: Aragon client 0.8.1
- Start date: September 19th 2019, 7.10pm CEST
- Finish date: September 19th 2019, 7.22pm CEST
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)


### Aragon Apps

Deployed: `agent`, `finance`, `voting`, `token-manager`

Command (`agent`, `finance`, `voting`, `token-manager`):
```
aragon apm publish patch --environment mainnet --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `agent.aragonpm.eth`: `4.0.1`
- `finance.aragonpm.eth`: `2.1.1`
- `token-manager.aragonpm.eth`: `2.1.1`
- `voting.aragonpm.eth`: `2.1.1`

### Aragon Client

Command:
```
npm run publish:mainnet:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `3.0.2`

-----------

- Version: Aragon client 0.8-hotfix
- Start date: September 10th 2019, 11.45pm WEST
- Finish date: September 10th 2019, 11.55pm WEST
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)
- aragonOS commit hash: [`0fd1ff673e160597b0cbabc1956a2a547b1c41f0`](https://github.com/aragon/aragonOS/tree/0fd1ff673e160597b0cbabc1956a2a547b1c41f0)

### Aragon Client

Command:
```
npm run publish:mainnet:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `3.0.1`

-----------

- Version: Aragon client 0.8
- Start date: September 5th 2019, 5.00pm CEST
- Finish date: September 10th 2019, 10.00pm WEST
- Deployer: ([@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983) and Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)
- aragonOS commit hash: [`0fd1ff673e160597b0cbabc1956a2a547b1c41f0`](https://github.com/aragon/aragonOS/tree/0fd1ff673e160597b0cbabc1956a2a547b1c41f0)

### aragonOS

Commands:
```
npx truffle compile --all
ACL_BASE=0x81f7564e413586f1f99fde55740ac52b43ca99c9 npx truffle exec --network mainnet scripts/deploy-daofactory.js
```

Output:
```
=========
# Kernel:
Address: 0x2b33cf282f867a7ff693a66e11b0fcc5552e4425
Transaction hash: 0x4ba66ba7acc56d876db9432c571b2f70e7d85877e7d670d4b19d35303981d0f1
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-09-05T14:55:39.784Z
=========
Skipping deploying new ACL base, using provided address: 0x81f7564e413586f1f99fde55740ac52b43ca99c9
=========
# EVMScriptRegistryFactory:
Address: 0xcafa04538aa18ec7ce451bd0e55874c75b80657f
Transaction hash: 0xd5c90343cea40c3ff5681548c0b625ed4b7808df076c1be7ce84b5e82c49da80
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-09-05T14:55:39.783Z
=========
=========
# DAOFactory:
Address: 0xb9da44c051c6cc9e04b7e0f95e95d69c6a6d8031
Transaction hash: 0x540181de6c68e9747ed8817b1e05ff62f36ac8e686ab8f1c96d9b5b6c065cfd6
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-09-05T14:55:39.782Z
=========
```

### DAO Templates

Deployed: `bare-template`, `company-template`, `company-board-template`, `membership-template`, `reputation-template`

Command:
```
npm run publish:mainnet
```

`membership-template.aragonpm.eth` was deployed twice due to issues with transactions not propagating properly

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `bare-template.aragonpm.eth`: `1.0.0`
- `company-template.aragonpm.eth`: `1.0.0`
- `company-board-template.aragonpm.eth`: `1.0.0`
- `membership-template.aragonpm.eth`: `2.0.0`
- `reputation-template.aragonpm.eth`: `1.0.0`

### Aragon Apps

Deployed: `agent`, `finance`, `vault`, `voting`, `token-manager`

Command (`agent`):
```
aragon apm publish major --environment mainnet --files public
```

Command (`agent`, `finance`, `voting`, `token-manager`):
```
aragon apm publish minor --environment mainnet --files app/build
```

Command (`vault`):
```
aragon apm publish minor --environment mainnet --files public
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `agent.aragonpm.eth`: `4.0.0`
- `finance.aragonpm.eth`: `2.1.0`
- `token-manager.aragonpm.eth`: `2.1.0`
- `voting.aragonpm.eth`: `2.1.0`
- `vault.aragonpm.eth`: `3.1.0`

### Aragon Client

Command:
```
npm run publish:mainnet:major
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `3.0.0`

-----------

- Version: Aragon client 0.7.5-hotfix
- Start date: July 25th 2019, 4.20pm CEST
- Finish date: July 25th 2019, 7.40pm CEST
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Client

Command:
```
npm run publish:mainnet:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `2.0.6`

### Aragon Apps

Deployed: `finance`, `voting`

Command (`finance`, `voting`):
```
aragon apm publish patch --environment mainnet --files app/build
```

**Note**: the `artifact.json` for `finance` was regenerated using:
```
aragon apm publish patch --environment mainnet --only-artifacts --no-build
```
*(It was also manually edited to include the old `newPayment()` method in its ABI and list of methods for radspec evaluation)*

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `2.0.7`
- `voting.aragonpm.eth`: `2.0.5`

-----------

- Version: Aragon client 0.7.5
- Start date: June 28th 2019, 4.25pm CEST
- Finish date: June 28th 2019, 4.33pm CEST
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Client

Command:
```
npm run publish:mainnet:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `2.0.5`

-----------

- Version: Aragon client 0.7.4
- Start date: June 14th 2019, 8.10pm CEST
- Finish date: June 14th 2019, 8.26pm CEST
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Client

Command:
```
npm run publish:mainnet:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `2.0.4`

### Aragon Apps

Deployed: `finance`, `token-manager`

Command (`finance`, `token-manager`):
```
aragon apm publish patch --environment mainnet --files app/build
```

**Note**: the `artifact.json` for `finance` was regenerated using:
```
aragon apm publish patch --environment mainnet --only-artifacts --no-build
```
*(It was also manually edited to include the old `newPayment()` method in its ABI and list of methods for radspec evaluation)*

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `2.0.6`
- `token-manager.aragonpm.eth`: `2.0.4`

-----------

- Version: Aragon client 0.7.3-hotfix
- Start date: June 6th 2019, 8.00pm CEST
- Finish date: June 6th 2019, 8.05pm CEST
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Apps

Deployed: `voting`

Command:
```
aragon apm publish patch --environment mainnet --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `voting.aragonpm.eth`: `2.0.4`

-----------

- Version: Aragon client 0.7.3
- Start date: May 30th 2019, 6.50pm CEST
- Finish date: May 30th 2019, 7.02pm CEST
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Client

Command:
```
npm run publish:mainnet:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `2.0.3`

### Aragon Apps

Deployed: `finance`, `token-manager`, `voting`

Command (`finance`, `voting`, `token-manager`):
```
aragon apm publish patch --environment mainnet --files app/build
```

**Note**: the `artifact.json` for `finance` was regenerated using:
```
aragon apm publish patch --environment mainnet --only-artifacts --no-build
```
*(It was also manually edited to include the old `newPayment()` method in its ABI and list of methods for radspec evaluation)*

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `2.0.5`
- `token-manager.aragonpm.eth`: `2.0.3`
- `voting.aragonpm.eth`: `2.0.3`

-----------

- Version: Aragon client 0.7.2
- Start date: May 16th 2019, 12.50pm CEST
- Finish date: May 16th 2019, 1.24pm CEST
- Deployer: ([@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983) and Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Client

Command:
```
npm run publish:mainnet:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `2.0.2`

### Aragon Apps

Deployed: `finance`, `token-manager`, `voting`

Command (`finance`, `voting`, `token-manager`):
```
aragon apm publish patch --environment mainnet --files app/build
```

**Note**: the `artifact.json` for `finance` was regenerated using:
```
aragon apm publish patch --environment mainnet --only-artifacts --no-build
```
*(It was also manually edited to include the old `newPayment()` method in its ABI and list of methods for radspec evaluation)*

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `2.0.4`
- `token-manager.aragonpm.eth`: `2.0.2`
- `voting.aragonpm.eth`: `2.0.2`

-----------

- Version: Aragon client 0.7.1
- Start date: May 2nd 2019, 4.10pm CEST
- Finish date: May 2nd 2019, 4.30pm CEST
- Deployer: ([@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983) and Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Client

Command:
```
npm run publish:mainnet:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `2.0.1`

### Aragon Apps

Deployed: `finance`, `token-manager`, `vault`, `voting`

Command (`vault`):
```
aragon apm publish patch --environment mainnet --files public
```

Command (`finance`, `voting`, `token-manager`):
```
aragon apm publish patch --environment mainnet --files app/build
```

**Note**: the `artifact.json` for `finance` was regenerated using:
```
aragon apm publish patch --environment mainnet --only-artifacts --no-build
```
*(It was also manually edited to include the old `newPayment()` method in its list of methods used for radspec)*

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `2.0.3`
- `token-manager.aragonpm.eth`: `2.0.1`
- `voting.aragonpm.eth`: `2.0.1`
- `vault.aragonpm.eth`: `3.0.1`

-----------

- Version: PPF
- Start date: Apr 25 2019 9:00 PM CEST
- Finish date: Apr 25 2019 9:37 PM CEST
- Deployer: ([@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983) and Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)
- ppf commit hash: [`68ab78db525bee218fd62e155cd76c68136abe3f`](https://github.com/aragon/ppf/tree/68ab78db525bee218fd62e155cd76c68136abe3f)

### PPF

Commands:
```
OPERATOR=0xD1714f3BD816E9333B085D02f032098FFbec1240 OPERATOR_OWNER=0xA41a8cE739a0Ac33Db3D60917b8c327bac506349 npx truffle exec --network mainnet scripts/deploy-ppf.js
npx aragon apm publish major 0xcbcaf05388ac89cf34ebacdffafe9e42539e6c02 --environment mainnet
```

Output
```
=========
# PPFFactory:
Address: 0xcbcaf05388ac89cf34ebacdffafe9e42539e6c02
Transaction hash: 0x17942281216f17013a5a07792254c5e1c97f8237b1b521467cf754f9ea53e42b
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-04-25T18:27:38.976Z
=========
Using factory 0xcbcaf05388ac89cf34ebacdffafe9e42539e6c02
Deploying with operator 0xD1714f3BD816E9333B085D02f032098FFbec1240 and operatorOwner 0xA41a8cE739a0Ac33Db3D60917b8c327bac506349
PPF instance: 0xfB53Eb8ea00595103688e88A90aEAac8E5d60Bd1
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `ppf-factory.aragonpm.eth`: `1.0.0`

-----------

- Version: Aragon client 0.7.0-hotfix
- Start date: Apr 18th 2019, 12.01pm CEST
- Finish date: Apr 18th 2019, 12.01pm CEST
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Apps

Deployed: `finance`

Command:
```
aragon apm publish patch --environment mainnet --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `2.0.2`

-----------

- Version: Aragon client 0.7
- Start date: Apr 17th 2019, 1.20am CEST
- Finish date: Apr 17th 2019, 7.56pm CEST
- Deployer: ([@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983) and Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)
- aragonOS commit hash: [`1b67d105c8dfb81c0f27f4cb68b1505d6d55b2b2`](https://github.com/aragon/aragonOS/tree/1b67d105c8dfb81c0f27f4cb68b1505d6d55b2b2)


### aragonOS

Commands:
```
npx truffle compile --all
KERNEL_BASE=0x4a6ce97a84178a84c1cee46a763db619d0e6e413 ACL_BASE=0x81f7564e413586f1f99fde55740ac52b43ca99c9 npx truffle exec --network mainnet scripts/deploy-daofactory.js
```

Output:
```
Skipping deploying new Kernel base, using provided address: 0x4a6ce97a84178a84c1cee46a763db619d0e6e413
Skipping deploying new ACL base, using provided address: 0x81f7564e413586f1f99fde55740ac52b43ca99c9
=========
# EVMScriptRegistryFactory:
Address: 0x1630b381219984eb3a1206261b4add2ccef4de5c
Transaction hash: 0x4bfeb91270abe2973d6d6b803a5e3e9d90d79163e1303e6e81ae2bca1bc28c85
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-04-16T23:15:43.766Z
=========
=========
# DAOFactory:
Address: 0xc29f0599df12eb4cbe1a34354c4bac6d944071d1
Transaction hash: 0x58841196fd15f6feb38fc64a468693eb065d0d16db9cb958975bcd09650a81ac
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-04-16T23:15:43.764Z
=========
```

### Aragon Client

Commands:
```
aragon apm publish major --only-content --files build/ --environment mainnet --build-script build:mainnet
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `2.0.0`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`, `agent`, `vault`, `survey`

- Finance was redeployed with a patch release

Command (`finance`, `voting`, `token-manager`, `survey`):
```
aragon apm publish major --environment mainnet --files app/build
```

Command (`vault`):
```
aragon apm publish major --environment mainnet --files public
```

Command (`agent`):
```
aragon apm publish major --environment mainnet
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `2.0.1`
- `token-manager.aragonpm.eth`: `2.0.0`
- `voting.aragonpm.eth`: `2.0.0`
- `vault.aragonpm.eth`: `3.0.0`
- `survey.aragonpm.eth`: `1.0.0`
- `agent.aragonpm.eth`: `3.0.0`

### DAO kits

Deployed: `democracy-kit`, `multisig-kit`

Command:
```
DAO_FACTORY=0xc29f0599df12eb4cbe1a34354c4bac6d944071d1 MINIME_TOKEN_FACTORY=0x909d05f384d0663ed4be59863815ab43b4f347ec npm run publish:mainnet
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `democracy-kit.aragonpm.eth`: `2.0.0`
- `multisig-kit.aragonpm.eth`: `2.0.0`

-----------

- Version: Aragon client 0.6.4
- Start date: Feb 27th, 4.55pm CET
- Finish date: Feb 27th, 5.15pm CET
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

Deployment done with `@aragon/cli@5.4.0-beta.2`.

### Aragon Client

Commands:
```
npm run publish:mainnet:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.3.1`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command:
```
aragon apm publish patch --environment mainnet --files app/build
```

Final versions:

- `finance.aragonpm.eth`: `1.1.5`
- `token-manager.aragonpm.eth`: `1.0.6`
- `voting.aragonpm.eth`: `1.0.6`

-----------

- Version: Aragon Agent beta v2
- Start date: Feb 22nd, 6.19pm CET
- Finish date: Feb 22nd, 6.20pm CET
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Apps

Deployed: `agent`

Command:
```
aragon apm publish major --environment mainnet
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `agent.aragonpm.eth`: `2.0.0`

-----------

- Version: Aragon Agent beta
- Start date: Feb 15th, 8.17pm CET
- Finish date: Feb 15th, 8.18pm CET
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Apps

Deployed: `agent`

Command:
```
aragon apm publish major --environment mainnet
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `agent.aragonpm.eth`: `1.0.0`

-----------

- Version: Aragon client 0.6.3
- Start date: Jan 29th, 4.50am CET
- Finish date: Jan 29th, 5.00am CET
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

Deployment done with `@aragon/cli@5.2.3`.

### Aragon Client

Commands:
```
aragon apm publish minor --only-content --files build/ --environment mainnet --build-script build:mainnet
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.3.0`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command:
```
aragon apm publish patch --environment mainnet --files app/build
```

**Note**: the `artifact.json` for `finance` was regenerated using:
```
aragon apm publish patch --environment mainnet --only-artifacts --no-build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `1.1.4`
- `token-manager.aragonpm.eth`: `1.0.5`
- `voting.aragonpm.eth`: `1.0.5`

-----------

- Version: Aragon client 0.6.2
- Start date: Dec 21st, 9.11am CET
- Finish date: Dec 21st, 9.39am CET
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Client

Command:
```
npm run publish:mainnet:minor
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.2.0`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command:
```
aragon apm publish patch --environment mainnet --files app/build
```

**Note**: the `artifact.json` for `voting` was regenerated using:
```
aragon apm publish patch --environment mainnet --only-artifacts --no-build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `1.1.3`
- `token-manager.aragonpm.eth`: `1.0.4`
- `voting.aragonpm.eth`: `1.0.4`

-----------

- Version: Aragon client 0.6.1 (AGP-1 support)
- Start date: Nov 14th 2018, 10.08am CET
- Finish date: Nov 15th 2018, 1.24am CET
- Deployer: ([@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983) and Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Client

Command:
```
npm run publish:mainnet:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.1.7`

### Aragon Apps

Deployed: `voting`

Command:
```
aragon apm publish patch --environment mainnet --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `voting.aragonpm.eth`: `1.0.3`

-----------

### AGP-1 kit

AGP-1 kit hasn't been published to APM, as it is a one time use kit only.

Output:
```
> @aragon/kits-agp1@1.0.0 deploy:mainnet /Users/jorge/provident/dao-kits/kits/agp1
> ENS=0x314159265dd8dbb310642f98f50c066173c1259b DAO_FACTORY=0x595b34c93aa2c2ba0a38daeede629a0dfbdcc559 MINIME_TOKEN=0x960b236A07cf122663c4303350609A66A7B288C0 truffle exec --network mainnet scripts/deploy_agp1.js

Using network 'mainnet'.

AGP1Kit with ENS 0x314159265dd8dbb310642f98f50c066173c1259b, owner 0xcafE1A77e84698c83CA8931F54A755176eF75f2C
Using ENS 0x314159265dd8dbb310642f98f50c066173c1259b
Using DAOFactory: 0x595b34c93aa2c2ba0a38daeede629a0dfbdcc559
Using MiniMeToken: 0x960b236A07cf122663c4303350609A66A7B288C0
APM 0x346854c542d437565339e60de8cb3efe1cab30dc
Kit address: 0xef9d312e1e1a662182b1aeb429d4132bdede12b9
=========
# AGP1Kit:
Address: 0xef9d312e1e1a662182b1aeb429d4132bdede12b9
Transaction hash: 0x9aea0c9686ed7ecdd79e50fc4a13b8015e786de575ac85fd50516a2227f8e31a
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-11-14T08:37:28.931Z
=========

AGP1 DAO address:  0x2de83b50af29678774d5abc4a7cb2a588762f28c
Finance:  0xd9705f391395a8c12b553f9b36bd3fef65be10ff
Vault:  0xaacccafcd439bc9843568c11c6d37ee0f66c9e69
Voting:  0x277bfcf7c2e162cb1ac3e9ae228a3132a75f83d4
Meta Track Voting:  0xcfee4d3078f74197ce77120dbfe6d35f443cab1c
```

-----------

- Version: Aragon client 0.6.0-hotfix
- Start date: Nov 5th 2018, 9.05pm CET
- Finish date: Nov 5th 2018, 9.35pm CET
- Deployer: Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Client

Command:
```
npm run publish:mainnet:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.1.5`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command:
```
aragon apm publish patch --environment mainnet --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `1.1.2`
- `token-manager.aragonpm.eth`: `1.0.3`
- `voting.aragonpm.eth`: `1.0.2`

-----------

- Version: Aragon client 0.6
- Start date: Oct 29th 2018, 11.36pm CET
- Finish date: Oct 30th 2018, 3.46pm CET
- Deployer: [@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983) and Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)

### Aragon Apps

Deployed: `vault`

Command:
```
aragon apm publish major --environment mainnet --files assets
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `vault.aragonpm.eth`: `2.0.0`

-----------

- Version: Aragon client 0.6 RC 2
- Start date: Oct 27th 2018, 12.14pm CEST
- Finish date: Oct 27th 2018, 3.44pm CEST
- Deployer: ([@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983) and Aragon One cold wallet [`0xE04cAbcB24e11620Dd62bB99c396E76cEB578914`](https://etherscan.io/address/0xE04cAbcB24e11620Dd62bB99c396E76cEB578914)
- aragonOS commit hash: [`b5c0a98be5e404bb252e88efc65123c2db650839`](https://github.com/aragon/aragonOS/tree/b5c0a98be5e404bb252e88efc65123c2db650839)
- aragon-id commit hash: [`e33d18d6a78dbcb97bef02b4df52a7dff60b3ef2`](https://github.com/aragon/aragon-id/tree/e33d18d6a78dbcb97bef02b4df52a7dff60b3ef2)

### ENS setup

#### Old `*.aragonpm.eth` cleanup

As an APM registry was [previously deployed](https://github.com/aragon/deployments/blob/v0.5/mainnet/README.md#may-21-2018-1300---1335-utc) to `aragonpm.eth`, it was required to clean up any subdomains claimed by the packages in this registry in order for the new registry to work properly.

The cleanup was done using the `ENSSubdomainRegistrar`'s `deleteName` function. A permission (`DELETE_NAME_ROLE`) for the action was not created by the old `APMRegistryFactory`, so it needed to be created:

- Old APM owner granted deployer the `CREATE_PERMISSIONS_ROLE` in APM's ACL: [transaction](https://etherscan.io/tx/0x715a7fb1b4819e9327142726db7deeca01e6ceb99fdc80a8a741e8ee7a9607ce)
- The deployer account created and granted itself the `DELETE_NAME_ROLE` permission in `ENSSubdomainRegistrar`: [transaction](https://etherscan.io/tx/0xbec7effc2dca511a076b18b8e84b11b7b1a1a1651f5dd0635e0d3df1c79d2e89)

With the permission granted, the deployer account deleted following names:

- `aragon.aragonpm.eth`: [transaction](https://etherscan.io/tx/0xacbacb600cdd7f1d381a1f112cbe1ec76407cc5aefa0bf1d2ff6554748054e6b)
- `survey.aragonpm.eth`: [transaction](https://etherscan.io/tx/0x40bf4be7f7331e790adfafc3e00703ebed108d7bb78267f31780af1b38889a80)
- `survey-kit.aragonpm.eth`: [transaction](https://etherscan.io/tx/0xa7da3dbce305e47a022d27c04503d4888ec171ef76552e545fcf58d974099ca9)
- `apm-repo.aragonpm.eth`: [transaction](https://etherscan.io/tx/0x4e0228f57945cd8983d00d09dafb0f0989a031d8fa03396b34ea1a86f2b8992f)
- `apm-registry.aragonpm.eth`: [transaction](https://etherscan.io/tx/0x76ec9075fab8678d4b75dfceeff12ef7663eb94fca7e271aefffe893df0d090d)
- `apm-enssub.aragonpm.eth`: [transaction](https://etherscan.io/tx/0xbdc2e114033f714e467cb6f97ebc6f1da7288b9112a890c71fa6fb1a886466da)

#### `aragonpm.eth` migration

The `ENSSubdomainRegistrar` app of the old APM was the owner of the `aragonpm.eth` name. Ownership of the name needed to be transferred to the new `APMRegistryFactory` that will deploy the new APM.

`ENSSubdomainRegistrar` doesn't provide a way to claim ownership of the root name, but ownership of the name can be claimed by the ENS Deed holder of the name. The [Aragon Association multisig](https://etherscan.io/address/0xcafe1a77e84698c83ca8931f54a755176ef75f2c), as the deed holder, performed the following actions:

- Transfer the deed to itself, which sets the multisig as the owner of `aragonpm.eth`. [Submission transaction](https://etherscan.io/tx/0x84cd4fe72d95d80773942131958eebe5564ef98dc8e2081e4184761807b67b3e) and [confirmation transaction](https://etherscan.io/tx/0xa09381e5ed148300bf5bc89f6bdcec867269234da47b0fac0f09bde5bf644eb6).
- Transfer ownership of `aragonpm.eth` to the deployer account. [Submission transaction](https://etherscan.io/tx/0x38aa550f8e03613405c6ec902de6db135464919ca65f3c835fde9725fb824edb) and [confirmation transaction](https://etherscan.io/tx/0x8139c959a1188b37bf222d010919678d220c2db7d22c8f6ae5e98524289cea69).

#### `aragonid.eth`

The [Aragon Association multisig](https://etherscan.io/address/0xcafe1a77e84698c83ca8931f54a755176ef75f2c) as the owner of `aragonid.eth`, performed:

- Transfer ownership of `aragonid.eth` to the deployer account. [Submission transaction](https://etherscan.io/tx/0xc78b3997a64f73309660313ccb74d872f201017a16560a3e16ee6ba0481e1aed) and [confirmation transaction](https://etherscan.io/tx/0x8f00cb36d72e07c3de5a884598e7c8a5ade3f5b5702d9d94ad30288b69a5a2a4).

### aragonOS

Commands:
```
npx truffle compile --all
npx truffle exec --network mainnet scripts/deploy-daofactory.js
```

Output:
```
=========
# Kernel:
Address: 0x4a6ce97a84178a84c1cee46a763db619d0e6e413
Transaction hash: 0x5ee1418fd77fe6cc6dadebb7dff67dbe49215cd514cee53554c0f3177fc7d267
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-27T11:12:27.760Z
=========
=========
# ACL:
Address: 0x81f7564e413586f1f99fde55740ac52b43ca99c9
Transaction hash: 0x23d5f772cd0499fcd050c35bf6ec652bd4e64df30de32c839763ca4f3b5a2af4
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-27T11:12:27.732Z
=========
=========
# EVMScriptRegistryFactory:
Address: 0x57cb2aa5de8e15d3aa5b113641267a55c221842e
Transaction hash: 0x1766c5e1b23b8a7bb557ecb80b8d42ff169055436858989a9ca8f770e952c69c
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-27T11:12:27.759Z
=========
=========
# DAOFactory:
Address: 0x595b34c93aa2c2ba0a38daeede629a0dfbdcc559
Transaction hash: 0x058e13dd6adbb908888142eba228bc820ba60d3af601523f69aeaff6d849080e
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-27T11:12:27.758Z
=========
```

### APM

Commands:
```
DAO_FACTORY=0x595b34c93aa2c2ba0a38daeede629a0dfbdcc559 ENS=0x314159265dd8dbb310642f98f50c066173c1259b OWNER=0xE04cAbcB24e11620Dd62bB99c396E76cEB578914 npx truffle exec --network mainnet scripts/deploy-apm.js
```

Output:
```
Deploying APM...
Owner: 0xE04cAbcB24e11620Dd62bB99c396E76cEB578914
ENS: 0x314159265dd8dbb310642f98f50c066173c1259b
TLD: eth (0x93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae)
Label: aragonpm (0x1542111b4698ac085139692eae7c6efb632a4ae2779f8686da94511ebbbff594)
=========
Deploying APM bases...
=========
# APMRegistry:
Address: 0x54606e02c0f6e0acef781ce08b4f402c60ba0605
Transaction hash: 0x7e74e90ebb7e0374e595a1e3aadd555637472c2acb190f1d37c1201c37a6ffe0
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-27T11:12:27.742Z
=========
=========
# Repo:
Address: 0x190de54345fdacbe5509ea112be053f6592a8d95
Transaction hash: 0x7d0e1653e88ab8685621f7f4495314a05d4217076f51280e67504e62a87b7b28
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-27T11:12:27.744Z
=========
=========
# ENSSubdomainRegistrar:
Address: 0x797f28a6617876c9d4b2fc75eb9d4661f77abdaa
Transaction hash: 0xca249d07a7b361eb2354e478b86a3a21285ac179bab6d30cbe872cb1932e9a38
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-27T11:12:27.750Z
=========
Using provided DAOFactory (with EVMScripts): 0x595b34c93aa2c2ba0a38daeede629a0dfbdcc559
Deploying APMRegistryFactory...
=========
# APMRegistryFactory:
Address: 0xce5c6811bd801aa0cf72760534604f833cbcc0b9
Transaction hash: 0x225c6994edde13bf2cc91bd6e4155d53fdf50b76eb1d3f204157069bb35005fc
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-27T11:12:27.755Z
=========
Assigning ENS name (aragonpm.eth) to factory...
Transferring name ownership from deployer to APMRegistryFactory
Deploying APM...
# APM:
Address: 0x346854c542d437565339E60dE8CB3EfE1cAB30dC
Transaction hash: 0x2360f3161264fd2d1c536946f37cd468fcabec3a6dc101f32467a61276b2cfae
=========
```

### Aragon ID

Commands:
```
ENS=0x314159265dd8dbb310642f98f50c066173c1259b npx truffle exec --network mainnet scripts/deploy-beta-aragonid.js
```

```
Deploying AragonID with ENS: 0x314159265dd8dbb310642f98f50c066173c1259b and owner: undefined
=========
# FIFSResolvingRegistrar:
Address: 0x546aa2eae2514494eeadb7bbb35243348983c59d
Transaction hash: 0x5e77df135af91daf9437b8b2adf21115139b4ff6f2e23b1f8e855f9cf5e749fd
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-27T12:09:34.352Z
=========
assigning ENS name to AragonID
Transferring name ownership from deployer to AragonID
=========
Deployed AragonID: 0x546aa2eae2514494eeadb7bbb35243348983c59d
```

### Aragon Apps

Deployed: `finance`, `vault`, `voting`, `token-manager`
Command:
```
rm -rf build
rm -rf app/build
aragon apm publish 1.0.0 --environment mainnet --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

- `token-manager.aragonpm.eth` had to be republished as `1.0.0` had an incorrect artifact.

Final versions:

- `finance.aragonpm.eth`: `1.0.0`
- `token-manager.aragonpm.eth`: `1.0.1`
- `vault.aragonpm.eth`: `1.0.0`
- `voting.aragonpm.eth`: `1.0.0`


### DAO Kits

- MinimeTokenFactory: [`0x909d05f384d0663ed4be59863815ab43b4f347ec`](https://etherscan.io/tx/0x8661345edfb9ece63aaff4777b2b04f183e1b1c0846260ca05d312305bf2dc33)

Deployed: `democracy-kit`, `multisig-kit`
Command:
```
DAO_FACTORY=0x595b34c93aa2c2ba0a38daeede629a0dfbdcc559 MINIME_TOKEN_FACTORY=0x909d05f384d0663ed4be59863815ab43b4f347ec npm run publish:mainnet
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `democracy-kit.aragonpm.eth`: `1.0.0`
- `multisig-kit.aragonpm.eth`: `1.0.0`

### Aragon Client

Command:
```
npm run publish:mainnet:major
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.0.0`
