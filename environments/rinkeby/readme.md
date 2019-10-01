# Rinkeby

- [Permissions](./permissions.yml)
- [APM publish history](./deploys.yml)

## Artifacts

- ENS: `0x98df287b6c145399aaa709692c8d308357bc085d`
- aragonPM:
  - `aragonpm.eth`: `0xda897630fa0f1902f99623bc00e18acd12657d4f`
  - `open.aragonpm.eth`: `0x915c4a47e7c7f7ab04ac70b4bcfba257a1e8b040`
- DAOFactory (Aragon 0.6): `0x2298d27a9b847c681d2b2c2828ab9d79013f5f1d`
- DAOFactory (Aragon 0.7): `0xfdef49fbfe37704af55636bdd4b6bc8cd19143f6`
- DAOFactory (Aragon 0.8): `0xad4d106b43b480faa3ef7f98464ffc27fc1faa96`

## Deployments

-----------

- Version: Oracle Manager 6.0.0
- Start date: October 1st 2019, 8.48am CEST
- Finish date: October 1st 2019, 8.48am CEST
- Deployer: ([@mikec](https://github.com/mikec)) [`0x33329f5a360649eb1c473b998cf3b975feb109f6`](https://rinkeby.etherscan.io/address/0x33329f5a360649eb1c473b998cf3b975feb109f6)

### Oracle Manager

Repo: https://github.com/levelkdev/oracle-manager-app

Command:
```
aragon apm publish major --files dist --environment staging
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `oracle-manager.open.aragonpm.eth`: `6.0.0`

-----------

- Version: Futarchy 8.3.0
- Start date: September 30th 2019, 9.49pm CEST
- Finish date: September 30th 2019, 9.49pm CEST
- Deployer: ([@mikec](https://github.com/mikec)) [`0x051401D1824ba49B0370736fC9d87f78Ee6F27C7`](https://rinkeby.etherscan.io/address/0x051401D1824ba49B0370736fC9d87f78Ee6F27C7)

### Futarchy

Repo: https://github.com/levelkdev/futarchy-app

Command:
```
aragon apm publish minor --files dist --environment staging
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `futarchy.open.aragonpm.eth`: `8.3.0`

-----------

- Version: Oracle Manager 5.1.0
- Start date: September 27th 2019, 4.07pm CEST
- Finish date: September 27th 2019, 4.07pm CEST
- Deployer: ([@mikec](https://github.com/mikec)) [`0x33329f5a360649eb1c473b998cf3b975feb109f6`](https://rinkeby.etherscan.io/address/0x33329f5a360649eb1c473b998cf3b975feb109f6)

### Oracle Manager

Repo: https://github.com/levelkdev/oracle-manager-app

Command:
```
aragon apm publish minor --files dist --environment staging
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `oracle-manager.open.aragonpm.eth`: `5.1.0`

-----------

- Version: Futarchy 8.1.0
- Start date: September 26th 2019, 10.56pm CEST
- Finish date: September 2th 2019, 10.56pm CEST
- Deployer: ([@mikec](https://github.com/mikec)) [`0x051401D1824ba49B0370736fC9d87f78Ee6F27C7`](https://rinkeby.etherscan.io/address/0x051401D1824ba49B0370736fC9d87f78Ee6F27C7)

### Futarchy

Repo: https://github.com/levelkdev/futarchy-app
Command:
```
aragon apm publish minor --files dist --environment staging
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `futarchy.open.aragonpm.eth`: `8.1.0`

-----------

- Version: Aragon client 0.8.1
- Start date: September 19th 2019, 6.45pm CEST
- Finish date: September 19th 2019, 7.00pm CEST
- Deployer: Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)


### Aragon Apps

Deployed: `agent`, `finance`, `voting`, `token-manager`

Command (`agent`, `finance`, `voting`, `token-manager`):
```
aragon apm publish patch --environment rinkeby --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `agent.aragonpm.eth`: `4.1.1`
- `finance.aragonpm.eth`: `2.1.1`
- `token-manager.aragonpm.eth`: `2.1.1`
- `voting.aragonpm.eth`: `2.1.1`

### Aragon Client

Command:
```
npm run publish:rinkeby:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `3.0.1`

-----------

- Version: Oracle Manager 4.3
- Start date: September 17th 2019, 7.14pm CEST
- Finish date: September 17th 2019, 7.14pm CEST
- Deployer: ([@mikec](https://github.com/mikec)) [`0x33329f5a360649eb1c473b998cf3b975feb109f6`](https://rinkeby.etherscan.io/address/0x33329f5a360649eb1c473b998cf3b975feb109f6)

### Oracle Manager

Repo: https://github.com/levelkdev/oracle-manager-app

Command:
```
aragon apm publish minor --files dist --environment staging
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `oracle-manager.open.aragonpm.eth`: `4.3.0`

-----------

- Version: Approvals (hatch)
- Start date: September 13th 2019, 8.55pm CEST
- Finish date: September 13th 2019, 8.55pm CEST
- Deployer: ([@ajsantander](https://github.com/ajsantander)) [`0x8c786893c22cd2de7b770247f928d7b74b5bd550`](https://rinkeby.etherscan.io/address/0x8c786893c22cd2de7b770247f928d7b74b5bd550)

### Approvals app

Repo: https://github.com/aragonone/approvals

Command:
```
aragon apm publish major --files app/build --environment rinkeby
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `approvals.hatch.aragonpm.eth`: `1.0.0`

-----------

- Version: Aragon client 0.8
- Start date: September 3rd 2019, 6.30pm CEST
- Finish date: September 10th 2019, 9.14pm CEST
- Deployer: ([@facuspagnuolo](https://github.com/facuspagnuolo)) [`0x03acbcb547d03c8e7746ef5988012b59604aa083`](https://rinkeby.etherscan.io/address/0x03acbcb547d03c8e7746ef5988012b59604aa083), ([@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://rinkeby.etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983) and Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)
- aragonOS commit hash: [`0fd1ff673e160597b0cbabc1956a2a547b1c41f0`](https://github.com/aragon/aragonOS/tree/0fd1ff673e160597b0cbabc1956a2a547b1c41f0)

### aragonOS

Commands:
```
npx truffle compile --all
ACL_BASE=0x3ae935e863984ecffc980bf67bd73f56a41b94ea npx truffle exec --network rinkeby scripts/deploy-daofactory.js
```

Output:
```
=========
# Kernel:
Address: 0xaa1a0367c7588937cbf542ef79cbfe83d317da88
Transaction hash: 0x39af60d25d2e81df1288783ddf6f052eab787d954ab0a1429f138a164c1fe265
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-09-03T16:48:05.945Z
=========
Skipping deploying new ACL base, using provided address: 0x3ae935e863984ecffc980bf67bd73f56a41b94ea
=========
# EVMScriptRegistryFactory:
Address: 0x83356268bb32bf9cf656892508da955b232a32e0
Transaction hash: 0xdc505c3567933a7a3ba7f0aac5875eaf9102f216c18a05859828928d328b0d08
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-09-03T16:48:05.945Z
=========
=========
# DAOFactory:
Address: 0xad4d106b43b480faa3ef7f98464ffc27fc1faa96
Transaction hash: 0xbb13787c1a06ef9fe266b6a809e0b831ea8f6a426126b213d44c1684b8779048
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-09-03T16:48:05.944Z
=========
```

### DAO Templates

Deployed: `bare-template`, `company-template`, `company-board-template`, `membership-template`, `reputation-template`

Command:
```
npm run publish:rinkeby
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `bare-template.aragonpm.eth`: `1.0.0`
- `company-template.aragonpm.eth`: `1.0.0`
- `company-board-template.aragonpm.eth`: `1.0.0`
- `membership-template.aragonpm.eth`: `1.0.0`
- `reputation-template.aragonpm.eth`: `1.0.0`

### Aragon Apps

Deployed: `agent`, `finance`, `vault`, `voting`, `token-manager`

Command (`agent`, `finance`, `voting`, `token-manager`):
```
aragon apm publish minor --environment rinkeby --files app/build
```

Command (`vault`):
```
aragon apm publish minor --environment rinkeby --files public
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `agent.aragonpm.eth`: `4.1.0`
- `finance.aragonpm.eth`: `2.1.0`
- `token-manager.aragonpm.eth`: `2.1.0`
- `voting.aragonpm.eth`: `2.1.0`
- `vault.aragonpm.eth`: `2.1.0`

### Aragon Client

Command:
```
npm run publish:rinkeby:major
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `3.0.0`

-----------

- Version: Aragon Agent upgrade
- Start date: Aug 22nd 2019, 6.30pm CEST
- Finish date: Aug 22nd 2019, 6.30pm CEST
- Deployer: Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)

Rinkeby deployment for `agent`

### Aragon Apps

Deployed: `agent`

Command:
```
aragon apm publish major --environment rinkeby --files public
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `agent.aragonpm.eth`: `4.0.0`

-----------

- Version: Aragon client 0.7.5-hotfix
- Start date: July 25th 2019, 4.05pm CEST
- Finish date: July 25th 2019, 7.50pm CEST
- Deployer: Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)

### Aragon Client

Command:
```
npm run publish:rinkeby:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `2.0.10`

### Aragon Apps

Deployed: `finance`, `voting`

Command (`finance`, `voting`):
```
aragon apm publish patch --environment rinkeby --files app/build
```

**Note**: the `artifact.json` for `finance` was regenerated using:
```
aragon apm publish patch --environment rinkeby --only-artifacts --no-build
```
*(It was also manually edited to include the old `newPayment()` method in its ABI and list of methods for radspec evaluation)*

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `2.0.7`
- `voting.aragonpm.eth`: `2.0.6`

-----------

- Version: Aragon client 0.7.5
- Start date: June 28th 2019, 4.10pm CEST
- Finish date: June 28th 2019, 4.21pm CEST
- Deployer: Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)

### Aragon Client

Command:
```
npm run publish:rinkeby:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `2.0.9`

-----------

- Version: Aragon client 0.7.4
- Start date: June 14th 2019, 6.30pm CEST
- Finish date: June 14th 2019, 8.05pm CEST
- Deployer: Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)

### Aragon Client

Command:
```
npm run publish:rinkeby:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `2.0.7`

### Aragon Apps

Deployed: `finance`, `token-manager`

Command (`finance`, `token-manager`):
```
aragon apm publish patch --environment rinkeby --files app/build
```

**Note**: the `artifact.json` for `finance` was regenerated using:
```
aragon apm publish patch --environment rinkeby --only-artifacts --no-build
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
aragon apm publish patch --environment rinkeby --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `voting.aragonpm.eth`: `2.0.5`

-----------

- Version: Aragon client 0.7.3
- Start date: May 30th 2019, 6.15pm CEST
- Finish date: May 30th 2019, 6.45pm CEST
- Deployer: Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)

### Aragon Client

Command:
```
npm run publish:rinkeby:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `2.0.6`

### Aragon Apps

Deployed: `finance`, `token-manager`, `voting`

Command (`finance`, `voting`, `token-manager`):
```
aragon apm publish patch --environment rinkeby --files app/build
```

**Note**: the `artifact.json` for `finance` was regenerated using:
```
aragon apm publish patch --environment rinkeby --only-artifacts --no-build
```
*(It was also manually edited to include the old `newPayment()` method in its ABI and list of methods for radspec evaluation)*

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `2.0.5`
- `token-manager.aragonpm.eth`: `2.0.3`
- `voting.aragonpm.eth`: `2.0.4`

-----------

- Version: Aragon client 0.7.2
- Start date: May 16th 2019, 11.55am CEST
- Finish date: May 16th 2019, 12.50pm CEST
- Deployer: ([@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://rinkeby.etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983) and Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)

### Aragon Client

Command:
```
npm run publish:rinkeby:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `2.0.5`

### Aragon Apps

Deployed: `finance`, `token-manager`, `voting`

Command (`finance`, `voting`, `token-manager`):
```
aragon apm publish patch --environment rinkeby --files app/build
```

**Note**: the `artifact.json` for `finance` was regenerated using:
```
aragon apm publish patch --environment rinkeby --only-artifacts --no-build
```
*(It was also manually edited to include the old `newPayment()` method in its ABI and list of methods for radspec evaluation)*

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `2.0.4`
- `token-manager.aragonpm.eth`: `2.0.2`
- `voting.aragonpm.eth`: `2.0.3`

-----------

- Version: Aragon client 0.7.1
- Start date: May 2nd 2019, 2.20pm CEST
- Finish date: May 2nd 2019, 4.10pm CEST
- Deployer: ([@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://rinkeby.etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983) and Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)

### Aragon Client

Command:
```
npm run publish:rinkeby:patch
```

**Note**: needed to be published 3 times

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `2.0.4`

### Aragon Apps

Deployed: `finance`, `token-manager`, `vault`, `voting`

Command (`vault`):
```
aragon apm publish patch --environment rinkeby --files public
```

Command (`finance`, `voting`, `token-manager`):
```
aragon apm publish patch --environment rinkeby --files app/build
```

**Note**: the `artifact.json` for `finance` was regenerated using:
```
aragon apm publish patch --environment rinkeby --only-artifacts --no-build
```
*(It was also manually edited to include the old `newPayment()` method in its list of methods used for radspec)*

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `2.0.3`
- `token-manager.aragonpm.eth`: `2.0.1`
- `voting.aragonpm.eth`: `2.0.2`
- `vault.aragonpm.eth`: `3.0.1`

-----------

- Version: PPF
- Start date: Apr 25 2019 8:30 PM CEST
- Finish date: Apr 25 2019 9:00 PM CEST
- Deployer: ([@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://rinkeby.etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983) and Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)
- ppf commit hash: [`68ab78db525bee218fd62e155cd76c68136abe3f`](https://github.com/aragon/ppf/tree/68ab78db525bee218fd62e155cd76c68136abe3f)

### PPF

Commands:
```
OPERATOR=0x6eC28F4e814f88DA2d981E6E787B786162006D39 OPERATOR_OWNER=0x4cB3FD420555A09bA98845f0B816e45cFb230983 npx truffle exec --network rinkeby scripts/deploy-ppf.js
npx aragon apm publish major 0x9bc1eb9bf38810b672733213491df7a384caf2fd --environment rinkeby
```

Output
```
=========
# PPFFactory:
Address: 0x9bc1eb9bf38810b672733213491df7a384caf2fd
Transaction hash: 0xa0a486283b2c72149bf4d3a0581e53996095e5b759c40f82675c113cea661e03
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-04-25T18:27:38.976Z
=========
Using factory 0x9bc1eb9bf38810b672733213491df7a384caf2fd
Deploying with operator 0xDB9B767F1C3ad2a9236D722c9ea726557F099bE8 and operatorOwner 0x4cB3FD420555A09bA98845f0B816e45cFb230983
PPF instance: 0x2d50575f84b0f185c43304fe2efcb95dbfb5e987
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `ppf-factory.aragonpm.eth`: `1.0.0`

-----------

- Version: Aragon client 0.7.0-hotfix
- Start date: Apr 18th 2019, 11.55am CEST
- Finish date: Apr 18th 2019, 11.55am CEST
- Deployer: Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)

### Aragon Apps

Deployed: `finance`

Command:
```
aragon apm publish patch --environment rinkeby --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `2.0.2`

-----------

- Version: Aragon client 0.7
- Start date: Apr 17th 2019, 12.15am CEST
- Finish date: Apr 17th 2019, 7.38pm CEST
- Deployer: ([@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://rinkeby.etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983) and Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)
- aragonOS commit hash: [`1b67d105c8dfb81c0f27f4cb68b1505d6d55b2b2`](https://github.com/aragon/aragonOS/tree/1b67d105c8dfb81c0f27f4cb68b1505d6d55b2b2)

### aragonOS

Commands:
```
npx truffle compile --all
KERNEL_BASE=0x3e79ec0f5e60d305fe8d774c2484da701e778c3d ACL_BASE=0x3ae935e863984ecffc980bf67bd73f56a41b94ea npx truffle exec --network rinkeby scripts/deploy-daofactory.js
```

Output:
```
Skipping deploying new Kernel base, using provided address: 0x3e79ec0f5e60d305fe8d774c2484da701e778c3d
Skipping deploying new ACL base, using provided address: 0x3ae935e863984ecffc980bf67bd73f56a41b94ea
=========
# EVMScriptRegistryFactory:
Address: 0x26bfb2ed92473c60ee163217ee5a95d7e7c6a77f
Transaction hash: 0x77e66888c58cd9698e14d1e6ef887316731daf9c8de7ac80cfce19ea7a983800
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-04-16T22:14:05.558Z
=========
=========
# DAOFactory:
Address: 0xfdef49fbfe37704af55636bdd4b6bc8cd19143f6
Transaction hash: 0x90cf7ce7579e591167e328842088c481cf951651fb2bea13beb0a00acd3caf83
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-04-16T22:14:05.555Z
=========
```

### Aragon Client

Commands:
```
aragon apm publish major --only-content --files build/ --environment rinkeby --build-script build:rinkeby
```

- Redeployed with a patch release

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `2.0.1`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`, `agent`, `vault`, `survey`

- Finance and Voting were redeployed with a patch release

Command (`finance`, `voting`, `token-manager`, `survey`):
```
aragon apm publish major --environment rinkeby --files app/build
```

Command (`vault`):
```
aragon apm publish major --environment rinkeby --files public
```

Command (`agent`):
```
aragon apm publish major --environment rinkeby
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `2.0.1`
- `token-manager.aragonpm.eth`: `2.0.0`
- `voting.aragonpm.eth`: `2.0.1`
- `vault.aragonpm.eth`: `3.0.0`
- `survey.aragonpm.eth`: `2.0.0`
- `agent.aragonpm.eth`: `3.0.0`

### DAO kits

Deployed: `democracy-kit`, `multisig-kit`

Command:
```
DAO_FACTORY=0xfdef49fbfe37704af55636bdd4b6bc8cd19143f6 npm run publish:rinkeby
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `democracy-kit.aragonpm.eth`: `2.0.0`
- `multisig-kit.aragonpm.eth`: `2.0.0`

-----------

- Version: Aragon client 0.6.4
- Start date: Feb 27th, 4.30pm CET
- Finish date: Feb 27th, 4.45pm CET
- Deployer: Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)

Deployment done with `@aragon/cli@5.4.0-beta.2`.

### Aragon Client

Commands:
```
npm run publish:rinkeby:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.3.2`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command:
```
aragon apm publish patch --environment rinkeby --files app/build
```

Final versions:

- `finance.aragonpm.eth`: `1.1.5`
- `token-manager.aragonpm.eth`: `1.1.6`
- `voting.aragonpm.eth`: `1.1.7`

-----------

- Version: Aragon Agent beta v2
- Start date: Feb 22nd, 6.17pm CET
- Finish date: Feb 22nd, 6.18pm CET
- Deployer: Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)

### Aragon Apps

Deployed: `agent`

Command:
```
aragon apm publish major --environment rinkeby
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `agent.aragonpm.eth`: `2.0.0`

-----------

- Version: Survey resurrect
- Start date: Feb 16th, 9.56pm CET
- Finish date: Feb 16th, 9.56pm CET
- Deployer: Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)

### Aragon Apps

Deployed: `survey`

Command:
```
aragon apm publish major --environment rinkeby --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `survey.aragonpm.eth`: `1.0.0`

-----------

- Version: Aragon Agent beta
- Start date: Feb 15th, 8.12pm CET
- Finish date: Feb 15th, 8.12pm CET
- Deployer: Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)

### Aragon Apps

Deployed: `agent`

Command:
```
aragon apm publish major --environment rinkeby
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `agent.aragonpm.eth`: `1.0.0`

-----------

- Version: Aragon client 0.6.3
- Start date: Jan 29th, 2.50am CET
- Finish date: Jan 29th, 4.00am CET
- Deployer: Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)

Deployment done with `@aragon/cli@5.2.3`.

### Aragon Client

Commands:
```
aragon apm publish minor --only-content --files build/ --environment rinkeby --build-script build:rinkeby

aragon apm publish patch --only-content --files build/ --environment rinkeby --build-script build:rinkeby
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.3.1`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command:
```
aragon apm publish patch --environment rinkeby --files app/build
```

**Note**: the `artifact.json` for `finance` was regenerated using:
```
aragon apm publish patch --environment rinkeby --only-artifacts --no-build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `1.1.4`
- `token-manager.aragonpm.eth`: `1.1.5`
- `voting.aragonpm.eth`: `1.1.6`

-----------

- Version: Aragon client 0.6.2
- Start date: Dec 21st, 8.10am CET
- Finish date: Dec 21st, 9.06am CET
- Deployer: Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)

### Aragon Client

Command:
```
npm run publish:rinkeby:minor
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.2.0`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command:
```
aragon apm publish patch --environment rinkeby --files app/build
```

**Note**: the `artifact.json` for `voting` was regenerated using:
```
aragon apm publish patch --environment rinkeby --only-artifacts --no-build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `1.1.3`
- `token-manager.aragonpm.eth`: `1.1.4`
- `voting.aragonpm.eth`: `1.1.5`

-----------

- Version: Aragon client 0.6.1 (AGP-1 support)
- Start date: Nov 12th 2018, 4.55pm CET
- Finish date: Nov 15th 2018, 1.24am CET
- Deployer: Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff) + [@bingen](https://github.com/bingen)

### Aragon Client

Command:
```
npm run publish:rinkeby:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.1.4`

### Aragon Apps

Deployed: `voting`

Command:
```
aragon apm publish patch --environment rinkeby --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `voting.aragonpm.eth`: `1.1.4`

### AGP-1 Kit

AGP-1 kit hasn't been published to APM, as it is a one time use kit only.

```
AGP1Kit with ENS 0x98Df287B6C145399Aaa709692c8D308357bC085D, owner 0x590e1ac49666ec8024dc0c6620eed6916a18f27e
Using ENS 0x98Df287B6C145399Aaa709692c8D308357bC085D
Using DAOFactory: 0x2298d27a9b847c681d2b2c2828ab9d79013f5f1d
Using MiniMeToken: 0xad0f1afea49a46a8409bf4863070631fec2cedc6
APM 0xda897630fa0f1902f99623bc00e18acd12657d4f
0x8870044ea0ba46dda0b1ce165936cf9a31240ad2
Kit address: 0x9276b52565888d541b03fcc74ae686c15a5e21a7
=========
# AGP1Kit:
Address: 0x9276b52565888d541b03fcc74ae686c15a5e21a7
Transaction hash: 0xcde6a97c80b69eded849e8ac9c2e432ffa86f1675a8aad83dd519a4b17b7673c
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-11-10T22:58:13.955Z
=========
Gas used: 4882338
AGP1 DAO address:  0x383037ad4e2341835bfe719e4bddc5936c271409
Finance:  0x11de0e9390598cfe7d1600dadff9abd9647c8a6e
Vault:  0x3f49a91cc34a6b765cffa2fc898f961cfd4f759b
Voting:  0x93b1900fa5b4ea74263e6ac0682f0e50c90ac98f
Meta Track Voting:  0x469741ced03d2bb94bc6e744cb56a72e767054b3

```

-----------

- Version: Aragon client 0.6.0-hotfix
- Start date: Nov 5th 2018, 9.05pm CET
- Finish date: Nov 5th 2018, 9.35pm CEST
- Deployer: Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)

### Aragon Client

Command:
```
npm run publish:rinkeby:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.1.3`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command:
```
aragon apm publish patch --environment rinkeby --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `1.1.2`
- `token-manager.aragonpm.eth`: `1.1.3`
- `voting.aragonpm.eth`: `1.1.3`

-----------

- Version: Aragon client 0.6
- Start date: Oct 29th 2018, 11.36pm CEST
- Finish date: TODO
- Deployer: ([@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://rinkeby.etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983) and Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)

### Aragon Apps

Deployed: `vault`

Command:
```
aragon apm publish major --environment rinkeby --files assets
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `vault.aragonpm.eth`: `2.0.0`

-----------

- Version: Aragon client 0.6 RC 2
- Start date: Oct 25th 2018, 5.42pm CEST
- Finish date: Oct 26th 2018, 7.40pm CEST
- Deployer: ([@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://rinkeby.etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983) and Aragon One testnet cold wallet [`0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff`](https://rinkeby.etherscan.io/address/0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff)
- aragonOS commit hash: [`b5c0a98be5e404bb252e88efc65123c2db650839`](https://github.com/aragon/aragonOS/tree/b5c0a98be5e404bb252e88efc65123c2db650839)
- aragon-id commit hash: [`e33d18d6a78dbcb97bef02b4df52a7dff60b3ef2`](https://github.com/aragon/aragon-id/tree/e33d18d6a78dbcb97bef02b4df52a7dff60b3ef2)

### ENS

Commands:
```
npx truffle compile --all
npx truffle exec --network rinkeby scripts/deploy-test-ens.js
```

Output:
```
No OWNER environment variable passed, setting ENS owner to provider's account: 0x4cb3fd420555a09ba98845f0b816e45cfb230983
Deploying ENSFactory...
=========
# ENSFactory:
Address: 0xcad0d7a5be19065e067353801373cac6f3a97de5
Transaction hash: 0x99aaa57f55048eab22c693f9089cc90e57bfd7f2454d5f99c3d69cf1515d2b1e
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-25T15:41:50.466Z
=========
====================
Deployed ENS: 0x98df287b6c145399aaa709692c8d308357bc085d
0x98df287b6c145399aaa709692c8d308357bc085d
```

Creating `aragonpm.eth` and `aragonid.eth` names:
- `aragonpm.eth`: [`0xa0702d19d3752abf884d9b76a68ab12b7cd304a004ebf9ab62c7e911af708d62`](https://rinkeby.etherscan.io/tx/0xa0702d19d3752abf884d9b76a68ab12b7cd304a004ebf9ab62c7e911af708d62)
- `aragonid.eth`: [`0x2beb33bda5c80b649932d8792947dbdd648f4048794f7769ce2d8e3efea1a100`](https://rinkeby.etherscan.io/tx/0x2beb33bda5c80b649932d8792947dbdd648f4048794f7769ce2d8e3efea1a100)


### aragonOS

Commands:
```
npx truffle compile --all
npx truffle exec --network rinkeby scripts/deploy-daofactory.js
```

Output:
```
=========
# Kernel:
Address: 0x3e79ec0f5e60d305fe8d774c2484da701e778c3d
Transaction hash: 0x6407cab7081b07b99199ea0e4fc542fff537f67fb1e54386ba1c57e72ee2e360
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-25T17:18:44.492Z
=========
=========
# ACL:
Address: 0x3ae935e863984ecffc980bf67bd73f56a41b94ea
Transaction hash: 0x6e407efca7e3defe0fa310a915d7e2d4fe0fffa981d06def0f7ec2986eae9dc9
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-25T17:18:44.465Z
=========
=========
# EVMScriptRegistryFactory:
Address: 0xce25afae0ca1fb66fc14585e575fce6e202673e6
Transaction hash: 0x1c255ae3791b133aa1fd0b105fbbe4eb88de8a0e21524b499bc96a339eb0db42
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-25T17:18:44.491Z
=========
=========
# DAOFactory:
Address: 0x2298d27a9b847c681d2b2c2828ab9d79013f5f1d
Transaction hash: 0xe53de8ab834af2fa757d8795ad21b742c9398fc49a6eae7ad83867da2baeb077
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-25T17:18:44.490Z
=========
```

### APM

Commands:
```
DAO_FACTORY=0x2298d27a9b847c681d2b2c2828ab9d79013f5f1d ENS=0x98df287b6c145399aaa709692c8d308357bc085d OWNER=0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff npx truffle exec --network rinkeby scripts/deploy-apm.js
```

Output:
```
Deploying APM...
Owner: 0xbA2bAdbbB8224e1966f33bf08d667Ddc09b720ff
ENS: 0x98df287b6c145399aaa709692c8d308357bc085d
TLD: eth (0x93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae)
Label: aragonpm (0x1542111b4698ac085139692eae7c6efb632a4ae2779f8686da94511ebbbff594)
=========
Deploying APM bases...
=========
# APMRegistry:
Address: 0xdda8dc1bc20e2900a5aad4cb2c64e976086c9d50
Transaction hash: 0x4ef5362b4121869d4cc16dcd668ccbb6770ff10a03ac6ffe41df1ca2341cf62a
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-25T17:18:44.475Z
=========
=========
# Repo:
Address: 0x9be2515f7b3a5bdf0f41bea9c3b58a61ca0a2c8c
Transaction hash: 0x69e42377f2558f916fdf626df06ee88b84def612944ab63704c9bc1be51dc65c
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-25T17:18:44.477Z
=========
=========
# ENSSubdomainRegistrar:
Address: 0xd02358c9788ab5aba5bd1ee32272c46d73afe65d
Transaction hash: 0xcd841911e22dad1f7e2829d4f9f35039062cd3f10a0565668565103dc38139b3
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-25T17:18:44.483Z
=========
Using provided DAOFactory (with EVMScripts): 0x2298d27a9b847c681d2b2c2828ab9d79013f5f1d
Deploying APMRegistryFactory...
=========
# APMRegistryFactory:
Address: 0x47c0beb14860eed8f9d83388f9b2c66fe50d848c
Transaction hash: 0x088ef5d6bdba2c319dcc2a6e3c2124a9ada4fd214f49294a3a69e224de45ba07
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-25T17:18:44.488Z
=========
Assigning ENS name (aragonpm.eth) to factory...
Transferring name ownership from deployer to APMRegistryFactory
Deploying APM...
=========
# APM:
Address: 0xda897630fa0f1902f99623bc00e18acd12657d4f
Transaction hash: 0x9e9184fc3a5257e5450e32f29192f79a78056271e65c19b2e0a15fb1adfaef33
=========
```

### Aragon ID


```
ENS=0x98df287b6c145399aaa709692c8d308357bc085d npx truffle exec --network rinkeby scripts/deploy-beta-aragonid.js
```

Output:
```
Deploying AragonID with ENS: 0x98df287b6c145399aaa709692c8d308357bc085d and owner: undefined
=========
# FIFSResolvingRegistrar:
Address: 0x3665e7bfd4d3254ae7796779800f5b603c43c60d
Transaction hash: 0x425bbff845d9379b35b4c59a62b0e34d1a6a1ebdc06e65522acd6e0016c00d6b
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-25T19:03:35.101Z
=========
assigning ENS name to AragonID
Transferring name ownership from deployer to AragonID
===========
Deployed AragonID: 0x3665e7bfd4d3254ae7796779800f5b603c43c60d
```

### Aragon Apps

Deployed: `finance`, `vault`, `voting`, `token-manager`
Command:
```
rm -rf build
rm -rf app/build
aragon apm publish 1.0.0 --environment rinkeby --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

- `token-manager.aragonpm.eth` had to be republished twice as `1.0.0` had an incorrect artifact.


Final versions:

- `finance.aragonpm.eth`: `1.0.0`
- `token-manager.aragonpm.eth`: `1.0.2`
- `vault.aragonpm.eth`: `1.0.0`
- `voting.aragonpm.eth`: `1.0.0`

### DAO kits

Deployed: `democracy-kit`, `multisig-kit`
Command:
```
DAO_FACTORY=0x2298d27a9b847c681d2b2c2828ab9d79013f5f1d npm run publish:rinkeby
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `democracy-kit.aragonpm.eth`: `1.0.0`
- `multisig-kit.aragonpm.eth`: `1.0.0`

### Aragon Client

Command:
```
npm run publish:rinkeby:major
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.0.0`