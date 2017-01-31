#!/bin/bash

# const current dir
readonly CURRENTDIR=$(pwd)

# const script dir
readonly SCRIPTDIR=~/Scripts/trifecta/.

# copy all files from script dir to current dir
cp -R $SCRIPTDIR $CURRENTDIR
rm "$CURRENTDIR/generate.sh"
cd $CURRENTDIR && git init