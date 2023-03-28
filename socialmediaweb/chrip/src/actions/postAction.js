import * as PostsApi from '../api/PostRequest'
// export const getTimelinePosts = (id) => async (dispatch) => {
//     dispatch({ type: "RETREIVING_START" })

//     try {
//         const { data } = await PostApi.getTimelinePosts(id);
//         dispatch({ type: "RETREIVING_SUCCESS", data: data })
//     } catch (error) {
//         dispatch({ type: "RETREIVING_FAIL", data: data })
//         console.log(error)
//     }
// }


export const getTimelinePosts = (id) => async (dispatch) => {
    dispatch({ type: "RETREIVING_START" });
    try {
      const { data } = await PostsApi.getTimelinePosts(id);
      dispatch({ type: "RETREIVING_SUCCESS", data: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "RETREIVING_FAIL" , error: error});
    }
  };