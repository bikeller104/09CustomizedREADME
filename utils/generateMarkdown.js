	function renderLicenseBadge(license){}

	function renderLicenseLink(license){}

	function renderLicenseSection(license){}
	
	function generateMarkdown(data){

		markdown =  
`#${data.title}

## Badeges

## Project Description
${data.description}

## Visuals

## Installation Instructions
${data.installationInstructions}

## Usage Instructions

## Contribution Guidelines

## Testing Procedure

## license

## Contact & Questions
You can reach us at ${data.email} or <br>
at our github page https://www.github.com/${data.gitHubUserName}/

`;

return markdown;
	}

	module.exports = generateMarkdown;
