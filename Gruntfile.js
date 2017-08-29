/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		sassdoc: {
			default: {
				src: 'sass',
				options: {
					dest: 'docs',
					theme: 'flippant',
					display: {
						access: 'public'
					},
					descriptionPath: './README.md',
					package: './package.json',
					groups: {
						'1options': 'Options',
						'2typography': 'Typography',
						'3debugging': 'Debugging',
					},
				}
			}
		},
		sass: {
			expanded: {
				options: {
					style: 'expanded',
					sourcemap: true,
					includePaths: [
						'bower_components',
					],
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
