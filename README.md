## [Check it on Vercel](https://nt-prog-trading-terminal.vercel.app/)

## Data for authorization:
- Email: test@test.com
- Password: test@test.com

# How to start the project localy?
- git clone this project
- cd my-app
- npm i
- npm run dev

# How to use this terminal?
1) First of all you have to Sign In or Sign Up (just use test data for email and password: test@test.com)
2) As you can see there are Tickers on the left side of the app
- you can add one more ticker
- you can remove one of them if there are more then 2 tickers
- you can create Request by selecting the required Instrument and input the required Amount
- In 2 seconds Request status will turn into of these statuses ('rejected', 'cancelled', 'filled')
3) There is a Request Table on the right side of the app
- you can see the list of requests
- page size here is 15 items
- you can download the data as CSV file
- also I added example for sorting (Sort by Increase and Decrease for Amount, rollback Table to Default instance) 
- if you click on the Show Chart button you will get an EXAMPLE Chart

# What I used for it?
| Package name                                                        | Version  |                                                | 
| --------------------------------------------------------------------|:--------:|:----------------------------------------------:|
|[vite](https://vitejs.dev/guide/)                                    | 4.1.0    | instead of CRA                                 |
|[react](https://www.npmjs.com/package/react)                         | 18.2.0   | main library                                   | 
|[typescript](https://www.typescriptlang.org/docs/)                   | ^4.9.3   | provides typization                            | 
|[react-hot-toast](https://react-hot-toast.com/)                      | 2.4.0    | provides simplified notification functionality | 
|[react-redux](https://www.npmjs.com/package/react-redux)             | 8.0.5    | provides state management                      |
|[@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)   | ^1.9.3   | simplified version of redux                    |
|[react-json-to-csv](https://www.npmjs.com/package/react-json-to-csv) | 1.2.0    | provides downloading CSV file with custom data |
|[firebase](https://www.npmjs.com/package/firebase)                   | 9.17.1   | provides simplified authorization              |
|[@mantine](https://mantine.dev/)                                     | ^5.10.4  | UI kit                                         |
|[echart](https://echarts.apache.org/en/option.html)                  | ^0.1.3   | provides chart building                        |
|[echarts-for-react](https://www.npmjs.com/package/echarts-for-react) | ^0.1.3   | provides simplified echart components          |
