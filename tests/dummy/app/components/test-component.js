/*eslint new-cap:0*/
import Ember from 'ember';
import layout from '../templates/components/test-component';
import KAM from 'ember-cli-keyboard-actions/mixins/keyboard-actions';

export default Ember.Component.extend(KAM, {
  layout: layout,
  keyDownAny: Ember.A([]),
  keyDownRange: Ember.A([]),
  keyDownPretty: Ember.A([]),
  keyDownSingle: Ember.A([]),

  updateKeyList: function (keyPressed) {
    this.keyDownAny.pushObject(keyPressed);
  },

  keyChordActions: {
    'ctrl': {
      'a': function () {
        console.log('Ctrl + A pressed');
      }
    },
    'alt': {
      'a': function () {
        console.log('Alt + A pressed');
      }
    },
    'shift': {
      'a': function () {
        console.log('Shift + A pressed');
      }
    },
    'ctrl.alt': {
      'a': function () {
        console.log('Ctrl, Alt + A pressed');
      }
    },
    'ctrl.alt.shift': {
      'a': function () {
        console.log('Ctrl, Shift, Alt + A pressed');
      }
    }
  },

  keyDownActions: {
    'any': 'updateKeyList',
    'alpha': function (code) {
      this.keyDownRange.pushObject('keyDown:' + code);
    },
    'space': function (code) {
      this.keyDownPretty.pushObject('keyDown:' + code);
    },
    'key39': function (code) {
      this.keyDownSingle.pushObject('keyDown:' + code);
    }
  },
  keyUpActions: {
    'any': 'updateKeyList',
    'alpha': function (code) {
      this.keyDownRange.pushObject('keyUp:' + code);
    },
    'space': function (code) {
      this.keyDownPretty.pushObject('keyUp:' + code);
    },
    'key39': function (code) {
      this.keyDownSingle.pushObject('keyUp:' + code);
    }
  },
  keyPressActions: {
    'any': 'updateKeyList',
    'alpha': function (code) {
      this.keyDownRange.pushObject('keyPress::' + code);
    },
    'space': function (code) {
      this.keyDownPretty.pushObject('keyPress::' + code);
    },
    'key39': function (code) {
      this.keyDownSingle.pushObject('keyPress::' + code);
    }
  }
});
