// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![${license}](https://img.shields.io/badge/license-${license}-lightgrey.png)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [Questions](#questions)


## Installation

${data.install}

## Usage

${data.usage}

## Contribution

${data.contribution}

## Test

${data.test}

## Questions

If you have any further questions, please email me at [${data.email}](mailto:${data.email}) or reach me on Github at [${data.github}](https://github.com/${data.github}).


`;
}

module.exports = generateMarkdown;
