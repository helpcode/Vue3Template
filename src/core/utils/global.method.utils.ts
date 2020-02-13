class GlobalMethod {
    private _GlobalMethod: Array<{new(): void}> = [];

    public get GlobalMethod() {
        return this._GlobalMethod;
    }

    public set GlobalMethod(globalMethod: any) {
        this._GlobalMethod.push(globalMethod);
    }
}

export default new GlobalMethod();