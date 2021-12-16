# README.md Generator

## Purpose

When creating an open source project on GitHub, it should include a professional quality README for the app/project. The README.md is one of the first files people will migrate to for clarity on your app/project.  

The README.md should include information such as what the app is for, how to use it, how to install it, how other developers can make contributions, and other information. This app allows you to concentrate on your app as you will be aware you have an automated README.md generator that has a professional look with pre-determined quality questions needed for a README.md.

## Description
This app generates a README.md automatically once you have loaded it in your code editor and answered all of the questions as directed. It will automatically load a license badge and link to the license. 

## Technology utilized
node.js
inquirer

## Installation instructions
Make sure you have node.js and inquirer installed on your editor. Please create a gitignore file and list node_modules and .DS_Store in the file prior to installing any npm dependicies. This will avoid the mega data associated with inquirer to be pushed up to Github. 

The files, package-lock-json and package.json should have been created for your repo. Copy the generateMarkdown.js, index.js, and Sample-README.md from this app to your folder.

You will right click on the index.js folder and select "open in integrated terminal". In the terminal type "node index.js" and the questions for the README.md should begin.  Answer as appropriate. When done a REAEME.md file will be generated in your folder.  Click on it and review.  You are now done. Congratulations!

## Usage
To include in your github repository for your app.


