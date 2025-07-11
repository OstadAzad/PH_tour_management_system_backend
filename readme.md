# Setting up an industrial project installation and its requirements

1. At first, create a folder in any drive
2. Open the folder in vs code terminal
3. VS code terminal write “git init”
4. A hidden file creates the folder named “.git”. We can get it by its properties section.
5. In the VS code folder we create a file named “.gitignore” and inside it we write “node_modules” to ignore all unusable data. We do not need the node_modules file in our github because it is a big file.
6. In the VS code terminal write “git checkout -b development”. The running terminal branch changes to development. We use development because our team’s all data include the development branch by a team leader and the only team leader control the “development” branch
7. In the terminal write “git add .”
8. Then write “git commit -m “initial commit” “
9. In the terminal, create a branch and write “git checkout -b project-setup” for a specific task and an individual member doing his job in the “project-setup” branch. After completing the task the member pushes it to github and the team leader pulls the all members code from github to the “development” branch for the file finishing project.
10. In the terminal write “npm init -y”. A package.json file created.
11. Then install typescript write “npm i -D typescript”. In the package.json file we will see the typescript “devdependency”. That means this package will not be used in production projects. It is used only in the development process.
12. In the terminal write “tsc - - init” for initial typescript for the project. After doing this a file is created which is named “tsconfig.json”. 
13. Go to "tsconfig.json" file and find out "rootDir" word and comment out then write: ("rootDir" : "./src") and find out "outDir" word and comment out then write: ("outDir" : "./dist")
14. For backend purpose we need install “npm i express mongoose zod jsonwebtoken cors dotenv”; express for backend(node), mongoose for database, zod for validation, jsonwebtoken(jwt) for backend, cors for frontend and server port, dotenv for password, api, credential data store it as a hidden.
15. In the terminal write “npm i -D ts-node-dev @types/express @types/cors @types/dotenv @types/jsonwebtoken” ts-node-dev for run the typescript server, @types/… use for their types.
16. Go to "package.json" file and in the "Scripts" section write : "dev": "ts-node-dev --respawn --transpile-only src/server.ts", "build":"tsc", "start": "node dist/server.js",
17. Create 2 folders. One name is “src” and another is “dist”
18. Create 2 files in src. One name is “server.ts” it is like head and another is “app.ts” it is like neck
19. create a file in the root of project named ".env" for credential informtaion like PORT, MONGO_URI, Password, jwt etc
20. in the "src" create a folder "config" and create a file named "dbConnect.ts" for database connection data and database structure
21. Try to keep structure modules wise. like create a folder named "modules" then in it the create new folder for requirement like "user","products", "tour" etc.
22. every "modules folder's have 4 basic file. They are: 1. user.interface.ts, 2. user.model.ts, 3. user.controller.ts 4. user.route.ts
23. install ESlint for clean code and specific style. installation process to see please ESlint website; write "typescript eslint" in google.
24. 

=========Mongoose, ExpressJS Install Process with TypeScript================

1. At first, create a folder in any drive or by a terminal
2. create file name ".gitignore" in the file write : node_modules. This means this project ignore "node_modules" data
3. in terminal write : npm init -y ( A json file created which name is "package.json")
4. npm i -D typescript ( -D means developer dependency. it is not use production project directly. it is use for developer practice purpose only. Another reason is: practically, typescript data is not run in project directly. converting the typescript data to javascript then we can use it in directly any project.). After put this syntex in terminal we get a file which name is "package-lock.json"
5. npm i -D @types/express (this npm package install for typescript data type)
6. npm i express (terminal write it. it is add in "package.json" and "package-lock.json" file as a dependency package. it is directly used in production project. Additionally, a lot of data added in "package-lock.json" file)
7. tsc --init(terminal write the code and created a package which is : "tsconfig.json")
8. Create two folder. one name is "src" and another name is "dist". The "src" file keep typescript file("rootDir" : "./src") and "dist" file keep javascript file("outDir" : "./dist").
9. Go to "tsconfig.json" file and find out "rootDir" word and comment out then write: ("rootDir" : "./src") and find out "outDir" word and comment out then write: ("outDir" : "./dist")
10. create two file in "src" folder. one name is "app.ts" which is have all application data in here and another is "server.ts" which is have server related data for run.
11. typescript project watch write : tsc -w
12. Go to "package.json" file and in the "Scripts" section write : "dev": "ts-node-dev --respawn --transpile-only src/server.ts", "build":"tsc", "start": "node dist/server.js",
13. npm i mongoose
14. npm i -D ts-node-dev (this package install for two main works. converting typescript data to javascript and run the project in browser automatically)