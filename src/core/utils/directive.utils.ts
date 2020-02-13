class DirectiveModel {
    private _DirectiveContainer: Array<object> = [];

    public get DirectiveContainer() {
        return this._DirectiveContainer;
    }

    public set DirectiveContainer(Directive: object) {
        this._DirectiveContainer.push(Directive);
    }
}

export default new DirectiveModel();