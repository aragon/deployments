# Ropsten

- [Permissions](./permissions.yml)
- [APM publish history](./deploys.yml)

## Artifacts

- ENS: `0x6afe2cacee211ea9179992f89dc61ff25c61e923`
- aragonPM:
  - `aragonpm.eth`: `0x20610d303cc60526cef2ebedda30e90076828db9`
  - `open.aragonpm.eth`:
  `0x8980e53c979ca98e3adb8e891aebbc0f3455de37`
- DAOFactory (Aragon 0.7): `0x3f2aa9dd22e97070518ba7988fe9b8724129d497`

## Deployments

-----------

- Version: Aragon client 0.7.5
- Start date: Jul 11th 2018, 2.11pm CEST
- Finish date: TODO
- Deployer: ([@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://ropsten.etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983)
- aragonOS commit hash: [`c85d34e4bae0bf5b1ab78340b32e712d895179a7`](https://github.com/aragon/aragonOS/tree/c85d34e4bae0bf5b1ab78340b32e712d895179a7)
- aragon-id commit hash: [`3421f4f6d0f444bdae46ae8615805d79ec929f15`](https://github.com/aragon/aragon-id/tree/3421f4f6d0f444bdae46ae8615805d79ec929f15)

### aragonOS

Commands:
```
npx truffle compile --all
npx truffle exec --network ropsten scripts/deploy-daofactory.js
```

Output:
```
=========
# Kernel:
Address: 0x67b91c834bb873e43de98b68360e675c1d9c625d
Transaction hash: 0x78db90d0b7d1c8b916f03cdd66a360107d77f81970e173f5e864def9e38b7448
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-07-11T12:18:46.647Z
=========
^C⏎                                                                                                      [~/p/aragonOS] git:(master) ✗ $ npx truffle exec --network ropsten scripts/deploy-daofactory.js
Using network 'ropsten'.

=========
# Kernel:
Address: 0xef48460fa0a8a46e7a8fbbbbf6a59f4dbfae335d
Transaction hash: 0xf0300af2db33b72793b2c618f9947b4e407ffe3bab3b7f4066a5b8b6d949726a
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-07-11T12:18:46.647Z
=========
=========
# ACL:
Address: 0xe34cae5cdc42afd4c68727a936908918b5faa675
Transaction hash: 0x8527a8d29856b7cb7dc61cf16f14bb227ec72065c701778fc5af332d0eb49d39
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-07-11T12:18:46.578Z
=========
=========
# EVMScriptRegistryFactory:
Address: 0x103ba001256259fc25176edcba67a27b6663ee5a
Transaction hash: 0x5caeadc2b4b0abb74ac931005dd0315f6ac754ce7eab913bebe3f7963e72eab8
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-07-11T12:18:46.642Z
=========
=========
# DAOFactory:
Address: 0x3f2aa9dd22e97070518ba7988fe9b8724129d497
Transaction hash: 0xfc03f7d8a5fbe1755d10d1362e59f739618f5c4cdd9223a628cd09f08c814690
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-07-11T12:18:46.640Z
=========
```

### aragonPM

Commands:
```
DAO_FACTORY=0x3f2aa9dd22e97070518ba7988fe9b8724129d497 OWNER=0x4cB3FD420555A09bA98845f0B816e45cFb230983 npx truffle exec --network ropsten scripts/deploy-apm.js
```

Output:
```
Deploying APM...
Owner: 0x4cB3FD420555A09bA98845f0B816e45cFb230983
=========
Missing ENS! Deploying a custom ENS...
Deployed ENSFactory: 0x587f04ef000a235afad4e8fc2a0c3005bec52f78
ENS: 0x6afe2cacee211ea9179992f89dc61ff25c61e923
TLD: eth (0x93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae)
Label: aragonpm (0x1542111b4698ac085139692eae7c6efb632a4ae2779f8686da94511ebbbff594)
=========
Deploying APM bases...
=========
# APMRegistry:
Address: 0x734f1511854d659989ef75d5ed211ca1391390ee
Transaction hash: 0xa58c6458b2efa946afb20ea9fb82f5992c64de13e396e9fb724ea108e46337f1
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-07-11T12:18:46.586Z
=========
=========
# Repo:
Address: 0xdb4306b34a89b96555542fc48bb2743aedf3a468
Transaction hash: 0x8f931d4d1e97e2124cc3284b543aeb9b20d29966767db6f6b87a3da54b4aaa71
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-07-11T12:18:46.594Z
=========
=========
# ENSSubdomainRegistrar:
Address: 0x7dd5b857162f1aa7f4772af23f41dc3a8642f3f8
Transaction hash: 0x0548dc9e41777c10506d328f4fd533c88de9c1a71b2c90e957648d83d3ba2900
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-07-11T12:18:46.613Z
=========
Using provided DAOFactory (with EVMScripts): 0x3f2aa9dd22e97070518ba7988fe9b8724129d497
Deploying APMRegistryFactory...
=========
# APMRegistryFactory:
Address: 0xf5174528211211a667243edc8579f2042124895c
Transaction hash: 0xf81c1bfe9d05aabb630f4dd30b71642c6475e5b709493a391fdcc4fc03b81b9b
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-07-11T12:18:46.636Z
=========
Assigning ENS name (aragonpm.eth) to factory...
Creating subdomain and assigning it to APMRegistryFactory
Deploying APM...
=========
# APM:
Address: 0x20610d303cc60526cef2ebedda30e90076828db9
Transaction hash: 0x3fc7292b68578333a31046d4f6acf711cebdd6e606351b7bd572b607558b6bc8
=========
```

### Aragon ID

Commands:

```
npx truffle compile --all
ENS=0x6afe2cacee211ea9179992f89dc61ff25c61e923 npx truffle exec --network ropsten scripts/deploy-beta-aragonid.js
```

Output:

```
Deploying AragonID with ENS: 0x6afe2cacee211ea9179992f89dc61ff25c61e923 and owner: undefined
=========
# FIFSResolvingRegistrar:
Address: 0x3c7f5e7946c09c38f53d608adfd2ed5d6b137ade
Transaction hash: 0xa6660cfa4518535b4c6064444ecd6a8c1cb625ee1a34eb9e041c1dc3c03c870b
Compiler: solc@0.4.24+commit.e67f0147.Emscripten.clang (Optimizer: 10000 runs)
Compiled at: 2019-07-11T12:41:11.254Z
=========
assigning ENS name to AragonID
Creating subdomain and assigning it to AragonID
===========
Deployed AragonID: 0x3c7f5e7946c09c38f53d608adfd2ed5d6b137ade
```

### Aragon Apps

### DAO kits

### Aragon Client