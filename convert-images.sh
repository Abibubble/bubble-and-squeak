#!/bin/bash
# Convert all jpg/jpeg/png images in a directory tree to WebP and AVIF, preserving quality
# Usage: ./convert-images.sh [directory]

set -e

DIR="${1:-public/images}"

find "$DIR" \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) | while read -r img; do
  base="${img%.*}"
  ext="${img##*.}"
  # WebP conversion (quality 95, lossless for PNG)
  if [[ ! -f "$base.webp" ]]; then
    if [[ "$ext" =~ png ]]; then
      cwebp -lossless "$img" -o "$base.webp"
    else
      cwebp -q 95 "$img" -o "$base.webp"
    fi
    echo "Created $base.webp"
  fi
done
