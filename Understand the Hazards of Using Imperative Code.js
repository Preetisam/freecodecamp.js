// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {
  // Only remove the tab if the index is valid
  if (index >= 0 && index < this.tabs.length) {
    this.tabs.splice(index, 1);
  }
  return this;
};

// Let's create some windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);

// Now perform the tab operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close the third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());

console.log(finalTabs.tabs);
