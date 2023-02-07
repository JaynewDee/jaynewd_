#!/usr/bin/env bash

echo "Hello, bash!"

branch=$(git symbolic-ref --short HEAD)

git add .
git commit -m $1
git push origin ($branch)
