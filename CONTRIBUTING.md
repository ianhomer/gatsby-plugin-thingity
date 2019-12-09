# tl;dr

    npm install

# Local Development

    cd gatsby-plugin-thingity
    npm link
    cd ../your-content-project
    npm link gatsby-plugin-thingity
    npm install
    npm run develop

Then open up the site at http://localhost:8000/

Then you can make local changes to thingity and see them applied to your-content-project

# Linting

    npm run lint
    npm run lint:fix
    
# Publish Troubleshooting

Create a Github PAT with `repo` and read:packages` scopes, then:

    npm login --registry=https://npm.pkg.github.com/ 
    npm publish
 




