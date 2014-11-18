angular.module('app')
	.service('peopleMockService', function () {

		var people = [
			{
				_id: 1416168969874,
				'name': 'Michał',
				'surname': 'Szałkowski',
				'quote': 'Do. Or do not. There is no try'
			}
		];

		this.getPeople = function () {
			return people;
		}

		this.save = function (person) {
			person._id = new Date().getTime();
			people.push(person);
		}
	})
;