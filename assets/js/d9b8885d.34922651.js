"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[529],{8713:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return g},toc:function(){return c},default:function(){return d}});var a=n(7462),i=n(3366),s=(n(7294),n(3905)),r=["components"],o={id:"felix-bot",title:"Felix Bot DApp demo",sidebar_position:5},l=void 0,g={unversionedId:"felix-bot",id:"felix-bot",isDocsHomePage:!1,title:"Felix Bot DApp demo",description:"Now you have learned the basic knowledge of DApps development on CKB Layer1 with lumos. It's time to develop a slightly more complex DApp demo.",source:"@site/docs/felixbot-dapp.md",sourceDirName:".",slug:"/felix-bot",permalink:"/implement-dapp-docs/felix-bot",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/felixbot-dapp.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"felix-bot",title:"Felix Bot DApp demo",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Transfer-Tx DApp demo",permalink:"/implement-dapp-docs/transfer-tx-dapp-demo"},next:{title:"Use Molecule Serialization System",permalink:"/implement-dapp-docs/molecule"}},c=[{value:"Project Structure",id:"project-structure",children:[]},{value:"Prerequisites",id:"prerequisites",children:[{value:"Set up the Development Environment",id:"set-up-the-development-environment",children:[]},{value:"Prepare three CKB accounts",id:"prepare-three-ckb-accounts",children:[]},{value:"Specify Alice as the miner",id:"specify-alice-as-the-miner",children:[]},{value:"Use CKB-CLI  to transfer some CKBytes to Bob",id:"use-ckb-cli--to-transfer-some-ckbytes-to-bob",children:[]},{value:"Set up a telegram bot",id:"set-up-a-telegram-bot",children:[]}]},{value:"Run the felix bot",id:"run-the-felix-bot",children:[{value:"Install dependencies",id:"install-dependencies",children:[]},{value:"Set up the proxy server",id:"set-up-the-proxy-server",children:[]},{value:"Set up the BOT_TOKEN",id:"set-up-the-bot_token",children:[]}]},{value:"Set up the Configuration for Lumos",id:"set-up-the-configuration-for-lumos",children:[]},{value:"Confirm the receiving address",id:"confirm-the-receiving-address",children:[]},{value:"Build the transaction skeleton",id:"build-the-transaction-skeleton",children:[]},{value:"Sign the transaction offline",id:"sign-the-transaction-offline",children:[]},{value:"Seal the transaction with the generated signature",id:"seal-the-transaction-with-the-generated-signature",children:[]},{value:"Send the finalized transaction to the CKB network",id:"send-the-finalized-transaction-to-the-ckb-network",children:[]}],I={toc:c};function d(e){var t=e.components,o=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},I,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Now you have learned the basic knowledge of DApps development on CKB Layer1 with lumos. It's time to develop a slightly more complex DApp demo.    "),(0,s.kt)("p",null,"Felix bot is a telegram bot, created upon ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/botgram/botgram"},"botgram")," and lumos. You can use felix bot to interact with CKB Layer1, send CKBytes red envelopes in a telegram chat group.In the development process,you can more intuitively understand the interaction between the client, back-end and CKB Layer1."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"felixbot",src:n(9608).Z}),(0,s.kt)("br",{parentName:"p"}),"\n","Figure 4 the architecture of felix bot"),(0,s.kt)("h2",{id:"project-structure"},"Project Structure"),(0,s.kt)("p",null,"The full code of felix bot dapp demo can be found ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/zengbing15/felix"},"here"),". Clone and open the project you will see the following files:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/zengbing15/felix.git\n$ cd felix\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"felix\n\u251c\u2500\u2500 lib\n\u2502   \u251c\u2500\u2500 data.js\n\u2502   \u251c\u2500\u2500 server.js\n\u2502   \u2514\u2500\u2500 utils.js\n\u251c\u2500\u2500 schema\n\u2502   \u251c\u2500\u2500 UnsignedTransaction.mol\n\u2502   \u251c\u2500\u2500 UnsignedTransaction.json\n\u2502   \u251c\u2500\u2500 UnsignedTransaction.js\n\u2502   \u2514\u2500\u2500 UnsignedTransaction.umd.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 .gitignore\n\u2514\u2500\u2500 README.md\n")),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("h3",{id:"set-up-the-development-environment"},"Set up the Development Environment"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"https://cryptape.github.io/lumos-doc/docs/preparation/setupsystem"},"Set Up the Development Environment"),"."),(0,s.kt)("h3",{id:"prepare-three-ckb-accounts"},"Prepare three CKB accounts"),(0,s.kt)("p",null," Create three accounts: Alice, Bob and Charlie\uff0csee ",(0,s.kt)("a",{parentName:"p",href:"rpc-and-transaction#create-ckb-accounts"},"Create CKB accounts"),". The payer is Bob and the recipient is Alice."),(0,s.kt)("h3",{id:"specify-alice-as-the-miner"},"Specify Alice as the miner"),(0,s.kt)("p",null,"see ",(0,s.kt)("a",{parentName:"p",href:"https://cryptape.github.io/lumos-doc/docs/reference/ckbaccount#step-5-get-ckb-capacity-for-the-account-of-alice"},"Step 5. Get CKB capacity for the account of Alice")),(0,s.kt)("h3",{id:"use-ckb-cli--to-transfer-some-ckbytes-to-bob"},"Use CKB-CLI  to transfer some CKBytes to Bob"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ ckb-cli --from-account <alice lock_arg> --to-address <bob address> --capacity <transfer amount> --tx-fee <0.01(defualt value)>\n")),(0,s.kt)("h3",{id:"set-up-a-telegram-bot"},"Set up a telegram bot"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create a telegram bot, see ",(0,s.kt)("a",{parentName:"li",href:"https://core.telegram.org/bots#3-how-do-i-create-a-bot"},"3. How do I create a bot?")),(0,s.kt)("li",{parentName:"ul"},"Send a list of commands to ",(0,s.kt)("inlineCode",{parentName:"li"},"BotFather"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"start - start\nhelp - help\nset_receiving_address - Set receiving address\nreceiving_address - Get receiving address\npending_envelopes - List of pending envelopes sent by me\npay - Pay an envelope\nsend - send envelopes\n")),(0,s.kt)("h2",{id:"run-the-felix-bot"},"Run the felix bot"),(0,s.kt)("h3",{id:"install-dependencies"},"Install dependencies"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install\n")),(0,s.kt)("h3",{id:"set-up-the-proxy-server"},"Set up the proxy server"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"export https_proxy=http://127.0.0.1:10080;export http_proxy=http://127.0.0.1:10080;export all_proxy=socks5://127.0.0.1:10081\n")),(0,s.kt)("h3",{id:"set-up-the-bot_token"},"Set up the BOT_TOKEN"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ export BOT_TOKEN=<BOT_TOKEN>\n")),(0,s.kt)("h2",{id:"set-up-the-configuration-for-lumos"},"Set up the Configuration for Lumos"),(0,s.kt)("p",null,"The act of sending a red packet is actually transferring CKBytes which means a transfer transaction. You can use lumos to implement the transfer transaction, see ",(0,s.kt)("a",{parentName:"p",href:"transfer-tx-dapp-demo"},"Transfer-Tx DApp demo"),"."),(0,s.kt)("p",null,"Set up the configure manager and indexer of lumos first."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="/felix/lib/server.js"',title:'"/felix/lib/server.js"'},'const { Indexer } = require("@ckb-lumos/indexer");\nconst { initializeConfig, getConfig } = require("@ckb-lumos/config-manager");\nprocess.env.LUMOS_CONFIG_FILE = process.env.LUMOS_CONFIG_FILE || \'./config.json\'\ninitializeConfig();\nconst CKB_CONFIG = getConfig();\n\nprocess.env.LUMOS_CONFIG_FILE = process.env.LUMOS_CONFIG_FILE || \'./config.json\'\ninitializeConfig();\nconst CKB_CONFIG = getConfig();\n\nconst CKB_RPC_URI = process.env.CKB_RPC_URI || "http://127.0.0.1:8114";\nconst CKB_INDEXER_DATA = process.env.CKB_INDEXER_DATA || "./indexer-data";\nconst indexer = new Indexer(CKB_RPC_URI, CKB_INDEXER_DATA);\nindexer.startForever();\n')),(0,s.kt)("p",null,"For a sender, you can "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Send a red envelope, The number of ",(0,s.kt)("inlineCode",{parentName:"li"},"remaining")," can't be exceeding the number of this chat group members.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"send envelopes",src:n(4275).Z}),(0,s.kt)("br",{parentName:"p"}),"\n","Figure 5 send a evelope"),(0,s.kt)("p",null,"For a grabber, you can"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Set your receiving address: Charlie\u2019s address"),(0,s.kt)("li",{parentName:"ul"},"Grab the red envelope")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"set address",src:n(826).Z}),(0,s.kt)("br",{parentName:"p"}),"\n","Figure 6 set the receiving address and grab the red envelope"),(0,s.kt)("h2",{id:"confirm-the-receiving-address"},"Confirm the receiving address"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},'The prefix of "ckt" is means that the address is created on CKB testnet, see ',(0,s.kt)("a",{parentName:"p",href:"rpc-and-transaction#address-and-lock-script"},"Address and Lock Script"))),(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"https://nervosnetwork.github.io/lumos/modules/helpers.html#parseaddress"},"parseAddress")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"@ckb-lumos/helpers"),"to confirm the address.",(0,s.kt)("inlineCode",{parentName:"p"},"CKB_CONFIG.PREFIX")," means that the address prefix that should be entered. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'{6} title="/felix/lib/server.js"',"{6}":!0,title:'"/felix/lib/server.js"'},'const {parseAddress} = require("@ckb-lumos/helpers");\n\n  [DATA_RECEIVING_ADDRESS]: async (session, msg, reply) => {\n    const address = msg.text || "";\n    try {\n      parseAddress(address);\n    } catch (e) {\n      console.log(`Error parsing address: ${e}`);\n      reply.text(\n        `Please use a valid CKB address that starts with ${CKB_CONFIG.PREFIX}!`\n      );\n      return DATA_RECEIVING_ADDRESS;\n    }\n    await storage.put(`address:${msg.from.id}`, address);\n    reply.text(`Setting your receiving address to ${address}!`);\n    return null;\n  },\n')),(0,s.kt)("p",null,"When the grabber grabs the red envelope,felix bot can get the grabber's ",(0,s.kt)("inlineCode",{parentName:"p"},"user.id")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="/felix/lib/data.js"',title:'"/felix/lib/data.js"'},'  async grab(receiverId, storage) {\n    if (this.remaining() <= 0) {\n      throw new Error("You are too late!");\n    }\n    if (this.receivers.find((receiver) => receiver.id === receiverId)) {\n      throw new Error("You have already grabbed one!");\n    }\n    let address;\n    try {\n      address = (await storage.get(`address:${receiverId}`)).toString();\n    } catch (e) {\n      throw new Error("Please click on me, and set your receiving address in a private chat!");\n    }\n    this.receivers.push({\n      id: receiverId,\n      address,\n    });\n  }\n')),(0,s.kt)("p",null,"For a sender , you can "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Select a envelope to pay"),(0,s.kt)("li",{parentName:"ul"},"Enter the CKBytes to pay for the red envelope"),(0,s.kt)("li",{parentName:"ul"},"Enter the address used to pay for the red envelope: Bob\u2019s address")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"pay the envelope",src:n(51).Z}),(0,s.kt)("br",{parentName:"p"}),"\n","Figure 7 pay the envelope"),(0,s.kt)("h2",{id:"build-the-transaction-skeleton"},"Build the transaction skeleton"),(0,s.kt)("p",null,"Now enough information is obtained for the transfer transaction:the accounts info of two transaction parties and transfer amount.You can build the transaction skeleton:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create a transaction skeleton"),(0,s.kt)("li",{parentName:"ul"},"Add the transaction fee"),(0,s.kt)("li",{parentName:"ul"},"Prepare the signing entries ")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="/felix/lib/server.js"',title:'"/felix/lib/server.js"'},"let txSkeleton = TransactionSkeleton({ cellProvider: indexer });\n    const fromInfos = [fromAddress]\n......\n\n      txSkeleton = await common.transfer(\n        txSkeleton,\n        fromInfos,\n        receiver.address,\n        currentAmount + BigInt(61) * SHANNONS,\n      );\n    }\n    //use `payFeeByFeeRate` to set dynamic tx fee\n    txSkeleton = await common.payFeeByFeeRate(\n      txSkeleton, \n      fromInfos, \n      FEE_RATE,\n      );\n    txSkeleton = common.prepareSigningEntries(txSkeleton);\n")),(0,s.kt)("h2",{id:"sign-the-transaction-offline"},"Sign the transaction offline"),(0,s.kt)("p",null,"For security,transaction assembling and transaction signing should be separated. Felix bot is replyed the signing message.It\u2019s recommended to use ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-cli"},"CKB-CLI")," to generate the signature by the signing message. "),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"message",src:n(4179).Z}),(0,s.kt)("br",{parentName:"p"}),"\n","Figure 8 reply the message"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="/felix/lib/server.js"',title:'"/felix/lib/server.js"'},'    const signingInfos = txSkeleton\n      .get("signingEntries")\n      .map((e) => {\n        const lock = txSkeleton.get("inputs").get(e.index).cell_output.lock;\n        const address = generateAddress(lock);\n        return `Address: ${address}\\nMessage: ${e.message}`;\n      })\n      .toArray()\n      .join("\\n");\n    reply.text(\n      `Please sign the following messages required by the transaction:\\n\\n${signingInfos}\\n\\nSignatures must be in hex string format with 0x prefix, each different signature should occupy its own line.`\n    );\n    return DATA_PAY_SIGNING;\n  },\n')),(0,s.kt)("p",null,"For a grabber, you can"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Sign the transaction")),(0,s.kt)("p",null,"Use ckb-cli to sign the transaction."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The CKB pre-built installer package includes the ckb-cli tool, see ",(0,s.kt)("a",{parentName:"li",href:"https://cryptape.github.io/lumos-doc/docs/reference/ckbnode/#step-1-download-the-ckb-pre-built-installer-package"},"Download the CKB pre-built installer package"),". "),(0,s.kt)("li",{parentName:"ul"},"generate the signature ")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ ckb-cli util sign-message --recoverable --from-account <bob lock_arg> --message <signing message>\n")),(0,s.kt)("p",null,"An example of a signature output\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"Password: \npath: m\nrecoverable: true\nsignature: 0xd75d630994f862b43c52dc5dfd22306b9fec4112e751a5daf40fef7da0db05d7506a3494b63d7546dbdd2ea93af61f939d162fe7b8fe45da3ef929493a22762600\n")),(0,s.kt)("h2",{id:"seal-the-transaction-with-the-generated-signature"},"Seal the transaction with the generated signature"),(0,s.kt)("p",null,"For a grabber, you can"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Commit the generated signature to felix bot.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="/felix/lib/server.js"',title:'"/felix/lib/server.js"'},' [DATA_PAY_SIGNING]: async (session, msg, reply) => {\n    const envelope = session[DATA_PAY];\n    const amount = session[DATA_PAY_AMOUNT];\n    const txSkeleton = session[DATA_PAY_ADDRESS];\n\n    console.log(JSON.stringify(txSkeleton,null,2));\n\n    const signatures = (msg.text || "").split("\\n");\n    let tx;\n    try {\n      tx = sealTransaction(txSkeleton, signatures);\n    } catch (e) {\n\n      console.log(`Error sealing transaction: ${e} stack: ${e.stack}`);\n      reply.text("Invalid signatures!");\n      return DATA_PAY_SIGNING;\n    }   \n')),(0,s.kt)("h2",{id:"send-the-finalized-transaction-to-the-ckb-network"},"Send the finalized transaction to the CKB network"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="/felix/lib/server.js"',title:'"/felix/lib/server.js"'},"    const txHash = await rpc.send_transaction(tx);\n\n    reply.text(`Envelope successfully paid! TX hash: ${txHash}`);\n    delete session[DATA_PAY];\n    delete session[DATA_PAY_AMOUNT];\n    delete session[DATA_PAY_ADDRESS];\n")),(0,s.kt)("p",null,"Felix bot will reply the transaction hash and ",(0,s.kt)("inlineCode",{parentName:"p"},"UnsignedTx.json")," file."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"tx_hash",src:n(8051).Z}),(0,s.kt)("br",{parentName:"p"}),"\n","Figure 8 reply tx_hash and UnsignedTx.json file."))}d.isMDXComponent=!0},9608:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDY3NCAzMDgiIHdpZHRoPSI2NzQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIzMDgiPgogICAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsKLnN0MSB7ZmlsbDojZmZmZmZmO2ZvbnQtZmFtaWx5OuW+rui9r+mbhem7kTtmb250LXNpemU6MTMuNXB0fQouc3QyIHtmb250LWZhbWlseTouQXBwbGVTeXN0ZW1VSUZvbnR9Cl1dPjwvc3R5bGU+CiAgICA8ZGVmcy8+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLDEpIj4KICAgICAgICA8cGF0aCBmaWxsPSIjYjRiNGI0IiBpZD0ic2hhcGUxIiBkPSJNMCwwTDIzMSwwTDIzMSwxNzVMMCwxNzVMMCwweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4xNSwxMzEpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KICAgICAgICA8ZyBpZD0ic2hhcGUyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMCwtMCkiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjYjRiNGI0IiBkPSJNMjMxLDM3TDIzMSwwTDAsMEwwLDM3TDIzMSwzN3oiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgogICAgICAgICAgICA8dGV4dCBjbGFzcz0ic3QxIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICAgICAgICAgICAgICAgIDx0c3BhbiB5PSIyNi41IiB4PSI5MC4xIj5DbGllbnQ8L3RzcGFuPgogICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJzaGFwZTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjE1LDE1MSkiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZkY2FjIiBkPSJNMTg5LDM3TDE4OSwwTDAsMEwwLDM3TDE4OSwzN3oiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgogICAgICAgICAgICA8dGV4dCBjbGFzcz0ic3QxIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICAgICAgICAgICAgICAgIDx0c3BhbiB5PSIyNi41IiB4PSI1Ny44Ij5Cb3RncmFtPC90c3Bhbj4KICAgICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgICA8ZyBpZD0ic2hhcGU0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNS4xNSwyNDUuNSkiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjMDg0ODhmIiBkPSJNMTg5LDM3TDE4OSwwTDAsMEwwLDM3TDE4OSwzN3oiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgogICAgICAgICAgICA8dGV4dCBjbGFzcz0ic3QxIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICAgICAgICAgICAgICAgIDx0c3BhbiB5PSIyNi41IiB4PSI2NS42Ij5MdW1vczwvdHNwYW4+CiAgICAgICAgICAgIDwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9InNoYXBlNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4xNSw5MykiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjYjRiNGI0IiBkPSJNMjMxLDM3TDIzMSwwTDAsMEwwLDM3TDIzMSwzN3oiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgogICAgICAgICAgICA8dGV4dCBjbGFzcz0ic3QxIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KICAgICAgICAgICAgICAgIDx0c3BhbiB5PSIyNi41IiB4PSI3NCI+QmFjay1lbmQ8L3RzcGFuPgogICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJzaGFwZTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1MS4xNSwxNTEpIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0iIzAwYWVlZSIgZD0iTTMyMSwzN0wzMjEsMEwwLDBMMCwzN0wzMjEsMzd6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KICAgICAgICAgICAgPHRleHQgY2xhc3M9InN0MSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgICAgICAgICAgICAgICA8dHNwYW4geT0iMjYuNSIgeD0iNzIuNCI+VGVsZWdyYW0gYm90IFNlcnZlcjwvdHNwYW4+CiAgICAgICAgICAgIDwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9InNoYXBlNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzUyLjU4LDI0NS41KSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiMwODQ4OGYiIGQ9Ik0zMTkuNiwzN0wzMTkuNiwwTDAsMEwwLDM3TDMxOS42LDM3eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPSJzdDEiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgICAgICAgICAgPHRzcGFuIHk9IjI2LjUiIHg9IjEwMy4zIj5DS0IgTmV0d29yazwvdHNwYW4+CiAgICAgICAgICAgIDwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9InNoYXBlOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMyLjE1LDE0NS41KSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiMwMGFlZWUiIGQ9Ik0wLDI0TDI0LDBMMjQsMTQuNEw5NSwxNC40TDk1LDBMMTE5LDI0TDk1LDQ4TDk1LDMzLjZMMjQsMzMuNkwyNCw0OEwwLDI0eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPSJzdDEiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgICAgICAgICAgPHRzcGFuIHk9IjMyIiBjbGFzcz0ic3QyIiB4PSIzNi41Ij5IVFRQPC90c3Bhbj4KICAgICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgICA8ZyBpZD0ic2hhcGU5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzIuMTUsMjQwKSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiMwODQ4OGYiIGQ9Ik0wLDI0TDI0LDBMMjQsMTQuNEw5NSwxNC40TDk1LDBMMTE5LDI0TDk1LDQ4TDk1LDMzLjZMMjQsMzMuNkwyNCw0OEwwLDI0eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPSJzdDEiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgICAgICAgICAgICAgPHRzcGFuIHk9IjMyIiBjbGFzcz0ic3QyIiB4PSI0Mi4yIj5SUEM8L3RzcGFuPgogICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJzaGFwZTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTYuNjUsMzcpIj4KICAgICAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAsMEwwLDUxLjYiIHN0cm9rZT0iIzMyMzIzMiIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjMzIzMjMyIiBzdHJva2Utd2lkdGg9IjEiIGQ9Ik0wLDU2TDMsNTAuOEMyLjEsNTEuMywxLjEsNTEuNiwwLDUxLjZDLTEuMSw1MS42LC0yLjEsNTEuMywtMyw1MC44TDAsNTYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjMzIzMjMyIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJzaGFwZTExIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTkuNjUsMTg4KSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wLDBMMCw1My4xIiBzdHJva2U9IiMzMjMyMzIiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iIzMyMzIzMiIgc3Ryb2tlLXdpZHRoPSIxIiBkPSJNMCw1Ny41TDMsNTIuM0MyLjEsNTIuOCwxLjEsNTMuMSwwLDUzLjFDLTEuMSw1My4xLC0yLjEsNTIuOCwtMyw1Mi4zTDAsNTcuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiMzMjMyMzIiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="},4179:function(e,t,n){t.Z=n.p+"assets/images/message-32a9578f9c5befa008004c6ea7705e2a.png"},51:function(e,t,n){t.Z=n.p+"assets/images/pay-envelope-7e136a051a95088259ad80370a9e1e3e.png"},4275:function(e,t,n){t.Z=n.p+"assets/images/send-envelope-35da8dc95edea1991851edd5a5cd1f91.png"},826:function(e,t,n){t.Z=n.p+"assets/images/set-address-9fbb325b570425ca9fad2a9d3fc78ed5.png"},8051:function(e,t,n){t.Z=n.p+"assets/images/tx_hash-136bdce909647be5f46e374031be82b4.png"}}]);