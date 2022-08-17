

### plant-frontend

## prerequisities 

- yarn

### Local setup


Copy content from `.env.dist` to `.env` and fill with correct credentials.

`````
nvm use
yarn dev
`````

Go to `localhost:3000/plants`

#### Code formation & type check

```
yarn format:check
yarn format

yarn lint
yarn lint --fix

yarn types:check
```


#### Typescript generation

`yarn gql:generate`