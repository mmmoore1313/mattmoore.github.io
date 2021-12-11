# Github: Actions

These are the various github actions you can take to automate with CI/CD

## CI with GitHub actions

### Npm publishing

Use GitHub actions to automate your build and publish

1.  In your root directory, create a `.github` folder

    ```powershell
    mkdir .github
    ```
2.  Change into the `.github` folder

    ```powershell
    cd .github
    ```
3.  Add and commit code

    1. add changes

    ```powershell
    git add .
    ```

    b. commit message

    ```powershell
    git commit -m "Blah Blah"
    ```
4.  push to repo

    ```powershell
    git push -u origin main
    ```
5.  create .github folder

    ```powershell
    mkdir .github
    cd .github
    ```
6.  create workflows folder

    ```powershell
    mkdir workflows
    ```
7.  cd workflows

    ```powershell
    cd workflows
    ```
8.  create .yml file within the workflows folder

    ```powershell
    publish.yml
    ```
9.  fill out the .yml file

    ```yaml
    name: "NPM publish"

    on:
        push:
            branches:
              - main

    jobs:
        release:
            name: NPM publish
            runs-on: ubuntu-latest
            steps:
              - name: Checkout
                uses: actions/checkout@v2.4.0
              - name: Setup Node.js environment
                uses: actions/setup-node@v2.4.1
                with:
                      node-version: 16.13.0 #use the node-version on your system
                      registry-url: https://registry.npmjs.org
              - name: publish
                run: npm publish --access public
                env:
                  NODE_AUTH_TOKEN: ${{secrets.NPM_AUTH_TOKEN}}
    ```

    Access Tokens
10. update the module version
    *   manually, run

        ```powershell
        npm version minor # updates are in the 0.1.0 range
        ```
    *   auto with CI, put in `.yml` file:

        ```yaml
        - name: Update version in package.json
          uses: maks-stupak/gh-action-bump-version@v7.1.5
        ```
11. add, commit, and push
