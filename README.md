![Prototype Kit Logo](https://raw.githubusercontent.com/welldigital/prototype-kit/master/public/images/pkit.png)

# Well Digital prototype kit

The prototype kit provides a simple way to make interactive prototypes that look like pages on well.co.uk. These prototypes can be used to show ideas to people you work with, and to do user research.

## Installation

You will need to install:

- [node.js](https://nodejs.org/) - version 6.x.x
- [git](https://git-scm.com/)

If you have node.js & git installed and access to the command-line, you can clone the code to your computer:

First make sure that you're in the directory that you would like to the place the prototype-kit, for example `cd ~/Sites/`, if so you can run the git clone command:

```shell
git clone https://github.com/welldigital/prototype-kit.git
```

Once the clone has finished, change into the prototype-kit directory `cd prototype-kit/` and run the NPM (Node Package Manager) install command:

```shell
npm install
```

It will take a few moments but once successfully complete, that is a the prototype-kit installed onto your computer. To start the prototype-kit, now type:

```shell
npm start
```

That will start the server and you can open it in your web browser by visiting: `http://localhost:3000` (If this address doesn't work, check you have started the server and that there was not another process using the port 3000, if so it will have been given a different port)

## Credit

We are standing on the shoulders of our friends at The [Government Digital Service](https://www.gov.uk/government/organisations/government-digital-service) by extending the [gov.uk prototype kit](https://govuk-prototype-kit.herokuapp.com/docs/about) which they have developed over a number of years.

They have done the hard work to make it simple, at Well Digital we share their belief that [making things open, makes them better](https://www.gov.uk/design-principles#tenth). We intend to contribute back to the GOV.UK Prototype Kit as we use it here at [Well Digital](http://digital.well.co.uk).
