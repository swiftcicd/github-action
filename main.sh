#!/usr/bin/env bash
set -euxo pipefail

echo "::group::Swift Run"
swift run --package-path $PACKAGE_PATH
