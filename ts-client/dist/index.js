// src/dlmm/index.ts
import {
  PublicKey as PublicKey6,
  Transaction,
  SYSVAR_RENT_PUBKEY,
  SystemProgram as SystemProgram2,
  SYSVAR_CLOCK_PUBKEY
} from "@solana/web3.js";

// src/dlmm/idl.ts
var IDL = {
  "version": "0.7.0",
  "name": "lb_clmm",
  "constants": [
    {
      "name": "BASIS_POINT_MAX",
      "type": "i32",
      "value": "10000"
    },
    {
      "name": "MAX_BIN_PER_ARRAY",
      "type": {
        "defined": "usize"
      },
      "value": "70"
    },
    {
      "name": "MAX_BIN_PER_POSITION",
      "type": {
        "defined": "usize"
      },
      "value": "70"
    },
    {
      "name": "MIN_BIN_ID",
      "type": "i32",
      "value": "- 443636"
    },
    {
      "name": "MAX_BIN_ID",
      "type": "i32",
      "value": "443636"
    },
    {
      "name": "MAX_FEE_RATE",
      "type": "u64",
      "value": "100_000_000"
    },
    {
      "name": "FEE_PRECISION",
      "type": "u64",
      "value": "1_000_000_000"
    },
    {
      "name": "MAX_PROTOCOL_SHARE",
      "type": "u16",
      "value": "2_500"
    },
    {
      "name": "HOST_FEE_BPS",
      "type": "u16",
      "value": "2_000"
    },
    {
      "name": "NUM_REWARDS",
      "type": {
        "defined": "usize"
      },
      "value": "2"
    },
    {
      "name": "MIN_REWARD_DURATION",
      "type": "u64",
      "value": "1"
    },
    {
      "name": "MAX_REWARD_DURATION",
      "type": "u64",
      "value": "31536000"
    },
    {
      "name": "EXTENSION_BINARRAY_BITMAP_SIZE",
      "type": {
        "defined": "usize"
      },
      "value": "12"
    },
    {
      "name": "BIN_ARRAY_BITMAP_SIZE",
      "type": "i32",
      "value": "512"
    },
    {
      "name": "MAX_REWARD_BIN_SPLIT",
      "type": {
        "defined": "usize"
      },
      "value": "15"
    },
    {
      "name": "BIN_ARRAY",
      "type": "bytes",
      "value": "[98, 105, 110, 95, 97, 114, 114, 97, 121]"
    },
    {
      "name": "ORACLE",
      "type": "bytes",
      "value": "[111, 114, 97, 99, 108, 101]"
    },
    {
      "name": "BIN_ARRAY_BITMAP_SEED",
      "type": "bytes",
      "value": "[98, 105, 116, 109, 97, 112]"
    },
    {
      "name": "PRESET_PARAMETER",
      "type": "bytes",
      "value": "[112, 114, 101, 115, 101, 116, 95, 112, 97, 114, 97, 109, 101, 116, 101, 114]"
    },
    {
      "name": "POSITION",
      "type": "bytes",
      "value": "[112, 111, 115, 105, 116, 105, 111, 110]"
    }
  ],
  "instructions": [
    {
      "name": "initializeLbPair",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayBitmapExtension",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "tokenMintX",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMintY",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveX",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveY",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "presetParameter",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "funder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "activeId",
          "type": "i32"
        },
        {
          "name": "binStep",
          "type": "u16"
        }
      ]
    },
    {
      "name": "initializePermissionLbPair",
      "accounts": [
        {
          "name": "base",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayBitmapExtension",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "tokenMintX",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMintY",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reserveX",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveY",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "ixData",
          "type": {
            "defined": "InitPermissionPairIx"
          }
        }
      ]
    },
    {
      "name": "initializeBinArrayBitmapExtension",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "binArrayBitmapExtension",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Initialize an account to store if a bin array is initialized."
          ]
        },
        {
          "name": "funder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initializeBinArray",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "binArray",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "funder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "i64"
        }
      ]
    },
    {
      "name": "addLiquidity",
      "accounts": [
        {
          "name": "position",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayBitmapExtension",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "userTokenX",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenY",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveX",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveY",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenXMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenYMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "binArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sender",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenXProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenYProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityParameter",
          "type": {
            "defined": "LiquidityParameter"
          }
        }
      ]
    },
    {
      "name": "addLiquidityByWeight",
      "accounts": [
        {
          "name": "position",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayBitmapExtension",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "userTokenX",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenY",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveX",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveY",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenXMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenYMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "binArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sender",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenXProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenYProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityParameter",
          "type": {
            "defined": "LiquidityParameterByWeight"
          }
        }
      ]
    },
    {
      "name": "addLiquidityByStrategy",
      "accounts": [
        {
          "name": "position",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayBitmapExtension",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "userTokenX",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenY",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveX",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveY",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenXMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenYMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "binArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sender",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenXProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenYProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityParameter",
          "type": {
            "defined": "LiquidityParameterByStrategy"
          }
        }
      ]
    },
    {
      "name": "addLiquidityByStrategyOneSide",
      "accounts": [
        {
          "name": "position",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayBitmapExtension",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "userToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "binArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sender",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityParameter",
          "type": {
            "defined": "LiquidityParameterByStrategyOneSide"
          }
        }
      ]
    },
    {
      "name": "addLiquidityOneSide",
      "accounts": [
        {
          "name": "position",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayBitmapExtension",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "userToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "binArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sender",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityParameter",
          "type": {
            "defined": "LiquidityOneSideParameter"
          }
        }
      ]
    },
    {
      "name": "removeLiquidity",
      "accounts": [
        {
          "name": "position",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayBitmapExtension",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "userTokenX",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenY",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveX",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveY",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenXMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenYMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "binArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sender",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenXProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenYProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "binLiquidityRemoval",
          "type": {
            "vec": {
              "defined": "BinLiquidityReduction"
            }
          }
        }
      ]
    },
    {
      "name": "initializePosition",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "position",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "lbPair",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lowerBinId",
          "type": "i32"
        },
        {
          "name": "width",
          "type": "i32"
        }
      ]
    },
    {
      "name": "initializePositionPda",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "base",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "position",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lbPair",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "owner"
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lowerBinId",
          "type": "i32"
        },
        {
          "name": "width",
          "type": "i32"
        }
      ]
    },
    {
      "name": "initializePositionByOperator",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "base",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "position",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lbPair",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "operator",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "operator"
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lowerBinId",
          "type": "i32"
        },
        {
          "name": "width",
          "type": "i32"
        },
        {
          "name": "owner",
          "type": "publicKey"
        },
        {
          "name": "feeOwner",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "updatePositionOperator",
      "accounts": [
        {
          "name": "position",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "operator",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "swap",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayBitmapExtension",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "reserveX",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveY",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenIn",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenOut",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenXMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenYMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "oracle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "hostFeeIn",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenXProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenYProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "minAmountOut",
          "type": "u64"
        }
      ]
    },
    {
      "name": "swapExactOut",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayBitmapExtension",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "reserveX",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveY",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenIn",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenOut",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenXMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenYMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "oracle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "hostFeeIn",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenXProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenYProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "maxInAmount",
          "type": "u64"
        },
        {
          "name": "outAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "swapWithPriceImpact",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayBitmapExtension",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "reserveX",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveY",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenIn",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenOut",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenXMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenYMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "oracle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "hostFeeIn",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenXProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenYProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "activeId",
          "type": {
            "option": "i32"
          }
        },
        {
          "name": "maxPriceImpactBps",
          "type": "u16"
        }
      ]
    },
    {
      "name": "withdrawProtocolFee",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveX",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveY",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenXMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenYMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "receiverTokenX",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiverTokenY",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenXProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenYProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amountX",
          "type": "u64"
        },
        {
          "name": "amountY",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeReward",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "rewardIndex",
          "type": "u64"
        },
        {
          "name": "rewardDuration",
          "type": "u64"
        },
        {
          "name": "funder",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "fundReward",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "funderTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "funder",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "binArray",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "rewardIndex",
          "type": "u64"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "carryForward",
          "type": "bool"
        }
      ]
    },
    {
      "name": "updateRewardFunder",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "rewardIndex",
          "type": "u64"
        },
        {
          "name": "newFunder",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "updateRewardDuration",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "binArray",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "rewardIndex",
          "type": "u64"
        },
        {
          "name": "newDuration",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimReward",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "position",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sender",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "rewardVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "rewardIndex",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimFee",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "position",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sender",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "reserveX",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveY",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenX",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenY",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenXMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenYMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closePosition",
      "accounts": [
        {
          "name": "position",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sender",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "rentReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateFeeParameters",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "feeParameter",
          "type": {
            "defined": "FeeParameter"
          }
        }
      ]
    },
    {
      "name": "increaseOracleLength",
      "accounts": [
        {
          "name": "oracle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "funder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lengthToAdd",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializePresetParameter",
      "accounts": [
        {
          "name": "presetParameter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "ix",
          "type": {
            "defined": "InitPresetParametersIx"
          }
        }
      ]
    },
    {
      "name": "closePresetParameter",
      "accounts": [
        {
          "name": "presetParameter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rentReceiver",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "removeAllLiquidity",
      "accounts": [
        {
          "name": "position",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayBitmapExtension",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "userTokenX",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenY",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveX",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveY",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenXMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenYMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "binArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sender",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenXProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenYProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "togglePairStatus",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "updateWhitelistedWallet",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "wallet",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "migratePosition",
      "accounts": [
        {
          "name": "positionV2",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "positionV1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lbPair",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "binArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rentReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "migrateBinArray",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateFeesAndRewards",
      "accounts": [
        {
          "name": "position",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "withdrawIneligibleReward",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "funderTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "funder",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "binArray",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "rewardIndex",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setActivationSlot",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "activationSlot",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setLockReleaseSlot",
      "accounts": [
        {
          "name": "position",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lbPair",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sender",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newLockReleaseSlot",
          "type": "u64"
        }
      ]
    },
    {
      "name": "removeLiquidityByRange",
      "accounts": [
        {
          "name": "position",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayBitmapExtension",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "userTokenX",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenY",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveX",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserveY",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenXMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenYMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "binArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sender",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenXProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenYProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "fromBinId",
          "type": "i32"
        },
        {
          "name": "toBinId",
          "type": "i32"
        },
        {
          "name": "bpsToRemove",
          "type": "u16"
        }
      ]
    },
    {
      "name": "addLiquidityOneSidePrecise",
      "accounts": [
        {
          "name": "position",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayBitmapExtension",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "userToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reserve",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "binArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sender",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "parameter",
          "type": {
            "defined": "AddLiquiditySingleSidePreciseParameter"
          }
        }
      ]
    },
    {
      "name": "goToABin",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "binArrayBitmapExtension",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "fromBinArray",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "toBinArray",
          "isMut": false,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "eventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "binId",
          "type": "i32"
        }
      ]
    },
    {
      "name": "setPreActivationSlotDuration",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "preActivationSlotDuration",
          "type": "u16"
        }
      ]
    },
    {
      "name": "setPreActivationSwapAddress",
      "accounts": [
        {
          "name": "lbPair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "preActivationSwapAddress",
          "type": "publicKey"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "binArrayBitmapExtension",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lbPair",
            "type": "publicKey"
          },
          {
            "name": "positiveBinArrayBitmap",
            "docs": [
              "Packed initialized bin array state for start_bin_index is positive"
            ],
            "type": {
              "array": [
                {
                  "array": [
                    "u64",
                    8
                  ]
                },
                12
              ]
            }
          },
          {
            "name": "negativeBinArrayBitmap",
            "docs": [
              "Packed initialized bin array state for start_bin_index is negative"
            ],
            "type": {
              "array": [
                {
                  "array": [
                    "u64",
                    8
                  ]
                },
                12
              ]
            }
          }
        ]
      }
    },
    {
      "name": "binArray",
      "docs": [
        "An account to contain a range of bin. For example: Bin 100 <-> 200.",
        "For example:",
        "BinArray index: 0 contains bin 0 <-> 599",
        "index: 2 contains bin 600 <-> 1199, ..."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "i64"
          },
          {
            "name": "version",
            "docs": [
              "Version of binArray"
            ],
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "lbPair",
            "type": "publicKey"
          },
          {
            "name": "bins",
            "type": {
              "array": [
                {
                  "defined": "Bin"
                },
                70
              ]
            }
          }
        ]
      }
    },
    {
      "name": "lbPair",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "parameters",
            "type": {
              "defined": "StaticParameters"
            }
          },
          {
            "name": "vParameters",
            "type": {
              "defined": "VariableParameters"
            }
          },
          {
            "name": "bumpSeed",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          },
          {
            "name": "binStepSeed",
            "docs": [
              "Bin step signer seed"
            ],
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "pairType",
            "docs": [
              "Type of the pair"
            ],
            "type": "u8"
          },
          {
            "name": "activeId",
            "docs": [
              "Active bin id"
            ],
            "type": "i32"
          },
          {
            "name": "binStep",
            "docs": [
              "Bin step. Represent the price increment / decrement."
            ],
            "type": "u16"
          },
          {
            "name": "status",
            "docs": [
              "Status of the pair. Check PairStatus enum."
            ],
            "type": "u8"
          },
          {
            "name": "requireBaseFactorSeed",
            "type": "u8"
          },
          {
            "name": "baseFactorSeed",
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "tokenXMint",
            "docs": [
              "Token X mint"
            ],
            "type": "publicKey"
          },
          {
            "name": "tokenYMint",
            "docs": [
              "Token Y mint"
            ],
            "type": "publicKey"
          },
          {
            "name": "reserveX",
            "docs": [
              "LB token X vault"
            ],
            "type": "publicKey"
          },
          {
            "name": "reserveY",
            "docs": [
              "LB token Y vault"
            ],
            "type": "publicKey"
          },
          {
            "name": "protocolFee",
            "docs": [
              "Uncollected protocol fee"
            ],
            "type": {
              "defined": "ProtocolFee"
            }
          },
          {
            "name": "feeOwner",
            "docs": [
              "Fee owner. Deprecated. Can be used as buffer in the future."
            ],
            "type": "publicKey"
          },
          {
            "name": "rewardInfos",
            "docs": [
              "Farming reward information"
            ],
            "type": {
              "array": [
                {
                  "defined": "RewardInfo"
                },
                2
              ]
            }
          },
          {
            "name": "oracle",
            "docs": [
              "Oracle pubkey"
            ],
            "type": "publicKey"
          },
          {
            "name": "binArrayBitmap",
            "docs": [
              "Packed initialized bin array state"
            ],
            "type": {
              "array": [
                "u64",
                16
              ]
            }
          },
          {
            "name": "lastUpdatedAt",
            "docs": [
              "Last time the pool fee parameter was updated"
            ],
            "type": "i64"
          },
          {
            "name": "whitelistedWallet",
            "docs": [
              "Whitelisted wallet"
            ],
            "type": "publicKey"
          },
          {
            "name": "preActivationSwapAddress",
            "docs": [
              "Address allowed to swap when the current slot is greater than or equal to the pre-activation slot. The pre-activation slot is calculated as `activation_slot - pre_activation_slot_duration`."
            ],
            "type": "publicKey"
          },
          {
            "name": "baseKey",
            "docs": [
              "Base keypair. Only required for permission pair"
            ],
            "type": "publicKey"
          },
          {
            "name": "activationSlot",
            "docs": [
              "Slot to enable the pair. Only applicable for permission pair."
            ],
            "type": "u64"
          },
          {
            "name": "preActivationSlotDuration",
            "docs": [
              "Number of slot before activation slot. Used to calculate pre-activation slot for pre_activation_swap_address"
            ],
            "type": "u64"
          },
          {
            "name": "padding2",
            "docs": [
              "_padding2 is reclaimed free space from swap_cap_deactivate_slot and swap_cap_amount before, BE CAREFUL FOR TOMBSTONE WHEN REUSE !!"
            ],
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "lockDurationsInSlot",
            "docs": [
              "Liquidity lock duration for positions which created before activate. Only applicable for permission pair."
            ],
            "type": "u64"
          },
          {
            "name": "creator",
            "docs": [
              "Pool creator"
            ],
            "type": "publicKey"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved space for future use"
            ],
            "type": {
              "array": [
                "u8",
                24
              ]
            }
          }
        ]
      }
    },
    {
      "name": "oracle",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "idx",
            "docs": [
              "Index of latest observation slot"
            ],
            "type": "u64"
          },
          {
            "name": "activeSize",
            "docs": [
              "Size of active sample. Active sample is initialized observation."
            ],
            "type": "u64"
          },
          {
            "name": "length",
            "docs": [
              "Number of observations"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "position",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lbPair",
            "docs": [
              "The LB pair of this position"
            ],
            "type": "publicKey"
          },
          {
            "name": "owner",
            "docs": [
              "Owner of the position. Client rely on this to to fetch their positions."
            ],
            "type": "publicKey"
          },
          {
            "name": "liquidityShares",
            "docs": [
              "Liquidity shares of this position in bins (lower_bin_id <-> upper_bin_id). This is the same as LP concept."
            ],
            "type": {
              "array": [
                "u64",
                70
              ]
            }
          },
          {
            "name": "rewardInfos",
            "docs": [
              "Farming reward information"
            ],
            "type": {
              "array": [
                {
                  "defined": "UserRewardInfo"
                },
                70
              ]
            }
          },
          {
            "name": "feeInfos",
            "docs": [
              "Swap fee to claim information"
            ],
            "type": {
              "array": [
                {
                  "defined": "FeeInfo"
                },
                70
              ]
            }
          },
          {
            "name": "lowerBinId",
            "docs": [
              "Lower bin ID"
            ],
            "type": "i32"
          },
          {
            "name": "upperBinId",
            "docs": [
              "Upper bin ID"
            ],
            "type": "i32"
          },
          {
            "name": "lastUpdatedAt",
            "docs": [
              "Last updated timestamp"
            ],
            "type": "i64"
          },
          {
            "name": "totalClaimedFeeXAmount",
            "docs": [
              "Total claimed token fee X"
            ],
            "type": "u64"
          },
          {
            "name": "totalClaimedFeeYAmount",
            "docs": [
              "Total claimed token fee Y"
            ],
            "type": "u64"
          },
          {
            "name": "totalClaimedRewards",
            "docs": [
              "Total claimed rewards"
            ],
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved space for future use"
            ],
            "type": {
              "array": [
                "u8",
                160
              ]
            }
          }
        ]
      }
    },
    {
      "name": "positionV2",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lbPair",
            "docs": [
              "The LB pair of this position"
            ],
            "type": "publicKey"
          },
          {
            "name": "owner",
            "docs": [
              "Owner of the position. Client rely on this to to fetch their positions."
            ],
            "type": "publicKey"
          },
          {
            "name": "liquidityShares",
            "docs": [
              "Liquidity shares of this position in bins (lower_bin_id <-> upper_bin_id). This is the same as LP concept."
            ],
            "type": {
              "array": [
                "u128",
                70
              ]
            }
          },
          {
            "name": "rewardInfos",
            "docs": [
              "Farming reward information"
            ],
            "type": {
              "array": [
                {
                  "defined": "UserRewardInfo"
                },
                70
              ]
            }
          },
          {
            "name": "feeInfos",
            "docs": [
              "Swap fee to claim information"
            ],
            "type": {
              "array": [
                {
                  "defined": "FeeInfo"
                },
                70
              ]
            }
          },
          {
            "name": "lowerBinId",
            "docs": [
              "Lower bin ID"
            ],
            "type": "i32"
          },
          {
            "name": "upperBinId",
            "docs": [
              "Upper bin ID"
            ],
            "type": "i32"
          },
          {
            "name": "lastUpdatedAt",
            "docs": [
              "Last updated timestamp"
            ],
            "type": "i64"
          },
          {
            "name": "totalClaimedFeeXAmount",
            "docs": [
              "Total claimed token fee X"
            ],
            "type": "u64"
          },
          {
            "name": "totalClaimedFeeYAmount",
            "docs": [
              "Total claimed token fee Y"
            ],
            "type": "u64"
          },
          {
            "name": "totalClaimedRewards",
            "docs": [
              "Total claimed rewards"
            ],
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          },
          {
            "name": "operator",
            "docs": [
              "Operator of position"
            ],
            "type": "publicKey"
          },
          {
            "name": "lockReleaseSlot",
            "docs": [
              "Slot which the locked liquidity can be withdraw"
            ],
            "type": "u64"
          },
          {
            "name": "subjectedToBootstrapLiquidityLocking",
            "docs": [
              "Is the position subjected to liquidity locking for the launch pool."
            ],
            "type": "u8"
          },
          {
            "name": "feeOwner",
            "docs": [
              "Address is able to claim fee in this position, only valid for bootstrap_liquidity_position"
            ],
            "type": "publicKey"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved space for future use"
            ],
            "type": {
              "array": [
                "u8",
                87
              ]
            }
          }
        ]
      }
    },
    {
      "name": "presetParameter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "binStep",
            "docs": [
              "Bin step. Represent the price increment / decrement."
            ],
            "type": "u16"
          },
          {
            "name": "baseFactor",
            "docs": [
              "Used for base fee calculation. base_fee_rate = base_factor * bin_step"
            ],
            "type": "u16"
          },
          {
            "name": "filterPeriod",
            "docs": [
              "Filter period determine high frequency trading time window."
            ],
            "type": "u16"
          },
          {
            "name": "decayPeriod",
            "docs": [
              "Decay period determine when the volatile fee start decay / decrease."
            ],
            "type": "u16"
          },
          {
            "name": "reductionFactor",
            "docs": [
              "Reduction factor controls the volatile fee rate decrement rate."
            ],
            "type": "u16"
          },
          {
            "name": "variableFeeControl",
            "docs": [
              "Used to scale the variable fee component depending on the dynamic of the market"
            ],
            "type": "u32"
          },
          {
            "name": "maxVolatilityAccumulator",
            "docs": [
              "Maximum number of bin crossed can be accumulated. Used to cap volatile fee rate."
            ],
            "type": "u32"
          },
          {
            "name": "minBinId",
            "docs": [
              "Min bin id supported by the pool based on the configured bin step."
            ],
            "type": "i32"
          },
          {
            "name": "maxBinId",
            "docs": [
              "Max bin id supported by the pool based on the configured bin step."
            ],
            "type": "i32"
          },
          {
            "name": "protocolShare",
            "docs": [
              "Portion of swap fees retained by the protocol by controlling protocol_share parameter. protocol_swap_fee = protocol_share * total_swap_fee"
            ],
            "type": "u16"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "LiquidityParameterByStrategyOneSide",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "Amount of X token or Y token to deposit"
            ],
            "type": "u64"
          },
          {
            "name": "activeId",
            "docs": [
              "Active bin that integrator observe off-chain"
            ],
            "type": "i32"
          },
          {
            "name": "maxActiveBinSlippage",
            "docs": [
              "max active bin slippage allowed"
            ],
            "type": "i32"
          },
          {
            "name": "strategyParameters",
            "docs": [
              "strategy parameters"
            ],
            "type": {
              "defined": "StrategyParameters"
            }
          }
        ]
      }
    },
    {
      "name": "LiquidityParameterByStrategy",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountX",
            "docs": [
              "Amount of X token to deposit"
            ],
            "type": "u64"
          },
          {
            "name": "amountY",
            "docs": [
              "Amount of Y token to deposit"
            ],
            "type": "u64"
          },
          {
            "name": "activeId",
            "docs": [
              "Active bin that integrator observe off-chain"
            ],
            "type": "i32"
          },
          {
            "name": "maxActiveBinSlippage",
            "docs": [
              "max active bin slippage allowed"
            ],
            "type": "i32"
          },
          {
            "name": "strategyParameters",
            "docs": [
              "strategy parameters"
            ],
            "type": {
              "defined": "StrategyParameters"
            }
          }
        ]
      }
    },
    {
      "name": "StrategyParameters",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minBinId",
            "docs": [
              "min bin id"
            ],
            "type": "i32"
          },
          {
            "name": "maxBinId",
            "docs": [
              "max bin id"
            ],
            "type": "i32"
          },
          {
            "name": "strategyType",
            "docs": [
              "strategy type"
            ],
            "type": {
              "defined": "StrategyType"
            }
          },
          {
            "name": "parameteres",
            "docs": [
              "parameters"
            ],
            "type": {
              "array": [
                "u8",
                64
              ]
            }
          }
        ]
      }
    },
    {
      "name": "LiquidityOneSideParameter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "Amount of X token or Y token to deposit"
            ],
            "type": "u64"
          },
          {
            "name": "activeId",
            "docs": [
              "Active bin that integrator observe off-chain"
            ],
            "type": "i32"
          },
          {
            "name": "maxActiveBinSlippage",
            "docs": [
              "max active bin slippage allowed"
            ],
            "type": "i32"
          },
          {
            "name": "binLiquidityDist",
            "docs": [
              "Liquidity distribution to each bins"
            ],
            "type": {
              "vec": {
                "defined": "BinLiquidityDistributionByWeight"
              }
            }
          }
        ]
      }
    },
    {
      "name": "BinLiquidityDistributionByWeight",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "binId",
            "docs": [
              "Define the bin ID wish to deposit to."
            ],
            "type": "i32"
          },
          {
            "name": "weight",
            "docs": [
              "weight of liquidity distributed for this bin id"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "LiquidityParameterByWeight",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountX",
            "docs": [
              "Amount of X token to deposit"
            ],
            "type": "u64"
          },
          {
            "name": "amountY",
            "docs": [
              "Amount of Y token to deposit"
            ],
            "type": "u64"
          },
          {
            "name": "activeId",
            "docs": [
              "Active bin that integrator observe off-chain"
            ],
            "type": "i32"
          },
          {
            "name": "maxActiveBinSlippage",
            "docs": [
              "max active bin slippage allowed"
            ],
            "type": "i32"
          },
          {
            "name": "binLiquidityDist",
            "docs": [
              "Liquidity distribution to each bins"
            ],
            "type": {
              "vec": {
                "defined": "BinLiquidityDistributionByWeight"
              }
            }
          }
        ]
      }
    },
    {
      "name": "AddLiquiditySingleSidePreciseParameter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bins",
            "type": {
              "vec": {
                "defined": "CompressedBinDepositAmount"
              }
            }
          },
          {
            "name": "decompressMultiplier",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "CompressedBinDepositAmount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "binId",
            "type": "i32"
          },
          {
            "name": "amount",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "BinLiquidityDistribution",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "binId",
            "docs": [
              "Define the bin ID wish to deposit to."
            ],
            "type": "i32"
          },
          {
            "name": "distributionX",
            "docs": [
              "DistributionX (or distributionY) is the percentages of amountX (or amountY) you want to add to each bin."
            ],
            "type": "u16"
          },
          {
            "name": "distributionY",
            "docs": [
              "DistributionX (or distributionY) is the percentages of amountX (or amountY) you want to add to each bin."
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "LiquidityParameter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountX",
            "docs": [
              "Amount of X token to deposit"
            ],
            "type": "u64"
          },
          {
            "name": "amountY",
            "docs": [
              "Amount of Y token to deposit"
            ],
            "type": "u64"
          },
          {
            "name": "binLiquidityDist",
            "docs": [
              "Liquidity distribution to each bins"
            ],
            "type": {
              "vec": {
                "defined": "BinLiquidityDistribution"
              }
            }
          }
        ]
      }
    },
    {
      "name": "InitPermissionPairIx",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "activeId",
            "type": "i32"
          },
          {
            "name": "binStep",
            "type": "u16"
          },
          {
            "name": "baseFactor",
            "type": "u16"
          },
          {
            "name": "minBinId",
            "type": "i32"
          },
          {
            "name": "maxBinId",
            "type": "i32"
          },
          {
            "name": "lockDurationInSlot",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "InitPresetParametersIx",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "binStep",
            "docs": [
              "Bin step. Represent the price increment / decrement."
            ],
            "type": "u16"
          },
          {
            "name": "baseFactor",
            "docs": [
              "Used for base fee calculation. base_fee_rate = base_factor * bin_step"
            ],
            "type": "u16"
          },
          {
            "name": "filterPeriod",
            "docs": [
              "Filter period determine high frequency trading time window."
            ],
            "type": "u16"
          },
          {
            "name": "decayPeriod",
            "docs": [
              "Decay period determine when the volatile fee start decay / decrease."
            ],
            "type": "u16"
          },
          {
            "name": "reductionFactor",
            "docs": [
              "Reduction factor controls the volatile fee rate decrement rate."
            ],
            "type": "u16"
          },
          {
            "name": "variableFeeControl",
            "docs": [
              "Used to scale the variable fee component depending on the dynamic of the market"
            ],
            "type": "u32"
          },
          {
            "name": "maxVolatilityAccumulator",
            "docs": [
              "Maximum number of bin crossed can be accumulated. Used to cap volatile fee rate."
            ],
            "type": "u32"
          },
          {
            "name": "minBinId",
            "docs": [
              "Min bin id supported by the pool based on the configured bin step."
            ],
            "type": "i32"
          },
          {
            "name": "maxBinId",
            "docs": [
              "Max bin id supported by the pool based on the configured bin step."
            ],
            "type": "i32"
          },
          {
            "name": "protocolShare",
            "docs": [
              "Portion of swap fees retained by the protocol by controlling protocol_share parameter. protocol_swap_fee = protocol_share * total_swap_fee"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "BinLiquidityReduction",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "binId",
            "type": "i32"
          },
          {
            "name": "bpsToRemove",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "FeeParameter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "protocolShare",
            "docs": [
              "Portion of swap fees retained by the protocol by controlling protocol_share parameter. protocol_swap_fee = protocol_share * total_swap_fee"
            ],
            "type": "u16"
          },
          {
            "name": "baseFactor",
            "docs": [
              "Base factor for base fee rate"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "Bin",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountX",
            "docs": [
              "Amount of token X in the bin. This already excluded protocol fees."
            ],
            "type": "u64"
          },
          {
            "name": "amountY",
            "docs": [
              "Amount of token Y in the bin. This already excluded protocol fees."
            ],
            "type": "u64"
          },
          {
            "name": "price",
            "docs": [
              "Bin price"
            ],
            "type": "u128"
          },
          {
            "name": "liquiditySupply",
            "docs": [
              "Liquidities of the bin. This is the same as LP mint supply. q-number"
            ],
            "type": "u128"
          },
          {
            "name": "rewardPerTokenStored",
            "docs": [
              "reward_a_per_token_stored"
            ],
            "type": {
              "array": [
                "u128",
                2
              ]
            }
          },
          {
            "name": "feeAmountXPerTokenStored",
            "docs": [
              "Swap fee amount of token X per liquidity deposited."
            ],
            "type": "u128"
          },
          {
            "name": "feeAmountYPerTokenStored",
            "docs": [
              "Swap fee amount of token Y per liquidity deposited."
            ],
            "type": "u128"
          },
          {
            "name": "amountXIn",
            "docs": [
              "Total token X swap into the bin. Only used for tracking purpose."
            ],
            "type": "u128"
          },
          {
            "name": "amountYIn",
            "docs": [
              "Total token Y swap into he bin. Only used for tracking purpose."
            ],
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "ProtocolFee",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountX",
            "type": "u64"
          },
          {
            "name": "amountY",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "RewardInfo",
      "docs": [
        "Stores the state relevant for tracking liquidity mining rewards"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "docs": [
              "Reward token mint."
            ],
            "type": "publicKey"
          },
          {
            "name": "vault",
            "docs": [
              "Reward vault token account."
            ],
            "type": "publicKey"
          },
          {
            "name": "funder",
            "docs": [
              "Authority account that allows to fund rewards"
            ],
            "type": "publicKey"
          },
          {
            "name": "rewardDuration",
            "docs": [
              "TODO check whether we need to store it in pool"
            ],
            "type": "u64"
          },
          {
            "name": "rewardDurationEnd",
            "docs": [
              "TODO check whether we need to store it in pool"
            ],
            "type": "u64"
          },
          {
            "name": "rewardRate",
            "docs": [
              "TODO check whether we need to store it in pool"
            ],
            "type": "u128"
          },
          {
            "name": "lastUpdateTime",
            "docs": [
              "The last time reward states were updated."
            ],
            "type": "u64"
          },
          {
            "name": "cumulativeSecondsWithEmptyLiquidityReward",
            "docs": [
              "Accumulated seconds where when farm distribute rewards, but the bin is empty. The reward will be accumulated for next reward time window."
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "Observation",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cumulativeActiveBinId",
            "docs": [
              "Cumulative active bin ID"
            ],
            "type": "i128"
          },
          {
            "name": "createdAt",
            "docs": [
              "Observation sample created timestamp"
            ],
            "type": "i64"
          },
          {
            "name": "lastUpdatedAt",
            "docs": [
              "Observation sample last updated timestamp"
            ],
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "StaticParameters",
      "docs": [
        "Parameter that set by the protocol"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "baseFactor",
            "docs": [
              "Used for base fee calculation. base_fee_rate = base_factor * bin_step"
            ],
            "type": "u16"
          },
          {
            "name": "filterPeriod",
            "docs": [
              "Filter period determine high frequency trading time window."
            ],
            "type": "u16"
          },
          {
            "name": "decayPeriod",
            "docs": [
              "Decay period determine when the volatile fee start decay / decrease."
            ],
            "type": "u16"
          },
          {
            "name": "reductionFactor",
            "docs": [
              "Reduction factor controls the volatile fee rate decrement rate."
            ],
            "type": "u16"
          },
          {
            "name": "variableFeeControl",
            "docs": [
              "Used to scale the variable fee component depending on the dynamic of the market"
            ],
            "type": "u32"
          },
          {
            "name": "maxVolatilityAccumulator",
            "docs": [
              "Maximum number of bin crossed can be accumulated. Used to cap volatile fee rate."
            ],
            "type": "u32"
          },
          {
            "name": "minBinId",
            "docs": [
              "Min bin id supported by the pool based on the configured bin step."
            ],
            "type": "i32"
          },
          {
            "name": "maxBinId",
            "docs": [
              "Max bin id supported by the pool based on the configured bin step."
            ],
            "type": "i32"
          },
          {
            "name": "protocolShare",
            "docs": [
              "Portion of swap fees retained by the protocol by controlling protocol_share parameter. protocol_swap_fee = protocol_share * total_swap_fee"
            ],
            "type": "u16"
          },
          {
            "name": "padding",
            "docs": [
              "Padding for bytemuck safe alignment"
            ],
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          }
        ]
      }
    },
    {
      "name": "VariableParameters",
      "docs": [
        "Parameters that changes based on dynamic of the market"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "volatilityAccumulator",
            "docs": [
              "Volatility accumulator measure the number of bin crossed since reference bin ID. Normally (without filter period taken into consideration), reference bin ID is the active bin of last swap.",
              "It affects the variable fee rate"
            ],
            "type": "u32"
          },
          {
            "name": "volatilityReference",
            "docs": [
              "Volatility reference is decayed volatility accumulator. It is always <= volatility_accumulator"
            ],
            "type": "u32"
          },
          {
            "name": "indexReference",
            "docs": [
              "Active bin id of last swap."
            ],
            "type": "i32"
          },
          {
            "name": "padding",
            "docs": [
              "Padding for bytemuck safe alignment"
            ],
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          },
          {
            "name": "lastUpdateTimestamp",
            "docs": [
              "Last timestamp the variable parameters was updated"
            ],
            "type": "i64"
          },
          {
            "name": "padding1",
            "docs": [
              "Padding for bytemuck safe alignment"
            ],
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "FeeInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeXPerTokenComplete",
            "type": "u128"
          },
          {
            "name": "feeYPerTokenComplete",
            "type": "u128"
          },
          {
            "name": "feeXPending",
            "type": "u64"
          },
          {
            "name": "feeYPending",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "UserRewardInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rewardPerTokenCompletes",
            "type": {
              "array": [
                "u128",
                2
              ]
            }
          },
          {
            "name": "rewardPendings",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          }
        ]
      }
    },
    {
      "name": "StrategyType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "SpotOneSide"
          },
          {
            "name": "CurveOneSide"
          },
          {
            "name": "BidAskOneSide"
          },
          {
            "name": "SpotBalanced"
          },
          {
            "name": "CurveBalanced"
          },
          {
            "name": "BidAskBalanced"
          },
          {
            "name": "SpotImBalanced"
          },
          {
            "name": "CurveImBalanced"
          },
          {
            "name": "BidAskImBalanced"
          }
        ]
      }
    },
    {
      "name": "Rounding",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Up"
          },
          {
            "name": "Down"
          }
        ]
      }
    },
    {
      "name": "LayoutVersion",
      "docs": [
        "Layout version"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "V0"
          },
          {
            "name": "V1"
          }
        ]
      }
    },
    {
      "name": "PairType",
      "docs": [
        "Type of the Pair. 0 = Permissionless, 1 = Permission. Putting 0 as permissionless for backward compatibility."
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Permissionless"
          },
          {
            "name": "Permission"
          }
        ]
      }
    },
    {
      "name": "PairStatus",
      "docs": [
        "Pair status. 0 = Enabled, 1 = Disabled. Putting 0 as enabled for backward compatibility."
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Enabled"
          },
          {
            "name": "Disabled"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "CompositionFee",
      "fields": [
        {
          "name": "from",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "binId",
          "type": "i16",
          "index": false
        },
        {
          "name": "tokenXFeeAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenYFeeAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "protocolTokenXFeeAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "protocolTokenYFeeAmount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "AddLiquidity",
      "fields": [
        {
          "name": "lbPair",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "from",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "position",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amounts",
          "type": {
            "array": [
              "u64",
              2
            ]
          },
          "index": false
        },
        {
          "name": "activeBinId",
          "type": "i32",
          "index": false
        }
      ]
    },
    {
      "name": "RemoveLiquidity",
      "fields": [
        {
          "name": "lbPair",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "from",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "position",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amounts",
          "type": {
            "array": [
              "u64",
              2
            ]
          },
          "index": false
        },
        {
          "name": "activeBinId",
          "type": "i32",
          "index": false
        }
      ]
    },
    {
      "name": "Swap",
      "fields": [
        {
          "name": "lbPair",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "from",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "startBinId",
          "type": "i32",
          "index": false
        },
        {
          "name": "endBinId",
          "type": "i32",
          "index": false
        },
        {
          "name": "amountIn",
          "type": "u64",
          "index": false
        },
        {
          "name": "amountOut",
          "type": "u64",
          "index": false
        },
        {
          "name": "swapForY",
          "type": "bool",
          "index": false
        },
        {
          "name": "fee",
          "type": "u64",
          "index": false
        },
        {
          "name": "protocolFee",
          "type": "u64",
          "index": false
        },
        {
          "name": "feeBps",
          "type": "u128",
          "index": false
        },
        {
          "name": "hostFee",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "ClaimReward",
      "fields": [
        {
          "name": "lbPair",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "position",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "rewardIndex",
          "type": "u64",
          "index": false
        },
        {
          "name": "totalReward",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "FundReward",
      "fields": [
        {
          "name": "lbPair",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "funder",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "rewardIndex",
          "type": "u64",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "InitializeReward",
      "fields": [
        {
          "name": "lbPair",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "rewardMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "funder",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "rewardIndex",
          "type": "u64",
          "index": false
        },
        {
          "name": "rewardDuration",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "UpdateRewardDuration",
      "fields": [
        {
          "name": "lbPair",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "rewardIndex",
          "type": "u64",
          "index": false
        },
        {
          "name": "oldRewardDuration",
          "type": "u64",
          "index": false
        },
        {
          "name": "newRewardDuration",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "UpdateRewardFunder",
      "fields": [
        {
          "name": "lbPair",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "rewardIndex",
          "type": "u64",
          "index": false
        },
        {
          "name": "oldFunder",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newFunder",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "PositionClose",
      "fields": [
        {
          "name": "position",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "ClaimFee",
      "fields": [
        {
          "name": "lbPair",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "position",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "feeX",
          "type": "u64",
          "index": false
        },
        {
          "name": "feeY",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "LbPairCreate",
      "fields": [
        {
          "name": "lbPair",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "binStep",
          "type": "u16",
          "index": false
        },
        {
          "name": "tokenX",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenY",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "PositionCreate",
      "fields": [
        {
          "name": "lbPair",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "position",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "FeeParameterUpdate",
      "fields": [
        {
          "name": "lbPair",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "protocolShare",
          "type": "u16",
          "index": false
        },
        {
          "name": "baseFactor",
          "type": "u16",
          "index": false
        }
      ]
    },
    {
      "name": "IncreaseObservation",
      "fields": [
        {
          "name": "oracle",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newObservationLength",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "WithdrawIneligibleReward",
      "fields": [
        {
          "name": "lbPair",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "rewardMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "UpdatePositionOperator",
      "fields": [
        {
          "name": "position",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "oldOperator",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newOperator",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "UpdatePositionLockReleaseSlot",
      "fields": [
        {
          "name": "position",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "currentSlot",
          "type": "u64",
          "index": false
        },
        {
          "name": "newLockReleaseSlot",
          "type": "u64",
          "index": false
        },
        {
          "name": "oldLockReleaseSlot",
          "type": "u64",
          "index": false
        },
        {
          "name": "sender",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "GoToABin",
      "fields": [
        {
          "name": "lbPair",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "fromBinId",
          "type": "i32",
          "index": false
        },
        {
          "name": "toBinId",
          "type": "i32",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6e3,
      "name": "InvalidStartBinIndex",
      "msg": "Invalid start bin index"
    },
    {
      "code": 6001,
      "name": "InvalidBinId",
      "msg": "Invalid bin id"
    },
    {
      "code": 6002,
      "name": "InvalidInput",
      "msg": "Invalid input data"
    },
    {
      "code": 6003,
      "name": "ExceededAmountSlippageTolerance",
      "msg": "Exceeded amount slippage tolerance"
    },
    {
      "code": 6004,
      "name": "ExceededBinSlippageTolerance",
      "msg": "Exceeded bin slippage tolerance"
    },
    {
      "code": 6005,
      "name": "CompositionFactorFlawed",
      "msg": "Composition factor flawed"
    },
    {
      "code": 6006,
      "name": "NonPresetBinStep",
      "msg": "Non preset bin step"
    },
    {
      "code": 6007,
      "name": "ZeroLiquidity",
      "msg": "Zero liquidity"
    },
    {
      "code": 6008,
      "name": "InvalidPosition",
      "msg": "Invalid position"
    },
    {
      "code": 6009,
      "name": "BinArrayNotFound",
      "msg": "Bin array not found"
    },
    {
      "code": 6010,
      "name": "InvalidTokenMint",
      "msg": "Invalid token mint"
    },
    {
      "code": 6011,
      "name": "InvalidAccountForSingleDeposit",
      "msg": "Invalid account for single deposit"
    },
    {
      "code": 6012,
      "name": "PairInsufficientLiquidity",
      "msg": "Pair insufficient liquidity"
    },
    {
      "code": 6013,
      "name": "InvalidFeeOwner",
      "msg": "Invalid fee owner"
    },
    {
      "code": 6014,
      "name": "InvalidFeeWithdrawAmount",
      "msg": "Invalid fee withdraw amount"
    },
    {
      "code": 6015,
      "name": "InvalidAdmin",
      "msg": "Invalid admin"
    },
    {
      "code": 6016,
      "name": "IdenticalFeeOwner",
      "msg": "Identical fee owner"
    },
    {
      "code": 6017,
      "name": "InvalidBps",
      "msg": "Invalid basis point"
    },
    {
      "code": 6018,
      "name": "MathOverflow",
      "msg": "Math operation overflow"
    },
    {
      "code": 6019,
      "name": "TypeCastFailed",
      "msg": "Type cast error"
    },
    {
      "code": 6020,
      "name": "InvalidRewardIndex",
      "msg": "Invalid reward index"
    },
    {
      "code": 6021,
      "name": "InvalidRewardDuration",
      "msg": "Invalid reward duration"
    },
    {
      "code": 6022,
      "name": "RewardInitialized",
      "msg": "Reward already initialized"
    },
    {
      "code": 6023,
      "name": "RewardUninitialized",
      "msg": "Reward not initialized"
    },
    {
      "code": 6024,
      "name": "IdenticalFunder",
      "msg": "Identical funder"
    },
    {
      "code": 6025,
      "name": "RewardCampaignInProgress",
      "msg": "Reward campaign in progress"
    },
    {
      "code": 6026,
      "name": "IdenticalRewardDuration",
      "msg": "Reward duration is the same"
    },
    {
      "code": 6027,
      "name": "InvalidBinArray",
      "msg": "Invalid bin array"
    },
    {
      "code": 6028,
      "name": "NonContinuousBinArrays",
      "msg": "Bin arrays must be continuous"
    },
    {
      "code": 6029,
      "name": "InvalidRewardVault",
      "msg": "Invalid reward vault"
    },
    {
      "code": 6030,
      "name": "NonEmptyPosition",
      "msg": "Position is not empty"
    },
    {
      "code": 6031,
      "name": "UnauthorizedAccess",
      "msg": "Unauthorized access"
    },
    {
      "code": 6032,
      "name": "InvalidFeeParameter",
      "msg": "Invalid fee parameter"
    },
    {
      "code": 6033,
      "name": "MissingOracle",
      "msg": "Missing oracle account"
    },
    {
      "code": 6034,
      "name": "InsufficientSample",
      "msg": "Insufficient observation sample"
    },
    {
      "code": 6035,
      "name": "InvalidLookupTimestamp",
      "msg": "Invalid lookup timestamp"
    },
    {
      "code": 6036,
      "name": "BitmapExtensionAccountIsNotProvided",
      "msg": "Bitmap extension account is not provided"
    },
    {
      "code": 6037,
      "name": "CannotFindNonZeroLiquidityBinArrayId",
      "msg": "Cannot find non-zero liquidity binArrayId"
    },
    {
      "code": 6038,
      "name": "BinIdOutOfBound",
      "msg": "Bin id out of bound"
    },
    {
      "code": 6039,
      "name": "InsufficientOutAmount",
      "msg": "Insufficient amount in for minimum out"
    },
    {
      "code": 6040,
      "name": "InvalidPositionWidth",
      "msg": "Invalid position width"
    },
    {
      "code": 6041,
      "name": "ExcessiveFeeUpdate",
      "msg": "Excessive fee update"
    },
    {
      "code": 6042,
      "name": "PoolDisabled",
      "msg": "Pool disabled"
    },
    {
      "code": 6043,
      "name": "InvalidPoolType",
      "msg": "Invalid pool type"
    },
    {
      "code": 6044,
      "name": "ExceedMaxWhitelist",
      "msg": "Whitelist for wallet is full"
    },
    {
      "code": 6045,
      "name": "InvalidIndex",
      "msg": "Invalid index"
    },
    {
      "code": 6046,
      "name": "RewardNotEnded",
      "msg": "Reward not ended"
    },
    {
      "code": 6047,
      "name": "MustWithdrawnIneligibleReward",
      "msg": "Must withdraw ineligible reward"
    },
    {
      "code": 6048,
      "name": "UnauthorizedAddress",
      "msg": "Unauthorized address"
    },
    {
      "code": 6049,
      "name": "OperatorsAreTheSame",
      "msg": "Cannot update because operators are the same"
    },
    {
      "code": 6050,
      "name": "WithdrawToWrongTokenAccount",
      "msg": "Withdraw to wrong token account"
    },
    {
      "code": 6051,
      "name": "WrongRentReceiver",
      "msg": "Wrong rent receiver"
    },
    {
      "code": 6052,
      "name": "AlreadyPassActivationSlot",
      "msg": "Already activated"
    },
    {
      "code": 6053,
      "name": "LastSlotCannotBeSmallerThanActivateSlot",
      "msg": "Last slot cannot be smaller than activate slot"
    },
    {
      "code": 6054,
      "name": "ExceedMaxSwappedAmount",
      "msg": "Swapped amount is exceeded max swapped amount"
    },
    {
      "code": 6055,
      "name": "InvalidStrategyParameters",
      "msg": "Invalid strategy parameters"
    },
    {
      "code": 6056,
      "name": "LiquidityLocked",
      "msg": "Liquidity locked"
    },
    {
      "code": 6057,
      "name": "InvalidLockReleaseSlot",
      "msg": "Invalid lock release slot"
    },
    {
      "code": 6058,
      "name": "BinRangeIsNotEmpty",
      "msg": "Bin range is not empty"
    },
    {
      "code": 6059,
      "name": "NotExactAmountOut",
      "msg": "Amount out is not matched with exact amount out"
    }
  ]
};

// src/dlmm/constants/index.ts
import { PublicKey } from "@solana/web3.js";
import { BN } from "@coral-xyz/anchor";
var LBCLMM_PROGRAM_IDS = {
  devnet: "LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo",
  localhost: "LbVRzDTvBDEcrthxfZ4RL6yiq3uZw8bS6MwtdY6UhFQ",
  "mainnet-beta": "LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo"
};
var ADMIN = {
  devnet: "6WaLrrRfReGKBYUSkmx2K6AuT21ida4j8at2SUiZdXu8",
  localhost: "bossj3JvwiNK7pvjr149DqdtJxf2gdygbcmEPTkb2F1"
};
var Network = /* @__PURE__ */ ((Network2) => {
  Network2["MAINNET"] = "mainnet-beta";
  Network2["TESTNET"] = "testnet";
  Network2["DEVNET"] = "devnet";
  Network2["LOCAL"] = "localhost";
  return Network2;
})(Network || {});
var BASIS_POINT_MAX = 1e4;
var SCALE_OFFSET = 64;
var SCALE = new BN(1).shln(SCALE_OFFSET);
var FEE_PRECISION = new BN(1e9);
var MAX_FEE_RATE = new BN(1e8);
var BIN_ARRAY_FEE = 0.07054656;
var POSITION_FEE = 0.0565152;
var CONSTANTS = Object.entries(IDL.constants);
var MAX_BIN_ARRAY_SIZE = new BN(
  CONSTANTS.find(([k, v]) => v.name == "MAX_BIN_PER_ARRAY")?.[1].value ?? 0
);
var MAX_BIN_PER_POSITION = new BN(
  CONSTANTS.find(([k, v]) => v.name == "MAX_BIN_PER_POSITION")?.[1].value ?? 0
);
var BIN_ARRAY_BITMAP_SIZE = new BN(
  CONSTANTS.find(([k, v]) => v.name == "BIN_ARRAY_BITMAP_SIZE")?.[1].value ?? 0
);
var EXTENSION_BINARRAY_BITMAP_SIZE = new BN(
  CONSTANTS.find(([k, v]) => v.name == "EXTENSION_BINARRAY_BITMAP_SIZE")?.[1].value ?? 0
);
var SIMULATION_USER = new PublicKey(
  "HrY9qR5TiB2xPzzvbBu5KrBorMfYGQXh9osXydz4jy9s"
);
var PRECISION = 18446744073709552e3;
var MAX_CLAIM_ALL_ALLOWED = 3;
var MAX_BIN_LENGTH_ALLOWED_IN_ONE_TX = 26;
var MAX_BIN_PER_TX = 69;
var MAX_ACTIVE_BIN_SLIPPAGE = 3;

// src/dlmm/types/index.ts
var PositionVersion = /* @__PURE__ */ ((PositionVersion2) => {
  PositionVersion2[PositionVersion2["V1"] = 0] = "V1";
  PositionVersion2[PositionVersion2["V2"] = 1] = "V2";
  return PositionVersion2;
})(PositionVersion || {});
var PairType = /* @__PURE__ */ ((PairType2) => {
  PairType2[PairType2["Permissionless"] = 0] = "Permissionless";
  PairType2[PairType2["Permissioned"] = 1] = "Permissioned";
  return PairType2;
})(PairType || {});
var Strategy = {
  SpotOneSide: { spotOneSide: {} },
  CurveOneSide: { curveOneSide: {} },
  BidAskOneSide: { bidAskOneSide: {} },
  SpotBalanced: { spotBalanced: {} },
  CurveBalanced: { curveBalanced: {} },
  BidAskBalanced: { bidAskBalanced: {} },
  SpotImBalanced: { spotImBalanced: {} },
  CurveImBalanced: { curveImBalanced: {} },
  BidAskImBalanced: { bidAskImBalanced: {} }
};
var StrategyType = /* @__PURE__ */ ((StrategyType2) => {
  StrategyType2[StrategyType2["SpotOneSide"] = 0] = "SpotOneSide";
  StrategyType2[StrategyType2["CurveOneSide"] = 1] = "CurveOneSide";
  StrategyType2[StrategyType2["BidAskOneSide"] = 2] = "BidAskOneSide";
  StrategyType2[StrategyType2["SpotImBalanced"] = 3] = "SpotImBalanced";
  StrategyType2[StrategyType2["CurveImBalanced"] = 4] = "CurveImBalanced";
  StrategyType2[StrategyType2["BidAskImBalanced"] = 5] = "BidAskImBalanced";
  StrategyType2[StrategyType2["SpotBalanced"] = 6] = "SpotBalanced";
  StrategyType2[StrategyType2["CurveBalanced"] = 7] = "CurveBalanced";
  StrategyType2[StrategyType2["BidAskBalanced"] = 8] = "BidAskBalanced";
  return StrategyType2;
})(StrategyType || {});
var BitmapType = /* @__PURE__ */ ((BitmapType2) => {
  BitmapType2[BitmapType2["U1024"] = 0] = "U1024";
  BitmapType2[BitmapType2["U512"] = 1] = "U512";
  return BitmapType2;
})(BitmapType || {});

// src/dlmm/index.ts
import { AnchorProvider as AnchorProvider2, BN as BN9, Program as Program2 } from "@coral-xyz/anchor";

// src/dlmm/helpers/index.ts
import {
  NATIVE_MINT,
  TOKEN_PROGRAM_ID,
  TokenAccountNotFoundError,
  TokenInvalidAccountOwnerError,
  createAssociatedTokenAccountInstruction,
  createCloseAccountInstruction,
  getAccount,
  getAssociatedTokenAddressSync,
  getMint
} from "@solana/spl-token";
import {
  ComputeBudgetProgram,
  SystemProgram,
  TransactionInstruction
} from "@solana/web3.js";

// src/dlmm/helpers/math.ts
import { BN as BN5 } from "@coral-xyz/anchor";
import Decimal3 from "decimal.js";

// src/dlmm/helpers/u64xu64_math.ts
import BN2 from "bn.js";
var MAX_EXPONENTIAL = new BN2(524288);
var ONE = new BN2(1).shln(SCALE_OFFSET);
var MAX = new BN2(2).pow(new BN2(128)).sub(new BN2(1));
function pow(base, exp) {
  let invert = exp.isNeg();
  if (exp.isZero()) {
    return ONE;
  }
  exp = invert ? exp.abs() : exp;
  if (exp.gt(MAX_EXPONENTIAL)) {
    return new BN2(0);
  }
  let squaredBase = base;
  let result = ONE;
  if (squaredBase.gte(result)) {
    squaredBase = MAX.div(squaredBase);
    invert = !invert;
  }
  if (!exp.and(new BN2(1)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN2(2)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN2(4)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN2(8)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN2(16)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN2(32)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN2(64)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN2(128)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN2(256)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN2(512)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN2(1024)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN2(2048)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN2(4096)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN2(8192)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN2(16384)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN2(32768)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN2(65536)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN2(131072)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN2(262144)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  if (result.isZero()) {
    return new BN2(0);
  }
  if (invert) {
    result = MAX.div(result);
  }
  return result;
}

// src/dlmm/helpers/weight.ts
import { BN as BN4 } from "@coral-xyz/anchor";
import gaussian from "gaussian";
import Decimal2 from "decimal.js";

// src/dlmm/helpers/weightToAmounts.ts
import Decimal from "decimal.js";
import { BN as BN3 } from "@coral-xyz/anchor";
function toAmountBidSide(activeId, totalAmount, distributions) {
  const totalWeight = distributions.reduce(function(sum, el) {
    return el.binId > activeId ? sum : sum.add(el.weight);
  }, new Decimal(0));
  if (totalWeight.cmp(new Decimal(0)) != 1) {
    throw Error("Invalid parameteres");
  }
  return distributions.map((bin) => {
    if (bin.binId > activeId) {
      return {
        binId: bin.binId,
        amount: new BN3(0)
      };
    } else {
      return {
        binId: bin.binId,
        amount: new BN3(new Decimal(totalAmount.toString()).mul(new Decimal(bin.weight).div(totalWeight)).floor().toString())
      };
    }
  });
}
function toAmountAskSide(activeId, binStep, totalAmount, distributions) {
  const totalWeight = distributions.reduce(function(sum, el) {
    if (el.binId < activeId) {
      return sum;
    } else {
      const price = getPriceOfBinByBinId(el.binId, binStep);
      const weightPerPrice = new Decimal(el.weight).div(price);
      return sum.add(weightPerPrice);
    }
  }, new Decimal(0));
  if (totalWeight.cmp(new Decimal(0)) != 1) {
    throw Error("Invalid parameteres");
  }
  return distributions.map((bin) => {
    if (bin.binId < activeId) {
      return {
        binId: bin.binId,
        amount: new BN3(0)
      };
    } else {
      const price = getPriceOfBinByBinId(bin.binId, binStep);
      const weightPerPrice = new Decimal(bin.weight).div(price);
      return {
        binId: bin.binId,
        amount: new BN3(new Decimal(totalAmount.toString()).mul(weightPerPrice).div(totalWeight).floor().toString())
      };
    }
  });
}
function toAmountBothSide(activeId, binStep, amountX, amountY, amountXInActiveBin, amountYInActiveBin, distributions) {
  if (activeId > distributions[distributions.length - 1].binId) {
    let amounts = toAmountBidSide(activeId, amountY, distributions);
    return amounts.map((bin) => {
      return {
        binId: bin.binId,
        amountX: new BN3(0),
        amountY: bin.amount
      };
    });
  }
  if (activeId < distributions[0].binId) {
    let amounts = toAmountAskSide(activeId, binStep, amountX, distributions);
    return amounts.map((bin) => {
      return {
        binId: bin.binId,
        amountX: bin.amount,
        amountY: new BN3(0)
      };
    });
  }
  const activeBins = distributions.filter((element) => {
    return element.binId === activeId;
  });
  if (activeBins.length === 1) {
    const p0 = getPriceOfBinByBinId(activeId, binStep);
    let wx0 = new Decimal(0);
    let wy0 = new Decimal(0);
    const activeBin = activeBins[0];
    if (amountXInActiveBin.isZero() && amountYInActiveBin.isZero()) {
      wx0 = new Decimal(activeBin.weight).div(p0.mul(new Decimal(2)));
      wy0 = new Decimal(activeBin.weight).div(new Decimal(2));
    } else {
      let amountXInActiveBinDec = new Decimal(amountXInActiveBin.toString());
      let amountYInActiveBinDec = new Decimal(amountYInActiveBin.toString());
      if (!amountXInActiveBin.isZero()) {
        wx0 = new Decimal(activeBin.weight).div(
          p0.add(amountYInActiveBinDec.div(amountXInActiveBinDec))
        );
      }
      if (!amountYInActiveBin.isZero()) {
        wy0 = new Decimal(activeBin.weight).div(
          new Decimal(1).add(
            p0.mul(amountXInActiveBinDec).div(amountYInActiveBinDec)
          )
        );
      }
    }
    let totalWeightX = wx0;
    let totalWeightY = wy0;
    distributions.forEach((element) => {
      if (element.binId < activeId) {
        totalWeightY = totalWeightY.add(new Decimal(element.weight));
      }
      if (element.binId > activeId) {
        let price = getPriceOfBinByBinId(element.binId, binStep);
        let weighPerPrice = new Decimal(element.weight).div(price);
        totalWeightX = totalWeightX.add(weighPerPrice);
      }
    });
    const kx = new Decimal(amountX.toString()).div(totalWeightX);
    const ky = new Decimal(amountY.toString()).div(totalWeightY);
    let k = kx.lessThan(ky) ? kx : ky;
    return distributions.map((bin) => {
      if (bin.binId < activeId) {
        const amount = k.mul(new Decimal(bin.weight));
        return {
          binId: bin.binId,
          amountX: new BN3(0),
          amountY: new BN3(amount.floor().toString())
        };
      }
      if (bin.binId > activeId) {
        const price = getPriceOfBinByBinId(bin.binId, binStep);
        const weighPerPrice = new Decimal(bin.weight).div(price);
        const amount = k.mul(weighPerPrice);
        return {
          binId: bin.binId,
          amountX: new BN3(amount.floor().toString()),
          amountY: new BN3(0)
        };
      }
      const amountXActiveBin = k.mul(wx0);
      const amountYActiveBin = k.mul(wy0);
      return {
        binId: bin.binId,
        amountX: new BN3(amountXActiveBin.floor().toString()),
        amountY: new BN3(amountYActiveBin.floor().toString())
      };
    });
  } else {
    let totalWeightX = new Decimal(0);
    let totalWeightY = new Decimal(0);
    distributions.forEach((element) => {
      if (element.binId < activeId) {
        totalWeightY = totalWeightY.add(new Decimal(element.weight));
      } else {
        let price = getPriceOfBinByBinId(element.binId, binStep);
        let weighPerPrice = new Decimal(element.weight).div(price);
        totalWeightX = totalWeightX.add(weighPerPrice);
      }
    });
    let kx = new Decimal(amountX.toString()).div(totalWeightX);
    let ky = new Decimal(amountY.toString()).div(totalWeightY);
    let k = kx.lessThan(ky) ? kx : ky;
    return distributions.map((bin) => {
      if (bin.binId < activeId) {
        const amount = k.mul(new Decimal(bin.weight));
        return {
          binId: bin.binId,
          amountX: new BN3(0),
          amountY: new BN3(amount.floor().toString())
        };
      } else {
        let price = getPriceOfBinByBinId(bin.binId, binStep);
        let weighPerPrice = new Decimal(bin.weight).div(price);
        const amount = k.mul(weighPerPrice);
        return {
          binId: bin.binId,
          amountX: new BN3(amount.floor().toString()),
          amountY: new BN3(0)
        };
      }
    });
  }
}
function autoFillYByWeight(activeId, binStep, amountX, amountXInActiveBin, amountYInActiveBin, distributions) {
  const activeBins = distributions.filter((element) => {
    return element.binId === activeId;
  });
  if (activeBins.length === 1) {
    const p0 = getPriceOfBinByBinId(activeId, binStep);
    let wx0 = new Decimal(0);
    let wy0 = new Decimal(0);
    const activeBin = activeBins[0];
    if (amountXInActiveBin.isZero() && amountYInActiveBin.isZero()) {
      wx0 = new Decimal(activeBin.weight).div(p0.mul(new Decimal(2)));
      wy0 = new Decimal(activeBin.weight).div(new Decimal(2));
    } else {
      let amountXInActiveBinDec = new Decimal(amountXInActiveBin.toString());
      let amountYInActiveBinDec = new Decimal(amountYInActiveBin.toString());
      if (!amountXInActiveBin.isZero()) {
        wx0 = new Decimal(activeBin.weight).div(
          p0.add(amountYInActiveBinDec.div(amountXInActiveBinDec))
        );
      }
      if (!amountYInActiveBin.isZero()) {
        wy0 = new Decimal(activeBin.weight).div(
          new Decimal(1).add(
            p0.mul(amountXInActiveBinDec).div(amountYInActiveBinDec)
          )
        );
      }
    }
    let totalWeightX = wx0;
    let totalWeightY = wy0;
    distributions.forEach((element) => {
      if (element.binId < activeId) {
        totalWeightY = totalWeightY.add(new Decimal(element.weight));
      }
      if (element.binId > activeId) {
        const price = getPriceOfBinByBinId(element.binId, binStep);
        const weighPerPrice = new Decimal(element.weight).div(price);
        totalWeightX = totalWeightX.add(weighPerPrice);
      }
    });
    const kx = totalWeightX.isZero() ? new Decimal(1) : new Decimal(amountX.toString()).div(totalWeightX);
    const amountY = kx.mul(totalWeightY);
    return new BN3(amountY.floor().toString());
  } else {
    let totalWeightX = new Decimal(0);
    let totalWeightY = new Decimal(0);
    distributions.forEach((element) => {
      if (element.binId < activeId) {
        totalWeightY = totalWeightY.add(new Decimal(element.weight));
      } else {
        const price = getPriceOfBinByBinId(element.binId, binStep);
        const weighPerPrice = new Decimal(element.weight).div(price);
        totalWeightX = totalWeightX.add(weighPerPrice);
      }
    });
    const kx = totalWeightX.isZero() ? new Decimal(1) : new Decimal(amountX.toString()).div(totalWeightX);
    const amountY = kx.mul(totalWeightY);
    return new BN3(amountY.floor().toString());
  }
}
function autoFillXByWeight(activeId, binStep, amountY, amountXInActiveBin, amountYInActiveBin, distributions) {
  const activeBins = distributions.filter((element) => {
    return element.binId === activeId;
  });
  if (activeBins.length === 1) {
    const p0 = getPriceOfBinByBinId(activeId, binStep);
    let wx0 = new Decimal(0);
    let wy0 = new Decimal(0);
    const activeBin = activeBins[0];
    if (amountXInActiveBin.isZero() && amountYInActiveBin.isZero()) {
      wx0 = new Decimal(activeBin.weight).div(p0.mul(new Decimal(2)));
      wy0 = new Decimal(activeBin.weight).div(new Decimal(2));
    } else {
      let amountXInActiveBinDec = new Decimal(amountXInActiveBin.toString());
      let amountYInActiveBinDec = new Decimal(amountYInActiveBin.toString());
      if (!amountXInActiveBin.isZero()) {
        wx0 = new Decimal(activeBin.weight).div(
          p0.add(amountYInActiveBinDec.div(amountXInActiveBinDec))
        );
      }
      if (!amountYInActiveBin.isZero()) {
        wy0 = new Decimal(activeBin.weight).div(
          new Decimal(1).add(
            p0.mul(amountXInActiveBinDec).div(amountYInActiveBinDec)
          )
        );
      }
    }
    let totalWeightX = wx0;
    let totalWeightY = wy0;
    distributions.forEach((element) => {
      if (element.binId < activeId) {
        totalWeightY = totalWeightY.add(new Decimal(element.weight));
      }
      if (element.binId > activeId) {
        const price = getPriceOfBinByBinId(element.binId, binStep);
        const weighPerPrice = new Decimal(element.weight).div(price);
        totalWeightX = totalWeightX.add(weighPerPrice);
      }
    });
    const ky = totalWeightY.isZero() ? new Decimal(1) : new Decimal(amountY.toString()).div(totalWeightY);
    const amountX = ky.mul(totalWeightX);
    return new BN3(amountX.floor().toString());
  } else {
    let totalWeightX = new Decimal(0);
    let totalWeightY = new Decimal(0);
    distributions.forEach((element) => {
      if (element.binId < activeId) {
        totalWeightY = totalWeightY.add(new Decimal(element.weight));
      } else {
        const price = getPriceOfBinByBinId(element.binId, binStep);
        const weighPerPrice = new Decimal(element.weight).div(price);
        totalWeightX = totalWeightX.add(weighPerPrice);
      }
    });
    const ky = totalWeightY.isZero() ? new Decimal(1) : new Decimal(amountY.toString()).div(totalWeightY);
    const amountX = ky.mul(totalWeightX);
    return new BN3(amountX.floor().toString());
  }
}

// src/dlmm/helpers/weight.ts
function getPriceOfBinByBinId(binId, binStep) {
  const binStepNum = new Decimal2(binStep).div(new Decimal2(BASIS_POINT_MAX));
  return new Decimal2(1).add(new Decimal2(binStepNum)).pow(new Decimal2(binId));
}
function buildGaussianFromBins(activeBin, binIds) {
  const smallestBin = Math.min(...binIds);
  const largestBin = Math.max(...binIds);
  let mean = 0;
  const isAroundActiveBin = binIds.find((bid) => bid == activeBin);
  if (isAroundActiveBin) {
    mean = activeBin;
  } else if (activeBin < smallestBin) {
    mean = smallestBin;
  } else {
    mean = largestBin;
  }
  const TWO_STANDARD_DEVIATION = 4;
  const stdDev = (largestBin - smallestBin) / TWO_STANDARD_DEVIATION;
  const variance = Math.max(stdDev ** 2, 1);
  return gaussian(mean, variance);
}
function generateBinLiquidityAllocation(gaussian2, binIds, invert) {
  const allocations = binIds.map(
    (bid) => invert ? 1 / gaussian2.pdf(bid) : gaussian2.pdf(bid)
  );
  const totalAllocations = allocations.reduce((acc, v) => acc + v, 0);
  return allocations.map((a) => a / totalAllocations);
}
function computeAllocationBps(allocations) {
  let totalAllocation = new BN4(0);
  const bpsAllocations = [];
  for (const allocation of allocations) {
    const allocBps = new BN4(allocation * 1e4);
    bpsAllocations.push(allocBps);
    totalAllocation = totalAllocation.add(allocBps);
  }
  const pLoss = new BN4(1e4).sub(totalAllocation);
  return {
    bpsAllocations,
    pLoss
  };
}
function toWeightDistribution(amountX, amountY, distributions, binStep) {
  let totalQuote = new BN4(0);
  const precision = 1e12;
  const quoteDistributions = distributions.map((bin) => {
    const price = new BN4(
      getPriceOfBinByBinId(bin.binId, binStep).mul(precision).floor().toString()
    );
    const quoteValue = amountX.mul(new BN4(bin.xAmountBpsOfTotal)).mul(new BN4(price)).div(new BN4(BASIS_POINT_MAX)).div(new BN4(precision));
    const quoteAmount = quoteValue.add(
      amountY.mul(new BN4(bin.yAmountBpsOfTotal)).div(new BN4(BASIS_POINT_MAX))
    );
    totalQuote = totalQuote.add(quoteAmount);
    return {
      binId: bin.binId,
      quoteAmount
    };
  });
  if (totalQuote.eq(new BN4(0))) {
    return [];
  }
  const distributionWeights = quoteDistributions.map((bin) => {
    const weight = Math.floor(
      bin.quoteAmount.mul(new BN4(65535)).div(totalQuote).toNumber()
    );
    return {
      binId: bin.binId,
      weight
    };
  }).filter((item) => item.weight > 0);
  return distributionWeights;
}
function calculateSpotDistribution(activeBin, binIds) {
  if (!binIds.includes(activeBin)) {
    const { div: dist, mod: rem } = new BN4(1e4).divmod(
      new BN4(binIds.length)
    );
    const loss = rem.isZero() ? new BN4(0) : new BN4(1);
    const distributions = binIds[0] < activeBin ? binIds.map((binId) => ({
      binId,
      xAmountBpsOfTotal: new BN4(0),
      yAmountBpsOfTotal: dist
    })) : binIds.map((binId) => ({
      binId,
      xAmountBpsOfTotal: dist,
      yAmountBpsOfTotal: new BN4(0)
    }));
    if (binIds[0] < activeBin) {
      distributions[0].yAmountBpsOfTotal.add(loss);
    } else {
      distributions[binIds.length - 1].xAmountBpsOfTotal.add(loss);
    }
    return distributions;
  }
  const binYCount = binIds.filter((binId) => binId < activeBin).length;
  const binXCount = binIds.filter((binId) => binId > activeBin).length;
  const totalYBinCapacity = binYCount + 0.5;
  const totalXBinCapacity = binXCount + 0.5;
  const yBinBps = new BN4(1e4 / totalYBinCapacity);
  const yActiveBinBps = new BN4(1e4).sub(yBinBps.mul(new BN4(binYCount)));
  const xBinBps = new BN4(1e4 / totalXBinCapacity);
  const xActiveBinBps = new BN4(1e4).sub(xBinBps.mul(new BN4(binXCount)));
  return binIds.map((binId) => {
    const isYBin = binId < activeBin;
    const isXBin = binId > activeBin;
    const isActiveBin = binId === activeBin;
    if (isYBin) {
      return {
        binId,
        xAmountBpsOfTotal: new BN4(0),
        yAmountBpsOfTotal: yBinBps
      };
    }
    if (isXBin) {
      return {
        binId,
        xAmountBpsOfTotal: xBinBps,
        yAmountBpsOfTotal: new BN4(0)
      };
    }
    if (isActiveBin) {
      return {
        binId,
        xAmountBpsOfTotal: xActiveBinBps,
        yAmountBpsOfTotal: yActiveBinBps
      };
    }
  });
}
function calculateBidAskDistribution(activeBin, binIds) {
  const smallestBin = Math.min(...binIds);
  const largestBin = Math.max(...binIds);
  const rightOnly = activeBin < smallestBin;
  const leftOnly = activeBin > largestBin;
  const gaussian2 = buildGaussianFromBins(activeBin, binIds);
  const allocations = generateBinLiquidityAllocation(gaussian2, binIds, true);
  if (rightOnly) {
    const { bpsAllocations, pLoss } = computeAllocationBps(allocations);
    const binDistributions = binIds.map((bid, idx2) => ({
      binId: bid,
      xAmountBpsOfTotal: bpsAllocations[idx2],
      yAmountBpsOfTotal: new BN4(0)
    }));
    const idx = binDistributions.length - 1;
    binDistributions[idx].xAmountBpsOfTotal = binDistributions[idx].xAmountBpsOfTotal.add(pLoss);
    return binDistributions;
  }
  if (leftOnly) {
    const { bpsAllocations, pLoss } = computeAllocationBps(allocations);
    const binDistributions = binIds.map((bid, idx) => ({
      binId: bid,
      xAmountBpsOfTotal: new BN4(0),
      yAmountBpsOfTotal: bpsAllocations[idx]
    }));
    binDistributions[0].yAmountBpsOfTotal = binDistributions[0].yAmountBpsOfTotal.add(pLoss);
    return binDistributions;
  }
  const [totalXAllocation, totalYAllocation] = allocations.reduce(
    ([xAcc, yAcc], allocation, idx) => {
      const binId = binIds[idx];
      if (binId > activeBin) {
        return [xAcc + allocation, yAcc];
      } else if (binId < activeBin) {
        return [xAcc, yAcc + allocation];
      } else {
        const half = allocation / 2;
        return [xAcc + half, yAcc + half];
      }
    },
    [0, 0]
  );
  const [normXAllocations, normYAllocations] = allocations.reduce(
    ([xAllocations, yAllocations], allocation, idx) => {
      const binId = binIds[idx];
      if (binId > activeBin) {
        const distX = new BN4(allocation * 1e4 / totalXAllocation);
        xAllocations.push(distX);
      }
      if (binId < activeBin) {
        const distY = new BN4(allocation * 1e4 / totalYAllocation);
        yAllocations.push(distY);
      }
      if (binId == activeBin) {
        const half = allocation / 2;
        const distX = new BN4(half * 1e4 / totalXAllocation);
        const distY = new BN4(half * 1e4 / totalYAllocation);
        xAllocations.push(distX);
        yAllocations.push(distY);
      }
      return [xAllocations, yAllocations];
    },
    [[], []]
  );
  const totalXNormAllocations = normXAllocations.reduce(
    (acc, v) => acc.add(v),
    new BN4(0)
  );
  const totalYNormAllocations = normYAllocations.reduce(
    (acc, v) => acc.add(v),
    new BN4(0)
  );
  const xPLoss = new BN4(1e4).sub(totalXNormAllocations);
  const yPLoss = new BN4(1e4).sub(totalYNormAllocations);
  const distributions = binIds.map((binId) => {
    if (binId === activeBin) {
      return {
        binId,
        xAmountBpsOfTotal: normXAllocations.shift(),
        yAmountBpsOfTotal: normYAllocations.shift()
      };
    }
    if (binId > activeBin) {
      return {
        binId,
        xAmountBpsOfTotal: normXAllocations.shift(),
        yAmountBpsOfTotal: new BN4(0)
      };
    }
    if (binId < activeBin) {
      return {
        binId,
        xAmountBpsOfTotal: new BN4(0),
        yAmountBpsOfTotal: normYAllocations.shift()
      };
    }
  });
  if (!yPLoss.isZero()) {
    distributions[0].yAmountBpsOfTotal = distributions[0].yAmountBpsOfTotal.add(yPLoss);
  }
  if (!xPLoss.isZero()) {
    const last = distributions.length - 1;
    distributions[last].xAmountBpsOfTotal = distributions[last].xAmountBpsOfTotal.add(xPLoss);
  }
  return distributions;
}
function calculateNormalDistribution(activeBin, binIds) {
  const smallestBin = Math.min(...binIds);
  const largestBin = Math.max(...binIds);
  const rightOnly = activeBin < smallestBin;
  const leftOnly = activeBin > largestBin;
  const gaussian2 = buildGaussianFromBins(activeBin, binIds);
  const allocations = generateBinLiquidityAllocation(gaussian2, binIds, false);
  if (rightOnly) {
    const { bpsAllocations, pLoss } = computeAllocationBps(allocations);
    const binDistributions = binIds.map((bid, idx) => ({
      binId: bid,
      xAmountBpsOfTotal: bpsAllocations[idx],
      yAmountBpsOfTotal: new BN4(0)
    }));
    binDistributions[0].xAmountBpsOfTotal = binDistributions[0].xAmountBpsOfTotal.add(pLoss);
    return binDistributions;
  }
  if (leftOnly) {
    const { bpsAllocations, pLoss } = computeAllocationBps(allocations);
    const binDistributions = binIds.map((bid, idx2) => ({
      binId: bid,
      xAmountBpsOfTotal: new BN4(0),
      yAmountBpsOfTotal: bpsAllocations[idx2]
    }));
    const idx = binDistributions.length - 1;
    binDistributions[idx].yAmountBpsOfTotal = binDistributions[idx].yAmountBpsOfTotal.add(pLoss);
    return binDistributions;
  }
  const [totalXAllocation, totalYAllocation] = allocations.reduce(
    ([xAcc, yAcc], allocation, idx) => {
      const binId = binIds[idx];
      if (binId > activeBin) {
        return [xAcc + allocation, yAcc];
      } else if (binId < activeBin) {
        return [xAcc, yAcc + allocation];
      } else {
        const half = allocation / 2;
        return [xAcc + half, yAcc + half];
      }
    },
    [0, 0]
  );
  const [normXAllocations, normYAllocations] = allocations.reduce(
    ([xAllocations, yAllocations], allocation, idx) => {
      const binId = binIds[idx];
      if (binId > activeBin) {
        const distX = new BN4(allocation * 1e4 / totalXAllocation);
        xAllocations.push(distX);
      }
      if (binId < activeBin) {
        const distY = new BN4(allocation * 1e4 / totalYAllocation);
        yAllocations.push(distY);
      }
      return [xAllocations, yAllocations];
    },
    [[], []]
  );
  const normXActiveBinAllocation = normXAllocations.reduce(
    (maxBps, bps) => maxBps.sub(bps),
    new BN4(1e4)
  );
  const normYActiveBinAllocation = normYAllocations.reduce(
    (maxBps, bps) => maxBps.sub(bps),
    new BN4(1e4)
  );
  return binIds.map((binId) => {
    if (binId === activeBin) {
      return {
        binId,
        xAmountBpsOfTotal: normXActiveBinAllocation,
        yAmountBpsOfTotal: normYActiveBinAllocation
      };
    }
    if (binId > activeBin) {
      return {
        binId,
        xAmountBpsOfTotal: normXAllocations.shift(),
        yAmountBpsOfTotal: new BN4(0)
      };
    }
    if (binId < activeBin) {
      return {
        binId,
        xAmountBpsOfTotal: new BN4(0),
        yAmountBpsOfTotal: normYAllocations.shift()
      };
    }
  });
}
function fromWeightDistributionToAmountOneSide(amount, distributions, binStep, activeId, depositForY) {
  if (depositForY) {
    return toAmountBidSide(activeId, amount, distributions);
  } else {
    return toAmountAskSide(activeId, binStep, amount, distributions);
  }
}
function fromWeightDistributionToAmount(amountX, amountY, distributions, binStep, activeId, amountXInActiveBin, amountYInActiveBin) {
  var distributions = distributions.sort((n1, n2) => {
    return n1.binId - n2.binId;
  });
  if (distributions.length == 0) {
    return [];
  }
  if (activeId > distributions[distributions.length - 1].binId) {
    let amounts = toAmountBidSide(activeId, amountY, distributions);
    return amounts.map((bin) => {
      return {
        binId: bin.binId,
        amountX: new BN4(0),
        amountY: new BN4(bin.amount.toString())
      };
    });
  }
  if (activeId < distributions[0].binId) {
    let amounts = toAmountAskSide(activeId, binStep, amountX, distributions);
    return amounts.map((bin) => {
      return {
        binId: bin.binId,
        amountX: new BN4(bin.amount.toString()),
        amountY: new BN4(0)
      };
    });
  }
  return toAmountBothSide(activeId, binStep, amountX, amountY, amountXInActiveBin, amountYInActiveBin, distributions);
}

// src/dlmm/helpers/math.ts
function mulShr(x, y, offset, rounding) {
  const denominator = new BN5(1).shln(offset);
  return mulDiv(x, y, denominator, rounding);
}
function shlDiv(x, y, offset, rounding) {
  const scale = new BN5(1).shln(offset);
  return mulDiv(x, scale, y, rounding);
}
function mulDiv(x, y, denominator, rounding) {
  const { div, mod } = x.mul(y).divmod(denominator);
  if (rounding == 0 /* Up */ && !mod.isZero()) {
    return div.add(new BN5(1));
  }
  return div;
}
function computeBaseFactorFromFeeBps(binStep, feeBps) {
  const U16_MAX = 65535;
  const computedBaseFactor = feeBps.toNumber() * BASIS_POINT_MAX / binStep.toNumber();
  const computedBaseFactorFloor = Math.floor(computedBaseFactor);
  if (computedBaseFactor != computedBaseFactorFloor) {
    if (computedBaseFactorFloor >= U16_MAX) {
      throw "base factor for the give fee bps overflow u16";
    }
    if (computedBaseFactorFloor == 0) {
      throw "base factor for the give fee bps underflow";
    }
    if (computedBaseFactor % 1 != 0) {
      throw "couldn't compute base factor for the exact fee bps";
    }
  }
  return new BN5(computedBaseFactor);
}
function getQPriceFromId(binId, binStep) {
  const bps = binStep.shln(SCALE_OFFSET).div(new BN5(BASIS_POINT_MAX));
  const base = ONE.add(bps);
  return pow(base, binId);
}
function findSwappableMinMaxBinId(binStep) {
  const base = 1 + binStep.toNumber() / BASIS_POINT_MAX;
  const maxQPriceSupported = new Decimal3("18446744073709551615");
  const n = maxQPriceSupported.log(10).div(new Decimal3(base).log(10)).floor();
  let minBinId = new BN5(n.neg().toString());
  let maxBinId = new BN5(n.toString());
  let minQPrice = new BN5(1);
  let maxQPrice = new BN5("340282366920938463463374607431768211455");
  while (true) {
    const qPrice = getQPriceFromId(minBinId, binStep);
    if (qPrice.gt(minQPrice) && !qPrice.isZero()) {
      break;
    } else {
      minBinId = minBinId.add(new BN5(1));
    }
  }
  while (true) {
    const qPrice = getQPriceFromId(maxBinId, binStep);
    if (qPrice.lt(maxQPrice) && !qPrice.isZero()) {
      break;
    } else {
      maxBinId = maxBinId.sub(new BN5(1));
    }
  }
  return {
    minBinId,
    maxBinId
  };
}
function getC(amount, binStep, binId, baseTokenDecimal, quoteTokenDecimal, minPrice, maxPrice, k) {
  const currentPricePerLamport = new Decimal3(1 + binStep / 1e4).pow(
    binId.toNumber()
  );
  const currentPricePerToken = currentPricePerLamport.mul(
    new Decimal3(10 ** (baseTokenDecimal - quoteTokenDecimal))
  );
  const priceRange = maxPrice.sub(minPrice);
  const currentPriceDeltaFromMin = currentPricePerToken.sub(
    new Decimal3(minPrice)
  );
  const c = new Decimal3(amount.toString()).mul(
    currentPriceDeltaFromMin.div(priceRange).pow(k)
  );
  return c.floor();
}
function distributeAmountToCompressedBinsByRatio(compressedBinAmount, uncompressedAmount, multiplier, binCapAmount) {
  const newCompressedBinAmount = /* @__PURE__ */ new Map();
  let totalCompressedAmount = new BN5(0);
  for (const compressedAmount of compressedBinAmount.values()) {
    totalCompressedAmount = totalCompressedAmount.add(compressedAmount);
  }
  let totalDepositedAmount = new BN5(0);
  for (const [binId, compressedAmount] of compressedBinAmount.entries()) {
    const depositAmount = compressedAmount.mul(uncompressedAmount).div(totalCompressedAmount);
    let compressedDepositAmount = depositAmount.div(multiplier);
    let newCompressedAmount = compressedAmount.add(compressedDepositAmount);
    if (newCompressedAmount.gt(binCapAmount)) {
      compressedDepositAmount = compressedDepositAmount.sub(
        newCompressedAmount.sub(binCapAmount)
      );
      newCompressedAmount = binCapAmount;
    }
    newCompressedBinAmount.set(binId, newCompressedAmount);
    totalDepositedAmount = totalDepositedAmount.add(
      compressedDepositAmount.mul(multiplier)
    );
  }
  const loss = uncompressedAmount.sub(totalDepositedAmount);
  return {
    newCompressedBinAmount,
    loss
  };
}
function getPositionCount(minBinId, maxBinId) {
  const binDelta = maxBinId.sub(minBinId);
  const positionCount = binDelta.div(MAX_BIN_PER_POSITION);
  return positionCount.add(new BN5(1));
}
function compressBinAmount(binAmount, multiplier) {
  const compressedBinAmount = /* @__PURE__ */ new Map();
  let totalAmount = new BN5(0);
  let compressionLoss = new BN5(0);
  for (const [binId, amount] of binAmount) {
    totalAmount = totalAmount.add(amount);
    const compressedAmount = amount.div(multiplier);
    compressedBinAmount.set(binId, compressedAmount);
    let loss = amount.sub(compressedAmount.mul(multiplier));
    compressionLoss = compressionLoss.add(loss);
  }
  return {
    compressedBinAmount,
    compressionLoss
  };
}
function generateAmountForBinRange(amount, binStep, tokenXDecimal, tokenYDecimal, minBinId, maxBinId, k) {
  const toTokenMultiplier = new Decimal3(10 ** (tokenXDecimal - tokenYDecimal));
  const minPrice = getPriceOfBinByBinId(minBinId.toNumber(), binStep).mul(
    toTokenMultiplier
  );
  const maxPrice = getPriceOfBinByBinId(maxBinId.toNumber(), binStep).mul(
    toTokenMultiplier
  );
  const binAmounts = /* @__PURE__ */ new Map();
  for (let i = minBinId.toNumber(); i < maxBinId.toNumber(); i++) {
    const binAmount = generateBinAmount(
      amount,
      binStep,
      new BN5(i),
      tokenXDecimal,
      tokenYDecimal,
      minPrice,
      maxPrice,
      k
    );
    binAmounts.set(i, binAmount);
  }
  return binAmounts;
}
function generateBinAmount(amount, binStep, binId, tokenXDecimal, tokenYDecimal, minPrice, maxPrice, k) {
  const c1 = getC(
    amount,
    binStep,
    binId.add(new BN5(1)),
    tokenXDecimal,
    tokenYDecimal,
    minPrice,
    maxPrice,
    k
  );
  const c0 = getC(
    amount,
    binStep,
    binId,
    tokenXDecimal,
    tokenYDecimal,
    minPrice,
    maxPrice,
    k
  );
  return new BN5(c1.sub(c0).floor().toString());
}

// src/dlmm/helpers/derive.ts
import { PublicKey as PublicKey2 } from "@solana/web3.js";
function sortTokenMints(tokenX, tokenY) {
  const [minKey, maxKey] = tokenX.toBuffer().compare(tokenY.toBuffer()) == 1 ? [tokenY, tokenX] : [tokenX, tokenY];
  return [minKey, maxKey];
}
function derivePresetParameter(binStep, programId) {
  return PublicKey2.findProgramAddressSync(
    [
      Buffer.from("preset_parameter"),
      new Uint8Array(binStep.toArrayLike(Buffer, "le", 2))
    ],
    programId
  );
}
function derivePresetParameter2(binStep, baseFactor, programId) {
  return PublicKey2.findProgramAddressSync(
    [
      Buffer.from("preset_parameter"),
      new Uint8Array(binStep.toArrayLike(Buffer, "le", 2)),
      new Uint8Array(baseFactor.toArrayLike(Buffer, "le", 2))
    ],
    programId
  );
}
function deriveLbPair2(tokenX, tokenY, binStep, baseFactor, programId) {
  const [minKey, maxKey] = sortTokenMints(tokenX, tokenY);
  return PublicKey2.findProgramAddressSync(
    [
      minKey.toBuffer(),
      maxKey.toBuffer(),
      new Uint8Array(binStep.toArrayLike(Buffer, "le", 2)),
      new Uint8Array(baseFactor.toArrayLike(Buffer, "le", 2))
    ],
    programId
  );
}
function deriveLbPair(tokenX, tokenY, binStep, programId) {
  const [minKey, maxKey] = sortTokenMints(tokenX, tokenY);
  return PublicKey2.findProgramAddressSync(
    [
      minKey.toBuffer(),
      maxKey.toBuffer(),
      new Uint8Array(binStep.toArrayLike(Buffer, "le", 2))
    ],
    programId
  );
}
function derivePermissionLbPair(baseKey, tokenX, tokenY, binStep, programId) {
  const [minKey, maxKey] = sortTokenMints(tokenX, tokenY);
  return PublicKey2.findProgramAddressSync(
    [
      baseKey.toBuffer(),
      minKey.toBuffer(),
      maxKey.toBuffer(),
      new Uint8Array(binStep.toArrayLike(Buffer, "le", 2))
    ],
    programId
  );
}
function deriveOracle(lbPair, programId) {
  return PublicKey2.findProgramAddressSync(
    [Buffer.from("oracle"), lbPair.toBytes()],
    programId
  );
}
function derivePosition(lbPair, base, lowerBinId, width, programId) {
  let lowerBinIdBytes;
  if (lowerBinId.isNeg()) {
    lowerBinIdBytes = new Uint8Array(
      lowerBinId.toTwos(32).toArrayLike(Buffer, "le", 4)
    );
  } else {
    lowerBinIdBytes = new Uint8Array(lowerBinId.toArrayLike(Buffer, "le", 4));
  }
  return PublicKey2.findProgramAddressSync(
    [
      Buffer.from("position"),
      lbPair.toBuffer(),
      base.toBuffer(),
      lowerBinIdBytes,
      new Uint8Array(width.toBuffer("le", 4))
    ],
    programId
  );
}
function deriveBinArray(lbPair, index, programId) {
  let binArrayBytes;
  if (index.isNeg()) {
    binArrayBytes = new Uint8Array(
      index.toTwos(64).toArrayLike(Buffer, "le", 8)
    );
  } else {
    binArrayBytes = new Uint8Array(index.toArrayLike(Buffer, "le", 8));
  }
  return PublicKey2.findProgramAddressSync(
    [Buffer.from("bin_array"), lbPair.toBytes(), binArrayBytes],
    programId
  );
}
function deriveReserve(token, lbPair, programId) {
  return PublicKey2.findProgramAddressSync(
    [lbPair.toBuffer(), token.toBuffer()],
    programId
  );
}

// src/dlmm/helpers/binArray.ts
import { BN as BN6 } from "@coral-xyz/anchor";
import { PublicKey as PublicKey3 } from "@solana/web3.js";
function internalBitmapRange() {
  const lowerBinArrayIndex = BIN_ARRAY_BITMAP_SIZE.neg();
  const upperBinArrayIndex = BIN_ARRAY_BITMAP_SIZE.sub(new BN6(1));
  return [lowerBinArrayIndex, upperBinArrayIndex];
}
function buildBitmapFromU64Arrays(u64Arrays, type) {
  const buffer = Buffer.concat(
    u64Arrays.map((b) => {
      return b.toArrayLike(Buffer, "le", 8);
    })
  );
  return new BN6(buffer, "le");
}
function bitmapTypeDetail(type) {
  if (type == 0 /* U1024 */) {
    return {
      bits: 1024,
      bytes: 1024 / 8
    };
  } else {
    return {
      bits: 512,
      bytes: 512 / 8
    };
  }
}
function mostSignificantBit(number, bitLength) {
  const highestIndex = bitLength - 1;
  if (number.isZero()) {
    return null;
  }
  for (let i = highestIndex; i >= 0; i--) {
    if (number.testn(i)) {
      return highestIndex - i;
    }
  }
  return null;
}
function leastSignificantBit(number, bitLength) {
  if (number.isZero()) {
    return null;
  }
  for (let i = 0; i < bitLength; i++) {
    if (number.testn(i)) {
      return i;
    }
  }
  return null;
}
function extensionBitmapRange() {
  return [
    BIN_ARRAY_BITMAP_SIZE.neg().mul(
      EXTENSION_BINARRAY_BITMAP_SIZE.add(new BN6(1))
    ),
    BIN_ARRAY_BITMAP_SIZE.mul(
      EXTENSION_BINARRAY_BITMAP_SIZE.add(new BN6(1))
    ).sub(new BN6(1))
  ];
}
function findSetBit(startIndex, endIndex, binArrayBitmapExtension) {
  const getBinArrayOffset = (binArrayIndex) => {
    return binArrayIndex.gt(new BN6(0)) ? binArrayIndex.mod(BIN_ARRAY_BITMAP_SIZE) : binArrayIndex.add(new BN6(1)).neg().mod(BIN_ARRAY_BITMAP_SIZE);
  };
  const getBitmapOffset = (binArrayIndex) => {
    return binArrayIndex.gt(new BN6(0)) ? binArrayIndex.div(BIN_ARRAY_BITMAP_SIZE).sub(new BN6(1)) : binArrayIndex.add(new BN6(1)).neg().div(BIN_ARRAY_BITMAP_SIZE).sub(new BN6(1));
  };
  if (startIndex <= endIndex) {
    for (let i = startIndex; i <= endIndex; i++) {
      const binArrayOffset = getBinArrayOffset(new BN6(i)).toNumber();
      const bitmapOffset = getBitmapOffset(new BN6(i)).toNumber();
      const bitmapChunks = i > 0 ? binArrayBitmapExtension.positiveBinArrayBitmap[bitmapOffset] : binArrayBitmapExtension.negativeBinArrayBitmap[bitmapOffset];
      const bitmap = buildBitmapFromU64Arrays(bitmapChunks, 1 /* U512 */);
      if (bitmap.testn(binArrayOffset)) {
        return i;
      }
    }
  } else {
    for (let i = startIndex; i >= endIndex; i--) {
      const binArrayOffset = getBinArrayOffset(new BN6(i)).toNumber();
      const bitmapOffset = getBitmapOffset(new BN6(i)).toNumber();
      const bitmapChunks = i > 0 ? binArrayBitmapExtension.positiveBinArrayBitmap[bitmapOffset] : binArrayBitmapExtension.negativeBinArrayBitmap[bitmapOffset];
      const bitmap = buildBitmapFromU64Arrays(bitmapChunks, 1 /* U512 */);
      if (bitmap.testn(binArrayOffset)) {
        return i;
      }
    }
  }
  return null;
}
function isOverflowDefaultBinArrayBitmap(binArrayIndex) {
  const [minBinArrayIndex, maxBinArrayIndex] = internalBitmapRange();
  return binArrayIndex.gt(maxBinArrayIndex) || binArrayIndex.lt(minBinArrayIndex);
}
function deriveBinArrayBitmapExtension(lbPair, programId) {
  return PublicKey3.findProgramAddressSync(
    [Buffer.from("bitmap"), lbPair.toBytes()],
    programId
  );
}
function binIdToBinArrayIndex(binId) {
  const { div: idx, mod } = binId.divmod(MAX_BIN_ARRAY_SIZE);
  return binId.isNeg() && !mod.isZero() ? idx.sub(new BN6(1)) : idx;
}
function getBinArrayLowerUpperBinId(binArrayIndex) {
  const lowerBinId = binArrayIndex.mul(MAX_BIN_ARRAY_SIZE);
  const upperBinId = lowerBinId.add(MAX_BIN_ARRAY_SIZE).sub(new BN6(1));
  return [lowerBinId, upperBinId];
}
function isBinIdWithinBinArray(activeId, binArrayIndex) {
  const [lowerBinId, upperBinId] = getBinArrayLowerUpperBinId(binArrayIndex);
  return activeId.gte(lowerBinId) && activeId.lte(upperBinId);
}
function getBinFromBinArray(binId, binArray) {
  const [lowerBinId, upperBinId] = getBinArrayLowerUpperBinId(binArray.index);
  let index = 0;
  if (binId > 0) {
    index = binId - lowerBinId.toNumber();
  } else {
    const delta = upperBinId.toNumber() - binId;
    index = MAX_BIN_ARRAY_SIZE.toNumber() - delta - 1;
  }
  return binArray.bins[index];
}
function findNextBinArrayIndexWithLiquidity(swapForY, activeId, lbPairState, binArrayBitmapExtension) {
  const [lowerBinArrayIndex, upperBinArrayIndex] = internalBitmapRange();
  let startBinArrayIndex = binIdToBinArrayIndex(activeId);
  while (true) {
    if (isOverflowDefaultBinArrayBitmap(startBinArrayIndex)) {
      if (binArrayBitmapExtension === null) {
        return null;
      }
      const [minBinArrayIndex, maxBinArrayIndex] = extensionBitmapRange();
      if (startBinArrayIndex.isNeg()) {
        if (swapForY) {
          const binArrayIndex = findSetBit(
            startBinArrayIndex.toNumber(),
            minBinArrayIndex.toNumber(),
            binArrayBitmapExtension
          );
          if (binArrayIndex !== null) {
            return new BN6(binArrayIndex);
          } else {
            return null;
          }
        } else {
          const binArrayIndex = findSetBit(
            startBinArrayIndex.toNumber(),
            BIN_ARRAY_BITMAP_SIZE.neg().sub(new BN6(1)).toNumber(),
            binArrayBitmapExtension
          );
          if (binArrayIndex !== null) {
            return new BN6(binArrayIndex);
          } else {
            startBinArrayIndex = BIN_ARRAY_BITMAP_SIZE.neg();
          }
        }
      } else {
        if (swapForY) {
          const binArrayIndex = findSetBit(
            startBinArrayIndex.toNumber(),
            BIN_ARRAY_BITMAP_SIZE.toNumber(),
            binArrayBitmapExtension
          );
          if (binArrayIndex !== null) {
            return new BN6(binArrayIndex);
          } else {
            startBinArrayIndex = BIN_ARRAY_BITMAP_SIZE.sub(new BN6(1));
          }
        } else {
          const binArrayIndex = findSetBit(
            startBinArrayIndex.toNumber(),
            maxBinArrayIndex.toNumber(),
            binArrayBitmapExtension
          );
          if (binArrayIndex !== null) {
            return new BN6(binArrayIndex);
          } else {
            return null;
          }
        }
      }
    } else {
      const bitmapType = 0 /* U1024 */;
      const bitmapDetail = bitmapTypeDetail(bitmapType);
      const offset = startBinArrayIndex.add(BIN_ARRAY_BITMAP_SIZE);
      const bitmap = buildBitmapFromU64Arrays(
        lbPairState.binArrayBitmap,
        bitmapType
      );
      if (swapForY) {
        const upperBitRange = new BN6(bitmapDetail.bits - 1).sub(offset);
        const croppedBitmap = bitmap.shln(upperBitRange.toNumber());
        const msb = mostSignificantBit(croppedBitmap, bitmapDetail.bits);
        if (msb !== null) {
          return startBinArrayIndex.sub(new BN6(msb));
        } else {
          startBinArrayIndex = lowerBinArrayIndex.sub(new BN6(1));
        }
      } else {
        const lowerBitRange = offset;
        const croppedBitmap = bitmap.shrn(lowerBitRange.toNumber());
        const lsb = leastSignificantBit(croppedBitmap, bitmapDetail.bits);
        if (lsb !== null) {
          return startBinArrayIndex.add(new BN6(lsb));
        } else {
          startBinArrayIndex = upperBinArrayIndex.add(new BN6(1));
        }
      }
    }
  }
}
function findNextBinArrayWithLiquidity(swapForY, activeBinId, lbPairState, binArrayBitmapExtension, binArrays) {
  const nearestBinArrayIndexWithLiquidity = findNextBinArrayIndexWithLiquidity(
    swapForY,
    activeBinId,
    lbPairState,
    binArrayBitmapExtension
  );
  if (nearestBinArrayIndexWithLiquidity == null) {
    return null;
  }
  const binArrayAccount = binArrays.find(
    (ba) => ba.account.index.eq(nearestBinArrayIndexWithLiquidity)
  );
  if (!binArrayAccount) {
    throw new Error("Bin array not found based on indexing");
  }
  return binArrayAccount;
}
function getBinArraysRequiredByPositionRange(pair, fromBinId, toBinId, programId) {
  const [minBinId, maxBinId] = fromBinId.lt(toBinId) ? [fromBinId, toBinId] : [toBinId, fromBinId];
  const positionCount = getPositionCount(minBinId, maxBinId);
  const binArrays = /* @__PURE__ */ new Map();
  for (let i = 0; i < positionCount.toNumber(); i++) {
    const lowerBinId = minBinId.add(MAX_BIN_PER_POSITION.mul(new BN6(i)));
    const lowerBinArrayIndex = binIdToBinArrayIndex(lowerBinId);
    const upperBinArrayIndex = lowerBinArrayIndex.add(new BN6(1));
    const [lowerBinArray] = deriveBinArray(pair, lowerBinArrayIndex, programId);
    const [upperBinArray] = deriveBinArray(pair, upperBinArrayIndex, programId);
    binArrays.set(lowerBinArray.toBase58(), lowerBinArrayIndex);
    binArrays.set(upperBinArray.toBase58(), upperBinArrayIndex);
  }
  return Array.from(binArrays, ([key, index]) => ({
    key: new PublicKey3(key),
    index
  }));
}

// src/dlmm/helpers/fee.ts
import { BN as BN7 } from "@coral-xyz/anchor";
function getBaseFee(binStep, sParameter) {
  return new BN7(sParameter.baseFactor).mul(new BN7(binStep)).mul(new BN7(10));
}
function getVariableFee(binStep, sParameter, vParameter) {
  if (sParameter.variableFeeControl > 0) {
    const square_vfa_bin = new BN7(vParameter.volatilityAccumulator).mul(new BN7(binStep)).pow(new BN7(2));
    const v_fee = new BN7(sParameter.variableFeeControl).mul(square_vfa_bin);
    return v_fee.add(new BN7(99999999999)).div(new BN7(1e11));
  }
  return new BN7(0);
}
function getTotalFee(binStep, sParameter, vParameter) {
  const totalFee = getBaseFee(binStep, sParameter).add(
    getVariableFee(binStep, sParameter, vParameter)
  );
  return totalFee.gt(MAX_FEE_RATE) ? MAX_FEE_RATE : totalFee;
}
function computeFee(binStep, sParameter, vParameter, inAmount) {
  const totalFee = getTotalFee(binStep, sParameter, vParameter);
  const denominator = FEE_PRECISION.sub(totalFee);
  return inAmount.mul(totalFee).add(denominator).sub(new BN7(1)).div(denominator);
}
function computeFeeFromAmount(binStep, sParameter, vParameter, inAmountWithFees) {
  const totalFee = getTotalFee(binStep, sParameter, vParameter);
  return inAmountWithFees.mul(totalFee).add(FEE_PRECISION.sub(new BN7(1))).div(FEE_PRECISION);
}
function computeProtocolFee(feeAmount, sParameter) {
  return feeAmount.mul(new BN7(sParameter.protocolShare)).div(new BN7(BASIS_POINT_MAX));
}
function swapExactOutQuoteAtBin(bin, binStep, sParameter, vParameter, outAmount, swapForY) {
  if (swapForY && bin.amountY.isZero()) {
    return {
      amountIn: new BN7(0),
      amountOut: new BN7(0),
      fee: new BN7(0),
      protocolFee: new BN7(0)
    };
  }
  if (!swapForY && bin.amountX.isZero()) {
    return {
      amountIn: new BN7(0),
      amountOut: new BN7(0),
      fee: new BN7(0),
      protocolFee: new BN7(0)
    };
  }
  let maxAmountOut;
  let maxAmountIn;
  if (swapForY) {
    maxAmountOut = bin.amountY;
    maxAmountIn = shlDiv(bin.amountY, bin.price, SCALE_OFFSET, 0 /* Up */);
  } else {
    maxAmountOut = bin.amountX;
    maxAmountIn = mulShr(bin.amountX, bin.price, SCALE_OFFSET, 0 /* Up */);
  }
  if (outAmount.gte(maxAmountOut)) {
    const maxFee = computeFee(binStep, sParameter, vParameter, maxAmountIn);
    const protocolFee = computeProtocolFee(maxFee, sParameter);
    return {
      amountIn: maxAmountIn,
      amountOut: maxAmountOut,
      fee: maxFee,
      protocolFee
    };
  } else {
    const amountIn = getAmountIn(outAmount, bin.price, swapForY);
    const fee = computeFee(binStep, sParameter, vParameter, amountIn);
    const protocolFee = computeProtocolFee(fee, sParameter);
    return {
      amountIn,
      amountOut: outAmount,
      fee,
      protocolFee
    };
  }
}
function swapExactInQuoteAtBin(bin, binStep, sParameter, vParameter, inAmount, swapForY) {
  if (swapForY && bin.amountY.isZero()) {
    return {
      amountIn: new BN7(0),
      amountOut: new BN7(0),
      fee: new BN7(0),
      protocolFee: new BN7(0)
    };
  }
  if (!swapForY && bin.amountX.isZero()) {
    return {
      amountIn: new BN7(0),
      amountOut: new BN7(0),
      fee: new BN7(0),
      protocolFee: new BN7(0)
    };
  }
  let maxAmountOut;
  let maxAmountIn;
  if (swapForY) {
    maxAmountOut = bin.amountY;
    maxAmountIn = shlDiv(bin.amountY, bin.price, SCALE_OFFSET, 0 /* Up */);
  } else {
    maxAmountOut = bin.amountX;
    maxAmountIn = mulShr(bin.amountX, bin.price, SCALE_OFFSET, 0 /* Up */);
  }
  const maxFee = computeFee(binStep, sParameter, vParameter, maxAmountIn);
  maxAmountIn = maxAmountIn.add(maxFee);
  let amountInWithFees;
  let amountOut;
  let fee;
  let protocolFee;
  if (inAmount.gt(maxAmountIn)) {
    amountInWithFees = maxAmountIn;
    amountOut = maxAmountOut;
    fee = maxFee;
    protocolFee = computeProtocolFee(maxFee, sParameter);
  } else {
    fee = computeFeeFromAmount(binStep, sParameter, vParameter, inAmount);
    const amountInAfterFee = inAmount.sub(fee);
    const computedOutAmount = getOutAmount(bin, amountInAfterFee, swapForY);
    amountOut = computedOutAmount.gt(maxAmountOut) ? maxAmountOut : computedOutAmount;
    protocolFee = computeProtocolFee(fee, sParameter);
    amountInWithFees = inAmount;
  }
  return {
    amountIn: amountInWithFees,
    amountOut,
    fee,
    protocolFee
  };
}
function getAmountIn(amountOut, price, swapForY) {
  if (swapForY) {
    return shlDiv(amountOut, price, SCALE_OFFSET, 0 /* Up */);
  } else {
    return mulShr(amountOut, price, SCALE_OFFSET, 0 /* Up */);
  }
}

// src/dlmm/helpers/strategy.ts
import { BN as BN8 } from "@coral-xyz/anchor";
var DEFAULT_MAX_WEIGHT = 2e3;
var DEFAULT_MIN_WEIGHT = 200;
function toWeightSpotBalanced(minBinId, maxBinId) {
  let distributions = [];
  for (let i = minBinId; i <= maxBinId; i++) {
    distributions.push({
      binId: i,
      weight: 1
    });
  }
  return distributions;
}
function toWeightDecendingOrder(minBinId, maxBinId) {
  let distributions = [];
  for (let i = minBinId; i <= maxBinId; i++) {
    distributions.push({
      binId: i,
      weight: maxBinId - i + 1
    });
  }
  return distributions;
}
function toWeightAscendingOrder(minBinId, maxBinId) {
  let distributions = [];
  for (let i = minBinId; i <= maxBinId; i++) {
    distributions.push({
      binId: i,
      weight: i - minBinId + 1
    });
  }
  return distributions;
}
function toWeightCurve(minBinId, maxBinId, activeId) {
  if (activeId < minBinId || activeId > maxBinId) {
    throw "Invalid strategy params";
  }
  let maxWeight = DEFAULT_MAX_WEIGHT;
  let minWeight = DEFAULT_MIN_WEIGHT;
  let diffWeight = maxWeight - minWeight;
  let diffMinWeight = activeId > minBinId ? Math.floor(diffWeight / (activeId - minBinId)) : 0;
  let diffMaxWeight = maxBinId > activeId ? Math.floor(diffWeight / (maxBinId - activeId)) : 0;
  let distributions = [];
  for (let i = minBinId; i <= maxBinId; i++) {
    if (i < activeId) {
      distributions.push({
        binId: i,
        weight: maxWeight - (activeId - i) * diffMinWeight
      });
    } else if (i > activeId) {
      distributions.push({
        binId: i,
        weight: maxWeight - (i - activeId) * diffMaxWeight
      });
    } else {
      distributions.push({
        binId: i,
        weight: maxWeight
      });
    }
  }
  return distributions;
}
function toWeightBidAsk(minBinId, maxBinId, activeId) {
  if (activeId < minBinId || activeId > maxBinId) {
    throw "Invalid strategy params";
  }
  let maxWeight = DEFAULT_MAX_WEIGHT;
  let minWeight = DEFAULT_MIN_WEIGHT;
  let diffWeight = maxWeight - minWeight;
  let diffMinWeight = activeId > minBinId ? Math.floor(diffWeight / (activeId - minBinId)) : 0;
  let diffMaxWeight = maxBinId > activeId ? Math.floor(diffWeight / (maxBinId - activeId)) : 0;
  let distributions = [];
  for (let i = minBinId; i <= maxBinId; i++) {
    if (i < activeId) {
      distributions.push({
        binId: i,
        weight: minWeight + (activeId - i) * diffMinWeight
      });
    } else if (i > activeId) {
      distributions.push({
        binId: i,
        weight: minWeight + (i - activeId) * diffMaxWeight
      });
    } else {
      distributions.push({
        binId: i,
        weight: minWeight
      });
    }
  }
  return distributions;
}
function toAmountsOneSideByStrategy(activeId, binStep, minBinId, maxBinId, amount, strategyType, depositForY) {
  let weights = [];
  switch (strategyType) {
    case 6 /* SpotBalanced */:
    case 7 /* CurveBalanced */:
    case 8 /* BidAskBalanced */:
    case 3 /* SpotImBalanced */:
    case 4 /* CurveImBalanced */:
    case 5 /* BidAskImBalanced */: {
      throw "Invalid Strategy Parameters";
    }
    case 0 /* SpotOneSide */: {
      weights = toWeightSpotBalanced(minBinId, maxBinId);
      break;
    }
    case 1 /* CurveOneSide */: {
      if (depositForY) {
        weights = toWeightAscendingOrder(minBinId, maxBinId);
      } else {
        weights = toWeightDecendingOrder(minBinId, maxBinId);
      }
      break;
    }
    case 2 /* BidAskOneSide */: {
      if (depositForY) {
        weights = toWeightDecendingOrder(minBinId, maxBinId);
      } else {
        weights = toWeightAscendingOrder(minBinId, maxBinId);
      }
      break;
    }
  }
  if (depositForY) {
    return toAmountBidSide(activeId, amount, weights);
  } else {
    return toAmountAskSide(activeId, binStep, amount, weights);
  }
}
function toAmountsBothSideByStrategy(activeId, binStep, minBinId, maxBinId, amountX, amountY, amountXInActiveBin, amountYInActiveBin, strategyType) {
  const isSingleSideX = amountY.isZero();
  switch (strategyType) {
    case 0 /* SpotOneSide */:
    case 1 /* CurveOneSide */:
    case 2 /* BidAskOneSide */: {
      throw "Invalid Strategy Parameters";
    }
    case 3 /* SpotImBalanced */: {
      if (activeId < minBinId || activeId > maxBinId) {
        const weights = toWeightSpotBalanced(minBinId, maxBinId);
        return toAmountBothSide(
          activeId,
          binStep,
          amountX,
          amountY,
          amountXInActiveBin,
          amountYInActiveBin,
          weights
        );
      }
      const amountsInBin = [];
      if (!isSingleSideX) {
        if (minBinId <= activeId) {
          const weights = toWeightSpotBalanced(minBinId, activeId);
          const amounts = toAmountBidSide(activeId, amountY, weights);
          for (let bin of amounts) {
            amountsInBin.push({
              binId: bin.binId,
              amountX: new BN8(0),
              amountY: bin.amount
            });
          }
        }
        if (activeId < maxBinId) {
          const weights = toWeightSpotBalanced(activeId + 1, maxBinId);
          const amounts = toAmountAskSide(activeId, binStep, amountX, weights);
          for (let bin of amounts) {
            amountsInBin.push({
              binId: bin.binId,
              amountX: bin.amount,
              amountY: new BN8(0)
            });
          }
        }
      } else {
        if (minBinId < activeId) {
          const weights = toWeightSpotBalanced(minBinId, activeId - 1);
          const amountsIntoBidSide = toAmountBidSide(
            activeId,
            amountY,
            weights
          );
          for (let bin of amountsIntoBidSide) {
            amountsInBin.push({
              binId: bin.binId,
              amountX: new BN8(0),
              amountY: bin.amount
            });
          }
        }
        if (activeId <= maxBinId) {
          const weights = toWeightSpotBalanced(activeId, maxBinId);
          const amountsIntoAskSide = toAmountAskSide(
            activeId,
            binStep,
            amountX,
            weights
          );
          for (let bin of amountsIntoAskSide) {
            amountsInBin.push({
              binId: bin.binId,
              amountX: bin.amount,
              amountY: new BN8(0)
            });
          }
        }
      }
      return amountsInBin;
    }
    case 4 /* CurveImBalanced */: {
      if (activeId < minBinId) {
        let weights = toWeightDecendingOrder(minBinId, maxBinId);
        return toAmountBothSide(
          activeId,
          binStep,
          amountX,
          amountY,
          amountXInActiveBin,
          amountYInActiveBin,
          weights
        );
      }
      if (activeId > maxBinId) {
        const weights = toWeightAscendingOrder(minBinId, maxBinId);
        return toAmountBothSide(
          activeId,
          binStep,
          amountX,
          amountY,
          amountXInActiveBin,
          amountYInActiveBin,
          weights
        );
      }
      const amountsInBin = [];
      if (!isSingleSideX) {
        if (minBinId <= activeId) {
          const weights = toWeightAscendingOrder(minBinId, activeId);
          const amounts = toAmountBidSide(activeId, amountY, weights);
          for (let bin of amounts) {
            amountsInBin.push({
              binId: bin.binId,
              amountX: new BN8(0),
              amountY: bin.amount
            });
          }
        }
        if (activeId < maxBinId) {
          const weights = toWeightDecendingOrder(activeId + 1, maxBinId);
          const amounts = toAmountAskSide(activeId, binStep, amountX, weights);
          for (let bin of amounts) {
            amountsInBin.push({
              binId: bin.binId,
              amountX: bin.amount,
              amountY: new BN8(0)
            });
          }
        }
      } else {
        if (minBinId < activeId) {
          const weights = toWeightAscendingOrder(minBinId, activeId - 1);
          const amountsIntoBidSide = toAmountBidSide(
            activeId,
            amountY,
            weights
          );
          for (let bin of amountsIntoBidSide) {
            amountsInBin.push({
              binId: bin.binId,
              amountX: new BN8(0),
              amountY: bin.amount
            });
          }
        }
        if (activeId <= maxBinId) {
          const weights = toWeightDecendingOrder(activeId, maxBinId);
          const amountsIntoAskSide = toAmountAskSide(
            activeId,
            binStep,
            amountX,
            weights
          );
          for (let bin of amountsIntoAskSide) {
            amountsInBin.push({
              binId: bin.binId,
              amountX: bin.amount,
              amountY: new BN8(0)
            });
          }
        }
      }
      return amountsInBin;
    }
    case 5 /* BidAskImBalanced */: {
      if (activeId < minBinId) {
        const weights = toWeightAscendingOrder(minBinId, maxBinId);
        return toAmountBothSide(
          activeId,
          binStep,
          amountX,
          amountY,
          amountXInActiveBin,
          amountYInActiveBin,
          weights
        );
      }
      if (activeId > maxBinId) {
        const weights = toWeightDecendingOrder(minBinId, maxBinId);
        return toAmountBothSide(
          activeId,
          binStep,
          amountX,
          amountY,
          amountXInActiveBin,
          amountYInActiveBin,
          weights
        );
      }
      const amountsInBin = [];
      if (!isSingleSideX) {
        if (minBinId <= activeId) {
          const weights = toWeightDecendingOrder(minBinId, activeId);
          const amounts = toAmountBidSide(activeId, amountY, weights);
          for (let bin of amounts) {
            amountsInBin.push({
              binId: bin.binId,
              amountX: new BN8(0),
              amountY: bin.amount
            });
          }
        }
        if (activeId < maxBinId) {
          const weights = toWeightAscendingOrder(activeId + 1, maxBinId);
          const amounts = toAmountAskSide(activeId, binStep, amountX, weights);
          for (let bin of amounts) {
            amountsInBin.push({
              binId: bin.binId,
              amountX: bin.amount,
              amountY: new BN8(0)
            });
          }
        }
      } else {
        if (minBinId < activeId) {
          const weights = toWeightDecendingOrder(minBinId, activeId - 1);
          const amountsIntoBidSide = toAmountBidSide(
            activeId,
            amountY,
            weights
          );
          for (let bin of amountsIntoBidSide) {
            amountsInBin.push({
              binId: bin.binId,
              amountX: new BN8(0),
              amountY: bin.amount
            });
          }
        }
        if (activeId <= maxBinId) {
          const weights = toWeightAscendingOrder(activeId, maxBinId);
          const amountsIntoAskSide = toAmountAskSide(
            activeId,
            binStep,
            amountX,
            weights
          );
          for (let bin of amountsIntoAskSide) {
            amountsInBin.push({
              binId: bin.binId,
              amountX: bin.amount,
              amountY: new BN8(0)
            });
          }
        }
      }
      return amountsInBin;
    }
    case 6 /* SpotBalanced */: {
      let weights = toWeightSpotBalanced(minBinId, maxBinId);
      return toAmountBothSide(
        activeId,
        binStep,
        amountX,
        amountY,
        amountXInActiveBin,
        amountYInActiveBin,
        weights
      );
    }
    case 7 /* CurveBalanced */: {
      let weights = toWeightCurve(minBinId, maxBinId, activeId);
      return toAmountBothSide(
        activeId,
        binStep,
        amountX,
        amountY,
        amountXInActiveBin,
        amountYInActiveBin,
        weights
      );
    }
    case 8 /* BidAskBalanced */: {
      let weights = toWeightBidAsk(minBinId, maxBinId, activeId);
      return toAmountBothSide(
        activeId,
        binStep,
        amountX,
        amountY,
        amountXInActiveBin,
        amountYInActiveBin,
        weights
      );
    }
  }
}
function autoFillYByStrategy(activeId, binStep, amountX, amountXInActiveBin, amountYInActiveBin, minBinId, maxBinId, strategyType) {
  switch (strategyType) {
    case 0 /* SpotOneSide */:
    case 1 /* CurveOneSide */:
    case 2 /* BidAskOneSide */:
    case 3 /* SpotImBalanced */:
    case 4 /* CurveImBalanced */:
    case 5 /* BidAskImBalanced */: {
      throw "Invalid Strategy Parameters";
    }
    case 6 /* SpotBalanced */: {
      let weights = toWeightSpotBalanced(minBinId, maxBinId);
      return autoFillYByWeight(
        activeId,
        binStep,
        amountX,
        amountXInActiveBin,
        amountYInActiveBin,
        weights
      );
    }
    case 7 /* CurveBalanced */: {
      let weights = toWeightCurve(minBinId, maxBinId, activeId);
      return autoFillYByWeight(
        activeId,
        binStep,
        amountX,
        amountXInActiveBin,
        amountYInActiveBin,
        weights
      );
    }
    case 8 /* BidAskBalanced */: {
      let weights = toWeightBidAsk(minBinId, maxBinId, activeId);
      return autoFillYByWeight(
        activeId,
        binStep,
        amountX,
        amountXInActiveBin,
        amountYInActiveBin,
        weights
      );
    }
  }
}
function autoFillXByStrategy(activeId, binStep, amountY, amountXInActiveBin, amountYInActiveBin, minBinId, maxBinId, strategyType) {
  switch (strategyType) {
    case 0 /* SpotOneSide */:
    case 1 /* CurveOneSide */:
    case 2 /* BidAskOneSide */:
    case 3 /* SpotImBalanced */:
    case 4 /* CurveImBalanced */:
    case 5 /* BidAskImBalanced */: {
      throw "Invalid Strategy Parameters";
    }
    case 6 /* SpotBalanced */: {
      let weights = toWeightSpotBalanced(minBinId, maxBinId);
      return autoFillXByWeight(
        activeId,
        binStep,
        amountY,
        amountXInActiveBin,
        amountYInActiveBin,
        weights
      );
    }
    case 7 /* CurveBalanced */: {
      let weights = toWeightCurve(minBinId, maxBinId, activeId);
      return autoFillXByWeight(
        activeId,
        binStep,
        amountY,
        amountXInActiveBin,
        amountYInActiveBin,
        weights
      );
    }
    case 8 /* BidAskBalanced */: {
      let weights = toWeightBidAsk(minBinId, maxBinId, activeId);
      return autoFillXByWeight(
        activeId,
        binStep,
        amountY,
        amountXInActiveBin,
        amountYInActiveBin,
        weights
      );
    }
  }
}
function toStrategyParameters({
  maxBinId,
  minBinId,
  strategyType,
  singleSidedX
}) {
  const parameters = [singleSidedX ? 1 : 0, ...new Array(63).fill(0)];
  switch (strategyType) {
    case 0 /* SpotOneSide */: {
      return {
        minBinId,
        maxBinId,
        strategyType: { spotOneSide: {} },
        parameteres: Buffer.from(parameters).toJSON().data
      };
    }
    case 1 /* CurveOneSide */: {
      return {
        minBinId,
        maxBinId,
        strategyType: { curveOneSide: {} },
        parameteres: Buffer.from(parameters).toJSON().data
      };
    }
    case 2 /* BidAskOneSide */: {
      return {
        minBinId,
        maxBinId,
        strategyType: { bidAskOneSide: {} },
        parameteres: Buffer.from(parameters).toJSON().data
      };
    }
    case 6 /* SpotBalanced */: {
      return {
        minBinId,
        maxBinId,
        strategyType: { spotBalanced: {} },
        parameteres: Buffer.from(parameters).toJSON().data
      };
    }
    case 7 /* CurveBalanced */: {
      return {
        minBinId,
        maxBinId,
        strategyType: { curveBalanced: {} },
        parameteres: Buffer.from(parameters).toJSON().data
      };
    }
    case 8 /* BidAskBalanced */: {
      return {
        minBinId,
        maxBinId,
        strategyType: { bidAskBalanced: {} },
        parameteres: Buffer.from(parameters).toJSON().data
      };
    }
    case 3 /* SpotImBalanced */: {
      return {
        minBinId,
        maxBinId,
        strategyType: { spotImBalanced: {} },
        parameteres: Buffer.from(parameters).toJSON().data
      };
    }
    case 4 /* CurveImBalanced */: {
      return {
        minBinId,
        maxBinId,
        strategyType: { curveImBalanced: {} },
        parameteres: Buffer.from(parameters).toJSON().data
      };
    }
    case 5 /* BidAskImBalanced */: {
      return {
        minBinId,
        maxBinId,
        strategyType: { bidAskImBalanced: {} },
        parameteres: Buffer.from(parameters).toJSON().data
      };
    }
  }
}

// src/dlmm/helpers/lbPair.ts
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { PublicKey as PublicKey4 } from "@solana/web3.js";
async function getTokensMintFromPoolAddress(connection, poolAddress, opt) {
  const provider = new AnchorProvider(
    connection,
    {},
    AnchorProvider.defaultOptions()
  );
  const program = new Program(
    IDL,
    LBCLMM_PROGRAM_IDS[opt?.cluster ?? "mainnet-beta"],
    provider
  );
  const poolAccount = await program.account.lbPair.fetchNullable(
    new PublicKey4(poolAddress)
  );
  if (!poolAccount)
    throw new Error("Pool account not found");
  return {
    tokenXMint: poolAccount.tokenXMint,
    tokenYMint: poolAccount.tokenYMint
  };
}

// src/dlmm/helpers/index.ts
function chunks(array, size) {
  return Array.apply(0, new Array(Math.ceil(array.length / size))).map(
    (_, index) => array.slice(index * size, (index + 1) * size)
  );
}
async function chunkedFetchMultiplePoolAccount(program, pks, chunkSize = 100) {
  const accounts = (await Promise.all(
    chunks(pks, chunkSize).map(
      (chunk) => program.account.lbPair.fetchMultiple(chunk)
    )
  )).flat();
  return accounts.filter(Boolean);
}
async function chunkedFetchMultipleBinArrayBitmapExtensionAccount(program, pks, chunkSize = 100) {
  const accounts = (await Promise.all(
    chunks(pks, chunkSize).map(
      (chunk) => program.account.binArrayBitmapExtension.fetchMultiple(chunk)
    )
  )).flat();
  return accounts;
}
function getOutAmount(bin, inAmount, swapForY) {
  return swapForY ? mulShr(inAmount, bin.price, SCALE_OFFSET, 1 /* Down */) : shlDiv(inAmount, bin.price, SCALE_OFFSET, 1 /* Down */);
}
async function getTokenDecimals(conn, mint) {
  const token = await getMint(conn, mint);
  return await token.decimals;
}
var getOrCreateATAInstruction = async (connection, tokenMint, owner, payer = owner, allowOwnerOffCurve = true) => {
  const toAccount = getAssociatedTokenAddressSync(
    tokenMint,
    owner,
    allowOwnerOffCurve
  );
  try {
    await getAccount(connection, toAccount);
    return { ataPubKey: toAccount, ix: void 0 };
  } catch (e) {
    if (e instanceof TokenAccountNotFoundError || e instanceof TokenInvalidAccountOwnerError) {
      const ix = createAssociatedTokenAccountInstruction(
        payer,
        toAccount,
        owner,
        tokenMint
      );
      return { ataPubKey: toAccount, ix };
    } else {
      console.error("Error::getOrCreateATAInstruction", e);
      throw e;
    }
  }
};
async function getTokenBalance(conn, tokenAccount) {
  const acc = await getAccount(conn, tokenAccount);
  return acc.amount;
}
var parseLogs = (eventParser, logs) => {
  if (!logs.length)
    throw new Error("No logs found");
  for (const event of eventParser?.parseLogs(logs)) {
    return event.data;
  }
  throw new Error("No events found");
};
var wrapSOLInstruction = (from, to, amount) => {
  return [
    SystemProgram.transfer({
      fromPubkey: from,
      toPubkey: to,
      lamports: amount
    }),
    new TransactionInstruction({
      keys: [
        {
          pubkey: to,
          isSigner: false,
          isWritable: true
        }
      ],
      data: Buffer.from(new Uint8Array([17])),
      programId: TOKEN_PROGRAM_ID
    })
  ];
};
var unwrapSOLInstruction = async (owner, allowOwnerOffCurve = true) => {
  const wSolATAAccount = getAssociatedTokenAddressSync(
    NATIVE_MINT,
    owner,
    allowOwnerOffCurve
  );
  if (wSolATAAccount) {
    const closedWrappedSolInstruction = createCloseAccountInstruction(
      wSolATAAccount,
      owner,
      owner,
      [],
      TOKEN_PROGRAM_ID
    );
    return closedWrappedSolInstruction;
  }
  return null;
};
async function chunkedGetMultipleAccountInfos(connection, pks, chunkSize = 100) {
  const accountInfos = (await Promise.all(
    chunks(pks, chunkSize).map(
      (chunk) => connection.getMultipleAccountsInfo(chunk)
    )
  )).flat();
  return accountInfos;
}
var computeBudgetIx = () => {
  return ComputeBudgetProgram.setComputeUnitLimit({
    units: 14e5
  });
};

// src/dlmm/index.ts
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import Decimal4 from "decimal.js";
import {
  AccountLayout,
  MintLayout,
  NATIVE_MINT as NATIVE_MINT2,
  TOKEN_PROGRAM_ID as TOKEN_PROGRAM_ID2,
  getAssociatedTokenAddressSync as getAssociatedTokenAddressSync2
} from "@solana/spl-token";
var DLMM = class {
  constructor(pubkey, program, lbPair, binArrayBitmapExtension, tokenX, tokenY, opt) {
    this.pubkey = pubkey;
    this.program = program;
    this.lbPair = lbPair;
    this.binArrayBitmapExtension = binArrayBitmapExtension;
    this.tokenX = tokenX;
    this.tokenY = tokenY;
    this.opt = opt;
  }
  /** Static public method */
  /**
   * The function `getLbPairs` retrieves a list of LB pair accounts using a connection and optional
   * parameters.
   * @param {Connection} connection - The `connection` parameter is an instance of the `Connection`
   * class, which represents the connection to the Solana blockchain network.
   * @param {Opt} [opt] - The `opt` parameter is an optional object that contains additional options
   * for the function. It can have the following properties:
   * @returns The function `getLbPairs` returns a Promise that resolves to an array of
   * `LbPairAccount` objects.
   */
  static async getLbPairs(connection, opt) {
    const provider = new AnchorProvider2(
      connection,
      {},
      AnchorProvider2.defaultOptions()
    );
    const program = new Program2(
      IDL,
      opt?.programId ?? LBCLMM_PROGRAM_IDS[opt?.cluster ?? "mainnet-beta"],
      provider
    );
    return program.account.lbPair.all();
  }
  static async getPairPubkeyIfExists(connection, tokenX, tokenY, binStep, baseFactor, opt) {
    const cluster = opt?.cluster || "mainnet-beta";
    const provider = new AnchorProvider2(
      connection,
      {},
      AnchorProvider2.defaultOptions()
    );
    const program = new Program2(
      IDL,
      opt?.programId ?? LBCLMM_PROGRAM_IDS[cluster],
      provider
    );
    try {
      const [lbPair2Key] = deriveLbPair2(
        tokenX,
        tokenY,
        binStep,
        baseFactor,
        program.programId
      );
      const account2 = await program.account.lbPair.fetchNullable(lbPair2Key);
      if (account2)
        return lbPair2Key;
      const [lbPairKey] = deriveLbPair(
        tokenX,
        tokenY,
        binStep,
        program.programId
      );
      const account = await program.account.lbPair.fetchNullable(lbPairKey);
      if (account && account.parameters.baseFactor === baseFactor.toNumber()) {
        return lbPairKey;
      }
      return null;
    } catch (error) {
      return null;
    }
  }
  /**
   * The `create` function is a static method that creates a new instance of the `DLMM` class
   * @param {Connection} connection - The `connection` parameter is an instance of the `Connection`
   * class, which represents the connection to the Solana blockchain network.
   * @param {PublicKey} dlmm - The PublicKey of LB Pair.
   * @param {Opt} [opt] - The `opt` parameter is an optional object that can contain additional options
   * for the `create` function. It has the following properties:
   * @returns The `create` function returns a `Promise` that resolves to a `DLMM` object.
   */
  static async create(connection, dlmm, opt) {
    const cluster = opt?.cluster || "mainnet-beta";
    const provider = new AnchorProvider2(
      connection,
      {},
      AnchorProvider2.defaultOptions()
    );
    const program = new Program2(
      IDL,
      opt?.programId ?? LBCLMM_PROGRAM_IDS[cluster],
      provider
    );
    const binArrayBitMapExtensionPubkey = deriveBinArrayBitmapExtension(
      dlmm,
      program.programId
    )[0];
    const accountsToFetch = [dlmm, binArrayBitMapExtensionPubkey];
    const accountsInfo = await chunkedGetMultipleAccountInfos(
      connection,
      accountsToFetch
    );
    const lbPairAccountInfoBuffer = accountsInfo[0]?.data;
    if (!lbPairAccountInfoBuffer)
      throw new Error(`LB Pair account ${dlmm.toBase58()} not found`);
    const lbPairAccInfo = program.coder.accounts.decode(
      "lbPair",
      lbPairAccountInfoBuffer
    );
    const binArrayBitMapAccountInfoBuffer = accountsInfo[1]?.data;
    let binArrayBitMapExtensionAccInfo = null;
    if (binArrayBitMapAccountInfoBuffer) {
      binArrayBitMapExtensionAccInfo = program.coder.accounts.decode(
        "binArrayBitmapExtension",
        binArrayBitMapAccountInfoBuffer
      );
    }
    const reserveAccountsInfo = await chunkedGetMultipleAccountInfos(
      program.provider.connection,
      [
        lbPairAccInfo.reserveX,
        lbPairAccInfo.reserveY,
        lbPairAccInfo.tokenXMint,
        lbPairAccInfo.tokenYMint
      ]
    );
    let binArrayBitmapExtension;
    if (binArrayBitMapExtensionAccInfo) {
      binArrayBitmapExtension = {
        account: binArrayBitMapExtensionAccInfo,
        publicKey: binArrayBitMapExtensionPubkey
      };
    }
    const reserveXBalance = AccountLayout.decode(reserveAccountsInfo[0].data);
    const reserveYBalance = AccountLayout.decode(reserveAccountsInfo[1].data);
    const tokenXDecimal = MintLayout.decode(
      reserveAccountsInfo[2].data
    ).decimals;
    const tokenYDecimal = MintLayout.decode(
      reserveAccountsInfo[3].data
    ).decimals;
    const tokenX = {
      publicKey: lbPairAccInfo.tokenXMint,
      reserve: lbPairAccInfo.reserveX,
      amount: reserveXBalance.amount,
      decimal: tokenXDecimal
    };
    const tokenY = {
      publicKey: lbPairAccInfo.tokenYMint,
      reserve: lbPairAccInfo.reserveY,
      amount: reserveYBalance.amount,
      decimal: tokenYDecimal
    };
    return new DLMM(
      dlmm,
      program,
      lbPairAccInfo,
      binArrayBitmapExtension,
      tokenX,
      tokenY,
      opt
    );
  }
  /**
   * Similar to `create` function, but it accept multiple lbPairs to be initialized.
   * @param {Connection} connection - The `connection` parameter is an instance of the `Connection`
   * class, which represents the connection to the Solana blockchain network.
   * @param dlmmList - An Array of PublicKey of LB Pairs.
   * @param {Opt} [opt] - An optional parameter of type `Opt`.
   * @returns The function `createMultiple` returns a Promise that resolves to an array of `DLMM`
   * objects.
   */
  static async createMultiple(connection, dlmmList, opt) {
    const cluster = opt?.cluster || "mainnet-beta";
    const provider = new AnchorProvider2(
      connection,
      {},
      AnchorProvider2.defaultOptions()
    );
    const program = new Program2(
      IDL,
      opt?.programId ?? LBCLMM_PROGRAM_IDS[cluster],
      provider
    );
    const binArrayBitMapExtensions = dlmmList.map(
      (lbPair) => deriveBinArrayBitmapExtension(lbPair, program.programId)[0]
    );
    const accountsToFetch = [...dlmmList, ...binArrayBitMapExtensions];
    const accountsInfo = await chunkedGetMultipleAccountInfos(
      connection,
      accountsToFetch
    );
    const lbPairArraysMap = /* @__PURE__ */ new Map();
    for (let i = 0; i < dlmmList.length; i++) {
      const lbPairPubKey = dlmmList[i];
      const lbPairAccountInfoBuffer = accountsInfo[i]?.data;
      if (!lbPairAccountInfoBuffer)
        throw new Error(`LB Pair account ${lbPairPubKey.toBase58()} not found`);
      const binArrayAccInfo = program.coder.accounts.decode(
        "lbPair",
        lbPairAccountInfoBuffer
      );
      lbPairArraysMap.set(lbPairPubKey.toBase58(), binArrayAccInfo);
    }
    const binArrayBitMapExtensionsMap = /* @__PURE__ */ new Map();
    for (let i = dlmmList.length; i < accountsInfo.length; i++) {
      const index = i - dlmmList.length;
      const lbPairPubkey = dlmmList[index];
      const binArrayBitMapAccountInfoBuffer = accountsInfo[i]?.data;
      if (binArrayBitMapAccountInfoBuffer) {
        const binArrayBitMapExtensionAccInfo = program.coder.accounts.decode(
          "binArrayBitmapExtension",
          binArrayBitMapAccountInfoBuffer
        );
        binArrayBitMapExtensionsMap.set(
          lbPairPubkey.toBase58(),
          binArrayBitMapExtensionAccInfo
        );
      }
    }
    const reservePublicKeys = Array.from(lbPairArraysMap.values()).map(({ reserveX, reserveY }) => [reserveX, reserveY]).flat();
    const tokenMintPublicKeys = Array.from(lbPairArraysMap.values()).map(({ tokenXMint, tokenYMint }) => [tokenXMint, tokenYMint]).flat();
    const reserveAndTokenMintAccountsInfo = await chunkedGetMultipleAccountInfos(program.provider.connection, [
      ...reservePublicKeys,
      ...tokenMintPublicKeys
    ]);
    const lbClmmImpl = await Promise.all(
      dlmmList.map(async (lbPair, index) => {
        const lbPairState = lbPairArraysMap.get(lbPair.toBase58());
        if (!lbPairState)
          throw new Error(`LB Pair ${lbPair.toBase58()} state not found`);
        const binArrayBitmapExtensionState = binArrayBitMapExtensionsMap.get(
          lbPair.toBase58()
        );
        const binArrayBitmapExtensionPubkey = binArrayBitMapExtensions[index];
        let binArrayBitmapExtension = null;
        if (binArrayBitmapExtensionState) {
          binArrayBitmapExtension = {
            account: binArrayBitmapExtensionState,
            publicKey: binArrayBitmapExtensionPubkey
          };
        }
        const reserveXAccountInfo = reserveAndTokenMintAccountsInfo[index * 2];
        const reserveYAccountInfo = reserveAndTokenMintAccountsInfo[index * 2 + 1];
        const tokenXMintAccountInfo = reserveAndTokenMintAccountsInfo[reservePublicKeys.length + index * 2];
        const tokenYMintAccountInfo = reserveAndTokenMintAccountsInfo[reservePublicKeys.length + index * 2 + 1];
        if (!reserveXAccountInfo || !reserveYAccountInfo)
          throw new Error(
            `Reserve account for LB Pair ${lbPair.toBase58()} not found`
          );
        const reserveXBalance = AccountLayout.decode(reserveXAccountInfo.data);
        const reserveYBalance = AccountLayout.decode(reserveYAccountInfo.data);
        const tokenXDecimal = MintLayout.decode(
          tokenXMintAccountInfo.data
        ).decimals;
        const tokenYDecimal = MintLayout.decode(
          tokenYMintAccountInfo.data
        ).decimals;
        const tokenX = {
          publicKey: lbPairState.tokenXMint,
          reserve: lbPairState.reserveX,
          amount: reserveXBalance.amount,
          decimal: tokenXDecimal
        };
        const tokenY = {
          publicKey: lbPairState.tokenYMint,
          reserve: lbPairState.reserveY,
          amount: reserveYBalance.amount,
          decimal: tokenYDecimal
        };
        return new DLMM(
          lbPair,
          program,
          lbPairState,
          binArrayBitmapExtension,
          tokenX,
          tokenY,
          opt
        );
      })
    );
    return lbClmmImpl;
  }
  static async getAllPresetParameters(connection, opt) {
    const provider = new AnchorProvider2(
      connection,
      {},
      AnchorProvider2.defaultOptions()
    );
    const program = new Program2(
      IDL,
      opt?.programId ?? LBCLMM_PROGRAM_IDS[opt?.cluster ?? "mainnet-beta"],
      provider
    );
    const presetParameter = await program.account.presetParameter.all();
    return presetParameter;
  }
  /**
   * The function `getAllLbPairPositionsByUser` retrieves all liquidity pool pair positions for a given
   * user.
   * @param {Connection} connection - The `connection` parameter is an instance of the `Connection`
   * class, which represents the connection to the Solana blockchain.
   * @param {PublicKey} userPubKey - The user's wallet public key.
   * @param {Opt} [opt] - An optional object that contains additional options for the function.
   * @returns The function `getAllLbPairPositionsByUser` returns a `Promise` that resolves to a `Map`
   * object. The `Map` object contains key-value pairs, where the key is a string representing the LB
   * Pair account, and the value is an object of PositionInfo
   */
  static async getAllLbPairPositionsByUser(connection, userPubKey, opt) {
    const cluster = opt?.cluster || "mainnet-beta";
    const provider = new AnchorProvider2(
      connection,
      {},
      AnchorProvider2.defaultOptions()
    );
    const program = new Program2(
      IDL,
      opt?.programId ?? LBCLMM_PROGRAM_IDS[cluster],
      provider
    );
    const [positions, positionsV2] = await Promise.all([
      program.account.position.all([
        {
          memcmp: {
            bytes: bs58.encode(userPubKey.toBuffer()),
            offset: 8 + 32
          }
        }
      ]),
      program.account.positionV2.all([
        {
          memcmp: {
            bytes: bs58.encode(userPubKey.toBuffer()),
            offset: 8 + 32
          }
        }
      ])
    ]);
    const binArrayPubkeySet = /* @__PURE__ */ new Set();
    const lbPairSet = /* @__PURE__ */ new Set();
    positions.forEach(({ account: { upperBinId, lowerBinId, lbPair } }) => {
      const lowerBinArrayIndex = binIdToBinArrayIndex(new BN9(lowerBinId));
      const upperBinArrayIndex = binIdToBinArrayIndex(new BN9(upperBinId));
      const [lowerBinArrayPubKey] = deriveBinArray(
        lbPair,
        lowerBinArrayIndex,
        program.programId
      );
      const [upperBinArrayPubKey] = deriveBinArray(
        lbPair,
        upperBinArrayIndex,
        program.programId
      );
      binArrayPubkeySet.add(lowerBinArrayPubKey.toBase58());
      binArrayPubkeySet.add(upperBinArrayPubKey.toBase58());
      lbPairSet.add(lbPair.toBase58());
    });
    const binArrayPubkeyArray = Array.from(binArrayPubkeySet).map(
      (pubkey) => new PublicKey6(pubkey)
    );
    const lbPairArray = Array.from(lbPairSet).map(
      (pubkey) => new PublicKey6(pubkey)
    );
    const binArrayPubkeySetV2 = /* @__PURE__ */ new Set();
    const lbPairSetV2 = /* @__PURE__ */ new Set();
    positionsV2.forEach(({ account: { upperBinId, lowerBinId, lbPair } }) => {
      const lowerBinArrayIndex = binIdToBinArrayIndex(new BN9(lowerBinId));
      const upperBinArrayIndex = binIdToBinArrayIndex(new BN9(upperBinId));
      const [lowerBinArrayPubKey] = deriveBinArray(
        lbPair,
        lowerBinArrayIndex,
        program.programId
      );
      const [upperBinArrayPubKey] = deriveBinArray(
        lbPair,
        upperBinArrayIndex,
        program.programId
      );
      binArrayPubkeySetV2.add(lowerBinArrayPubKey.toBase58());
      binArrayPubkeySetV2.add(upperBinArrayPubKey.toBase58());
      lbPairSetV2.add(lbPair.toBase58());
    });
    const binArrayPubkeyArrayV2 = Array.from(binArrayPubkeySetV2).map(
      (pubkey) => new PublicKey6(pubkey)
    );
    const lbPairArrayV2 = Array.from(lbPairSetV2).map(
      (pubkey) => new PublicKey6(pubkey)
    );
    const [clockAccInfo, ...binArraysAccInfo] = await chunkedGetMultipleAccountInfos(connection, [
      SYSVAR_CLOCK_PUBKEY,
      ...binArrayPubkeyArray,
      ...lbPairArray,
      ...binArrayPubkeyArrayV2,
      ...lbPairArrayV2
    ]);
    const positionBinArraysMap = /* @__PURE__ */ new Map();
    for (let i = 0; i < binArrayPubkeyArray.length; i++) {
      const binArrayPubkey = binArrayPubkeyArray[i];
      const binArrayAccInfoBuffer = binArraysAccInfo[i];
      if (!binArrayAccInfoBuffer)
        throw new Error(
          `Bin Array account ${binArrayPubkey.toBase58()} not found`
        );
      const binArrayAccInfo = program.coder.accounts.decode(
        "binArray",
        binArrayAccInfoBuffer.data
      );
      positionBinArraysMap.set(binArrayPubkey.toBase58(), binArrayAccInfo);
    }
    const lbPairArraysMap = /* @__PURE__ */ new Map();
    for (let i = binArrayPubkeyArray.length; i < binArrayPubkeyArray.length + lbPairArray.length; i++) {
      const lbPairPubkey = lbPairArray[i - binArrayPubkeyArray.length];
      const lbPairAccInfoBuffer = binArraysAccInfo[i];
      if (!lbPairAccInfoBuffer)
        throw new Error(`LB Pair account ${lbPairPubkey.toBase58()} not found`);
      const lbPairAccInfo = program.coder.accounts.decode(
        "lbPair",
        lbPairAccInfoBuffer.data
      );
      lbPairArraysMap.set(lbPairPubkey.toBase58(), lbPairAccInfo);
    }
    const reservePublicKeys = Array.from(lbPairArraysMap.values()).map(({ reserveX, reserveY, tokenXMint, tokenYMint }) => [
      reserveX,
      reserveY,
      tokenXMint,
      tokenYMint
    ]).flat();
    const positionBinArraysMapV2 = /* @__PURE__ */ new Map();
    for (let i = binArrayPubkeyArray.length + lbPairArray.length; i < binArrayPubkeyArray.length + lbPairArray.length + binArrayPubkeyArrayV2.length; i++) {
      const binArrayPubkey = binArrayPubkeyArrayV2[i - (binArrayPubkeyArray.length + lbPairArray.length)];
      const binArrayAccInfoBufferV2 = binArraysAccInfo[i];
      if (!binArrayAccInfoBufferV2)
        throw new Error(
          `Bin Array account ${binArrayPubkey.toBase58()} not found`
        );
      const binArrayAccInfo = program.coder.accounts.decode(
        "binArray",
        binArrayAccInfoBufferV2.data
      );
      positionBinArraysMapV2.set(binArrayPubkey.toBase58(), binArrayAccInfo);
    }
    const lbPairArraysMapV2 = /* @__PURE__ */ new Map();
    for (let i = binArrayPubkeyArray.length + lbPairArray.length + binArrayPubkeyArrayV2.length; i < binArraysAccInfo.length; i++) {
      const lbPairPubkey = lbPairArrayV2[i - (binArrayPubkeyArray.length + lbPairArray.length + binArrayPubkeyArrayV2.length)];
      const lbPairAccInfoBufferV2 = binArraysAccInfo[i];
      if (!lbPairAccInfoBufferV2)
        throw new Error(`LB Pair account ${lbPairPubkey.toBase58()} not found`);
      const lbPairAccInfo = program.coder.accounts.decode(
        "lbPair",
        lbPairAccInfoBufferV2.data
      );
      lbPairArraysMapV2.set(lbPairPubkey.toBase58(), lbPairAccInfo);
    }
    const reservePublicKeysV2 = Array.from(lbPairArraysMapV2.values()).map(({ reserveX, reserveY, tokenXMint, tokenYMint }) => [
      reserveX,
      reserveY,
      tokenXMint,
      tokenYMint
    ]).flat();
    const reserveAccountsInfo = await chunkedGetMultipleAccountInfos(
      program.provider.connection,
      [...reservePublicKeys, ...reservePublicKeysV2]
    );
    const lbPairReserveMap = /* @__PURE__ */ new Map();
    const lbPairMintMap = /* @__PURE__ */ new Map();
    lbPairArray.forEach((lbPair, idx) => {
      const index = idx * 4;
      const reserveAccBufferX = reserveAccountsInfo[index];
      const reserveAccBufferY = reserveAccountsInfo[index + 1];
      if (!reserveAccBufferX || !reserveAccBufferY)
        throw new Error(
          `Reserve account for LB Pair ${lbPair.toBase58()} not found`
        );
      const reserveAccX = AccountLayout.decode(reserveAccBufferX.data);
      const reserveAccY = AccountLayout.decode(reserveAccBufferY.data);
      lbPairReserveMap.set(lbPair.toBase58(), {
        reserveX: reserveAccX.amount,
        reserveY: reserveAccY.amount
      });
      const mintXBuffer = reserveAccountsInfo[index + 2];
      const mintYBuffer = reserveAccountsInfo[index + 3];
      if (!mintXBuffer || !mintYBuffer)
        throw new Error(
          `Mint account for LB Pair ${lbPair.toBase58()} not found`
        );
      const mintX = MintLayout.decode(mintXBuffer.data);
      const mintY = MintLayout.decode(mintYBuffer.data);
      lbPairMintMap.set(lbPair.toBase58(), {
        mintXDecimal: mintX.decimals,
        mintYDecimal: mintY.decimals
      });
    });
    const lbPairReserveMapV2 = /* @__PURE__ */ new Map();
    const lbPairMintMapV2 = /* @__PURE__ */ new Map();
    lbPairArrayV2.forEach((lbPair, idx) => {
      const index = idx * 4;
      const reserveAccBufferXV2 = reserveAccountsInfo[reservePublicKeys.length + index];
      const reserveAccBufferYV2 = reserveAccountsInfo[reservePublicKeys.length + index + 1];
      if (!reserveAccBufferXV2 || !reserveAccBufferYV2)
        throw new Error(
          `Reserve account for LB Pair ${lbPair.toBase58()} not found`
        );
      const reserveAccX = AccountLayout.decode(reserveAccBufferXV2.data);
      const reserveAccY = AccountLayout.decode(reserveAccBufferYV2.data);
      lbPairReserveMapV2.set(lbPair.toBase58(), {
        reserveX: reserveAccX.amount,
        reserveY: reserveAccY.amount
      });
      const mintXBufferV2 = reserveAccountsInfo[reservePublicKeys.length + index + 2];
      const mintYBufferV2 = reserveAccountsInfo[reservePublicKeys.length + index + 3];
      if (!mintXBufferV2 || !mintYBufferV2)
        throw new Error(
          `Mint account for LB Pair ${lbPair.toBase58()} not found`
        );
      const mintX = MintLayout.decode(mintXBufferV2.data);
      const mintY = MintLayout.decode(mintYBufferV2.data);
      lbPairMintMapV2.set(lbPair.toBase58(), {
        mintXDecimal: mintX.decimals,
        mintYDecimal: mintY.decimals
      });
    });
    const onChainTimestamp = new BN9(
      clockAccInfo.data.readBigInt64LE(32).toString()
    ).toNumber();
    const positionsMap = /* @__PURE__ */ new Map();
    for (let position of positions) {
      const { account, publicKey: positionPubKey } = position;
      const { upperBinId, lowerBinId, lbPair } = account;
      const lowerBinArrayIndex = binIdToBinArrayIndex(new BN9(lowerBinId));
      const upperBinArrayIndex = binIdToBinArrayIndex(new BN9(upperBinId));
      const [lowerBinArrayPubKey] = deriveBinArray(
        lbPair,
        lowerBinArrayIndex,
        program.programId
      );
      const [upperBinArrayPubKey] = deriveBinArray(
        lbPair,
        upperBinArrayIndex,
        program.programId
      );
      const lowerBinArray = positionBinArraysMap.get(
        lowerBinArrayPubKey.toBase58()
      );
      const upperBinArray = positionBinArraysMap.get(
        upperBinArrayPubKey.toBase58()
      );
      const lbPairAcc = lbPairArraysMap.get(lbPair.toBase58());
      const { mintXDecimal, mintYDecimal } = lbPairMintMap.get(
        lbPair.toBase58()
      );
      const reserveXBalance = lbPairReserveMap.get(lbPair.toBase58())?.reserveX ?? BigInt(0);
      const reserveYBalance = lbPairReserveMap.get(lbPair.toBase58())?.reserveY ?? BigInt(0);
      const tokenX = {
        publicKey: lbPairAcc.tokenXMint,
        reserve: lbPairAcc.reserveX,
        amount: reserveXBalance,
        decimal: mintXDecimal
      };
      const tokenY = {
        publicKey: lbPairAcc.tokenYMint,
        reserve: lbPairAcc.reserveY,
        amount: reserveYBalance,
        decimal: mintYDecimal
      };
      const positionData = await DLMM.processPosition(
        program,
        0 /* V1 */,
        lbPairAcc,
        onChainTimestamp,
        account,
        mintXDecimal,
        mintYDecimal,
        lowerBinArray,
        upperBinArray,
        PublicKey6.default
      );
      if (positionData) {
        positionsMap.set(lbPair.toBase58(), {
          publicKey: lbPair,
          lbPair: lbPairAcc,
          tokenX,
          tokenY,
          lbPairPositionsData: [
            ...positionsMap.get(lbPair.toBase58())?.lbPairPositionsData ?? [],
            {
              publicKey: positionPubKey,
              positionData,
              version: 0 /* V1 */
            }
          ]
        });
      }
    }
    for (let position of positionsV2) {
      const { account, publicKey: positionPubKey } = position;
      const { upperBinId, lowerBinId, lbPair, feeOwner } = account;
      const lowerBinArrayIndex = binIdToBinArrayIndex(new BN9(lowerBinId));
      const upperBinArrayIndex = binIdToBinArrayIndex(new BN9(upperBinId));
      const [lowerBinArrayPubKey] = deriveBinArray(
        lbPair,
        lowerBinArrayIndex,
        program.programId
      );
      const [upperBinArrayPubKey] = deriveBinArray(
        lbPair,
        upperBinArrayIndex,
        program.programId
      );
      const lowerBinArray = positionBinArraysMapV2.get(
        lowerBinArrayPubKey.toBase58()
      );
      const upperBinArray = positionBinArraysMapV2.get(
        upperBinArrayPubKey.toBase58()
      );
      const lbPairAcc = lbPairArraysMapV2.get(lbPair.toBase58());
      const [baseTokenDecimal, quoteTokenDecimal] = await Promise.all([
        getTokenDecimals(program.provider.connection, lbPairAcc.tokenXMint),
        getTokenDecimals(program.provider.connection, lbPairAcc.tokenYMint)
      ]);
      const reserveXBalance = lbPairReserveMapV2.get(lbPair.toBase58())?.reserveX ?? BigInt(0);
      const reserveYBalance = lbPairReserveMapV2.get(lbPair.toBase58())?.reserveY ?? BigInt(0);
      const tokenX = {
        publicKey: lbPairAcc.tokenXMint,
        reserve: lbPairAcc.reserveX,
        amount: reserveXBalance,
        decimal: baseTokenDecimal
      };
      const tokenY = {
        publicKey: lbPairAcc.tokenYMint,
        reserve: lbPairAcc.reserveY,
        amount: reserveYBalance,
        decimal: quoteTokenDecimal
      };
      const positionData = await DLMM.processPosition(
        program,
        1 /* V2 */,
        lbPairAcc,
        onChainTimestamp,
        account,
        baseTokenDecimal,
        quoteTokenDecimal,
        lowerBinArray,
        upperBinArray,
        feeOwner
      );
      if (positionData) {
        positionsMap.set(lbPair.toBase58(), {
          publicKey: lbPair,
          lbPair: lbPairAcc,
          tokenX,
          tokenY,
          lbPairPositionsData: [
            ...positionsMap.get(lbPair.toBase58())?.lbPairPositionsData ?? [],
            {
              publicKey: positionPubKey,
              positionData,
              version: 1 /* V2 */
            }
          ]
        });
      }
    }
    return positionsMap;
  }
  static async migratePosition(connection, positions, newPositions, walletPubkey, opt) {
    const cluster = opt?.cluster || "mainnet-beta";
    const provider = new AnchorProvider2(
      connection,
      {},
      AnchorProvider2.defaultOptions()
    );
    const program = new Program2(
      IDL,
      opt?.programId ?? LBCLMM_PROGRAM_IDS[cluster],
      provider
    );
    const positionsState = await program.account.position.fetchMultiple(
      positions
    );
    const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash("confirmed");
    return Promise.all(
      positionsState.map(async ({ lbPair, lowerBinId }, idx) => {
        const position = positions[idx];
        const lowerBinArrayIndex = binIdToBinArrayIndex(new BN9(lowerBinId));
        const upperBinArrayIndex = lowerBinArrayIndex.add(new BN9(1));
        const [lowerBinArrayPubKey] = deriveBinArray(
          lbPair,
          lowerBinArrayIndex,
          program.programId
        );
        const [upperBinArrayPubKey] = deriveBinArray(
          lbPair,
          upperBinArrayIndex,
          program.programId
        );
        const migrateTx = await program.methods.migratePosition().accounts({
          binArrayLower: lowerBinArrayPubKey,
          binArrayUpper: upperBinArrayPubKey,
          lbPair,
          owner: walletPubkey,
          positionV1: position,
          positionV2: newPositions[idx],
          program: program.programId,
          rentReceiver: walletPubkey,
          systemProgram: SystemProgram2.programId
        }).transaction();
        return new Transaction({
          blockhash,
          lastValidBlockHeight,
          feePayer: walletPubkey
        }).add(migrateTx);
      })
    );
  }
  static getPricePerLamport(tokenXDecimal, tokenYDecimal, price) {
    return new Decimal4(price).mul(new Decimal4(10 ** (tokenYDecimal - tokenXDecimal))).toString();
  }
  static getBinIdFromPrice(price, binStep, min) {
    const binStepNum = new Decimal4(binStep).div(new Decimal4(BASIS_POINT_MAX));
    const binId = new Decimal4(price).log().dividedBy(new Decimal4(1).add(binStepNum).log());
    return (min ? binId.floor() : binId.ceil()).toNumber();
  }
  /** Public methods */
  static async createPermissionLbPair(connection, binStep, tokenX, tokenY, activeId, baseKey, creatorKey, feeBps, lockDurationInSlot, opt) {
    const provider = new AnchorProvider2(
      connection,
      {},
      AnchorProvider2.defaultOptions()
    );
    const program = new Program2(
      IDL,
      opt?.programId ?? LBCLMM_PROGRAM_IDS[opt.cluster],
      provider
    );
    const [lbPair] = derivePermissionLbPair(
      baseKey,
      tokenX,
      tokenY,
      binStep,
      program.programId
    );
    const [reserveX] = deriveReserve(tokenX, lbPair, program.programId);
    const [reserveY] = deriveReserve(tokenY, lbPair, program.programId);
    const [oracle] = deriveOracle(lbPair, program.programId);
    const activeBinArrayIndex = binIdToBinArrayIndex(activeId);
    const binArrayBitmapExtension = isOverflowDefaultBinArrayBitmap(
      activeBinArrayIndex
    ) ? deriveBinArrayBitmapExtension(lbPair, program.programId)[0] : null;
    const { minBinId, maxBinId } = findSwappableMinMaxBinId(binStep);
    const ixData = {
      activeId: activeId.toNumber(),
      binStep: binStep.toNumber(),
      baseFactor: computeBaseFactorFromFeeBps(binStep, feeBps).toNumber(),
      minBinId: minBinId.toNumber(),
      maxBinId: maxBinId.toNumber(),
      lockDurationInSlot
    };
    return program.methods.initializePermissionLbPair(ixData).accounts({
      lbPair,
      rent: SYSVAR_RENT_PUBKEY,
      reserveX,
      reserveY,
      binArrayBitmapExtension,
      tokenMintX: tokenX,
      tokenMintY: tokenY,
      tokenProgram: TOKEN_PROGRAM_ID2,
      oracle,
      systemProgram: SystemProgram2.programId,
      admin: creatorKey,
      base: baseKey
    }).transaction();
  }
  static async createLbPair(connection, funder, tokenX, tokenY, binStep, baseFactor, presetParameter, activeId, opt) {
    const provider = new AnchorProvider2(
      connection,
      {},
      AnchorProvider2.defaultOptions()
    );
    const program = new Program2(
      IDL,
      opt?.programId ?? LBCLMM_PROGRAM_IDS[opt.cluster],
      provider
    );
    const existsPool = await this.getPairPubkeyIfExists(
      connection,
      tokenX,
      tokenY,
      binStep,
      baseFactor
    );
    if (existsPool) {
      throw new Error("Pool already exists");
    }
    const [lbPair] = deriveLbPair2(
      tokenX,
      tokenY,
      binStep,
      baseFactor,
      program.programId
    );
    const [reserveX] = deriveReserve(tokenX, lbPair, program.programId);
    const [reserveY] = deriveReserve(tokenY, lbPair, program.programId);
    const [oracle] = deriveOracle(lbPair, program.programId);
    const activeBinArrayIndex = binIdToBinArrayIndex(activeId);
    const binArrayBitmapExtension = isOverflowDefaultBinArrayBitmap(
      activeBinArrayIndex
    ) ? deriveBinArrayBitmapExtension(lbPair, program.programId)[0] : null;
    return program.methods.initializeLbPair(activeId.toNumber(), binStep.toNumber()).accounts({
      funder,
      lbPair,
      rent: SYSVAR_RENT_PUBKEY,
      reserveX,
      reserveY,
      binArrayBitmapExtension,
      tokenMintX: tokenX,
      tokenMintY: tokenY,
      tokenProgram: TOKEN_PROGRAM_ID2,
      oracle,
      presetParameter,
      systemProgram: SystemProgram2.programId
    }).transaction();
  }
  /**
   * The function `refetchStates` retrieves and updates various states and data related to bin arrays
   * and lb pairs.
   */
  async refetchStates() {
    const binArrayBitmapExtensionPubkey = deriveBinArrayBitmapExtension(
      this.pubkey,
      this.program.programId
    )[0];
    const [
      lbPairAccountInfo,
      binArrayBitmapExtensionAccountInfo,
      reserveXAccountInfo,
      reserveYAccountInfo
    ] = await chunkedGetMultipleAccountInfos(this.program.provider.connection, [
      this.pubkey,
      binArrayBitmapExtensionPubkey,
      this.lbPair.reserveX,
      this.lbPair.reserveY
    ]);
    const lbPairState = this.program.coder.accounts.decode(
      "lbPair",
      lbPairAccountInfo.data
    );
    if (binArrayBitmapExtensionAccountInfo) {
      const binArrayBitmapExtensionState = this.program.coder.accounts.decode(
        "binArrayBitmapExtension",
        binArrayBitmapExtensionAccountInfo.data
      );
      if (binArrayBitmapExtensionState) {
        this.binArrayBitmapExtension = {
          account: binArrayBitmapExtensionState,
          publicKey: binArrayBitmapExtensionPubkey
        };
      }
    }
    const reserveXBalance = AccountLayout.decode(reserveXAccountInfo.data);
    const reserveYBalance = AccountLayout.decode(reserveYAccountInfo.data);
    const [tokenXDecimal, tokenYDecimal] = await Promise.all([
      getTokenDecimals(
        this.program.provider.connection,
        lbPairState.tokenXMint
      ),
      getTokenDecimals(
        this.program.provider.connection,
        lbPairState.tokenYMint
      )
    ]);
    this.tokenX = {
      amount: reserveXBalance.amount,
      decimal: tokenXDecimal,
      publicKey: lbPairState.tokenXMint,
      reserve: lbPairState.reserveX
    };
    this.tokenY = {
      amount: reserveYBalance.amount,
      decimal: tokenYDecimal,
      publicKey: lbPairState.tokenYMint,
      reserve: lbPairState.reserveY
    };
    this.lbPair = lbPairState;
  }
  /**
   * The function `getBinArrays` returns an array of `BinArrayAccount` objects
   * @returns a Promise that resolves to an array of BinArrayAccount objects.
   */
  async getBinArrays() {
    return this.program.account.binArray.all([
      {
        memcmp: {
          bytes: bs58.encode(this.pubkey.toBuffer()),
          offset: 8 + 16
        }
      }
    ]);
  }
  /**
   * The function `getBinArrayAroundActiveBin` retrieves a specified number of `BinArrayAccount`
   * objects from the blockchain, based on the active bin and its surrounding bin arrays.
   * @param
   *    swapForY - The `swapForY` parameter is a boolean value that indicates whether the swap is using quote token as input.
   *    [count=4] - The `count` parameter is the number of bin arrays to retrieve on left and right respectively. By default, it is set to 4.
   * @returns an array of `BinArrayAccount` objects.
   */
  async getBinArrayForSwap(swapForY, count = 4) {
    await this.refetchStates();
    const binArraysPubkey = /* @__PURE__ */ new Set();
    let shouldStop = false;
    let activeIdToLoop = this.lbPair.activeId;
    while (!shouldStop) {
      const binArrayIndex = findNextBinArrayIndexWithLiquidity(
        swapForY,
        new BN9(activeIdToLoop),
        this.lbPair,
        this.binArrayBitmapExtension?.account ?? null
      );
      if (binArrayIndex === null)
        shouldStop = true;
      else {
        const [binArrayPubKey] = deriveBinArray(
          this.pubkey,
          binArrayIndex,
          this.program.programId
        );
        binArraysPubkey.add(binArrayPubKey.toBase58());
        const [lowerBinId, upperBinId] = getBinArrayLowerUpperBinId(binArrayIndex);
        activeIdToLoop = swapForY ? lowerBinId.toNumber() - 1 : upperBinId.toNumber() + 1;
      }
      if (binArraysPubkey.size === count)
        shouldStop = true;
    }
    const accountsToFetch = Array.from(binArraysPubkey).map(
      (pubkey) => new PublicKey6(pubkey)
    );
    const binArraysAccInfoBuffer = await chunkedGetMultipleAccountInfos(
      this.program.provider.connection,
      accountsToFetch
    );
    const binArrays = await Promise.all(
      binArraysAccInfoBuffer.map(async (accInfo, idx) => {
        const account = this.program.coder.accounts.decode(
          "binArray",
          accInfo.data
        );
        const publicKey = accountsToFetch[idx];
        return {
          account,
          publicKey
        };
      })
    );
    return binArrays;
  }
  static calculateFeeInfo(baseFactor, binStep) {
    const baseFeeRate = new BN9(baseFactor).mul(new BN9(binStep)).mul(new BN9(10));
    const baseFeeRatePercentage = new Decimal4(baseFeeRate.toString()).mul(new Decimal4(100)).div(new Decimal4(FEE_PRECISION.toString()));
    const maxFeeRatePercentage = new Decimal4(MAX_FEE_RATE.toString()).mul(new Decimal4(100)).div(new Decimal4(FEE_PRECISION.toString()));
    return {
      baseFeeRatePercentage,
      maxFeeRatePercentage
    };
  }
  /**
   * The function `getFeeInfo` calculates and returns the base fee rate percentage, maximum fee rate
   * percentage, and protocol fee percentage.
   * @returns an object of type `FeeInfo` with the following properties: baseFeeRatePercentage, maxFeeRatePercentage, and protocolFeePercentage.
   */
  getFeeInfo() {
    const { baseFactor, protocolShare } = this.lbPair.parameters;
    const { baseFeeRatePercentage, maxFeeRatePercentage } = DLMM.calculateFeeInfo(baseFactor, this.lbPair.binStep);
    const protocolFeePercentage = new Decimal4(protocolShare.toString()).mul(new Decimal4(100)).div(new Decimal4(BASIS_POINT_MAX));
    return {
      baseFeeRatePercentage,
      maxFeeRatePercentage,
      protocolFeePercentage
    };
  }
  /**
   * The function calculates and returns a dynamic fee
   * @returns a Decimal value representing the dynamic fee.
   */
  getDynamicFee() {
    let vParameterClone = Object.assign({}, this.lbPair.vParameters);
    let activeId = new BN9(this.lbPair.activeId);
    const sParameters2 = this.lbPair.parameters;
    const currentTimestamp = Date.now() / 1e3;
    this.updateReference(
      activeId.toNumber(),
      vParameterClone,
      sParameters2,
      currentTimestamp
    );
    this.updateVolatilityAccumulator(
      vParameterClone,
      sParameters2,
      activeId.toNumber()
    );
    const totalFee = getTotalFee(
      this.lbPair.binStep,
      sParameters2,
      vParameterClone
    );
    return new Decimal4(totalFee.toString()).div(new Decimal4(FEE_PRECISION.toString())).mul(100);
  }
  /**
   * The function `getEmissionRate` returns the emission rates for two rewards.
   * @returns an object of type `EmissionRate`. The object has two properties: `rewardOne` and
   * `rewardTwo`, both of which are of type `Decimal`.
   */
  getEmissionRate() {
    const now = Date.now() / 1e3;
    const [rewardOneEmissionRate, rewardTwoEmissionRate] = this.lbPair.rewardInfos.map(
      ({ rewardRate, rewardDurationEnd }) => now > rewardDurationEnd.toNumber() ? void 0 : rewardRate
    );
    return {
      rewardOne: rewardOneEmissionRate ? new Decimal4(rewardOneEmissionRate.toString()).div(PRECISION) : void 0,
      rewardTwo: rewardTwoEmissionRate ? new Decimal4(rewardTwoEmissionRate.toString()).div(PRECISION) : void 0
    };
  }
  /**
   * The function `getBinsAroundActiveBin` retrieves a specified number of bins to the left and right
   * of the active bin and returns them along with the active bin ID.
   * @param {number} numberOfBinsToTheLeft - The parameter `numberOfBinsToTheLeft` represents the
   * number of bins to the left of the active bin that you want to retrieve. It determines how many
   * bins you want to include in the result that are positioned to the left of the active bin.
   * @param {number} numberOfBinsToTheRight - The parameter `numberOfBinsToTheRight` represents the
   * number of bins to the right of the active bin that you want to retrieve.
   * @returns an object with two properties: "activeBin" and "bins". The value of "activeBin" is the
   * value of "this.lbPair.activeId", and the value of "bins" is the result of calling the "getBins"
   * function with the specified parameters.
   */
  async getBinsAroundActiveBin(numberOfBinsToTheLeft, numberOfBinsToTheRight) {
    const lowerBinId = this.lbPair.activeId - numberOfBinsToTheLeft - 1;
    const upperBinId = this.lbPair.activeId + numberOfBinsToTheRight + 1;
    const bins = await this.getBins(
      this.pubkey,
      lowerBinId,
      upperBinId,
      this.tokenX.decimal,
      this.tokenY.decimal
    );
    return { activeBin: this.lbPair.activeId, bins };
  }
  /**
   * The function `getBinsBetweenMinAndMaxPrice` retrieves a list of bins within a specified price
   * range.
   * @param {number} minPrice - The minimum price value for filtering the bins.
   * @param {number} maxPrice - The `maxPrice` parameter is the maximum price value that you want to
   * use for filtering the bins.
   * @returns an object with two properties: "activeBin" and "bins". The value of "activeBin" is the
   * active bin ID of the lbPair, and the value of "bins" is an array of BinLiquidity objects.
   */
  async getBinsBetweenMinAndMaxPrice(minPrice, maxPrice) {
    const lowerBinId = this.getBinIdFromPrice(minPrice, true) - 1;
    const upperBinId = this.getBinIdFromPrice(maxPrice, false) + 1;
    const bins = await this.getBins(
      this.pubkey,
      lowerBinId,
      upperBinId,
      this.tokenX.decimal,
      this.tokenX.decimal
    );
    return { activeBin: this.lbPair.activeId, bins };
  }
  /**
   * The function `getBinsBetweenLowerAndUpperBound` retrieves a list of bins between a lower and upper
   * bin ID and returns the active bin ID and the list of bins.
   * @param {number} lowerBinId - The lowerBinId parameter is a number that represents the ID of the
   * lowest bin.
   * @param {number} upperBinId - The upperBinID parameter is a number that represents the ID of the
   * highest bin.
   * @param {BinArray} [lowerBinArrays] - The `lowerBinArrays` parameter is an optional parameter of
   * type `BinArray`. It represents an array of bins that are below the lower bin ID.
   * @param {BinArray} [upperBinArrays] - The parameter `upperBinArrays` is an optional parameter of
   * type `BinArray`. It represents an array of bins that are above the upper bin ID.
   * @returns an object with two properties: "activeBin" and "bins". The value of "activeBin" is the
   * active bin ID of the lbPair, and the value of "bins" is an array of BinLiquidity objects.
   */
  async getBinsBetweenLowerAndUpperBound(lowerBinId, upperBinId, lowerBinArrays, upperBinArrays) {
    const bins = await this.getBins(
      this.pubkey,
      lowerBinId,
      upperBinId,
      this.tokenX.decimal,
      this.tokenY.decimal,
      lowerBinArrays,
      upperBinArrays
    );
    return { activeBin: this.lbPair.activeId, bins };
  }
  /**
   * The function converts a real price of bin to a lamport value
   * @param {number} price - The `price` parameter is a number representing the price of a token.
   * @returns {string} price per Lamport of bin
   */
  toPricePerLamport(price) {
    return DLMM.getPricePerLamport(
      this.tokenX.decimal,
      this.tokenY.decimal,
      price
    );
  }
  /**
   * The function converts a price per lamport value to a real price of bin
   * @param {number} pricePerLamport - The parameter `pricePerLamport` is a number representing the
   * price per lamport.
   * @returns {string} real price of bin
   */
  fromPricePerLamport(pricePerLamport) {
    return new Decimal4(pricePerLamport).div(new Decimal4(10 ** (this.tokenY.decimal - this.tokenX.decimal))).toString();
  }
  /**
   * The function retrieves the active bin ID and its corresponding price.
   * @returns an object with two properties: "binId" which is a number, and "price" which is a string.
   */
  async getActiveBin() {
    const { activeId } = await this.program.account.lbPair.fetch(this.pubkey);
    const [activeBinState] = await this.getBins(
      this.pubkey,
      activeId,
      activeId,
      this.tokenX.decimal,
      this.tokenY.decimal
    );
    return activeBinState;
  }
  /**
   * The function get bin ID based on a given price and a boolean flag indicating whether to
   * round down or up.
   * @param {number} price - The price parameter is a number that represents the price value.
   * @param {boolean} min - The "min" parameter is a boolean value that determines whether to round
   * down or round up the calculated binId. If "min" is true, the binId will be rounded down (floor),
   * otherwise it will be rounded up (ceil).
   * @returns {number} which is the binId calculated based on the given price and whether the minimum
   * value should be used.
   */
  getBinIdFromPrice(price, min) {
    return DLMM.getBinIdFromPrice(price, this.lbPair.binStep, min);
  }
  /**
   * The function `getPositionsByUserAndLbPair` retrieves positions by user and LB pair, including
   * active bin and user positions.
   * @param {PublicKey} [userPubKey] - The `userPubKey` parameter is an optional parameter of type
   * `PublicKey`. It represents the public key of a user. If no `userPubKey` is provided, the function
   * will return an object with an empty `userPositions` array and the active bin information obtained
   * from the `getActive
   * @returns The function `getPositionsByUserAndLbPair` returns a Promise that resolves to an object
   * with two properties:
   *    - "activeBin" which is an object with two properties: "binId" and "price". The value of "binId"
   *     is the active bin ID of the lbPair, and the value of "price" is the price of the active bin.
   *   - "userPositions" which is an array of Position objects.
   */
  async getPositionsByUserAndLbPair(userPubKey) {
    const promiseResults = await Promise.all([
      this.getActiveBin(),
      userPubKey && this.program.account.position.all([
        {
          memcmp: {
            bytes: bs58.encode(userPubKey.toBuffer()),
            offset: 8 + 32
          }
        },
        {
          memcmp: {
            bytes: bs58.encode(this.pubkey.toBuffer()),
            offset: 8
          }
        }
      ]),
      userPubKey && this.program.account.positionV2.all([
        {
          memcmp: {
            bytes: bs58.encode(userPubKey.toBuffer()),
            offset: 8 + 32
          }
        },
        {
          memcmp: {
            bytes: bs58.encode(this.pubkey.toBuffer()),
            offset: 8
          }
        }
      ])
    ]);
    const [activeBin, positions, positionsV2] = promiseResults;
    if (!activeBin) {
      throw new Error("Error fetching active bin");
    }
    if (!userPubKey) {
      return {
        activeBin,
        userPositions: []
      };
    }
    if (!positions || !positionsV2) {
      throw new Error("Error fetching positions");
    }
    const binArrayPubkeySet = /* @__PURE__ */ new Set();
    positions.forEach(({ account: { upperBinId, lowerBinId } }) => {
      const lowerBinArrayIndex = binIdToBinArrayIndex(new BN9(lowerBinId));
      const upperBinArrayIndex = binIdToBinArrayIndex(new BN9(upperBinId));
      const [lowerBinArrayPubKey] = deriveBinArray(
        this.pubkey,
        lowerBinArrayIndex,
        this.program.programId
      );
      const [upperBinArrayPubKey] = deriveBinArray(
        this.pubkey,
        upperBinArrayIndex,
        this.program.programId
      );
      binArrayPubkeySet.add(lowerBinArrayPubKey.toBase58());
      binArrayPubkeySet.add(upperBinArrayPubKey.toBase58());
    });
    const binArrayPubkeyArray = Array.from(binArrayPubkeySet).map(
      (pubkey) => new PublicKey6(pubkey)
    );
    const binArrayPubkeySetV2 = /* @__PURE__ */ new Set();
    positionsV2.forEach(({ account: { upperBinId, lowerBinId, lbPair } }) => {
      const lowerBinArrayIndex = binIdToBinArrayIndex(new BN9(lowerBinId));
      const upperBinArrayIndex = binIdToBinArrayIndex(new BN9(upperBinId));
      const [lowerBinArrayPubKey] = deriveBinArray(
        this.pubkey,
        lowerBinArrayIndex,
        this.program.programId
      );
      const [upperBinArrayPubKey] = deriveBinArray(
        this.pubkey,
        upperBinArrayIndex,
        this.program.programId
      );
      binArrayPubkeySetV2.add(lowerBinArrayPubKey.toBase58());
      binArrayPubkeySetV2.add(upperBinArrayPubKey.toBase58());
    });
    const binArrayPubkeyArrayV2 = Array.from(binArrayPubkeySetV2).map(
      (pubkey) => new PublicKey6(pubkey)
    );
    const lbPairAndBinArrays = await chunkedGetMultipleAccountInfos(
      this.program.provider.connection,
      [
        this.pubkey,
        SYSVAR_CLOCK_PUBKEY,
        ...binArrayPubkeyArray,
        ...binArrayPubkeyArrayV2
      ]
    );
    const [lbPairAccInfo, clockAccInfo, ...binArraysAccInfo] = lbPairAndBinArrays;
    const positionBinArraysMap = /* @__PURE__ */ new Map();
    for (let i = 0; i < binArrayPubkeyArray.length; i++) {
      const binArrayPubkey = binArrayPubkeyArray[i];
      const binArrayAccBuffer = binArraysAccInfo[i];
      if (!binArrayAccBuffer)
        throw new Error(
          `Bin Array account ${binArrayPubkey.toBase58()} not found`
        );
      const binArrayAccInfo = this.program.coder.accounts.decode(
        "binArray",
        binArrayAccBuffer.data
      );
      positionBinArraysMap.set(binArrayPubkey.toBase58(), binArrayAccInfo);
    }
    const positionBinArraysMapV2 = /* @__PURE__ */ new Map();
    for (let i = binArrayPubkeyArray.length; i < binArraysAccInfo.length; i++) {
      const binArrayPubkey = binArrayPubkeyArrayV2[i - binArrayPubkeyArray.length];
      const binArrayAccBufferV2 = binArraysAccInfo[i];
      if (!binArrayAccBufferV2)
        throw new Error(
          `Bin Array account ${binArrayPubkey.toBase58()} not found`
        );
      const binArrayAccInfo = this.program.coder.accounts.decode(
        "binArray",
        binArrayAccBufferV2.data
      );
      positionBinArraysMapV2.set(binArrayPubkey.toBase58(), binArrayAccInfo);
    }
    if (!lbPairAccInfo)
      throw new Error(`LB Pair account ${this.pubkey.toBase58()} not found`);
    const onChainTimestamp = new BN9(
      clockAccInfo.data.readBigInt64LE(32).toString()
    ).toNumber();
    const userPositions = await Promise.all(
      positions.map(async ({ publicKey, account }) => {
        const { lowerBinId, upperBinId } = account;
        const lowerBinArrayIndex = binIdToBinArrayIndex(new BN9(lowerBinId));
        const upperBinArrayIndex = binIdToBinArrayIndex(new BN9(upperBinId));
        const [lowerBinArrayPubKey] = deriveBinArray(
          this.pubkey,
          lowerBinArrayIndex,
          this.program.programId
        );
        const [upperBinArrayPubKey] = deriveBinArray(
          this.pubkey,
          upperBinArrayIndex,
          this.program.programId
        );
        const lowerBinArray = positionBinArraysMap.get(
          lowerBinArrayPubKey.toBase58()
        );
        const upperBinArray = positionBinArraysMap.get(
          upperBinArrayPubKey.toBase58()
        );
        return {
          publicKey,
          positionData: await DLMM.processPosition(
            this.program,
            0 /* V1 */,
            this.lbPair,
            onChainTimestamp,
            account,
            this.tokenX.decimal,
            this.tokenY.decimal,
            lowerBinArray,
            upperBinArray,
            PublicKey6.default
          ),
          version: 0 /* V1 */
        };
      })
    );
    const userPositionsV2 = await Promise.all(
      positionsV2.map(async ({ publicKey, account }) => {
        const { lowerBinId, upperBinId, feeOwner } = account;
        const lowerBinArrayIndex = binIdToBinArrayIndex(new BN9(lowerBinId));
        const upperBinArrayIndex = binIdToBinArrayIndex(new BN9(upperBinId));
        const [lowerBinArrayPubKey] = deriveBinArray(
          this.pubkey,
          lowerBinArrayIndex,
          this.program.programId
        );
        const [upperBinArrayPubKey] = deriveBinArray(
          this.pubkey,
          upperBinArrayIndex,
          this.program.programId
        );
        const lowerBinArray = positionBinArraysMapV2.get(
          lowerBinArrayPubKey.toBase58()
        );
        const upperBinArray = positionBinArraysMapV2.get(
          upperBinArrayPubKey.toBase58()
        );
        return {
          publicKey,
          positionData: await DLMM.processPosition(
            this.program,
            1 /* V2 */,
            this.lbPair,
            onChainTimestamp,
            account,
            this.tokenX.decimal,
            this.tokenY.decimal,
            lowerBinArray,
            upperBinArray,
            feeOwner
          ),
          version: 1 /* V2 */
        };
      })
    );
    return {
      activeBin,
      userPositions: [...userPositions, ...userPositionsV2]
    };
  }
  async quoteCreatePosition({ strategy }) {
    const { minBinId, maxBinId } = strategy;
    const lowerBinArrayIndex = binIdToBinArrayIndex(new BN9(minBinId));
    const upperBinArrayIndex = binIdToBinArrayIndex(new BN9(maxBinId));
    const binArraysCount = (await this.binArraysToBeCreate(lowerBinArrayIndex, upperBinArrayIndex)).length;
    const positionCount = Math.ceil((maxBinId - minBinId + 1) / MAX_BIN_PER_TX);
    const binArrayCost = binArraysCount * BIN_ARRAY_FEE;
    const positionCost = positionCount * POSITION_FEE;
    return {
      binArraysCount,
      binArrayCost,
      positionCount,
      positionCost
    };
  }
  /**
   * The function `initializePositionAndAddLiquidityByStrategy` function is used to initializes a position and adds liquidity
   * @param {TInitializePositionAndAddLiquidityParamsByStrategy}
   *    - `positionPubKey`: The public key of the position account. (usually use `new Keypair()`)
   *    - `totalXAmount`: The total amount of token X to be added to the liquidity pool.
   *    - `totalYAmount`: The total amount of token Y to be added to the liquidity pool.
   *    - `strategy`: The strategy parameters to be used for the liquidity pool (Can use `calculateStrategyParameter` to calculate).
   *    - `user`: The public key of the user account.
   *    - `slippage`: The slippage percentage to be used for the liquidity pool.
   * @returns {Promise<Transaction>} The function `initializePositionAndAddLiquidityByWeight` returns a `Promise` that
   * resolves to either a single `Transaction` object.
   */
  async initializePositionAndAddLiquidityByStrategy({
    positionPubKey,
    totalXAmount,
    totalYAmount,
    strategy,
    user,
    slippage
  }) {
    const { maxBinId, minBinId } = strategy;
    const maxActiveBinSlippage = slippage ? Math.ceil(slippage / (this.lbPair.binStep / 100)) : MAX_ACTIVE_BIN_SLIPPAGE;
    const setComputeUnitLimitIx = computeBudgetIx();
    const preInstructions = [setComputeUnitLimitIx];
    const initializePositionIx = await this.program.methods.initializePosition(minBinId, maxBinId - minBinId + 1).accounts({
      payer: user,
      position: positionPubKey,
      lbPair: this.pubkey,
      owner: user
    }).instruction();
    preInstructions.push(initializePositionIx);
    const lowerBinArrayIndex = binIdToBinArrayIndex(new BN9(minBinId));
    const [binArrayLower] = deriveBinArray(
      this.pubkey,
      lowerBinArrayIndex,
      this.program.programId
    );
    const upperBinArrayIndex = BN9.max(
      lowerBinArrayIndex.add(new BN9(1)),
      binIdToBinArrayIndex(new BN9(maxBinId))
    );
    const [binArrayUpper] = deriveBinArray(
      this.pubkey,
      upperBinArrayIndex,
      this.program.programId
    );
    const createBinArrayIxs = await this.createBinArraysIfNeeded(
      upperBinArrayIndex,
      lowerBinArrayIndex,
      user
    );
    preInstructions.push(...createBinArrayIxs);
    const [
      { ataPubKey: userTokenX, ix: createPayerTokenXIx },
      { ataPubKey: userTokenY, ix: createPayerTokenYIx }
    ] = await Promise.all([
      getOrCreateATAInstruction(
        this.program.provider.connection,
        this.tokenX.publicKey,
        user
      ),
      getOrCreateATAInstruction(
        this.program.provider.connection,
        this.tokenY.publicKey,
        user
      )
    ]);
    createPayerTokenXIx && preInstructions.push(createPayerTokenXIx);
    createPayerTokenYIx && preInstructions.push(createPayerTokenYIx);
    if (this.tokenX.publicKey.equals(NATIVE_MINT2) && !totalXAmount.isZero()) {
      const wrapSOLIx = wrapSOLInstruction(
        user,
        userTokenX,
        BigInt(totalXAmount.toString())
      );
      preInstructions.push(...wrapSOLIx);
    }
    if (this.tokenY.publicKey.equals(NATIVE_MINT2) && !totalYAmount.isZero()) {
      const wrapSOLIx = wrapSOLInstruction(
        user,
        userTokenY,
        BigInt(totalYAmount.toString())
      );
      preInstructions.push(...wrapSOLIx);
    }
    const postInstructions = [];
    if ([
      this.tokenX.publicKey.toBase58(),
      this.tokenY.publicKey.toBase58()
    ].includes(NATIVE_MINT2.toBase58())) {
      const closeWrappedSOLIx = await unwrapSOLInstruction(user);
      closeWrappedSOLIx && postInstructions.push(closeWrappedSOLIx);
    }
    const minBinArrayIndex = binIdToBinArrayIndex(new BN9(minBinId));
    const maxBinArrayIndex = binIdToBinArrayIndex(new BN9(maxBinId));
    const useExtension = isOverflowDefaultBinArrayBitmap(minBinArrayIndex) || isOverflowDefaultBinArrayBitmap(maxBinArrayIndex);
    const binArrayBitmapExtension = useExtension ? deriveBinArrayBitmapExtension(this.pubkey, this.program.programId)[0] : null;
    const activeId = this.lbPair.activeId;
    const strategyParameters = toStrategyParameters(strategy);
    const liquidityParams = {
      amountX: totalXAmount,
      amountY: totalYAmount,
      activeId,
      maxActiveBinSlippage,
      strategyParameters
    };
    const addLiquidityAccounts = {
      position: positionPubKey,
      lbPair: this.pubkey,
      userTokenX,
      userTokenY,
      reserveX: this.lbPair.reserveX,
      reserveY: this.lbPair.reserveY,
      tokenXMint: this.lbPair.tokenXMint,
      tokenYMint: this.lbPair.tokenYMint,
      binArrayLower,
      binArrayUpper,
      binArrayBitmapExtension,
      sender: user,
      tokenXProgram: TOKEN_PROGRAM_ID2,
      tokenYProgram: TOKEN_PROGRAM_ID2
    };
    const programMethod = this.program.methods.addLiquidityByStrategy(liquidityParams);
    const createPositionTx = await programMethod.accounts(addLiquidityAccounts).preInstructions(preInstructions).postInstructions(postInstructions).transaction();
    const { blockhash, lastValidBlockHeight } = await this.program.provider.connection.getLatestBlockhash("confirmed");
    return new Transaction({
      blockhash,
      lastValidBlockHeight,
      feePayer: user
    }).add(createPositionTx);
  }
  /**
   * The function `initializePositionAndAddLiquidityByWeight` function is used to initializes a position and adds liquidity
   * @param {TInitializePositionAndAddLiquidityParams}
   *    - `positionPubKey`: The public key of the position account. (usually use `new Keypair()`)
   *    - `totalXAmount`: The total amount of token X to be added to the liquidity pool.
   *    - `totalYAmount`: The total amount of token Y to be added to the liquidity pool.
   *    - `xYAmountDistribution`: An array of objects of type `XYAmountDistribution` that represents (can use `calculateSpotDistribution`, `calculateBidAskDistribution` & `calculateNormalDistribution`)
   *    - `user`: The public key of the user account.
   *    - `slippage`: The slippage percentage to be used for the liquidity pool.
   * @returns {Promise<Transaction|Transaction[]>} The function `initializePositionAndAddLiquidityByWeight` returns a `Promise` that
   * resolves to either a single `Transaction` object (if less than 26bin involved) or an array of `Transaction` objects.
   */
  async initializePositionAndAddLiquidityByWeight({
    positionPubKey,
    totalXAmount,
    totalYAmount,
    xYAmountDistribution,
    user,
    slippage
  }) {
    const { lowerBinId, upperBinId, binIds } = this.processXYAmountDistribution(xYAmountDistribution);
    const maxActiveBinSlippage = slippage ? Math.ceil(slippage / (this.lbPair.binStep / 100)) : MAX_ACTIVE_BIN_SLIPPAGE;
    if (upperBinId >= lowerBinId + MAX_BIN_PER_POSITION.toNumber()) {
      throw new Error(
        `Position must be within a range of 1 to ${MAX_BIN_PER_POSITION.toNumber()} bins.`
      );
    }
    const preInstructions = [];
    const initializePositionIx = await this.program.methods.initializePosition(lowerBinId, upperBinId - lowerBinId + 1).accounts({
      payer: user,
      position: positionPubKey,
      lbPair: this.pubkey,
      owner: user
    }).instruction();
    preInstructions.push(initializePositionIx);
    const lowerBinArrayIndex = binIdToBinArrayIndex(new BN9(lowerBinId));
    const [binArrayLower] = deriveBinArray(
      this.pubkey,
      lowerBinArrayIndex,
      this.program.programId
    );
    const upperBinArrayIndex = BN9.max(
      lowerBinArrayIndex.add(new BN9(1)),
      binIdToBinArrayIndex(new BN9(upperBinId))
    );
    const [binArrayUpper] = deriveBinArray(
      this.pubkey,
      upperBinArrayIndex,
      this.program.programId
    );
    const createBinArrayIxs = await this.createBinArraysIfNeeded(
      upperBinArrayIndex,
      lowerBinArrayIndex,
      user
    );
    preInstructions.push(...createBinArrayIxs);
    const [
      { ataPubKey: userTokenX, ix: createPayerTokenXIx },
      { ataPubKey: userTokenY, ix: createPayerTokenYIx }
    ] = await Promise.all([
      getOrCreateATAInstruction(
        this.program.provider.connection,
        this.tokenX.publicKey,
        user
      ),
      getOrCreateATAInstruction(
        this.program.provider.connection,
        this.tokenY.publicKey,
        user
      )
    ]);
    createPayerTokenXIx && preInstructions.push(createPayerTokenXIx);
    createPayerTokenYIx && preInstructions.push(createPayerTokenYIx);
    if (this.tokenX.publicKey.equals(NATIVE_MINT2) && !totalXAmount.isZero()) {
      const wrapSOLIx = wrapSOLInstruction(
        user,
        userTokenX,
        BigInt(totalXAmount.toString())
      );
      preInstructions.push(...wrapSOLIx);
    }
    if (this.tokenY.publicKey.equals(NATIVE_MINT2) && !totalYAmount.isZero()) {
      const wrapSOLIx = wrapSOLInstruction(
        user,
        userTokenY,
        BigInt(totalYAmount.toString())
      );
      preInstructions.push(...wrapSOLIx);
    }
    const postInstructions = [];
    if ([
      this.tokenX.publicKey.toBase58(),
      this.tokenY.publicKey.toBase58()
    ].includes(NATIVE_MINT2.toBase58())) {
      const closeWrappedSOLIx = await unwrapSOLInstruction(user);
      closeWrappedSOLIx && postInstructions.push(closeWrappedSOLIx);
    }
    const setComputeUnitLimitIx = computeBudgetIx();
    const minBinId = Math.min(...binIds);
    const maxBinId = Math.max(...binIds);
    const minBinArrayIndex = binIdToBinArrayIndex(new BN9(minBinId));
    const maxBinArrayIndex = binIdToBinArrayIndex(new BN9(maxBinId));
    const useExtension = isOverflowDefaultBinArrayBitmap(minBinArrayIndex) || isOverflowDefaultBinArrayBitmap(maxBinArrayIndex);
    const binArrayBitmapExtension = useExtension ? deriveBinArrayBitmapExtension(this.pubkey, this.program.programId)[0] : null;
    const activeId = this.lbPair.activeId;
    const binLiquidityDist = toWeightDistribution(
      totalXAmount,
      totalYAmount,
      xYAmountDistribution.map((item) => ({
        binId: item.binId,
        xAmountBpsOfTotal: item.xAmountBpsOfTotal,
        yAmountBpsOfTotal: item.yAmountBpsOfTotal
      })),
      this.lbPair.binStep
    );
    if (binLiquidityDist.length === 0) {
      throw new Error("No liquidity to add");
    }
    const liquidityParams = {
      amountX: totalXAmount,
      amountY: totalYAmount,
      binLiquidityDist,
      activeId,
      maxActiveBinSlippage
    };
    const addLiquidityAccounts = {
      position: positionPubKey,
      lbPair: this.pubkey,
      userTokenX,
      userTokenY,
      reserveX: this.lbPair.reserveX,
      reserveY: this.lbPair.reserveY,
      tokenXMint: this.lbPair.tokenXMint,
      tokenYMint: this.lbPair.tokenYMint,
      binArrayLower,
      binArrayUpper,
      binArrayBitmapExtension,
      sender: user,
      tokenXProgram: TOKEN_PROGRAM_ID2,
      tokenYProgram: TOKEN_PROGRAM_ID2
    };
    const oneSideLiquidityParams = {
      amount: totalXAmount.isZero() ? totalYAmount : totalXAmount,
      activeId,
      maxActiveBinSlippage,
      binLiquidityDist
    };
    const oneSideAddLiquidityAccounts = {
      binArrayLower,
      binArrayUpper,
      lbPair: this.pubkey,
      binArrayBitmapExtension: null,
      sender: user,
      position: positionPubKey,
      reserve: totalXAmount.isZero() ? this.lbPair.reserveY : this.lbPair.reserveX,
      tokenMint: totalXAmount.isZero() ? this.lbPair.tokenYMint : this.lbPair.tokenXMint,
      tokenProgram: TOKEN_PROGRAM_ID2,
      userToken: totalXAmount.isZero() ? userTokenY : userTokenX
    };
    const isOneSideDeposit = totalXAmount.isZero() || totalYAmount.isZero();
    const programMethod = isOneSideDeposit ? this.program.methods.addLiquidityOneSide(oneSideLiquidityParams) : this.program.methods.addLiquidityByWeight(liquidityParams);
    if (xYAmountDistribution.length < MAX_BIN_LENGTH_ALLOWED_IN_ONE_TX) {
      const addLiqTx2 = await programMethod.accounts(
        isOneSideDeposit ? oneSideAddLiquidityAccounts : addLiquidityAccounts
      ).preInstructions([setComputeUnitLimitIx, ...preInstructions]).postInstructions(postInstructions).transaction();
      const { blockhash: blockhash2, lastValidBlockHeight: lastValidBlockHeight2 } = await this.program.provider.connection.getLatestBlockhash("confirmed");
      return new Transaction({
        blockhash: blockhash2,
        lastValidBlockHeight: lastValidBlockHeight2,
        feePayer: user
      }).add(addLiqTx2);
    }
    const addLiqTx = await programMethod.accounts(
      isOneSideDeposit ? oneSideAddLiquidityAccounts : addLiquidityAccounts
    ).preInstructions([setComputeUnitLimitIx]).transaction();
    const transactions = [];
    const { blockhash, lastValidBlockHeight } = await this.program.provider.connection.getLatestBlockhash("confirmed");
    if (preInstructions.length) {
      const preInstructionsTx = new Transaction({
        blockhash,
        lastValidBlockHeight,
        feePayer: user
      }).add(...preInstructions);
      transactions.push(preInstructionsTx);
    }
    const mainTx = new Transaction({
      blockhash,
      lastValidBlockHeight,
      feePayer: user
    }).add(addLiqTx);
    transactions.push(mainTx);
    if (postInstructions.length) {
      const postInstructionsTx = new Transaction({
        blockhash,
        lastValidBlockHeight,
        feePayer: user
      }).add(...postInstructions);
      transactions.push(postInstructionsTx);
    }
    return transactions;
  }
  /**
   * The `addLiquidityByStrategy` function is used to add liquidity to existing position
   * @param {TInitializePositionAndAddLiquidityParamsByStrategy}
   *    - `positionPubKey`: The public key of the position account. (usually use `new Keypair()`)
   *    - `totalXAmount`: The total amount of token X to be added to the liquidity pool.
   *    - `totalYAmount`: The total amount of token Y to be added to the liquidity pool.
   *    - `strategy`: The strategy parameters to be used for the liquidity pool (Can use `calculateStrategyParameter` to calculate).
   *    - `user`: The public key of the user account.
   *    - `slippage`: The slippage percentage to be used for the liquidity pool.
   * @returns {Promise<Transaction>} The function `addLiquidityByWeight` returns a `Promise` that resolves to either a single
   * `Transaction` object
   */
  async addLiquidityByStrategy({
    positionPubKey,
    totalXAmount,
    totalYAmount,
    strategy,
    user,
    slippage
  }) {
    const { maxBinId, minBinId } = strategy;
    const maxActiveBinSlippage = slippage ? Math.ceil(slippage / (this.lbPair.binStep / 100)) : MAX_ACTIVE_BIN_SLIPPAGE;
    const preInstructions = [];
    const setComputeUnitLimitIx = computeBudgetIx();
    preInstructions.push(setComputeUnitLimitIx);
    const minBinArrayIndex = binIdToBinArrayIndex(new BN9(minBinId));
    const maxBinArrayIndex = binIdToBinArrayIndex(new BN9(maxBinId));
    const useExtension = isOverflowDefaultBinArrayBitmap(minBinArrayIndex) || isOverflowDefaultBinArrayBitmap(maxBinArrayIndex);
    const binArrayBitmapExtension = useExtension ? deriveBinArrayBitmapExtension(this.pubkey, this.program.programId)[0] : null;
    const activeId = this.lbPair.activeId;
    const strategyParameters = toStrategyParameters(strategy);
    const lowerBinArrayIndex = binIdToBinArrayIndex(new BN9(minBinId));
    const [binArrayLower] = deriveBinArray(
      this.pubkey,
      lowerBinArrayIndex,
      this.program.programId
    );
    const upperBinArrayIndex = BN9.max(
      lowerBinArrayIndex.add(new BN9(1)),
      binIdToBinArrayIndex(new BN9(maxBinId))
    );
    const [binArrayUpper] = deriveBinArray(
      this.pubkey,
      upperBinArrayIndex,
      this.program.programId
    );
    const createBinArrayIxs = await this.createBinArraysIfNeeded(
      upperBinArrayIndex,
      lowerBinArrayIndex,
      user
    );
    preInstructions.push(...createBinArrayIxs);
    const [
      { ataPubKey: userTokenX, ix: createPayerTokenXIx },
      { ataPubKey: userTokenY, ix: createPayerTokenYIx }
    ] = await Promise.all([
      getOrCreateATAInstruction(
        this.program.provider.connection,
        this.tokenX.publicKey,
        user
      ),
      getOrCreateATAInstruction(
        this.program.provider.connection,
        this.tokenY.publicKey,
        user
      )
    ]);
    createPayerTokenXIx && preInstructions.push(createPayerTokenXIx);
    createPayerTokenYIx && preInstructions.push(createPayerTokenYIx);
    if (this.tokenX.publicKey.equals(NATIVE_MINT2) && !totalXAmount.isZero()) {
      const wrapSOLIx = wrapSOLInstruction(
        user,
        userTokenX,
        BigInt(totalXAmount.toString())
      );
      preInstructions.push(...wrapSOLIx);
    }
    if (this.tokenY.publicKey.equals(NATIVE_MINT2) && !totalYAmount.isZero()) {
      const wrapSOLIx = wrapSOLInstruction(
        user,
        userTokenY,
        BigInt(totalYAmount.toString())
      );
      preInstructions.push(...wrapSOLIx);
    }
    const postInstructions = [];
    if ([
      this.tokenX.publicKey.toBase58(),
      this.tokenY.publicKey.toBase58()
    ].includes(NATIVE_MINT2.toBase58())) {
      const closeWrappedSOLIx = await unwrapSOLInstruction(user);
      closeWrappedSOLIx && postInstructions.push(closeWrappedSOLIx);
    }
    const liquidityParams = {
      amountX: totalXAmount,
      amountY: totalYAmount,
      activeId: this.lbPair.activeId,
      maxActiveBinSlippage,
      strategyParameters
    };
    const addLiquidityAccounts = {
      position: positionPubKey,
      lbPair: this.pubkey,
      userTokenX,
      userTokenY,
      reserveX: this.lbPair.reserveX,
      reserveY: this.lbPair.reserveY,
      tokenXMint: this.lbPair.tokenXMint,
      tokenYMint: this.lbPair.tokenYMint,
      binArrayLower,
      binArrayUpper,
      binArrayBitmapExtension,
      sender: user,
      tokenXProgram: TOKEN_PROGRAM_ID2,
      tokenYProgram: TOKEN_PROGRAM_ID2
    };
    const programMethod = this.program.methods.addLiquidityByStrategy(liquidityParams);
    const createPositionTx = await programMethod.accounts(addLiquidityAccounts).preInstructions(preInstructions).postInstructions(postInstructions).transaction();
    const { blockhash, lastValidBlockHeight } = await this.program.provider.connection.getLatestBlockhash("confirmed");
    return new Transaction({
      blockhash,
      lastValidBlockHeight,
      feePayer: user
    }).add(createPositionTx);
  }
  /**
   * The `addLiquidityByWeight` function is used to add liquidity to existing position
   * @param {TInitializePositionAndAddLiquidityParams}
   *    - `positionPubKey`: The public key of the position account. (usually use `new Keypair()`)
   *    - `totalXAmount`: The total amount of token X to be added to the liquidity pool.
   *    - `totalYAmount`: The total amount of token Y to be added to the liquidity pool.
   *    - `xYAmountDistribution`: An array of objects of type `XYAmountDistribution` that represents (can use `calculateSpotDistribution`, `calculateBidAskDistribution` & `calculateNormalDistribution`)
   *    - `user`: The public key of the user account.
   *    - `slippage`: The slippage percentage to be used for the liquidity pool.
   * @returns {Promise<Transaction|Transaction[]>} The function `addLiquidityByWeight` returns a `Promise` that resolves to either a single
   * `Transaction` object (if less than 26bin involved) or an array of `Transaction` objects.
   */
  async addLiquidityByWeight({
    positionPubKey,
    totalXAmount,
    totalYAmount,
    xYAmountDistribution,
    user,
    slippage
  }) {
    const maxActiveBinSlippage = slippage ? Math.ceil(slippage / (this.lbPair.binStep / 100)) : MAX_ACTIVE_BIN_SLIPPAGE;
    const positionAccount = await this.program.account.positionV2.fetch(
      positionPubKey
    );
    const { lowerBinId, upperBinId, binIds } = this.processXYAmountDistribution(xYAmountDistribution);
    if (lowerBinId < positionAccount.lowerBinId)
      throw new Error(
        `Lower Bin ID (${lowerBinId}) lower than Position Lower Bin Id (${positionAccount.lowerBinId})`
      );
    if (upperBinId > positionAccount.upperBinId)
      throw new Error(
        `Upper Bin ID (${upperBinId}) higher than Position Upper Bin Id (${positionAccount.upperBinId})`
      );
    const minBinId = Math.min(...binIds);
    const maxBinId = Math.max(...binIds);
    const minBinArrayIndex = binIdToBinArrayIndex(new BN9(minBinId));
    const maxBinArrayIndex = binIdToBinArrayIndex(new BN9(maxBinId));
    const useExtension = isOverflowDefaultBinArrayBitmap(minBinArrayIndex) || isOverflowDefaultBinArrayBitmap(maxBinArrayIndex);
    const binArrayBitmapExtension = useExtension ? deriveBinArrayBitmapExtension(this.pubkey, this.program.programId)[0] : null;
    const activeId = this.lbPair.activeId;
    const binLiquidityDist = toWeightDistribution(
      totalXAmount,
      totalYAmount,
      xYAmountDistribution.map((item) => ({
        binId: item.binId,
        xAmountBpsOfTotal: item.xAmountBpsOfTotal,
        yAmountBpsOfTotal: item.yAmountBpsOfTotal
      })),
      this.lbPair.binStep
    );
    if (binLiquidityDist.length === 0) {
      throw new Error("No liquidity to add");
    }
    const lowerBinArrayIndex = binIdToBinArrayIndex(
      new BN9(positionAccount.lowerBinId)
    );
    const [binArrayLower] = deriveBinArray(
      this.pubkey,
      lowerBinArrayIndex,
      this.program.programId
    );
    const upperBinArrayIndex = BN9.max(
      lowerBinArrayIndex.add(new BN9(1)),
      binIdToBinArrayIndex(new BN9(positionAccount.upperBinId))
    );
    const [binArrayUpper] = deriveBinArray(
      this.pubkey,
      upperBinArrayIndex,
      this.program.programId
    );
    const preInstructions = [];
    const createBinArrayIxs = await this.createBinArraysIfNeeded(
      upperBinArrayIndex,
      lowerBinArrayIndex,
      user
    );
    preInstructions.push(...createBinArrayIxs);
    const [
      { ataPubKey: userTokenX, ix: createPayerTokenXIx },
      { ataPubKey: userTokenY, ix: createPayerTokenYIx }
    ] = await Promise.all([
      getOrCreateATAInstruction(
        this.program.provider.connection,
        this.tokenX.publicKey,
        user
      ),
      getOrCreateATAInstruction(
        this.program.provider.connection,
        this.tokenY.publicKey,
        user
      )
    ]);
    createPayerTokenXIx && preInstructions.push(createPayerTokenXIx);
    createPayerTokenYIx && preInstructions.push(createPayerTokenYIx);
    if (this.tokenX.publicKey.equals(NATIVE_MINT2) && !totalXAmount.isZero()) {
      const wrapSOLIx = wrapSOLInstruction(
        user,
        userTokenX,
        BigInt(totalXAmount.toString())
      );
      preInstructions.push(...wrapSOLIx);
    }
    if (this.tokenY.publicKey.equals(NATIVE_MINT2) && !totalYAmount.isZero()) {
      const wrapSOLIx = wrapSOLInstruction(
        user,
        userTokenY,
        BigInt(totalYAmount.toString())
      );
      preInstructions.push(...wrapSOLIx);
    }
    const postInstructions = [];
    if ([
      this.tokenX.publicKey.toBase58(),
      this.tokenY.publicKey.toBase58()
    ].includes(NATIVE_MINT2.toBase58())) {
      const closeWrappedSOLIx = await unwrapSOLInstruction(user);
      closeWrappedSOLIx && postInstructions.push(closeWrappedSOLIx);
    }
    const setComputeUnitLimitIx = computeBudgetIx();
    const liquidityParams = {
      amountX: totalXAmount,
      amountY: totalYAmount,
      binLiquidityDist,
      activeId,
      maxActiveBinSlippage
    };
    const addLiquidityAccounts = {
      position: positionPubKey,
      lbPair: this.pubkey,
      userTokenX,
      userTokenY,
      reserveX: this.lbPair.reserveX,
      reserveY: this.lbPair.reserveY,
      tokenXMint: this.lbPair.tokenXMint,
      tokenYMint: this.lbPair.tokenYMint,
      binArrayLower,
      binArrayUpper,
      binArrayBitmapExtension,
      sender: user,
      tokenXProgram: TOKEN_PROGRAM_ID2,
      tokenYProgram: TOKEN_PROGRAM_ID2
    };
    const oneSideLiquidityParams = {
      amount: totalXAmount.isZero() ? totalYAmount : totalXAmount,
      activeId,
      maxActiveBinSlippage,
      binLiquidityDist
    };
    const oneSideAddLiquidityAccounts = {
      binArrayLower,
      binArrayUpper,
      lbPair: this.pubkey,
      binArrayBitmapExtension: null,
      sender: user,
      position: positionPubKey,
      reserve: totalXAmount.isZero() ? this.lbPair.reserveY : this.lbPair.reserveX,
      tokenMint: totalXAmount.isZero() ? this.lbPair.tokenYMint : this.lbPair.tokenXMint,
      tokenProgram: TOKEN_PROGRAM_ID2,
      userToken: totalXAmount.isZero() ? userTokenY : userTokenX
    };
    const isOneSideDeposit = totalXAmount.isZero() || totalYAmount.isZero();
    const programMethod = isOneSideDeposit ? this.program.methods.addLiquidityOneSide(oneSideLiquidityParams) : this.program.methods.addLiquidityByWeight(liquidityParams);
    if (xYAmountDistribution.length < MAX_BIN_LENGTH_ALLOWED_IN_ONE_TX) {
      const addLiqTx2 = await programMethod.accounts(
        isOneSideDeposit ? oneSideAddLiquidityAccounts : addLiquidityAccounts
      ).preInstructions([setComputeUnitLimitIx, ...preInstructions]).postInstructions(postInstructions).transaction();
      const { blockhash: blockhash2, lastValidBlockHeight: lastValidBlockHeight2 } = await this.program.provider.connection.getLatestBlockhash("confirmed");
      return new Transaction({
        blockhash: blockhash2,
        lastValidBlockHeight: lastValidBlockHeight2,
        feePayer: user
      }).add(addLiqTx2);
    }
    const addLiqTx = await programMethod.accounts(
      isOneSideDeposit ? oneSideAddLiquidityAccounts : addLiquidityAccounts
    ).preInstructions([setComputeUnitLimitIx]).transaction();
    const transactions = [];
    const { blockhash, lastValidBlockHeight } = await this.program.provider.connection.getLatestBlockhash("confirmed");
    if (preInstructions.length) {
      const preInstructionsTx = new Transaction({
        blockhash,
        lastValidBlockHeight,
        feePayer: user
      }).add(...preInstructions);
      transactions.push(preInstructionsTx);
    }
    const mainTx = new Transaction({
      blockhash,
      lastValidBlockHeight,
      feePayer: user
    }).add(addLiqTx);
    transactions.push(mainTx);
    if (postInstructions.length) {
      const postInstructionsTx = new Transaction({
        blockhash,
        lastValidBlockHeight,
        feePayer: user
      }).add(...postInstructions);
      transactions.push(postInstructionsTx);
    }
    return transactions;
  }
  /**
   * The `removeLiquidity` function is used to remove liquidity from a position,
   * with the option to claim rewards and close the position.
   * @param
   *    - `user`: The public key of the user account.
   *    - `position`: The public key of the position account.
   *    - `binIds`: An array of numbers that represent the bin IDs to remove liquidity from.
   *    - `liquiditiesBpsToRemove`: An array of numbers (percentage) that represent the liquidity to remove from each bin.
   *    - `shouldClaimAndClose`: A boolean flag that indicates whether to claim rewards and close the position.
   * @returns {Promise<Transaction|Transaction[]>}
   */
  async removeLiquidity({
    user,
    position,
    binIds,
    bps,
    shouldClaimAndClose = false
  }) {
    const { lbPair, lowerBinId, owner, feeOwner } = await this.program.account.positionV2.fetch(position);
    const { reserveX, reserveY, tokenXMint, tokenYMint } = await this.program.account.lbPair.fetch(lbPair);
    const lowerBinArrayIndex = binIdToBinArrayIndex(new BN9(lowerBinId));
    const upperBinArrayIndex = lowerBinArrayIndex.add(new BN9(1));
    const [binArrayLower] = deriveBinArray(
      lbPair,
      lowerBinArrayIndex,
      this.program.programId
    );
    const [binArrayUpper] = deriveBinArray(
      lbPair,
      upperBinArrayIndex,
      this.program.programId
    );
    const preInstructions = [];
    const setComputeUnitLimitIx = computeBudgetIx();
    preInstructions.push(setComputeUnitLimitIx);
    const walletToReceiveFee = feeOwner.equals(PublicKey6.default) ? user : feeOwner;
    const [
      { ataPubKey: userTokenX, ix: createPayerTokenXIx },
      { ataPubKey: userTokenY, ix: createPayerTokenYIx },
      { ataPubKey: feeOwnerTokenX, ix: createFeeOwnerTokenXIx },
      { ataPubKey: feeOwnerTokenY, ix: createFeeOwnerTokenYIx }
    ] = await Promise.all([
      getOrCreateATAInstruction(
        this.program.provider.connection,
        this.tokenX.publicKey,
        owner,
        user
      ),
      getOrCreateATAInstruction(
        this.program.provider.connection,
        this.tokenY.publicKey,
        owner,
        user
      ),
      getOrCreateATAInstruction(
        this.program.provider.connection,
        this.tokenX.publicKey,
        walletToReceiveFee,
        user
      ),
      getOrCreateATAInstruction(
        this.program.provider.connection,
        this.tokenY.publicKey,
        walletToReceiveFee,
        user
      )
    ]);
    createPayerTokenXIx && preInstructions.push(createPayerTokenXIx);
    createPayerTokenYIx && preInstructions.push(createPayerTokenYIx);
    if (!walletToReceiveFee.equals(owner)) {
      createFeeOwnerTokenXIx && preInstructions.push(createFeeOwnerTokenXIx);
      createFeeOwnerTokenYIx && preInstructions.push(createFeeOwnerTokenYIx);
    }
    const secondTransactionsIx = [];
    const postInstructions = [];
    if (shouldClaimAndClose) {
      const claimSwapFeeIx = await this.program.methods.claimFee().accounts({
        binArrayLower,
        binArrayUpper,
        lbPair: this.pubkey,
        sender: user,
        position,
        reserveX,
        reserveY,
        tokenProgram: TOKEN_PROGRAM_ID2,
        tokenXMint: this.tokenX.publicKey,
        tokenYMint: this.tokenY.publicKey,
        userTokenX: feeOwnerTokenX,
        userTokenY: feeOwnerTokenY
      }).instruction();
      postInstructions.push(claimSwapFeeIx);
      for (let i = 0; i < 2; i++) {
        const rewardInfo = this.lbPair.rewardInfos[i];
        if (!rewardInfo || rewardInfo.mint.equals(PublicKey6.default))
          continue;
        const { ataPubKey, ix: rewardAtaIx } = await getOrCreateATAInstruction(
          this.program.provider.connection,
          rewardInfo.mint,
          user
        );
        rewardAtaIx && preInstructions.push(rewardAtaIx);
        const claimRewardIx = await this.program.methods.claimReward(new BN9(i)).accounts({
          lbPair: this.pubkey,
          sender: user,
          position,
          binArrayLower,
          binArrayUpper,
          rewardVault: rewardInfo.vault,
          rewardMint: rewardInfo.mint,
          tokenProgram: TOKEN_PROGRAM_ID2,
          userTokenAccount: ataPubKey
        }).instruction();
        secondTransactionsIx.push(claimRewardIx);
      }
      const closePositionIx = await this.program.methods.closePosition().accounts({
        binArrayLower,
        binArrayUpper,
        rentReceiver: owner,
        // Must be position owner
        position,
        lbPair: this.pubkey,
        sender: user
      }).instruction();
      if (secondTransactionsIx.length) {
        secondTransactionsIx.push(closePositionIx);
      } else {
        postInstructions.push(closePositionIx);
      }
    }
    if ([
      this.tokenX.publicKey.toBase58(),
      this.tokenY.publicKey.toBase58()
    ].includes(NATIVE_MINT2.toBase58())) {
      const closeWrappedSOLIx = await unwrapSOLInstruction(user);
      closeWrappedSOLIx && postInstructions.push(closeWrappedSOLIx);
    }
    const minBinId = Math.min(...binIds);
    const maxBinId = Math.max(...binIds);
    const minBinArrayIndex = binIdToBinArrayIndex(new BN9(minBinId));
    const maxBinArrayIndex = binIdToBinArrayIndex(new BN9(maxBinId));
    const useExtension = isOverflowDefaultBinArrayBitmap(minBinArrayIndex) || isOverflowDefaultBinArrayBitmap(maxBinArrayIndex);
    const binArrayBitmapExtension = useExtension ? deriveBinArrayBitmapExtension(this.pubkey, this.program.programId)[0] : null;
    const removeLiquidityTx = await this.program.methods.removeLiquidityByRange(minBinId, maxBinId, bps.toNumber()).accounts({
      position,
      lbPair,
      userTokenX,
      userTokenY,
      reserveX,
      reserveY,
      tokenXMint,
      tokenYMint,
      binArrayLower,
      binArrayUpper,
      binArrayBitmapExtension,
      tokenXProgram: TOKEN_PROGRAM_ID2,
      tokenYProgram: TOKEN_PROGRAM_ID2,
      sender: user
    }).preInstructions(preInstructions).postInstructions(postInstructions).transaction();
    const { blockhash, lastValidBlockHeight } = await this.program.provider.connection.getLatestBlockhash("confirmed");
    if (secondTransactionsIx.length) {
      const claimRewardsTx = new Transaction({
        blockhash,
        lastValidBlockHeight,
        feePayer: user
      }).add(...secondTransactionsIx);
      const mainTx = new Transaction({
        blockhash,
        lastValidBlockHeight,
        feePayer: user
      }).add(removeLiquidityTx);
      return [mainTx, claimRewardsTx];
    } else {
      return new Transaction({
        blockhash,
        lastValidBlockHeight,
        feePayer: user
      }).add(removeLiquidityTx);
    }
  }
  /**
   * The `closePosition` function closes a position
   * @param
   *    - `owner`: The public key of the owner of the position.
   *    - `position`: The public key of the position account.
   * @returns {Promise<Transaction>}
   */
  async closePosition({
    owner,
    position
  }) {
    const { lowerBinId } = await this.program.account.positionV2.fetch(
      position.publicKey
    );
    const lowerBinArrayIndex = binIdToBinArrayIndex(new BN9(lowerBinId));
    const [binArrayLower] = deriveBinArray(
      this.pubkey,
      lowerBinArrayIndex,
      this.program.programId
    );
    const upperBinArrayIndex = lowerBinArrayIndex.add(new BN9(1));
    const [binArrayUpper] = deriveBinArray(
      this.pubkey,
      upperBinArrayIndex,
      this.program.programId
    );
    const closePositionTx = await this.program.methods.closePosition().accounts({
      binArrayLower,
      binArrayUpper,
      rentReceiver: owner,
      position: position.publicKey,
      lbPair: this.pubkey,
      sender: owner
    }).transaction();
    const { blockhash, lastValidBlockHeight } = await this.program.provider.connection.getLatestBlockhash("confirmed");
    return new Transaction({
      blockhash,
      lastValidBlockHeight,
      feePayer: owner
    }).add(closePositionTx);
  }
  /**
   * The `swapQuoteExactOut` function returns a quote for a swap
   * @param
   *    - `outAmount`: Amount of lamport to swap out
   *    - `swapForY`: Swap token X to Y when it is true, else reversed.
   *    - `allowedSlippage`: Allowed slippage for the swap. Expressed in BPS. To convert from slippage percentage to BPS unit: SLIPPAGE_PERCENTAGE * 100
   * @returns {SwapQuote}
   *    - `inAmount`: Amount of lamport to swap in
   *    - `outAmount`: Amount of lamport to swap out
   *    - `fee`: Fee amount
   *    - `protocolFee`: Protocol fee amount
   *    - `maxInAmount`: Maximum amount of lamport to swap in
   *    - `binArraysPubkey`: Array of bin arrays involved in the swap
   */
  swapQuoteExactOut(outAmount, swapForY, allowedSlippage, binArrays) {
    const currentTimestamp = Date.now() / 1e3;
    let outAmountLeft = outAmount;
    let vParameterClone = Object.assign({}, this.lbPair.vParameters);
    let activeId = new BN9(this.lbPair.activeId);
    const binStep = this.lbPair.binStep;
    const sParameters2 = this.lbPair.parameters;
    this.updateReference(
      activeId.toNumber(),
      vParameterClone,
      sParameters2,
      currentTimestamp
    );
    let startBinId = activeId;
    let binArraysForSwap = /* @__PURE__ */ new Map();
    let actualInAmount = new BN9(0);
    let feeAmount = new BN9(0);
    let protocolFeeAmount = new BN9(0);
    while (!outAmountLeft.isZero()) {
      let binArrayAccountToSwap = findNextBinArrayWithLiquidity(
        swapForY,
        activeId,
        this.lbPair,
        this.binArrayBitmapExtension?.account ?? null,
        binArrays
      );
      if (binArrayAccountToSwap == null) {
        throw new Error("Insufficient liquidity");
      }
      binArraysForSwap.set(binArrayAccountToSwap.publicKey, true);
      this.updateVolatilityAccumulator(
        vParameterClone,
        sParameters2,
        activeId.toNumber()
      );
      if (isBinIdWithinBinArray(activeId, binArrayAccountToSwap.account.index)) {
        const bin = getBinFromBinArray(
          activeId.toNumber(),
          binArrayAccountToSwap.account
        );
        const { amountIn, amountOut, fee, protocolFee } = swapExactOutQuoteAtBin(
          bin,
          binStep,
          sParameters2,
          vParameterClone,
          outAmountLeft,
          swapForY
        );
        if (!amountOut.isZero()) {
          outAmountLeft = outAmountLeft.sub(amountOut);
          actualInAmount = actualInAmount.add(amountIn);
          feeAmount = feeAmount.add(fee);
          protocolFeeAmount = protocolFee.add(protocolFee);
        }
      }
      if (!outAmountLeft.isZero()) {
        if (swapForY) {
          activeId = activeId.sub(new BN9(1));
        } else {
          activeId = activeId.add(new BN9(1));
        }
      }
    }
    const startPrice = getPriceOfBinByBinId(
      startBinId.toNumber(),
      this.lbPair.binStep
    );
    const endPrice = getPriceOfBinByBinId(
      activeId.toNumber(),
      this.lbPair.binStep
    );
    const priceImpact = startPrice.sub(endPrice).abs().div(startPrice).mul(new Decimal4(100));
    const maxInAmount = actualInAmount.mul(new BN9(BASIS_POINT_MAX).add(allowedSlippage)).div(new BN9(BASIS_POINT_MAX));
    return {
      inAmount: actualInAmount,
      maxInAmount,
      outAmount,
      priceImpact,
      fee: feeAmount,
      protocolFee: protocolFeeAmount,
      binArraysPubkey: [...binArraysForSwap.keys()]
    };
  }
  /**
   * The `swapQuote` function returns a quote for a swap
   * @param
   *    - `inAmount`: Amount of lamport to swap in
   *    - `swapForY`: Swap token X to Y when it is true, else reversed.
   *    - `allowedSlippage`: Allowed slippage for the swap. Expressed in BPS. To convert from slippage percentage to BPS unit: SLIPPAGE_PERCENTAGE * 100
   *    - `binArrays`: binArrays for swapQuote.
   *    - `isPartialFill`: Flag to check whether the the swapQuote is partial fill, default = false.
   * @returns {SwapQuote}
   *    - `consumedInAmount`: Amount of lamport to swap in
   *    - `outAmount`: Amount of lamport to swap out
   *    - `fee`: Fee amount
   *    - `protocolFee`: Protocol fee amount
   *    - `minOutAmount`: Minimum amount of lamport to swap out
   *    - `priceImpact`: Price impact of the swap
   *    - `binArraysPubkey`: Array of bin arrays involved in the swap
   */
  swapQuote(inAmount, swapForY, allowedSlippage, binArrays, isPartialFill) {
    const currentTimestamp = Date.now() / 1e3;
    let inAmountLeft = inAmount;
    let vParameterClone = Object.assign({}, this.lbPair.vParameters);
    let activeId = new BN9(this.lbPair.activeId);
    const binStep = this.lbPair.binStep;
    const sParameters2 = this.lbPair.parameters;
    this.updateReference(
      activeId.toNumber(),
      vParameterClone,
      sParameters2,
      currentTimestamp
    );
    let startBin = null;
    let binArraysForSwap = /* @__PURE__ */ new Map();
    let actualOutAmount = new BN9(0);
    let feeAmount = new BN9(0);
    let protocolFeeAmount = new BN9(0);
    while (!inAmountLeft.isZero()) {
      let binArrayAccountToSwap = findNextBinArrayWithLiquidity(
        swapForY,
        activeId,
        this.lbPair,
        this.binArrayBitmapExtension?.account ?? null,
        binArrays
      );
      if (binArrayAccountToSwap == null) {
        if (isPartialFill) {
          break;
        } else {
          throw new Error("Insufficient liquidity");
        }
      }
      binArraysForSwap.set(binArrayAccountToSwap.publicKey, true);
      this.updateVolatilityAccumulator(
        vParameterClone,
        sParameters2,
        activeId.toNumber()
      );
      if (isBinIdWithinBinArray(activeId, binArrayAccountToSwap.account.index)) {
        const bin = getBinFromBinArray(
          activeId.toNumber(),
          binArrayAccountToSwap.account
        );
        const { amountIn, amountOut, fee, protocolFee } = swapExactInQuoteAtBin(
          bin,
          binStep,
          sParameters2,
          vParameterClone,
          inAmountLeft,
          swapForY
        );
        if (!amountIn.isZero()) {
          inAmountLeft = inAmountLeft.sub(amountIn);
          actualOutAmount = actualOutAmount.add(amountOut);
          feeAmount = feeAmount.add(fee);
          protocolFeeAmount = protocolFee.add(protocolFee);
          if (!startBin) {
            startBin = bin;
          }
        }
      }
      if (!inAmountLeft.isZero()) {
        if (swapForY) {
          activeId = activeId.sub(new BN9(1));
        } else {
          activeId = activeId.add(new BN9(1));
        }
      }
    }
    if (!startBin)
      throw new Error("Invalid start bin");
    inAmount = inAmount.sub(inAmountLeft);
    const outAmountWithoutSlippage = getOutAmount(
      startBin,
      inAmount.sub(
        computeFeeFromAmount(binStep, sParameters2, vParameterClone, inAmount)
      ),
      swapForY
    );
    const priceImpact = new Decimal4(actualOutAmount.toString()).sub(new Decimal4(outAmountWithoutSlippage.toString())).div(new Decimal4(outAmountWithoutSlippage.toString())).mul(new Decimal4(100));
    const minOutAmount = actualOutAmount.mul(new BN9(BASIS_POINT_MAX).sub(allowedSlippage)).div(new BN9(BASIS_POINT_MAX));
    const endPrice = getPriceOfBinByBinId(
      activeId.toNumber(),
      this.lbPair.binStep
    );
    return {
      consumedInAmount: inAmount,
      outAmount: actualOutAmount,
      fee: feeAmount,
      protocolFee: protocolFeeAmount,
      minOutAmount,
      priceImpact,
      binArraysPubkey: [...binArraysForSwap.keys()],
      endPrice
    };
  }
  async swapExactOut({
    inToken,
    outToken,
    outAmount,
    maxInAmount,
    lbPair,
    user,
    binArraysPubkey
  }) {
    const { tokenXMint, tokenYMint, reserveX, reserveY, activeId, oracle } = await this.program.account.lbPair.fetch(lbPair);
    const preInstructions = [computeBudgetIx()];
    const [
      { ataPubKey: userTokenIn, ix: createInTokenAccountIx },
      { ataPubKey: userTokenOut, ix: createOutTokenAccountIx }
    ] = await Promise.all([
      getOrCreateATAInstruction(
        this.program.provider.connection,
        inToken,
        user
      ),
      getOrCreateATAInstruction(
        this.program.provider.connection,
        outToken,
        user
      )
    ]);
    createInTokenAccountIx && preInstructions.push(createInTokenAccountIx);
    createOutTokenAccountIx && preInstructions.push(createOutTokenAccountIx);
    if (inToken.equals(NATIVE_MINT2)) {
      const wrapSOLIx = wrapSOLInstruction(
        user,
        userTokenIn,
        BigInt(maxInAmount.toString())
      );
      preInstructions.push(...wrapSOLIx);
    }
    const postInstructions = [];
    if (outToken.equals(NATIVE_MINT2)) {
      const closeWrappedSOLIx = await unwrapSOLInstruction(user);
      closeWrappedSOLIx && postInstructions.push(closeWrappedSOLIx);
    }
    let swapForY = true;
    if (outToken.equals(tokenXMint))
      swapForY = false;
    const binArrays = binArraysPubkey.map((pubkey) => {
      return {
        isSigner: false,
        isWritable: true,
        pubkey
      };
    });
    const swapTx = await this.program.methods.swapExactOut(maxInAmount, outAmount).accounts({
      lbPair,
      reserveX,
      reserveY,
      tokenXMint,
      tokenYMint,
      tokenXProgram: TOKEN_PROGRAM_ID2,
      tokenYProgram: TOKEN_PROGRAM_ID2,
      user,
      userTokenIn,
      userTokenOut,
      binArrayBitmapExtension: this.binArrayBitmapExtension ? this.binArrayBitmapExtension.publicKey : null,
      oracle,
      hostFeeIn: null
    }).remainingAccounts(binArrays).preInstructions(preInstructions).postInstructions(postInstructions).transaction();
    const { blockhash, lastValidBlockHeight } = await this.program.provider.connection.getLatestBlockhash("confirmed");
    return new Transaction({
      blockhash,
      lastValidBlockHeight,
      feePayer: user
    }).add(swapTx);
  }
  /**
   * Returns a transaction to be signed and sent by user performing swap.
   * @param {SwapWithPriceImpactParams}
   *    - `inToken`: The public key of the token to be swapped in.
   *    - `outToken`: The public key of the token to be swapped out.
   *    - `inAmount`: The amount of token to be swapped in.
   *    - `priceImpact`: Accepted price impact bps.
   *    - `lbPair`: The public key of the liquidity pool.
   *    - `user`: The public key of the user account.
   *    - `binArraysPubkey`: Array of bin arrays involved in the swap
   * @returns {Promise<Transaction>}
   */
  async swapWithPriceImpact({
    inToken,
    outToken,
    inAmount,
    lbPair,
    user,
    priceImpact,
    binArraysPubkey
  }) {
    const { tokenXMint, tokenYMint, reserveX, reserveY, activeId, oracle } = await this.program.account.lbPair.fetch(lbPair);
    const preInstructions = [computeBudgetIx()];
    const [
      { ataPubKey: userTokenIn, ix: createInTokenAccountIx },
      { ataPubKey: userTokenOut, ix: createOutTokenAccountIx }
    ] = await Promise.all([
      getOrCreateATAInstruction(
        this.program.provider.connection,
        inToken,
        user
      ),
      getOrCreateATAInstruction(
        this.program.provider.connection,
        outToken,
        user
      )
    ]);
    createInTokenAccountIx && preInstructions.push(createInTokenAccountIx);
    createOutTokenAccountIx && preInstructions.push(createOutTokenAccountIx);
    if (inToken.equals(NATIVE_MINT2)) {
      const wrapSOLIx = wrapSOLInstruction(
        user,
        userTokenIn,
        BigInt(inAmount.toString())
      );
      preInstructions.push(...wrapSOLIx);
    }
    const postInstructions = [];
    if (outToken.equals(NATIVE_MINT2)) {
      const closeWrappedSOLIx = await unwrapSOLInstruction(user);
      closeWrappedSOLIx && postInstructions.push(closeWrappedSOLIx);
    }
    let swapForY = true;
    if (outToken.equals(tokenXMint))
      swapForY = false;
    const binArrays = binArraysPubkey.map((pubkey) => {
      return {
        isSigner: false,
        isWritable: true,
        pubkey
      };
    });
    const swapTx = await this.program.methods.swapWithPriceImpact(
      inAmount,
      this.lbPair.activeId,
      priceImpact.toNumber()
    ).accounts({
      lbPair,
      reserveX,
      reserveY,
      tokenXMint,
      tokenYMint,
      tokenXProgram: TOKEN_PROGRAM_ID2,
      tokenYProgram: TOKEN_PROGRAM_ID2,
      user,
      userTokenIn,
      userTokenOut,
      binArrayBitmapExtension: this.binArrayBitmapExtension ? this.binArrayBitmapExtension.publicKey : null,
      oracle,
      hostFeeIn: null
    }).remainingAccounts(binArrays).preInstructions(preInstructions).postInstructions(postInstructions).transaction();
    const { blockhash, lastValidBlockHeight } = await this.program.provider.connection.getLatestBlockhash("confirmed");
    return new Transaction({
      blockhash,
      lastValidBlockHeight,
      feePayer: user
    }).add(swapTx);
  }
  /**
   * Returns a transaction to be signed and sent by user performing swap.
   * @param {SwapParams}
   *    - `inToken`: The public key of the token to be swapped in.
   *    - `outToken`: The public key of the token to be swapped out.
   *    - `inAmount`: The amount of token to be swapped in.
   *    - `minOutAmount`: The minimum amount of token to be swapped out.
   *    - `lbPair`: The public key of the liquidity pool.
   *    - `user`: The public key of the user account.
   *    - `binArraysPubkey`: Array of bin arrays involved in the swap
   * @returns {Promise<Transaction>}
   */
  async swap({
    inToken,
    outToken,
    inAmount,
    minOutAmount,
    lbPair,
    user,
    binArraysPubkey
  }) {
    const { tokenXMint, tokenYMint, reserveX, reserveY, activeId, oracle } = await this.program.account.lbPair.fetch(lbPair);
    const preInstructions = [computeBudgetIx()];
    const [
      { ataPubKey: userTokenIn, ix: createInTokenAccountIx },
      { ataPubKey: userTokenOut, ix: createOutTokenAccountIx }
    ] = await Promise.all([
      getOrCreateATAInstruction(
        this.program.provider.connection,
        inToken,
        user
      ),
      getOrCreateATAInstruction(
        this.program.provider.connection,
        outToken,
        user
      )
    ]);
    createInTokenAccountIx && preInstructions.push(createInTokenAccountIx);
    createOutTokenAccountIx && preInstructions.push(createOutTokenAccountIx);
    if (inToken.equals(NATIVE_MINT2)) {
      const wrapSOLIx = wrapSOLInstruction(
        user,
        userTokenIn,
        BigInt(inAmount.toString())
      );
      preInstructions.push(...wrapSOLIx);
    }
    const postInstructions = [];
    if (outToken.equals(NATIVE_MINT2)) {
      const closeWrappedSOLIx = await unwrapSOLInstruction(user);
      closeWrappedSOLIx && postInstructions.push(closeWrappedSOLIx);
    }
    let swapForY = true;
    if (outToken.equals(tokenXMint))
      swapForY = false;
    const binArrays = binArraysPubkey.map((pubkey) => {
      return {
        isSigner: false,
        isWritable: true,
        pubkey
      };
    });
    const swapTx = await this.program.methods.swap(inAmount, minOutAmount).accounts({
      lbPair,
      reserveX,
      reserveY,
      tokenXMint,
      tokenYMint,
      tokenXProgram: TOKEN_PROGRAM_ID2,
      // dont use 2022 first; lack familiarity
      tokenYProgram: TOKEN_PROGRAM_ID2,
      // dont use 2022 first; lack familiarity
      user,
      userTokenIn,
      userTokenOut,
      binArrayBitmapExtension: this.binArrayBitmapExtension ? this.binArrayBitmapExtension.publicKey : null,
      oracle,
      hostFeeIn: null
    }).remainingAccounts(binArrays).preInstructions(preInstructions).postInstructions(postInstructions).transaction();
    const { blockhash, lastValidBlockHeight } = await this.program.provider.connection.getLatestBlockhash("confirmed");
    return new Transaction({
      blockhash,
      lastValidBlockHeight,
      feePayer: user
    }).add(swapTx);
  }
  /**
   * The claimLMReward function is used to claim rewards for a specific position owned by a specific owner.
   * @param
   *    - `owner`: The public key of the owner of the position.
   *    - `position`: The public key of the position account.
   * @returns {Promise<Transaction>}
   */
  async claimLMReward({
    owner,
    position
  }) {
    const claimTransactions = await this.createClaimBuildMethod({
      owner,
      position
    });
    if (!claimTransactions.length)
      return;
    const { blockhash, lastValidBlockHeight } = await this.program.provider.connection.getLatestBlockhash("confirmed");
    return new Transaction({
      blockhash,
      lastValidBlockHeight,
      feePayer: owner
    }).add(...claimTransactions);
  }
  /**
   * The `claimAllLMRewards` function is used to claim all liquidity mining rewards for a given owner
   * and their positions.
   * @param
   *    - `owner`: The public key of the owner of the positions.
   *    - `positions`: An array of objects of type `PositionData` that represents the positions to claim rewards from.
   * @returns {Promise<Transaction[]>}
   */
  async claimAllLMRewards({
    owner,
    positions
  }) {
    const claimAllTxs = (await Promise.all(
      positions.filter(
        ({ positionData: { rewardOne, rewardTwo } }) => !rewardOne.isZero() || !rewardTwo.isZero()
      ).map(async (position, idx) => {
        return await this.createClaimBuildMethod({
          owner,
          position,
          shouldIncludePreIx: idx === 0
        });
      })
    )).flat();
    const chunkedClaimAllTx = chunks(claimAllTxs, MAX_CLAIM_ALL_ALLOWED);
    const { blockhash, lastValidBlockHeight } = await this.program.provider.connection.getLatestBlockhash("confirmed");
    return Promise.all(
      chunkedClaimAllTx.map(async (claimAllTx) => {
        return new Transaction({
          feePayer: owner,
          blockhash,
          lastValidBlockHeight
        }).add(computeBudgetIx()).add(...claimAllTx);
      })
    );
  }
  async setActivationSlot(activationSlot) {
    const setActivationSlotTx = await this.program.methods.setActivationSlot(activationSlot).accounts({
      lbPair: this.pubkey,
      admin: this.lbPair.creator
    }).transaction();
    const { blockhash, lastValidBlockHeight } = await this.program.provider.connection.getLatestBlockhash("confirmed");
    return new Transaction({
      feePayer: this.lbPair.creator,
      blockhash,
      lastValidBlockHeight
    }).add(setActivationSlotTx);
  }
  /**
   * The function `updateWhitelistedWallet` is used to whitelist a wallet, enabling it to deposit into a permissioned pool before the activation slot.
   * @param
   *    - `walletsToWhitelist`: The public key of the wallet.
   *    - `overrideIndexes`: Index of the whitelisted wallet to be inserted. Check DLMM.lbPair.whitelistedWallet for the index
   * @returns {Promise<Transaction>}
   */
  async updateWhitelistedWallet(walletsToWhitelist) {
    const instructions = [];
    const updateWhitelistedWalletIx = await this.program.methods.updateWhitelistedWallet(walletsToWhitelist).accounts({
      lbPair: this.pubkey,
      creator: this.lbPair.creator
    }).instruction();
    instructions.push(updateWhitelistedWalletIx);
    const { blockhash, lastValidBlockHeight } = await this.program.provider.connection.getLatestBlockhash("confirmed");
    return new Transaction({
      feePayer: this.lbPair.creator,
      blockhash,
      lastValidBlockHeight
    }).add(...instructions);
  }
  /**
   * The function `claimSwapFee` is used to claim swap fees for a specific position owned by a specific owner.
   * @param
   *    - `owner`: The public key of the owner of the position.
   *    - `position`: The public key of the position account.
   * @returns {Promise<Transaction>}
   */
  async claimSwapFee({
    owner,
    position
  }) {
    const claimFeeTx = await this.createClaimSwapFeeMethod({ owner, position });
    const { blockhash, lastValidBlockHeight } = await this.program.provider.connection.getLatestBlockhash("confirmed");
    return new Transaction({
      blockhash,
      lastValidBlockHeight,
      feePayer: owner
    }).add(claimFeeTx);
  }
  /**
   * The `claimAllSwapFee` function to claim swap fees for multiple positions owned by a specific owner.
   * @param
   *    - `owner`: The public key of the owner of the positions.
   *    - `positions`: An array of objects of type `PositionData` that represents the positions to claim swap fees from.
   * @returns {Promise<Transaction[]>}
   */
  async claimAllSwapFee({
    owner,
    positions
  }) {
    const claimAllTxs = (await Promise.all(
      positions.filter(
        ({ positionData: { feeX, feeY } }) => !feeX.isZero() || !feeY.isZero()
      ).map(async (position, idx, positions2) => {
        return await this.createClaimSwapFeeMethod({
          owner,
          position,
          shouldIncludePretIx: idx === 0,
          shouldIncludePostIx: idx === positions2.length - 1
        });
      })
    )).flat();
    const chunkedClaimAllTx = chunks(claimAllTxs, MAX_CLAIM_ALL_ALLOWED);
    return Promise.all(
      chunkedClaimAllTx.map(async (claimAllTx) => {
        const { recentBlockhash, lastValidBlockHeight } = claimAllTx[0];
        return new Transaction({
          feePayer: owner,
          blockhash: recentBlockhash,
          lastValidBlockHeight
        }).add(computeBudgetIx()).add(...claimAllTx);
      })
    );
  }
  /**
   * The function `claimAllRewardsByPosition` allows a user to claim all rewards for a specific
   * position.
   * @param
   *    - `owner`: The public key of the owner of the position.
   *    - `position`: The public key of the position account.
   * @returns {Promise<Transaction[]>}
   */
  async claimAllRewardsByPosition({
    owner,
    position
  }) {
    const preInstructions = [];
    const pairTokens = [this.tokenX.publicKey, this.tokenY.publicKey];
    const tokensInvolved = [...pairTokens];
    for (let i = 0; i < 2; i++) {
      const rewardMint = this.lbPair.rewardInfos[i].mint;
      if (!tokensInvolved.some((pubkey) => rewardMint.equals(pubkey)) && !rewardMint.equals(PublicKey6.default)) {
        tokensInvolved.push(this.lbPair.rewardInfos[i].mint);
      }
    }
    const feeOwner = position.positionData.feeOwner.equals(PublicKey6.default) ? owner : position.positionData.feeOwner;
    const createATAAccAndIx = await Promise.all(
      tokensInvolved.map((token) => {
        if (pairTokens.some((t) => t.equals(token))) {
          return getOrCreateATAInstruction(
            this.program.provider.connection,
            token,
            feeOwner,
            owner
          );
        }
        return getOrCreateATAInstruction(
          this.program.provider.connection,
          token,
          owner
        );
      })
    );
    createATAAccAndIx.forEach(({ ix }) => ix && preInstructions.push(ix));
    const claimAllSwapFeeTxs = await this.createClaimSwapFeeMethod({
      owner,
      position,
      shouldIncludePostIx: false,
      shouldIncludePretIx: false
    });
    const claimAllLMTxs = await this.createClaimBuildMethod({
      owner,
      position,
      shouldIncludePreIx: false
    });
    const claimAllTxs = chunks(
      [claimAllSwapFeeTxs, ...claimAllLMTxs],
      MAX_CLAIM_ALL_ALLOWED
    );
    const postInstructions = [];
    if (tokensInvolved.some((pubkey) => pubkey.equals(NATIVE_MINT2))) {
      const closeWrappedSOLIx = await unwrapSOLInstruction(owner);
      closeWrappedSOLIx && postInstructions.push(closeWrappedSOLIx);
    }
    const { blockhash, lastValidBlockHeight } = await this.program.provider.connection.getLatestBlockhash("confirmed");
    return Promise.all(
      claimAllTxs.map(async (claimAllTx) => {
        const tx = new Transaction({
          feePayer: owner,
          blockhash,
          lastValidBlockHeight
        }).add(computeBudgetIx());
        if (preInstructions.length)
          tx.add(...preInstructions);
        tx.add(...claimAllTx);
        if (postInstructions.length)
          tx.add(...postInstructions);
        return tx;
      })
    );
  }
  /**
   * The `seedLiquidity` function create multiple grouped instructions. The grouped instructions will be either [initialize bin array + initialize position instructions] or [deposit instruction] combination.
   * @param
   *    - `owner`: The public key of the positions owner.
   *    - `operator`: The public key of the operator. Operator can add liquidity for the position owner, withdraw on behalf of position owner (only can withdraw to position owner), and claim fee on behalf of position owner / fee owner (only can claim fee to position / fee owner)
   *    - `feeOwner`: The public key to receive claimed fee.
   *    - `seedAmount`: Lamport amount to be seeded to the pool.
   *    - `minPrice`: Start price in UI format
   *    - `maxPrice`: End price in UI format
   *    - `base`: Base key
   * @returns {Promise<SeedLiquidityResponse>}
   */
  async seedLiquidity(owner, operator, feeOwner, seedAmount, curvature, minPrice, maxPrice, base) {
    const toLamportMultiplier = new Decimal4(
      10 ** (this.tokenY.decimal - this.tokenX.decimal)
    );
    const minPricePerLamport = new Decimal4(minPrice).mul(toLamportMultiplier);
    const maxPricePerLamport = new Decimal4(maxPrice).mul(toLamportMultiplier);
    const minBinId = new BN9(
      DLMM.getBinIdFromPrice(minPricePerLamport, this.lbPair.binStep, false)
    );
    const maxBinId = new BN9(
      DLMM.getBinIdFromPrice(maxPricePerLamport, this.lbPair.binStep, true)
    );
    if (minBinId.toNumber() < this.lbPair.activeId) {
      throw new Error("minPrice < current pair price");
    }
    if (minBinId.toNumber() >= maxBinId.toNumber()) {
      throw new Error("Price range too small");
    }
    const k = 1 / curvature;
    const binDepositAmount = generateAmountForBinRange(
      seedAmount,
      this.lbPair.binStep,
      this.tokenX.decimal,
      this.tokenY.decimal,
      minBinId,
      maxBinId,
      k
    );
    const decompressMultiplier = new BN9(10 ** this.tokenX.decimal);
    let { compressedBinAmount, compressionLoss } = compressBinAmount(
      binDepositAmount,
      decompressMultiplier
    );
    let {
      newCompressedBinAmount: compressedBinDepositAmount,
      loss: finalLoss
    } = distributeAmountToCompressedBinsByRatio(
      compressedBinAmount,
      compressionLoss,
      decompressMultiplier,
      new BN9(2 ** 32 - 1)
      // u32
    );
    const positionCount = getPositionCount(minBinId, maxBinId.sub(new BN9(1)));
    const seederTokenX = getAssociatedTokenAddressSync2(
      this.lbPair.tokenXMint,
      operator,
      false
    );
    const initializeBinArraysAndPositionIxs = [];
    const addLiquidityIxs = [];
    const appendedInitBinArrayIx = /* @__PURE__ */ new Set();
    for (let i = 0; i < positionCount.toNumber(); i++) {
      const lowerBinId = minBinId.add(MAX_BIN_PER_POSITION.mul(new BN9(i)));
      const upperBinId = lowerBinId.add(MAX_BIN_PER_POSITION).sub(new BN9(1));
      const lowerBinArrayIndex = binIdToBinArrayIndex(lowerBinId);
      const upperBinArrayIndex = binIdToBinArrayIndex(upperBinId);
      const [positionPda, _bump] = derivePosition(
        this.pubkey,
        base,
        lowerBinId,
        MAX_BIN_PER_POSITION,
        this.program.programId
      );
      const [lowerBinArray] = deriveBinArray(
        this.pubkey,
        lowerBinArrayIndex,
        this.program.programId
      );
      const [upperBinArray] = deriveBinArray(
        this.pubkey,
        upperBinArrayIndex,
        this.program.programId
      );
      const accounts = await this.program.provider.connection.getMultipleAccountsInfo([
        lowerBinArray,
        upperBinArray,
        positionPda
      ]);
      let instructions = [computeBudgetIx()];
      const lowerBinArrayAccount = accounts[0];
      if (!lowerBinArrayAccount && !appendedInitBinArrayIx.has(lowerBinArray.toBase58())) {
        instructions.push(
          await this.program.methods.initializeBinArray(lowerBinArrayIndex).accounts({
            lbPair: this.pubkey,
            binArray: lowerBinArray,
            funder: operator
          }).instruction()
        );
        appendedInitBinArrayIx.add(lowerBinArray.toBase58());
      }
      const upperBinArrayAccount = accounts[1];
      if (!upperBinArrayAccount && !appendedInitBinArrayIx.has(upperBinArray.toBase58())) {
        instructions.push(
          await this.program.methods.initializeBinArray(upperBinArrayIndex).accounts({
            lbPair: this.pubkey,
            binArray: upperBinArray,
            funder: operator
          }).instruction()
        );
        appendedInitBinArrayIx.add(upperBinArray.toBase58());
      }
      const positionAccount = accounts[2];
      if (!positionAccount) {
        instructions.push(
          await this.program.methods.initializePositionByOperator(
            lowerBinId.toNumber(),
            MAX_BIN_PER_POSITION.toNumber(),
            owner,
            feeOwner
          ).accounts({
            lbPair: this.pubkey,
            position: positionPda,
            base,
            operator,
            payer: operator
          }).instruction()
        );
      }
      if (instructions.length > 1) {
        initializeBinArraysAndPositionIxs.push(instructions);
        instructions = [computeBudgetIx()];
      }
      const positionDeposited = positionAccount && this.program.coder.accounts.decode("positionV2", positionAccount.data).liquidityShares.reduce((total, cur) => total.add(cur), new BN9(0)).gt(new BN9(0));
      if (!positionDeposited) {
        const cappedUpperBinId = Math.min(
          upperBinId.toNumber(),
          maxBinId.toNumber() - 1
        );
        const bins = [];
        for (let i2 = lowerBinId.toNumber(); i2 <= cappedUpperBinId; i2++) {
          bins.push({
            binId: i2,
            amount: compressedBinDepositAmount.get(i2).toNumber()
          });
        }
        instructions.push(
          await this.program.methods.addLiquidityOneSidePrecise({
            bins,
            decompressMultiplier
          }).accounts({
            position: positionPda,
            lbPair: this.pubkey,
            binArrayBitmapExtension: this.binArrayBitmapExtension ? this.binArrayBitmapExtension.publicKey : this.program.programId,
            userToken: seederTokenX,
            reserve: this.lbPair.reserveX,
            tokenMint: this.lbPair.tokenXMint,
            binArrayLower: lowerBinArray,
            binArrayUpper: upperBinArray,
            sender: operator
          }).instruction()
        );
        if (i + 1 >= positionCount.toNumber() && !finalLoss.isZero()) {
          instructions.push(
            await this.program.methods.addLiquidityOneSide({
              amount: finalLoss,
              activeId: this.lbPair.activeId,
              maxActiveBinSlippage: 0,
              binLiquidityDist: [
                {
                  binId: cappedUpperBinId,
                  weight: 1
                }
              ]
            }).accounts({
              position: positionPda,
              lbPair: this.pubkey,
              binArrayBitmapExtension: this.binArrayBitmapExtension ? this.binArrayBitmapExtension.publicKey : this.program.programId,
              userToken: seederTokenX,
              reserve: this.lbPair.reserveX,
              tokenMint: this.lbPair.tokenXMint,
              binArrayLower: lowerBinArray,
              binArrayUpper: upperBinArray,
              sender: operator
            }).instruction()
          );
        }
        addLiquidityIxs.push(instructions);
      }
    }
    return {
      initializeBinArraysAndPositionIxs,
      addLiquidityIxs
    };
  }
  /**
   * Initializes bin arrays for the given bin array indexes if it wasn't initialized.
   *
   * @param {BN[]} binArrayIndexes - An array of bin array indexes to initialize.
   * @param {PublicKey} funder - The public key of the funder.
   * @return {Promise<TransactionInstruction[]>} An array of transaction instructions to initialize the bin arrays.
   */
  async initializeBinArrays(binArrayIndexes, funder) {
    const ixs = [];
    for (const idx of binArrayIndexes) {
      const [binArray] = deriveBinArray(
        this.pubkey,
        idx,
        this.program.programId
      );
      const binArrayAccount = await this.program.provider.connection.getAccountInfo(binArray);
      if (binArrayAccount === null) {
        ixs.push(
          await this.program.methods.initializeBinArray(idx).accounts({
            binArray,
            funder,
            lbPair: this.pubkey
          }).instruction()
        );
      }
    }
    return ixs;
  }
  /**
   *
   * @param
   *    - `lowerBinId`: Lower bin ID of the position. This represent the lowest price of the position
   *    - `positionWidth`: Width of the position. This will decide the upper bin id of the position, which represents the highest price of the position. UpperBinId = lowerBinId + positionWidth
   *    - `owner`: Owner of the position.
   *    - `operator`: Operator of the position. Operator able to manage the position on behalf of the position owner. However, liquidity withdrawal issue by the operator can only send to the position owner.
   *    - `base`: Base key
   *    - `feeOwner`: Owner of the fees earned by the position.
   *    - `payer`: Payer for the position account rental.
   * @returns
   */
  async initializePositionByOperator({
    lowerBinId,
    positionWidth,
    owner,
    feeOwner,
    base,
    operator,
    payer
  }) {
    const [positionPda, _bump] = derivePosition(
      this.pubkey,
      base,
      lowerBinId,
      positionWidth,
      this.program.programId
    );
    let initializePositionByOperatorTx = await this.program.methods.initializePositionByOperator(
      lowerBinId.toNumber(),
      MAX_BIN_PER_POSITION.toNumber(),
      owner,
      feeOwner
    ).accounts({
      lbPair: this.pubkey,
      position: positionPda,
      base,
      operator,
      payer
    }).transaction();
    const { blockhash, lastValidBlockHeight } = await this.program.provider.connection.getLatestBlockhash("confirmed");
    return new Transaction({
      feePayer: operator,
      blockhash,
      lastValidBlockHeight
    }).add(initializePositionByOperatorTx);
  }
  /**
   * The `claimAllRewards` function to claim swap fees and LM rewards for multiple positions owned by a specific owner.
   * @param
   *    - `owner`: The public key of the owner of the positions.
   *    - `positions`: An array of objects of type `PositionData` that represents the positions to claim swap fees and LM rewards from.
   * @returns {Promise<Transaction[]>}
   */
  async claimAllRewards({
    owner,
    positions
  }) {
    const preInstructions = [];
    const pairsToken = [this.tokenX.publicKey, this.tokenY.publicKey];
    const tokensInvolved = [...pairsToken];
    for (let i = 0; i < 2; i++) {
      const rewardMint = this.lbPair.rewardInfos[i].mint;
      if (!tokensInvolved.some((pubkey) => rewardMint.equals(pubkey)) && !rewardMint.equals(PublicKey6.default)) {
        tokensInvolved.push(this.lbPair.rewardInfos[i].mint);
      }
    }
    positions = positions.filter(
      ({ positionData: { feeX, feeY, rewardOne, rewardTwo } }) => !feeX.isZero() || !feeY.isZero() || !rewardOne.isZero() || !rewardTwo.isZero()
    );
    const feeOwners = [
      .../* @__PURE__ */ new Set([
        owner.toBase58(),
        ...positions.filter((p) => !p.positionData.feeOwner.equals(PublicKey6.default)).map((p) => p.positionData.feeOwner.toBase58())
      ])
    ].map((pk) => new PublicKey6(pk));
    const createATAAccAndIx = await Promise.all(
      tokensInvolved.map((token) => {
        if (pairsToken.some((p) => p.equals(token))) {
          return feeOwners.map(
            (customOwner) => getOrCreateATAInstruction(
              this.program.provider.connection,
              token,
              customOwner,
              owner
            )
          );
        }
        return [
          getOrCreateATAInstruction(
            this.program.provider.connection,
            token,
            owner
          )
        ];
      }).flat()
    );
    createATAAccAndIx.forEach(({ ix }) => ix && preInstructions.push(ix));
    const claimAllSwapFeeTxs = (await Promise.all(
      positions.filter(
        ({ positionData: { feeX, feeY } }) => !feeX.isZero() || !feeY.isZero()
      ).map(async (position) => {
        return await this.createClaimSwapFeeMethod({
          owner,
          position,
          shouldIncludePretIx: false,
          shouldIncludePostIx: false
        });
      })
    )).flat();
    const claimAllLMTxs = (await Promise.all(
      positions.filter(
        ({ positionData: { rewardOne, rewardTwo } }) => !rewardOne.isZero() || !rewardTwo.isZero()
      ).map(async (position) => {
        return await this.createClaimBuildMethod({
          owner,
          position,
          shouldIncludePreIx: false
        });
      })
    )).flat();
    const chunkedClaimAllTx = chunks(
      [...claimAllSwapFeeTxs, ...claimAllLMTxs],
      MAX_CLAIM_ALL_ALLOWED
    );
    const postInstructions = [];
    if (tokensInvolved.some((pubkey) => pubkey.equals(NATIVE_MINT2))) {
      const closeWrappedSOLIx = await unwrapSOLInstruction(owner);
      closeWrappedSOLIx && postInstructions.push(closeWrappedSOLIx);
    }
    const { blockhash, lastValidBlockHeight } = await this.program.provider.connection.getLatestBlockhash("confirmed");
    return Promise.all(
      chunkedClaimAllTx.map(async (claimAllTx) => {
        const tx = new Transaction({
          feePayer: owner,
          blockhash,
          lastValidBlockHeight
        }).add(computeBudgetIx());
        if (preInstructions.length)
          tx.add(...preInstructions);
        tx.add(...claimAllTx);
        if (postInstructions.length)
          tx.add(...postInstructions);
        return tx;
      })
    );
  }
  canSyncWithMarketPrice(marketPrice, activeBinId) {
    const marketPriceBinId = this.getBinIdFromPrice(
      Number(
        DLMM.getPricePerLamport(
          this.tokenX.decimal,
          this.tokenY.decimal,
          marketPrice
        )
      ),
      false
    );
    const marketPriceBinArrayIndex = binIdToBinArrayIndex(
      new BN9(marketPriceBinId)
    );
    const swapForY = marketPriceBinId < activeBinId;
    const toBinArrayIndex = findNextBinArrayIndexWithLiquidity(
      swapForY,
      new BN9(activeBinId),
      this.lbPair,
      this.binArrayBitmapExtension?.account ?? null
    );
    if (toBinArrayIndex === null)
      return true;
    return swapForY ? marketPriceBinArrayIndex.gt(toBinArrayIndex) : marketPriceBinArrayIndex.lt(toBinArrayIndex);
  }
  /**
   * The `syncWithMarketPrice` function is used to sync the liquidity pool with the market price.
   * @param
   *    - `marketPrice`: The market price to sync with.
   *    - `owner`: The public key of the owner of the liquidity pool.
   * @returns {Promise<Transaction>}
   */
  async syncWithMarketPrice(marketPrice, owner) {
    const marketPriceBinId = this.getBinIdFromPrice(
      Number(
        DLMM.getPricePerLamport(
          this.tokenX.decimal,
          this.tokenY.decimal,
          marketPrice
        )
      ),
      false
    );
    const activeBin = await this.getActiveBin();
    const activeBinId = activeBin.binId;
    if (!this.canSyncWithMarketPrice(marketPrice, activeBinId)) {
      throw new Error(
        "Unable to sync with market price due to bin with liquidity between current and market price bin"
      );
    }
    const fromBinArrayIndex = binIdToBinArrayIndex(new BN9(activeBinId));
    const swapForY = marketPriceBinId < activeBinId;
    const toBinArrayIndex = findNextBinArrayIndexWithLiquidity(
      swapForY,
      new BN9(activeBinId),
      this.lbPair,
      this.binArrayBitmapExtension?.account ?? null
    );
    const accountsToFetch = [];
    const [binArrayBitMapExtensionPubkey] = deriveBinArrayBitmapExtension(
      this.pubkey,
      this.program.programId
    );
    accountsToFetch.push(binArrayBitMapExtensionPubkey);
    const [fromBinArrayPubkey] = deriveBinArray(
      this.pubkey,
      fromBinArrayIndex,
      this.program.programId
    );
    accountsToFetch.push(fromBinArrayPubkey);
    const toBinArrayPubkey = (() => {
      if (!toBinArrayIndex)
        return null;
      const [toBinArrayPubkey2] = deriveBinArray(
        this.pubkey,
        toBinArrayIndex,
        this.program.programId
      );
      accountsToFetch.push(toBinArrayPubkey2);
      return toBinArrayPubkey2;
    })();
    const binArrayAccounts = await this.program.provider.connection.getMultipleAccountsInfo(
      accountsToFetch
    );
    let fromBinArray = null;
    let toBinArray = null;
    let binArrayBitmapExtension = null;
    if (!!binArrayAccounts?.[0]) {
      binArrayBitmapExtension = binArrayBitMapExtensionPubkey;
    }
    if (!!binArrayAccounts?.[1]) {
      fromBinArray = fromBinArrayPubkey;
    }
    if (!!binArrayAccounts?.[2] && !!toBinArrayIndex) {
      toBinArray = toBinArrayPubkey;
    }
    const { blockhash, lastValidBlockHeight } = await this.program.provider.connection.getLatestBlockhash("confirmed");
    const syncWithMarketPriceTx = await this.program.methods.goToABin(marketPriceBinId).accounts({
      lbPair: this.pubkey,
      binArrayBitmapExtension,
      fromBinArray,
      toBinArray
    }).transaction();
    return new Transaction({
      feePayer: owner,
      blockhash,
      lastValidBlockHeight
    }).add(syncWithMarketPriceTx);
  }
  async getMaxPriceInBinArrays(binArrayAccounts) {
    const sortedBinArrays = [...binArrayAccounts].sort(
      ({ account: { index: indexA } }, { account: { index: indexB } }) => indexA.toNumber() - indexB.toNumber()
    );
    let count = sortedBinArrays.length - 1;
    let binPriceWithLastLiquidity;
    while (count >= 0) {
      const binArray = sortedBinArrays[count];
      if (binArray) {
        const bins = binArray.account.bins;
        if (bins.every(({ amountX }) => amountX.isZero())) {
          count--;
        } else {
          const lastBinWithLiquidityIndex = bins.findLastIndex(
            ({ amountX }) => !amountX.isZero()
          );
          binPriceWithLastLiquidity = bins[lastBinWithLiquidityIndex].price.toString();
          count = -1;
        }
      }
    }
    return this.fromPricePerLamport(
      Number(binPriceWithLastLiquidity) / (2 ** 64 - 1)
    );
  }
  /** Private static method */
  static async getBinArrays(program, lbPairPubkey) {
    return program.account.binArray.all([
      {
        memcmp: {
          bytes: bs58.encode(lbPairPubkey.toBuffer()),
          offset: 8 + 16
        }
      }
    ]);
  }
  static async getClaimableLMReward(program, positionVersion, lbPair, onChainTimestamp, position, lowerBinArray, upperBinArray) {
    const lowerBinArrayIdx = binIdToBinArrayIndex(new BN9(position.lowerBinId));
    let rewards = [new BN9(0), new BN9(0)];
    let _lowerBinArray = lowerBinArray;
    let _upperBinArray = upperBinArray;
    if (!lowerBinArray || !upperBinArray) {
      const lowerBinArrayIdx2 = binIdToBinArrayIndex(
        new BN9(position.lowerBinId)
      );
      const [lowerBinArray2] = deriveBinArray(
        position.lbPair,
        lowerBinArrayIdx2,
        program.programId
      );
      const upperBinArrayIdx = lowerBinArrayIdx2.add(new BN9(1));
      const [upperBinArray2] = deriveBinArray(
        position.lbPair,
        upperBinArrayIdx,
        program.programId
      );
      [_lowerBinArray, _upperBinArray] = await program.account.binArray.fetchMultiple([
        lowerBinArray2,
        upperBinArray2
      ]);
    }
    if (!_lowerBinArray || !_upperBinArray)
      throw new Error("BinArray not found");
    for (let i = position.lowerBinId; i <= position.upperBinId; i++) {
      const binArrayIdx = binIdToBinArrayIndex(new BN9(i));
      const binArray = binArrayIdx.eq(lowerBinArrayIdx) ? _lowerBinArray : _upperBinArray;
      const binState = getBinFromBinArray(i, binArray);
      const binIdxInPosition = i - position.lowerBinId;
      const positionRewardInfo = position.rewardInfos[binIdxInPosition];
      const liquidityShare = positionVersion === 0 /* V1 */ ? position.liquidityShares[binIdxInPosition] : position.liquidityShares[binIdxInPosition].shrn(64);
      for (let j = 0; j < 2; j++) {
        const pairRewardInfo = lbPair.rewardInfos[j];
        if (!pairRewardInfo.mint.equals(PublicKey6.default)) {
          let rewardPerTokenStored = binState.rewardPerTokenStored[j];
          if (i == lbPair.activeId && !binState.liquiditySupply.isZero()) {
            const currentTime = new BN9(
              Math.min(
                onChainTimestamp,
                pairRewardInfo.rewardDurationEnd.toNumber()
              )
            );
            const delta2 = currentTime.sub(pairRewardInfo.lastUpdateTime);
            const liquiditySupply = binArray.version == 0 ? binState.liquiditySupply : binState.liquiditySupply.shrn(64);
            const rewardPerTokenStoredDelta = pairRewardInfo.rewardRate.mul(delta2).div(new BN9(15)).div(liquiditySupply);
            rewardPerTokenStored = rewardPerTokenStored.add(
              rewardPerTokenStoredDelta
            );
          }
          const delta = rewardPerTokenStored.sub(
            positionRewardInfo.rewardPerTokenCompletes[j]
          );
          const newReward = mulShr(
            delta,
            liquidityShare,
            SCALE_OFFSET,
            1 /* Down */
          );
          rewards[j] = rewards[j].add(newReward).add(positionRewardInfo.rewardPendings[j]);
        }
      }
    }
    return {
      rewardOne: rewards[0],
      rewardTwo: rewards[1]
    };
  }
  static async getClaimableSwapFee(program, positionVersion, position, lowerBinArray, upperBinArray) {
    const lowerBinArrayIdx = binIdToBinArrayIndex(new BN9(position.lowerBinId));
    let feeX = new BN9(0);
    let feeY = new BN9(0);
    let _lowerBinArray = lowerBinArray;
    let _upperBinArray = upperBinArray;
    if (!lowerBinArray || !upperBinArray) {
      const lowerBinArrayIdx2 = binIdToBinArrayIndex(
        new BN9(position.lowerBinId)
      );
      const [lowerBinArray2] = deriveBinArray(
        position.lbPair,
        lowerBinArrayIdx2,
        program.programId
      );
      const upperBinArrayIdx = lowerBinArrayIdx2.add(new BN9(1));
      const [upperBinArray2] = deriveBinArray(
        position.lbPair,
        upperBinArrayIdx,
        program.programId
      );
      [_lowerBinArray, _upperBinArray] = await program.account.binArray.fetchMultiple([
        lowerBinArray2,
        upperBinArray2
      ]);
    }
    if (!_lowerBinArray || !_upperBinArray)
      throw new Error("BinArray not found");
    for (let i = position.lowerBinId; i <= position.upperBinId; i++) {
      const binArrayIdx = binIdToBinArrayIndex(new BN9(i));
      const binArray = binArrayIdx.eq(lowerBinArrayIdx) ? _lowerBinArray : _upperBinArray;
      const binState = getBinFromBinArray(i, binArray);
      const binIdxInPosition = i - position.lowerBinId;
      const feeInfos = position.feeInfos[binIdxInPosition];
      const liquidityShare = positionVersion === 0 /* V1 */ ? position.liquidityShares[binIdxInPosition] : position.liquidityShares[binIdxInPosition].shrn(64);
      const newFeeX = mulShr(
        liquidityShare,
        binState.feeAmountXPerTokenStored.sub(feeInfos.feeXPerTokenComplete),
        SCALE_OFFSET,
        1 /* Down */
      );
      const newFeeY = mulShr(
        liquidityShare,
        binState.feeAmountYPerTokenStored.sub(feeInfos.feeYPerTokenComplete),
        SCALE_OFFSET,
        1 /* Down */
      );
      feeX = feeX.add(newFeeX).add(feeInfos.feeXPending);
      feeY = feeY.add(newFeeY).add(feeInfos.feeYPending);
    }
    return { feeX, feeY };
  }
  static async processPosition(program, version, lbPair, onChainTimestamp, position, baseTokenDecimal, quoteTokenDecimal, lowerBinArray, upperBinArray, feeOwner) {
    const {
      lowerBinId,
      upperBinId,
      liquidityShares: posShares,
      lastUpdatedAt,
      totalClaimedFeeXAmount,
      totalClaimedFeeYAmount
    } = position;
    const bins = this.getBinsBetweenLowerAndUpperBound(
      lbPair,
      lowerBinId,
      upperBinId,
      baseTokenDecimal,
      quoteTokenDecimal,
      lowerBinArray,
      upperBinArray
    );
    if (!bins.length)
      return null;
    if (bins[0].binId !== lowerBinId || bins[bins.length - 1].binId !== upperBinId)
      throw new Error("Bin ID mismatch");
    const positionData = [];
    let totalXAmount = new Decimal4(0);
    let totalYAmount = new Decimal4(0);
    bins.forEach((bin, idx) => {
      const binSupply = new Decimal4(bin.supply.toString());
      let posShare;
      if (bin.version === 1 && version === 0 /* V1 */) {
        posShare = new Decimal4(posShares[idx].shln(64).toString());
      } else {
        posShare = new Decimal4(posShares[idx].toString());
      }
      const positionXAmount = binSupply.eq(new Decimal4("0")) ? new Decimal4("0") : posShare.mul(bin.xAmount.toString()).div(binSupply);
      const positionYAmount = binSupply.eq(new Decimal4("0")) ? new Decimal4("0") : posShare.mul(bin.yAmount.toString()).div(binSupply);
      totalXAmount = totalXAmount.add(positionXAmount);
      totalYAmount = totalYAmount.add(positionYAmount);
      positionData.push({
        binId: bin.binId,
        price: bin.price,
        pricePerToken: bin.pricePerToken,
        binXAmount: bin.xAmount.toString(),
        binYAmount: bin.yAmount.toString(),
        binLiquidity: binSupply.toString(),
        positionLiquidity: posShare.toString(),
        positionXAmount: positionXAmount.toString(),
        positionYAmount: positionYAmount.toString()
      });
    });
    const { feeX, feeY } = await this.getClaimableSwapFee(
      program,
      version,
      position,
      lowerBinArray,
      upperBinArray
    );
    const { rewardOne, rewardTwo } = await this.getClaimableLMReward(
      program,
      version,
      lbPair,
      onChainTimestamp,
      position,
      lowerBinArray,
      upperBinArray
    );
    return {
      totalXAmount: totalXAmount.toString(),
      totalYAmount: totalYAmount.toString(),
      positionBinData: positionData,
      lastUpdatedAt,
      lowerBinId,
      upperBinId,
      feeX,
      feeY,
      rewardOne,
      rewardTwo,
      feeOwner,
      totalClaimedFeeXAmount,
      totalClaimedFeeYAmount
    };
  }
  static getBinsBetweenLowerAndUpperBound(lbPair, lowerBinId, upperBinId, baseTokenDecimal, quoteTokenDecimal, lowerBinArrays, upperBinArrays) {
    const lowerBinArrayIndex = binIdToBinArrayIndex(new BN9(lowerBinId));
    const upperBinArrayIndex = binIdToBinArrayIndex(new BN9(upperBinId));
    let bins = [];
    if (lowerBinArrayIndex.eq(upperBinArrayIndex)) {
      const binArray = lowerBinArrays;
      const [lowerBinIdForBinArray] = getBinArrayLowerUpperBinId(
        binArray.index
      );
      binArray.bins.forEach((bin, idx) => {
        const binId = lowerBinIdForBinArray.toNumber() + idx;
        if (binId >= lowerBinId && binId <= upperBinId) {
          const pricePerLamport = getPriceOfBinByBinId(
            binId,
            lbPair.binStep
          ).toString();
          bins.push({
            binId,
            xAmount: bin.amountX,
            yAmount: bin.amountY,
            supply: bin.liquiditySupply,
            price: pricePerLamport,
            version: binArray.version,
            pricePerToken: new Decimal4(pricePerLamport).mul(new Decimal4(10 ** (baseTokenDecimal - quoteTokenDecimal))).toString()
          });
        }
      });
    } else {
      const binArrays = [lowerBinArrays, upperBinArrays];
      binArrays.forEach((binArray) => {
        const [lowerBinIdForBinArray] = getBinArrayLowerUpperBinId(
          binArray.index
        );
        binArray.bins.forEach((bin, idx) => {
          const binId = lowerBinIdForBinArray.toNumber() + idx;
          if (binId >= lowerBinId && binId <= upperBinId) {
            const pricePerLamport = getPriceOfBinByBinId(
              binId,
              lbPair.binStep
            ).toString();
            bins.push({
              binId,
              xAmount: bin.amountX,
              yAmount: bin.amountY,
              supply: bin.liquiditySupply,
              price: pricePerLamport,
              version: binArray.version,
              pricePerToken: new Decimal4(pricePerLamport).mul(new Decimal4(10 ** (baseTokenDecimal - quoteTokenDecimal))).toString()
            });
          }
        });
      });
    }
    return bins;
  }
  /** Private method */
  processXYAmountDistribution(xYAmountDistribution) {
    let currentBinId = null;
    const xAmountDistribution = [];
    const yAmountDistribution = [];
    const binIds = [];
    xYAmountDistribution.forEach((binAndAmount) => {
      xAmountDistribution.push(binAndAmount.xAmountBpsOfTotal);
      yAmountDistribution.push(binAndAmount.yAmountBpsOfTotal);
      binIds.push(binAndAmount.binId);
      if (currentBinId && binAndAmount.binId !== currentBinId + 1) {
        throw new Error("Discontinuous Bin ID");
      } else {
        currentBinId = binAndAmount.binId;
      }
    });
    return {
      lowerBinId: xYAmountDistribution[0].binId,
      upperBinId: xYAmountDistribution[xYAmountDistribution.length - 1].binId,
      xAmountDistribution,
      yAmountDistribution,
      binIds
    };
  }
  async getBins(lbPairPubKey, lowerBinId, upperBinId, baseTokenDecimal, quoteTokenDecimal, lowerBinArrays, upperBinArrays) {
    const lowerBinArrayIndex = binIdToBinArrayIndex(new BN9(lowerBinId));
    const upperBinArrayIndex = binIdToBinArrayIndex(new BN9(upperBinId));
    let bins = [];
    if (lowerBinArrayIndex.eq(upperBinArrayIndex)) {
      const [binArrayPubKey] = deriveBinArray(
        lbPairPubKey,
        lowerBinArrayIndex,
        this.program.programId
      );
      const binArray = lowerBinArrays ?? await this.program.account.binArray.fetch(binArrayPubKey).catch(() => {
        const [lowerBinId2, upperBinId2] = getBinArrayLowerUpperBinId(lowerBinArrayIndex);
        const binArrayBins = [];
        for (let i = lowerBinId2.toNumber(); i <= upperBinId2.toNumber(); i++) {
          binArrayBins.push({
            amountX: new BN9(0),
            amountY: new BN9(0),
            liquiditySupply: new BN9(0),
            rewardPerTokenStored: [new BN9(0), new BN9(0)],
            amountXIn: new BN9(0),
            amountYIn: new BN9(0),
            feeAmountXPerTokenStored: new BN9(0),
            feeAmountYPerTokenStored: new BN9(0),
            price: new BN9(0)
          });
        }
        return {
          bins: binArrayBins,
          index: lowerBinArrayIndex,
          version: 1
        };
      });
      const [lowerBinIdForBinArray] = getBinArrayLowerUpperBinId(
        binArray.index
      );
      binArray.bins.forEach((bin, idx) => {
        const binId = lowerBinIdForBinArray.toNumber() + idx;
        if (binId >= lowerBinId && binId <= upperBinId) {
          const pricePerLamport = getPriceOfBinByBinId(
            binId,
            this.lbPair.binStep
          ).toString();
          bins.push({
            binId,
            xAmount: bin.amountX,
            yAmount: bin.amountY,
            supply: bin.liquiditySupply,
            price: pricePerLamport,
            version: binArray.version,
            pricePerToken: new Decimal4(pricePerLamport).mul(new Decimal4(10 ** (baseTokenDecimal - quoteTokenDecimal))).toString()
          });
        }
      });
    } else {
      const [lowerBinArrayPubKey] = deriveBinArray(
        lbPairPubKey,
        lowerBinArrayIndex,
        this.program.programId
      );
      const [upperBinArrayPubKey] = deriveBinArray(
        lbPairPubKey,
        upperBinArrayIndex,
        this.program.programId
      );
      const binArrays = await (async () => {
        if (!lowerBinArrays || !upperBinArrays) {
          return (await this.program.account.binArray.fetchMultiple([
            lowerBinArrayPubKey,
            upperBinArrayPubKey
          ])).filter((binArray) => binArray !== null);
        }
        return [lowerBinArrays, upperBinArrays];
      })();
      binArrays.forEach((binArray) => {
        if (!binArray)
          return;
        const [lowerBinIdForBinArray] = getBinArrayLowerUpperBinId(
          binArray.index
        );
        binArray.bins.forEach((bin, idx) => {
          const binId = lowerBinIdForBinArray.toNumber() + idx;
          if (binId >= lowerBinId && binId <= upperBinId) {
            const pricePerLamport = getPriceOfBinByBinId(
              binId,
              this.lbPair.binStep
            ).toString();
            bins.push({
              binId,
              xAmount: bin.amountX,
              yAmount: bin.amountY,
              supply: bin.liquiditySupply,
              price: pricePerLamport,
              version: binArray.version,
              pricePerToken: new Decimal4(pricePerLamport).mul(new Decimal4(10 ** (baseTokenDecimal - quoteTokenDecimal))).toString()
            });
          }
        });
      });
    }
    return bins;
  }
  async binArraysToBeCreate(lowerBinArrayIndex, upperBinArrayIndex) {
    const binArrayIndexes = Array.from(
      { length: upperBinArrayIndex.sub(lowerBinArrayIndex).toNumber() + 1 },
      (_, index) => index + lowerBinArrayIndex.toNumber()
    ).map((idx) => new BN9(idx));
    const binArrays = [];
    for (const idx of binArrayIndexes) {
      const [binArray] = deriveBinArray(
        this.pubkey,
        idx,
        this.program.programId
      );
      const binArrayAccount = await this.program.provider.connection.getAccountInfo(binArray);
      if (binArrayAccount === null) {
        binArrays.push(binArray);
      }
    }
    return binArrays;
  }
  async createBinArraysIfNeeded(upperBinArrayIndex, lowerBinArrayIndex, funder) {
    const ixs = [];
    const binArrayIndexes = Array.from(
      { length: upperBinArrayIndex.sub(lowerBinArrayIndex).toNumber() + 1 },
      (_, index) => index + lowerBinArrayIndex.toNumber()
    ).map((idx) => new BN9(idx));
    for (const idx of binArrayIndexes) {
      const [binArray] = deriveBinArray(
        this.pubkey,
        idx,
        this.program.programId
      );
      const binArrayAccount = await this.program.provider.connection.getAccountInfo(binArray);
      if (binArrayAccount === null) {
        ixs.push(
          await this.program.methods.initializeBinArray(idx).accounts({
            binArray,
            funder,
            lbPair: this.pubkey
          }).instruction()
        );
      }
    }
    return ixs;
  }
  updateVolatilityAccumulator(vParameter, sParameter, activeId) {
    const deltaId = Math.abs(vParameter.indexReference - activeId);
    const newVolatilityAccumulator = vParameter.volatilityReference + deltaId * BASIS_POINT_MAX;
    vParameter.volatilityAccumulator = Math.min(
      newVolatilityAccumulator,
      sParameter.maxVolatilityAccumulator
    );
  }
  updateReference(activeId, vParameter, sParameter, currentTimestamp) {
    const elapsed = currentTimestamp - vParameter.lastUpdateTimestamp.toNumber();
    if (elapsed >= sParameter.filterPeriod) {
      vParameter.indexReference = activeId;
      if (elapsed < sParameter.decayPeriod) {
        const decayedVolatilityReference = Math.floor(
          vParameter.volatilityAccumulator * sParameter.reductionFactor / BASIS_POINT_MAX
        );
        vParameter.volatilityReference = decayedVolatilityReference;
      } else {
        vParameter.volatilityReference = 0;
      }
    }
  }
  async createClaimBuildMethod({
    owner,
    position,
    shouldIncludePreIx = true
  }) {
    const lowerBinArrayIndex = binIdToBinArrayIndex(
      new BN9(position.positionData.lowerBinId)
    );
    const [binArrayLower] = deriveBinArray(
      this.pubkey,
      lowerBinArrayIndex,
      this.program.programId
    );
    const upperBinArrayIndex = lowerBinArrayIndex.add(new BN9(1));
    const [binArrayUpper] = deriveBinArray(
      this.pubkey,
      upperBinArrayIndex,
      this.program.programId
    );
    const claimTransactions = [];
    for (let i = 0; i < 2; i++) {
      const rewardInfo = this.lbPair.rewardInfos[i];
      if (!rewardInfo || rewardInfo.mint.equals(PublicKey6.default))
        continue;
      const preInstructions = [];
      const { ataPubKey, ix } = await getOrCreateATAInstruction(
        this.program.provider.connection,
        rewardInfo.mint,
        owner
      );
      ix && preInstructions.push(ix);
      const claimTransaction = await this.program.methods.claimReward(new BN9(i)).accounts({
        lbPair: this.pubkey,
        sender: owner,
        position: position.publicKey,
        binArrayLower,
        binArrayUpper,
        rewardVault: rewardInfo.vault,
        rewardMint: rewardInfo.mint,
        tokenProgram: TOKEN_PROGRAM_ID2,
        userTokenAccount: ataPubKey
      }).preInstructions(shouldIncludePreIx ? preInstructions : []).transaction();
      claimTransactions.push(claimTransaction);
    }
    return claimTransactions;
  }
  async createClaimSwapFeeMethod({
    owner,
    position,
    shouldIncludePretIx = true,
    shouldIncludePostIx = true
  }) {
    const { lowerBinId, feeOwner } = position.positionData;
    const lowerBinArrayIndex = binIdToBinArrayIndex(new BN9(lowerBinId));
    const [binArrayLower] = deriveBinArray(
      this.pubkey,
      lowerBinArrayIndex,
      this.program.programId
    );
    const upperBinArrayIndex = lowerBinArrayIndex.add(new BN9(1));
    const [binArrayUpper] = deriveBinArray(
      this.pubkey,
      upperBinArrayIndex,
      this.program.programId
    );
    const [reserveX] = deriveReserve(
      this.tokenX.publicKey,
      this.pubkey,
      this.program.programId
    );
    const [reserveY] = deriveReserve(
      this.tokenY.publicKey,
      this.pubkey,
      this.program.programId
    );
    const walletToReceiveFee = feeOwner.equals(PublicKey6.default) ? owner : feeOwner;
    const preInstructions = [];
    const [
      { ataPubKey: userTokenX, ix: createInTokenAccountIx },
      { ataPubKey: userTokenY, ix: createOutTokenAccountIx }
    ] = await Promise.all([
      getOrCreateATAInstruction(
        this.program.provider.connection,
        this.tokenX.publicKey,
        walletToReceiveFee,
        owner
      ),
      getOrCreateATAInstruction(
        this.program.provider.connection,
        this.tokenY.publicKey,
        walletToReceiveFee,
        owner
      )
    ]);
    createInTokenAccountIx && preInstructions.push(createInTokenAccountIx);
    createOutTokenAccountIx && preInstructions.push(createOutTokenAccountIx);
    const postInstructions = [];
    if ([
      this.tokenX.publicKey.toBase58(),
      this.tokenY.publicKey.toBase58()
    ].includes(NATIVE_MINT2.toBase58())) {
      const closeWrappedSOLIx = await unwrapSOLInstruction(owner);
      closeWrappedSOLIx && postInstructions.push(closeWrappedSOLIx);
    }
    const claimFeeTx = await this.program.methods.claimFee().accounts({
      binArrayLower,
      binArrayUpper,
      lbPair: this.pubkey,
      sender: owner,
      position: position.publicKey,
      reserveX,
      reserveY,
      tokenProgram: TOKEN_PROGRAM_ID2,
      tokenXMint: this.tokenX.publicKey,
      tokenYMint: this.tokenY.publicKey,
      userTokenX,
      userTokenY
    }).preInstructions(shouldIncludePretIx ? preInstructions : []).postInstructions(shouldIncludePostIx ? postInstructions : []).transaction();
    return claimFeeTx;
  }
};

// src/dlmm/error.ts
import { AnchorError } from "@coral-xyz/anchor";
var DLMMError = class extends Error {
  errorCode;
  errorName;
  errorMessage;
  constructor(error) {
    let _errorCode = 0;
    let _errorName = "Something went wrong";
    let _errorMessage = "Something went wrong";
    if (error instanceof Error) {
      const anchorError = AnchorError.parse(
        JSON.parse(JSON.stringify(error)).logs
      );
      if (anchorError?.program.toBase58() === LBCLMM_PROGRAM_IDS["mainnet-beta"]) {
        _errorCode = anchorError.error.errorCode.number;
        _errorName = anchorError.error.errorCode.code;
        _errorMessage = anchorError.error.errorMessage;
      }
    } else {
      const idlError = IDL.errors.find((err) => err.code === error);
      if (idlError) {
        _errorCode = idlError.code;
        _errorName = idlError.name;
        _errorMessage = idlError.msg;
      }
    }
    super(_errorMessage);
    this.errorCode = _errorCode;
    this.errorName = _errorName;
    this.errorMessage = _errorMessage;
  }
};

// src/index.ts
var src_default = DLMM;
export {
  ADMIN,
  BASIS_POINT_MAX,
  BIN_ARRAY_BITMAP_SIZE,
  BIN_ARRAY_FEE,
  BitmapType,
  DLMMError,
  EXTENSION_BINARRAY_BITMAP_SIZE,
  FEE_PRECISION,
  IDL,
  LBCLMM_PROGRAM_IDS,
  MAX_ACTIVE_BIN_SLIPPAGE,
  MAX_BIN_ARRAY_SIZE,
  MAX_BIN_LENGTH_ALLOWED_IN_ONE_TX,
  MAX_BIN_PER_POSITION,
  MAX_BIN_PER_TX,
  MAX_CLAIM_ALL_ALLOWED,
  MAX_FEE_RATE,
  Network,
  POSITION_FEE,
  PRECISION,
  PairType,
  PositionVersion,
  SCALE,
  SCALE_OFFSET,
  SIMULATION_USER,
  Strategy,
  StrategyType,
  autoFillXByStrategy,
  autoFillXByWeight,
  autoFillYByStrategy,
  autoFillYByWeight,
  binIdToBinArrayIndex,
  calculateBidAskDistribution,
  calculateNormalDistribution,
  calculateSpotDistribution,
  chunkedFetchMultipleBinArrayBitmapExtensionAccount,
  chunkedFetchMultiplePoolAccount,
  chunkedGetMultipleAccountInfos,
  chunks,
  computeBudgetIx,
  computeFee,
  computeFeeFromAmount,
  computeProtocolFee,
  src_default as default,
  deriveBinArray,
  deriveBinArrayBitmapExtension,
  deriveLbPair,
  deriveLbPair2,
  deriveOracle,
  derivePermissionLbPair,
  derivePosition,
  derivePresetParameter,
  derivePresetParameter2,
  deriveReserve,
  findNextBinArrayIndexWithLiquidity,
  findNextBinArrayWithLiquidity,
  fromWeightDistributionToAmount,
  fromWeightDistributionToAmountOneSide,
  getBaseFee,
  getBinArrayLowerUpperBinId,
  getBinArraysRequiredByPositionRange,
  getBinFromBinArray,
  getOrCreateATAInstruction,
  getOutAmount,
  getPriceOfBinByBinId,
  getTokenBalance,
  getTokenDecimals,
  getTokensMintFromPoolAddress,
  getTotalFee,
  getVariableFee,
  isBinIdWithinBinArray,
  isOverflowDefaultBinArrayBitmap,
  parseLogs,
  swapExactInQuoteAtBin,
  swapExactOutQuoteAtBin,
  toAmountAskSide,
  toAmountBidSide,
  toAmountBothSide,
  toAmountsBothSideByStrategy,
  toAmountsOneSideByStrategy,
  toStrategyParameters,
  toWeightDistribution,
  unwrapSOLInstruction,
  wrapSOLInstruction
};
//# sourceMappingURL=index.js.map