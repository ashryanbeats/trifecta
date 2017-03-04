#!/bin/bash

# const current dir
readonly currentdir=$(pwd)

# const script dir
readonly script=$BASH_SOURCE
readonly scriptpath=${script%/*}"/*"

# copy all files from script dir to current dir
cp -R $scriptpath $currentdir
rm "$currentdir/generate.sh"
mv target-repo-gitignore .gitignore

echo "Here's your new repo. Don't forget to git init."
ls -a
