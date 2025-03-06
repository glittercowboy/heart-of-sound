const fs = require("fs");
const path = require("path");

// Create output directories if they don't exist
function createDirectories() {
  const dirs = ["output", "output/css", "output/js", "output/assets"];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
}

// Main function to split the HTML file
function splitHtmlFile(filePath) {
  try {
    // Read the source HTML file
    const htmlContent = fs.readFileSync(filePath, "utf8");
    console.log(`Successfully read file: ${filePath}`);

    // Extract CSS
    const cssContent = extractCSS(htmlContent);
    fs.writeFileSync("output/css/styles.css", cssContent, "utf8");
    console.log("CSS extracted to output/css/styles.css");

    // Extract JavaScript
    const jsContent = extractJS(htmlContent);
    fs.writeFileSync("output/js/main.js", jsContent, "utf8");
    console.log("JavaScript extracted to output/js/main.js");

    // Clean and update HTML
    const cleanedHtml = cleanHTML(htmlContent);
    fs.writeFileSync("output/index.html", cleanedHtml, "utf8");
    console.log("Cleaned HTML saved to output/index.html");

    console.log("File splitting completed successfully!");
  } catch (error) {
    console.error("Error processing the file:", error);
  }
}

// Extract CSS from HTML
function extractCSS(html) {
  const cssBlocks = [];
  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;

  let match;
  while ((match = styleRegex.exec(html)) !== null) {
    cssBlocks.push(match[1].trim());
  }

  return cssBlocks.join("\n\n");
}

// Extract JavaScript from HTML
function extractJS(html) {
  const jsBlocks = [];
  const scriptRegex = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi;

  let match;
  while ((match = scriptRegex.exec(html)) !== null) {
    // Ignore empty scripts or scripts that just include comments
    const content = match[1].trim();
    if (content && !content.startsWith("<!--") && content !== "") {
      jsBlocks.push(content);
    }
  }

  return jsBlocks.join("\n\n");
}

// Clean HTML by replacing internal styles and scripts with links to external files
function cleanHTML(html) {
  // Replace style tags with link to external stylesheet
  let cleanedHtml = html.replace(
    /<style[^>]*>[\s\S]*?<\/style>/gi,
    '<link rel="stylesheet" href="css/styles.css">'
  );

  // Replace script tags (without src) with link to external JavaScript
  cleanedHtml = cleanedHtml.replace(
    /<script(?![^>]*src=)[^>]*>[\s\S]*?<\/script>/gi,
    function (match) {
      // Don't replace if it's just comments or empty
      if (match.includes("<!--") || match.includes("*/")) {
        return match;
      }
      return '<script src="js/main.js"></script>';
    }
  );

  // Remove duplicate stylesheet references
  const linkTags =
    cleanedHtml.match(/<link rel="stylesheet" href="css\/styles.css">/g) || [];
  if (linkTags.length > 1) {
    // Keep only the first occurrence
    for (let i = 1; i < linkTags.length; i++) {
      cleanedHtml = cleanedHtml.replace(
        '<link rel="stylesheet" href="css/styles.css">',
        ""
      );
    }
  }

  // Remove duplicate script references
  const scriptTags =
    cleanedHtml.match(/<script src="js\/main.js"><\/script>/g) || [];
  if (scriptTags.length > 1) {
    // Keep only the first occurrence before the closing body tag
    for (let i = 1; i < scriptTags.length; i++) {
      cleanedHtml = cleanedHtml.replace(
        '<script src="js/main.js"></script>',
        ""
      );
    }

    // Make sure we have at least one script tag before the closing body tag
    if (!cleanedHtml.includes('<script src="js/main.js"></script>')) {
      cleanedHtml = cleanedHtml.replace(
        "</body>",
        '<script src="js/main.js"></script>\n</body>'
      );
    }
  }

  return cleanedHtml;
}

// Process command line arguments
function main() {
  createDirectories();

  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error("Please provide the path to the HTML file as an argument.");
    console.log("Usage: node html-splitter.js path/to/your/file.html");
    return;
  }

  const filePath = args[0];
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  splitHtmlFile(filePath);
}

main();
