module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		/*clean: Configure which files and directories to delete*/
		clean: {
			development: ['build/', 'src/main/webapp/app/compressed/test.min.js',  'src/main/webapp/app/compressed/test.min.js.map']
		},
		
		/*jshint - js code quality*/
		jshint : {
			options : {
				jshintrc : '.jshintrc',
				reporter : require('jshint-summary')
			},
			files : [ '!Gruntfile.js', 
			          // expception files
			          '!src/main/webapp/app/**/*.js' ]
		},
		
		/*csslint - css code quality*/
		csslint: {
			strict: {
				src: ['!src/main/webapp/css/*.css']
			}
		},
		
		/*Compress:Minify js files*/
		uglify : {
			prod : {
				options: {
					mangle:false,
					sourceMap: true,
					sourceMapIncludeSources: true,
			        compress: {
			            drop_console: true
			          }
				},
				files: {
					/*destination files*/					/*list of source files - should uglify files in this order to properly load the depenedent functions first*/
					'src/main/webapp/app/compressed/evolve.min.js' : ['src/main/webapp/app/utils.js', 
					                                       'src/main/webapp/app/app.js',
					                                        '!src/main/webapp/app/services/version.service.js'
					                                       ]
				}
			}
		},

		/*listen for change in source files and reload automatically*/
		watch : {
			js : {
				files : 'src/main/webapp/app/**/*.js',
				tasks : ['uglify' ]
			},
			
			livereload : {
				files : [ 'src/main/webapp/app/**/*.js',
						'src/main/webapp/**/*.html',
						'src/main/webapp/**/*.css' ],
				options : {
					livereload : true,
					debounceDelay: 3000
				}
			}
		}
	});


	/*Task(s).*/
	grunt.registerTask('build', [ 'clean:development', 'jshint', 'csslint', 'uglify:prod' ]);				//local
	grunt.registerTask('dev', 	[ 'clean:development', 'uglify:prod' ]);									//dev
	grunt.registerTask('prod', 	[ 'clean:development', 'uglify:prod' ]);									//prod

};
