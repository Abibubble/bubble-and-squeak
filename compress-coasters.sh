#!/bin/bash
# Compress all coaster images in public/images/coasters to WebP (quality 85)
# Requires: cwebp
# Usage: ./compress-coasters.sh

set -e

IMG_DIR="public/images/coasters"

find "$IMG_DIR" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) | while read -r img; do
  base="${img%.*}"
  cwebp -q 85 "$img" -o "$base.webp"
  echo "Compressed $img to $base.webp"
done