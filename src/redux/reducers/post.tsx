const postReducer = (state = { posts: [] }, action: any) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        posts: action.payload.posts,
      };
    case "CREATE_POSTS":
      return {
        ...state,
        posts: [...state.posts, action.payload.post],
      };
    case "DELETE_POSTS":
      return {
        posts: [
          ...state.posts.filter((post: any) => post._id !== action.payload),
        ],
      };
    case "UPDATE_POSTS":
      console.log("Update successful:", action.payload);
      return {
        posts: state.posts.map((post: any) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };

    default:
      return state;
  }
};

export default postReducer;
