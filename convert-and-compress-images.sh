#!/bin/bash
# Convert and compress all images in public/images (and subfolders) to WebP (quality 85)
# Requires: cwebp
# Usage: ./convert-and-compress-images.sh

set -e

IMG_DIR="public/images"

find "$IMG_DIR" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) | while read -r img; do
  base="${img%.*}"
  cwebp -q 85 "$img" -o "$base.webp"
  echo "Compressed $img to $base.webp"
done
