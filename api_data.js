define({ api: [
  {
    "type": "get",
    "url": "/wow/v2/?api_key={API_KEY}&a=get_address_by_label&address_label={ADDRESS_LABEL}",
    "title": "Get Address By Label",
    "version": "2.0.0",
    "name": "GetAddressByLabel",
    "group": "DogeCoin",
    "permission": {
      "name": "user",
      "title": "Authenticated access is required.",
      "description": "An API key is required.\n"
    },
    "description": "Returns the payment address for the given {ADDRESS_LABEL}",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "api_key",
            "optional": false,
            "description": "The user's api key"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "address_label",
            "optional": false,
            "description": "The address label to check the amount with"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/v2/?api_key={API_KEY}&a=get_address_by_label&address_label={ADDRESS_LABEL}'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "address",
            "optional": false,
            "description": "The addresses on your account."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"DQ6eccdPZ4n3Hi6orzyD6XZ6XF24ndBFRX\"\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "InvalidAPIKey",
            "optional": false,
            "description": "The user's API key is either missing or invalid."
          },
          {
            "group": "Success 200",
            "field": "InvalidAddress",
            "optional": false,
            "description": "The user's address key is invalid."
          }
        ],
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "field": "NotLive",
            "optional": false,
            "description": "The v2 API is not available for the specified API key given."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Invalid API Key\"\n"
        },
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   null\n"
        },
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 400 Bad Request\n   \"{error: 'v2 is not yet live'}\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/?api_key={API_KEY}&a=get_address_by_label&address_label={ADDRESS_LABEL}",
    "title": "Get Address By Label",
    "version": "1.0.0",
    "name": "GetAddressByLabel",
    "group": "DogeCoin",
    "permission": {
      "name": "user",
      "title": "Authenticated access is required.",
      "description": "An API key is required.\n"
    },
    "description": "Returns the payment address for the given {ADDRESS_LABEL}",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "api_key",
            "optional": false,
            "description": "The user's api key"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "address_label",
            "optional": false,
            "description": "The address label to check the amount with"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/?api_key={API_KEY}&a=get_address_by_label&address_label={ADDRESS_LABEL}'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "address",
            "optional": false,
            "description": "The addresses on your account."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"DQ6eccdPZ4n3Hi6orzyD6XZ6XF24ndBFRX\"\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "InvalidAPIKey",
            "optional": false,
            "description": "The user's API key is either missing or invalid."
          },
          {
            "group": "Success 200",
            "field": "InvalidAddress",
            "optional": false,
            "description": "The user's address key is invalid."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Invalid API Key\"\n"
        },
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   null\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/v2/?api_key={API_KEY}&a=get_address_received&payment_address={PAYMENT_ADDRESS}",
    "title": "Get Address Received",
    "version": "2.0.0",
    "name": "GetAddressReceived",
    "group": "DogeCoin",
    "permission": {
      "name": "user",
      "title": "Authenticated access is required.",
      "description": "An API key is required.\n"
    },
    "description": "Returns the current amount received to all addresses with {ADDRESS_LABEL} or {PAYMENT_ADDRESS}.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "api_key",
            "optional": false,
            "description": "The user's api key"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "payment_address",
            "optional": false,
            "description": "The payment address to check the amount with"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "address_label",
            "optional": false,
            "description": "The address label to check the amount with"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/v2/?api_key={API_KEY}&a=get_address_received&payment_address={PAYMENT_ADDRESS}'\n"
      },
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/v2/?api_key={API_KEY}&a=get_address_received&address_label={ADDRESS_LABEL}'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "field": "addresses",
            "optional": false,
            "description": "The list of addresses on your account."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   [\"DQ6eccdPZ4n3Hi6orzyD6XZ6XF24ndBFRX\", \"DQrzy5eci6oZ4n9HD6XFRX4dnBZ4ncdPdB\"]\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "InvalidAPIKey",
            "optional": false,
            "description": "The user's API key is either missing or invalid."
          }
        ],
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "field": "NotLive",
            "optional": false,
            "description": "The v2 API is not available for the specified API key given."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Invalid API Key\"\n"
        },
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 400 Bad Request\n   \"{error: 'v2 is not yet live'}\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/?api_key={API_KEY}&a=get_address_received&payment_address={PAYMENT_ADDRESS}",
    "title": "Get Address Received",
    "version": "1.0.0",
    "name": "GetAddressReceived",
    "group": "DogeCoin",
    "permission": {
      "name": "user",
      "title": "Authenticated access is required.",
      "description": "An API key is required.\n"
    },
    "description": "Returns the current amount received to all addresses with {ADDRESS_LABEL} or {PAYMENT_ADDRESS}.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "api_key",
            "optional": false,
            "description": "The user's api key"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "payment_address",
            "optional": false,
            "description": "The payment address to check the amount with"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "address_label",
            "optional": false,
            "description": "The address label to check the amount with"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/?api_key={API_KEY}&a=get_address_received&payment_address={PAYMENT_ADDRESS}'\n"
      },
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/?api_key={API_KEY}&a=get_address_received&address_label={ADDRESS_LABEL}'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "field": "addresses",
            "optional": false,
            "description": "The list of addresses on your account."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   [\"DQ6eccdPZ4n3Hi6orzyD6XZ6XF24ndBFRX\", \"DQrzy5eci6oZ4n9HD6XFRX4dnBZ4ncdPdB\"]\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "InvalidAPIKey",
            "optional": false,
            "description": "The user's API key is either missing or invalid."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Invalid API Key\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/v2/?api_key={API_KEY}&a=get_balance",
    "title": "Get Balance",
    "version": "2.0.0",
    "name": "GetBalance",
    "group": "DogeCoin",
    "permission": {
      "name": "user",
      "title": "Authenticated access is required.",
      "description": "An API key is required.\n"
    },
    "description": "Returns the DOGE balance of your entire account to 8 decimal places.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "api_key",
            "optional": false,
            "description": "The user's api key"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/v2/?api_key={API_KEY}&a=get_balance'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "amount",
            "optional": false,
            "description": "The amount in the entire account"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   18.95245109\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "InvalidAPIKey",
            "optional": false,
            "description": "The user's API key is either missing or invalid."
          }
        ],
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "field": "NotLive",
            "optional": false,
            "description": "The v2 API is not available for the specified API key given."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Invalid API Key\"\n"
        },
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 400 Bad Request\n   \"{error: 'v2 is not yet live'}\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/?api_key={API_KEY}&a=get_balance",
    "title": "Get Balance",
    "version": "1.0.0",
    "name": "GetBalance",
    "group": "DogeCoin",
    "permission": {
      "name": "user",
      "title": "Authenticated access is required.",
      "description": "An API key is required.\n"
    },
    "description": "Returns the DOGE balance of your entire account to 8 decimal places.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "api_key",
            "optional": false,
            "description": "The user's api key"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/?api_key={API_KEY}&a=get_balance'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "amount",
            "optional": false,
            "description": "The amount in the entire account"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   18.95245109\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "InvalidAPIKey",
            "optional": false,
            "description": "The user's API key is either missing or invalid."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Invalid API Key\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/v2/?a=get_difficulty",
    "title": "Get Difficulty",
    "version": "2.0.0",
    "name": "GetDifficulty",
    "group": "DogeCoin",
    "permission": {
      "name": "public",
      "title": "This information is publicly accessible.",
      "description": "No authentication is required.\n"
    },
    "description": "Returns the current difficulty. This doesn't require an API key.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/v2/?a=get_difficulty'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "difficulty",
            "optional": false,
            "description": "The current difficulty"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   321.8045805\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "field": "NotLive",
            "optional": false,
            "description": "The v2 API is not available for the specified API key given."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 400 Bad Request\n   \"{error: 'v2 is not yet live'}\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/?a=get_difficulty",
    "title": "Get Difficulty",
    "version": "1.0.0",
    "name": "GetDifficulty",
    "group": "DogeCoin",
    "permission": {
      "name": "public",
      "title": "This information is publicly accessible.",
      "description": "No authentication is required.\n"
    },
    "description": "Returns the current difficulty. This doesn't require an API key.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/?a=get_difficulty'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "difficulty",
            "optional": false,
            "description": "The current difficulty"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   321.8045805\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/v2/?api_key={API_KEY}&a=get_my_addresses",
    "title": "Get My Addresses",
    "version": "2.0.0",
    "name": "GetMyAddresses",
    "group": "DogeCoin",
    "permission": {
      "name": "user",
      "title": "Authenticated access is required.",
      "description": "An API key is required.\n"
    },
    "description": "Returns all payment addresses/address_ids for your account.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "api_key",
            "optional": false,
            "description": "The user's api key"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/?api_key={API_KEY}&a=get_my_addresses'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "field": "addresses",
            "optional": false,
            "description": "The list of addresses on your account."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   [\"DQ6eccdPZ4n3Hi6orzyD6XZ6XF24ndBFRX\", \"DQrzy5eci6oZ4n9HD6XFRX4dnBZ4ncdPdB\"]\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "InvalidAPIKey",
            "optional": false,
            "description": "The user's API key is either missing or invalid."
          }
        ],
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "field": "NotLive",
            "optional": false,
            "description": "The v2 API is not available for the specified API key given."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Invalid API Key\"\n"
        },
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 400 Bad Request\n   \"{error: 'v2 is not yet live'}\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/?api_key={API_KEY}&a=get_my_addresses",
    "title": "Get My Addresses",
    "version": "1.0.0",
    "name": "GetMyAddresses",
    "group": "DogeCoin",
    "permission": {
      "name": "user",
      "title": "Authenticated access is required.",
      "description": "An API key is required.\n"
    },
    "description": "Returns all payment addresses/address_ids for your account.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "api_key",
            "optional": false,
            "description": "The user's api key"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/?api_key={API_KEY}&a=get_my_addresses'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "field": "addresses",
            "optional": false,
            "description": "The list of addresses on your account."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   [\"DQ6eccdPZ4n3Hi6orzyD6XZ6XF24ndBFRX\", \"DQrzy5eci6oZ4n9HD6XFRX4dnBZ4ncdPdB\"]\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "InvalidAPIKey",
            "optional": false,
            "description": "The user's API key is either missing or invalid."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Invalid API Key\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/v2/?api_key={API_KEY}&a=get_new_address&address_label={ADDRESS_LABEL}",
    "title": "Get New Address",
    "version": "2.0.0",
    "name": "GetNewAddress",
    "group": "DogeCoin",
    "permission": {
      "name": "user",
      "title": "Authenticated access is required.",
      "description": "An API key is required.\n"
    },
    "description": "Returns a new payment address for your account. You can pass an optional alphanumeric {ADDRESS_LABEL} as a label for the address.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "api_key",
            "optional": false,
            "description": "The user's api key"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "address_label",
            "optional": false,
            "description": "The optional, alphanumerical address label for the wallet"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/v2/?api_key={API_KEY}&a=get_new_address&address_label={ADDRESS_LABEL}'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "address",
            "optional": false,
            "description": "The address created"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"DQrzy6eccdPZ4n3Hi6oD6XZ4ndBFRX\"\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "InvalidAPIKey",
            "optional": false,
            "description": "The user's API key is either missing or invalid."
          }
        ],
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "field": "NotLive",
            "optional": false,
            "description": "The v2 API is not available for the specified API key given."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Invalid API Key\"\n"
        },
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 400 Bad Request\n   \"{error: 'v2 is not yet live'}\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/?api_key={API_KEY}&a=get_new_address&address_label={ADDRESS_LABEL}",
    "title": "Get New Address",
    "version": "1.0.0",
    "name": "GetNewAddress",
    "group": "DogeCoin",
    "permission": {
      "name": "user",
      "title": "Authenticated access is required.",
      "description": "An API key is required.\n"
    },
    "description": "Returns a new payment address for your account. You can pass an optional alphanumeric {ADDRESS_LABEL} as a label for the address.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "api_key",
            "optional": false,
            "description": "The user's api key"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "address_label",
            "optional": false,
            "description": "The optional, alphanumerical address label for the wallet"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/?api_key={API_KEY}&a=get_new_address&address_label={ADDRESS_LABEL}'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "address",
            "optional": false,
            "description": "The address created"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"DQrzy6eccdPZ4n3Hi6oD6XZ4ndBFRX\"\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "InvalidAPIKey",
            "optional": false,
            "description": "The user's API key is either missing or invalid."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Invalid API Key\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/v2/?a=get_current_block",
    "title": "Get Current Block",
    "version": "2.0.0",
    "name": "Get_Current_Block",
    "group": "DogeCoin",
    "permission": {
      "name": "public",
      "title": "This information is publicly accessible.",
      "description": "No authentication is required.\n"
    },
    "description": "Returns the current block. This doesn't require an API key.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/v2/?a=get_current_block'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "currentBlock",
            "optional": false,
            "description": "The current block"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   39405\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "field": "NotLive",
            "optional": false,
            "description": "The v2 API is not available for the specified API key given."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 400 Bad Request\n   \"{error: 'v2 is not yet live'}\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/?a=get_current_block",
    "title": "Get Current Block",
    "version": "1.0.0",
    "name": "Get_Current_Block",
    "group": "DogeCoin",
    "permission": {
      "name": "public",
      "title": "This information is publicly accessible.",
      "description": "No authentication is required.\n"
    },
    "description": "Returns the current block. This doesn't require an API key.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/?a=get_current_block'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "currentBlock",
            "optional": false,
            "description": "The current block"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   39405\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/v2/?a=get_current_price",
    "title": "Get Current Price",
    "version": "2.0.0",
    "name": "Get_Current_Price",
    "group": "DogeCoin",
    "permission": {
      "name": "public",
      "title": "This information is publicly accessible.",
      "description": "No authentication is required.\n"
    },
    "description": "Returns the current price in USD or BTC. This doesn't require an API key.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "convert_to",
            "optional": false,
            "description": "To convert to USD or BTC (Defaults to USD)"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "amount_doge",
            "optional": false,
            "description": "The amount of Doge to convert (Defaults to 1 Doge.)"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/v2/?a=get_current_price&convert_to=BTC&amount_doge=1000'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "currentPrice",
            "optional": false,
            "description": "The current price of BTC or USD for the Doge amount given."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   0.00206000\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "InvalidConversion",
            "optional": false,
            "description": "The conversion unit was not USD or BTC"
          },
          {
            "group": "Success 200",
            "field": "InvalidAmount",
            "optional": false,
            "description": "The amount was not a valid amount of Doge. (Probably not a number)"
          }
        ],
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "field": "NotLive",
            "optional": false,
            "description": "The v2 API is not available for the specified API key given."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"invalid conversion unit\"\n"
        },
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Invalid Amount\"\n"
        },
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 400 Bad Request\n   \"{error: 'v2 is not yet live'}\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/?a=get_current_price",
    "title": "Get Current Price",
    "version": "1.0.0",
    "name": "Get_Current_Price",
    "group": "DogeCoin",
    "permission": {
      "name": "public",
      "title": "This information is publicly accessible.",
      "description": "No authentication is required.\n"
    },
    "description": "Returns the current price in USD or BTC. This doesn't require an API key.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "convert_to",
            "optional": false,
            "description": "To convert to USD or BTC (Defaults to USD)"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "amount_doge",
            "optional": false,
            "description": "The amount of Doge to convert (Defaults to 1 Doge.)"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/?a=get_current_price&convert_to=BTC&amount_doge=1000'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "currentPrice",
            "optional": false,
            "description": "The current price of BTC or USD for the Doge amount given."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   0.00206000\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "InvalidConversion",
            "optional": false,
            "description": "The conversion unit was not USD or BTC"
          },
          {
            "group": "Success 200",
            "field": "InvalidAmount",
            "optional": false,
            "description": "The amount was not a valid amount of Doge. (Probably not a number)"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"invalid conversion unit\"\n"
        },
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Invalid Amount\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/v2?api_key={API_KEY}&a=withdraw&amount={AMOUNT}&pin={PIN}&payment_address={PAYMENT_ADDRESS}",
    "title": "Withdraw",
    "version": "2.0.0",
    "name": "Withdraw",
    "group": "DogeCoin",
    "permission": {
      "name": "user",
      "title": "Authenticated access is required.",
      "description": "An API key is required.\n"
    },
    "description": "Withdraws {AMOUNT} doge to a {PAYMENT_ADDRESS} you specify. Requires your {PIN}. For now this must be more than 5 doge, and you must have enough extra in your wallet to pay all network fees (another 1-3 doge). DogeAPI takes a 0.5% fee when withdrawing.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "api_key",
            "optional": false,
            "description": "The user's api key"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "amount",
            "optional": false,
            "description": "The amount to withdraw"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "pin",
            "optional": false,
            "description": "Your account pin number"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "payment_address",
            "optional": false,
            "description": "The account to withdraw to"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/v2/?api_key={API_KEY}&a=withdraw&amount={AMOUNT}&pin={PIN}&payment_address={PAYMENT_ADDRESS}'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "transaction",
            "optional": false,
            "description": "The unique transaction id on the market"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"52c5a2923b113ef07c47b077ba8bf3a03381c687f218f6b326773892565d6963\"\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "InvalidAPIKey",
            "optional": false,
            "description": "The user's API key is either missing or invalid."
          },
          {
            "group": "Success 200",
            "field": "NotEnoughDoge",
            "optional": false,
            "description": "The user does not have enough Doge in their account."
          },
          {
            "group": "Success 200",
            "field": "BadQuery",
            "optional": false,
            "description": "The query was invalid, probably indicated a missing parameter"
          }
        ],
        "Bad Request 400": [
          {
            "group": "Bad Request 400",
            "field": "NotLive",
            "optional": false,
            "description": "The v2 API is not available for the specified API key given."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Invalid API Key\"\n"
        },
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Not enough Doge\"\n"
        },
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Bad Query\"\n"
        },
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 400 Bad Request\n   \"{error: 'v2 is not yet live'}\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/wow/?api_key={API_KEY}&a=withdraw&amount={AMOUNT}&payment_address={PAYMENT_ADDRESS}",
    "title": "Withdraw",
    "version": "1.0.0",
    "name": "Withdraw",
    "group": "DogeCoin",
    "permission": {
      "name": "user",
      "title": "Authenticated access is required.",
      "description": "An API key is required.\n"
    },
    "description": "Withdraws {AMOUNT} doge to a {PAYMENT_ADDRESS} you specify.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "api_key",
            "optional": false,
            "description": "The user's api key"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "a",
            "optional": false,
            "description": "The action to perform"
          },
          {
            "group": "Parameter",
            "type": "int",
            "field": "amount",
            "optional": false,
            "description": "The amount to withdraw"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "payment_address",
            "optional": false,
            "description": "The account to withdraw to"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'https://dogeapi.com/wow/?api_key={API_KEY}&a=withdraw&amount={AMOUNT}&payment_address={PAYMENT_ADDRESS}'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "transaction",
            "optional": false,
            "description": "The unique transaction id on the market"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"52c5a2923b113ef07c47b077ba8bf3a03381c687f218f6b326773892565d6963\"\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "InvalidAPIKey",
            "optional": false,
            "description": "The user's API key is either missing or invalid."
          },
          {
            "group": "Success 200",
            "field": "NotEnoughDoge",
            "optional": false,
            "description": "The user does not have enough Doge in their account."
          },
          {
            "group": "Success 200",
            "field": "BadQuery",
            "optional": false,
            "description": "The query was invalid, probably indicated a missing parameter"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Invalid API Key\"\n"
        },
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Not enough Doge\"\n"
        },
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Bad Query\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "version": "2.0.0",
    "group": "index.js",
    "type": "",
    "url": "",
    "filename": "src/index.js"
  },
  {
    "version": "2.0.0",
    "group": "index.js",
    "type": "",
    "url": "",
    "filename": "src/index.js"
  },
  {
    "version": "1.0.0",
    "group": "index.js",
    "type": "",
    "url": "",
    "filename": "src/index.js"
  },
  {
    "version": "1.0.0",
    "group": "index.js",
    "type": "",
    "url": "",
    "filename": "src/index.js"
  }
] });