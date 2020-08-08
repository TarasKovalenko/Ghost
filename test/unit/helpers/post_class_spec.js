const should = require('should');

// Stuff we are testing
const helpers = require('../../../core/frontend/helpers');

describe('{{post_class}} helper', function () {
    it('can render class string', function () {
        const rendered = helpers.post_class.call({});

        should.exist(rendered);
        rendered.string.should.equal('post no-image');
    });

    it('can render class string without no-image class', function () {
        const rendered = helpers.post_class.call({feature_image: 'blah'});

        should.exist(rendered);
        rendered.string.should.equal('post');
    });

    it('can render featured class', function () {
        const post = {featured: true};
        const rendered = helpers.post_class.call(post);

        should.exist(rendered);
        rendered.string.should.equal('post featured no-image');
    });

    it('can render featured class without no-image class', function () {
        const post = {featured: true, feature_image: 'asdass'};
        const rendered = helpers.post_class.call(post);

        should.exist(rendered);
        rendered.string.should.equal('post featured');
    });

    it('can render page class', function () {
        const post = {page: true};
        const rendered = helpers.post_class.call(post);

        should.exist(rendered);
        rendered.string.should.equal('post no-image page');
    });

    it('can render page class without no-image class', function () {
        const post = {page: true, feature_image: 'asdasdas'};
        const rendered = helpers.post_class.call(post);

        should.exist(rendered);
        rendered.string.should.equal('post page');
    });
});
