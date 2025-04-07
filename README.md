# AIMS Lab Website

## To add content to the website:

1. On Github: https://github.com/jclauneurolab/aims-website fork a repo by selecting the 'Fork' button
   <img width="557" alt="image" src="https://github.com/user-attachments/assets/f7c35bef-b5c0-481b-857f-a125983976ff" />

2. Clone the fork you created with 
    ```bash
    git clone https://github.com/{your-git-username}/aims-website.git
    ```

3. Open up the cloned repo using your favourite IDE. If you have VSCode configured on your system, enter:
    ```bash
    code aims-website
    ```

4. Navigate to the `data` folder and open the `.json` file of the page you want to add content to.

5. Using the same formatting as within the rest of the `.json` file, add your content to the top of the sheet and save the file. A list of the content needed for each section is listed below. 

   For the images, navigate to the `public` folder, and add the image into the respective folders for the page.

### News Page:

```json
{
    "title": "title",
    "link": "link to news", // optional
    "date": "2025-01-01",
    "subheading": "short description of the news", // around a one sentence summary
    "content": "long description of the news",
    "img": "./news-images/test-image.png" // replace 'test-image.png' with the name of your image
}
```

### Paper Page:

```json
    {
        "title": "title",
        "link": "link to paper",
        "date": "2025-01-01",
        "authors": "Lau et al., 2024",
        "img": "./paper-images/ijcars.png" //image of the published jounal - optional
    },
```

### People Page: 

```json
    {
        "active": true, //set active to false if an alumni
        "name": "name",
        "position": "Undergraduate student, etc.",
        "department": "department",
        "supervisor": "co-supervised by...",
        "img": "./people-images/your-image.png",
        "socialLinks": { //any of the social links are optional, if you do not have an account delete it from this section
            "linkedin": "link",
            "github": "link",
            "email": "mailto:your email",
            "orcid": "",
            "google_scholar": "",
            "twitterx": "",
        },
            "bio": ""
    }
```

### Project Page: 

```json
    {
        "title": "Test Project",
        "authors": "test author",
        "paper": "Test project link", //optional
        "github": "Test project github", //optional
        "subheading": "short description of the project", // around a one sentence summary
        "content": "long description of the project",
        "img": "./project-images/test-image.png"
    },
```

## Pushing your changes to git:

1. Once you are finished adding content, make sure you've saved all the files. 
2. In the terminal, enter `git status` to see which files you’ve updated. 
3. Add the files to your commit using `git add <file names>`. For example, `git add people-page.jsx`. To add everthing at once, run `git add .`.
4. Commit the changes with `git commit -m "enter a commit message here"`. For example, `git commit -m "added my profile"`. 
5. Push the new changes to GitHub using `git push -u origin main`.

## To create a pull request

1. Navigate to your forked repo on GitHub.
2. Go to the *Pull Requests* tab and click *New Pull Request*.
3. Click *Create Pull Request*. Add an appropriate title and description, and click on *Create Pull Request* once finished.
4. A website developer will check over the pull request and merge it into the site.
5. That's it!

## For larger contrbutions: run the project in developer mode
1. Clone the repository with `git clone https://github.com/jclauneurolab/aims-website.git`.
2. Use Node.js LTS version with `nvm use --lts`, which sets Node v22.14.0 and npm v10.9.2. 
3. Install the required dependencies with `npm install`.
4. start the development server using `npm run dev`.


