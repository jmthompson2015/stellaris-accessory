#!/bin/sh

export STEAMAPPS="/Volumes/StorageDrive/jmthompson/Library/Application Support/SteamLibrary/steamapps"
export BASE="${STEAMAPPS}/common/Stellaris/localisation/english"

find "$BASE" -name "*.yml" -exec grep ${1} {} \; | while read line; do
    echo f2 ${line} | cut -d'"' -f2
done
