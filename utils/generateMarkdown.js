// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string



function renderLicenseBadge(license) {
  let chosenLicense = license
  let licenseBadge = ""
  if (chosenLicense === "Apache license 2.0") {
    licenseBadge = "![License: Apache license 2.0](https://img.shields.io/badge/License-Apachelicense2.0-orange)"
  }
  else if (chosenLicense === "GNU General Public License") {
    licenseBadge = "![License: GNU General Public License](https://img.shields.io/badge/License-GNU-General-Public License-green)"
  }
  else if (chosenLicense === "MIT") {
    licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet)"
  }
  else if (chosenLicense === "BSD") {
    licenseBadge = "![License: BSD](https://img.shields.io/badge/License-BSD-blue)"
  }
  
  console.log(license);
  return licenseBadge;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let linkToLicense = license
  let licenseLink = ""
  if (linkToLicense === "Apache license 2.0") {
    licenseLink = "![License: Apache license 2.0](https://www.apache.org/licenses/)"
  }
  else if (linkToLicense === "GPL") {
    licenseLink = "![License: GPL](https://www.gnu.org/licenses/gpl-3.0.en.html)"
  }
    console.log(linkToLicense)
    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("USER ANSWERS FROM INDEX.js", data)

  return `# ${data.title}

  ## Purpose
  
  ${data.purpose}

  ## Description
  ${data.description}

  ## Features
  ${data.features}

  ## Technology
  ${data.technology}

  ## Challenges
  ${data.challenges}

  ## Contributers
  ${data.contributers}

  ## Screenshot / Video
  ${data.screenshot}

  ## License

  This project is licensed under the ${data.license} license.

  ${renderLicenseBadge(data.license)}

  ${renderLicenseLink(data.license)}
  
`;
}

module.exports = generateMarkdown;
