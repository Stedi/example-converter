# Stedi Converter Example Project

This project provides a small example on how to use Stedi Converter's Alpha SDK. The SDK NPM package is in `/pkg`, and there's
an example on how to use it in `/src`. `/tst` provides a test file to convert.

* Disclaimer: the API and SDK are still classed as Internal Preview, and under active development - therefore subject to change.

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
