import { rtkApi } from "@/shared/api/rtkApi";

const ReturnToTopButtonApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    //get articles
    getReturnToTopButtonList: build.query<Article[], number>({ // Article[] is what we expecting to return, number is passing arg (number of articles to return)
      query: (limit) => ({
        url: "/articles",
        params: {
          _limit: limit,
        },
      }),
    }),
    // //create article (POST)
    // createArticleRecommendation: build.mutation({
    //   //mutation for POST and PUT
    //   query: (limit) => ({
    //     url: "/articles",
    //     params: {
    //       _limit: limit,
    //     },
    //     method: "POST", // "PUT"
    //   }),
    // }),
  }),
});

export const useReturnToTopButtonList =
  recommendationsApi.useGetReturnToTopButtonListQuery;
// export const useArticleCreation =
//   recommendationsApi.useCreateArticleRecommendationMutation;
