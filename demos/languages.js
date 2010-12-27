/**
 * Copyright 2010 Ganzogo. All Rights Reserved.
 *
 * Convenience methods for a selection of natural languages. Feel free to copy
 * the one that you need.
 * 
 * Author: Matthew Hasler (matthew@ganzogo.com)
 */
$(document).ready(function() {

  /**
   * Convenience method providing special characters for French.
   */
  $.fn.frenchedit = function(options) {
    return this.each(function() {
      $(this).specialedit(['&agrave;',
                           '&acirc;',
                           '&ccedil;',
                           '&eacute;',
                           '&egrave;',
                           '&ecirc;',
                           '&euml;',
                           '&icirc;',
                           '&iuml;',
                           '&ocirc;',
                           '&ugrave;',
                           '&ucirc;',
                           '&uuml;',
                           '&aelig;',
                           '&oelig;'
                          ], options);
    });
  };

  /**
   * Convenience method providing special characters for German.
   */
  $.fn.germanedit = function(options) {
    return this.each(function() {
      $(this).specialedit(['&auml;',
                           '&ouml;',
                           '&uuml;',
                           '&szlig;'
                          ], options);
    });
  };

  /**
   * Convenience method providing special characters for Spanish.
   */
  $.fn.spanishedit = function(options) {
    return this.each(function() {
      $(this).specialedit(['&aacute;',
                           '&eacute;',
                           '&iacute;',
                           '&ntilde;',
                           '&oacute;',
                           '&uacute;',
                           '&uuml;',
                           '&iexcl;',
                           '&iquest;'
                          ],
                           options);
    });
  };

  /**
   * Convenience method providing special characters for Italian.
   */
  $.fn.italianedit = function(options) {
    return this.each(function() {
      $(this).specialedit(['&agrave;', 
                           '&eacute;',
                           '&egrave;',
                           '&igrave;',
                           '&oacute;',
                           '&ograve;',
                           '&ugrave;'
                          ], options);
    });
  };

  /**
   * Convenience method providing special characters for Polish.
   */
  $.fn.polishedit = function(options) {
    return this.each(function() {
      $(this).specialedit(['&#261;',
                           '&#263;',
                           '&#281;',
                           '&#322;',
                           '&#324;',
                           '&oacute;',
                           '&#347;',
                           '&#378;',
                           '&#380;'
                          ], options);
    });
  };

});
