No need to import any SharedModule.

As of Angular 6/7+ we now define `providedIn: 'root'` in every service. It states that the service is a singleton et is automatically provided in the root module (here, AppModule). 

It can be used everywhere by simply injecting it in the constructor. `private exampleService: ExampleService`.
