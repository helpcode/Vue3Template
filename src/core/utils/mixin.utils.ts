class MixinModel {
    private _MixinContainer: Array<object> = [];

    public get MixinContainer() {
        return this._MixinContainer;
    }

    public set MixinContainer(Mixin: object) {
        this._MixinContainer.push(Mixin);
    }
}

export default new MixinModel();