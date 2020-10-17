/**
 * @class TRELLO_CONSTANTS - Contains all constants needed to fetch from trello api
 * @static GET_LISTS_URL - Get the URL for all lists to use in {@link https://api.arhitextextura.ro}
 * @static GET_ALL_CARDS_URL - Get the URL for all cards on the board to use in {@link https://api.arhitextextura.ro}
 * @function GET_CARDS_ON_LIST(_id) - Get all cards on the specified list
 */

export class TRELLO_CONSTANTS {
  /**
   * @abstract TRELLO = "https://api.arhitextura.ro/";
   */
  static TRELLO = "https://api.arhitextura.ro/";
//   static TRELLO = "http://localhost:8443/";

  /** 
   * @abstract new URL("/trello/lists", this.TRELLO)
  */
  static GET_LISTS_URL = new URL("/trello/lists", this.TRELLO).href;

  /**
   * @abstract new URL("/trello/cards", this.TRELLO)
   */
  static GET_ALL_CARDS_URL = new URL("/trello/cards", this.TRELLO).href;

  /**
   *
   * @param {String} _id - Id of the list from which to return cards
   * @abstract new URL(`/trello/list/${_id}/cards`) 
   * @returns {URL}
   */
  static GET_CARDS_ON_LIST = (_id) => {
    return new URL(`/trello/list/${_id}/cards`, this.TRELLO).href;
  };
}

export const ROADMAP_COLORS = {
    sections:
    {
        "Update 🎉" : "#0090FF",
        "Bug":"#ef7564",
        "De făcut":"#ffaf3f",
        "În producție":"#7bc86c",
        "Idei":"#ff8ed4",
        "Testare":"#4E5A66"
    }
}
export const TRELLO_COLORS = {
  labels: {
    yellow: "#f2d600",
    orange: "#ff9f1a",
    red: "#eb5a46",
    purple: "#c377e0",
    blue: "#0079bf",
    lime: "#51e898",
    pink: "#ff78cb",
    sky: "#29cce5", 
    green: "#7bc86c"
  }
};