import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {sourceManifest} from './procedures/circumcision/manifest.mjs';
import {checkEvaluationFreeze} from './procedures/circumcision/evaluation-freeze.mjs';
const overrides=JSON.parse(fs.readFileSync(new URL('./provenance/standalone-changes.json',import.meta.url))).files;
const root=import.meta.dirname,manifest=JSON.parse(fs.readFileSync(path.join(root,'provenance/import-manifest.json')));
for(const [file,hash] of Object.entries(manifest.files)){
 const p=path.resolve(root,file);assert.ok(p.startsWith(root+path.sep));
 assert.equal(createHash('sha256').update(fs.readFileSync(p)).digest('hex'),overrides[file]??hash,file);
}
const {sourceManifest:archived}=await import('./procedures/circumcision/evidence/runtime-c0-round6/procedures/circumcision/manifest.mjs');
assert.equal(archived().digest,'c0e923ee30e69b394f475258877a47e4c7c96f745413ff17aa667f8a16bab32f');
assert.deepEqual(Object.keys(archived().files).filter(f=>archived().files[f]!==sourceManifest().files[f]),['godot/main.gd','godot/project.godot']);
const freeze=checkEvaluationFreeze();assert.equal(freeze.round,7);
assert.equal(createHash('sha256').update(fs.readFileSync(path.join(root,'procedures/circumcision/evidence/evaluation-rounds/round6-freeze.json'))).digest('hex'),manifest.files['procedures/circumcision/evaluation-freeze.json']);
console.log(JSON.stringify({verified:true,importedFiles:Object.keys(manifest.files).length,sourceDigest:sourceManifest().digest,historicalRound:6,evaluationEnabled:true,scope:'Preserved evidence and mechanics; two explicit product-title changes; matching round7 freeze; no new procedure acceptance'},null,2));
