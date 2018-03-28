# Stimulus installation guide for Laravel with npm/webpack

This is installation guide for Stimulus javascript framework on Laravel 5.6 with npm/webpack.


## Installation

### Step 1 - Install Laravel
You can find instructions here https://laravel.com/docs/5.6/

### Step 2 - Install npm dependencies
```
npm install
```

### Step 3 - Install Stimulus
```
npm i stimulus
```

### Step 4 - Add following code to resources/assets/js/app.js
```
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))
```

### Step 5 - Add controllers folder 
Add `controllers` folder to resoureces/assets/js


### Step 6 - Run npm
```
npm run dev
```

You are done!


## OR

You can simply clone this repo with <b>stimulus hello world example</b> which was inspired by
https://stimulusjs.org/handbook/hello-stimulus

### Step 1 - Clone the repo
`git clone git clone https://github.com/jcergolj/laravel-stimulus-installation.git` 

### Step 2 - Install dependencies
```
npm install
composer install
``` 

### Step 3 - Create .env file
```
cp .env.example .env
php artisan key:generate
``` 

### Important note: 
Replace inside hello_world_controller.js

```
 static targets = ["name"];
``` 

with

```
static get targets() {
    return [ "name" ]
}
```

For some reason the first solution does not work. Any idea why? ;)

Visit homepage and type a name. The result will be shown inside console.


Happy coding!!!