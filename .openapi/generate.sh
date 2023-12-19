#!/bin/bash

SCRIPT_DIR=$(dirname -- "$(readlink -f -- "$BASH_SOURCE")")

echo "Generating OpenAPI spec..."

# Generate OpenAPI spec
openapi-generator-cli \
    generate \
    -i https://api-dev.iras.kr/api/v3/api-docs \
    -g typescript-axios \
    -o src/services \
    -c $SCRIPT_DIR/config.json \
    --skip-validate-spec

echo "Complete!"
echo "Check out the generated files in src/services"
