// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license !== 'none') {
    return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License`
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description: 
${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [Test](#Test)
* [About](#About)

## Installation:
${data.installation}

## Usage:
${data.usage}

## Contribution:
${data.contribution}

## Test:
${data.test}

## About:
${data.github}
${data.email}

${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}

`;
}

module.exports = generateMarkdown;
