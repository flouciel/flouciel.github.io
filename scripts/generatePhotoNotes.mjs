#!/usr/bin/env node

/**
 * Generate markdown note stubs for each photo in src/assets/photos.
 *
 * - For every image file (jpg, jpeg, png, webp):
 *   - Derive `photoId` from the filename without extension.
 *   - Create `src/content/photoNotes/<photoId>.md` if it does NOT already exist.
 *   - Use a simple frontmatter template with `photoId` and `title`.
 *
 * Run from project root:
 *   node scripts/generatePhotoNotes.mjs
 */

import fs from "fs";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Project root = one level up from scripts/
const projectRoot = path.resolve(__dirname, "..");
const photosRoot = path.join(projectRoot, "src", "assets", "photos");
const notesRoot = path.join(projectRoot, "src", "content", "photoNotes");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function ensureDirExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function walkDir(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, fileList);
    } else if (entry.isFile()) {
      fileList.push(fullPath);
    }
  }

  return fileList;
}

function toKebabCase(name) {
  return name
    .replace(/\s+/g, "-")
    .replace(/_+/g, "-")
    .replace(/-+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "-")
    .replace(/^-+|-+$/g, "");
}

function generateNoteContent(photoId) {
  const niceTitle = photoId
    .split("-")
    .map((part) =>
      part.match(/^\d+$/) ? part : part.charAt(0).toUpperCase() + part.slice(1)
    )
    .join(" ");

  return `---
photoId: ${photoId}
title: ${niceTitle}
---

<!-- Write your notes for this photo in Markdown. -->

Shot on **HP5** with the 50 mm.

- Add your own bullets
- Or paragraphs of text
`;
}

function main() {
  console.log("Generating photo note stubs...");
  console.log("Photos root:", photosRoot);
  console.log("Photo notes root:", notesRoot);

  if (!fs.existsSync(photosRoot)) {
    console.error("Photos directory does not exist:", photosRoot);
    process.exit(1);
  }

  ensureDirExists(notesRoot);

  const allFiles = walkDir(photosRoot);
  const imageFiles = allFiles.filter((file) =>
    IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase())
  );

  let createdCount = 0;
  let skippedCount = 0;

  for (const imgPath of imageFiles) {
    const basename = path.basename(imgPath, path.extname(imgPath));
    const photoId = basename; // match importPhotos logic (filename without extension)

    const noteFilename = `${photoId}.md`;
    const notePath = path.join(notesRoot, noteFilename);

    if (fs.existsSync(notePath)) {
      skippedCount++;
      continue;
    }

    const content = generateNoteContent(photoId);
    fs.writeFileSync(notePath, content, "utf8");
    createdCount++;
    console.log("Created note:", path.relative(projectRoot, notePath));
  }

  console.log("");
  console.log("Done.");
  console.log("Notes created:", createdCount);
  console.log("Notes skipped (already existed):", skippedCount);
}

main();


