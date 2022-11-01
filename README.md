<svg width="190" height="70" viewBox="0 0 190 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M56 33.04V-3.8147e-06H0V56H56V45.92H10.08V33.04H56ZM10.08 10.08H45.92V22.96H10.08V10.08ZM116 56V-3.8147e-06H60V69.04H70.08V56H116ZM70.08 10.08H105.92V45.92H70.08V10.08ZM190 56V-3.8147e-06H120V56H130.08V10.08H150V56H160V10.08H180V56H190Z" fill="#D0FF6C"/>
</svg>

# Ethereum Package Manager

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/meemproject/epm/tree/master.svg?style=svg&circle-token=bb0d522cfc34eda3129cfa2abbf758cd04590e5f)](https://dl.circleci.com/status-badge/redirect/gh/meemproject/epm/tree/master)

## [https://epm.wtf](https://epm.wtf)

# What is EPM?

EPM lets you deploy and compose smart contracts. It leans heavily into providing functionality for EIP-2535 Diamond Standard contracts.

For a more detailed intro see [Introducing Ethereum Package Manager (EPM)](https://paragraph.xyz/@ken/ethereum-package-manager).

Also, [check out the docs](https://docs.meem.wtf/meem-protocol/epm/ethereum-package-manager).

# Installation

1. Install node modules: `yarn`
2. Copy the `.env.example` file to `.env` and fill out required environment variables
3. Run it: `yarn local`
4. Navigate to [http://localhost:3001](http://localhost:3001)

# Code style

CI will fail if the code does will not lint. You can check this from the CLI with:

`yarn lint`

You can also auto-fix issues with:

`yarn lint:fix`

It's recommended you use [VSCode](https://code.visualstudio.com/) with these extensions for the best IDE support:

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

[GraphQL: Language Feature Support](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)

[Apollo GraphQL](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo)

[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

# Branches / Deployment

[`dev`](https://github.com/meemproject/epm/tree/dev) is the main development branch. This is also the branch PRs should be submitted against.

Once tested, code will be moved to [`stage`](https://github.com/meemproject/epm/tree/stage) and finally [`master`](https://github.com/meemproject/epm/tree/master).

Each branch corresponds to an environment that will be automatically updated via CI:

dev - [https://dev.epm.wtf](https://dev.epm.wtf)

stage - [https://stage.epm.wtf](https://stage.epm.wtf)

master - [https://epm.wtf](https://epm.wtf)
