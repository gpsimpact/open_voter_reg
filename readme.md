Open Voter Registration project

To run locally:
* Install / configure nanobox client http://nanobox.io
* duplicate example.env to .env and customize
* load environmental variables with `nanobox evar load local .env`
* run `nanobox run` from within the project directory
* run `yarn install` to install dependencies 
* run tests with `yarn test`

Database migrations:
* migrate database to latest version with `yarn db:migrate`
* reset database (erase all data - useful with testing) with `yarn db:reset`
