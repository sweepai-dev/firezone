#!/usr/bin/env bash
set -e

mix local.hex --force && mix local.rebar --force
mix deps.get --only test
cd apps/cf_http/assets
npm install
./node_modules/.bin/webpack --mode development