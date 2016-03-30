describe('Favorite Food Filter', function () {
	var $controller, favoriteFood, removeAllVowels;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		favoriteFood = $filter('favoriteFood');
    removeAllVowels = $filter('removeAllVowels');
	}));

  it('favoriteFood filters for food argument', function(){
    var items = [{name: 'mendel', favoriteFood: 'pizza'}, {name: 'Joe', favoriteFood: 'kale'}];
    var returnVal = favoriteFood(items, 'pizza')
    expect(returnVal).toEqual([items[0]]);
  });

  it('removeAllVowels removes all vowels from string', function(){
    expect(removeAllVowels('I am so cool')).toEqual(' m s cl');
  });
	
});
