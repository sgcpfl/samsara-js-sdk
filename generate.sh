#/usr/bin/env bash

curl -s https://raw.githubusercontent.com/samsarahq/api-docs/master/swagger.json -o swagger.json

sed -i '' -E -e 's/(\\n|[[:space:]])*\*\*Submit Feedback([^"]|\\")*//' swagger.json

yarn run openapi-generator-cli generate \
  -i swagger.json \
  --generator-name typescript-axios \
  -o src/generated/ \
  --additional-properties=useSingleRequestParameter="true",supportsES6="true"

rm -f src/generated/git_push.sh

# if using --generator-name typescript-fetch
# find src/generated -type f -name "*.ts" -print0 | xargs -0 sed -i '' -e 's/object &amp;//g'
