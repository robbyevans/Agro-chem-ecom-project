##AGROCHEM ECOMMERCE WEBAPP version 1.0

##description

*Agrochem is sample ecommerce web application for selling agrochemical products.It consist of 2 pages a homepage which is the landing page as well as the cart page which is the checkout page. 

*This is a built by single contributor by the  name Evans Rutto.
*Agrochem intends to offer simless ecommerce services to the agricultural sector by providing easy and affordable access to vital agricultural chemicals and equipments countrywide.

##setup/installation

1.clone this repo into your pc.
src=(git@github.com:robbyevans/Agro-chem-ecom-project.git)


2.open the repository containing the files cloned in vscode.

3.While in vscode,open terminal and run the command:

      json-server --watch db.json --routes routes.json

This will start the local server from the json file.

4.open the index.html file with live server

This project is 70% complete with the slight exception of the checkout page,adding of selected elements to cart and payment system

##Technology used

This website is mainly built on HTML,CSS and JavaScript.

Use of local server was implemented by creation of a json file,that is  db.json that contains all the data items to be rendered on the DOM.

The data from the json file is then fetched using the fetch keyword in JavaScript and converted to useable data before being rendered to the DOM.
While fetching the data a GET request is performed on the local API and a response is delivered hence data from our json file is successfully renered in the DOM.

##contact and Support

If you run into any issues while running this web application kindly reachout to me via +254720563260 or on twitter @robbyevans.
Any contribution to the code is welcome

##license

This project is not covered by any license and is open source 

