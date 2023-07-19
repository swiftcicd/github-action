#!/usr/bin/env bash
set -euxo pipefail

swift run --package-path .github/workflows/cicd
