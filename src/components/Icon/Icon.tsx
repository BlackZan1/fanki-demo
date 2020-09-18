import React from 'react';

import { ReactComponent as ArrowSVG } from '../../img/arrow.svg';
import { ReactComponent as LogoSVG } from '../../img/fanki.svg';
import { ReactComponent as RequestsSVG } from '../../img/requests.svg';
import { ReactComponent as CalendarSVG } from '../../img/calendar.svg';
import { ReactComponent as BaseSVG } from '../../img/book.svg';
import { ReactComponent as NewsSVG } from '../../img/book-open.svg';
import { ReactComponent as TasksSVG } from '../../img/tasks.svg';
import { ReactComponent as ChatsSVG } from '../../img/chats.svg';
import { ReactComponent as StatisticsSVG } from '../../img/statistics.svg';
import { ReactComponent as StructureSVG } from '../../img/copy.svg';
import { ReactComponent as EmploeeysSVG } from '../../img/people.svg';
import { ReactComponent as OptionsSVG } from '../../img/settings.svg';
import { ReactComponent as SupportSVG } from '../../img/layers.svg';
import { ReactComponent as QuestionSVG } from '../../img/question.svg';

export type IconType =
    'logo' |
    'requests' |
    'calendar' |
    'base' |
    'news' |
    'tasks' |
    'chats' |
    'statistics' |
    'structure' |
    'employees' |
    'options' |
    'support' |
    'arrow' |
    'question'

interface IconProps {
    iconType: IconType
}

const icons: any = {
    logo: <LogoSVG />,
    requests: <RequestsSVG />,
    calendar: <CalendarSVG />,
    base: <BaseSVG />,
    news: <NewsSVG />,
    tasks: <TasksSVG />,
    chats: <ChatsSVG />,
    statistics: <StatisticsSVG />,
    structure: <StructureSVG />,
    employees: <EmploeeysSVG />,
    options: <OptionsSVG />,
    support: <SupportSVG />,
    arrow: <ArrowSVG />,
    question: <QuestionSVG />
}

const Icon: React.FC<IconProps> = ({ iconType }) => {
    const icon = icons[iconType];

    return icon;
}

export default Icon;