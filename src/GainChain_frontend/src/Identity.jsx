import React from 'react'
import {Actor,HttpAgent} from '@dfinity/agent '
import createActor from 'src/declarations/GainChain_backend'

const Identity = () => {

    let iiUrl = `http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943`; // Local 
// let iiUrl = `https://identity.internetcomputer.org/`; // Production 
async function initializeAuthClient() {
    if (!authClient) {
        authClient = await AuthClient.create();
    }
    return authClient;
}
// New function to handle Internet Identity login
    const internetIdentityAuth = async () => {
    const authClient = await initializeAuthClient();
    const isAuthenticated = await authClient.isAuthenticated();
    console.log("Is authenticated: ", isAuthenticated);

    if (!isAuthenticated) {
        const identityProvider = iiUrl;

        await new Promise((resolve, reject) => {
            authClient.login({
                identityProvider,
                onSuccess: resolve,
                onError: reject
            });
        });
    }

    const identity = authClient.getIdentity();
    const agent = new HttpAgent({ identity });
    const actor = createActor(canisterID, { agent });

    console.log(actor);
}


  return (
    <div>
        <button onClick={internetIdentityAuth}>Sign In</button>
    </div>
  )
}

export default Identity

