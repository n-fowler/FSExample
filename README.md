# Automation Engineer Project

This repository is part of the interview process for Formstack Automation Engineer. It's intended to be a coding challenge that takes under 3 hours, but gives an overview of some of the challenges we have in our products.

## Outline

There are two servers in this project:

- `datafetcher.js`: a webserver that requests data from third-party apis
- `datasaver.js`: a process that exercises the `datafetcher` API every 30 seconds to fetch data, and then saves that data to disk

The `datafetcher` API fetches a list of users - name, address, etc. The purpose of the system is for the `datasaver`server to continually check the list of users and keep a local copy of the user list up to date. The `datasaver` server will update a JSON file in the project directory when anything changes.

## Installation

(assumes node.js >8.0 is installed)

`npm install`

## Startup

Open two separate terminals and run:
`node datafetcher.js`
`node datasaver.js`

You should see both processes start up and print debug logs.

## Assignment

Please use whatever tools/frameworks/methods you prefer to test the system and answer the following questions:

1. Can the datafetcher get data from the third-party api successfully
1. Can the datasaver save data successfully
1. Are we running on schedule (every 30 seconds)?
1. Is the whole system working? (we're looking for a description or example of how integration testing might work)
1. What would you monitor to make sure it was still working, and how might you set that up? (no need to actually do it)

Feel free to edit the server code or change anything necessary to make testing eaiser/better. Comments explaining the thought process behind any changes would be much appreciated.

## Engineer Notes:  Open EngineerNotes.txt for assignment results