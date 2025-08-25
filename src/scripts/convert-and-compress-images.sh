#!/bin/bash
# Convert and compress all images in public/images (and subfolders) to WebP (quality 85)
# Requires: cwebp
# Usage: ./convert-and-compress-images.sh

set -e

IMG_DIR="public/images"


find "$IMG_DIR" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) | while read -r img; do
  base="${img%.*}"
  webp_file="$base.webp"
  if [ ! -f "$webp_file" ]; then
    cwebp -q 85 "$img" -o "$webp_file"
    echo "Compressed $img to $webp_file"
  else
    echo "Skipping $img (webp already exists)"
  fi
done
