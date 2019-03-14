module.exports = function(grunt) {
  var compass = require('compass-importer');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // copy bootstrap from node_module directory to sass
    copy: {
      main: {
        files: [
          // includes files within path and its sub-directories
          {expand: true, cwd: 'node_modules/bootstrap-sass/', src: ['assets/**'], dest: './'},
          {
            src: 'node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss',
            dest: 'assets/stylesheets/_custom-variables.scss',
            filter: function(filepath) {
              var dest = 'assets/stylesheets/_custom-variables.scss';
              return !(grunt.file.exists(dest));
            },
          },
          {
            src: 'styles.scss',
            dest: 'assets/stylesheets/styles.scss',
            filter: function(filepath) {
              //grunt.file.delete(filepath);
              var dest = 'assets/stylesheets/styles.scss';
              return !(grunt.file.exists(dest));
            },
          }
        ],
        // options: {
        //   processContent: function (content, srcpath) {
        //     if(srcpath == 'node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss'){
        //       // unset !default and comment all line
        //       return content.replace(/ !default;/g, ';').replace(/(^\$)/gm, '// \$');
        //     }
        //     else {
        //       return content;
        //     }
        //   },
        // },
      },
    },
    clean: {
      init : ['styles.scss']
    },
    watch: {
      sass: {
        files: ['assets/stylesheets/**/*.{scss,sass}'],
        tasks: ['sass:dist']
      }
    },
    sass: {
      options: {
        importer: compass,
        sourceMap: true,
        outputStyle: 'compressed',
        // bootstrap-sass requires minimum Sass number precision of 8 (default is 5).
        precision: 8,
        // tell Sass to look in the Bootstrap stylesheets directory when compiling
        includePaths: ['assets/stylesheets']
      },
      dist: {
        files: {
          'stylesheets/styles.css': 'assets/stylesheets/styles.scss'
        }
      }
    },
    // for drupal you need link_css module becouse browserSync not suport @import css files
    browserSync: {
      dev: {
        bsFiles: {
          src : 'stylesheets/styles.css'
        },
        options: {
          server: {
            baseDir: "./"
          },
          watchTask: true,
          // if using other server set proxy and comment server options
          //proxy: "localhost.dd:8083"
        }
      }
    }
  });
  grunt.registerTask('default', ['sass:dist', 'browserSync', 'watch']);
  grunt.registerTask('create', ['copy', 'clean:init']);
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
};
