#!/bin/bash bash

KEY="!2babytiger2!"

branch=$(git symbolic-ref --short HEAD)

git add .
git commit -m $1

expect "Key:"

git push origin $branch

read KEY
