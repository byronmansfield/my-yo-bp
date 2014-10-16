'use strict';

/**
 * @ngdoc overview
 * @name audioplayerApp
 * @description
 * # audioplayerApp
 *
 * Main module of the application.
 */
angular
  .module('audioplayerApp', [
    'ngAnimate'
    , 'ngCookies'
    , 'ngResource'
    , 'ui.router'
    , 'ui.utils'
    , 'ngSanitize'
    , 'ngTouch'
    , 'ui.bootstrap'
  ])

  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home')

    $stateProvider
      .state('home',
        {
          url: '/home'
          , templateUrl: 'views/main.html'
          , controller: 'MainCtrl'
        }
      )

      .state('about',
        {
          url: '/about'
          , templateUrl: '/views/about.html'
          , controller: 'AboutCtrl'
        }
      )

  })

  .run(function
    (
      $rootScope
      , $state
      , $http
      , $timeout
    )

    {

      $http.defaults.useXDomain = true
      delete $http.defaults.headers.common['X-Requested-With']

      // $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      //  $rootScope.showSpinner()
      // })
      // $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      //  $timeout($rootScope.hideSpinner(), 500);
      // })

      // Detect Touch Screen Feature
      if(Modernizr.touch) {
        alert('We noticed you are on a device with touch screen. Currently our platform support for many tablets and phones are limited. We will be add support for these devices soon')
      }
      // Detect Mobile and Table Screen Sizes
      if(Modernizr.mq('(max-device-width: 800px) and (orientation: portrait)')) {
        // Portrait
        alert('We noticed that you are using a device with a table or phone screen size in portrait view. Currently our platform support for many tablets and phones are limited. We will be supporting tablets and other screen sizes in the future')
      } else if(Modernizr.mq('(max-device-width: 1280px) and (max-device-height: 800px) and (orientation: landscape)') || Modernizr.mq('(max-device-width: 1024px) and (orientation: landscape)')) {
        // Landscape
        alert('We noticed that you are using a device with a table or phone screen size in landscape view. Currently our platform support for many tablets and phones are limited. We will be supporting tablets and other screen sizes in the future')
      }
      
    }

  )
