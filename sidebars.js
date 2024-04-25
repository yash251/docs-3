/**
 * Creating a sidebar enables you to:
 create an ordered group of docs
 render a sidebar for each doc of that group
 provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  // learningLab: [
  //   {
  //     type: 'autogenerated',
  //     dirName: 'learningLab',
  //   },
  // ],

  // ecosystem: [
  //   {
  //     type: 'autogenerated',
  //     dirName: 'Ecosystem',
  //   },
  // ],

  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      items: [
        'intro/overview',
        'intro/what-is-lit-protocol',
        'resources/how-it-works',
      ],
    },
    {
      type: 'category',
      label: 'Installing the Lit SDK',
      link: {
        type: 'doc',
        id: 'sdk/installation',
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Migrating from earlier versions',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'Migrating from earlier versions',
            description:
              'Learn how to migrate from earlier versions of the Lit SDK!',
            keywords: ['migrations'],
          },
          items: [
            {
              type: 'category',
              label: 'Migrating from 2.x.x to 3.x.x',
              link: {
                type: 'doc',
                id: 'sdk/migrations/3.0.0/overview',
              },
              collapsed: true,
              items: ['network/feature-matrix', 'sdk/migrations/3.0.0/changes'],
            },
            'sdk/migrations/3.2.0',
            'sdk/migrations/4.0.0',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Lit SDK Guides',
        description: 'Learn how to use the Lit SDK!',
        keywords: ['guides'],
      },
      items: [
        {
          type: 'category',
          label: 'User Wallets',
          link: {
            type: 'doc',
            id: 'sdk/wallets/intro',
          },
          collapsed: true,
          items: [
            'sdk/wallets/quick-start',
            {
              type: 'category',
              label: 'Advanced Topics',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Advanced Topics',
                description:
                  'Learn about the advanced topics for User Wallets in Lit SDK!',
                keywords: ['user wallets'],
              },
              items: [
                {
                  type: 'category',
                  label: 'Authentication',
                  link: {
                    type: 'doc',
                    id: 'sdk/authentication/overview',
                  },
                  collapsed: true,
                  items: [
                    'sdk/authentication/auth-sig',
                    {
                      type: 'category',
                      label: 'Session Signatures',
                      link: {
                        type: 'doc',
                        id: 'sdk/authentication/session-sigs/intro',
                      },
                      collapsed: true,
                      items: [
                        'sdk/authentication/session-sigs/resources-and-abilities',
                        'sdk/authentication/session-sigs/capability-objects',
                        'sdk/capacity-credits',
                        'sdk/authentication/session-sigs/get-session-sigs',
                        'sdk/authentication/session-sigs/usage',
                        'sdk/authentication/session-sigs/walletless-sigs',
                      ],
                    },
                    'sdk/authentication/security',
                  ],
                },
                {
                  type: 'category',
                  label: 'Auth Methods',
                  link: {
                    type: 'doc',
                    id: 'sdk/wallets/auth-methods',
                  },
                  collapsed: true,
                  items: [
                    {
                      type: 'category',
                      label: 'Lit Auth Methods',
                      collapsed: true,
                      items: [
                        'sdk/wallets/auth-methods/lit-auth-methods/add-remove-auth-methods',
                        'sdk/wallets/auth-methods/lit-auth-methods/social-login',
                        'sdk/wallets/auth-methods/lit-auth-methods/web-authn',
                        'sdk/wallets/auth-methods/lit-auth-methods/email-sms',
                      ],
                    },
                    'sdk/wallets/auth-methods/custom-auth',
                  ],
                },
                {
                  type: 'category',
                  label: 'Minting a PKP',
                  link: {
                    type: 'doc',
                    id: 'sdk/wallets/minting',
                  },
                  collapsed: true,
                  items: [
                    'sdk/wallets/minting-methods/mint-via-contracts',
                    'sdk/wallets/minting-methods/mint-via-social',
                    'sdk/wallets/minting-methods/mint-via-web-authn',
                    'sdk/wallets/minting-methods/mint-via-multiple-auth-methods',
                  ],
                },
                'sdk/wallets/walletconnect',
                {
                  type: 'category',
                  label: 'Claimable Keys (HD Keys)',
                  link: {
                    type: 'doc',
                    id: 'sdk/wallets/claimable-keys/intro',
                  },
                  collapsed: true,
                  items: ['sdk/wallets/claimable-keys/usage'],
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Encryption and Access Control',
          link: {
            type: 'doc',
            id: 'sdk/access-control/intro',
          },
          collapsed: true,
          items: [
            'sdk/access-control/quick-start',
            {
              type: 'category',
              label: 'Advanced Topics',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Advanced Topics',
                description:
                  'Learn about the advanced topics for Encryption/Decryption in Lit SDK!',
                keywords: ['encryption', 'decryption'],
              },
              items: [
                'sdk/access-control/encryption',
                'sdk/access-control/jwt-auth',
                {
                  type: 'category',
                  label: 'Types of Conditions',
                  collapsed: true,
                  items: [
                    'sdk/access-control/condition-types/unified-access-control-conditions',
                    'sdk/access-control/condition-types/boolean-logic',
                  ],
                },
                {
                  type: 'category',
                  label: 'EVM',
                  collapsed: true,
                  items: [
                    'sdk/access-control/evm/basic-examples',
                    'sdk/access-control/evm/custom-contract-calls',
                    'sdk/access-control/evm/poap',
                    'sdk/access-control/evm/timelock',
                    'sdk/access-control/evm/siwe',
                  ],
                },
                {
                  type: 'category',
                  label: 'Other Chains',
                  collapsed: true,
                  items: [
                    'sdk/access-control/other-chains/sol-rpc-conditions',
                    'sdk/access-control/other-chains/cosmos-conditions',
                    'sdk/access-control/other-chains/stellar-access-control',
                  ],
                },
                {
                  type: 'category',
                  label: 'Off-Chain',
                  collapsed: true,
                  items: ['sdk/access-control/lit-action-conditions'],
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Private Compute (Lit Actions)',
          link: {
            type: 'doc',
            id: 'sdk/serverless-signing/overview',
          },
          collapsed: true,
          items: [
            'sdk/serverless-signing/quick-start',
            {
              type: 'category',
              label: 'Advanced Topics',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Advanced Topics',
                description:
                  'Learn about the advanced topics for Compute (Lit Actions) in Lit SDK!',
                keywords: ['compute', 'lit actions'],
              },
              items: [
                'sdk/serverless-signing/conditional-signing',
                'sdk/serverless-signing/fetch',
                'sdk/serverless-signing/processing-validation',
                'sdk/serverless-signing/key-claiming',
                'sdk/serverless-signing/eip191',
                'sdk/serverless-signing/dependencies',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Appendix',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Appendix',
        description: 'Learn about the appendix for the Lit SDK!',
        keywords: ['appendix'],
      },
      items: [
        {
          type: 'category',
          label: 'Networks',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'Lit Networks',
            description: 'Learn about the different Lit Networks!',
            keywords: ['networks'],
          },
          items: [
            {
              type: 'category',
              label: 'Lit Networks',
              collapsed: true,
              items: ['network/networks/testnet', 'network/networks/mainnet'],
            },
            'network/feature-matrix',
            'network/rollup',
            'network/migration-guide',
          ],
        },
        {
          type: 'category',
          label: 'Useful Tools',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'Lit Tools',
            description:
              'Learn about the different tools that can help you with Lit SDK!',
            keywords: ['tools'],
          },
          items: [
            'tools/access-control',
            'tools/getlit-cli',
            'tools/event-listener',
            'tools/pkpexplorer',
            'tools/searchlit',
          ],
        },
        {
          type: 'category',
          label: 'Integrations',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'Integrations with Lit SDK',
            description: 'Learn about the different integrations with Lit SDK!',
            keywords: ['integrations'],
          },
          items: [
            {
              type: 'category',
              label: 'Smart Contract Accounts',
              link: {
                type: 'doc',
                id: 'integrations/aa/overview',
              },
              collapsed: true,
              items: [
                'integrations/aa/alchemy-account-kit',
                'integrations/aa/pimlico',
                'integrations/aa/openfort',
              ],
            },
            {
              type: 'category',
              label: 'Storage',
              collapsed: true,
              items: [
                'integrations/storage/ceramic-example',
                'integrations/storage/irys',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Concepts',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'Quick Concepts',
            description:
              'Learn about the different quick concepts that can help you with Lit SDK!',
            keywords: ['concepts'],
          },
          items: [
            'concepts/access-control-concept',
            'concepts/programmable-signing-concept',
            'concepts/pkps-as-wallet',
            'concepts/capacity-credits-concept',
          ],
        },
        'sdk/tests',
      ],
    },
    {
      type: 'category',
      label: 'Resources and Support',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'support/intro',
      },
      items: [
        'intro/usecases',
        'resources/supported-chains',
        'resources/contracts',
        'resources/glossary',
        'support/faq',
        'support/bug-bounty',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Lit SDK API Reference',
        description:
          'Get the API reference for different versions of the Lit SDK!',
        keywords: ['api-reference'],
      },
      items: [
        'api-reference/v4-sdk',
        {
          type: 'category',
          label: 'Legacy SDK Versions',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'Legacy SDK Versions',
            description:
              'Get the API reference for older versions of the Lit SDK!',
            keywords: ['api-reference'],
          },
          items: [
            'api-reference/v3-sdk',
            'api-reference/v2-sdk',
            'api-reference/v1-sdk',
          ],
        },
      ],
    },
    'additional-examples',
  ],
};

module.exports = sidebars;
