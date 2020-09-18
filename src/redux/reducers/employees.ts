import UserIMG1 from '../../img/dino_avatar.png';
import UserIMG2 from '../../img/tiger_avatar.png';
import UserIMG3 from '../../img/dolphin_avatar.png';

const initialState = {
    panes: [ 
        {dayName: 'Сегодня', day: 12, month: 'август'}, 
        {dayName: 'Завтра', day: 13, month: 'август'}, 
        {dayName: 'Неделя'} 
    ],
    categories: [
        { name: 'Все', count: 9, color: '#27AE60' },
        { name: 'В отпуске', count: 2, color: '#2F80ED' },
        { name: 'Отгул', count: 7, color: '#F2994A' },
        { name: 'Больничный', count: 0, color: '#FF0F00' }
    ],
    users: [
        { userImg: UserIMG1, fullname: 'Никифорова Валентина', role: 'Front-end Developer', period: '10 августа 2020 - 21 августа 2020', type: 'Отгул' },
        { userImg: UserIMG2, fullname: 'Никифорова Валентина', role: 'Front-end Developer', period: '10 августа 2020 - 21 августа 2020', type: 'Отгул' },
        { userImg: UserIMG1, fullname: 'Никифорова Валентина', role: 'Front-end Developer', period: '10 августа 2020 - 21 августа 2020', type: 'Отгул' },
        { userImg: UserIMG2, fullname: 'Никифорова Валентина', role: 'Front-end Developer', period: '10 августа 2020 - 21 августа 2020', type: 'Отгул' },
        { userImg: UserIMG3, fullname: 'Никифорова Валентина', role: 'Front-end Developer', period: '10 августа 2020 - 21 августа 2020', type: 'В отпуске' },
        { userImg: UserIMG1, fullname: 'Никифорова Валентина', role: 'Front-end Developer', period: '10 августа 2020 - 21 августа 2020', type: 'Отгул' },
        { userImg: UserIMG3, fullname: 'Никифорова Валентина', role: 'Front-end Developer', period: '10 августа 2020 - 21 августа 2020', type: 'В отпуске' },
        { userImg: UserIMG2, fullname: 'Никифорова Валентина', role: 'Front-end Developer', period: '10 августа 2020 - 21 августа 2020', type: 'Отгул' },
        { userImg: UserIMG1, fullname: 'Никифорова Валентина', role: 'Front-end Developer', period: '10 августа 2020 - 21 августа 2020', type: 'Отгул' },
    ]
}

const EmployeesReducer = (state = initialState, action: any) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default EmployeesReducer;