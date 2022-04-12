# Contributing to the SiaCashCoin ecosystem 
SCC project is an open source fork of PCS 

Thanks for taking the time to contribute the link also apply to this repository!
You can start by reading PCS [Contribution guidelines](https://docs.pancakeswap.finance/code/contributing) at SCC we welcome all contributors to our project please submit a pull request for approval.

## We Recommend using Visual Studio Also Visit node_modules/@siacashcoin/uikit Folder after you compile locally and follow instuctions to edit graphics
SCC npm package released here https://www.npmjs.com/package/@siacashcoin/uikit

Install the dependencies (Clone repository and then usuing visual studio open the folder and within a new terminal run the yarn commands below)

```shell
yarn
yarn start
```

(after development server is launched you may view the site via localhost in your browser if forking our project repository to make your own frontend you should run a " yarn build " to generate a new build folder after you have made some changes. Then take the build folder and manually upload to netlify your site will be live. If you would like to connect your frontend to github which we highly recommend so the project is open source you will need to publish the UiKit as your own npm package to then update package.json and upate all imports in this repsitory) 

If you need help forking and rebranding our frontend for your own token contact us contact@siacashcoin.com or on Telegram @siacashcoindev we are happy to help!

Don't forget to setup your IDE with `eslint` and `prettier`.

## Project structure

- **components** contains generic components used inside the application.
- **views** contains building blocks for each page. The entry point of a view is used as the root component of each route.
- **config** contains all the config files and ABIs.
- **state** contains the redux files for the global state of the app.
- **context** contains global contexts (separated from the redux store)
- **hooks** contains generic hooks.
- **utils** contains generic utilities functions.

## Tests

Run tests with `yarn test`.

## Localisation

Keys should be added to translation.json file, in order to be translated to other languages.

### Adding translations

A hook expose the function you need to translate content.

```
import { useTranslation } from 'contexts/Localization'

...
const { t } =  useTranslation()
...

t(key, data)
```

- **key** is the crowdin key of the string you want to translate.
- **data** dynamic variables

#### Dynamic variables Example

If a Crowdin translation like this `You have %num% left in your wallet` - would look something like:

```
t(`You have %num% left in your wallet`, { num: cakeBalance })
```

## Issue reports

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful - thank you!

Guidelines for bug reports:

1. **Use the GitHub issue search** &mdash; check if the issue has already been
   reported.

2. **Check if the issue has been fixed** &mdash; try to reproduce it using the
   latest `master` or development branch in the repository.

3. **Isolate the problem** &mdash; create a [reduced test
   case](http://css-tricks.com/reduced-test-cases/) and a live example.

4. **Add attachments** &mdash; add photos or videos


