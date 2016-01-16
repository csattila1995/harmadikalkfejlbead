import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newError(formData) {
            console.log(formData);
            var datum = new Date().toLocaleDateString();
            var error = this.store.createRecord('error', Object.assign({
                date: datum,
                location: 'Webfejlesztés 2.',
                description: 'Déli épület 0-001',
            }, formData));
            
            error.save();
            this.transitionToRoute('errors.list');
        }
    }
});
