module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
		    dist: {
		        src: [
			        'assets/js/libs/jquery/jquery-1.11.0.min.js', // Include jQuery
		            'assets/js/libs/*.js', // All JS in the libs folder
		            'assets/js/script.js'  // Custom javascript
		        ],
		        dest: 'assets/js/build/production.js',
		    }
		},

		uglify: {
		    build: {
		        src: 'assets/js/build/production.js',
		        dest: 'assets/js/build/production.min.js'
		    }
		},

		imagemin: {
		    dynamic: {
		        files: [{
		            expand: true,
		            cwd: 'assets/img/',
		            src: ['**/*.{png,jpg,gif}'],
		            dest: 'assets/img-optimised'
		        }]
		    }
		},

		compass: {                  
		   	dist: {                   
		    	options: {              
			        sassDir: 'assets/sass',
			        cssDir: 'assets/css',
			        environment: 'production'
		    	}
			}
		},

		watch: {
			markup: {
		        files: ['*.php','*.html'],
		        options: {
		            livereload: true
		        },
		    },

		    scripts: {
		        files: ['assets/js/*.js'],
		        tasks: ['concat', 'uglify'],
		        options: {
		            spawn: false,
		            livereload: true
		        },
		    },

		    css: {
			    files: ['assets/sass/*'],
			    tasks: ['compass'],
			    options: {
			        spawn: false,
			        livereload: true
			    }
			}
		}

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'compass', 'imagemin','watch']);

};