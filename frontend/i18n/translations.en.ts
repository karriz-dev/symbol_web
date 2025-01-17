import { i18n } from './translations.ja';
// prettier-ignore
export const en: i18n = {
  index: {
    title_message: 'Welcome to Symbol & NEM. It is easy to install and anyone, anytime, can carve blocks under the L1 chain.',
    history_title1: 'A public blockchain which is an inspired by NEM',
    history_body1: "After the original NEM blockchain launch in 2014, under the codename 'Catapult', development had started to improve performance, enhance functionality and the consensus algorithm. In 2021, the 'Symbol' was launched with the completed 'Catapult'.",
    history_body1_Button: "What is NEM?",
    functionary_section_title: "Advanced Functionality",
    functionary_title1: "Robustness and flexibility",
    functionary_subtitle1: 'Solid plugin-based architecture improve extensibility',
    functionary_body1: 'Generally speaking, when users build transaction logics, so called smart contracts, on the block chain, it is required to develop or scratch all by themselves. Transactions on the blockchain are irrevocable, so in case the deployed transaction logic had defects or vulnerability, it could result in irreparable incident, therefore developers spent a lot of time verifying and debugging before deploying it. Symbol has solid validated transaction logics with improved extensibility through its plugin-based architecture. Developers can easily combine and utilize these advanced plug-in transactional logics via public SDK and REST API.',
    functionary_title2: 'Built-in',
    functionary_subtitle2: 'Built-in advanced transaction logics by default feature',
    functionary_body2: "One of the distinctive transaction types of features is 'Aggregate Bonded transaction'. This is a transaction type that requires signatures from multiple accounts, and the transaction is not finalized until all signatures have been signed within 48 hours. Until the transaction is finalized, it remains in a partial state and cached on the blockchain. As a built-in feature, it is easily ready-to-use to implement such an advanced smart contract in existing systems.",
    functionary_title3: 'Easy/convenient',
    functionary_subtitle3: "Symbol makes issuance of own tokens (assets) and creation of namespaces easy with its no-code development blockchain platform",
    functionary_body3: "Symbol allows developers and users to easily issue their own tokens (assets) called 'mosaics' in addition to its native currency 'symbol:xym', in the Symbol chain. Mosaics can be sent and received via transactions in the same way as native currency XYM and can be used for multiple purposes on the Symbol blockchain, E.G, as a 'unique currency' or as a 'certificate'. And more, a 'namespace' function is also available, allowing mosaics and accounts to be operated with their own labels and metadata in certain areas, just like domains on the Internet.",
    secure_section_title: "Supporting Safe Transactions",
    secure_title1: 'Secure multisig signatures by default feature',
    secure_body1: "A unique feature is the multi-signature, which allows multisig accounts to have up to 25 signatories and up to 3 levels. The combination of this multi-signature with a multi-level logic approach allows for flexibility in the approval logic. It is also possible that a signatory loses the private key by any chance, access to the account can be recovered with the signatures of all the other co-signatories. This facilitates the design of security and flexible operation of the blockchain implementation according to the user's practice.",
    secure_title2: 'Provide a powerful, stable, secure, and fast solid network with a Four-Layered Architecture',
    secure_body2: "A Four-Layered Architecture from PeerNode, which maintains the network, decentralizes Symbol chain and records its status;  APINode, which processes transaction requests from wallets and generates blocks; Rest Gateway, which accepts processing requests from wallets  on APINode; and Client, which is the wallets  and SDK. The network consisting of the 'Client', which is the wallets and SDK, is modularised and deployed to ensure security and updating easily.",
    secure_title3: 'PoS+ consensus algorithm',
    secure_body3: "The consensus algorithm is a consensus logic to generate blocks by nodes in blockchain. In Symbol, PoS+ (Proof of Stake Plus) consensus algorithm is adopted as an improved version of the PoI(Proof of Importance)  used in NEM. The Symbol PoS+ mechanism has block rewards called 'Harvesting' (similar to Staking) that are distributed to nodes and wallets that contribute to the maintenance of the blockchain. The PoS+ mechanism considers not only 'amount of staking', but it also promotes the ecosystem’s health by rewarding participants based on their activity score which are counted through 'total fees used by the wallet' and 'number of times of reward in the past', using to discourage the continued concentration of wealth in certain accounts. The block generating algorithm based on the 'Importance' is rather environmentally friendly than hash rate type.",
    easy_section_title: 'Smooth integration into existing systems',
    easy_section_body: 'Symbol provides users wallet, and development tools SDK and Rest API. Users do not need to learn a new specific programming language, Javascript/Typescript, Java, Python and other existing languages can be used to request and read transactions from the blockchain via the Rest API. Default built-in features like advanced multisig and various transactions can be instantly integrated via the SDK or API.',
    easy_section_button: "Getting Started with SDKs",
    news_title: 'News Release',
    start_title: 'Start Symbol',
    start_card1: 'How to Choose a Wallet',
    start_card1_link:"/docs/2",
    start_card2: 'Things to watch out for',
    start_card2_link:"/docs",
    start_card3: 'Where to consult when you need help',
    start_card3_link:"/community",
    start_card4: 'Information for developers',
    start_card4_link:"/docs",
    end_message_title: "Let's go explorer",
    end_message_body: "Check transaction status",
    about_site_management_title: "Abount us",
    about_site_management_body: "Symbol Community Web is run by members of the community. Meet the team behind the site.",
  },
  about: {
    page_title: 'About Us',
    page_title_description: "Symbol Community WEB has a team that maintains and develops the site",
    body_markdown: `
## About the Symbol Community Web Team
We are a team born out of a community that supports the growth of Symbol/NEM. The team is open to everyone. The site is open to the public as an open source resource and anyone can contribute. We realize the following goals in developing and maintaining Symbol Community Web.

## Goals
We have the following goals
- New users can safely experience the blockchain,
- Help new users get started with Symbol/NEM,
- Bring up-to-date information about Symbol/NEM,
- Connect new users with those already active,
- Showcase resources created by the community,
- Create an opportunity to face social issues with blockchain,

## Principles and Philosophy
### Symbol Community Web provides a gateway to Symbol/NEM
Symbol Community Web provides an opportunity for newcomers to learn what Symbol/NEM is all about. It helps new users onboard by providing them with information that is relevant to them. We will integrate and make it easy to find information about people and tools working everywhere. This site is not just for existing Symbol/NEM users.

We will grow with people, receiving feedback daily so that we can deliver relevant information to new users around the world.

### 2. growing with people
Symbol/NEM and the ecosystem that uses it are constantly growing and changing. In order to keep up with change, Symbol Web is open source and open to suggestions and requests for modifications. In addition, the majority of the site's content is separated from the source code so that it can flexibly adapt to changes. This mechanism allows non-technical people to contribute to the modification of the site and the creation of articles.

If you would like to help us by suggesting changes or contributing to the site, please contact us via [Discord](https://discord.gg/JTxYPVTf) or, if you have an account [Portal](https://cms.symbol-community.com/admin/auth/login).

## Contributions
If you would like to contribute an article to Symbol Web, please visit our Discord. If you are writing an article in advance, please follow the style guide below. 1.

1. submit a title, a summary of 30 words or less, and a header image. 
2. File format: .md (markdown). 
3. the following formatting is acceptable
4. h1-6, bold, italic, underline, strikethrough, bullet/numberlist, code, image, link, quote. 
5. Image files must be stored on this server. 
6. Continuing authors may pay out their accounts and change them directly. 
7. please be careful about copyright when you use free images.

How to login to ## Portal
To edit or add articles on Symbol Community Web, you need to login to the Portal, where your account is authenticated by your Symbol Blockchain account instead of the traditional ID and PW. To access the Portal, you will need the following: 1.

1. an active Symbol address
2. an [SSS Extention](https://chrome.google.com/webstore/detail/sss-extension/llildiojemakefgnhhkmiiffonembcan?hl=ja)

In addition, to allow your Symbol address to access the Portal, you will need to add privileges from an existing Contributor. Please contact [Discord](https://discord.gg/JTxYPVTf) if you would like to add privileges.
If you would like to edit any other pages other than articles, please feel free to send us a pull request via [GitHub](https://github.com/ymuichiro/symbol_web).
`
  },
  news: {
    page_title: 'News Release',
    page_title_description: "Topics from Symbol/NEM will be posted",
    no_articles: 'No article was found',
  },
  community: {
    page_title: 'Community',
    section_title_release: 'News from the Community',
    page_title_description: "Follow the sites and accounts that are disseminating information about Symbol and NEM!",
    no_articles: 'No article was found',
    community_introduce_section1: "Chat",
    community_introduce_section2: "Twitter",
    community_introduce_section3: "Blog & Forum",
    section1_title1: "NEM & Symbol",
    section1_body1: "A place for NEM/Symbol contributors to discuss and make announcements on a daily basis",
    section1_url1: "https://discord.gg/EEdJKBMVVb",
    section1_title2: "nem Japan User Group",
    section1_body2: "Symbol/NEM developers in Japan get together and ask questions when you get stuck in the development around Symbol/NEM.",
    section1_url2: "https://discord.gg/wa4BsYQz",
    section1_title3: "Symbol Times",
    section1_body3: "This is a chat room for people running Symbol/NEM topics and news in Japan and overseas.",
    section1_url3: "https://discord.gg/PjGPuz2Z",
    section1_title4: "Symbol/NEM Marketing",
    section1_body4: "This is a chat room for people who want to discuss and take action on concrete ways to use Symbol/NEM and introduce it to society.",
    section1_url4: "https://discord.gg/JTxYPVTf",
    section1_title5: "Tanuson Slack https://tanuson.slack.com",
    section1_body5: "We have a group of craftsmen who know how to build a node, maintain it, and other infrastructure upkeep. If you want to set up a node, join us.",
    section1_url5: "https://tanuson.slack.com/",
    section2_title1: "The Symbol Syndicate",
    section2_body1: "Symbol contributors will make official announcements, etc.",
    section2_url1: "https://twitter.com/SymbolSyndicate",
    section2_title2: "Lingua Franca",
    section2_body2: "Information around Symbol/NEM related funding will be disseminated.",
    section2_url2: "https://twitter.com/aBermudaCompany",
    section2_title3: "Fushichou Foundation",
    section2_body3: "Symbol/NEM ecosystem growth activities",
    section2_url3: "https://twitter.com/TheFushichou",
    section2_title4: "NEM",
    section2_body4: "Official NEM account.",
    section2_url4: "https://twitter.com/nemofficial",
    section2_title5: "Symbol & NEM Community Info",
    section2_body5: "Information from the Symbol/NEM community in Japan",
    section2_url5: "https://twitter.com/symnem_com_info",
    section3_title1: "Symbol Blog",
    section3_body1: "Symbol related news and topics",
    section3_url1: "https://symbolblog.com/",
    section3_title2: "Symbol Times",
    section3_body2: "Symbol related news and topics",
    section3_url2: "https://symboltimes.com/",
    section3_title3: "nemedia",
    section3_body3: "Japanese users are sending out information about NEM and Symbol.",
    section3_url3: "https://nemedia.jp/official/",
    section3_title4: "Symbol Japan Forum（archive）",
    section3_body4: "This is the former home of the Symbol/NEM Marketing Department. Currently used as a place to archive information",
    section3_url4: "https://github.com/ymuichiro/symbol_japan_forum",
    section3_title5: "NEMLOG",
    section3_body5: "This is a BLOG service with Symbol/NEM throwing function. Anyone can contribute.",
    section3_url5: "https://nemlog.nem.social/",
    section3_title6: "Everyday Symbol（List of stores that accept payment）",
    section3_body6: "A list of stores that support payment by Symbol is compiled here.",
    section3_url6: "https://everyday-symbol.studio.site/",
  },
  docs: {
    page_title: 'document',
    page_title_description: "Learn about Symbol/NEM",
    section_title_wellcom: 'For first time visitor',
    section_title_wellcom_body: "If you are new to blockchain, please be sure to check it out.",
    advice_title1: 'Do not share your mnemonic and private key with anyone.',
    advice_body1: "Never give the private key or mnemonic of the wallet containing your assets to a third party, even if they ask. This is a form of transferring all access to your assets to the other party, and you risk theft.",
    advice_button1_1: "Learn about mnemonic",
    advice_button1_1_link: "https://docs.symbol.dev/concepts/cryptography.html#hd-wallets-and-mnemonics",
    advice_button1_2: "Learn about private key",
    advice_button1_2_link: "https://docs.symbol.dev/concepts/account.html#private-key",
    advice_title2: "Always keep backups of mnemonics and private keys",
    advice_body2: "If lost, they cannot be reissued under any circumstances. Please be sure to keep a backup copy of your tokens, as you will lose access to your tokens permanently.",
    advice_button2_1: "How to Obtain Backup",
    advice_button2_1_link:"https://docs.symbol.dev/guides/account/creating-an-account.html#method-01-using-the-desktop-wallet",
    advice_title3: "Always 'sign' the transaction before you do it.",
    advice_body3:"In a blockchain, a transaction is signed when it is approved. By signing, the transaction is approved and executed. Because transactions can be sent by you or by the other party, there have been cases where a malicious third party has sent a transaction to steal your assets. Always check to make sure that the transaction is not dangerous before signing it!",
    advice_button3_1: "Learn about past cases",
    advice_button3_1_link:"https://docs.symbol.dev/guides/account/scams-and-security.html",
    advice_title4: "For developers of blockchain-related applications",
    advice_body4:"This site is dedicated to those who are just getting started with Symbol/NEM and blockchain and to disseminate various news. If you are a developer or creator and are looking for information on how to get involved, please click on the link below to access the site in more detail. Or post your questions in the community chat room.",
    advice_button4_1: "Symbol Documentation",
    advice_button4_1_link:"https://docs.symbol.dev/concepts/overview.html",
    advice_button4_2: "Getting Started with SDKs",
    advice_button4_2_link:"https://github.com/xembook/quick_learning_symbol",
    advice_title5: "About this Site",
    advice_body5:"This site is maintained by volunteers from the community. Modification of content and addition of articles requires modification through GitHub or the portal site. The portal requires a signature from a Symbol address for login. For more information, please contact the 'Symbol/NEM Marketing Department'.",
    advice_button5_1: "Symbol/NEM Marketing Department",
    advice_button5_1_link:"https://discord.gg/JTxYPVTf",
    advice_button5_2: "Symbol WEB GitHub",
    advice_button5_2_link:"https://github.com/ymuichiro/symbol_web",
    advice_button5_3: "Symbol WEB Portal",
    advice_button5_3_link:"https://cms.symbol-community.com/",
    section_search_article: 'Search Articles',
    search_bar_placeholder: 'Please enter what you want to search for',
    no_articles: 'No article was found',
  },
};
