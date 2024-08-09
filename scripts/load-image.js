const fs = require("node:fs");
const path = require("node:path");

const assetsDirectory = path.join(__dirname, `../${process.argv[2]}`);

const outputFile = path.join(assetsDirectory, "index.ts");

const files = fs.readdirSync(assetsDirectory);

let fileContent = "";

files.forEach((file) => {
	if (/\.(png|jpg|jpeg|gif|svg)$/.test(file)) {
		const variableName = `image${file.replace(/\.(png|jpg|jpeg|gif|svg)$/, "")}`;

		fileContent += `import ${variableName} from "./${file}";\n`;
	}
});

fileContent += "\nexport const images = {\n";

files.forEach((file) => {
	if (/\.(png|jpg|jpeg|gif|svg)$/.test(file)) {
		const variableName = `image${file.replace(/\.(png|jpg|jpeg|gif|svg)$/, "")}`;

		fileContent += `  ${variableName}: ${variableName}.src,\n`;
	}
});

fileContent += "};\n";

fs.writeFileSync(outputFile, fileContent);
