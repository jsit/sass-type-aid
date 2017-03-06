/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		sassdoc: {
			default: {
				src: 'sass',
				options: {
					dest: 'docs/sass',
					theme: 'flippant',
          display: {
            access: 'public'
          },
				}
			}
		},
		sass: {
			expanded: {
				options: {
					style: 'expanded',
					sourcemap: true,
				},
				files: {
					'example.css': 'example.scss'
				}
			},
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-sassdoc');
	grunt.loadNpmTasks('grunt-sass');

	// Default task.
	grunt.registerTask('default', ['sassdoc', 'sass']);

};
