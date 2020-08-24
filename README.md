# Ngxtranslat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Table of content

* [About the project](#general-info)
* [Feautures](#technologies)
* [Installation](#setup)
* [Developement](#setup)

## About the project

Tata It is a web application that allows the translation of pages from French to English.
it is done in angular

![ngx](https://user-images.githubusercontent.com/42650742/91036389-8c3a1e00-e607-11ea-9537-beade2967087.gif)

## Feautures

* translate component with ngx translate
* switch between global navbar and specific navbar of application
* Responsive components

## Installation

Access the Front-End folder

```
$ cd ngx translate
```

Install dependencies

```
$ npm install
```

Run the angular project

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Developement

### Translate component with ngx translate
* install ngx translate :

```
$ npm install @ngx-translate/core@10 @ngx-translate/http-loader@3 rxjs --save
```
* import ngx translate to app.module.ps :

![ngx1](https://user-images.githubusercontent.com/42650742/91036695-15e9eb80-e608-11ea-8459-8cbdbead2a6b.png)

![ngx2](https://user-images.githubusercontent.com/42650742/91036775-37e36e00-e608-11ea-8ecb-a69e1577aeed.png)

* create two files json on folder i18n :

![ngx3](https://user-images.githubusercontent.com/42650742/91037001-96a8e780-e608-11ea-9518-71fffd05ae2b.png)

* locate the file json on app.module .ts :

![ngx6](https://user-images.githubusercontent.com/42650742/91037176-d66fcf00-e608-11ea-9950-3002a57ee93d.png)

* create function to translate page web from French to English in app.component.ts

![ngx5](https://user-images.githubusercontent.com/42650742/91037328-1a62d400-e609-11ea-8e48-da2a539e550e.png)

* creation of choice list to change language from French to English in app.component.html

![ngx4](https://user-images.githubusercontent.com/42650742/91037347-23ec3c00-e609-11ea-85b5-b2de7e2f0a70.png)

### switch between global navbar and specific navbar of application by clicking on the test link

![ngx8](https://user-images.githubusercontent.com/42650742/91037579-89402d00-e609-11ea-8199-c113c8edb53a.png)

![ngx9](https://user-images.githubusercontent.com/42650742/91037586-8d6c4a80-e609-11ea-84b1-64dade0d8513.png)

### Responsive components

![ngx7](https://user-images.githubusercontent.com/42650742/91037598-92c99500-e609-11ea-82b1-09d6b8c2754c.png)




