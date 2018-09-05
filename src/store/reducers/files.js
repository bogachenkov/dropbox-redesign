import {
  DELETE_FILE,
  DELETE_SELECTED_FILES,
  SELECT_FILE
} from '../actions/types';

const initialState = {
  files: [
    {
      filename: 'dropbox logo.jpg',
      date: 'Jul 22',
      size: '110.2 KB'
    },
    {
      filename: 'contact.jpg',
      date: 'Jun 14',
      size: '245.35 KB'
    },
    {
      filename: 'Olimp-006.jpg',
      date: 'Apr 11',
      size: '7.2 MB'
    },
    {
      filename: 'Sweet pixels icon.jpg',
      date: 'Mar 5',
      size: '500.76 KB'
    },
    {
      filename: 'boxing glove icon.jpg',
      date: 'May 20',
      size: '70 KB'
    },
    {
      filename: 'Icon Set.jpg',
      date: 'Sep 26',
      size: '220.02 KB'
    },
    {
      filename: 'instagram.jpg',
      date: 'Aug 14',
      size: '260 KB'
    },
    {
      filename: 'Pin Art Dribbble.jpg',
      date: 'Dec 13',
      size: '450 KB'
    },
    {
      filename: 'Iron-Man-Mask.jpg',
      date: 'Feb 23',
      size: '245.2 KB'
    },
    {
      filename: 'Warehouse design.png',
      date: 'Oct 05',
      size: '1.2 MB'
    },
    {
      filename: 'Magic Bacon Ride.jpg',
      date: 'Sep 06',
      size: '150 KB'
    },
    {
      filename: 'Mobile Portfolio.jpg',
      date: 'Dec 14',
      size: '500.65 KB'
    },
    {
      filename: 'Facebook button.jpg',
      date: 'Dec 19',
      size: '245.2 KB'
    },
    {
      filename: 'Web Design.jpg',
      date: 'Jun 23',
      size: '982.2 KB'
    },
    {
      filename: 'dribbble fun.jpg',
      date: 'Oct 05',
      size: '50.2 KB'
    }
  ],
  selectedFiles: []
}

const selectOrUnselect = (files, filename) => {
  const result = [...files];
  if (result.includes(filename)) {
    return result.filter(file => file !== filename);
  }
  result.push(filename);
  return result;
}

const removeSelectedFiles = (files, selected) => {
  return files.filter(file => !selected.includes(file.filename));
}

export default function(state = initialState, action) {
  switch (action.type) {
    case DELETE_FILE:
      return {
        ...state,
        files: [...state.files].filter(elem => elem.filename !== action.filename)
      }
    case SELECT_FILE:
      return {
        ...state,
        selectedFiles: selectOrUnselect(state.selectedFiles, action.filename)
      }
    case DELETE_SELECTED_FILES:
      return {
        ...state,
        selectedFiles: [],
        files: removeSelectedFiles(state.files, state.selectedFiles)
      }
    default:
      return state;
  }
}