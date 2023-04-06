
# Project Title

Blog With Reactjs/Nextjs 

With API.
  
## API Reference

#### Get all items

```http
  GET /api/test/getPost
  GET /api/test/get
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Authors

Mithilesh Thakur


## Running Tests

To run command

```bash
  npm run dev
```


## Tech Stack

**Client:** React, Nextjs, TailwindCSS

**Server:** MongoDb


## Run Locally

Clone the project

```bash
  git clone https://github.com/mithilesh2023/finalBlog.git
```

Go to the project directory



Install dependencies

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


//Add the @tailwind directives for each Tailwind’s layers to your globals.css file.
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Start the server

```bash
 npm run dev
```


## Installation

Install my-project 

```bash
  npx install create-next-app@latest finalblog
  
```
    
## Support

For support, email manavmourya1996@gmail.com 


## Lessons Learned

When I was faching data in api i got some difficulites and then i read docs on 'nextjs.org' and got many solution but for some region i met to my teacher. and i resolve props. During this i learn new skills and i improved my self and i will keep it continue. I did not complete this project caz i got ill and then hospitalized for 2 to 3 days . if i'll get 2-3 days more i will make it better thanks.

