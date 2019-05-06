/*
 * Media will be the common ancestor of Book and Movie
 * A Media instance should have
 * title: string
 * author: string
 * mediaId: string
 *
 * Then go to update Book and Movie appropriately
 */

export class Media {
  constructor(config) {
    this.title = config.title;
    this.author = config.author;
    this.mediaId = config.mediaId;
  }
}