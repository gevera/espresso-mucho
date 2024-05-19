/// <references types="houdini-svelte">

import 'dotenv/config'

/** @type {import('houdini').ConfigFile} */
const config = {
    "watchSchema": {
        "url": process.env.GRAPHQL_ENDPOINT
    },
    "plugins": {
        "houdini-svelte": {}
    }
}

export default config
