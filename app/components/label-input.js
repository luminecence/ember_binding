import Ember from 'ember';

export default Ember.Component.extend({
    init() {
    this._super(...arguments);
    let modele = this.get("modele");
    let mode = this.get('mode');
    debugger;
    Ember.defineProperty(this, "value", Ember.computed("model." + modele, function() {
            debugger;
            return this.get("model." + modele);
        }));
  },
});
