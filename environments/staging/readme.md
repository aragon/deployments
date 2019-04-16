# Staging

- [Permissions](./permissions.yml)
- [APM publish history](./deploys.yml)

## Artifacts

- ENS: `0xfe03625ea880a8cba336f9b5ad6e15b0a3b5a939`
- DAOFactory: `0x10e1fcca61798cae1e1bcddcbc0cf3e8c03418a6`
- APM: `0x4994a4b1215bf73f0e69ce69c2e6b43c496ad4bf`

## Deployments

-----------

- Version: PPF
- Start date: Apr 16 2019 4:15 PM CEST
- Finish date: Apr 16 2019 8:15 PM CEST
- Deployer: ([@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://rinkeby.etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983)
- ppf commit hash: [`0cec7305cdaef5df13021a9d67a66a4bc7a4ff2c`](https://github.com/aragon/ppf/tree/0cec7305cdaef5df13021a9d67a66a4bc7a4ff2c)

### PPF

Command:
```
OPERATOR=0x6eC28F4e814f88DA2d981E6E787B786162006D39 OPERATOR_OWNER=0x4cB3FD420555A09bA98845f0B816e45cFb230983 npx truffle exec --network rinkeby scripts/deploy-ppf.js
```

Output
```
=========
# PPFFactory:
Address: 0xb2bc2aa7d65b9acc99922e57ef8dfdec7066b689
Transaction hash: 0x7d39a2a0fd5d4774a6c566209472e0b0bbef61e46c5c6f09899f3ce84120a70e
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-04-16T14:11:57.573Z
=========
Using factory 0xb2bc2aa7d65b9acc99922e57ef8dfdec7066b689
Deploying with operator 0x6eC28F4e814f88DA2d981E6E787B786162006D39 and operatorOwner 0x4cB3FD420555A09bA98845f0B816e45cFb230983
PPF instance: 0x6b91cc4e3b2bb8730fb08cb9093dfed41b7c886f
```

-----------

- Version: Aragon client 0.7.0-rc.4-hotfix
- Start date: Apr 14 2019 1:00 PM CEST
- Finish date: Apr 14 2019 1:05 PM CEST
- Deployer: ([@sohkai](https://github.com/sohkai)) [`0x15bdCb6651f5a5e9Cef07b2a981dd270BA505051`](https://rinkeby.etherscan.io/address/0x15bdCb6651f5a5e9Cef07b2a981dd270BA505051)

### Aragon Apps

Deployed: `finance`

Command:
```
aragon apm publish patch --environment staging --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `1.1.4`

-----------

- Version: Aragon client 0.7.0-rc.4
- Start date: Apr 13 2019 2:30 PM CEST
- Finish date: Apr 13 2019 3:05 PM CEST
- Deployer: ([@sohkai](https://github.com/sohkai)) [`0x15bdCb6651f5a5e9Cef07b2a981dd270BA505051`](https://rinkeby.etherscan.io/address/0x15bdCb6651f5a5e9Cef07b2a981dd270BA505051)

### Aragon Client

Command:
```
npm run publish:staging:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.1.4`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command:
```
aragon apm publish patch --environment staging --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `1.1.3`
- `token-manager.aragonpm.eth`: `1.1.3`
- `voting.aragonpm.eth`: `1.1.3`

-----------

- Version: Aragon client 0.7.0-rc.3
- Start date: Apr 11 2019 11:50 AM CEST
- Finish date: Apr 11 2019 12:00 PM CEST
- Deployer: ([@sohkai](https://github.com/sohkai)) [`0x15bdCb6651f5a5e9Cef07b2a981dd270BA505051`](https://rinkeby.etherscan.io/address/0x15bdCb6651f5a5e9Cef07b2a981dd270BA505051)

### Aragon Client

Command:
```
npm run publish:staging:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.1.2`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command:
```
aragon apm publish patch --environment staging --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `1.1.2`
- `token-manager.aragonpm.eth`: `1.1.2`
- `voting.aragonpm.eth`: `1.1.2`

-----------

- Version: Aragon client 0.7.0-rc.2
- Start date: Mar 29 2019 4:00 PM CEST
- Finish date: Mar 29 2019 5:00 PM CEST
- Deployer: ([@2color](https://github.com/2color)) [`0x3bD60bafEa8A7768C6f4352AF4Cfe01701884Ff2`](https://rinkeby.etherscan.io/address/0x3bD60bafEa8A7768C6f4352AF4Cfe01701884Ff2)

### Aragon Client

Command:
```
npm run publish:staging:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.1.1`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command:
```
aragon apm publish patch --environment staging --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `1.1.1`
- `token-manager.aragonpm.eth`: `1.1.1`
- `voting.aragonpm.eth`: `1.1.1`

-----------

- Version: Aragon client 0.7.0-rc.1
- Start date: Mar 25 2019 5:00 PM CEST
- Finish date: Mar 25 2019 6:00 PM CEST
- Deployer: ([@2color](https://github.com/2color)) [`0x3bD60bafEa8A7768C6f4352AF4Cfe01701884Ff2`](https://rinkeby.etherscan.io/address/0x3bD60bafEa8A7768C6f4352AF4Cfe01701884Ff2)

### Aragon Client

Command:
```
npm run publish:staging:minor
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.1.0`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command:
```
aragon apm publish minor --environment staging --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `1.1.0`
- `token-manager.aragonpm.eth`: `1.1.0`
- `voting.aragonpm.eth`: `1.1.0`

-----------

- Version: Aragon client 0.6.4
- Start date: Jan 26th 2019, 11:45pm CEST
- Finish date: Jan 26th 2019, 17:10pm CEST
- Deployer: ([@2color](https://github.com/2color)) [`0x3bD60bafEa8A7768C6f4352AF4Cfe01701884Ff2`](https://rinkeby.etherscan.io/address/0x3bD60bafEa8A7768C6f4352AF4Cfe01701884Ff2)

### Aragon Client

Command:
```
npm run publish:staging:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.0.16`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command:
```
aragon apm publish patch --environment staging --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `1.0.14`
- `token-manager.aragonpm.eth`: `1.0.13`
- `voting.aragonpm.eth`: `1.0.14`

-----------

- Version: aragon agent beta v2
- Start date: feb 22nd, 6.03pm cet
- Finish date: feb 22nd, 6.03pm cet
- Deployer: ([@izqui](https://github.com/izqui)) [`0x4cb3fd420555a09ba98845f0b816e45cfb230983`](https://rinkeby.etherscan.io/address/0x4cb3fd420555a09ba98845f0b816e45cfb230983)

### Aragon Apps

Deployed: `agent`

Command:
```
aragon apm publish major --environment staging
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `agent.aragonpm.eth`: `2.0.0`

-----------

- Version: Survey resurrect
- Start date: Feb 16th, 9.53pm CET
- Finish date: Feb 16th, 9.55pm CET
- Deployer: ([@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://rinkeby.etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983)

### Aragon Apps

Deployed: `survey`

Command:
```
aragon apm publish major --environment staging --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `survey.aragonpm.eth`: `1.0.0`

-----------

- Version: Aragon Agent beta
- Start date: Feb 15th, 5.26pm CET
- Finish date: Feb 15th, 5.26pm CET
- Deployer: ([@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://rinkeby.etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983)

### Aragon Apps

Deployed: `agent`

Command:
```
aragon apm publish major --environment staging
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `agent.aragonpm.eth`: `1.0.0`

-----------

- Version: Aragon client 0.6.3-responsive-pre-release-3
- Start date: Jan 25th 2019, 19:00pm CEST
- Finish date: Jan 25th 2019, 19:30pm CEST
- Deployer: ([@AquiGorka](https://github.com/AquiGorka)) [`0x7c0be2cc18934e2d72e136b4bf350949adeaf423`](https://rinkeby.etherscan.io/address/0x7c0be2cc18934e2d72e136b4bf350949adeaf423)

Staging deployment of fixes for in-progress work on responsive UI and notifications panel.

### Aragon Client

Command:
```
npm run publish:staging:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.0.11`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command:
```
aragon apm publish patch --environment staging --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `1.0.10`
- `token-manager.aragonpm.eth`: `1.0.10`
- `voting.aragonpm.eth`: `1.0.11`

-----------

- Version: Aragon client 0.6.3-responsive-pre-release-2
- Start date: Jan 25th 2019, 10:52pm CEST
- Finish date: Jan 25th 2019, 10:59pm CEST
- Deployer: ([@AquiGorka](https://github.com/AquiGorka)) [`0x7c0be2cc18934e2d72e136b4bf350949adeaf423`](https://rinkeby.etherscan.io/address/0x7c0be2cc18934e2d72e136b4bf350949adeaf423)

Staging deployment of fixes for in-progress work on responsive UI and notifications panel.

### Aragon Client

Command:
```
npm run publish:staging:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.0.10`

-----------

- Version: Aragon client 0.6.3-responsive-pre-release-1
- Start date: Jan 24th 2019, 12:40pm CEST
- Finish date: Jan 24th 2019, 13:20pm CEST
- Deployer: ([@AquiGorka](https://github.com/AquiGorka)) [`0x7c0be2cc18934e2d72e136b4bf350949adeaf423`](https://rinkeby.etherscan.io/address/0x7c0be2cc18934e2d72e136b4bf350949adeaf423)

Staging deployment of fixes for in-progress work on responsive UI and notifications panel.

### Aragon Client

Command:
```
npm run publish:staging:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.0.9`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command:
```
aragon apm publish patch --environment staging --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `1.0.9`
- `token-manager.aragonpm.eth`: `1.0.9`
- `voting.aragonpm.eth`: `1.0.10`

-----------

- Version: Aragon client 0.6.3-responsive-pre-release
- Start date: Jan 22th 2019, 17:45pm CEST
- Finish date: Jan 2th 2019, 18:45pm CEST
- Deployer: ([@AquiGorka](https://github.com/AquiGorka)) [`0x7c0be2cc18934e2d72e136b4bf350949adeaf423`](https://rinkeby.etherscan.io/address/0x7c0be2cc18934e2d72e136b4bf350949adeaf423)

Staging deployment of in-progress work on responsive UI and notifications panel.

### Aragon Client

Command:
```
npm run publish:staging:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.0.8`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command:
```
aragon apm publish patch --environment staging --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `1.0.8`
- `token-manager.aragonpm.eth`: `1.0.8`
- `voting.aragonpm.eth`: `1.0.9`

-----------

- Version: Aragon client 0.6.2-rc2
- Start date: Dec 21th, 8.30am CEST
- Finish date: Dec 18th 2018, 8.35pm CEST
- Deployer: ([@sohkai](https://github.com/sohkai)) [`0x15bdCb6651f5a5e9Cef07b2a981dd270BA505051`](https://rinkeby.etherscan.io/address/0x15bdCb6651f5a5e9Cef07b2a981dd270BA505051)

### Aragon Apps

Deployed: `finance`

Command:
```
aragon apm publish patch --environment staging --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `1.0.6`

-----------

- Version: Aragon client 0.6.2-rc1
- Start date: Dec 18th, 10.00pm CEST
- Finish date: Dec 18th 2018, 10.30pm CEST
- Deployer: ([@sohkai](https://github.com/sohkai)) [`0x15bdCb6651f5a5e9Cef07b2a981dd270BA505051`](https://rinkeby.etherscan.io/address/0x15bdCb6651f5a5e9Cef07b2a981dd270BA505051)

### Aragon Client

Command:
```
npm run publish:staging:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.0.6`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command:
```
aragon apm publish patch --environment staging --files app/build
```

**Note**: the `artifact.json` for `voting` was regenerated using:
```
aragon apm publish patch --environment staging --only-artifacts --no-build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `1.0.5`
- `token-manager.aragonpm.eth`: `1.0.6`
- `voting.aragonpm.eth`: `1.0.7`

-----------

- Version: Aragon client 0.6.0-hotfix
- Start date: Nov 5th 2018, 5.00pm CEST
- Finish date: Nov 5th 2018, 10.50pm CEST
- Deployer: ([@sohkai](https://github.com/sohkai)) [`0x15bdCb6651f5a5e9Cef07b2a981dd270BA505051`](https://rinkeby.etherscan.io/address/0x15bdCb6651f5a5e9Cef07b2a981dd270BA505051)

### Aragon Client

Command:
```
npm run publish:staging:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.0.5`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command:
```
aragon apm publish patch --environment staging --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `1.0.4`
- `token-manager.aragonpm.eth`: `1.0.5`
- `voting.aragonpm.eth`: `1.0.5`

-----------

- Version: Aragon client 0.6-rc.4
- Start date: Oct 30th 2018, 1.50pm CEST
- Finish date: Oct 30th 2018, 2.20pm CEST
- Deployer: ([@sohkai](https://github.com/sohkai)) [`0x15bdCb6651f5a5e9Cef07b2a981dd270BA505051`](https://rinkeby.etherscan.io/address/0x15bdCb6651f5a5e9Cef07b2a981dd270BA505051)

### Aragon Client

Command:
```
npm run publish:staging:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.0.3`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command:
```
aragon apm publish patch --environment staging --files app/build
```

(Vault):
```
aragon apm publish major --environment staging --files assets
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `1.0.3`
- `token-manager.aragonpm.eth`: `1.0.4`
- `voting.aragonpm.eth`: `1.0.4`
- `vault.aragonpm.eth`: `2.0.1`

-----------

- Version: Aragon client 0.6-rc.3
- Start date: Oct 30th 2018, 7.25am CEST
- Finish date: Oct 30th 2018, 7.30am CEST
- Deployer: ([@sohkai](https://github.com/sohkai)) [`0x15bdCb6651f5a5e9Cef07b2a981dd270BA505051`](https://rinkeby.etherscan.io/address/0x15bdCb6651f5a5e9Cef07b2a981dd270BA505051)

### Aragon Client

Command:
```
npm run publish:staging:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.0.2`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command:
```
aragon apm publish patch --environment staging --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

- `finance.aragonpm.eth`: `1.0.2`
- `token-manager.aragonpm.eth`: `1.0.3`
- `voting.aragonpm.eth`: `1.0.2`

-----------

- Version: Aragon client 0.6
- Start date: Oct 29th 2018, 11.36pm CEST
- Finish date: Oct 29th 2018, 11.36pm CEST
- Deployer: ([@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://rinkeby.etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983)

### Aragon Apps

Deployed: `vault`

Command:
```
aragon apm publish major --environment staging --files assets
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `vault.aragonpm.eth`: `2.0.0`

-----------

- Version: Aragon client 0.6-rc.2
- Start date: Oct 25th 2018, 11.36pm CEST
- Finish date: Oct 26th 2018, 6.21pm CEST
- Deployer: ([@sohkai](https://github.com/sohkai)) [`0x15bdCb6651f5a5e9Cef07b2a981dd270BA505051`](https://rinkeby.etherscan.io/address/0x15bdCb6651f5a5e9Cef07b2a981dd270BA505051)

### APM

`@izqui` created `aragon.aragonpm.eth` and granted `@bingen`, `@bpierre`, and `@sohkai` permission to create versions.

### Aragon Client

Command:
```
npm run publish:staging:patch
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.0.1`

### Aragon Apps

Deployed: `finance`, `voting`, `token-manager`

Command:
```
aragon apm publish patch --environment staging --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `1.0.1`
- `token-manager.aragonpm.eth`: `1.0.2`
- `voting.aragonpm.eth`: `1.0.2`

-----------

- Version: Aragon client 0.6-rc.1
- Start date: Oct 24th 2018, 10.54am CEST
- Finish date: Oct 24th 2018, 11.51am CEST
- Deployer: ([@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://rinkeby.etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983)
- aragonOS commit hash: [`a4ad648182dae0583622f260a23393326c77fc91`](https://github.com/aragon/aragonOS/tree/a4ad648182dae0583622f260a23393326c77fc91)
- aragon-id commit hash: [`dc560a90d27e2cbabdfdde9b9d8dd7aa6b9d0b8b`](https://github.com/aragon/aragon-id/tree/dc560a90d27e2cbabdfdde9b9d8dd7aa6b9d0b8b)

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
Address: 0x448fc28726cd78ce6dd63779fcf0029313376ea8
Transaction hash: 0xd0af250d5d4c2ebbbf798831d19db2f9da02f2ec5d60b789232810d4f0d60613
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-24T08:50:58.821Z
=========
=========
# ACL:
Address: 0xd95677b5b3bc3c89c4c2c3ab702b0aa5d5cb28af
Transaction hash: 0x2454ec49a4c1d41f6138939987ebec89cbee20078af2528e9565cb2fa7965774
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-24T08:50:58.757Z
=========
=========
# EVMScriptRegistryFactory:
Address: 0x87262583244adaa9030c7116933052c445c39998
Transaction hash: 0xf3649698315584a076dbdff728589d90ec008fa94626d7c5d52102e66d74fa43
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-24T08:50:58.813Z
=========
=========
# DAOFactory:
Address: 0x10e1fcca61798cae1e1bcddcbc0cf3e8c03418a6
Transaction hash: 0x45fd6f3df2285d95f31fe7f3b09fecc2d07d5146e86a2c9a25d8774bdb139f47
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-24T08:50:58.810Z
=========
```

### APM

Command:
```
DAO_FACTORY=0x10e1fcca61798cae1e1bcddcbc0cf3e8c03418a6 OWNER=0x4cB3FD420555A09bA98845f0B816e45cFb230983 npx truffle exec --network rinkeby scripts/deploy-apm.js
```

Output:
```
Deploying APM...
Owner: 0x4cB3FD420555A09bA98845f0B816e45cFb230983
=========
Missing ENS! Deploying a custom ENS...
Deployed ENSFactory: 0x0ac32dc7e4bf9918acecf1f443160328e48394d5
ENS: 0xfe03625ea880a8cba336f9b5ad6e15b0a3b5a939
TLD: eth (0x93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae)
Label: aragonpm (0x1542111b4698ac085139692eae7c6efb632a4ae2779f8686da94511ebbbff594)
=========
Deploying APM bases...
=========
# APMRegistry:
Address: 0x9a22f0c1df3f6c99000403fdd3802da27ce79d30
Transaction hash: 0x6ab7a1df6d5ccd58a52d1d4487fbadc568e1cc7d22eb19c27ba9c3fd7dab8f93
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-24T08:50:58.764Z
=========
=========
# Repo:
Address: 0x2fefa2c80893db65c829773bd42fa51320696d4a
Transaction hash: 0xe6ab1f3c6d551461e6053854aebb203baff6ef9dcfc3f02f7209af89757664a7
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-24T08:50:58.769Z
=========
=========
# ENSSubdomainRegistrar:
Address: 0x88341d946279a351a07aaf048921837900a443a0
Transaction hash: 0x4670bc3a9fea440ba8f3b68b83232549257a5b6c0f3f9765ce95c64793821cc8
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-24T08:50:58.791Z
=========
Using provided DAOFactory (with EVMScripts): 0x10e1fcca61798cae1e1bcddcbc0cf3e8c03418a6
Deploying APMRegistryFactory...
=========
# APMRegistryFactory:
Address: 0x93cc98cfb650bf644361bcd8d24cec24ef7dccbd
Transaction hash: 0xeaebb6662e28217aabd53ad9497906c5f66eabc672bc3f2bb9c0ce6744887dfb
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-24T08:50:58.806Z
=========
Assigning ENS name (aragonpm.eth) to factory...
Deploying APM...
=========
# APM:
Address: 0x4994a4b1215bf73f0e69ce69c2e6b43c496ad4bf
Transaction hash: 0xaff9ef805d82cbca3c1786b78d39b1559e09d626e8249a960b677948b6bb9e64
=========
```

### Aragon ID

Command:

```
ENS=0xfe03625ea880a8cba336f9b5ad6e15b0a3b5a939 ONWER=0x4cB3FD420555A09bA98845f0B816e45cFb230983 npx truffle exec --network rinkeby scripts/deploy-beta-aragonid.js
```

Output:

```
Deploying AragonID with ENS: 0xfe03625ea880a8cba336f9b5ad6e15b0a3b5a939 and owner: 0x4cb3fd420555a09ba98845f0b816e45cfb230983
assigning ENS name to AragonID
=========
# FIFSResolvingRegistrar:
Address: 0xa2e76aa249e3f52ea94c175662adadf27185484a
Transaction hash: 0xb44c420588e761ca81f1373d1beed78112280e4d1e7e3b5b00405843988bca25
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2018-10-24T09:17:14.941Z
=========
assigning owner name
===========
Deployed AragonID: 0xa2e76aa249e3f52ea94c175662adadf27185484a
```

### Aragon Apps

Deployed: `finance`, `vault`, `voting`, `token-manager`

Command:
```
aragon apm publish 1.0.0 --environment staging --files app/build
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `finance.aragonpm.eth`: `1.0.0`
- `token-manager.aragonpm.eth`: `1.0.0`
- `vault.aragonpm.eth`: `1.0.0`
- `voting.aragonpm.eth`: `1.0.0`

### DAO kits

Deployed: `democracy-kit`, `multisig-kit`

Command:
```
DAO_FACTORY=0x10e1fcca61798cae1e1bcddcbc0cf3e8c03418a6 npm run publish:staging
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `democracy-kit.aragonpm.eth`: `1.0.0`
- `multisig-kit.aragonpm.eth`: `1.0.0`
