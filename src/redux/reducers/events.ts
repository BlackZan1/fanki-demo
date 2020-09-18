import UserIMG from '../../img/croco_avatar.png';
import CompanyIMG from '../../img/company_logo.png';
import PostIMG1 from '../../img/post1.png';

import EmoteSVG from '../../img/emote.svg';

const initialState = {
    data: {
        new: [
            { imgUrl: CompanyIMG, name: 'Fanki Soft', text: 'Срочное объявление! Поступление в штат новых front-end\'еров.', date: 'Сегодня, 10:50', type: 'company' },
            { imgUrl: UserIMG, name: 'Калинина Оксана', text: 'Текст объявления, который написан от лица сотрудника.', date: 'Сегодня, 9:20', type: 'employee' }
        ],
        old: [
            { 
                thumb: PostIMG1, 
                date: '30 апреля 2020, 12:00', 
                title: 'Здесь будет находится длинный очень длинный заголовокопубликованной новости в водопаде событий', 
                description: 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности позволяет оценить значение позиций, занимаемых... ', 
                comments: 18, 
                emojies: [{ emoji: EmoteSVG, count: 3}, { emoji: EmoteSVG, count: 5 }] 
            }
        ]
    }
}

const EventsReducer = (state = initialState, action: any) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default EventsReducer;