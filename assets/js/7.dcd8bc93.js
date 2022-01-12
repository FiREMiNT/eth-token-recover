(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{448:function(t,a,e){"use strict";e.r(a);var s=e(50),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"eth-token-recover"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eth-token-recover"}},[t._v("#")]),t._v(" ETH Token Recover")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.npmjs.org/package/eth-token-recover",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/npm/v/eth-token-recover.svg?style=flat-square",alt:"NPM Package"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/vittominacori/eth-token-recover/actions/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://github.com/vittominacori/eth-token-recover/workflows/CI/badge.svg?branch=master",alt:"CI"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://coveralls.io/github/vittominacori/eth-token-recover?branch=master",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://coveralls.io/repos/github/vittominacori/eth-token-recover/badge.svg?branch=master",alt:"Coverage Status"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/vittominacori/eth-token-recover/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/github/license/vittominacori/eth-token-recover.svg",alt:"MIT licensed"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("TokenRecover allows the contract owner to recover any ERC20 token sent into the contract for error.")]),t._v(" "),e("h2",{attrs:{id:"motivation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),e("p",[t._v("There are lots of tokens lost forever into Smart Contracts (see "),e("a",{attrs:{href:"https://etherscan.io/address/0xd26114cd6ee289accf82350c8d8487fedb8a0c07",target:"_blank",rel:"noopener noreferrer"}},[t._v("OMG"),e("OutboundLink")],1),t._v(" token balances).\nEach Ethereum contract is a potential token trap for ERC20 tokens. They can't be recovered so it means money losses for end users.")]),t._v(" "),e("h2",{attrs:{id:"install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" eth-token-recover\n")])])]),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("div",{staticClass:"language-solidity extra-class"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pragma")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("solidity")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),e("span",{pre:!0,attrs:{class:"token version number"}},[t._v("0.8.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eth-token-recover/contracts/TokenRecover.sol"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyContract")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" TokenRecover "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your stuff")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" Code")]),t._v(" "),e("p",[t._v("This repo contains:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/vittominacori/eth-token-recover/blob/master/contracts/TokenRecover.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("TokenRecover.sol"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("Contract has a "),e("code",[t._v("recoverERC20")]),t._v(" function that transfers a "),e("code",[t._v("tokenAmount")]),t._v(" amount of "),e("code",[t._v("tokenAddress")]),t._v(" token to the contract owner.")]),t._v(" "),e("div",{staticClass:"language-solidity extra-class"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("recoverERC20")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" tokenAddress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" tokenAmount"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" virtual onlyOwner"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Note: only owner can call the "),e("code",[t._v("recoverERC20")]),t._v(" function so be careful when use on contracts generated from other contracts.")]),t._v(" "),e("h2",{attrs:{id:"development"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[t._v("#")]),t._v(" Development")]),t._v(" "),e("h3",{attrs:{id:"install-dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-dependencies"}},[t._v("#")]),t._v(" Install dependencies")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),e("h3",{attrs:{id:"linter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linter"}},[t._v("#")]),t._v(" Linter")]),t._v(" "),e("p",[t._v("Use Solhint")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run lint:sol\n")])])]),e("p",[t._v("Use ESLint")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run lint:js\n")])])]),e("p",[t._v("Use Eslint and fix")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run lint:fix\n")])])]),e("h3",{attrs:{id:"usage-using-truffle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage-using-truffle"}},[t._v("#")]),t._v(" Usage (using Truffle)")]),t._v(" "),e("p",[t._v("Open the Truffle console")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run truffle:console\n")])])]),e("h4",{attrs:{id:"compile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compile"}},[t._v("#")]),t._v(" Compile")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run truffle:compile\n")])])]),e("h4",{attrs:{id:"test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[t._v("#")]),t._v(" Test")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run truffle:test\n")])])]),e("h3",{attrs:{id:"usage-using-hardhat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage-using-hardhat"}},[t._v("#")]),t._v(" Usage (using Hardhat)")]),t._v(" "),e("p",[t._v("Open the Hardhat console")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run hardhat:console\n")])])]),e("h4",{attrs:{id:"compile-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compile-2"}},[t._v("#")]),t._v(" Compile")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run hardhat:compile\n")])])]),e("h4",{attrs:{id:"test-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-2"}},[t._v("#")]),t._v(" Test")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run hardhat:test\n")])])]),e("h4",{attrs:{id:"code-coverage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#code-coverage"}},[t._v("#")]),t._v(" Code Coverage")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run hardhat:coverage\n")])])]),e("h2",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),e("p",[t._v("Code released under the "),e("a",{attrs:{href:"https://github.com/vittominacori/eth-token-recover/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIT License"),e("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=r.exports}}]);