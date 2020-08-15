/**
 * the existing routes
 */
export enum RouteEnum {
    /**
     * the empty route
     */
    EMPTY = "",
    
    /**
     * the wildcard route
     */
    WILDCARD = "**",
    
    /**
     * the top100 route
     */
    TOP100 = "top100",

    /**
     * the movie id route
     */
    MOVIE = "movie/:id"
}
