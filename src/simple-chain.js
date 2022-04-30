const { NotImplementedError } = require('../extensions/index.js');

class Node {
  constructor(value) {
    // if (value === undefined) {
    //   this.value = "undefined"
    // } else if (value === null) {
    //   this.value = "null"
    // } else {
    //   this.value = value.toString();
    // }
    this.value = value;
    this.next = null;
    this.prev = null;
  }
  
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  addLink(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;

      this.tail = newNode;
    }

    this.length++;
    return this
  }

  removeLink(position) {
    if (isNaN(position) || typeof position !== 'number' || position < 1 || this.length <= position) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      throw new Error("You can't remove incorrect link!");
    }

    let current;

    if (position === 1) {
      current = this.head;

      this.head = this.head.next;
      this.head.prev = null;
    }
    else if (position === this.length) {
      current = this.tail;

      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    else {
      current = this.head;

      let prev = null;
      let index = 1;

      while (index < position) {
        prev = current;
        current = current.next;
        index++
      }

      prev.next = current.next;
      current.next.prev = prev;
    }

    this.length--;
    return this
  }


  finishChain() {
    let current = this.head
    let arr = [];
    while (current) {
      arr.push(`( ${current.value} )`)
      // console.log("current value", current.value);
      current = current.next;

    }
    this.head = null;
    this.tail = null;
    this.length = 0;
    // console.log(`${arr.join("~~")}`);
    return `${arr.join("~~")}`
  }

  size() {
    return this.length;
  }

  reverseChain() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;
    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    this.tail = this.head;
    this.head = prevNode;
    return this;
  }
}

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = new LinkedList();


// chainMaker.addLink(5).addLink(7).addLink(8).addLink(9).addLink(10).removeLink(0).finishChain()

// // chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0).finishChain()
// // console.log(chainMaker);
// console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').addLink(2).removeLink(1).reverseChain().finishChain());
// console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain(), '( 3rd )~~( function () { } )');
// console.log(chainMaker)

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0))
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'))
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2))
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4))

// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(), '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');

// console.log(chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain(), '( NaN )~~( null )~~( true )~~( false )~~( 1.233 )');
// console.log(chainMaker.reverseChain().addLink('ABC').reverseChain().reverseChain().reverseChain().addLink(Infinity).addLink(false).addLink(0).addLink('8.963').removeLink(2).removeLink(1).reverseChain().finishChain(), '( 8.963 )~~( 0 )~~( false )');
// console.log(chainMaker.addLink(null).addLink(false).addLink(22).reverseChain().reverseChain().removeLink(2).reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink('DEF').finishChain(), '( [object Object] )~~( 22 )~~( null )~~( DEF )');
// console.log(chainMaker.addLink(3.14).addLink(1).addLink({ 0: 'first', 1: 'second', 'length': 2 }).removeLink(1).addLink('DEF').addLink({ 0: 'first', 1: 'second', 'length': 2 }).removeLink(1).addLink(true).addLink(false).addLink(333).reverseChain().reverseChain().finishChain(), '( [object Object] )~~( DEF )~~( [object Object] )~~( true )~~( false )~~( 333 )');
// console.log(chainMaker.addLink('ABC').reverseChain().reverseChain().addLink('DEF').removeLink(1).addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(1.233).addLink(1.233).reverseChain().addLink('ABC').finishChain(), '( 1.233 )~~( 1.233 )~~( DEF )~~( [object Object] )~~( ABC )');

module.exports = {
  chainMaker
};
