#/usr/bin/env bash

curl -s https://raw.githubusercontent.com/samsarahq/api-docs/master/swagger.json -o swagger.json

sed -i '' -E -e 's/(\\n|[[:space:]])*\*\*Submit Feedback([^"]|\\")*//' swagger.json

yarn run openapi-generator-cli generate \
  -i swagger.json \
  --generator-name typescript-fetch \
  -o src/generated/ \
  --additional-properties=typescriptThreePlus=true

find src/generated -type f -name "*.ts" -print0 | xargs -0 sed -i '' -e 's/object &amp;//g'
