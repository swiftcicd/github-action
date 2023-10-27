#!/usr/bin/env bash
set -euxo pipefail

echo "::group::Swift Run"
SWIFT_CICD_CI=true swift run --package-path $PACKAGE_PATH
