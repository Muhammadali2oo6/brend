const container_card = document.querySelector('.container_card');
const section_button = document.querySelector('.section_button');
const figure = document.querySelector('figure');
const ol = document.querySelector('ol');


export const data_ol = [
	{
		id: 1,
		icon: 'https://online-mahalla.uz/media/store/img/card-img2.svg',
		title: 'Лойиҳа офисла',
		paragraph: 'Маҳалладаги ижтимоий-иқтисодий ҳолатнии хонадонбай',
		dect: 'Батафсил',
		left_icon: 'https://online-mahalla.uz/media/store/img/arrow-right.svg',
	},
	{
		id: 2,
		icon: 'https://online-mahalla.uz/media/store/img/card-img3.svg',
		title: 'Аукцион савдол',
		paragraph: 'Маҳалладаги ижтимоий-иқтисодий ҳолатнии хонадонбай',
		dect: 'Батафсил',
		left_icon: 'https://online-mahalla.uz/media/store/img/arrow-right.svg',
	},
	{
		id: 3,
		icon: 'https://online-mahalla.uz/media/store/img/card-img4.svg',
		title: 'Имтиёзли креди',
		paragraph: 'Маҳалладаги ижтимоий-иқтисодий ҳолатнии хонадонбай',
		dect: 'Батафсил',
		left_icon: 'https://online-mahalla.uz/media/store/img/arrow-right.svg',
	},
	{
		id: 4,
		icon: 'https://online-mahalla.uz/media/store/img/card-img3.svg',
		title: 'Онлайн ахборот',
		paragraph: 'Маҳалладаги ижтимоий-иқтисодий ҳолатнии хонадонбай',
		dect: 'Батафсил',
		left_icon: 'https://online-mahalla.uz/media/store/img/arrow-right.svg',
	},
];
import{data_ol} from '../data.'
data_ol.map((item) => {
	ol.innerHTML += `
        <div id="${item.id}" class="ol_card">
        <div class="ol_icon">
            <img src="${item.icon}" alt="">
        </div>
        <div class="ol_text">
            <h2>${item.title}</h2>
            <p>${item.paragraph}</p>
            <div class="oli_icon">
                <p>${item.dect}</p>
                <img src="${item.left_icon}" alt="">
            </div>
        </div>
        </div>`;
});
