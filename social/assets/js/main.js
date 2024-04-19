/*
 * Cocoon -  Portfolio html  Template
 * Build Date: december 2017
 * Author: colorlib
 * Copyright (C) 2018 colorlib
 */
 /* ------------------------------------- */
/*  TABLE OF CONTENTS
 /* ------------------------------------- */
/*   PRE LOADING                          */
/*   WOW                                 */
/*   SIDEBAR Menu                                */
/*   Portfolio Masonry                         */
/*   portfolio-filter                    */
/*   pop up                              */
/*   OWL CAROUSEL                        */
/*    MAPS                               */
/*   COUNTER JS              */



    /* ==============================================
/*  PRE LOADING
  =============================================== */
'use strict';
$(window).load(function() {
    $('.loader').delay(500).fadeOut('slow');
});


$(document).ready(function() {

    'use strict';
    /* ==============================================
     /*   wow
      =============================================== */
    var wow = new WOW(
        {
            animateClass: 'animated',
            offset: 10,
            mobile: true
        }
    );
    wow.init();

    /* ==============================================
      Sidebar show and hide
       =============================================== */
    $(".menu-btn").on('click',function(i){
        $("body").toggleClass("sidebar_closed");
    });



});