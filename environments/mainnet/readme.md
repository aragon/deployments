# Mainnet

- [Permissions](./permissions.yml)
- [APM publish history](./deploys.yml)

## Artifacts

- Official ENS: `0x314159265dd8dbb310642f98f50c066173c1259b`
- DAOFactory: `0x595b34c93aa2c2ba0a38daeede629a0dfbdcc559`
- APM: `0x346854c542d437565339E60dE8CB3EfE1cAB30dC`

## Deployment

- Version: Aragon Core 0.6 RC 2
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

- Transfer the deed to itself, which sets the multisig as the owner of `aragonpm.eth`. [Submission transaction](0x84cd4fe72d95d80773942131958eebe5564ef98dc8e2081e4184761807b67b3e) and [confirmation transaction](https://etherscan.io/tx/0xa09381e5ed148300bf5bc89f6bdcec867269234da47b0fac0f09bde5bf644eb6).
- Transfer ownership of `aragonpm.eth` to the deployer account. [Submission transaction](0x38aa550f8e03613405c6ec902de6db135464919ca65f3c835fde9725fb824edb) and [confirmation transaction](https://etherscan.io/tx/0x8139c959a1188b37bf222d010919678d220c2db7d22c8f6ae5e98524289cea69).

#### `aragonid.eth`

The [Aragon Association multisig](https://etherscan.io/address/0xcafe1a77e84698c83ca8931f54a755176ef75f2c) as the owner of `aragonid.eth`, performed:

- Transfer ownership of `aragonid.eth` to the deployer account. [Submission transaction](0xc78b3997a64f73309660313ccb74d872f201017a16560a3e16ee6ba0481e1aed) and [confirmation transaction]().

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

### Aragon Core

Command:
```
npm run publish:mainnet:major
```

Details of the deployment can be found in [`deploys.yml`](./deploys.yml)

Final versions:

- `aragon.aragonpm.eth`: `1.0.0`
