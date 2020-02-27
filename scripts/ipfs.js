#!/usr/bin/env node

const IPFS = require('ipfs-http-client');
const shell = require('shelljs');
const path = require('path');
const log = console.log;

async function main(){
  const ipfs = IPFS({
    host:'ipfs.infura.io',
    port: '5001',
    protocol: 'https'
  });

  const artifactPaths = shell.ls('./build/contracts/*.json');

  log("Uploading sources & metadata to IPFS (Infura Gateway)...")
  log("========================================================")

  for (let _path of artifactPaths){
    const artifact = require(path.join(process.cwd(), _path));

    log();
    log(artifact.contractName);
    log("-".repeat(artifact.contractName.length));

    for await (const res of ipfs.add(artifact.metadata)) {
      log(`metadata: ${res.path}`);
    }

    for await (const res of ipfs.add(artifact.source)) {
      log(`source:   ${res.path}`);
    }
  }

  log();
  log('Finished.');
  log();
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.log(err);
    process.exit(1)
  });
