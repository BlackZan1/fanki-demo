import UserIMG1 from '../../img/dolphin_avatar.png';
import UserIMG2 from '../../img/tiger_avatar.png';

const initialState = {
    data: [
        { userImg: UserIMG1, eventName: 'НАЗНАЧАЕТ ВАМ ЗАДАЧУ', fullname: 'Владимиров Владимир', date: '9:22', text: 'Подготовить обновлённую презентацию разработанного продукта' },
        { userImg: UserIMG2, eventName: 'СОЗДАЁТ СОБЫТИЕ', isGroup: true, fullname: 'Сергеев Владимир', date: '9:22', text: 'Презентация IT-отдела, Улучшение мобильной платёжной системы.' },
        { userImg: UserIMG1, eventName: 'НАЗНАЧАЕТ ВАМ ЗАДАЧУ', isGroup: true, fullname: 'Владимиров Алексей', date: '9:22', text: 'Открыть новый филиал в Каракуре.' }
    ]
}

const NotificationsReducer = (state = initialState, action: any) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default NotificationsReducer;