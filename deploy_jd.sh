#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

echo "==> Building oryjk-homepage..."
bun run build

echo "==> Deploying dist/ to jd:/root/docker_data/nginx/html/oryjk-homepage/..."
rsync -avz --delete dist/ jd:/root/docker_data/nginx/html/oryjk-homepage/

echo "==> Deployed successfully to https://www.oryjk.cn/"
