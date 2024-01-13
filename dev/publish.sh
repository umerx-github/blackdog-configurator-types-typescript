#!/usr/bin/env bash

git add . && git commit -m"$1" && npm version patch && npm publi
sh --access public
