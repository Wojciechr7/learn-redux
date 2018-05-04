export class Names {
    child1;
    child2;
    child3;

    constructor() {
        this.child1 = "Child 1";
        this.child2 = "Child 2";
        this.child3 = "Child 3";
    }

    changeNames() {
        console.log('names changed');
        this.child1 = "Child 1 changed";
        this.child2 = "Child 2 changed";
        this.child3 = "Child 3 changed";
    }


}