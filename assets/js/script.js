/**
* Scripts
*/

/**
 * JavaScript Dispacher - triggers scripts based on the class of the <body>
 * @author Richard Keys - Genius Division - http://www.geniusdivision.com
 */
bd = {
    common : {
        init : function() {
        }
    },
    
    'index.html' : {
        init : function() {
            var container = document.querySelector('.gridded');
            var msnry;
            msnry = new Masonry( container );
        }
    },
};

UTIL = {
    fire : function(func,funcname, args){
        //change to match above namespace
        var namespace = bd;
        funcname = (funcname === undefined) ? 'init' : funcname;
        if (func !== '' && namespace[func] && typeof namespace[func][funcname] == 'function'){
            namespace[func][funcname](args);
        }

    },
    loadEvents : function(){
        // hit up common first.
        UTIL.fire('common');
        // do all the classes too.
        $.each(document.body.className.split(/\s+/),function(i,classnm){
            UTIL.fire(classnm);
        });
    }
};
$(document).ready(UTIL.loadEvents);