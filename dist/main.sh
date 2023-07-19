#!/usr/bin/env bash
set -euxo pipefail

echo 'hello from script'
swift run --package-path .github/workflows/cicd
