const choice = (items) => {
  /**
   * Returns a randomly selected item from array of items 
   * 
   * @param {Array} items - Array of items
   */
  return items[Math.floor(Math.random() * items.length)]
}

const remove = (items, item) => {
  /**
   * Removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
   * 
   * @param {Array} items - Array of items
   * @param {String} item - Emoji of the item
   */

  if (!items.includes(item)) {
    return undefined
  } else {
    for (let i = 0; i < items.length; i++) {
      if (items[i] === item) {
        items.splice(i, 1);
        return item
      }
    }
  }

  

}

export { choice, remove }