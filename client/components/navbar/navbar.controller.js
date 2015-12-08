/* global $ */

'use strict';

class NavbarController {
  title = 'informi';

  //start-non-standard

  //TODO figure out best way to add these programmatically.
  // be able to have options for certain packages that may not need a main menu item
  menu = [
    {
      label: 'dashboard',
      icon: '',
      ui_sref: 'dashboard'
    },
    {
      label: 'weather',
      icon: '',
      ui_sref: 'weather'
    },
    {
      label: 'sensors',
      icon: '',
      ui_sref: 'sensors'
    }
  ];

  isCollapsed = true;

  // toggles sidebar
  toggler() {
    angular.element(document.getElementById('wrapper')).toggleClass('toggled');
  }

  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

}

angular.module('informiApp')
  .controller('NavbarController', NavbarController);
