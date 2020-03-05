export default [
  {
    path: '/new-skin',
    component: () => import('layouts/Intro.vue'),
    children: [
      {
        name: 'landing',
        path: '/new-skin/landing',
        component: () => import('pages/verto/Landing.vue'),
        meta: {
          authRequired: false
        }
      },
      {
        name: 'secret-words',
        path: '/new-skin/secret-words',
        component: () => import('pages/verto/SecretWords.vue'),
        meta: {
          authRequired: false
        }
      },
      {
        name: 'create-verto-password',
        path: '/new-skin/create-verto-password',
        component: () => import('pages/verto/CreateVertoPassword.vue'),
        meta: {
          authRequired: false
        }
      },
      {
        name: 'confirm-verto-password',
        path: '/new-skin/confirm-verto-password',
        component: () => import('pages/verto/ConfirmVertoPassword.vue'),
        meta: {
          authRequired: false
        }
      },
      {
        name: 'create-restore-secret-seed-phrase',
        path: '/new-skin/create-restore-secret-seed-phrase',
        component: () => import('pages/verto/CreateRestoreSecret.vue'),
        meta: {
          authRequired: false
        }
      },
      {
        name: 'recovery-seed',
        path: '/new-skin/recovery-seed',
        component: () => import('pages/verto/RecoverySeed.vue'),
        meta: {
          authRequired: false
        }
      }
    ]
  },
  {
    path: '/new-skin',
    component: () => import('layouts/IntroWithTabs.vue'),
    children: [
      {
        name: 'exchange',
        path: '/new-skin/exchange',
        component: () => import('pages/verto/Exchange.vue'),
        meta: {
          authRequired: false
        }
      },
      {
        name: 'send',
        path: '/new-skin/send',
        component: () => import('pages/verto/Send.vue'),
        meta: {
          authRequired: false
        }
      },
      {
        name: 'receive',
        path: '/new-skin/receive',
        component: () => import('pages/verto/Receive.vue'),
        meta: {
          authRequired: false
        }
      },
      {
        name: 'chain-tools',
        path: '/new-skin/chain-tools',
        component: () => import('pages/verto/ChainTools.vue'),
        meta: {
          authRequired: false
        }
      },
      {
        name: 'history',
        path: '/new-skin/history',
        component: () => import('pages/verto/History.vue'),
        meta: {
          authRequired: false
        }
      },
      {
        name: 'crux-id-step1',
        path: '/new-skin/crux-id-step1',
        component: () => import('pages/verto/CruxStep1.vue'),
        meta: {
          authRequired: false
        }
      },
      {
        name: 'crux-id-step2',
        path: '/new-skin/crux-id-step2',
        component: () => import('pages/verto/CruxStep2.vue'),
        meta: {
          authRequired: false
        }
      },
      {
        name: 'dashboard',
        path: '/new-skin/dashboard',
        component: () => import('pages/verto/Dashboard.vue'),
        meta: {
          authRequired: false
        }
      },
      {
        name: 'profile',
        path: '/new-skin/profile',
        component: () => import('pages/verto/Profile.vue'),
        meta: {
          authRequired: false
        }
      },
      {
        name: 'wallets',
        path: '/new-skin/wallets',
        component: () => import('pages/verto/Wallets.vue'),
        meta: {
          authRequired: false
        }
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/Default.vue'),
    children: [
      {
        name: 'settings',
        path: '/settings',
        component: () => import('pages/Settings/Settings.vue'),
        meta: {
          authRequired: true
        }
      },
      {
        name: 'zixipay-get-vtx',
        path: 'zixipay-get-vtx',
        component: () => import('pages/Zixipay/GetVtx.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'zixipay-iframe',
        path: 'zixipay-iframe',
        component: () => import('pages/Zixipay/IFrame.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'associate-venue',
        path: 'associate-venue',
        component: () => import('pages/Wallet/AssociateVenue.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'pending-transactions',
        path: 'pending-transactions',
        component: () => import('pages/Wallet/PendingTransactions.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'vdexnodes',
        path: '/vdexnodes',
        component: () => import('pages/vDex/Nodes.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'cruxpay',
        path: '/cruxpay',
        component: () => import('pages/CRUX/Dashboard.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'wallet',
        path: 'wallet',
        component: () => import('pages/Wallet/Wallet.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'wallets',
        path: 'wallets',
        component: () => import('pages/Wallet/Wallets.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'mnemonic',
        path: 'mnemonic',
        component: () => import('pages/Intro/Mnemonic.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'change-password',
        path: 'change-password',
        component: () => import('pages/Wallet/ChangePassword.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'vertomanager',
        path: 'vertomanager',
        component: () => import('pages/manager/VertoManager.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'hdwallets',
        path: 'hdwallets',
        component: () => import('pages/manager/HDWallets.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'associations',
        path: '/associations',
        component: () => import('pages/Intro/Associations.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'stakeproxyeos',
        path: '/stakeproxyeos',
        component: () => import('pages/Wallet/StakeProxyEos.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'stakeeos',
        path: '/stakeeos',
        component: () => import('pages/Wallet/StakeEos.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'vtxconverter',
        path: '/vtxconverter/:eosbalance',
        component: () => import('pages/Wallet/VtxConverter.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'createaccounteos',
        path: '/createaccounteos/:eosbalance',
        component: () => import('pages/Wallet/CreateAccountEos.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'eos-make-payment',
        path: 'eos-make-payment/:vtxbalance/:eosbalance',
        component: () => import('pages/Wallet/EosMakePayment.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'restore-wallet',
        path: 'restore-wallet/:returnto',
        component: () => import('pages/Wallet/RestoreWallet.vue'),
        meta: {}
      },
      {
        name: 'view-ledger-transactions',
        path: 'view-ledger-transactions',
        component: () => import('pages/Wallet/ViewLedgerTransactions.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'add-private-key',
        path: 'add-private-key',
        component: () => import('pages/manager/AddPrivateKey.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'remove-private-key',
        path: 'remove-private-key',
        component: () => import('pages/manager/RemovePrivateKey.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'delete-wallet',
        path: 'delete-wallet/:wallet',
        component: () => import('pages/manager/DeleteWallet.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      },
      {
        name: 'change-default',
        path: 'change-default/:wallet',
        component: () => import('pages/manager/ChangeDefault.vue'),
        meta: {
          authRequired: true,
          needskeyscreated: true
        }
      }
    ]
  }
]
