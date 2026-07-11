#!/bin/bash

# Installs the npm version pinned in package.json engines.
# Run this after `nvm install`, since node ships with its own bundled npm version.

set -e

cd "$(dirname "$0")/.."

WANTED_VERSION="$(node -p "require('./package.json').engines.npm")"
CURRENT_VERSION="$(npm --version)"

if [[ "$CURRENT_VERSION" == "$WANTED_VERSION" ]]; then
    echo "npm $CURRENT_VERSION already matches the version pinned in package.json engines."
    exit 0
fi

echo "Installing npm@$WANTED_VERSION (currently on $CURRENT_VERSION)..."
npm install -g "npm@$WANTED_VERSION"
echo "Done. npm is now $(npm --version)."
