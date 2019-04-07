/**
 * This is the queue Implementation
 * We are using Queue class to develop the queue data structure
 */

 class Node{
     constructor(data){
         this.data = data;
         this.next = null;
     }
 }

 class Queue{
     constructor(){
         this.head = null;
         this.tail = null;
     }
     print(){
         while(this.head !== null){
             console.log(this.head.data)
             this.head = this.head.next;
         }
     }
     enqueue(elem){
        const node = new Node(elem);
        if(!this.head && !this.tail){
            this.head = node;
            this.tail = node;
        }
        let last = this.tail;
        last.next = node;
        this.tail = node;
     }
     dequeue(){
         if(!this.head) return null;
         let node = this.head;
         if(this.head === this.tail){
             this.head = null;
             this.tail = null;
             return node
         }
         this.head = this.head.next;
         return node;
     }
 }

module.exports = Queue
// console.log(q)
