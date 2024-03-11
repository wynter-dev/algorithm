export class ListNode<T> {
    val: T;
    next: ListNode<T> | null;

    constructor(val: T, next: ListNode<T> | null = null) {
        this.val = val;
        this.next = next;
    }

    /**
     * make next of this to be `left`
     * @param left 
     */
    beNextOf(left: ListNode<T>) {
        left.next = this;
        return left;
    }

    /**
     * create a `ListNode` from an array
     * @param arr 
     */
    static fromArray<ItemType>(arr: ItemType[]) {
        const nodes = arr.map(item => new ListNode(item));

        return nodes.reduceRight((acc, cur) => {
            return acc.beNextOf(cur);
        });
    }

    /**
     * forEach a `ListNode`
     * @param cb 
     */
    forEach(cb: (item: T, idx: number) => void, idx = 0) {
        cb(this.val, idx);
        // recursive exec this.forEach when this.next is not null 
        this.next && this.next.forEach(cb, idx + 1);
    }
}

function solution(l1: ListNode<number>|null, l2: ListNode<number>|null){
    let Result = new ListNode(0);
    let current1 = l1;
    let current2 = l2;
    let currentResult = Result;
    let curry = 0;
    while(current1 !== null || current2 !== null || curry > 0){
        let temp1 = (current1 === null) ? 0 : current1.val;
        let temp2 = (current2 === null) ? 0 : current2.val;
        let sum = temp1 + temp2 + curry;
        curry = Math.floor(sum/10);
        currentResult.next = new ListNode(sum % 10);
        if(current1 !== null) current1 = current1.next;
        if(current2 !== null) current2 = current2.next;
        currentResult = currentResult.next;
    }

    if(curry > 0) currentResult.next = new ListNode(curry);
    return Result.next;
}

const result = solution(ListNode.fromArray([2,3,4]), ListNode.fromArray([2,3,4]));
result?.forEach((value)=> console.log(value));
