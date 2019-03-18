module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/**/*.js',
                dest: 'build/main.min.js'
            }
        },
        sass: {
            target: {
                src: '**/*.scss',
                dest: '**/*.css'
            }
        },
        cssmin: {
            target: {
                src: 'src/**/*.css',
                dest: 'build/style.min.css'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');    


    grunt.registerTask('default', ['uglify', 'sass', 'cssmin']);

}