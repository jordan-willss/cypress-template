## Cypress API demo

</br>

A blank Cypress project, with a simple navigation test

</br>

#

</br>

### Prerequisite applications

- [ ] [Git](https://git-scm.com/downloads)
- [ ] [Node.js](https://nodejs.org/en/download/)
- [ ] [VSCode](https://code.visualstudio.com/download)

#

</br>

### Getting started

</br>

<details>
    <summary>Hide/Show</summary>

1. Open a terminal, by navigating to "Terminal > New Terminal" along the top navigation bar.
   
   ![An image showing how to open a new terminal via the menu labelled "Terminal", and then by clicking "New Terminal"](images/open-terminal.png "Open a new terminal")
2. Once open, type the following command: "npm install", and press enter.
   
   ![An image showing the command "npm install" in the terminal](images/install.png "Install the required dependencies")
3. Open the *package.json* file in your folder hierarchy.   
   
   ![An image showing the folder hierarchy, where the "package.json" file has been highlighted](images/folders.png "Open the package.json file")

4. Identify the name of a *script* you want to run, in this case we will use "cypress"
   
   ![An image showing the contents of the "package.json" file, where the script "cypress" has been highlighted](images/script.png "Select a script")

5. In your terminal, type the following command: "npm run cypress", and press enter.
   
   ![An image showing the command "npm run cypress" in the terminal](images/run.png "Run the concurrent script")
</details>

</br>

#

</br>

### Task

</br>

Using the domain [https://the-internet.herokuapp.com](https://the-internet.herokuapp.com), create some automation using any of the available HTML examples on the website. There should be at least 5 different examples tested. 

A Cypress example is available in [cypress\e2e\example.cy.js](cypress\e2e\example.cy.js), showing the proper setup of fixtures and POM.