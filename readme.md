Jest with Docker
* * *

## Setup
```
    yarn install
```

## Issue

Unable to mock console inside docker using jest.

## Run tests
```sh
    yarn run test
```
## Check in docker
```sh
    yarn run build:docker
```

## Error
```sh
FAIL test/component/hello.spec.js
  <Hello /> component
    ✕ should give error for the requied props (7ms)
    ✓ should give error for the requied props (6ms)

  ● <Hello /> component › should give error for the requied props

    expect(jest.fn()).toBeCalled()

    Expected mock function to have been called.

      at Object.it (test/component/hello.spec.js:10:31)
          at new Promise (<anonymous>)
          at <anonymous>

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        9.709s
Ran all test suites.
```