import { TEXT_ADDED} from "./action";
const initialState = {
    data : [
        {
          id: 2,
          name: "Mandler T. (PRO)",
          picture:require('../assets/images/player1.jpg'),
          text: "Hey guys, thanks a lot for the impressive game, it was fun!",
          time: "20:20",
        },
        {
          id: 3,
          name: "Oz y. (The Wiz)",
          picture:require('../assets/images/player2.jpg'),
          text: "The dedication of the ball was stunning.",
          time: "20:02",
        },
        {
          id: 4,
          name: "Rafayal Nadal. (GOAT)",
          picture:require('../assets/images/post.jpeg'),
          text: "Simpler text container is used to reduce complexity. In real development react-native-svg should be used to create irregular size container and pass the data.",
          time: "20:20",
        },
        {
          id: 1,
          name: "Penn N. (Panther)",
          picture:require('../assets/images/profile.jpeg'),
          text: "Gradient looks nice on the text.",
          time: "20:30",
        },
      ],
    userData:{
        userId:1,
        userName:"Penn N. (Panther)",
        picture:require('../assets/images/profile.jpeg'),
    }
    
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TEXT_ADDED: {
      const newData = {
        id: state.userData.userId, 
        name: state.userData.userName,
        picture: state.userData.picture,
        text: action.payload.text,
        time: action.payload.time,
      };
      return {
        ...state,
        data: [...state.data, newData],
      };
    }
    default:
      return state;
  }
}
