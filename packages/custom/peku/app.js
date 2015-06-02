'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Peku = new Module('peku');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Peku.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Peku.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Peku.menus.add({
    title: 'peku example page',
    link: 'peku example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Peku.aggregateAsset('css', 'peku.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Peku.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Peku.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Peku.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Peku;
});
