# Staging

- [Permissions](./permissions.yml)
- [APM publish history](./deploys.yml)

## Artifacts

- ENS: `0x98df287b6c145399aaa709692c8d308357bc085d`
- DAOFactory: `0x2298d27a9b847c681d2b2c2828ab9d79013f5f1d`
- APM: `0xda897630fa0f1902f99623bc00e18acd12657d4f`

## Deployment

- Version: 4.0.0
- Start date: Oct 25th 2018, 5.42pm CEST
- Finish date: TODO
- Deployer: ([@izqui](https://github.com/izqui)) [`0x4cB3FD420555A09bA98845f0B816e45cFb230983`](https://rinkeby.etherscan.io/address/0x4cB3FD420555A09bA98845f0B816e45cFb230983)
- aragonOS commit hash: [`TODO`](https://github.com/aragon/aragonOS/tree/TODO)
- aragon-id commit hash: [`TODO`](https://github.com/aragon/aragon-id/tree/TODO)

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
``
