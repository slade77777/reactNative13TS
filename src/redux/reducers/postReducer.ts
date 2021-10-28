import {CREATE_POST} from '../actions/postActions';

const initialPost = [
  {
    icon: 'a',
    title: 'title 1',
    content: 'bước 1 aaaaaaaaaaaaaaaaaaaaa',
    date: '2021/04/04',
    read: true,
  },
  {
    icon: 'b',
    title: 'title 22',
    content: 'bước 2 aaaaaaaaaaaaaaaaaaaaa',
    date: '2021/04/05',
    read: false,
  },
  {
    icon: 'c',
    title: 'title 3333',
    content: 'bước 3 aaaaaaaaaaaaaaaaaaaaa',
    date: '2021/04/06',
    read: true,
  },
  {
    icon: 'd',
    title: 'title 22 asdasdasd',
    content: 'bước 4 aaaaaaaaaaaaaaaaaaaaa',
    date: '2021/04/07',
    read: true,
  },
  {
    icon: 'e',
    title: 'title 5',
    content: 'bước 5 aaaaaaaaaaaaaaaaaaaaa',
    date: '2021/04/08',
    read: false,
  },
  {
    icon: 'f',
    title: 'title 5.1',
    content: 'bước 6 aaaaaaaaaaaaaaaaaaaaa',
    date: '2021/04/09',
    read: false,
  },
];

export default function (state: any = initialPost, action: any) {
  switch (action.type) {
    case CREATE_POST:
      return [
        {
          icon: action.payload.icon,
          title: action.payload.title,
          content: action.payload.content,
          date: new Date().toLocaleDateString('en-Us', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          }),
          read: false,
        },
        ...state,
      ];
    default:
      return state;
  }
}
