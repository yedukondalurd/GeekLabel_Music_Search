module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    compress: false,
                    paths: ['styles/less/*/']
                },
                files: {
                    'build/css/style.css': 'app/styles/less/styles.less'
                }
            }
        },
        clean: {
            folder: ['build/*']
        },
        concat: {
            options: {
                separator: ';'
            },
            build: {
                src: [
                    'app/app.js',
                    'app/directives/*.js',
                    'app/directives/*/*.js',
                    'app/controllers/*.js',
                    'app/controllers/*/*.js',
                    'app/services/*.js',
                    'app/services/*/*.js'
                ],
                dest: 'build/js/gl-main.js'
            }
        },
        copy: {
            html: {
                expand: true,
                cwd: 'app/views/',
                src: '**',
                dest: 'build/views/'
            }
        },
        watch: {
            styles: {
                files: ['app/styles/less/*.less', 'styles/less/**/*.less'],
                tasks: ['less']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['clean', 'less', 'concat:build', 'copy']);
    //grunt.registerTask('serve', ['watch']);

};