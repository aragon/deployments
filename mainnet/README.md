:crystal_ball: Current Mainnet deployments
==========================================

[See below for history](#floppy_disk-deployment-history)

`aragonpm.eth` Repos
--------------------

### Apps

- [**Aragon Core / "Wrapper"**](https://github.com/aragon/aragon) | [`0.5.2`](https://github.com/aragon/aragon/tree/0.5.2) ([commit](https://github.com/aragon/aragon/tree/49e380f5d5440091616cca2d68f1f1ed899062ec)) | [`aragon.aragonpm.eth`](https://etherscan.io/address/0x8b0cd3e13d339084da7256266aafb51343517b34) | No contract | [IPFS backups](./aragon.aragonpm.eth)
- [**Survey**](https://github.com/aragon/aragon-apps/tree/master/apps/survey) | [`0.5.2`](https://github.com/aragon/aragon-apps/releases/tag/0.5.2) ([commit](https://github.com/aragon/aragon-apps/tree/d4a22a3d18a8364d5824f6e0288840810e6d6485)) | [`survey.aragonpm.eth`](https://etherscan.io/address/0x285bcf9ad541dcf847dce561d5d1ad5ef9d77d41) | [Current address](https://etherscan.io/address/0x3c7f5e7946c09c38f53d608adfd2ed5d6b137ade) | [IPFS backups](./survey.aragonpm.eth)

### Kits

- [**Survey Kit**](https://github.com/aragon/dao-kits/tree/master/kits/survey) | `unversioned` (no commit) | [`survey-kit.aragonpm.eth`](https://etherscan.io/address/0x2b88452e91e1692c9d770e9d906e11341a6d121a) | [Current address](https://etherscan.io/address/0xb5ba20a4e9167b640311a0c10d773bb143db5e39)


Contracts
---------

- [**aragonOS**](https://github.com/aragon/aragonOS) | [`3.1.7`](https://github.com/aragon/aragonOS/releases/tag/v3.1.7) ([commit](https://github.com/aragon/aragonOS/tree/851e46bc329bec59082fb6a8178f6404ece98122))
    - `Kernel.sol` | [Current base address](https://etherscan.io/address/0xe214ca721720019a81c889a59124f168be632e94)
        - :rotating_light: This contract has been found to contain a bug and is **not recommended** for independent use yet (see the [patch notes for the next version](https://github.com/aragon/aragonOS/releases/tag/v3.1.8))
    - `ACL.sol` | [Current base address](https://etherscan.io/address/0xb104e51f872788e0c2742e7098e2a792b9569d56)
    - `DAOFactory.sol` | [Current address](https://etherscan.io/address/0x7b6bddc7fa88f1340fad3b4cb0b267e0314ab76b)
- **Aragon Package Manager** | [`aragonOS@v3.1.7/contracts/apm`](https://github.com/aragon/aragonOS/tree/v3.1.7/contracts/apm) ([commit](https://github.com/aragon/aragonOS/tree/851e46bc329bec59082fb6a8178f6404ece98122/contracts/apm))
    - **Official APM** | `aragonpm.eth` | [Registrar address: `0xb30d35b0ba325bde4e8acae9721716b7fd5637c4`](https://etherscan.io/address/0xb30d35b0ba325bde4e8acae9721716b7fd5637c4)
    - `APMRegistry.sol` | [Current base address](https://etherscan.io/address/0xf5174528211211a667243edc8579f2042124895c)
    - `Repo.sol` | [Current base address](https://etherscan.io/address/0xf626624a4c25b053dcce35d6ed2efcec46b19b56)
    - `ENSSubdomainRegistar.sol` | [Current base address](https://etherscan.io/address/0x6702f32e9abd64961fbbf123aed450ac0da65853)
    - `APMRegistryFactory.sol` | [Current address](https://etherscan.io/address/0x66926276f7ba5d9d17015c822e0e8ad3773f20f4)

Permissions
-----------

- [`@izqui`](https://github.com/izqui) (`0x4cB3FD420555A09bA98845f0B816e45cFb230983`):
    - Root access to the **official APM** at `aragonpm.eth`
    - Root access to the **official Survey DAO** at `0xf65deded34a639a2166896a5571969f98f6bac8e`
- [`@sohkai`](https://github.com/sohkai) (`0x15bdCb6651f5a5e9Cef07b2a981dd270BA505051`):
    - Versioning access to `aragon.aragonpm.eth` and `survey.aragonpm.eth`

---------

:floppy_disk: Deployment history
================================

August 16, 2018 23:06 UTC
---------------------------------

Emergency release of [**Aragon Core 0.5.3**](https://github.com/aragon/aragon/releases/tag/0.5.3) + [aragon/aragon#323](https://github.com/aragon/aragon/pull/323) changing default IPFS gateway from `gateway.ipfs.io` to `ipfs.infura.io`

### Git Repositories

- [`aragon`](https://github.com/aragon/aragon) ([commit: `76e173b`](https://github.com/aragon/aragon/tree/76e173be015f150a516802de61585d31ab786d4f))

### `aragonpm.eth` Repo Updates

- `aragon.aragonpm.eth`: Patch upgrade to `1.0.8` ([transaction](https://etherscan.io/tx/0x710ec590ee267ad0a03f9e0c00a7fd260fa729777f6cc55c2a569af3e5026faa))
    - Command: `apm publish 0x0000000000000000000000000000000000000000 --network mainnet --apm.ens-registry "0x314159265dd8dbb310642f98f50c066173c1259b" --no-ipfs-check --apm.ipfs.rpc "http://ipfs.aragon.network:5001" --files build --only-content --build-script build:mainnet-infura`


July 17, 2018 ~20:00 - 23:30 UTC
--------------------------------

Release of [**Aragon Core 0.5.3**](https://github.com/aragon/aragon/releases/tag/0.5.3).

Updated the **Survey app**.

### Git Repositories

- [`aragon@0.5.3`](https://github.com/aragon/aragon/releases/tag/0.5.3) ([commit: `bf6e184`](https://github.com/aragon/aragon/tree/bf6e1844bf985182ae9c184dbe18129bc06dfcbf))
- [`aragon-apps@0.5.3`](https://github.com/aragon/aragon-apps/releases/tag/0.5.3) ([commit: `ccd979f`](https://github.com/aragon/aragon-apps/tree/ccd979f463488f5f9775ef183fc1150883c6afec))
    - [Survey app](https://github.com/aragon/aragon-apps/tree/ccd979f463488f5f9775ef183fc1150883c6afec/apps/survey)

### `aragonpm.eth` Repo Updates

- `aragon.aragonpm.eth`: Patch upgrade to `1.0.7` ([transaction](https://etherscan.io/tx/0x75268a53e4b5017370f5b7a916c48eda0cb706a00076ede10ca0d671dc03c0cb))
    - Command: `apm publish 0x0000000000000000000000000000000000000000 --network mainnet --apm.ens-registry "0x314159265dd8dbb310642f98f50c066173c1259b" --no-ipfs-check --apm.ipfs.rpc "http://ipfs.aragon.network:5001" --files build --only-content --build-script build:mainnet-infura`
- `survey.aragonpm.eth`: Patch upgrade to `1.0.17` ([transaction](https://etherscan.io/tx/0x18be5223db4eca7223b9b28bd6b3bf0cbb3604ac5099b93743d036bfa06d3689))
    - Command: `apm publish 0x0000000000000000000000000000000000000000 --network mainnet --apm.ens-registry "0x314159265dd8dbb310642f98f50c066173c1259b" --no-ipfs-check --apm.ipfs.rpc "http://ipfs.aragon.network:5001" --files app/dist --only-content --no-build`
    - Redeployed four times (`1.0.14` through to `1.0.16` had missing or wrong `artifact.json` and `manifest.json` files)
        - Had to compile, build artifacts, and then manually move the files into `app/dist`

### Permissions Updates

- [`sohkai`](https://github.com/sohkai) (`0x15bdCb6651f5a5e9Cef07b2a981dd270BA505051`):
    - `aragon.aragonpm.eth`: Granted `CREATE_VERSION_ROLE` ([transaction](https://etherscan.io/tx/0xadbc8207626f1faf560fc8edef4f72008bbfb9a0a47b4d696ff166ad446718c4))
    - `survey.aragonpm.eth`: Granted `CREATE_VERSION_ROLE` ([transaction](https://etherscan.io/tx/0x757e5b40b671abbe7e361477083c656cdf7e44ccfeddafe9d59c6728cc77b9d7))


June 19, 2018 11:40 - 12:00 UTC
-------------------------------

Release of [**Aragon Core 0.5.2**](https://github.com/aragon/aragon/releases/tag/0.5.2).

Updated the **Survey app**.

### Git Repositories

- [`aragon@0.5.2`](https://github.com/aragon/aragon/releases/tag/0.5.2) ([commit: `49e380f`](https://github.com/aragon/aragon/tree/49e380f5d5440091616cca2d68f1f1ed899062ec))
- [`aragon-apps@0.5.2`](https://github.com/aragon/aragon-apps/releases/tag/0.5.2) ([commit: `d4a22a3`](https://github.com/aragon/aragon-apps/tree/d4a22a3d18a8364d5824f6e0288840810e6d6485))
    - [Survey app](https://github.com/aragon/aragon-apps/tree/d4a22a3d18a8364d5824f6e0288840810e6d6485/apps/survey)

### `aragonpm.eth` Repo Updates

- `aragon.aragonpm.eth`: Patch upgrade to `1.0.6` ([transaction](https://etherscan.io/tx/0xe77e9850f639822aeb9578b14aef97f5a779dee14ef0057cb9a7f7b290c92d1f))
    - Command: `apm publish 0x0000000000000000000000000000000000000000 --network mainnet --apm.ens-registry "0x314159265dd8dbb310642f98f50c066173c1259b" --no-ipfs-check --apm.ipfs.rpc "http://ipfs.aragon.network:5001" --files build --only-content --build-script build:mainnet-infura`
- `survey.aragonpm.eth`: Patch upgrade to `1.0.13` ([transaction](https://etherscan.io/tx/0x5ff2b3f1585acd767c36b224123ae94ffb9cf4c6dfe7c7103a3c2e098995ae33))
    - Command: `apm publish 0x0000000000000000000000000000000000000000 --network mainnet --apm.ens-registry "0x314159265dd8dbb310642f98f50c066173c1259b" --no-ipfs-check --apm.ipfs.rpc "http://ipfs.aragon.network:5001" --files app/dist --only-content --no-build`
    - Redeployed three times (`1.0.11` had the wrong content URI and `1.0.12` had the wrong app name)


May 31, 2018 ~15:00 - ~19:30 UTC
--------------------------------

Release of [**Aragon Core 0.5.1**](https://github.com/aragon/aragon/releases/tag/0.5.1) and the **Survey app**.

### Git Repositories

- [`aragon@0.5.1`](https://github.com/aragon/aragon/releases/tag/0.5.1) ([commit: `ed89be8`](https://github.com/aragon/aragon/tree/ed89be8be7405b30a443c703cfb637934bcfa2ab))
- [`aragon-apps@0.5.1`](https://github.com/aragon/aragon-apps/releases/tag/0.5.1) ([commit: `87796b9`](https://github.com/aragon/aragon-apps/tree/87796b97d08d184d5cfc2a8dff6860f8ec1f3776))
    - [Survey app](https://github.com/aragon/aragon-apps/tree/87796b97d08d184d5cfc2a8dff6860f8ec1f3776/apps/survey)

### `aragonpm.eth` Repo Updates

- `aragon.aragonpm.eth`: Patch upgrade to `1.0.5` ([transaction](https://etherscan.io/tx/0x8fc4e56835377cfd871b70aaaeea4f26958dc659e8347e1eda7578819025277d))
    - Redeployed twice (`1.0.4` had the wrong content URI)
- `survey.aragonpm.eth`: Patch upgrade to `1.0.10` ([transaction](https://etherscan.io/tx/0x7ad5264391f91906531183d89c2614127eb681c6f2ff55b6f1f9003ffa483ac5))
    - Redeployed three times (`1.0.8` and `1.0.9` had the wrong content URIs)

### Contract Deployments

The current app base contracts as of this update:

- [`Survey.sol`](https://github.com/aragon/aragon-apps/blob/676bf3d22f493d0133531ed9b0930a4cbf4aedd0/apps/survey/contracts/Survey.sol): [`0x3c7f5e7946c09c38f53d608adfd2ed5d6b137ade`](https://etherscan.io/address/0x3c7f5e7946c09c38f53d608adfd2ed5d6b137ade) (from prior deployment)


May 28, 2018 16:30 UTC
----------------------

Deployment of **Aragon's Survey DAO** for ANT, using the deployed **Survey Kit** (at `survey.aragonpm.eth@2.0.0`). Available at [`survey.aragon.org`](http://survey.aragon.org/).

### Contract Deployments

- Survey DAO: [`0xf65deded34a639a2166896a5571969f98f6bac8e`](https://etherscan.io/address/0xf65deded34a639a2166896a5571969f98f6bac8e) ([transaction](https://etherscan.io/tx/0xcff32cd339f3ea7d41f31577d57a0dd3bc4db228e3f9b7ebc4bcdba28503fb1f))
    - Survey app (proxy to `Survey.sol`): [`0xffe447378285b1637305f4f0d05639afe156791d`](https://etherscan.io/address/0xffe447378285b1637305f4f0d05639afe156791d) (same transaction)


May 28, 2018 ~14:00 - ~20:00 UTC
--------------------------------

Initial deployment of **Aragon Core 0.5.1 (beta)** with the **Survey app** (and associated **Survey kit** and other factories).

> :rotating_light: This is a non-reproducible deployment of **Aragon Core**, associated with no commit hash, as multiple local changes had to be made for `aragon-cli` to deploy it.

> :rotating_light: This is a non-reproducible deployment of the **Survey kit**, associated with no commit hash, as local changes were made to the kit to fix bugs in `aragonOS@3.1.7`.

### Git Repositories

- `aragon@unversioned` (no commit)
    - :rotating_light: Local changes were made to several files related to packaging on APM (`aragon-cli` was incapable of directly publishing this repo); based from [`9d3b719`](https://github.com/aragon/aragon/tree/9d3b7198300154e1adb05d0121d5b61c60b4a080))
- `aragon-apps@unversioned` ([commit: `676bf3d`](https://github.com/aragon/aragon-apps/tree/676bf3d22f493d0133531ed9b0930a4cbf4aedd0))
    - [Survey app](https://github.com/aragon/aragon-apps/tree/676bf3d22f493d0133531ed9b0930a4cbf4aedd0/apps/survey)
- `dao-kits@unversioned` (no commit)
    - [Survey kit](https://github.com/aragon/dao-kits/tree/2316fd7c591812bc9a72787bdd6f219b0c654c8e/kits/survey)
        - :rotating_light: Local changes were made to `SurveyKit.sol` to fix bugs with `aragonOS@3.1.7`; based from [`2316fd7`](https://github.com/aragon/dao-kits/tree/2316fd7c591812bc9a72787bdd6f219b0c654c8e)

### `aragonpm.eth` Repo Updates

Apps:

- `aragon.aragonpm.eth`: Initial `1.0.0` ([transaction](https://etherscan.io/tx/0x7e6a3d6227197b2f345df4c72a5dc97ffb69672cb6232ae56956652706312f1f)) and immediate upgrades to `1.0.3` ([transaction](https://etherscan.io/tx/0x705a89a4ddf4629861e6fa6126489cb978761ad941e48a353332c5b505352889)) for new content URIs
- `survey.aragonpm.eth`: Initial `1.0.0` ([transaction](https://etherscan.io/tx/0x2dc1085bdec2c5699248448819daf941ff9914fbc73f00888365f4f85408dad4)) and immediate upgrades to `1.0.7` ([transaction](https://etherscan.io/tx/0x622a82bf9e87c5cbaad40ad86ef26a20572b2751fb83cdf632e12eed2a7a4045)) for new content URIs

Kits:

- `survey-kit.aragonpm.eth`: Initial `1.0.0` ([transaction](https://etherscan.io/tx/0x2ba2013128227e9e686892c8ce16d2d847bf4037528c16aca9520ba506336d5e)) and immediate contract upgrade to `2.0.0` ([transaction](https://etherscan.io/tx/0xe49b063b4c0b0881ee366a807d045f387c2a691a4d8ff695c7190ec4594f2cfd)) to fix bugs with `aragonOS@3.1.7`.

### Contract Deployments

#### `aragon-apps`

Base contracts:

- [`Survey.sol`](https://github.com/aragon/aragon-apps/blob/676bf3d22f493d0133531ed9b0930a4cbf4aedd0/apps/survey/contracts/Survey.sol): [`0x3c7f5e7946c09c38f53d608adfd2ed5d6b137ade`](https://etherscan.io/address/0x3c7f5e7946c09c38f53d608adfd2ed5d6b137ade) ([transaction](https://etherscan.io/tx/0x0c9d1ad43fd5a0f843b680b6c286241fd9739230e38b179bf042f66f104ce983))

#### `dao-kits`

- [`SurveyKit.sol`](https://github.com/aragon/dao-kits/blob/2316fd7c591812bc9a72787bdd6f219b0c654c8e/kits/survey/contracts/SurveyKit.sol): [`0xb5ba20a4e9167b640311a0c10d773bb143db5e39`](https://etherscan.io/address/0xb5ba20a4e9167b640311a0c10d773bb143db5e39) ([transaction](https://etherscan.io/tx/0x41a2a2b1fb29e9544ebdb450f2335bfd3bd6439fd2d4f189b9318b86116fc8c7))
    - :rotating_light: The contract at this address contains local changes to `SurveyKit.sol` to use the non-overloaded version of `kernel.newAppInstance(bytes32, address, bool)` that correctly returns the newly deployed proxy contract's address.

May 21, 2018 13:00 - 13:35 UTC
------------------------------

Full contract deployment for the **Aragon Package Manager** at `aragonpm.eth`.

### Git Repositories

- [`aragonOS@3.1.7`](https://github.com/aragon/aragonOS/releases/tag/v3.1.7) ([commit: `851e46b`](https://github.com/aragon/aragonOS/tree/851e46bc329bec59082fb6a8178f6404ece98122))
    - :rotating_light: This version has since been found to contain a bug in `Kernel.sol` (see the [patch notes for the next version](https://github.com/aragon/aragonOS/releases/tag/v3.1.8))

### Contract Deployments

#### User-facing Contracts

- `aragonpm.eth` (proxy to [`APMRegistry.sol`](https://github.com/aragon/aragonOS/blob/851e46bc329bec59082fb6a8178f6404ece98122/contracts/apm/APMRegistry.sol)): [`0xb30d35b0ba325bde4e8acae9721716b7fd5637c4`](https://etherscan.io/address/0xb30d35b0ba325bde4e8acae9721716b7fd5637c4) ([transaction](https://etherscan.io/tx/0xd05e2dc288a2f0dd40043882e416028e16fc7d09541603a93340332c6f60abd4))

#### `aragonOS`

Base contracts:

- [`Kernel.sol`](https://github.com/aragon/aragonOS/blob/851e46bc329bec59082fb6a8178f6404ece98122/contracts/kernel/Kernel.sol): [`0xe214ca721720019a81c889a59124f168be632e94`](https://etherscan.io/address/0xe214ca721720019a81c889a59124f168be632e94) ([transaction](https://etherscan.io/tx/0x9d21dd6d6112d7f653a07bb0b9723d6e67924a3575e93c74e7c94d82abbf4aee))
- [`ACL.sol`](https://github.com/aragon/aragonOS/blob/851e46bc329bec59082fb6a8178f6404ece98122/contracts/acl/ACL.sol): [`0xb104e51f872788e0c2742e7098e2a792b9569d56`](https://etherscan.io/address/0xb104e51f872788e0c2742e7098e2a792b9569d56) ([transaction](https://etherscan.io/tx/0x2d168702b5139f969c3ca92372d7874f017d81b01f0280542697a3cd0992bffd))
- [`APMRegistry.sol`](https://github.com/aragon/aragonOS/blob/851e46bc329bec59082fb6a8178f6404ece98122/contracts/apm/APMRegistry.sol): [`0xf5174528211211a667243edc8579f2042124895c`](https://etherscan.io/address/0xf5174528211211a667243edc8579f2042124895c) ([transaction](https://etherscan.io/tx/0x64e19c92403959f15cb85550ea388d7d1b84591ead44f4ef1cfdee918573821d))
- [`Repo.sol`](https://github.com/aragon/aragonOS/blob/851e46bc329bec59082fb6a8178f6404ece98122/contracts/apm/Repo.sol): [`0xf626624a4c25b053dcce35d6ed2efcec46b19b56`](https://etherscan.io/address/0xf626624a4c25b053dcce35d6ed2efcec46b19b56) ([transaction](https://etherscan.io/tx/0xd86108ca819f406e53c2d9759f781f1dc5bf872245ded98b19badfb11a7e2d06))
- [`ENSSubdomainRegistar.sol`](https://github.com/aragon/aragonOS/blob/851e46bc329bec59082fb6a8178f6404ece98122/contracts/ens/ENSSubdomainRegistrar.sol): [`0x6702f32e9abd64961fbbf123aed450ac0da65853`](https://etherscan.io/address/0x6702f32e9abd64961fbbf123aed450ac0da65853) ([transaction](https://etherscan.io/tx/0x110f1e7bc864404f021fc8af4ca9de9bf94bd6aed955abe611e6fdba9f110d67))

Factory contracts:

- [`DAOFactory.sol`](https://github.com/aragon/aragonOS/blob/851e46bc329bec59082fb6a8178f6404ece98122/contracts/factory/DAOFactory.sol) (with no support for `EVMScript`s: [`0x7b6bddc7fa88f1340fad3b4cb0b267e0314ab76b`](https://etherscan.io/address/0x7b6bddc7fa88f1340fad3b4cb0b267e0314ab76b) ([transaction](https://etherscan.io/tx/0xfde62a529793d96880f7de565a562f9d39bbab21f2a584466aa30060862de619))
- [`APMRegistryFactory.sol`](https://github.com/aragon/aragonOS/blob/851e46bc329bec59082fb6a8178f6404ece98122/contracts/factory/APMRegistryFactory.sol): [`0x66926276f7ba5d9d17015c822e0e8ad3773f20f4`](https://etherscan.io/address/0x66926276f7ba5d9d17015c822e0e8ad3773f20f4) ([transaction](https://etherscan.io/tx/0xd0f8e45a30f2fca8008321617fd010ed6d9dd010f625de8ac1730af490d402da))
