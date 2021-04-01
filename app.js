console.log('')
console.log('-------------------------------')
console.log('  Скрипт Tabirat Игровой запущен.')
console.log('  Разработчик: Андрей Поляков')
console.log('  vk.com/foresto_a')

console.log('-------------------------------')
console.log('')

// ВСЕ НАСТРОЙКИ В ФАЙЛЕ /database/settings.json! 

const { VK } = require('vk-io');
const vk = new VK();
const commands = [];
const request = require('prequest');

const cars = [
	{
		name: 'Самокат',
		cost: 500,
		id: 1
	},
	{
		name: 'Велосипед',
		cost: 2500,
		id: 2
	},
	{
		name: 'Гироскутер',
		cost: 5000,
		id: 3
	},
	{
		name: 'Сегвей',
		cost: 7500,
		id: 4
	},
	{
		name: 'Мопед',
		cost: 25000,
		id: 5
	},
	{
		name: 'Мотоцикл',
		cost: 50000,
		id: 6
	},
	{
		name: 'ВАЗ 2109',
		cost: 75000,
		id: 7
	},
	{
		name: 'Квадроцикл',
		cost: 80000,
		id: 8
	},
	{
		name: 'Багги',
		cost: 135000,
		id: 9
	},
	{
		name: 'Вездеход',
		cost: 200000,
		id: 10
	},
	{
		name: 'Лада Xray',
		cost: 350000,
		id: 11
	},
	{
		name: 'Audi Q7',
		cost: 750000,
		id: 12
	},
	{
		name: 'BMW X6',
		cost: 1000000,
		id: 13
	},
	{
		name: 'Toyota FT-HS',
		cost: 1750000,
		id: 14
	},
	{
		name: 'BMW Z4 M',
		cost: 2500000,
		id: 15
	},
	{
		name: 'Subaru WRX STI',
		cost: 2750000,
		id: 16
	},
	{
		name: 'Lamborghini Veneno',
		cost: 3000000,
		id: 17
	},
	{
		name: 'Tesla Roadster',
		cost: 4500000,
		id: 18
	},
	{
		name: 'Yamaha YZF R6',
		cost: 5000000,
		id: 19
	},
	{
		name: 'Bugatti Chiron',
		cost: 6500000,
		id: 20
	},
	{
		name: 'Thrust SSC',
		cost: 35000000,
		id: 21
	},
	{
		name: 'Ferrari LaFerrari',
		cost: 39000000,
		id: 22
	},
	{
		name: 'Koenigsegg Regear',
		cost: 50000000,
		id: 23
	},
	{
		name: 'Tesla Semi',
		cost: 75000000,
		id: 24
	},
	{
		name: 'Venom GT',
		cost: 125000000,
		id: 25
	},
	{
		name: 'Rolls-Royce',
		cost: 200000000,
		id: 26
	}
];

const udilishe = [
	{
		name: 'Удочка из камыша',
		cost: 10000,
		id: 1
	},
	{
		name: 'Удока из дуба',
		cost: 100000,
		id: 2
	},
	{
		name: 'Sport-Guns',
		cost: 1000000,
		id: 3
	},
	{
		name: 'Small Carp',
		cost: 100000000,
		id: 4
	}
];

const fish = [
	{
		name: 'Карась',
		cost: 50,
		id: 1
	},
	{
		name: 'Карп',
		cost: 100,
		id: 2
	},
	{
		name: 'Сазан',
		cost: 180,
		id: 3
	},
	{
		name: 'Ракушка',
		cost: 250,
		id: 4
	},
	{
		name: 'Окунь',
		cost: 400,
		id: 5
	},
	{
		name: 'Лещь',
		cost: 750,
		id: 6
	},
	{
		name: 'Краснопёрка',
		cost: 1000,
		id: 7
	},
	{
		name: 'Аргус ',
		cost: 1400,
		id: 8
	},
	{
		name: 'Белуга',
		cost: 1800,
		id: 9
	},
	{
		name: 'Вобла',
		cost: 2400,
		id: 10
	},
	{
		name: 'Горбуша',
		cost: 3400,
		id: 11
	},
	{
		name: 'Джакас',
		cost: 4000,
		id: 12
	},
	{
		name: 'Ершоватка',
		cost: 4400,
		id: 13
	},
	{
		name: 'Ёрш',
		cost: 4900,
		id: 14
	},
	{
		name: 'Живоглот',
		cost: 5500,
		id: 15
	},
	{
		name: 'Золотая рыбка',
		cost: 6900,
		id: 16
	},
	{
		name: 'Иглобрюх',
		cost: 7500,
		id: 17
	},
	{
		name: 'Йодотрофеус',
		cost: 8100,
		id: 18 
	},
	{
		name: 'Кобия',
		cost: 8400,
		id: 19
	},
	{
		name: 'Лептобарбус',
		cost: 8900,
		id: 20
	},
	{
		name: 'Мерланг',
		cost: 9700,
		id: 21
	},
	{
		name: 'Неон',
		cost: 11200,
		id: 22
	},
	{
		name: 'Остронос',
		cost: 12700,
		id: 23
	},
	{
		name: 'Орнатус',
		cost: 14500,
		id: 24
	},
	{
		name: 'Пеламида',
		cost: 18100,
		id: 25
	},
	{
		name: 'Пецилия',
		cost: 21200,
		id: 26
	},
	{
		name: 'Пермит',
		cost: 22100,
		id: 27
	},
	{
		name: 'Росбора',
		cost: 23200,
		id: 28
	},
	{
		name: 'Ранчу',
		cost: 24100,
		id: 29
	},
	{
		name: 'Рябчик',
		cost: 25300,
		id: 30
	},
	{
		name: 'Севрюга',
		cost: 26100,
		id: 31
	},
	{
		name: 'Сибасс',
		cost: 27400,
		id: 32
	},
	{
		name: 'Склеропаг',
		cost: 28000,
		id: 33
	},
	{
		name: 'Тигровая рыба',
		cost: 30100,
		id: 34
	},
	{
		name: 'Трахинот',
		cost: 31800,
		id: 35
	},
	{
		name: 'Тюрбо',
		cost: 32400,
		id: 36
	},
	{
		name: 'Уролоф',
		cost: 33100,
		id: 37
	},
	{
		name: 'Уёк',
		cost: 34500,
		id: 38
	},
	{
		name: 'Фахака',
		cost: 37200,
		id: 39
	},
	{
		name: 'Форель',
		cost: 38900,
		id: 40
	},
	{
		name: 'Хилодус',
		cost: 41800,
		id: 41
	},
	{
		name: 'Хромис',
		cost: 50000,
		id: 42
	},
	{
		name: 'Цихлида',
		cost: 80000,
		id: 43
	},
	{
		name: 'Юлидохром',
		cost: 150000,
		id: 44
	}
];

const yachts = [
	{
		name: 'Ванна',
		cost: 10000,
		id: 1
	},
	{
		name: 'Nauticat 331',
		cost: 10000000,
		id: 2
	},
	{
		name: 'Nordhavn 56 MS',
		cost: 15000000,
		id: 3
	},
	{
		name: 'Princess 60',
		cost: 25000000,
		id: 4
	},
	{
		name: 'Azimut 70',
		cost: 35000000,
		id: 5
	},
	{
		name: 'Dominator 40M',
		cost: 50000000,
		id: 6
	},
	{
		name: 'Moonen 124',
		cost: 60000000,
		id: 7
	},
	{
		name: 'Wider 150',
		cost: 65000000,
		id: 8
	},
	{
		name: 'Palmer Johnson 42M SuperSport',
		cost: 80000000,
		id: 9
	},
	{
		name: 'Wider 165',
		cost: 85000000,
		id: 10
	},
	{
		name: 'Eclipse',
		cost: 150000000,
		id: 11
	},
	{
		name: 'Dubai',
		cost: 300000000,
		id: 12
	},
	{
		name: 'Streets of Monaco',
		cost: 750000000,
		id: 13
	}
];

const airplanes = [
	{
		name: 'Параплан',
		cost: 100000,
		id: 1
	},
	{
		name: 'АН-2',
		cost: 350000,
		id: 2
	},
	{
		name: 'Cessna-172E',
		cost: 700000,
		id: 3
	},
	{
		name: 'Supermarine Spitfire',
		cost: 1000000,
		id: 4
	},
	{
		name: 'BRM NG-5',
		cost: 1400000,
		id: 5
	},
	{
		name: 'Cessna T210',
		cost: 2600000,
		id: 6
	},
	{
		name: 'Beechcraft 1900D',
		cost: 5500000,
		id: 7
	},
	{
		name: 'Cessna 550',
		cost: 8000000,
		id: 8
	},
	{
		name: 'Hawker 4000',
		cost: 22400000,
		id: 9
	},
	{
		name: 'Learjet 31',
		cost: 45000000,
		id: 10
	},
	{
		name: 'Airbus A318',
		cost: 85000000,
		id: 11
	},
	{
		name: 'F-35A',
		cost: 160000000,
		id: 12
	},
	{
		name: 'Boeing 747-430 Custom',
		cost: 225000000,
		id: 13
	},
	{
		name: 'C-17A Globemaster III',
		cost: 350000000,
		id: 14
	},
	{
		name: 'F-22 Raptor',
		cost: 400000000,
		id: 15
	},
	{
		name: 'Airbus 380 Custom',
		cost: 600000000,
		id: 16
	},
	{
		name: 'B-2 Spirit Stealth Bomber',
		cost: 1359000000,
		id: 17
	}
];

const helicopters = [
	{
		name: 'Шарик с пропеллером',
		cost: 2,
		id: 1
	},
	{
		name: 'RotorWay Exec 162F',
		cost: 300000,
		id: 2
	},
	{
		name: 'Robinson R44',
		cost: 450000,
		id: 3
	},
	{
		name: 'Hiller UH-12C',
		cost: 1300000,
		id: 4
	},
	{
		name: 'AW119 Koala',
		cost: 2500000,
		id: 5
	},
	{
		name: 'MBB BK 117',
		cost: 4000000,
		id: 6
	},
	{
		name: 'Eurocopter EC130',
		cost: 7500000,
		id: 7
	},
	{
		name: 'Leonardo AW109 Power',
		cost: 10000000,
		id: 8
	},
	{
		name: 'Sikorsky S-76',
		cost: 15000000,
		id: 9
	},
	{
		name: 'Bell 429WLG',
		cost: 19000000,
		id: 10
	},
	{
		name: 'NHI NH90',
		cost: 35000000,
		id: 11
	},
	{
		name: 'Kazan Mi-35M',
		cost: 60000000,
		id: 12
	},
	{
		name: 'Bell V-22 Osprey',
		cost: 135000000,
		id: 13
	}
];

const homes = [
	{
		name: 'Коробка из-под холодильника',
		cost: 250,
		id: 1
	},
	{
		name: 'Подвал',
		cost: 3000,
		id: 2
	},
	{
		name: 'Палатка',
		cost: 3500,
		id: 3
	},
	{
		name: 'Домик на дереве',
		cost: 5000,
		id: 4
	},
	{
		name: 'Полуразрушенный дом',
		cost: 10000,
		id: 5
	},
	{
		name: 'Дом в лесу',
		cost: 25000,
		id: 6
	},
	{
		name: 'Деревянный дом',
		cost: 37500,
		id: 7
	},
	{
		name: 'Дача',
		cost: 125000,
		id: 8
	},
	{
		name: 'Кирпичный дом',
		cost: 80000,
		id: 9
	},
	{
		name: 'Коттедж',
		cost: 450000,
		id: 10
	},
	{
		name: 'Особняк',
		cost: 1250000,
		id: 11
	},
	{
		name: 'Дом на Рублёвке',
		cost: 5000000,
		id: 12
	},
	{
		name: 'Личный небоскрёб',
		cost: 7000000,
		id: 13
	},
	{
		name: 'Остров с особняком',
		cost: 12500000,
		id: 14
	},
	{
		name: 'Белый дом',
		cost: 20000000,
		id: 15
	}
];

const apartments = [
	{
		name: 'Чердак',
		cost: 15000,
		id: 1
	},
	{
		name: 'Квартира в общежитии',
		cost: 55000,
		id: 2
	},
	{
		name: 'Однокомнатная квартира',
		cost: 175000,
		id: 3
	},
	{
		name: 'Двухкомнатная квартира',
		cost: 260000,
		id: 4
	},
	{
		name: 'Четырехкомнатная квартира',
		cost: 500000,
		id: 5
	},
	{
		name: 'Квартира в центре Москвы',
		cost: 1600000,
		id: 6
	},
	{
		name: 'Двухуровневая квартира',
		cost: 4000000,
		id: 7
	},
	{
		name: 'Квартира с Евроремонтом',
		cost: 6000000,
		id: 8
	}
];

const phones = [
	{
		name: 'Nokia 108',
		cost: 250,
		id: 1
	},
	{
		name: 'Nokia 3310 (2017)',
		cost: 500,
		id: 2
	},
	{
		name: 'ASUS ZenFone 4',
		cost: 2000,
		id: 3
	},
	{
		name: 'BQ Aquaris X',
		cost: 10000,
		id: 4
	},
	{
		name: 'Sony Xperia XA',
		cost: 15000,
		id: 5
	},
	{
		name: 'Samsung Galaxy S8',
		cost: 30000,
		id: 6
	},
	{
		name: 'Xiaomi Mi Mix',
		cost: 50000,
		id: 7
	},
	{
		name: 'Torex FS1',
		cost: 75000,
		id: 8
	},
	{
		name: 'iPhone X',
		cost: 100000,
		id: 9
	},
	{
		name: 'Мегафон С1',
		cost: 250000,
		id: 10
	}
];

const pets = [
	{
		name: 'Улитка',
		cost: 1000,
		vp1: 100,
		vp2: 1200,
		id: 1
	},
	{
		name: 'Лягушка',
		cost: 25000,
		vp1: 2500,
		vp2: 30000,
		id: 2
	},
	{
		name: 'Заяц',
		cost: 500000,
		vp1: 400000,
		vp2: 600000,
		id: 3
	},
	{
		name: 'Свинья',
		cost: 300000000,
		vp1: 1000000,
		vp2: 5000000,
		id: 4
	},
	{
		name: 'Лиса',
		cost: 1250000000,
		vp1: 10000000,
		vp2: 30000000,
		id: 5
	},
	{
		name: 'Собака',
		cost: 5000000000,
		vp1: 1000000000,
		vp2: 3000000000,
		id: 6
	},
	{
		name: 'Панда',
		cost: 30000000000,
		vp1: 20000000000,
		vp2: 31000000000,
		id: 7
	},
	{
		name: 'Горилла',
		cost: 180000000000,
		vp1: 100000000000,
		vp2: 150000000000,
		id: 8
	}
];


const petsupd = [
	{
		cost: 2000,
		id: 1
	},
	{
		cost: 50000,
		id: 2
	},
	{
		cost: 1000000,
		id: 3
	},
	{
		cost: 600000000,
		id: 4
	},
	{
		cost: 2500000000,
		id: 5
	},
	{
		cost: 10000000000,
		id: 6
	},
	{
		cost: 60000000000,
		id: 7
	},
	{
		cost: 360000000000,
		id: 8
	}
];

const farms = [
	{
		name: '6U Nvidia',
		cost: 20500000,
		id: 1
	},
	{
		name: 'AntminerS9',
		cost: 100000000,
		id: 2
	},
	{
		name: 'FM2018-BT200',
		cost: 900000000,
		id: 3
	},
	{
		name: 'Gеnеsis Mining',
		cost: 9000000000,
		id: 4
	},
	{
		name: 'GigаWаtt',
		cost: 90000000000,
		id: 5
	}
];

const businesses = [
	{
		name: 'Шаурмичная',
		cost: 50000,
		earn: 400,
		id: 1,
		icon: '🥖'
	},
	{
		name: 'Ларёк',
		cost: 10000,
		earn: 700,
		id: 2,
		icon: '🏪'
	},
	{
		name: 'Ресторан',
		cost: 300000,
		earn: 2500,
		id: 3,
		icon: '🍷'
	},
	{
		name: 'Магазин',
		cost: 500000,
		earn: 3800,
		id: 4,
		icon: '🏫'
	},
	{
		name: 'Завод',
		cost: 1500000,
		earn: 8000,
		id: 5,
		icon: '🏭'
	},
	{
		name: 'Шахта',
		cost: 25000000,
		earn: 70000,
		id: 6,
		icon: '⛏'
	},
	{
		name: 'Офис',
		cost: 80000000,
		earn: 220000,
		id: 7,
		icon: '🏢'
	},
	{
		name: 'Разработка игр',
		cost: 150000000,
		earn: 300000,
		id: 8,
		icon: '🕹'
	},
	{
		name: 'Нефтевышка',
		cost: 500000000,
		earn: 700000,
		id: 9,
		icon: '🏜'
	},
	{
		name: 'Атомная электростанция',
		cost: 800000000,
		earn: 1000000,
		id: 10,
		icon: '💡'
	},
	{
		name: 'Космическое агентство',
		cost: 50000000000,
		earn: 50000000,
		id: 11,
		icon: '🗺'
	},
	{
		name: 'Империя Табират',
		cost: 200000000000,
		earn: 1000000000,
		id: 12,
		icon: '💥'
	}
];

const leverrefer = [
	{
		proc: 0,
		id: 1
	},
	{
		proc: 5,
		id: 2
	},
	{
		proc: 10,
		id: 3
	},
	{
		proc: 15,
		id: 4
	},
	{
		proc: 20,
		id: 5
	},
	{
		proc: 25,
		id: 6
	},
	{
		proc: 30,
		id: 7
	},
	{
		proc: 40,
		id: 8
	},
	{
		proc: 45,
		id: 9
	},
	{
		proc: 50,
		id: 10
	}
	
];


const works = [
	{
		name: 'Дворник',
		requiredLevel: 1,
		min: 10000,
		max: 13000,
		id: 1
	},
	{
		name: 'Сантехник',
		requiredLevel: 3,
		min: 20000,
		max: 23000,
		id: 2
	},
	{
		name: 'Электрик',
		requiredLevel: 5,
		min: 24000,
		max: 27000,
		id: 3
	},
	{
		name: 'Слесарь',
		requiredLevel: 8,
		min: 27001,
		max: 35000,
		id: 4
	},
	{
		name: 'Юрист',
		requiredLevel: 10,
		min: 40000,
		max: 50000,
		id: 5
	},
	{
		name: 'Бухгалтер',
		requiredLevel: 14,
		min: 52000,
		max: 56000,
		id: 6
	},
	{
		name: 'Бармен',
		requiredLevel: 22,
		min: 58000,
		max: 65000,
		id: 7
	},
	{
		name: 'Администратор',
		requiredLevel: 25,
		min: 70000,
		max: 80000,
		id: 8
	},
	{
		name: 'Программист',
		requiredLevel: 49,
		min: 90000,
		max: 100000,
		id: 9
	},
	{
		name: 'Админ Табират',
		requiredLevel: 10000,
		min: 1000000,
		max: 3000000,
		id: 10
	},
	{
		name: 'Мэр LS',
		requiredLevel: 10000,
		min: 100000,
		max: 500000,
		id: 11
	}
];

const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'ДОХЕРА');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	}
}

let promo = "0";

const rotateText = {
	q: 'q',
	w: 'ʍ',
	e: 'ǝ',
	r: 'ɹ',
	t: 'ʇ',
	y: 'ʎ',
	u: 'u',
	i: 'ᴉ',
	o: 'o',
	p: 'p',
	a: 'ɐ',
	s: 's',
	d: 'd',
	f: 'ɟ',
	g: 'ƃ',
	h: 'ɥ',
	j: 'ɾ',
	k: 'ʞ',
	l: 'l',
	z: 'z',
	x: 'x',
	c: 'ɔ',
	v: 'ʌ',
	b: 'b',
	n: 'n',
	m: 'ɯ',
	" ": ' ',
	й: 'ņ',
	ц: 'ǹ',
	у: 'ʎ',
	к: 'ʞ',
	е: 'ǝ',
	н: 'н',
	г: 'ɹ',
	ш: 'm',
	щ: 'm',
	з: 'ε',
	х: 'х',
	ъ: 'q',
	ф: 'ф',
	ы: 'ıq',
	в: 'ʚ',
	а: 'ɐ',
	п: 'u',
	р: 'd',
	о: 'о',
	л: 'v',
	д: 'ɓ',
	ж: 'ж',
	э: 'є',
	я: 'ʁ',
	ч: 'һ',
	с: 'ɔ',
	м: 'w',
	и: 'и',
	т: 'ɯ',
	ь: 'q',
	б: 'ƍ',
	ю: 'oı'
}

let btc = 6000;

let smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`]);
let smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`]);

let users = require('./database/users.json');
let ip_biz = require('./database/ip.json');
let config = require('./database/settings.json');
let buttons = [];

setTimeout(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 5);

setInterval(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 60000);

setInterval(async () => {
	await saveUsers();
	console.log(' База данных успешно сохранена.');
	console.log('');
}, 30000);

setInterval(async () => {

smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`]);
smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`]);

}, 1);

setInterval(async () => {
	users.filter(x=> x.energy < 15).map(x=> {
		x.energy += 1;
	});
	console.log(`update energy`);
},60000);
setInterval(async () => {
	users.filter(x=> x.misc.farm != 0).map(x=> {
		var frmbtc = 0;
		if(x.misc.farm === 1)
		{
			frmbtc += 2;
		}

		if(x.misc.farm === 2)
		{
			frmbtc += 10;
		}

		if(x.misc.farm === 3)
		{
			frmbtc += 100;
		}
		if(x.misc.farm === 4)
		{
			frmbtc += 3000;
		}
		if(x.misc.farm === 5)
		{
			frmbtc += 25000;
		}
		var frmbtcm = frmbtc * x.farms;
		x.misc.farm_btc += frmbtcm;
	});
}, 3600000);

setInterval(async () => {
	users.filter(x=> x.settings.old == false).map(x=> {
		x.settings.old == true;
	});
}, 604800);

/*setInterval(async () => {
	users.map(user => {
		if(user.business)
		{
			const biz = businesses.find(x=> x.id === user.business);
			if(!biz) return;

			user.biz += biz.earn;
		}
	});
}, 3600000);*/

setInterval(async () => {
	users.filter(x=> x.business > 0).map(x=> {
	x.biz += x.bizlvl*businesses[x.business - 1].earn;
	});
	console.log(`update energy`);
}, 3600000);

function clearTemp()
{
	users.map(user => {
		user.timers.hasWorked = false;
		user.timers.bonus = false;
		user.timers.poxod = false;
		user.timers.poxod2 = false;
		user.timers.kopat = false;
		user.timers.hack = false;
		user.promo = false;
		user.energy = 10;
	});
	console.log('Обнуление');
	}

function clearPromo()
{
	promo = 0;
	users.map(user => {
		user.promo = false;
	});
}

function msgError(messagetext)
{
	return bot(`${messagetext} ${utils.pick([`😯`, `🙂`, `🤑`, `☺`])}`);
}

clearTemp();
clearPromo();

async function saveUsers()
{
	require('fs').writeFileSync('./database/users.json', JSON.stringify(users, null, '\t'));
	return true;
}

async function saveBussines()
{
	require('fs').writeFileSync('./database/ip.json', JSON.stringify(ip_biz, null, '\t'));
	return true;
}

async function saveConfig()
{
	require('fs').writeFileSync('./database/settings.json', JSON.stringify(config, null, '\t'));
	return true;
}

vk.setOptions({ token: config.grouptoken, pollingGroupId: config.groupid });
const { updates, snippets } = vk;

updates.startPolling();
updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;
	if(/\[public176715957\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[public176715957\|(.*)\]/ig, '').trim();

	if(!users.find(x=> x.id === message.senderId))
	{
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();


		users.push({
			id: message.senderId,
			uid: users.length,
			balance: 5000,
			refbalance: 0,
			credit: 0,
			bank: 0,
			btc: 0,
			farm_btc: 0,
			farms: 0,
			farmslimit: 200,
			energy: 10,
			opit: 0,
			biz: 0,
			zhelezo: 0,
			zoloto: 0,
			almaz: 0,
			bizlvl: 0,
			nicklimit: 16,
			rating: 0,
			regDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
			mention: true,
			ban: false,
				fish: {
				ud: 0,
				lesok: 0,
				naz: 0,
				cost: 0
		},
			timers: {
				hasWorked: false,
				bonus: false,
				poxod: false,
				poxod2: false,
				kopat: false,
				hack: false
			},
			tag: user_info.first_name,
			work: 0,
			business: 0,
			notifications: true,
			exp: 1,
			level: 1,
			referal: null,
			referbal: 0,
			promo: false,
			kpz: {
				cop: "",
				zak: 0,
				cost: 0
			},
			transport: {
				car: 0,
				yacht: 0,
				airplane: 0,
				helicopter: 0
			},
			realty: {
				home: 0,
				apartment: 0
			},
			misc: {
				phone: 0,
				farm: 0,
				pet: 0,
				farm_btc: 0,
			},
			settings: {
				firstmsg: true,
				lic: 0,
				adm: 0,
				trade: true,
				old: false,
				limit: 1000000,
			},
			pet: {
				lvl: 0,
				poterl: false
			},
			marriage: {
				partner: 0,
				requests: []
			}
		});
		console.log(` +1 игрок [Игроков: ${users.length}]`);
		console.log(``);
		saveUsers();
	}

	message.user = users.find(x=> x.id === message.senderId);

	const bot = (text, params) => {
		return message.send(`${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);
	}

	if(message.user.ban) return bot(`ваш аккаунт заблокирован ⛔`);

	const command = commands.find(x=> x[0].test(message.text));

	if(message.user.settings.firstmsg)
	{

bot(`я вижу ты новенький! Рад познакомится, отправь «помощь» что бы узнать мои команды. 📚`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "🔑 Бонус"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "📚 Помощь"
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "🔋 Ферма"
		},
			"color": "primary"
		}
]
		]
			})
		});

		message.user.settings.firstmsg = false;


		saveUsers();
		return;

	}

	if(!command)
	{

		if(!message.isChat) return bot(`такой команды не существует, отправь «помощь» что бы узнать мои команды.`);
		if(message.isChat) return;

	}

	if(message.user.exp >= 24)
	{
		message.user.exp = 1;
		message.user.level += 1;
	}

	message.args = message.text.match(command[0]);
	await command[1](message, bot);

	saveUsers();
	console.log(` Введена команда:${message.user.teg} ${message.text}.`)
	console.log(``)
});

const cmd = {
	hear: (p, f) => {
		commands.push([p, f]);
	}
}

cmd.hear(/^(?:помощь|команды|📚 Помощь|меню|help|commands|cmds|menu|начать|start|@game_tabirat 📚 Помощь)$/i, async (message, bot) => {
	await bot(`мои команды:

🍀 Развлекательные:
🙊 Анекдот
↪ Переверни [фраза]
🔮 Шар [фраза]
📊 Инфа [фраза]
⚖ Выбери [фраза] или [фраза2]

🚀 Игры:
⠀⠀🎲 Кубик [1-6]
⠀⠀🎰 Казино [сумма]
⠀⠀📈 Трейд [вверх/вниз] [сумма]
⠀⠀🥛 Стаканчик [1-3] [сумма]
⠀⠀🔦 Сейф [случайные 2 цифры] 
⠀⠀🍂 Копать
⠀⠀🚕 Таксовать
  🐠 Рыбачить

👔 Работа - список работ
⠀🔨 Работать
⠀❌ Уволиться
 

💼 Бизнес:
⠀⠀📈 Бизнес - статистика
⠀⠀💵 Бизнес снять
⠀⠀✅ Бизнес улучшить

💼 Свое дело (ИП): - раздел в разработке
  📊 ИП Статистика - Статистика организации
  👫 ИП Рабочие - Список рабочих и текущий доход с них
  💲 ИП Зарплата - Установить % зарплаты (дс списываются с вашего счета)
  📒 ИП Открыть - Открыть свое дело - 10.000.000.000.000$
  ➖ ИП Продать [ид] [цена] - Продать свое дело игроку с указанным ид
  💵 ИП Снять - Снять деньги со счета ИП
  
🌽 Питомцы:
⠀⠀🐒 Питомец - информация
⠀⠀🐪 Питомец поход
⠀⠀🌟 Питомец улучшить


🔥 Полезное:
📠 Реши [пример]
📊 Курс

💡 Разное:
📒 Профиль
💲 Баланс
💰 Банк [сумма/снять сумма]
👑 Рейтинг - ваш рейтинг
✒ Ник [ник/вкл/выкл]
🛒 Магазин
➖ Продать [предмет]
🔋 Ферма - биткоин ферма
🤝 Передать [id] [сумма]
🏆 Топ
💎 Бонус - ежедневный бонус
👪 Брак [id] - сделать предложение
⠀ ⠀Браки - список предложений
💔 Развод
⌚ Дата [id] - дата регистрации игрока
🎁 Донат
👫 Реферал - деньги за друзей

🆘 Репорт [фраза] - ошибки или пожелания`, );
{
			keyboard:JSON.stringify(
		{
			"one_time": false,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "🔑 Бонус"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "📚 Помощь"
		},
			"color": "primary"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "🔋 Ферма"
		},
			"color": "primary"
		}
]
		]
			})
		};
});

cmd.hear(/^(?:помощь)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].toLowerCase();

	if(message.args[1] === 'переверни')
	{
		return message.send(`Команда "Переверни" пишет ваш текст вверх ногами (Поддерживаются цифры, буквы латинского и кириллического алфавита, а также некоторые символы)`);
	}

	if(message.args[1] === 'шар')
	{
		return message.send(`Команда "Шар" используя магию рандома выводит случайное сообщение.`);
	}

	if(message.args[1] === 'инфа')
	{
		return message.send(`Команда "Инфа" случайным образом присылает шанс чего-либо. Также можно использовать команды "Шанс" или "Вероятность"`);
	}

	if(message.args[1] === 'выбери')
	{
		return message.send(`Команда "Выбери" случайным образом выбирает один из двух предложенных вариантов.`);
	}

	if(message.args[1] === 'казино')
	{
		return message.send(`Команда "Казино" случайным образом умножает вашу ставку (Могут выпасть множители х0, х0.25, х0.5, x0.75, х1, х2, х5, х50). Чтобы поставить всю сумму введите "Казино все" или "Казино вабанк"`);
	}

	if(message.args[1] === 'кубик')
	{
		return message.send(`Команда "Кубик" сравнивает ваше число со случайным от 1 до 6, если вы угадали, то получаете вознаграждение. Также можно использовать "Куб"`);
	}

	if(message.args[1] === 'трейд')
	{
		return message.send(`Команда "Трейд" - симулятор бинарных опционов. Введите "Трейд вверх (сумма)" если думаете, что курс валюты будет увеличиваться, или "Трейд вниз (сумма)" если будет уменьшаться.`);
	}

	if(message.args[1] === 'стаканчик')
	{
		return message.send(`С помощью команды "Стаканчик" вы можете сыграть в аналог игры "Напёрстки". Чтобы играть введите "Стаканчик [1-3] [сумма]".`);
	}

	if(message.args[1] === 'работа')
	{
		return message.send(`С помощью команды "Работа" вы можете устроиться на одну из работ. Чтобы отрыть новые профессии, вам нужно отработать определённое кол-во игровых недель (Команда "Работать"). Для увольнения с работы введите "Уволиться".`);
	}
	
	if(message.args[1] === 'рыбачить')
	{
		return message.send(`С помощью команды "Рыбачить" вы можете поймать одну из 44 видов рыб. Каждая рыба цениться по своему и чем круче у вас удочка тем круче и дороже рыба.`);
	}

	if(message.args[1] === 'бизнес')
	{
		return message.send(`Владея бизнесом, вы можете зарабатывать немало денег:
		Бизнесы [номер] - купить бизнес
		Бизнес - ваш бизнес
		Бизнес снять - снять деньги со счёта бизнеса
		Продать бизнес - продажа бизнеса`);
	}

	if(message.args[1] === 'реши')
	{
		return message.send(`Команда "Реши" решает ваш пример (Реши 5 + 5).
		Команда умеет:
		Складывать (+)
		Вычитать (-)
		Умножать (*)
		Делить (/)`);
	}

	if(message.args[1] === 'курс')
	{
		return message.send(`С помощью команды "Курс" можно узнать курс Биткоина на данный момент.`);
	}

	if(message.args[1] === 'профиль')
	{
		return message.send(`Команда "Профиль" выводит вашу игровую статистику.`);
	}

	if(message.args[1] === 'баланс')
	{
		return message.send(`Команда "Баланс" выводит кол-во валюты на вашем аккаунте.`);
	}

	if(message.args[1] === 'банк')
	{
		return message.send(`При вводе команды "Банк" (без параметров) выводится ваша сумма на счёте. Для того чтобы положить на счёт деньги введите "Банк [сумма]" (Максимум 250.000.000.000$). Чтобы забрать деньги из банка введите "Банк снять/взять [сумма]".
		Сумма в банке увеличивается каждый час (больше сумма - больше прибыль).`);
	}

	if(message.args[1] === 'рейтинг')
	{
		return message.send(`Пустая команда "Рейтинг" (без параметров) выводит ваше кол-во рейтинга (также можно узнать в профиле). При указании параметра (любое число) вы купите данное кол-во единиц рейтинга (👑1 = 250.000.000$). Рейтинг влияет на ваше положение в топе.`);
	}

	if(message.args[1] === 'ник')
	{
		return message.send(`С помощью команды "Ник" можно выбрать себе ник длинною до 15 символов. Также, ник можно делать кликабельным/некликабельным в топе "Ник вкл" и "Ник выкл"`);
	}

	if(message.args[1] === 'магазин')
	{
		return message.send(`Команда "Магазин" выводит список категорий товаров, которые доступны для покупки.`);
	}

	if(message.args[1] === 'продать')
	{
		return message.send(`С помощью команды "Продать" вы можете продать любой предмет (Машину, дом, квартиру, телефон, яхту, самолет, вертолет, биткоин, ферму).`);
	}

	if(message.args[1] === 'передать')
	{
		return message.send(`Команда "Передать" переводит указанную вами сумму любому игроку (Передать ${message.user.uid} 1000).`);
	}

	if(message.args[1] === 'топ')
	{
		return message.send(`Команда "Топ" выводит 10 игроков с самым большим рейтингом.`);
	}

	if(message.args[1].includes('брак'))
	{
		return message.send(`Используя команды "Брак", "Браки", "развод", вы можете жениться/выходить замуж/разводиться.
		Брак [id] - сделать предложение
		Браки - список предложений
		Развод - ...`);
	}

	if(message.args[1] === 'дата')
	{
		return message.send(`Команда "Дата" выводит дату регистрации человека в боте. Можно использовать id человека.`);
	}

	if(message.args[1] === 'репорт')
	{
		return message.send(`С помощью команды "Репорт" вы можете отправить создателю бота любое сообщение. Также можно использовать "Реп", "Жалоба", "Rep".`);
	}
});

cmd.hear(/^(?:переверни)\s([^]+)$/i, async (message, bot) => {
	let text = ``;
	message.args[1].split('').map(x=> {
		if(rotateText[x])
		{
			text += rotateText[x];
		}
	});

	return bot(`держи: "${text.split('').reverse().join('')}"`)
});

cmd.hear(/^(?:анекдот)$/i, async (message, bot) => {

	let textanek = utils.pick(['Разговариваают два американца:\n — У этих русских не только душа другая. Они и устроены по-другому.\n — ?\n — Я сам слышал как один сказал другому — Одень ты на х@й шапку, а то уши замерзнут.', 'Бывает, борешься за что-то, борешься, а потом в один прекрасный момент понимаешь: «А пошло оно все на х@й! » И жить становится намного проще.', '"А это точно поможет? ", — недоверчиво спрашивала царевна Несмеяна, поднося к губам какую-то самокрутку.', 'Чтобы хоть как-то привлечь внимание школьников, преподавательница написала на доске « Жесть. Смотреть всем».', 'Если Патриарх Кирилл верит в Бога, то почему он ездит в бронированном Мерседесе под охраной ФСО за счет бюджета, а не надеется на заступничество своего небесного начальника?']);

	return bot(`анекдот: 

	${textanek}`)
});

cmd.hear(/^(?:шар)\s([^]+)$/i, async (message, bot) => {
	const phrase = utils.pick(['перспективы не очень хорошие', 'сейчас нельзя предсказать', 'пока не ясно', 'знаки говорят - "Да"', 'знаки говорят - "Нет"', 'можешь быть уверен в этом', 'мой ответ - "нет"', 'мой ответ - "да"', 'бесспорно', 'мне кажется - "Да"', 'мне кажется - "Нет"']);
	return bot(phrase);
});

cmd.hear(/^(?:инфа|шанс|вероятность)\s([^]+)$/i, async (message, bot) => {
	const phrase = utils.pick(['шанс этого', 'мне кажется около']);
	const percent = utils.random(100);

	return bot(`${phrase} ${percent}%`)
});

cmd.hear(/^(?:выбери)\s([^]+)\s(?:или)\s([^]+)$/i, async (message, bot) => {
	const first = message.args[1];
	const second = message.args[2];

	const phrase = utils.pick([`конечно ${utils.random(1, 2)} вариант`, `мне кажется, что ${utils.random(1, 2)} вариант лучше`]);
	return bot(`${phrase}`);
});

cmd.hear(/^(?:донат)$/i, async (message, bot) => {
	return bot(`Донатить низя пока что`);
});

cmd.hear(/^(?:профиль)$/i, async (message, bot) => {
	let text = ``;
	if(message.user.settings.adm) text += `👮‍♂ Вы администратор ${message.user.settings.adm}-го уровня\n`;
	if(message.user.settings.tabirat) text += `💥 Поздравляем Вы обладатель лицензии NoCopTabirat\n`;
	text += `🔎 ID: ${message.user.uid}\n`;
	text += `💰 Денег: ${utils.sp(message.user.balance)}$\n`;
	text += `💳 В банке: ${utils.sp(message.user.bank)}$\n`;
	if(message.user.credit) text += `👮‍♂ Кредит, остаток долга: ${utils.sp(message.user.credit)}$\n`;
	text += `💽 Биткоинов: ${utils.sp(message.user.btc)}฿\n`;
	text += `👑 Рейтинг: ${utils.sp(message.user.rating)}\n`;
	if(message.user.work) text += `👔 Работа: ${works[message.user.work - 1].name}\n`;
	if(message.user.marriage.partner) text += `👬 Партнер: ${users[message.user.marriage.partner].tag}`;
	text += `🌟 Уровень: ${message.user.level} [${message.user.exp}/24]\n`;

	if(message.user.transport.car || message.user.transport.yacht || message.user.transport.airplane || message.user.transport.helicopter ||
		message.user.realty.home || message.user.realty.apartment ||
		message.user.misc.phone || message.user.misc.farm || message.user.business || message.user.misc.pet)
	{
		text += `\n🔑 Имущество:\n`;
		
		
		if(message.user.fish.ud) text += ` &#127907; Удочка: ${udilishe[message.user.fish.ud - 1].name}\n`;
		if(message.user.transport.car) text += `⠀🚗 Машина: ${cars[message.user.transport.car - 1].name}\n`;
		if(message.user.transport.yacht) text += `⠀🛥 Яхта: ${yachts[message.user.transport.yacht - 1].name}\n`;
		if(message.user.transport.airplane) text += `⠀🛩 Самолёт: ${airplanes[message.user.transport.airplane - 1].name}\n`;
		if(message.user.transport.helicopter) text += `⠀🚁 Вертолёт: ${helicopters[message.user.transport.helicopter - 1].name}\n`;
		
		if(message.user.realty.home) text += `⠀🏠 Дом: ${homes[message.user.realty.home - 1].name}\n`;
		if(message.user.realty.apartment) text += `⠀🌇 Квартира: ${apartments[message.user.realty.apartment - 1].name}\n`;

		if(message.user.misc.phone) text += `⠀📱 Телефон: ${phones[message.user.misc.phone - 1].name}\n`;
		if(message.user.misc.pet) text += `⠀🐌 Питомец: ${pets[message.user.misc.pet - 1].name}\n`;
		if(message.user.misc.farm) text += `⠀🔋 Фермы: ${farms[message.user.misc.farm - 1].name} (x${message.user.farms})\n`;
		if(message.user.business) text += `⠀${businesses[message.user.business - 1].icon} ${businesses[message.user.business - 1].name}\n`;
	}

	text += `\n📗 Дата регистрации: ${message.user.regDate}`;
	return bot(`твой профиль:\n${text}`);
});

cmd.hear(/^(?:профиль игрока)\s(.*)$/i, async (message, bot) => {
if(message.user.settings.adm < 1) bot(`Команда только для админов`);
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return bot(`Игрок не найден`);

let text = ``;
	if(user.settings.adm) text += `👮‍♂ Вы администратор ${user.settings.adm}-го уровня\n`;
	if(user.settings.tabirat) text += `💥 Поздравляем Вы обладатель лицензии NoCopTabirat\n`;
	text += `🔎 ID: ${user.uid}\n`;
	text += `💰 Денег: ${utils.sp(user.balance)}$\n`;
	text += `💳 В банке: ${utils.sp(user.bank)}$\n`;
	if(user.credit) text += `👮‍♂ Кредит, остаток долга: ${utils.sp(user.credit)}$\n`;
	text += `💽 Биткоинов: ${utils.sp(user.btc)}฿\n`;
	text += `👑 Рейтинг: ${utils.sp(user.rating)}\n`;
	if(user.work) text += `👔 Работа: ${works[user.work - 1].name}\n`;
	if(user.marriage.partner) text += `👬 Партнер: ${users[user.marriage.partner].tag}`;
	text += `🌟 Уровень: ${user.level} [${user.exp}/24]\n`;

	if(user.transport.car || user.transport.yacht || user.transport.airplane || user.transport.helicopter ||
		user.realty.home || user.realty.apartment ||
		user.misc.phone || user.misc.farm || user.business || user.misc.pet)
	{
		text += `\n🔑 Имущество:\n`;
		
		
		if(user.fish.ud) text += ` &#127907; Удочка: ${udilishe[user.fish.ud - 1].name}\n`;
		if(user.transport.car) text += `⠀🚗 Машина: ${cars[user.transport.car - 1].name}\n`;
		if(user.transport.yacht) text += `⠀🛥 Яхта: ${yachts[user.transport.yacht - 1].name}\n`;
		if(user.transport.airplane) text += `⠀🛩 Самолёт: ${airplanes[user.transport.airplane - 1].name}\n`;
		if(user.transport.helicopter) text += `⠀🚁 Вертолёт: ${helicopters[user.transport.helicopter - 1].name}\n`;
		
		if(user.realty.home) text += `⠀🏠 Дом: ${homes[user.realty.home - 1].name}\n`;
		if(user.realty.apartment) text += `⠀🌇 Квартира: ${apartments[user.realty.apartment - 1].name}\n`;

		if(user.misc.phone) text += `⠀📱 Телефон: ${phones[user.misc.phone - 1].name}\n`;
		if(user.misc.pet) text += `⠀🐌 Питомец: ${pets[user.misc.pet - 1].name}\n`;
		if(user.misc.farm) text += `⠀🔋 Фермы: ${farms[user.misc.farm - 1].name} (x${user.farms})\n`;
		if(user.business) text += `⠀${businesses[user.business - 1].icon} ${businesses[user.business - 1].name}\n`;
	}

	text += `\n📗 Дата регистрации: ${user.regDate}`;
	return bot(`профиль игрок с ID ${message.args[1]} ${user.tag}:\n${text}`);

});
cmd.hear(/^(?:баланс)$/i, async (message, bot) => {
	let text = `на руках ${utils.sp(message.user.balance)}$ 💸`;

	if(message.user.bank) text += `\n💳 В банке ${utils.sp(message.user.bank)}$`;
	if(message.user.credit) text += `\n👮‍♂ Кредит, остаток долга: ${utils.sp(message.user.credit)}$`;
	if(message.user.refbalance) text += `\n💳‍ Реферальный счет: ${utils.sp(message.user.refbalance)}$`;
	if(message.user.btc) text += `\n💽 Биткоинов ${utils.sp(message.user.btc)}฿`;
	if(message.user.zhelezo) text += `\n🎛 ${message.user.zhelezo} железа`;
	if(message.user.zoloto) text += `\n🏵 ${message.user.zoloto} золота`;
	if(message.user.almaz) text += `\n💎 ${message.user.almaz} алмаза`;
	if(message.user.fish.cost) text += `\n🐠 Рыбы на сумму: ${utils.sp(message.user.fish.cost)}$`;
	return bot(text);
});

cmd.hear(/^(?:банк)$/i, async (message, bot) => {
	if(message.user.bank < 1) return bot(`ваш банковский счет пуст.`);
	return bot(`на балансе в банке ${message.user.bank}$
✍🏻 Введите "Банк [кол-во]" для пополнения`);
});

cmd.hear(/^(?:банк)\s(?:снять)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.bank);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.bank) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.bank)
	{
		message.user.balance += message.args[1];
		message.user.bank -= message.args[1];

		return bot(`вы сняли ${utils.sp(message.args[1])}$
💳 Остаток на счёте: ${utils.sp(message.user.bank)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:банк)\s(?:кредит)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.bank);
	var procent = utils.random(50,200);
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.user.credit > 0) return bot(`У вас уже есть кредит, как погасите приходите`);

	if(message.user.business <= 0) return bot(`Кредит выдается под залог бизнеса
	У вас бизнеса нет, а значит и кредит выдать мы вам не сможем`);
	
	if(message.args[1] > businesses[message.user.business - 1].cost) return bot(`Кредит выдается под залог бизнеса
	Сумма кредита не должна превышать стоимости вашего бизнеса`);;
	
	let user = users.find(x=> x.uid === 0);
	if(user.bank < message.args[1]) return bot(`В банке сейчас нет такой суммы
	Сейчас доступно ${utils.sp(user.bank)}$`);
	
	user.bank -= message.args[1];
	message.user.bank += message.args[1];
	message.user.credit = Math.floor(message.args[1] + (message.args[1]*(procent/100)));

		return bot(`Вам одобрили кредит ${utils.sp(message.args[1])}$
		По процентной ставке ${procent}%
		Отдать банку нужно будет ${utils.sp(message.user.credit)}$
		Деньги переведены в банк на расчетный счет
💳 В банке: ${utils.sp(message.user.bank)}$`);
	
});

cmd.hear(/^(?:банк)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] < 1) return bot(`на балансе в банке ${message.user.bank}$
✍🏻 Введите "Банк снять [кол-во]" для снятия`);

	if(message.args[1] > message.user.balance) return bot(`на вашем балансе нет столько денег. ${smilesuccess}`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		message.user.bank += message.args[1];

		return bot(`вы положили в банк ${utils.sp(message.args[1])}$ ${smilesuccess}
💰 На руках ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:рассылка)\s([^]+)$/i, async (message, bot) => {
if(message.user.settings.adm < 4) return;
users.filter(x=> x.id !== 1).map(zz => { 
vk.api.messages.send({ user_id: zz.id, message: `${message.args[1]}`}); 
}); 
let people = 0;
bot(`рассылка отправлена!`);
for(let id in users) {
vk.api.call('messages.send', {
chat_id: id,
message: `${message.args[1]}` });
}
return;
});

cmd.hear(/^(?:уведомления)\s(выкл|вкл)$/i, async (message, bot) => {
	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.notifications = false;
		return bot(`уведомления отключены! 🔕`);
	}

	if(message.args[1].toLowerCase() === 'вкл')
	{
		return bot(`уведомления включены! 🔔`);
	}
});

cmd.hear(/^(?:передать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;
	if(!message.user.settings.trade) return bot(`у вас установлен бан передачи ${smileerror}`);

	if(message.args[2] > message.user.balance) return bot(`недостаточно денег
💰 Баланс: ${utils.sp(message.user.balance)}$`);
	else if(message.args[2] <= message.user.balance)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

		if(user.uid === message.user.uid) return bot(`укажите ID игрока из его профиля. ${smileerror}`);
		var comisia = Math.floor(message.args[2] * (2/100));
		
		if(message.args[2] + comisia > message.user.balance) return bot(`недостаточно денег
💰 Баланс: ${utils.sp(message.user.balance)}$`);
		
		message.user.balance -= (message.args[2] + comisia);
		user.balance += message.args[2];
		
		await bot(`вы перевели ${user.tag} ${utils.sp(message.args[2])}$ ${smilesuccess}
		Комиссия за перевод ${utils.sp(comisia)}$
		💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Игрок ${message.user.tag} перевел вам ${utils.sp(message.args[2])}$!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});

cmd.hear(/^(?:рейтинг)$/i, async (message, bot) => {
	bot(`ваш рейтинг: ${utils.sp(message.user.rating)}👑`);
	if (message.user.rating == 0) return bot(`Ты НУЛИНА, ты ни кто в этой игре!`)
	return;
});

cmd.hear(/^(?:ник)\s(вкл|выкл)$/i, async (message, bot) => {
	if(message.args[1].toLowerCase() === 'вкл')
	{
		message.user.mention = true;
		return bot(`гиперссылка включена!`);
	}

	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.mention = false;
		return bot(`гиперссылка отключена!`);
	}
});

cmd.hear(/^(?:ник)\s(.*)$/i, async (message, bot) => {

	if(message.args[1].length > message.user.nicklimit) return bot(`вы указали длинный ник. ${smileerror}`);

	message.user.tag = message.args[1];
	let smilenick = utils.pick([`😯`, `🙂`, `☺`]);
	let ggtext = utils.pick([`фантастический`, `крутой`, `классный`, `прикольный`]);
	return bot(`${ggtext} ник! ${smilenick}`);
});

cmd.hear(/^(?:магазин)$/i, async (message, bot) => {
	return bot(`разделы магазина:

🚙 Транспорт:
⠀⠀🚗 Машины
⠀⠀🛥 Яхты
⠀⠀🛩 Самолеты
⠀⠀🚁 Вертолеты

🏘 Недвижимость:
⠀⠀🏠 Дома
⠀⠀🌇 Квартиры

&#127887; Рыбалка:
  &#127907;Удочка [номер]
  &#129525;Леска [кол-во]
  &#128027;Наживка [кол-во]
  

📌 Остальное:
  🐌 Питомцы
⠀⠀📱 Телефоны
⠀⠀⭐ Фермы
⠀⠀👑 Рейтинг [кол-во] - $250 млн
⠀⠀💼 Бизнесы
⠀⠀💽 Биткоин [кол-во]
  ⭐ Лицензия

🔎 Для покупки используйте "[категория] [номер]".
⠀ ⠀ Например: "${utils.pick(['Телефон 7', 'Машина 1', 'Ферма 2', 'Биткоин 100', 'Рейтинг 10'])}"`);
});

cmd.hear(/^(?:обнулить)\s(.*)\s?(.*)?$/i, async (message, bot) => {
	if (message.user.settings.adm < 4) return;
	message.args[2] = message.args[1].split(' ')[1];
	console.log(`Первый элемент ${message.args[1]}`)
	console.log(`Второй элемент ${message.args[2]}`)
	if(/баланс/i.test(message.args[1].toLowerCase()))
	{
	let user = users.find(x=> x.uid === Number(message.args[2]));
	if(!user) return bot(`не знаю такого пользователя`);
	user.balance = 0;
	return bot(`баланс игрока с id ${message.args[2]} обнулен`)
	}
});

cmd.hear(/^(?:продать)\s(.*)\s?(.*)?$/i, async (message, bot) => {
	let options = {
		count: null
	}

	message.args[2] = message.args[1].split(' ')[1];
	
	if(/биткоин/i.test(message.args[1].toLowerCase()))
	{
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|весь|вся|всю|все|всё)/ig, message.user.btc);
	}

	if(!message.args[2]) options.count = 1;
	if(message.args[2])
	{
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

		message.args[2] = Math.floor(Number(message.args[2]));
		if(message.args[2] <= 0) return;

		if(!message.args[2]) options.count = 1;
		else if(message.args[2]) options.count = message.args[2];
	}
	
	
		if(/машин/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.car) return bot(`у вас нет машины ${smileerror}`);
		let a = Math.floor(cars[message.user.transport.car - 1].cost * 0.85);

		message.user.balance += Math.floor(cars[message.user.transport.car - 1].cost * 0.85);
		
		let user2 = users.find(x=> x.uid === 0);
		let b = Math.floor(cars[message.user.transport.car - 1].cost * 0.15);
		user2.bank += b;
		message.user.transport.car = 0;
		return bot(`вы продали свою машину за ${utils.sp(a)}$
		Удержан процент банку за сделку 15% ${utils.sp(b)}$`);
	}
	
	if(/удоч/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.fish.ud) return bot(`у вас нет удочки ${smileerror}`);
		let a = Math.floor(udilishe[message.user.fish.ud - 1].cost * 0.85);

		message.user.balance += Math.floor(cars[message.user.fish.ud - 1].cost * 0.85);
		;
		let user2 = users.find(x=> x.uid === 0);
		let b = Math.floor(cars[message.user.fish.ud - 1].cost * 0.15);
		user2.bank += b;
		message.user.fish.ud = 0
		return bot(`вы продали свою удочку с уценкой в 15% за ${utils.sp(a)}$
		Удержан процент банку за сделку 15% ${utils.sp(b)}$`);
	}
	
	if(/рыб/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.fish.cost) return bot(`у вас нет рыбы ${smileerror}`);
		var a = message.user.fish.cost;

		message.user.balance += a;
		message.user.fish.cost = 0;
		
		let text = ``;
		if(message.user.referal >= 0 & message.user.referal != null) {
		const mn = message.user.level;
		const pr = mn*2;
		var sum_d = Math.floor(a * (pr/100));
		if (sum_d != 0 ) {
		text += `Произведены реферальные отчисления ${pr}% с дохода ${utils.sp(sum_d)}$\n`;
		let user = users.find(x=> x.uid === message.user.referal);
		user.refbalance += sum_d;
		}
		}

		return bot(`вы продали рыбу на сумму ${utils.sp(a)}$
		${text}`);
	}

	if(/питом/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.pet) return bot(`у вас нет питомца ${smileerror}`);
		let a = Math.floor(pets[message.user.misc.pet - 1].cost * 0.85);

		message.user.balance += Math.floor(pets[message.user.misc.pet - 1].cost * 0.85);
		let user2 = users.find(x=> x.uid === 0);
		let b = Math.floor(cars[message.user.misc.pet - 1].cost * 0.15);
		user2.bank += b;
		message.user.misc.pet = 0;
		message.user.pet.lvl = 0;
		message.user.pet.poterl = false;
		message.user.timers.poxod = false;
		message.user.timers.poxod2 = false;

		return bot(`вы продали своего питомца за ${utils.sp(a)}$
		Удержана комиссия банка за сделку 15% ${utils.sp(b)}$`);
	}

	if(/желез/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.zhelezo < 1) return bot(`у Вас нет железа. ⚠`);
		let a2 = message.user.zhelezo * 15000;

		var zhelezosda = message.user.zhelezo;
		let text = ``;
		if(message.user.referal >= 0 & message.user.referal != null) {
		const mn = message.user.level;
		const pr = mn*2;
		var sum_d = Math.floor(a2 * (pr/100));
		if (sum_d != 0 ) {
		text += `Произведены реферальные отчисления ${pr}% с дохода ${utils.sp(sum_d)}$\n`;
		let user = users.find(x=> x.uid === message.user.referal);
		user.refbalance += sum_d;
		}
		}
		message.user.balance += message.user.zhelezo * 15000;
		let user2 = users.find(x=> x.uid === 0);
		var b = Math.floor((message.user.zhelezo * 15000) * 0.15);
		message.user.zhelezo = 0;
		user2.bank += b;
		return bot(`вы продали ${zhelezosda} железа за ${utils.sp(a2)}$ ✅
		${text}
		Удержана сумма ${utils.sp(b)}$ в пользу банка`);
	}

	if(/алмаз/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.almaz < 1) return bot(`у Вас нет алмазов. ⚠`);
		let a3 = message.user.almaz * 100000;

		var zhelezosda2 = message.user.almaz;
		let text = ``;
		if(message.user.referal >= 0 & message.user.referal != null) {
		const mn = message.user.level;
		const pr = mn*2;
		var sum_d = Math.floor(a3 * (pr/100));
		if (sum_d != 0 ) {
		text += `Произведены реферальные отчисления ${pr}% с дохода ${utils.sp(sum_d)}$\n`;
		let user = users.find(x=> x.uid === message.user.referal);
		user.refbalance += sum_d;
		}
		}
		let user2 = users.find(x=> x.uid === 0);
		let b = Math.floor((message.user.almaz * 100000) * 0.15);
		user2.bank += b;
		message.user.balance += message.user.almaz * 100000;
		message.user.almaz = 0;

		return bot(`вы продали ${zhelezosda2} алмазов за ${utils.sp(a3)}$ ✅
		${text}
		Удержана сумма ${utils.sp(b)}$ в пользу банка`);
	}

	if(/золот/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.zoloto < 1) return bot(`у Вас нет золота. ⚠`);
		let a4 = message.user.zoloto * 50000;

		var zhelezosda3 = message.user.zoloto;
		
		let text = ``;
		if(message.user.referal >= 0 & message.user.referal != null) {
		const mn = message.user.level;
		const pr = mn*2;
		var sum_d = Math.floor(a4 * (pr/100));
		if (sum_d != 0 ) {
		text += `Произведены реферальные отчисления ${pr}% с дохода ${utils.sp(sum_d)}$\n`;
		let user = users.find(x=> x.uid === message.user.referal);
		user.refbalance += sum_d;
		}
		}
		let user2 = users.find(x=> x.uid === 0);
		let b = Math.floor((message.user.zoloto * 50000) * 0.15);
		user2.bank += b;
		message.user.balance += message.user.zoloto * 50000;
		message.user.zoloto = 0;

		return bot(`вы продали ${zhelezosda3} золота за ${utils.sp(a4)}$ ✅
		${text}
		Удержана сумма ${utils.sp(b)}$ в пользу банка`);
	}

	if(/яхт/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.yacht) return bot(`у вас нет яхты ${smileerror}`);
		let a = Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);

		message.user.balance += Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);
		
		let user2 = users.find(x=> x.uid === 0);
		let b = Math.floor(cars[message.user.transport.yacht - 1].cost * 0.15);
		user2.bank += b;
		message.user.transport.yacht = 0;
		return bot(`вы продали свою яхту за ${utils.sp(a)}$
		Комиссия за сделку 15% ${utils.sp(b)}$ переведена в банк`);
	}

	if(/самол(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.airplane) return bot(`у вас нет самолёта ${smileerror}`);
		let a = Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);

		message.user.balance += Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);
		
		let user2 = users.find(x=> x.uid === 0);
		let b = Math.floor(cars[message.user.transport.airplane - 1].cost * 0.15);
		user2.bank += b;
		message.user.transport.airplane = 0;
		return bot(`вы продали свой самолёт за ${utils.sp(a)}$
		Комиссия за сделку 15% ${utils.sp(b)}$ переведена в банк`);
	}

	if(/в(и|е|я)рт(а|о)л(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.helicopter) return bot(`у вас нет самолёта ${smileerror}`);
		let a = Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);

		message.user.balance += Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);
		
		let user2 = users.find(x=> x.uid === 0);
		let b = Math.floor(cars[message.user.transport.helicopter - 1].cost * 0.15);
		user2.bank += b;
		message.user.transport.helicopter = 0;
		return bot(`вы продали свой вертолёт за ${utils.sp(a)}$
		Комиссия за сделку 15% ${utils.sp(b)}$ переведена в банк`);
	}

	if(/дом/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.home) return bot(`у вас нет дома ${smileerror}`);
		let a = Math.floor(homes[message.user.realty.home - 1].cost * 0.85);

		message.user.balance += Math.floor(homes[message.user.realty.home - 1].cost * 0.85);
		
		let user2 = users.find(x=> x.uid === 0);
		let b = Math.floor(cars[message.user.realty.home - 1].cost * 0.15);
		user2.bank += b;
		message.user.realty.home = 0;
		return bot(`вы продали свой дом за ${utils.sp(a)}$
		Комиссия за сделку 15% ${utils.sp(b)}$ переведена в банк`);
	}

	if(/квартир/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.apartment) return bot(`у вас нет квартиры ${smileerror}`);
		let a = Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);

		message.user.balance += Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);
		
		let user2 = users.find(x=> x.uid === 0);
		let b = Math.floor(cars[message.user.realty.apartment - 1].cost * 0.15);
		user2.bank += b;
		message.user.realty.apartment = 0;
		return bot(`вы продали свою квартиру за ${utils.sp(a)}$
		Комиссия за сделку 15% ${utils.sp(b)}$ переведена в банк`);
	}

	if(/телефон/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.phone) return bot(`у вас нет телефона ${smileerror}`);
		let a = Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);

		message.user.balance += Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);
		
		let user2 = users.find(x=> x.uid === 0);
		let b = Math.floor(cars[message.user.misc.phone - 1].cost * 0.15);
		user2.bank += b;
		message.user.misc.phone = 0;
		return bot(`вы продали свой телефон за ${utils.sp(a)}$
		Комиссия за сделку 15% ${utils.sp(b)}$ переведена в банк`);
	}

	if(/ферм/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.farm) return bot(`у вас нет ферм ${smileerror}`);
		let a = Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);
		let a2 = a*message.user.farms;

		message.user.balance += a2;
		let user2 = users.find(x=> x.uid === 0);
		let b = Math.floor((a*message.user.farms) * 0.15);
		user2.bank += b;
		bot(`вы продали ${farms[message.user.misc.farm - 1].name} (x${message.user.farms}) за ${utils.sp(a2)}$ ${smilesuccess}
		Комиссия за сделку 15% ${utils.sp(b)}$ переведена в банк`);
		message.user.misc.farm = 0;
		message.user.farms = 0;
		return;
	}

	if(/рейтинг/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.rating) return bot(`у вас нет рейтинга ${smileerror}`);
		let a = (150000000 * options.count);

		message.user.balance += Math.floor(a);
		message.user.rating -= options.count;
		let user2 = users.find(x=> x.uid === 0);
		let b = Math.floor((150000000 * options.count) * 0.15);
		user2.bank += b;
		return bot(`вы продали ${options.count} ${utils.decl(options.count, ['рейтинг', 'рейтинга', 'рейтингов'])} за ${utils.sp(Math.floor(a))}
		Комиссия за сделку 15% ${utils.sp(b)}$ переведена в банк`);
	}

	if(/бизнес/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.business) return bot(`у вас нет бизнеса`);
		let a = Math.floor(businesses[message.user.business - 1].cost * 0.85);

		message.user.balance += Math.floor(a);
		message.user.bizlvl = 0;
		let user2 = users.find(x=> x.uid === 0);
		let b = Math.floor(businesses[message.user.business - 1].cost * 0.15);
		user2.bank += b;
		message.user.business = 0;
		return bot(`вы продали свой бизнес за ${utils.sp(a)}$
		Комиссия за сделку 15% ${utils.sp(b)}$ переведена в банк`);
	}

	if(/биткоин/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.btc) return bot(`недостаточно биткоинов`);
		let a = Math.floor(btc * options.count);
		
		let text = ``;
		if(message.user.referal >= 0 & message.user.referal != null) {
		const mn = message.user.level;
		const pr = mn*2;
		var sum_d = Math.floor(a * (pr/100));
		if (sum_d != 0 ) {
		text += `Произведены реферальные отчисления ${pr}% с дохода ${utils.sp(sum_d)}$\n`;
		let user = users.find(x=> x.uid === message.user.referal);
		user.refbalance += sum_d;
		}
		}
		
		message.user.balance += Math.floor(a);
		message.user.btc -= options.count;

		return bot(`вы продали ${options.count}₿ за ${utils.sp(a)}$
		${text}`);
	}
});

cmd.hear(/^(?:машины|машина)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`машины: 
${message.user.transport.car === 1 ? '🔹' : '🔸'} 1. Самокат (500$)
${message.user.transport.car === 2 ? '🔹' : '🔸'} 2. Велосипед (2.500$)
${message.user.transport.car === 3 ? '🔹' : '🔸'} 3. Гироскутер (5.000$)
${message.user.transport.car === 4 ? '🔹' : '🔸'} 4. Сегвей (7.500$)
${message.user.transport.car === 5 ? '🔹' : '🔸'} 5. Мопед (25.000$)
${message.user.transport.car === 6 ? '🔹' : '🔸'} 6. Мотоцикл (50.000$)
${message.user.transport.car === 7 ? '🔹' : '🔸'} 7. ВАЗ 2109 (75.000$)
${message.user.transport.car === 8 ? '🔹' : '🔸'} 8. Квадроцикл (80.000$)
${message.user.transport.car === 9 ? '🔹' : '🔸'} 9. Багги (135.000$)
${message.user.transport.car === 10 ? '🔹' : '🔸'} 10. Вездеход (200.000$)
${message.user.transport.car === 11 ? '🔹' : '🔸'} 11. Лада Xray (350.000$)
${message.user.transport.car === 12 ? '🔹' : '🔸'} 12. Audi Q7 (750.000$)
${message.user.transport.car === 13 ? '🔹' : '🔸'} 13. BMW X6 (1.000.000$)
${message.user.transport.car === 14 ? '🔹' : '🔸'} 14. Toyota FT-HS (1.750.000$)
${message.user.transport.car === 15 ? '🔹' : '🔸'} 15. BMW Z4 M (2.500.000$)
${message.user.transport.car === 16 ? '🔹' : '🔸'} 16. Subaru WRX STI (2.750.000$)
${message.user.transport.car === 17 ? '🔹' : '🔸'} 17. Lamborghini Veneno (3.000.000$)
${message.user.transport.car === 18 ? '🔹' : '🔸'} 18. Tesla Roadster (4.500.000$)
${message.user.transport.car === 19 ? '🔹' : '🔸'} 19. Yamaha YZF R6 (5.000.000$)
${message.user.transport.car === 20 ? '🔹' : '🔸'} 20. Bugatti Chiron (6.500.000$)
${message.user.transport.car === 21 ? '🔹' : '🔸'} 21. Thrust SSC (35.000.000$)
${message.user.transport.car === 22 ? '🔹' : '🔸'} 22. Ferrari LaFerrari (39.000.000$)
${message.user.transport.car === 23 ? '🔹' : '🔸'} 23. Koenigsegg Regera (50.000.000$)
${message.user.transport.car === 24 ? '🔹' : '🔸'} 24. Tesla Semi (75.000.000$)
${message.user.transport.car === 25 ? '🔹' : '🔸'} 25. Venom GT (125.000.000$)
${message.user.transport.car === 26 ? '🔹' : '🔸'} 26. Rolls-Royce (200.000.000$)

Для покупки введите "Машина [номер]"`);

	const sell = cars.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.car) return bot(`у вас уже есть машина (${cars[message.user.transport.car - 1].name}), введите "Продать машину"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.car = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:яхты|яхта)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`яхты: 
${message.user.transport.yacht === 1 ? '🔹' : '🔸'} 1. Ванна (10.000$)
${message.user.transport.yacht === 2 ? '🔹' : '🔸'} 2. Nauticat 331 (10.000.000$)
${message.user.transport.yacht === 3 ? '🔹' : '🔸'} 3. Nordhavn 56 MS (15.000.000$)
${message.user.transport.yacht === 4 ? '🔹' : '🔸'} 4. Princess 60 (25.000.000$)
${message.user.transport.yacht === 5 ? '🔹' : '🔸'} 5. Azimut 70 (35.000.000$)
${message.user.transport.yacht === 6 ? '🔹' : '🔸'} 6. Dominator 40M (50.000.000$)
${message.user.transport.yacht === 7 ? '🔹' : '🔸'} 7. Moonen 124 (60.000.000$)
${message.user.transport.yacht === 8 ? '🔹' : '🔸'} 8. Wider 150 (65.000.000$)
${message.user.transport.yacht === 9 ? '🔹' : '🔸'} 9. Palmer Johnson 42M SuperSport (80.000.000$)
${message.user.transport.yacht === 10 ? '🔹' : '🔸'} 10. Wider 165 (85.000.000$)
${message.user.transport.yacht === 11 ? '🔹' : '🔸'} 11. Eclipse (150.000.000$)
${message.user.transport.yacht === 12 ? '🔹' : '🔸'} 12. Dubai (300.000.000$)
${message.user.transport.yacht === 13 ? '🔹' : '🔸'} 13. Streets of Monaco (750.000.000$)

Для покупки введите "Яхта [номер]"`);

	const sell = yachts.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.yacht) return bot(`у вас уже есть яхта (${yachts[message.user.transport.yacht - 1].name}), введите "Продать яхту"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.yacht = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});


cmd.hear(/^(?:удочка|удочки)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`удочки: 
${message.user.fish.ud === 1 ? '🔹' : '🔸'} 1. Удочка из камыша (10.000$)
${message.user.fish.ud  === 2 ? '🔹' : '🔸'} 2. Удока из дуба (100.000$)
${message.user.fish.ud  === 3 ? '🔹' : '🔸'} 3. Sport-Guns (1.000.000$)
${message.user.fish.ud  === 4 ? '🔹' : '🔸'} 4. Small Carp 4,5 (100.000.000$)

Для покупки введите "удочка [номер]"`);

	const sell = udilishe.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.fish.ud) return bot(`у вас уже есть удочка (${udilishe[message.user.fish.ud - 1].name}), введите "Продать удочку"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.fish.ud = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:леска|лески|леску)\s?([0-9]+)?$/i, async (message, bot) => {
if(!message.args[1]) return bot(`Для покупки лески введите кол-во
Цена 1 катушки - 10.000$`);
var kol_vo = Number(message.args[1]);
var price_ls = 10000*kol_vo;
if (message.user.balance<price_ls) return bot(`Не хватает денег на такое кол-во`);
message.user.balance -= price_ls;
message.user.fish.lesok += kol_vo;
return bot(`Вы преобрели лесок: ${kol_vo}
На сумму: ${utils.sp(price_ls)}$
Остаток на счете: ${utils.sp(message.user.balance)}$`); 
});

cmd.hear(/^(?:наживка|наживку)\s?([0-9]+)?$/i, async (message, bot) => {
if(!message.args[1]) return bot(`Для покупки наживки введите кол-во
Цена 1 шт - 5.000$`);
var kol_vo = Number(message.args[1]);
var price_ls = 5000*kol_vo;
if (message.user.balance<price_ls) return bot(`Не хватает денег на такое кол-во`);
message.user.balance -= price_ls;
message.user.fish.naz += kol_vo;
return bot(`Вы преобрели наживки: ${kol_vo}
На сумму: ${utils.sp(price_ls)}$
Остаток на счете: ${utils.sp(message.user.balance)}$`); 
});

cmd.hear(/^(?:самол(?:е|ё)т|самол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`самолеты: 
${message.user.transport.airplane === 1 ? '🔹' : '🔸'} 1. Параплан (100.000$)
${message.user.transport.airplane === 2 ? '🔹' : '🔸'} 2. АН-2 (350.000$)
${message.user.transport.airplane === 3 ? '🔹' : '🔸'} 3. Cessna-172E (700.000$)
${message.user.transport.airplane === 4 ? '🔹' : '🔸'} 4. Supermarine Spitfire (1.000.000$)
${message.user.transport.airplane === 5 ? '🔹' : '🔸'} 5. BRM NG-5 (1.400.000$)
${message.user.transport.airplane === 6 ? '🔹' : '🔸'} 6. Cessna T210 (2.600.000$)
${message.user.transport.airplane === 7 ? '🔹' : '🔸'} 7. Beechcraft 1900D (5.500.000$)
${message.user.transport.airplane === 8 ? '🔹' : '🔸'} 8. Cessna 550 (8.000.000$)
${message.user.transport.airplane === 9 ? '🔹' : '🔸'} 9. Hawker 4000 (22.400.000$)
${message.user.transport.airplane === 10 ? '🔹' : '🔸'} 10. Learjet 31 (45.000.000$)
${message.user.transport.airplane === 11 ? '🔹' : '🔸'} 11. Airbus A318 (85.000.000$)
${message.user.transport.airplane === 12 ? '🔹' : '🔸'} 12. F-35A (160.000.000$)
${message.user.transport.airplane === 13 ? '🔹' : '🔸'} 13. Boeing 747-430 Custom (225.000.000$)
${message.user.transport.airplane === 14 ? '🔹' : '🔸'} 14. C-17A Globemaster III (350.000.000$)
${message.user.transport.airplane === 15 ? '🔹' : '🔸'} 15. F-22 Raptor (400.000.000$)
${message.user.transport.airplane === 16 ? '🔹' : '🔸'} 16. Airbus 380 Custom (600.000.000$)
${message.user.transport.airplane === 17 ? '🔹' : '🔸'} 17. B-2 Spirit Stealth Bomber (1.359.000.000$)

Для покупки введите "Самолет [номер]"`);

	const sell = airplanes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.airplane) return bot(`у вас уже есть самолёт (${airplanes[message.user.transport.airplane - 1].name}), введите "Продать самолёт"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.airplane = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:вертол(?:е|ё)т|вертол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`вертолеты: 
${message.user.transport.helicopter === 1 ? '🔹' : '🔸'} 1. Шарик с пропеллером (2$)
${message.user.transport.helicopter === 2 ? '🔹' : '🔸'} 2. RotorWay Exec 162F (300.000$)
${message.user.transport.helicopter === 3 ? '🔹' : '🔸'} 3. Robinson R44 (450.000$)
${message.user.transport.helicopter === 4 ? '🔹' : '🔸'} 4. Hiller UH-12C (1.300.000$)
${message.user.transport.helicopter === 5 ? '🔹' : '🔸'} 5. AW119 Koala (2.500.000$)
${message.user.transport.helicopter === 6 ? '🔹' : '🔸'} 6. MBB BK 117 (4.000.000$)
${message.user.transport.helicopter === 7 ? '🔹' : '🔸'} 7. Eurocopter EC130 (7.500.000$)
${message.user.transport.helicopter === 8 ? '🔹' : '🔸'} 8. Leonardo AW109 Power (10.000.000$)
${message.user.transport.helicopter === 9 ? '🔹' : '🔸'} 9. Sikorsky S-76 (15.000.000$)
${message.user.transport.helicopter === 10 ? '🔹' : '🔸'} 10. Bell 429WLG (19.000.000$)
${message.user.transport.helicopter === 11 ? '🔹' : '🔸'} 11. NHI NH90 (35.000.000$)
${message.user.transport.helicopter === 12 ? '🔹' : '🔸'} 12. Kazan Mi-35M (60.000.000$)
${message.user.transport.helicopter === 13 ? '🔹' : '🔸'} 13. Bell V-22 Osprey (135.000.000$)

Для покупки введите "Вертолет [номер]"`);

	const sell = helicopters.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.helicopter) return bot(`у вас уже есть вертолёт (${homes[message.user.transport.helicopter - 1].name}), введите "Продать вертолёт"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.helicopter = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:дом|дома)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`дома: 
${message.user.realty.home === 1 ? '🔹' : '🔸'} 1. Коробка из-под холодильника (250$)
${message.user.realty.home === 2 ? '🔹' : '🔸'} 2. Подвал (3.000$)
${message.user.realty.home === 3 ? '🔹' : '🔸'} 3. Палатка (3.500$)
${message.user.realty.home === 4 ? '🔹' : '🔸'} 4. Домик на дереве (5.000$)
${message.user.realty.home === 5 ? '🔹' : '🔸'} 5. Полуразрушенный дом (10.000$)
${message.user.realty.home === 6 ? '🔹' : '🔸'} 6. Дом в лесу (25.000$)
${message.user.realty.home === 7 ? '🔹' : '🔸'} 7. Деревянный дом (37.500$)
${message.user.realty.home === 8 ? '🔹' : '🔸'} 8. Дача (125.000$)
${message.user.realty.home === 9 ? '🔹' : '🔸'} 9. Кирпичный дом (80.000$)
${message.user.realty.home === 10 ? '🔹' : '🔸'} 10. Коттедж (450.000$)
${message.user.realty.home === 11 ? '🔹' : '🔸'} 11. Особняк (1.250.000$)
${message.user.realty.home === 12 ? '🔹' : '🔸'} 12. Дом на Рублёвке (5.000.000$)
${message.user.realty.home === 13 ? '🔹' : '🔸'} 13. Личный небоскрёб (7.000.000$)
${message.user.realty.home === 14 ? '🔹' : '🔸'} 14. Остров с особняком (12.500.000$)
${message.user.realty.home === 15 ? '🔹' : '🔸'} 15. Белый дом (20.000.000$)

Для покупки введите "Дом [номер]"`);

	const sell = homes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.home) return bot(`у вас уже есть дом (${homes[message.user.realty.home - 1].name}), введите "Продать дом"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.home = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:квартира|квартиры)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`квартиры: 
${message.user.realty.apartment === 1 ? '🔹' : '🔸'} 1. Чердак (15.000$)
${message.user.realty.apartment === 2 ? '🔹' : '🔸'} 2. Квартира в общежитии (55.000$)
${message.user.realty.apartment === 3 ? '🔹' : '🔸'} 3. Однокомнатная квартира (175.000$)
${message.user.realty.apartment === 4 ? '🔹' : '🔸'} 4. Двухкомнатная квартира (260.000$)
${message.user.realty.apartment === 5 ? '🔹' : '🔸'} 5. Четырехкомнатная квартира (500.000$)
${message.user.realty.apartment === 6 ? '🔹' : '🔸'} 6. Квартира в центре Москвы (1.600.000$)
${message.user.realty.apartment === 7 ? '🔹' : '🔸'} 7. Двухуровневая квартира (4.000.000$)
${message.user.realty.apartment === 8 ? '🔹' : '🔸'} 8. Квартира с Евроремонтом (6.000.000$)

Для покупки введите "Квартира [номер]"`);

	const sell = apartments.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.apartment) return bot(`у вас уже есть квартира (${apartments[message.user.realty.apartment - 1].name}), введите "Продать квартиру"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.apartment = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:телефон|телефоны)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`телефоны: 
${message.user.misc.phone === 1 ? '🔹' : '🔸'} 1. Nokia 108 (250$)
${message.user.misc.phone === 2 ? '🔹' : '🔸'} 2. Nokia 3310 (2017) (500$)
${message.user.misc.phone === 3 ? '🔹' : '🔸'} 3. ASUS ZenFone 4 (2.000$)
${message.user.misc.phone === 4 ? '🔹' : '🔸'} 4. BQ Aquaris X (10.000$)
${message.user.misc.phone === 5 ? '🔹' : '🔸'} 5. Sony Xperia XA (15.000$)
${message.user.misc.phone === 6 ? '🔹' : '🔸'} 6. Samsung Galaxy S8 (30.000$)
${message.user.misc.phone === 7 ? '🔹' : '🔸'} 7. Xiaomi Mi Mix (50.000$)
${message.user.misc.phone === 8 ? '🔹' : '🔸'} 8. Torex FS1 (75.000$)
${message.user.misc.phone === 9 ? '🔹' : '🔸'} 9. iPhone X (100.000$)
${message.user.misc.phone === 10 ? '🔹' : '🔸'} 10. Мегафон С1 (250.000$)

Для покупки введите "Телефон [номер]"`);

	const sell = phones.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.phone) return bot(`у вас уже есть телефон (${phones[message.user.misc.phone - 1].name}), введите "Продать телефон"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.phone = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:питомцы)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`питомцы:
🐌 1. Улитка (1.000$)
🐸 2. Лягушка (25.000$)
🐰 3. Заяц (500.000$)
🐷 4. Свинья (300.000.000$)
🦊 5. Лиса (1.250.000.000$)
🐶 6. Собака (5.000.000.000$)
🐼 7. Панда (30.000.000.000$)
🦍 8. Горилла (180.000.000.000$)

🚩Для покупки введите "Питомцы [номер]"`);

	const sell = pets.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.pet) return bot(`у Вас уже есть питомец. ${smileerror}`);

	if(message.user.balance < sell.cost) return bot(`вам нужно ${utils.sp(sell.cost)}$ для покупки. ${smileerror}`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.pet = sell.id;
		message.user.pet.lvl += 1;

		return bot(`вы успешно купили себе питомца, отправляйте его в поход и прокачивайте его уровень. ${smilesuccess}`);
	}
});

cmd.hear(/^(?:питомец)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	else {
return bot(`информация:
🐌 Питомец: «${pets[message.user.misc.pet - 1].name}»
💳 Стоимость улучшения: ${utils.sp(petsupd[message.user.misc.pet - 1].cost*message.user.pet.lvl)}$
🌟 Уровень: ${message.user.pet.lvl}`);
}

});

cmd.hear(/^(?:промо бабки)$/i, async (message, bot) => {
if(message.isChat) return bot(`что бы получить бонус с промокода вы должны отправить этот промокод боту в личку.`);
if(message.user.promo) return bot(`вы уже активировали промокод. ${smileerror}`);
else 
{

	if(promo >= config.promolimit) return bot(`у этого промокода ЗАКОНЧИЛИСЬ ИСПОЛЬЗОВАНИЯ, включи уведомления в группе о новых записях что бы узнавать ОДНИМ ИЗ ПЕРВЫХ о новых промокодах. 📢`);
	if(config.promotip === "btc") message.user.btc += config.promovalue;
	if(config.promotip === "balance") message.user.balance += config.promovalue;
	message.user.promo = true;
	promo += 1;
	ostalos = config.promolimit-promo;
	return bot(`зачислено +${utils.sp(config.promovalue)}${config.promotip.toString().replace(/btc/gi, "฿").replace(/balance/gi, "$")} ✅
📢 Осталось ${ostalos} использований.`);

}

});

cmd.hear(/^(?:питомец улучшить)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	else {

		if(message.user.balance < petsupd[message.user.misc.pet - 1].cost) return bot(`недостаточно денег. ${smileerror}`);

		var priceupd = petsupd[message.user.misc.pet - 1].cost*message.user.pet.lvl;

		var lvlpoupd = message.user.pet.lvl+1;

		message.user.balance -= priceupd;
		message.user.pet.lvl += 1;

		return bot(`питомец был прокачен до ${lvlpoupd} уровня за ${utils.sp(priceupd)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);


}

});

cmd.hear(/^(?:питомец поход)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца. ${smileerror}`);
	else {
	console.log(`питомец поход отправил ид ${message.user.id}`);
		if(message.user.timers.poxod) return bot(`вы сможете отправить питомца в поход через 60 минут. Ваш питомец довольно сильно устал! ${smileerror}`);

		let cashfind = utils.random(pets[message.user.misc.pet-1].vp1,pets[message.user.misc.pet-1].vp2);
		message.user.balance += cashfind;
		message.user.timers.poxod = true;
		
		let text = ``;
		if(message.user.referal >= 0 & message.user.referal != null) {
		const mn = message.user.level;
		const pr = mn*2;
		var sum_d = Math.floor(cashfind * (pr/100));
		if (sum_d != 0 ) {
		text += `Произведены реферальные отчисления ${pr}% с дохода ${utils.sp(sum_d)}$\n`;
		let user = users.find(x=> x.uid === message.user.referal);
		user.refbalance += sum_d;
		}
		}
		
		

			setTimeout(() => {
				message.user.timers.poxod = false;
			}, 3600000);

		return bot(`ваш питомец нашёл в походе ${utils.sp(cashfind)}$. Улучшайте своего питомца! ${smilesuccess}
		${text}`);
}

});


cmd.hear(/^(?:рыбачить)$/i, async (message, bot) => {
if(!message.user.fish.ud) return bot(`У вас нет удочки, вначале купите удочку ${smileerror}`); 
if(!message.user.fish.lesok) return bot(`У вас нет лески, вначале купите леску ${smileerror}`); 
if(!message.user.fish.naz) return bot(`У вас нет наживки, вначале купите наживку ${smileerror}`); 

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждую минуту!`);
message.user.energy -= 1;

if (message.user.fish.ud == 1) {
var fish_get = utils.random(1,11);
var polomka = Number(utils.pick([1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0]));
};
if (message.user.fish.ud == 2) {
var fish_get = utils.random(12,22);
var polomka = Number(utils.pick([0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0]));
}
if (message.user.fish.ud == 3) {
var fish_get = utils.random(23,33);
var polomka = Number(utils.pick([0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0]));
}
if (message.user.fish.ud == 4) {
var fish_get = utils.random(34,44);
var polomka = Number(utils.pick([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0]));
}
var cost_fish = fish[fish_get - 1].cost;
var sorv2 = Number(utils.pick([0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0]));
var sorv = Number(utils.pick([0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0]));
message.user.fish.naz -= 1;	

if(message.user.energy < 1) {

if (sorv == 1) return bot(`Сожалеем :-( Рыба сорвалась

Энергия закончилась. ⚠`);
if (polomka == 1) {
message.user.fish.ud = 0;
return bot(`вам не повезло, Ваша удочка сломалась.
Энергия закончилась. ⚠`);
}
if (sorv2 == 1) {
message.user.fish.lesok -= 1;
return bot(`Сожалеем :-( Леска порвалась

Энергия закончилась. ⚠`);
}

message.user.fish.cost += cost_fish;
message.user.opit += 2;
return bot(`Вам попалась на крючок ${fish[fish_get - 1].name}
Продать рыбу команда продать рыбу
Опыт: ${message.user.opit}
Энергия закончилась. ⚠`);

saveUsers();
}
else 
{
if (sorv == 1) return bot(`Сожалеем :-( Рыба сорвалась
💡 Энергия: ${message.user.energy}`);
if (sorv2 == 1) {
message.user.fish.lesok -= 1;
return bot(`Сожалеем :-( Леска порвалась
💡 Энергия: ${message.user.energy}`);
}
if (polomka == 1) {
message.user.fish.ud = 0;
return bot(`вам не повезло, Ваша удочка сломалась.
💡 Энергия: ${message.user.energy}`);
}
message.user.fish.cost += cost_fish;
message.user.opit += 2;
return bot(`Вам попалась на крючок ${fish[fish_get - 1].name}
Продать рыбу команда продать рыбу

Опыт: ${message.user.opit}
💡 Энергия: ${message.user.energy}`);

saveUsers();
}

});

cmd.hear(/^(?:фермы)$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. 6U Nvidia 2₿/час (20.500.000$)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. AntminerS9 10₿/час (100.000.000$)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. FM2018-BT200 100₿/час (900.000.000$)
${message.user.misc.farm === 4 ? '🔹' : '🔸'} 4. Gеnеsis Mining 3.000₿/час (9.000.000.000$)
${message.user.misc.farm === 5 ? '🔹' : '🔸'} 5. GigаWаtt 25.000฿/час (90.000.000.000$)

Для покупки введите "Фермы [номер] [кол-во]"`);
		
});

cmd.hear(/^(?:фермы 1)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. 6U Nvidia 2₿/час (20.500.000$)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. AntminerS9 10₿/час (100.000.000$)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. FM2018-BT200 100₿/час (900.000.000$)
${message.user.misc.farm === 4 ? '🔹' : '🔸'} 4. Gеnеsis Mining 3.000₿/час (9.000.000.000$)
${message.user.misc.farm === 5 ? '🔹' : '🔸'} 5. GigаWаtt 25.000฿/час (90.000.000.000$)

Для покупки введите "Фермы [номер] [кол-во]"`);
var lvlimit = 50*message.user.level;
message.args[1] = Number(message.args[1]);
if(message.user.misc.farm != 0 & message.user.misc.farm != 1) return bot(`вы уже используете фермы другого производителя
одновременно можно использовать фермы одного производителя.
чтобы продать фермы введите Продать фермы`);
	if(message.user.farms >= message.user.farmslimit+lvlimit) return bot(`вы достигли лимита ферм. ${smileerror}`);
	var lf = message.user.farms + message.args[1];
	var pricefarms1 = 20500000*message.args[1];
	if(lf > message.user.farmslimit+lvlimit) return bot(`Нельзя купить сверх лимита!. ${smileerror}`);
	if(message.user.balance < pricefarms1) return bot(`недостаточно денег ${smileerror}`);
	else
	{

		

		message.user.balance -= pricefarms1;
		message.user.misc.farm = 1;

		if(message.user.misc.farm === 1) message.user.farms += Number(message.args[1]);
		else
		{

			message.user.farms = Number(message.args[1]);

		}

		saveUsers();
		return bot(`вы купили 6U Nvidia (x${Number(message.args[1])}) за ${utils.sp(pricefarms1)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
			
	}
});

cmd.hear(/^(?:фермы 2)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. 6U Nvidia 2₿/час (20.500.000$)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. AntminerS9 10₿/час (100.000.000$)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. FM2018-BT200 100₿/час (900.000.000$)
${message.user.misc.farm === 4 ? '🔹' : '🔸'} 4. Gеnеsis Mining 3.000₿/час (9.000.000.000$)
${message.user.misc.farm === 5 ? '🔹' : '🔸'} 5. GigаWаtt 25.000฿/час (90.000.000.000$)

Для покупки введите "Фермы [номер] [кол-во]"`);
var lvlimit = 50*message.user.level;
message.args[1] = Number(message.args[1]);
if(message.user.misc.farm != 0 & message.user.misc.farm != 2) return bot(`вы уже используете фермы другого производителя
одновременно можно использовать фермы одного производителя.
чтобы продать фермы введите Продать фермы`);
	if(message.user.farms >= message.user.farmslimit+lvlimit) return bot(`вы достигли лимита ферм. ${smileerror}`);
	var lf = message.user.farms + message.args[1];
	var pricefarms2 = 100000000*message.args[1];
	if(lf > message.user.farmslimit+lvlimit) return bot(`Нельзя купить сверх лимита!. ${smileerror}`);
	if(message.user.balance < pricefarms2) return bot(`недостаточно денег ${smileerror}`);
	else
	{

		

		message.user.balance -= pricefarms2;
		message.user.misc.farm = 2;

		if(message.user.misc.farm === 2) message.user.farms += Number(message.args[1]);
		else
		{

			message.user.farms = Number(message.args[1]);

		}

		saveUsers();
		return bot(`вы купили AntminerS9 (x${Number(message.args[1])}) за ${utils.sp(pricefarms2)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
			
	}
});

cmd.hear(/^(?:фермы 3)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. 6U Nvidia 2₿/час (20.500.000$)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. AntminerS9 10₿/час (100.000.000$)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. FM2018-BT200 100₿/час (900.000.000$)
${message.user.misc.farm === 4 ? '🔹' : '🔸'} 4. Gеnеsis Mining 3.000₿/час (9.000.000.000$)
${message.user.misc.farm === 5 ? '🔹' : '🔸'} 5. GigаWаtt 25.000฿/час (90.000.000.000$)

Для покупки введите "Фермы [номер] [кол-во]"`);
var lvlimit = 50*message.user.level;
message.args[1] = Number(message.args[1]);
if(message.user.misc.farm != 0 & message.user.misc.farm != 3) return bot(`вы уже используете фермы другого производителя
одновременно можно использовать фермы одного производителя.
чтобы продать фермы введите Продать фермы`);
	if(message.user.farms >= message.user.farmslimit+lvlimit) return bot(`вы достигли лимита ферм. ${smileerror}`);
	var lf = message.user.farms + message.args[1];
	var pricefarms3 = 900000000*message.args[1];
	if(lf > message.user.farmslimit+lvlimit) return bot(`Нельзя купить сверх лимита!. ${smileerror}`);
	if(message.user.balance < pricefarms3) return bot(`недостаточно денег ${smileerror}`);
	else
	{

		

		message.user.balance -= pricefarms3;
		message.user.misc.farm = 3;

		if(message.user.misc.farm === 3) message.user.farms += Number(message.args[1]);
		else
		{

			message.user.farms = Number(message.args[1]);

		}

		saveUsers();
		return bot(`вы купили FM2018-BT200 (x${Number(message.args[1])}) за ${utils.sp(pricefarms3)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
			
	}
});

cmd.hear(/^(?:фермы 4)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. 6U Nvidia 2₿/час (20.500.000$)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. AntminerS9 10₿/час (100.000.000$)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. FM2018-BT200 100₿/час (900.000.000$)
${message.user.misc.farm === 4 ? '🔹' : '🔸'} 4. Gеnеsis Mining 3.000₿/час (9.000.000.000$)
${message.user.misc.farm === 5 ? '🔹' : '🔸'} 5. GigаWаtt 25.000฿/час (90.000.000.000$)

Для покупки введите "Фермы [номер] [кол-во]"`);
var lvlimit = 50*message.user.level;
if(message.user.misc.farm != 0 & message.user.misc.farm != 4) return bot(`вы уже используете фермы другого производителя
одновременно можно использовать фермы одного производителя.
чтобы продать фермы введите Продать фермы`);
	if(message.user.farms >= message.user.farmslimit+lvlimit) return bot(`вы достигли лимита ферм. ${smileerror}`);
	var lf = message.user.farms + Number(message.args[1]);
	var pricefarms4 = 9000000000*message.args[1];
	if(lf > message.user.farmslimit+lvlimit) return bot(`Нельзя купить сверх лимита!. ${smileerror}`);
	if(message.user.balance < pricefarms4) return bot(`недостаточно денег ${smileerror}`);
	else
	{

		message.user.balance -= pricefarms4;
		message.user.misc.farm = 4;

		if(message.user.misc.farm === 4) message.user.farms += Number(message.args[1]);
		else
		{

			message.user.farms = Number(message.args[1]);

		}

		saveUsers();
		return bot(`вы купили Gеnеsis Mining (x${Number(message.args[1])}) за ${utils.sp(pricefarms4)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
			
	}
});

cmd.hear(/^(?:фермы 5)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. 6U Nvidia 2₿/час (20.500.000$)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. AntminerS9 10₿/час (100.000.000$)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. FM2018-BT200 100₿/час (900.000.000$)
${message.user.misc.farm === 4 ? '🔹' : '🔸'} 4. Gеnеsis Mining 3.000₿/час (9.000.000.000$)
${message.user.misc.farm === 5 ? '🔹' : '🔸'} 5. GigаWаtt 25.000฿/час (90.000.000.000$)

Для покупки введите "Фермы [номер] [кол-во]"`);
var lvlimit = 50*message.user.level;
if(message.user.misc.farm != 0 & message.user.misc.farm != 5) return bot(`вы уже используете фермы другого производителя
одновременно можно использовать фермы одного производителя.
чтобы продать фермы введите Продать фермы`);
	if(message.user.farms >= message.user.farmslimit+lvlimit) return bot(`вы достигли лимита ферм. ${smileerror}`);
	var lf = message.user.farms + Number(message.args[1]);
	var pricefarms5 = 90000000000*message.args[1];
	if(lf > message.user.farmslimit+lvlimit) return bot(`Нельзя купить сверх лимита!. ${smileerror}`);
	if(message.user.balance < pricefarms5) return bot(`недостаточно денег ${smileerror}`);
	else
	{

		message.user.balance -= pricefarms5;
		message.user.misc.farm = 5;

		if(message.user.misc.farm === 5) message.user.farms += Number(message.args[1]);
		else
		{

			message.user.farms = Number(message.args[1]);

		}

		saveUsers();
		return bot(`вы купили GigаWаtt (x${Number(message.args[1])}) за ${utils.sp(pricefarms5)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
			
	}
});

cmd.hear(/^(?:лицензия)$/i, async (message, bot) => {
/*if(message.user.settings.tabirat>0) return bot(`У Вас уже есть лицензия на Табират`);
if(message.user.balance < 1000000000000000) return bot(`Не достаточно денег, лицензия стоит ${utils.sp(1000000000000000)}$`);
message.user.balance -= 1000000000000000;
message.user.settings.tabirat = 1;
bot(`Ураааааа Вы обладатель лицензии NoCop Для Табират Скрипт`);
saveUsers();		*/
return bot(`Продажа лицензий через бота прекращена
Купить лицензию можно через кнопку пожертвование в меню биндера
Стоимость 100 руб. При оплате указывать комментарием ид в табирате
Для рп1 можно приобрести за вирты, 1.000.000$
У вас в наличии лицензий: ${message.user.settings.lic} шт.

Для выдачи лицензии игроку введите выдать лицензию [ид_табират]`);
});

cmd.hear(/^(?:создать ип)$/i, async (message, bot) => {
if (message.user.settings.adm < 3) return bot(`Нет прав для создания ИП`);
ip_biz.push({
id: ip_biz.length,
vlad: message.user.uid,
name: message.user.tag
});		
bot(`Тестовое ИП создано`);
saveBussines();
});

cmd.hear(/^(?:купить газету)\s(.*)$/i, async (message, bot) => {
if(!message.args[1]) return bot(`Укажите название газеты`);
if(message.user.balance < 30000000000000000) return bot(`У вас нет денег для покупки газеты
Что бы открыть свою редакцию требуется 100.000.000.000.000.000$`);
if(message.user.level < 5) return bot(`Вы слишком молоды что бы открыть свою редакцию`);
message.user.balance -= 30000000000000000;
message.user.gazeta.name = message.args[1];
bot(`Поздравляем! Вы открыли свою редакцию
Что бы публиковать новости в своей газете используйте команду
публикация [текст]

Ваш баланс ${utils.sp(message.user.balance)}$`);
saveUsers();
});

cmd.hear(/^(?:upd)\s(.*)$/i, async (message, bot) => {
if(!message.args[1]) return bot(`Укажите id игрока в табират`);
if(message.user.settings.adm< 1) return bot(`Команда только для админов`);
const rq = await request('http://f0447572.xsph.ru/update/tex/UpdateID/b_add.php?num=' + message.args[1] +'&name=' + message.user.settings.admn + '&k=dgajlkdwtgcbshjk');
return bot('ok');
});
cmd.hear(/^(?:noupd)\s(.*)$/i, async (message, bot) => {
if(!message.args[1]) return bot(`Укажите id игрока в табират`);
if(message.user.settings.adm< 1) return bot(`Команда только для админов`);
const rq = await request('http://f0447572.xsph.ru/update/tex/UpdateID/b_del.php?num=' + message.args[1] +'&name=' + message.user.settings.admn + '&k=dgajlkdwtgcbshjk');
return bot('ok');
});
cmd.hear(/^(?:nickname)\s(.*)$/i, async (message, bot) => {
if(!message.args[1]) return bot(`Укажите id игрока в табират`);
if(message.user.settings.adm< 1) return bot(`Команда только для админов`);
const rq = await request('http://f0447572.xsph.ru/update/tex/NickUpdate/b_add.php?num=' + message.args[1] +'&name=' + message.user.settings.admn + '&k=dgajlkdwtgcbshjk');
return bot('ok');
});
cmd.hear(/^(?:nonickname)\s(.*)$/i, async (message, bot) => {
if(!message.args[1]) return bot(`Укажите id игрока в табират`);
if(message.user.settings.adm< 1) return bot(`Команда только для админов`);
const rq = await request('http://f0447572.xsph.ru/update/tex/NickUpdate/b_del.php?num=' + message.args[1] +'&name=' + message.user.settings.admn + '&k=dgajlkdwtgcbshjk');
return bot('ok');
});
cmd.hear(/^(?:lock)\s(.*)$/i, async (message, bot) => {
if(!message.args[1]) return bot(`Укажите id игрока в табират`);
if(message.user.settings.adm< 1) return bot(`Команда только для админов`);
const rq = await request('http://f0447572.xsph.ru/update/tex/lockID/b_add.php?num=' + message.args[1] +'&name=' + message.user.settings.admn + '&k=dgajlkdwtgcbshjk');
return bot('ok');
});
cmd.hear(/^(?:unlock)\s(.*)$/i, async (message, bot) => {
if(!message.args[1]) return bot(`Укажите id игрока в табират`);
if(message.user.settings.adm< 1) return bot(`Команда только для админов`);
const rq = await request('http://f0447572.xsph.ru/update/tex/lockID/b_del.php?num=' + message.args[1] +'&name=' + message.user.settings.admn + '&k=dgajlkdwtgcbshjk');
return bot('ok');
});
cmd.hear(/^(?:infolic)\s(.*)$/i, async (message, bot) => {
if(!message.args[1]) return bot(`Укажите id игрока в табират`);
//if(message.user.settings.adm< 1) return bot(`Команда только для админов`);
var zp = message.args[1];
const rrq = await request('http://f0447572.xsph.ru/user_tabirat/id_tabirat/info.php?i=' + zp);
if (!rrq) {
const rrd = await request('http://f0447572.xsph.ru/user_tabirat/id_user/info.php?i=' + zp);
if (!rrd) return bot('не знаю, на сервере игрока с таким id не найдено');
var txt = ``;
txt += `Информация по вашему запросу\n`;
txt += `Уникальный id игрока: ${rrd.id_tabirat} \n`;
txt += `Установленный id игрока: ${rrd.id_user} \n`;
txt += `Ник владельца лицензии: ${rrd.nick} \n`;
const rrz = await request('http://f0447572.xsph.ru/tabirat_activ/b_info.php?i=' + rrd.id_user)
if (rrz.status) txt += `Статус лицензии: ${rrz.status} \n`; 
if (!rrd.site) {
}
else
{
txt += `Страница владельца лицензии в вконтакте: ${rrd.site} \n`;
}
txt += `Администратор выдавший лицензию: ${rrd.admin} \n\n P.S Ники пишу без пробелов`;
return bot(txt);
}
var txt = ``;//
txt += `Информация по вашему запросу\n`;
txt += `Уникальный id игрока: ${rrq.id_tabirat} \n`;
txt += `Установленный id игрока: ${rrq.id_user} \n`;
txt += `Ник владельца лицензии: ${rrq.nick} \n`;
const rrz2 = await request('http://f0447572.xsph.ru/tabirat_activ/b_info.php?i=' + rrq.id_user)
if (rrz2.status) txt += `Статус лицензии: ${rrz2.status} \n`; 
if (!rrq.site) {
}	
else {
txt += `Страница владельца лицензии в вконтакте: ${rrq.vk} \n`;
}
txt += `Администратор выдавший лицензию: ${rrq.admin} \n\n P.S Ники пишу без пробелов`;
return bot(txt);
});
cmd.hear(/^(?:активировать)\s(.*)$/i, async (message, bot) => {
if(message.isChat) return bot(`Эта команда работает тольк в лс.
Напиши @game_tabirat (Мне) сладкий`);
if(!message.args[1]) return bot(`Укажите код активации`);
if(message.args[1] == '0') return bot(`Не верный код активации`);
var c_active = message.args[1];
const as = await request('http://f0505956.xsph.ru/ac.php?t=activate&code=' + c_active + '&vk=' + message.user.id);
if (!as) return bot(`Ошибка активации, возможно биндер уже активирован или не верный код активации
Если биндер неактивен, и код верный обратитесь к разработчику`);
if (as.status == 'ok') 
{
if (!as.id) return bot(`Спасибо за информацию, биндер активирован
Для начала использования перезагрузите биндер
Приятной игры :-)`);
return bot(`У вас уже есть лицензия на биндер с id ${as.id}
Если у вас сменился номер ID свяжитесь с администратором`);
}
else
return bot(`⚠ Ошибка активации, возможно биндер уже активирован или не верный код активации
Если биндер неактивен, и код верный обратитесь к @kmatsepuro (разработчику)`);	



});
cmd.hear(/^(?:setlic)\s(блок|тестер|nocop|noserver|стандарт)\s(.*)$/i, async (message, bot) => {
		if(message.user.settings.adm< 1) return bot(`Команда только для админов`);
		if (!message.args[2]) return bot(`укажи ид игрока`);
		const nav = Number(message.args[1].toLowerCase().replace(/блок/, '1').replace(/тестер/, '2').replace(/стандарт/, '3').replace(/nocop/, '4').replace(/noserver/, '5'));
		if (!nav) return bot(`Выберите один из вариантов блок,тестер,nocop,noserver,стандарт`);
		const set_l = await request('http://f0447572.xsph.ru/tabirat_activ/b_info.php?n=' + message.user.settings.admn + '&d=1&i=' + message.args[2] + '&t=' + nav);
		if (!set_l.s) return bot(`ошибка в выполнении запроса`);
		if (set_l.s == 'st') return bot(`Статус "Стандарт" установлен для лицензии с id ${message.args[2]}`);
		if (set_l.s == 'bl') return bot(`Статус "Блокировка" установлен для лицензии с id ${message.args[2]}`);
		if (set_l.s == 'nc') return bot(`Статус "NoCop" установлен для лицензии с id ${message.args[2]}`);
		if (set_l.s == 'ns') return bot(`Статус "NoServer" установлен для лицензии с id ${message.args[2]}`);
		if (set_l.s == 't') return bot(`Статус "Тестер" установлен для лицензии с id ${message.args[2]}`);
		if (set_l.s == 'no') return bot(`Ошибка в установке статуса для ID ${message.args[2]}`);
		if (set_l.s == 'na') return bot(`Извините, но я не нашел ид ${message.args[2]}`);
});
cmd.hear(/^(?:выдать лицензию)\s(.*)$/i, async (message, bot) => {
		if(message.user.settings.lic< 1) return bot(`Команда только для админов`);
		if (!message.args[1]) return bot(`укажи ид игрока`);
		const set_l = await request('http://f0447572.xsph.ru/tabirat_activ/b_info.php?n=SystemAdministrator&d=1&i=' + message.args[1] + '&t=4');
		if (!set_l.s) return bot(`ошибка в выполнении запроса`);
		if (set_l.s == 'nc') {
		message.user.settings.lic-=1
		return bot(`Статус "NoCop" установлен для лицензии с id ${message.args[1]}
		У вас осталось лицензий: ${message.user.settings.lic} шт.`);
		}
		if (set_l.s == 'na') return bot(`Извините, но я не нашел ид ${message.args[2]}`);
});
cmd.hear(/^(?:ответить)\s(.*)\s?(.*)?$/i, async (message, bot) => {
		if(message.user.settings.adm< 1) return bot(`Команда только для админов`);
		message.args[2] = message.args[1].split(' ')[1];
		if (!message.args[1]) return bot(`укажи ид игрока`);
		if (!message.args[2]) return bot(`укажите текст`);
		const ot = await request('http://f0447572.xsph.ru/update/tex/b_add.php?k=dgajlkdwtgcbshjk&n=' + message.user.settings.adm + '&id=' + message.args[1] + '&msg=' + message.args[2]);
		if (!ot.result) return bot(`ошибка в выполнении запроса`);
		if (ot.result == 'no') return bot(`Ответ не был отправлен игроку`);
		if (ot.result == 'ok') return bot(`Как скажите повелитель, отправили письмецо в конверте игроку с id ${message.args[1]}`);

});
cmd.hear(/^(?:deletelic)\s(.*)$/i, async (message, bot) => {
if(!message.args[1]) return bot(`Укажите уникальный id табират`);
if(message.user.settings.adm< 1) return bot(`Команда только для админов`);
const rq = await request('http://f0447572.xsph.ru/user_tabirat/id_tabirat/info.php?i=' + message.args[1]);
if(!rq) return bot('посмотри, помоему ты ошибся с id, такой лицензии нет на сервере');
if(!rq.id_user) return bot('не удалось определить установленный ид');
const id_user = rq.id_user;
if(!rq.id_tabirat) return bot('не удалось определить системный ид');
const id_tabirat = rq.id_tabirat;
var nick = "1";
if(!rq.nick)
{
bot('лицензия найдена, но ник не определен');
nick = rq.id_tabirat;
}
else
{
nick = rq.nick;
}

bot(nick);
bot(id_tabirat);
bot(id_user);

const rw = await request('http://f0447572.xsph.ru/b_del.php?id_user=' + id_user +'&id_tabirat=' + id_tabirat + '&nick='+ nick +'&name=' + message.user.settings.admn + '&k=dgajlkdwtgcbshjk');

return bot('Ok');
});
cmd.hear(/^(?:ahelp)$/i, async (message, bot) => {
return bot(`
upd [id_user] - Установить автоматическое обновление
noupd [id_user] - Отменить автоматическое обновление
nickname [id_user] - Установить принудительную установку ника
nonickname [id_user] - Отменить принудительную установку ника
lock [id_user] - Заблокировать запуск скрипта игроку
unlock [id_user] - Разблокировать запуск скрипта игроку
deletelic [id_tabirat] - Удалить лицензию, указывать именно ид Табират
infolic [id_user / id_tabirat] - Получить информацию о лицензии
setlic [блок|тестер|nocop|noserver|стандарт] [id_user] - установить статус лицензии
`);

});
cmd.hear(/^(?:публикация)\s([^]+)$/i, async (message, bot) => {
if(message.isChat) return bot(`команда работает только в ЛС.`);
if(!message.user.gazeta.name) return bot(`У вас нет своей газеты`);
if(message.user.balance < 10000000) bot(`Нет денег для публикации
Стоимость публикации 1 новости 10.000.000$`);
var g_name = message.user.gazeta.name;
users.filter(x=> x.id !== 1).map(zz => { 
vk.api.messages.send({ user_id: zz.id, message: `Публикация в газету: ${g_name}
${message.args[1]}

Если новость в газете оскробительна или нарушает правила этики
просьба переслать это сообщение в репорт`}); 
}); 
let people = 0;
message.user.balance -= 10000000;
bot(`новость в газету отправлена
за публикацию списана сумма 10.000.000$
ваш баланс ${utils.sp(message.user.balance)}$`);
for(let id in users) {
vk.api.call('messages.send', {
chat_id: id,
message: `Публикация в газету: ${g_name}
${message.args[1]}

Если новость в газете оскробительна или нарушает правила этики
просьба переслать это сообщение в репорт` });
}
return;
});
cmd.hear(/^(?:рейтинг)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * 250000000 ) > message.user.balance) return bot(`у вас недостаточно денег`);
	else if(( message.args[1] * 250000000 ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * 250000000 );
		message.user.rating += message.args[1];

		return bot(`вы повысили свой рейтинг на ${utils.sp(message.args[1])}👑 за ${utils.sp(message.args[1] * 250000000)}$`);
	}
});
cmd.hear(/^(?:бизнесы)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`бизнесы:
${message.user.business === 1 ? '🔸' : '🔹'} 1. Шаурмичная - 50.000$
⠀ ⠀ ⠀ Прибыль: 400$/час
${message.user.business === 2 ? '🔸' : '🔹'} 2. Ларёк - 100.000$
⠀ ⠀ ⠀ Прибыль: 700$/час
${message.user.business === 3 ? '🔸' : '🔹'} 3. Ресторан - 300.000$
⠀ ⠀ ⠀ Прибыль: 2.500$/час
${message.user.business === 4 ? '🔸' : '🔹'} 4. Магазин - 500.000$
⠀ ⠀ ⠀ Прибыль: 3.800$/час
${message.user.business === 5 ? '🔸' : '🔹'} 5. Завод - 1.500.000$
⠀ ⠀ ⠀ Прибыль: 8.000$/час
${message.user.business === 6 ? '🔸' : '🔹'} 6. Шахта - 25.000.000$
⠀ ⠀ ⠀ Прибыль: 70.000$/час
${message.user.business === 7 ? '🔸' : '🔹'} 7. Офис - 80.000.000$
⠀ ⠀ ⠀ Прибыль: 220.000$/час
${message.user.business === 8 ? '🔸' : '🔹'} 8. Разработка игр - 150.000.000$
⠀ ⠀ ⠀ Прибыль: 300.000$/час
${message.user.business === 9 ? '🔸' : '🔹'} 9. Нефтевышка - 500.000.000$
⠀ ⠀ ⠀ Прибыль: 700.000$/час
${message.user.business === 10 ? '🔸' : '🔹'} 10. Атомная электростанция - 800.000.000$
⠀ ⠀ ⠀ Прибыль: 1.000.000$/час
${message.user.business === 11 ? '🔸' : '🔹'} 11. Космическое агентство - 50.000.000.000$
⠀ ⠀ ⠀ Прибыль: 50.000.000$/час
${message.user.business === 12 ? '🔸' : '🔹'} 12. Империя Табират - 200.000.000.000$
⠀ ⠀ ⠀ Прибыль: 1.000.000.000$/час
Для покупки введите "Бизнесы [номер]"`);

	const sell = businesses.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.business) return bot(`у вас уже есть бизнес (${businesses[message.user.business - 1].name}), введите "Продать бизнес"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= message.args[1])
	{
		message.user.balance -= sell.cost;
		message.user.business = sell.id;
		message.user.bizlvl = 1;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});
cmd.hear(/^(?:курс)$/i, async (message, bot) => {
	var kp = btc + 10000;
	return bot(`курс валют на данный момент:
💸Биткоин продажа: ${utils.sp(btc)}$
💸Биткоин покупка: ${utils.sp(kp)}$`);
});
cmd.hear(/^(?:биткоин)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * (btc+10000)) > message.user.balance) return bot(`недостаточно денег
Курс биткоина покупки: ${btc+10000}$`);
	else if(( message.args[1] * (btc+10000)) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * (btc+10000) );
		message.user.btc += message.args[1];

		return bot(`вы купили ${utils.sp(message.args[1])}₿ за ${utils.sp(message.args[1] * (btc+10000))}$`);
	}
});
cmd.hear(/^(?:топ)$/i, async (message, bot) => {
	let top = [];

	users.map(x=> {
		top.push({ balance: x.balance, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.rating - a.rating;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — 👑${utils.sp(user.rating)} | $${utils.rn(user.balance)}
		`;
	}

	return bot(`топ игроков:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — 👑${utils.sp(message.user.rating)} | $${utils.rn(message.user.balance)}`);
});
cmd.hear(/^(?:бонус|🔑 Бонус|@game_tabirat 🔑 Бонус)$/i, async (message, bot) => {

	if(message.user.timers.bonus) return bot(`бонус можно получить раз в 24 часа ${smileerror}`);

	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

	setTimeout(() => {
		message.user.timers.bonus = false;
	}, 86400000);

	message.user.timers.bonus = true;


	if(prize === 1)
	{
		message.user.balance += 50000;
		return bot(`вы выиграли 50.000$ ${smilesuccess}`);
	}

	if(prize === 2)
	{
		message.user.btc += 1000;
		return bot(`вы выиграли 1.000₿ ${smilesuccess}`);
	}

	if(prize === 3)
	{
		message.user.rating += 5;
		return bot(`вы выиграли 5👑`);
	}

	if(prize === 4)
	{
		message.user.rating += 1;
		return bot(`вы выиграли 1👑`);
	}

	if(prize === 5)
	{
		message.user.rating += 10;
		return bot(`вы выиграли 10👑`);
	}

	if(prize === 6)
	{
		message.user.rating += 2;
		return bot(`вы выиграли 2👑`);
	}
	if(prize === 7)
	{
		message.user.rating += 3;
		return bot(`вы выиграли 3👑`);
	}
	if(prize === 8)
	{
		message.user.rating += 4;
		return bot(`вы выиграли 4👑`);
	}
	if(prize === 9)
	{
		message.user.bank += 1000000;
		return bot(`вы выиграли 1.000.000$ на свой банковский счёт ${smilesuccess}`);
	}
	if(prize === 10)
	{
		message.user.bank += 5000000;
		return bot(`вы выиграли 5.000.000$ на свой банковский счёт ${smilesuccess}`);
	}

	if(prize === 11)
	{
		message.user.bank += 10000000;
		return bot(`вы выиграли 10.000.000$ на свой банковский счёт ${smilesuccess}`);
	}

	if(prize === 12)
	{
		message.user.bank += 50000000;
		return bot(`вы выиграли 50.000.000$ на свой банковский счёт ${smilesuccess}`);
	}
});
cmd.hear(/^(?:поход)$/i, async (message, bot) => {

	if(message.user.timers.poxod2) return bot(`вы сегодня уже были в походе. ${smileerror}`);

	let prize2 = utils.pick([1, 2, 3, 4, 5, 6, 7, 8]);

	setTimeout(() => {
		message.user.timers.poxod2 = false;
	}, 86400000);

	message.user.timers.poxod2 = true;


	if(prize2 === 1)
	{
		
	let text = ``;
		if(message.user.referal >= 0 & message.user.referal != null) {
		const mn = message.user.level;
		const pr = mn*2;
		var sum_d = Math.floor(50000 * (pr/100));
		if (sum_d != 0 ) {
		text += `Произведены реферальные отчисления ${pr}% с дохода ${utils.sp(sum_d)}$\n`;
		let user = users.find(x=> x.uid === message.user.referal);
		user.refbalance += sum_d;
		}
		}	
		
		message.user.balance += 50000;
		return bot(`находясь в походе, вы нашли 50.000$ ${smilesuccess}
		${text}`);
	}

	if(prize2 === 2)
	{
		message.user.btc += 1000;
		return bot(`находясь в походе, вы нашли 1.000₿ ${smilesuccess}`);
	}

	if(prize2 === 3)
	{
		message.user.rating += 5;
		return bot(`находясь в походе, вы нашли 5👑`);
	}

	if(prize2 === 4)
	{
		message.user.rating += 1;
		return bot(`находясь в походе, вы нашли 1👑`);
	}

	if(prize2 === 5)
	{
		message.user.rating += 10;
		return bot(`находясь в походе, вы нашли 10👑`);
	}

	if(prize2 === 6)
	{
		message.user.rating += 2;
		return bot(`находясь в походе, вы нашли 2👑`);
	}
	if(prize2 === 7)
	{
		message.user.rating += 3;
		return bot(`находясь в походе, вы нашли 3👑`);
	}
	if(prize2 === 8)
	{
		message.user.rating += 4;
		return bot(`находясь в походе, вы нашли 4👑`);
	}
});

cmd.hear(/^(?:брак)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.marriage.partner) return bot(`вы уже в браке с игроком ${users[message.user.marriage.partner].tag}`);
	if(Number(message.args[1]) === message.user.uid) return bot(`вы не можете жениться/выйти замуж за себя`);

	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

	if(user.marriage.partner) return bot(`этот человек уже состоит в браке`);

	if(user.marriage.requests.find(x=> x == message.args[1])) return bot(`вы уже делали предложение этому игроку`);

	if(message.user.marriage.requests.find(x=> x == message.args[1]))
	{
		message.user.marriage.requests = [];
		message.user.marriage.partner = user.uid;

		user.marriage.requests = [];
		user.marriage.partner = message.user.uid;

		return bot(`вы вступили в брак с игроком "${user.tag}"`);
	}

	user.marriage.requests.push(message.user.uid);
	return bot(`вы сделали предложение игроку "${user.tag}"`);
});

cmd.hear(/^(?:браки)$/i, async (message, bot) => {
	if(message.user.marriage.partner) return bot(`вы уже состоите в браке`);
	return bot(`предложения:
		${message.user.marriage.requests.map(x=> `от игрока "${users[x].tag}" (ID: ${x})`).join('\n')}`);
});

cmd.hear(/^(?:развод)$/i, async (message, bot) => {
	if(!message.user.marriage.partner) return bot(`вы не состоите в браке`);

	let user = users.find(x=> x.uid === message.user.marriage.partner);

	message.user.marriage.partner = 0;
	user.marriage.partner = 0;

	return bot(`вы теперь свободный человек`);
});

cmd.hear(/^(?:дата)\s([0-9]+)$/i, async (message, bot) => {
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

	return bot(`дата регистрации ${user.tag}: ${user.regDate}`);
});

cmd.hear(/^(?:сообщение|написать в редакцию|в редакцию|ред)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	if(message.isChat) return bot(`Команда работает только в ЛС.`);
	const user = await users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`укажите ид газеты`);
	if(!user.gazeta.name) return bot(`такой газеты не существует`);
	vk.api.messages.send({ user_id: user.id, forward_messages: message.id, message: `Сообщение в редакцию от игрока с ID: ${message.user.uid}` }).then(() => {
		return bot(`ваше сообщение отправлено.`);
	}).catch((err) => {
		return bot(`Ошибка отправки`);
	});
});


cmd.hear(/^(?:репорт|реп|rep|жалоба)\s([^]+)$/i, async (message, bot) => {
	if(message.isChat) return bot(`команда работает только в ЛС.`);
	
	vk.api.messages.send({ user_id: config.ownerid, forward_messages: message.id, message: `Player id: ${message.user.uid}` }).then(() => {
		return bot(`ваше сообщение отправлено.`);
	}).catch((err) => {
		return bot(`укажите свой ID в файле /database/settings.json`);
	});
});

cmd.hear(/^(?:ответ)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	if(message.user.settings.adm < 1) return;

	const user = await users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return;

	vk.api.messages.send({ user_id: user.id, message: `✉ Сообщение от администратора:
	Язык: 🇷🇺
	
	${message.args[2]}` });
});

cmd.hear(/^(?:реши)\s([0-9]+)\s(\+|\-|\/|\*)\s([0-9]+)$/i, async (message, bot) => {
	const result = eval(`${message.args[1]} ${message.args[2]} ${message.args[3]}`);
	return bot(`${message.args[1]} ${message.args[2]} ${message.args[3]}=${result}`);
});

cmd.hear(/^(?:работа)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);

	const work = works.find(x=> x.id === Number(message.args[1]));
	if(!work) return console.log(message.args[1]);

	if(work.requiredLevel > message.user.level) return bot(`вы не можете устроиться на эту работу!`);
	else if(work.requiredLevel <= message.user.level)
	{
		message.user.work = work.id;
		return bot(`вы устроились работать в Общее - ${work.name}
		👔 Введите команду "Работать"`);
	}
});

cmd.hear(/^(?:работа)$/i, async (message, bot) => {
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);
	return bot(`профессии:
	🔹 1. Дворник - зарплата ~12.500$
	🔹 2. Сантехник - зарплата ~22.500$
	🔹 3. Электрик - зарплата ~25.000$
	🔹 4. Слесарь - зарплата ~30.000$
	🔹 5. Юрист - зарплата ~45.000$
	🔹 6. Бухгалтер - зарплата ~55.000$
	🔹 7. Бармен - зарплата ~60.000$
	🔹 8. Администратор - зарплата ~75.000$
	🔹 9. Программист - зарплата ~100.000$
	Для трудоустройства введите "Работа [номер]`);
});

cmd.hear(/^(?:работать)$/i, async (message, bot) => {
	if(!message.user.work) return bot(`вы нигде не работаете 😩
	Для трудоустройства введите "Работа"`);

	if(message.user.timers.hasWorked) return bot(`рабочий день закончен.
	⏳ Вы сможете работать в ближайшие 10 минут`);

	setTimeout(() => {
		message.user.timers.hasWorked = false;
	}, 600000);

	message.user.timers.hasWorked = true;

	const work = works.find(x=> x.id === message.user.work);
	const earn = utils.random(work.min, work.max);


	let text = ``;
		if(message.user.referal >= 0 & message.user.referal != null) {
		const mn = message.user.level;
		const pr = mn*2;
		var sum_d = Math.floor(earn * (pr/100));
		if (sum_d != 0 ) {
		text += `Произведены реферальные отчисления ${pr}% с дохода ${utils.sp(sum_d)}$\n`;
		let user = users.find(x=> x.uid === message.user.referal);
		user.refbalance += sum_d;
		}
		}


	message.user.balance += Math.floor(earn*0.87);
	message.user.exp += 1;
	
	let user2 = users.find(x=> x.uid === 0);
		let b = Math.floor(earn * 0.13);
		user2.bank += b;
	

	return bot(`рабочий день закончен 
	💵 Вы заработали ${utils.sp(Math.floor(earn*0.87))}$
	${text}
	Подоходный налог 13% переведены в банк
	Сумма подоходного налога ${utils.sp(b)}$`);
});

cmd.hear(/^(?:уволиться)$/i, async (message, bot) => {
	if(!message.user.work) return bot(`вы нигде не работаете`);
	
	message.user.work = 0;
	return bot(`вы уволились со своей работы`);
});

cmd.hear(/^(?:кубик|куб)\s([1-6])$/i, async (message, bot) => {
	const int = utils.pick([1, 2, 3, 4, 5, 6]);
	if(int == message.args[1])
	{
		message.user.balance += 2000000;
		
		let text = ``;
		if(message.user.referal >= 0 & message.user.referal != null) {
		const mn = message.user.level;
		const pr = mn*2;
		var sum_d = Math.floor(2000000 * (pr/100));
		if (sum_d != 0 ) {
		text += `Произведены реферальные отчисления ${pr}% с дохода ${utils.sp(sum_d)}$\n`;
		let user = users.find(x=> x.uid === message.user.referal);
		user.refbalance += sum_d;
		}
		}
		
		
		return bot(`вы угадали! Приз 2.000.000$
		${text}`);
	} else return bot(`не угадали 
	🎲 Выпало число ${int}`);
});

cmd.hear(/^(?: )\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
	let smilekazinobad2 = utils.pick([`😒`, `😯`, `😔`]);
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.balance) return bot(`на вашем балансе нет столько денег! ${smileerror}`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		const multiply = utils.pick([0.25, 0.75, 0.5, 0.5, 0.5, 0.5, 0.50, 0.50, 0.75, 0.75, 0.25, 1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 1, 1, 1, 1, 2, 2]);

		message.user.balance += Math.floor(message.args[1] * multiply);
		return bot(`${multiply === 1 ? `ваши деньги остаются при вас ${smilesuccess}` : `${multiply < 1 ? `вы проиграли ${utils.sp(message.args[1] * multiply)}$ ${smileerror}` : `вы выиграли ${utils.sp(message.args[1] * multiply)}$ ${smilesuccess}`}`} (x${multiply})
		💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:трейд)\s(вверх|вниз)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	let smilekazinobad = utils.pick([`😒`, `😯`, `😔`, `😕`]);

	if(message.args[2] > message.user.balance) return bot(`у Вас недостаточно денег ${smilekazinobad}`);
	if(message.args[2] <= 50) return bot(`ставка должна быть больше 50$ ${smilekazinobad}`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const rand = utils.pick([0, 1]);
		const nav = Number(message.args[1].toLowerCase().replace(/вверх/, '1').replace(/вниз/, '2'));

		if(rand === nav)
		{
			const multiply = utils.pick([0.75, 0.80, 0.90, 0.95, 1.25, 1.5, 1.75, 2, 2.5]);
			message.user.balance += message.args[2] + (Math.floor(message.args[2] * multiply));



		let text = ``;
		if(message.user.referal >= 0 & message.user.referal != null) {
		const mn = message.user.level;
		const pr = mn*2;
		var sum_d = Math.floor((message.args[2] * multiply) * (pr/100));
		if (sum_d != 0 ) {
		text += `Произведены реферальные отчисления ${pr}% с дохода ${utils.sp(sum_d)}$\n`;
		let user = users.find(x=> x.uid === message.user.referal);
		user.refbalance += sum_d;
		}
		}


			return bot(`курс ${nav === 1 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}$
			✅ Вы заработали +${message.args[2] * multiply}$
			💰 Баланс: ${message.user.balance}$
			${text}`);
		} else {
			return bot(`курс ${nav === 2 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}$
			❌ Вы потеряли ${message.args[2]}$ 
			💰 Баланс: ${message.user.balance}`);
		}
	}
});

cmd.hear(/^(?:стаканчик)\s([1-3])\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`у Вас недостаточно денег 😔
💰 Ваш баланс: ${message.user.balance}$`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const multiply = utils.pick([0.95, 0.90, 0.85, 0.80, 0.75, 0.70, 0.65]);
		const cup = utils.random(1, 3);

		if(cup == message.args[1])
		{
			message.user.balance += Math.floor(message.args[2] * multiply);
			
			
		let text = ``;
		if(message.user.referal >= 0 & message.user.referal != null) {
		const mn = message.user.level;
		const pr = mn*2;
		var sum_d = Math.floor((message.args[2] * multiply) * (pr/100));
		if (sum_d != 0 ) {
		text += `Произведены реферальные отчисления ${pr}% с дохода ${utils.sp(sum_d)}$\n`;
		let user = users.find(x=> x.uid === message.user.referal);
		user.refbalance += sum_d;
		}
		}
			
			
			
			
			return bot(`вы угадали! Приз ${message.args[2] * multiply} ${smilesuccess}
			${text}`);
		} else {
			return bot(`вы не угадали, это был ${cup}-ый стаканчик ${smileerror}`);
		}
	}
});

cmd.hear(/^(?:бизнес)$/i, async (message, bot) => {
	if(!message.user.business) return bot(`у Вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
	const biz = businesses.find(x=> x.id === message.user.business);
	var lvlcash = biz.earn*message.user.bizlvl;
	var updprice2 = Math.floor(businesses[message.user.business - 1].cost * 2)*message.user.bizlvl
	return bot(`статистика "${biz.name}":
	💸 Прибыль: ${utils.sp(lvlcash)}$/час
	💰 На счёте: ${utils.sp(message.user.biz)}$
	🌟 Уровень: ${message.user.bizlvl}
	✅ Стоимость улучшения: ${utils.sp(updprice2)}$`);
});

cmd.hear(/^(?:бизнес улучшить)$/i, async (message, bot) => {
	if(!message.user.business) return bot(`у Вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
	const biz = businesses.find(x=> x.id === message.user.business);

	var updprice = Math.floor(businesses[message.user.business - 1].cost * 2)*message.user.bizlvl;

	if(message.user.balance < updprice) return bot(`недостаточно денег. ${smileerror}`);

	message.user.bizlvl += 1;
	message.user.balance -= updprice;

	return bot(`вы успешно улучшили бизнес. ${smilesuccess}
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);


});

cmd.hear(/^(?:бизнес)\s(?:снять)$/i, async (message, bot) => {
	if(!message.user.business) return bot(`у Вас нет бизнеса! ${smileerror}
Для выбора бизнеса отправьте «Бизнесы»`);
	if(!message.user.biz) return bot(`у вас нет денег на счёте этого бизнеса. ${smileerror}`);
let textr = ``;
var money_cred = message.user.credit;
var money_biz = message.user.biz;
 

if (money_cred > 0) 
	{
	if(money_biz > money_cred) {
		bot(`У вас не оплаченный кредит. Мы списали сумму за кредит ${utils.sp(money_cred)}$`);
		money_biz -= money_cred;
message.user.credit = 0;
	}
	else if(money_biz < money_cred) {
		bot(`У вас не оплаченный кредит. Мы списали сумму за кредит ${utils.sp(money_biz)}$
		Всей суммы для погашения не хватает поэтому мы списываем весь доход в пользу банка
		Остаток по кредиту: ${utils.sp(money_cred - money_biz)}$`);
		message.user.credit -= money_biz;
		money_biz = 0;
		
	}
	}
let text = ``;
		if(message.user.referal >= 0 & message.user.referal != null) {
		const mn = message.user.level;
		const pr = mn*2;
		var sum_d = Math.floor(money_biz * (pr/100));
		if (sum_d != 0 ) {
		text += `Произведены реферальные отчисления ${pr}% с дохода ${utils.sp(sum_d)}$\n`;
		let user = users.find(x=> x.uid === message.user.referal);
		user.refbalance += sum_d;
		}
		}
		
	message.user.balance += money_biz;
	bot(`вы сняли со счёта своего бизнеса ${utils.sp(money_biz)}$ ${smilesuccess}
	${text}`);
	message.user.biz = 0;

	return;
});

cmd.hear(/^(?:ферма|🔋 Ферма|@game_tabirat 🔋 Ферма)$/i, async (message, bot) => {
	let smileerror2 = utils.pick([`😒`, `😯`, `😔`, `🤔`]);

	if(!message.user.misc.farm) return bot(`у Вас нет майнинговых ферм. ${smileerror2}`);
	if(!message.user.misc.farm_btc) return bot(`на ваших фермах еще нет биткоинов. Новые биткойны появятся через час 🔎`);

	const btc_ = message.user.misc.farm_btc;

	message.user.btc += message.user.misc.farm_btc;
	message.user.misc.farm_btc = 0;

	return bot(`вы собрали со своих ферм ${utils.sp(btc_)}฿`);
});

cmd.hear(/^(?:restart)$/i, async (message, bot) => {
	if(message.user.settings.adm < 4) return;
	await bot(`бот уходит в перезагрузку.`);

	await saveUsers();
	process.exit(-1);
	console.log("node app")
});

cmd.hear(/^(?:сброс)$/i, async (message, bot) => {
	if(message.user.settings.adm < 4) return;
	clearTemp();
	bot(`Бот перезапущен
	Таймеры всех игроков обнулены
	Энергия восстановлена`);
	console.log("node app");
});

cmd.hear(/^(?:реф|реферал)\s([0-9]+)$/i, async (message, bot) => {
if (message.user.referal) return bot(`Вы уже участник реферальной системы`)
if(!Number(message.args[1])) return bot(`введите реферал [id игрока]`); 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 
if(message.user.uid == user.referal) return bot(`вы являетесь рефералом данного игрока
Нельзя быть рефералом друг друга`);
if(Number(message.args[1]) == message.user.uid) return bot(`хитрожопый однако, но нельзя приглашать самого себя`);
message.user.referal = Number(message.args[1]);
message.user.balance += 10000000;
bot(`Вы зарегистрировались в реферальной программе
по приглашению @id${user.id} (${user.tag})
получите от нас бонус в размере 10.000.000$
ваш баланс ${utils.sp(message.user.balance)}$`);

if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Игрок id ${message.user.uid} @id${message.user.id} (${message.user.tag}) теперь ваш реферал, вы будете скоро получать прибыль от его дохода! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
return;
});


cmd.hear(/^(?:рефер)\s(?:снять)$/i, async (message, bot) => {
	if(!message.user.refbalance) return bot(`у вас нет денег на реферальном счете. ${smileerror}`);
	message.user.balance += message.user.refbalance;
	bot(`вы сняли с рефералного счёта ${utils.sp(message.user.refbalance)}$ ${smilesuccess}`);
	message.user.refbalance = 0;

	return;
});



cmd.hear(/^(?:сейф)\s([0-9]+)$/i, async (message, bot) => {
	if(message.args[1] < 10 || message.args[1] >= 100) return;
	if (message.user.balance < 1000) return bot(`стоимость вскрытия сейфа 1.000$
	У Вас их нет`);
	const int = utils.random(10, 99);
	message.args[1] = Number(message.args[1]);

	if(int === message.args[1])
	{
		message.user.balance += 10000000000;
		
let text = ``;
		if(message.user.referal >= 0 & message.user.referal != null) {
		const mn = message.user.level;
		const pr = mn*2;
		var sum_d = Math.floor(10000000000 * (pr/100));
		if (sum_d != 0 ) {
		text += `Произведены реферальные отчисления ${pr}% с дохода ${utils.sp(sum_d)}$\n`;
		let user = users.find(x=> x.uid === message.user.referal);
		user.refbalance += sum_d;
		}
		}
		
		
		return bot(`невероятно! Вы угадали число.
		💲 Вам начислено 10.000.000.000$
		${text}`);
	} else if(int !== message.args[1])
	{
		message.user.balance -= 1000;
		return bot(`вы не угадали число. Вам выпало число "${int}"
		🎉 Не отчаивайтесь, количество попыток неограниченно.
		⚠ С вас списана сумма в размере 1.000$ за попытку взлома
		Если вы угадаете код, то вы получите 10.000.000.000$`);
	}
});

cmd.hear(/^(?:пополнить биз)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm< 2) return; 
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.biz += message.args[2]; 


await bot(`Пополнил бизнес игрока ${user.tag} ${utils.sp(message.args[2])}$`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор пополнил ваш бизнес на ${utils.sp(message.args[2])}$! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});

cmd.hear(/^(?:погасить кредит)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2]));
if(message.args[2] <= 0) return bot(`Укажите верную сумму для погашения`);
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);
if(message.user.balance < message.args[2]) return bot(`у вас нет такой суммы`);
if(user.credit <= 0) return bot(`У игрока нет кредитов`);
if(message.args[2] > user.credit) return bot(`Игрок должен банку сумму ${utils.sp(user.credit)}$
Оплачивать больше суммы кредита запрещено`);
user.credit -= message.args[2]; 
message.user.balance -= message.args[2]; 
let user2 = users.find(x=> x.uid === 0);
user2.bank += message.args[2];
bot(`Вы оплатили кредит на сумму ${utils.sp(message.args[2])}$ игрока ${user.tag}`);
   
});

cmd.hear(/^(?:выдать)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm< 2) return; 
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.balance += message.args[2]; 


await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}$`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор выдал вам ${utils.sp(message.args[2])}$! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});

cmd.hear(/^(?:лицензию)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm< 4) return bot(`У вас нет прав, обратитесь к Alessndro Foresto`); 
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.settings.lic += message.args[2]; 


await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])} шт лицензий`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор выдал вам ${utils.sp(message.args[2])}шт лицензий! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});


cmd.hear(/^(?:уровень)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm< 2) return; 
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.level = Number(message.args[2]); 


await bot(`вы назначили игроку ${user.tag} ${message.args[2]} уровень`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор выдал вам ${message.args[2]} уровень! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});


cmd.hear(/^(?:рефмани)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm< 2) return; 
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.refbalance = Number(message.args[2]); 


await bot(`Вы установили сумму рефиральных денег игроку ${user.tag} в размере ${utils.sp(message.args[2])}$`);
} 
});


cmd.hear(/^(?:отнять)\s([0-9]+)\s(.*)$/i, async (message, bot) => { 
message.args[2] = message.args[2].replace(/(\.|\,)/ig, ''); 
message.args[2] = message.args[2].replace(/(к|k)/ig, '000'); 
message.args[2] = message.args[2].replace(/(м|m)/ig, '000000'); 

if(message.user.settings.adm< 2) return; 
if(!Number(message.args[2])) return; 
message.args[2] = Math.floor(Number(message.args[2])); 

if(message.args[2] <= 0) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 

if (user.balance < Number(message.args[2])) return bot(`У игрока нет столько денег, отнять больше чем у него есть нельзя`);
user.balance -= message.args[2]; 


await bot(`вы отняли у игрока ${user.tag} ${utils.sp(message.args[2])}$`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор отнял у вас ${utils.sp(message.args[2])}$! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
} 
});

cmd.hear(/^(?:назначить)\s([0-9]+)\s([0-9]+)$/i, async (message, bot) => { 

if(message.user.settings.adm < 4) return bot(`Только создатель может назначать Админов`); 
if(message.args[2] > 4) return bot(`Можно назначить админа от 1 до 4 уровня`); 
message.args[2] = Math.floor(Number(message.args[2])); 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.settings.adm = message.args[2]; 


await bot(`вы назначили игрока ${user.tag} 👮‍♂ администратором ${utils.sp(message.args[2])}-го уровня`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор назначил вас 👮‍♂администратором ${utils.sp(message.args[2])}-го уровня! 
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` }); 
}
});


cmd.hear(/^(?:бан)\s(.*)$/i, async (message, bot) => { 
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 2) return; 

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.ban = true; 

saveUsers();
await bot(`вы забанили игрока *id${user.id} (${user.tag}).`,); 
vk.api.messages.send({ user_id: user.id, message: `Ваш аккаунт был заблокирован. ⛔` }); 
}
});

cmd.hear(/^(?:разбан)\s(.*)$/i, async (message, bot) => { 
message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

if(message.user.settings.adm < 2) return;

{ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`); 


user.ban = false; 

saveUsers();
await bot(`вы разбанили игрока *id${user.id} (${user.tag}).`); 
vk.api.messages.send({ user_id: user.id, message: `Ваш аккаунт был разблокирован.` }); 
}
});

cmd.hear(/^(?:промо вкл)$/i, async (message, bot) => { 
if(message.user.settings.adm < 4) return; 

clearPromo();
return bot(`промокод включен! ${smilesuccess}`);

});

cmd.hear(/^(?:промо тип btc)$/i, async (message, bot) => { 
if(message.user.settings.adm < 4) return;
config.promotip = "btc"; 
saveConfig();
return bot(`тип промокода: Bitcoin. ${smilesuccess}`);

});

cmd.hear(/^(?:промо тип баланс)$/i, async (message, bot) => { 
if(message.user.settings.adm < 4) return;
config.promotip = "balance"; 
saveConfig();
return bot(`тип промокода: Баланс. ${smilesuccess}`);

});

cmd.hear(/^(?:копать)$/i, async (message, bot) => { 

return bot(`использование: «копать железо/золото/алмазы» ${smileerror}`);

});

cmd.hear(/^(?:копать железо)$/i, async (message, bot) => { 

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждую минуту!`);

let randzhelezo = utils.random(16, 97);

message.user.energy -= 1;
message.user.opit += 1;
message.user.zhelezo += randzhelezo;

saveUsers();

if(message.user.energy > 0) return bot(`+${randzhelezo} железа.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

return bot(`+${randzhelezo} железа.
Энергия закончилась. ⚠`);

}

});

cmd.hear(/^(?:копать золото)$/i, async (message, bot) => { 

if(message.user.opit < 300) return bot(`что бы копать золото нужно больше 300 опыта. Копайте железо и увеличивайте свой опыт! ⚠`);

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждую минуту!`);

let randzoloto = utils.random(5, 35);

message.user.energy -= 1;
message.user.opit += 5;
message.user.zoloto += randzoloto;

saveUsers();

if(message.user.energy > 0) return bot(`+${randzoloto} золота.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

return bot(`+${randzoloto} золота.
Энергия закончилась. ⚠`);

}

});

cmd.hear(/^(?:копать алмазы)$/i, async (message, bot) => { 

if(message.user.opit < 3000) return bot(`что бы копать алмазы нужно больше 3 000 опыта. Копайте железо и увеличивайте свой опыт! ⚠`);

if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждую минуту!`);

let randalmaz = utils.random(3, 26);

message.user.energy -= 1;
message.user.opit += 10;
message.user.almaz += randalmaz;

saveUsers();

if(message.user.energy > 0) return bot(`+${randalmaz} алмазов.
💡 Энергия: ${message.user.energy}, опыт: ${message.user.opit}`);

if(message.user.energy < 1) {

return bot(`+${randalmaz} алмазов.
Энергия закончилась. ⚠`);

}

});

cmd.hear(/^(?:железо)$/i, async (message, bot) => { 

return bot(`у вас ${utils.sp(message.user.zhelezo)} железа. 🎛`);

});

cmd.hear(/^(?:опыт)$/i, async (message, bot) => { 

return bot(`у вас ${utils.sp(message.user.opit)} опыта. 🏆`);

});

cmd.hear(/^(?:алмазы)$/i, async (message, bot) => { 

return bot(`у вас ${utils.sp(message.user.almaz)} алмазов. 💎`);

});

cmd.hear(/^(?:золото)$/i, async (message, bot) => { 

return bot(`у вас ${utils.sp(message.user.zoloto)} золота. 🏵`);

});

cmd.hear(/^(?:таксовать)$/i, async (message, bot) => { 
if(message.user.opit < 3000) return bot(`что бы Таксовать вам нужно 3 000 опыта.
Копайте железо и увеличивайте свой опыт! ⚠`);
if(message.user.energy < 1) return bot(`вы сильно устали.
⚠ Энергия появляется каждую минуту!`);

taxicash = utils.random(987923, 3416011);
message.user.energy -= 1;
message.user.balance += taxicash;
let text = ``;
text += `вы заработали ${utils.sp(taxicash)}$\n`;
		if(message.user.referal >= 0 & message.user.referal != null) {
		const mn = message.user.level;
		const pr = mn*2;
		var sum_d = Math.floor(taxicash * (pr/100));
		if (sum_d != 0 ) {
		text += `Произведены реферальные отчисления ${pr}% с дохода ${utils.sp(sum_d)}$\n`;
		let user = users.find(x=> x.uid === message.user.referal);
		user.refbalance += sum_d;
		}
		}


if(message.user.energy < 1) text += `Энергия закончилась. ⚠`;
return bot(`${text}`);

});

cmd.hear(/^(?:взломать|взлом)$/i, async (message, bot) => { 

if(message.user.timers.hack) return bot(`вы сможете взломать через 5 минут ${smileerror}`);

let situac = utils.random(1,2);

if(situac === 1)
{

let hackcash = utils.random(156781,451981);
message.user.balance += hackcash;
setTimeout(() => {
	message.user.timers.hack = false;
}, 300000);
let text = ``;
		if(message.user.referal >= 0 & message.user.referal != null) {
		const mn = message.user.level;
		const pr = mn*2;
		var sum_d = Math.floor(hackcash * (pr/100));
		if (sum_d != 0 ) {
		text += `Произведены реферальные отчисления ${pr}% с дохода ${utils.sp(sum_d)}$\n`;
		let user = users.find(x=> x.uid === message.user.referal);
		user.refbalance += sum_d;
		}
		}
message.user.timers.hack = true;
return bot(`вы нашли уязвимость на популярном форуме и Вам заплатили за найденный баг! ✅ Вы заработали ${utils.sp(hackcash)}$
${text}`);

}
if(situac === 2)
{

let hackcash = utils.random(26981051,41184185);
message.user.balance += hackcash;
setTimeout(() => {
	message.user.timers.hack = false;
}, 300000);

let text = ``;
		if(message.user.referal >= 0 & message.user.referal != null) {
		const mn = message.user.level;
		const pr = mn*2;
		var sum_d = Math.floor(hackcash * (pr/100));
		if (sum_d != 0 ) {
		text += `Произведены реферальные отчисления ${pr}% с дохода ${utils.sp(sum_d)}$\n`;
		let user = users.find(x=> x.uid === message.user.referal);
		user.refbalance += sum_d;
		}
		}
message.user.timers.hack = true;
return bot(`вам удалось ограбить банк, но, не все так просто. Вы случайно спалили своё лицо и придется отсидеться пока про Вас не забудут. ✅ Вы заработали ${utils.sp(hackcash)}$
${text}`);

}

});

cmd.hear(/^(?:промо)\s([0-9]+)$/i, async (message, bot) => { 
if(message.user.settings.adm < 4) return;
config.promovalue = Number(message.args[1]); 
saveConfig();
return bot(`сумма промокода: ${config.promovalue}. ${smilesuccess}`);

});

cmd.hear(/^(?:промо лимит)\s([0-9]+)$/i, async (message, bot) => { 
if(message.user.settings.adm < 4) return;
config.promolimit = Number(message.args[1]); 
saveConfig();
return bot(`лимит использований промокода: ${config.promolimit}. ${smilesuccess}`);

});