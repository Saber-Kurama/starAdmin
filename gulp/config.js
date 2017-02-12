/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/4/7.
 */

'use strict';

module.exports = {

  'copy': {
    css:{
      src: ['bower_components/bootstrap/dist/css/bootstrap.min.css',
            'bower_components/font-awesome/css/font-awesome.min.css',
      'src/css/*'],
      dest: 'dist/css',
    },
    js:{
      src:['src/lib/hotcss.js'],
      dest:'dist/js'
    },
    fonts:{
      src: ["src/fonts/*",
      'bower_components/bootstrap/dist/fonts/*',
      'bower_components/font-awesome/fonts/*'
      ],
      dest: 'dist/fonts'
    },
    images:{
      src: 'src/images/**/*',
      dest: 'dist/images'
    },
    icon:{
      src: 'src/icon/**/*',
      dest: 'dist/images'
    },
    json:{
      src: 'src/json/*',
      dest: 'dist/json'
    }
  },
  src: 'src',
  // dist 的目录
  'dist': {
    root: 'dist'
  },
  'images': {
    'src': ['src/images/**/*'],
    'dest': 'dist/images'
  },
  'vendors': {
    'dist':'vendors.js',
    'src': [
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/bootstrap/dist/js/bootstrap.min.js',
      'bower_components/bootstrap-treeview/dist/bootstrap-treeview.min.js'
    ],
    'dest': 'dist/js'
  },
  'scripts': {
    src: ['src/js/*.js'],
    dest: 'dist/js'
  },
  'styles':{
    'watch':['src/less/*.less','src/less/*/*.less'],
    'src': ['src/less/index.less'],
    'dest': 'dist/css'
  },
  'views': {
    src: ['src/*.html','src/html/**/*.html'],
    dest:'dist'
  },
  lint: {
    js: {
      dest: 'src/js/'
    }
  },
  'rev':{
    vendor: 'rev/vendor',
    js: 'rev/js',
    css: 'rev/css',
    revPath: 'rev/**/*.json',
    htmlsrc: ['dist/index.html','dist/**/*.html']
  },

  server: {
    port: 9300
  }
}