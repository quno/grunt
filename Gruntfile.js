module.exports = function(grunt){
  grunt.initConfig({
    validation: {
      files: ['*.html'],
      options: {
        reset: true,
        doctype: 'HTML5',
        charset: 'utf-8',
        stoponerror: false
      }
    },
    compass: {
      dist: {
        options: {
          config: 'config_dev.rb'
        }
      }
    },
    jshint: {
      files: ['js/*.js'],
      options: {
        jshintrc: 'jshintrc.json',
        force: true
      }
    },
    typescript: {
      base: {
        src: ['src/*.ts'],
        dest: 'compiled',
        options: {
          target: 'es5',
          comments: true,
          sourceMap: true
        }
      }
    },
    watch: {
      html: {
        files: ['*.html'],
        tasks: ['validation'],
        options: ['changed','added','deleted'] // = all
      },
      css: {
        files: ['scss/*.scss'],
        tasks: ['compass'],
        options: ['changed','added','deleted'] // = all
      },
      javascript: {
        files: ['js/*.js'],
        tasks: ['jshint'],
        options: ['changed','added','deleted'] // = all
      },
      typescript: {
        files: ['src/*.ts'],
        tasks: ['typescript']
      }
    }
  });
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('start',['watch']);
  grunt.registerTask('ts',['typescript']);
  grunt.registerTask('default',['validation','compass','jshint']);
};
