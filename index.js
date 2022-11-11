/*
what data do I need for my readme?

	Title

	Description

	Installation Instructions

	Usage Information

	Contribution Guidelines

	Test Instructions

	License & License Badge

	GitHub Username for the Questions Section

	Email also for the questions section

*/

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

function ReadMeData(title, description, installationInstructions, usageInformation, contributionGuidelines, testInstructions, licenseName, gitHubUserName, email)
{
	this.tilte = title;
	this.description = description;
	this.installationInstructions = installationInstructions;
	this.usageInformation = usageInformation;
	this.contributionGuidelines = contributionGuidelines;
	this.testInstructions = testInstructions;
	this.licenseName = licenseName;
	this.gitHubUserName = gitHubUserName;
	this.email = email;
}

const questions = [
	{	name:'title',
		type:'input',
		message:'What is the project name',
	},	
	{	name:'description',
		type:'input',
		message:'Enter the project description',
	},	
	{	name:'installationInstructions',
		type:'input',
		message:'What are the installation instructions for the project',
	},
	{	name:'usageInformation',
		type:'input',
		message:'Enter instructions on how to use the project',
	},	
	{	name:'contributionGuidelines',
		type:'input',
		message:'Enter instructions for how to contribute to the project',
	},	
	{	name:'testInstructions',
		type:'input',
		message:'Enter istructions informing the user on how to test the project',
	},	
	{   name:'licenseName',
		type:'list',
		message:'What license does the project use',
		choices: ['Apache', 'MIT', 'GPL'],
	},
	{	name:'gitHubUserName',
		type:'input',
		message:'What is your github username',		
	},
	{	name:'email',
		type:'input',
		message:'What is your email',
	},

];

function writeToFile(fileName, data) {}

function init(){
	inquirer.prompt(questions)
	.then((responses) =>
	{
		let data = generateMarkdown(responses);
		console.log(data);
		// console.log(responses);
	});
}

init();
