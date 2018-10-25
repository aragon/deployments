# Staging

- [Permissions](./permissions.yml)
- [APM publish history](./deploys.yml)

## Artifacts

- ENS: `0xfe03625ea880a8cba336f9b5ad6e15b0a3b5a939`
- DAOFactory: `0x10e1fcca61798cae1e1bcddcbc0cf3e8c03418a6`
- APM: `0x4994a4b1215bf73f0e69ce69c2e6b43c496ad4bf`

## Deployment

- Version: 4.0.0-rc.1
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

### DAO kits

Deployed: `democracy-kit`, `multisig-kit`
Command:
```
DAO_FACTORY=0x10e1fcca61798cae1e1bcddcbc0cf3e8c03418a6 npm run publish:staging
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)