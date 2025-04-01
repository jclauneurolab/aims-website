# AIMS Lab Website

## To add content to the website:

1. On Github: https://github.com/jclauneurolab/aims-website fork a repo by selecting the 'Fork' button
   <img width="557" alt="image" src="https://github.com/user-attachments/assets/f7c35bef-b5c0-481b-857f-a125983976ff" />

2. Clone the fork you created with 
    ```bash
    git clone https://github.com/{your-git-username}/aims-website.git
    ```

3. Make a new branch by running:
    ```bash
    git checkout main
    git branch your-branch-name
    git checkout your-branch-name
    ```
   (For example, `your-name-profile` if adding to the profile page)

4. Open up VSCode. If you are on the CBS server, enter:
    ```bash
    code .
    ```

5. Navigate to the `data` folder and open the `.json` file of the page you want to add content to.

6. Using the same formatting as within the rest of the `.json` file, add your content to the top of the sheet and save the file. A list of the content needed for each section is listed below. 

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
3. Add the files to your commit using `git add <file names>`. For example, `git add people-page.jsx`. 
4. Commit the changes to your branch with `git commit -m "enter a commit message here"`. For example, `git commit -m "added my profile"`. 
5. push the branch with the new changes to GitHub using `git push -u origin your-branch-name`.

## To create a pull request

1. navigate to [https://github.com/jclauneurolab/aims-website](https://github.com/jclauneurolab/aims-website). 
2. Go to the *Pull Requests* tab and click *New Pull Request*.
3. On the right, select your branch. On the left, select the `main` branch. 
4. Click *Create Pull Request*.
5. A website developer will check over the pull request and merge it into the site.
6. That's it!

## For larger contrbutions: run the project in developer mode
1. Clone the repository with `git clone https://github.com/jclauneurolab/aims-website.git`
2. Use Node.js LTS version with `nvm use --lts`, which sets Node v22.14.0 and npm v10.9.2. 
3. Install the required dependencies with `npm install`
4. start the development server using `npm run dev`


