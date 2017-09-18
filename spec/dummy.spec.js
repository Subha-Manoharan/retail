describe('dummy', () => {
  const doSomethingAsync = () => Promise.resolve('foo');
  it('1 should equal 1', () => expect(1).to.equal(1));
  it('should work with promises', () => doSomethingAsync().should.eventually.equal("foo"));
});
