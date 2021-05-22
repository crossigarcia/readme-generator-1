// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license !== 'none') {
    return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none'){
    switch (license) {
      case 'MIT':
        return "This project is covered under: \n [MIT License](https://en.wikipedia.org/wiki/MIT_License)";
      case 'Apache':
        return "This project is covered under: \n [Apache License](https://en.wikipedia.org/wiki/Apache_License)";
      case 'GPLv3':
        return "This project is covered under: \n [GPLv3 License](https://en.wikipedia.org/wiki/GNU_General_Public_License#Version_3)";
      case 'CC':
        return "This project is covered under: \n [CC License](https://en.wikipedia.org/wiki/Creative_Commons_license#Types_of_license)";
    }
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `
## License:
${renderLicenseLink(license)}
  `;
  }
  return '';
}

function licenseTableLink(license) {
  if (license !== 'none') {
    return `* [License](#License)`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description: 
> ${data.description}

${renderLicenseBadge(data.license)}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Test](#Test)
${licenseTableLink(data.license)}
* [Questions](#Questions)



## Installation:
${data.installation}

## Usage:
${data.usage}

## Contributing:
${data.contribution}

## Test:
${data.test}

${renderLicenseSection(data.license)}

## Questions:
GitHub: [${data.github}](https://github.com/${data.github}) 

For additional information on this project you can email your questions here: <${data.email}>  

`;
}

module.exports = generateMarkdown;
