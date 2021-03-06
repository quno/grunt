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
          config: 'config/config_dev.rb'
        }
      }
    },
    jshint: {
      files: ['js/*.js'],
      options: {
        jshintrc: 'config/jshintrc.json',
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
    connect: {
      site: {
        options: {
          protocol: 'http',
          hostname: 'localhost',
          port: 8888
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
      },
      options: {
        livereload: true
      }
    }
  });
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('start',['watch']);
  grunt.registerTask('ts',['typescript']);
  grunt.registerTask('default',['validation','compass','jshint']);
};
