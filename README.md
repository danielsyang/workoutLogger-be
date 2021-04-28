# workoutLogger-be

### Development

1. Install node.
2. Install yarn.
3. Install docker.
4. run `yarn install`.

Now let's create a local database. In the terminal run:

1. `docker pull postgres`
2. `docker run --name workout-logger -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres`

Now you're all setup for running this project locally. Run:

**`yarn start`**
