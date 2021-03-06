<h1 align="center">Geronimo</h1>
<h2 align="center">An API explorer sandbox</h2>
<p align="center">
  Sandbox: <a href="https://geronimo-282320.wl.r.appspot.com" target="_blank">https://geronimo-282320.wl.r.appspot.com</a>
</p>
<p align="center">
Geronimo is built with Vanilla JS and hosted with <a href="https://cloud.google.com/appengine" target="_blank">Google Cloud App Engine</a>
</p>
<img src="https://github.com/pattishin/geronimo/blob/master/src/images/geronimo1.png?raw=true" />

## 💻 Using the app

1. Adding a new API Explorer via the batch method. You can check out the `examples` folder.
   ```sh
   [{
		"title": "Get users",
		"url": "https://jsonplaceholder.typicode.com/users",
		"method": "GET"
	}]
   ```

2. Add new API Explorer one at a time with the single form  method.

Either method should produce an API Explorer Card.
<img src="https://github.com/pattishin/geronimo/blob/master/src/images/geronimo2.png?raw=true" />

## ⚙️  Getting started with development

1. Install dependencies

   ```sh
   npm install
   ```

2. Start the development server

   ```sh
   npm run start
   ```
  Runs the app in the development mode.<br />
  Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## 🚀 Deploying

Create production build manually

   ```sh
   npm run build
   ```

Or just do it in all one go. (Builds and deploys via Google Cloud App Engine)

   ```sh
   npm run deploy
   ```
