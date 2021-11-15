# Stedi Converter example project

This project provides a small example on how to use Stedi Converter's SDK. The SDK NPM package is in `/pkg`, and there's
an example on how to use it in `/src`. `/tst` provides a test file to convert.

## Install

```shell
npm ci
```

## Set API key environment variable

Obtain a Stedi API key either from your Stedi contact or from [Stedi Terminal](https://terminal.stedi.com/) (go to API Keys)

```shell
export STEDI_API_KEY="..."
```

## Run example

```
npm run csv-to-json
```
