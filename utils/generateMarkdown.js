	
	const licenseInfo = {
		MIT: "https://www.mit.edu/~amini/LICENSE.md",
		Apache: "https://www.apache.org/licenses/LICENSE-2.0",
		GPL: "https://www.gnu.org/licenses/gpl-3.0.en.html"

	};
	
	function renderLicenseBadge(license){}

	function renderLicenseLink(license){}

	function renderLicenseSection(license, color){
		let licenseSection = 
		`[![License](https://img.shields.io/badge/License-${license}-${color}.svg)](${licenseInfo[license]});`

	}
	
	function generateMarkdown(data){

		markdown =  
`#${data.title}

## Badges & License

## Project Description
${data.description}

## Visuals

## Badges
${renderLicenseSection(data.licenseName, data.licenseColor)}

## Installation Instructions
${data.installationInstructions}

## Usage Instructions
${data.usageInformation}

## Contribution Guidelines
${data.contributionGuidelines}
## Testing Procedure
${data.testInstructions}


## Contact & Questions
You can reach us at ${data.email} or
at our github page https://www.github.com/${data.gitHubUserName}/

`;

		return markdown;
	}

	module.exports = generateMarkdown;
